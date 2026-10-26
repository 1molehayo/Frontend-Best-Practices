# Tooling

A project has one formatter, one package manager, and one Node major. People can use different editors and different Node installers. The committed files are what keep the output the same.

Copy from `examples/`, then delete the parts this project does not use. Install commands sit above each config.

## Which setup

Read the repository before adding tools.

**Existing project.** Keep the formatter the scripts already run, and keep the Node installer the team already uses. Add the editor settings and the hook for that formatter if they are missing. A second formatter in the same repo will rewrite the same file on save.

**New project.** Follow [Harbor](#example-harbor), unless the product is a Sass codebase. Then use the Sass row below.

| Need | Use |
| --- | --- |
| Styling | Tailwind when utilities live in the template. Sass when the project is hand-written CSS with BEM. One of them per repo. |
| Language | TypeScript for an application more than one person will maintain. JavaScript when the repo is already JavaScript, or the work is a small script. |
| Format and lint | Biome on a new application. Prettier and ESLint when the repo already has them. |
| Sass | Stylelint, on top of either formatter. Tailwind projects with no hand-written CSS skip it. |
| Packages | pnpm. Commit `pnpm-lock.yaml` only. |
| Node installer | mise or nvm. Commit both pin files so either one works. |

## Example: Harbor

Harbor is a fictional booking app. Several people will work on it. The UI is utilities in React. There is no Sass.

| Choice | Why |
| --- | --- |
| TypeScript | The app will be maintained, and types catch the breaks between files. |
| Tailwind | The styles are utilities. There is no BEM stylesheet to keep. |
| Biome | One tool formats, lints, and organizes imports. |
| pnpm | The lockfile and the install command stay the same everywhere. |
| mise and `.nvmrc` | mise pins Node and pnpm. `.nvmrc` is the same Node major for nvm and for GitHub Actions. Each person runs the installer they already have. |
| Editor settings | Whichever editor the person uses, committed for the Biome column. |

Copy these into Harbor:

1. `.editorconfig`
2. `examples/.nvmrc` and `examples/mise.toml`
3. `examples/biome.json`
4. The `engines` and `packageManager` fields below
5. One editor folder: `examples/editors/vscode-biome/`, `examples/editors/zed-biome/`, or the WebStorm steps
6. The Biome scripts and the Biome hook

Skip Stylelint. Skip Prettier, ESLint, and their extensions.

A Sass version of the same app would swap Tailwind for Sass, add Stylelint, and keep Biome for the TypeScript. An older app that already runs Prettier stays on Prettier. Copy `examples/editors/vscode-prettier/` or `examples/editors/zed-prettier/` and leave Biome out.

## New project

1. Copy `.editorconfig`.
2. Pin Node, as in [Node](#node). Install with mise or with nvm.
3. Add `packageManager` and install dependencies with pnpm.
4. Add Biome, or Prettier and ESLint. One of those.
5. Add Stylelint only when the project has Sass.
6. Copy the matching editor settings. Install the recommended extension, and disable the other formatter's extension.
7. Add the matching scripts and the pre-commit hook.

## Existing project

1. Open `package.json` and see which script formats the code.
2. Keep that formatter. Delete the other one's config and dependency if both are installed.
3. Copy the editor settings for the formatter you kept. Format on save has to call that same tool.
4. If Node is unpinned, add the pin files. If it is already pinned, leave the major as it is and write that same major into any pin file that is missing.
5. Add the hook when commits are not already formatted.

## EditorConfig

Two spaces. LF. UTF-8. A final newline. Trim trailing whitespace, except in Markdown, where two spaces are a line break. Every editor here reads this file.

<<< ../.editorconfig{ini}

## Node

The standard is the version. mise and nvm are both fine. Commit the pin, and let each person use the installer they already have.

`package.json` carries the range and the pnpm version:

```json
{
  "engines": {
    "node": ">=24 <25"
  },
  "packageManager": "pnpm@12.15.0"
}
```

Node 24 is the LTS line as of October 2026. Pin the current LTS when a project starts. Check the line on [nodejs.org](https://nodejs.org/en/about/previous-releases).

`.nvmrc` is the major only. nvm reads it (`nvm install` then `nvm use`). mise reads it too. GitHub Actions `setup-node` takes `node-version-file: '.nvmrc'`.

```
24
```

That file is `examples/.nvmrc`.

After nvm has switched to that major, enable Corepack so pnpm comes from `packageManager`:

```bash
corepack enable
```

mise also pins pnpm, so a machine using mise does not need a separate pnpm install. Copy `examples/mise.toml`.

<<< ../examples/mise.toml

```bash
mise install
```

Biome does not format TOML. A project that commits `mise.toml` can add the Even Better TOML extension (`tamasfe.even-better-toml`) in VS Code for that file alone.

Commit `pnpm-lock.yaml` only.

## Biome

`pnpm add -D @biomejs/biome`

Biome formats, lints, and organizes imports. The options match the Prettier config: two spaces, single quotes, semicolons only where the grammar needs them, no trailing commas, line width 80.

<<< ../examples/biome.json

```json
{
  "scripts": {
    "lint": "biome check .",
    "format": "biome check --write ."
  }
}
```

`biome check --write` formats, applies safe fixes, and organizes imports.

Tailwind projects turn on class order. The rule is still in Biome's nursery, and its fix is unsafe, so it stays out of the hook. `biome check` still fails the build when the order is wrong.

```json
{
  "tailwind": {
    "stylesheet": "./src/app.css"
  },
  "linter": {
    "rules": {
      "nursery": {
        "useTailwindSortedClasses": "error"
      }
    }
  }
}
```

Point `stylesheet` at the CSS file that holds the theme. To apply the sort locally: `biome check --write --unsafe`. Read that diff. The flag applies every unsafe fix, not only class order.

## Prettier and ESLint

Use this pair when the repository already has it. Prettier formats. ESLint lints. `pnpm add` lines are the first comment in each file.

<<< ../examples/prettier.config.js

Tailwind projects add the class order plugin:

```js
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 80,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss']
}
```

ESLint 9, flat config. The JSX block covers React hooks and `jsx-a11y`. Remove that block, and its imports, in a package with no React.

<<< ../examples/eslint.config.js

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

## Stylelint

Sass projects only, with either formatter. The config allows BEM names, rejects `!important` and id selectors, and caps nesting at three levels. Declaration order comes from `stylelint-config-recess-order` (position, then box, then text).

<<< ../examples/stylelint.config.js

Add it to the lint script:

```json
{
  "scripts": {
    "lint": "biome check . && stylelint \"**/*.{css,scss}\""
  }
}
```

A Prettier project uses `eslint . && stylelint "**/*.{css,scss}"` instead.

## Editors

Commit the settings for the formatter the project uses. Cursor reads the VS Code files. Install the extension the folder recommends, and disable Prettier or ESLint when the project uses Biome. Two formatters on save will fight over the file.

VS Code files are copied to `.vscode/`. Zed's file is copied to `.zed/settings.json`. Format on save is set per language for Biome, so YAML and Markdown are left to whatever that person uses for those files.

### VS Code

Biome:

<<< ../examples/editors/vscode-biome/extensions.json

<<< ../examples/editors/vscode-biome/settings.json

`source.fixAll.biome` applies safe fixes. `source.organizeImports.biome` sorts imports. Format on save alone does neither.

Prettier and ESLint:

<<< ../examples/editors/vscode-prettier/extensions.json

<<< ../examples/editors/vscode-prettier/settings.json

`source.fixAll.eslint` is the ESLint fix. `source.organizeImports` is the TypeScript language service putting imports in its own order. A Tailwind project also installs Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`). Its class-regex settings belong to that repo, so they are not part of this example.

### Zed

Install Biome from the extensions view (`zed: extensions`, search Biome). Prettier and ESLint come from the project's devDependencies. The `prettier` command has to be on `PATH`, or the external command will not run. `pnpm exec prettier --stdin-filepath` is the substitute when the binary is only in `node_modules`.

Biome. The same block is repeated per language because a global Biome formatter also claims languages Biome does not parse.

<<< ../examples/editors/zed-biome/settings.json

Prettier and ESLint:

<<< ../examples/editors/zed-prettier/settings.json

### WebStorm

WebStorm has no small JSON file for this. The plugin is the Biome plugin from the JetBrains Marketplace, and it also runs in IntelliJ IDEA.

Biome:

1. Install the Biome plugin and restart.
2. Settings, Languages & Frameworks, Biome. Turn on LSP-based code formatting. Leave the CLI path empty so the plugin uses `node_modules/.bin/biome`.
3. Settings, Tools, Actions on Save. Turn on Reformat code for JavaScript, TypeScript, JSON, and CSS.
4. Leave WebStorm's Optimize imports off. It sorts with WebStorm's order. Biome sorts in the hook, with `biome check --write`.
5. Turn off the Prettier plugin's "run on save" for this project.

Prettier and ESLint:

1. Settings, Languages & Frameworks, JavaScript, Prettier. Set the package to the project dependency and turn on run on save.
2. Settings, Languages & Frameworks, JavaScript, Code Quality Tools, ESLint. Set it to Automatic and turn on run `eslint --fix` on save.
3. Settings, Tools, Actions on Save. Turn on Optimize imports for JavaScript and TypeScript.

## Git hooks

Husky 9 runs lint-staged. After `pnpm dlx husky init`, the hook is `.husky/pre-commit`:

```
pnpm exec lint-staged
```

Biome:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,jsonc,css}": "biome check --write --no-errors-on-unmatched"
  }
}
```

Prettier and ESLint:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,css,scss,md}": "prettier --write",
    "*.{js,jsx,ts,tsx}": "eslint --fix"
  }
}
```

Sass projects add a Stylelint line to either block:

```json
"*.{css,scss}": "stylelint --fix"
```

lint-staged stages the files it changes. Do not add a `git add`.

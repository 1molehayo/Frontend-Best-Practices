# Tooling

Formatting is settled by config. The files live in the `examples/` directory of this repository. Copy the ones the project needs, then delete the parts it does not use.

The install command is the first comment in each config.

## Editor

Two spaces. LF. UTF-8. A final newline. Trim trailing whitespace, except in Markdown, where two spaces are a line break.

<<< ../.editorconfig{ini}

## Prettier

Prettier formats JavaScript, TypeScript, and the CSS it understands.

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

## ESLint

ESLint 9, flat config. It covers JavaScript and TypeScript. The JSX block covers React hooks and `jsx-a11y`. Remove that block, and its imports, in a package with no React.

<<< ../examples/eslint.config.js

## Stylelint

Sass projects only. The config allows BEM names, rejects `!important` and id selectors, and caps nesting at three levels. Declaration order comes from `stylelint-config-recess-order` (position, then box, then text), so we do not keep a private property list.

<<< ../examples/stylelint.config.js

Tailwind projects that have no hand-written CSS can skip Stylelint.

## Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

Sass projects add Stylelint to `lint`:

```json
{
  "scripts": {
    "lint": "eslint . && stylelint \"**/*.{css,scss}\""
  }
}
```

## Git hooks

Husky 9 runs lint-staged. After `pnpm dlx husky init`, the hook is `.husky/pre-commit`:

```
pnpm exec lint-staged
```

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,css,scss,md}": "prettier --write",
    "*.{js,jsx,ts,tsx}": "eslint --fix",
    "*.{css,scss}": "stylelint --fix"
  }
}
```

lint-staged stages the files it changes. Do not add a `git add`.

Drop the Stylelint line in a project that does not run Stylelint.

## Node and the package manager

Pin the same Node major in `package.json`, `mise.toml`, and `.nvmrc`.

```json
{
  "engines": {
    "node": ">=24 <25"
  },
  "packageManager": "pnpm@12.15.0"
}
```

The example pins Node 24, the LTS line as of October 2026. Pin the current LTS when you start a project. Check the line on [nodejs.org](https://nodejs.org/en/about/previous-releases).

Copy `examples/mise.toml` into a new project. mise pins Node and pnpm together. Also copy `examples/.nvmrc` (the major only, `24`), because some tools only read that file. GitHub Actions `setup-node` takes it as `node-version-file: '.nvmrc'`. mise reads `.nvmrc` too.

<<< ../examples/mise.toml

pnpm is the package manager. Set `packageManager` to the version Corepack should use, and commit `pnpm-lock.yaml` only.

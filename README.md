# Front-End Coding Standards

Conventions for HTML, CSS, Sass, Tailwind, JavaScript, TypeScript, testing, Git, and tooling. A project should read as if one person wrote it.

Sass or Tailwind, and TypeScript or JavaScript, depending on the project. The rules underneath those choices are KISS and DRY, on the first page of the guide.

## Read the guide

Use Node 24. From this directory, `nvm use` or `mise install` selects it.

```bash
pnpm install
pnpm docs:dev
```

The dev server reloads when a file changes. Open <http://localhost:5173>.

Preview the built site:

```bash
pnpm docs:build
pnpm docs:preview
```

Open <http://localhost:4173>.

## Copy into a project

`examples/` is the shared config: the formatter, the editor settings, and the Node pin. Copy that set into the project.

The [Tooling](https://1molehayo.github.io/Frontend-Best-Practices/tooling) page explains which files a new project takes and which an existing project keeps.

## License

[MIT](LICENSE). The guide and the examples can be copied into a project, including a private one. Keep the copyright line with the copy.

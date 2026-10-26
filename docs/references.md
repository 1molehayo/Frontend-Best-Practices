# References

The rules in this guide are the ones we review against. These are the sources behind them. Use the page for the rule, and the source when you want the longer explanation.

## Testing

- [Testing JavaScript](https://www.testingjavascript.com/). Kent C. Dodds' course. The testing trophy explains static analysis, unit, integration, and end-to-end tests, and how many of each a suite should hold. The table on the [Testing](/testing) page follows that split.
- [Foundations: automated tests](https://foundations.significa.co/guides/automated-tests). Playwright install, configuration, UI mode, codegen, traces, and CI. Setup lives there so this guide does not keep a second copy.
- [Playwright best practices](https://playwright.dev/docs/best-practices). Locators and test isolation. The review rules on the Testing page come from here.

## HTML, CSS, and JavaScript

- [Google HTML/CSS style guide](https://google.github.io/styleguide/htmlcssguide.html). Formatting, semantics, and keeping structure, presentation, and behavior apart.
- [Code Guide](https://codeguide.co/). HTML and CSS conventions written at Twitter. The HTML and CSS pages follow that shape. Twitter does not publish a newer frontend guide.
- [Google TypeScript style guide](https://google.github.io/styleguide/tsguide.html). Google's JavaScript guide is frozen and points here.
- [Airbnb JavaScript style guide](https://github.com/airbnb/javascript). Formatting, naming, and language rules.
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css). The CSS formatting and selector habits this guide still uses.
- [Sass Guidelines](https://sass-guidelin.es/). Architecture and syntax for Sass projects.
- [getbem.com](https://getbem.com/). Block, element, modifier names.
- [Detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files). Why a Tailwind class built from a string is missing in production.

## Git

- [Conventional Commits](https://www.conventionalcommits.org/). The `type(scope): subject` line.
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/). The seven rules the Git page shortens.

## Tooling

- [Biome](https://biomejs.dev/). Formatter, linter, and import sorting for a new application.
- [EditorConfig](https://editorconfig.org/). Indent, line endings, and charset across editors.
- [Node.js previous releases](https://nodejs.org/en/about/previous-releases). Which major is the current LTS when a project starts.

## Still to write

These are standards we link to and do not restate yet. They are the later pages on [Principles](/).

- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/). The accessibility target, 2.2 AA.
- [Fluent accessibility](https://fluent2.microsoft.design/accessibility). Microsoft's published bar for keyboard use, focus, and contrast.
- [Foundations: performance tracking](https://foundations.significa.co/guides/performance-tracking). How we measure. Budgets will point here rather than copy the steps.

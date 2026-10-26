# Principles

Front-End Coding Standards is the convention for how we write frontend code. A project should read as if one person wrote it.

## What this covers

- HTML
- CSS, with Sass or Tailwind as the styling system for a project
- JavaScript and TypeScript
- Testing
- Git
- Tooling that enforces the formatting

Two rules come before the rest of this guide.

**DRY.** If the same logic or the same markup pattern shows up twice, put it in one place and call it from there.

**KISS.** Choose the smallest solution that stays clear. Add a dependency, an abstraction, or a new pattern when the current code needs it.

The other pages are those two rules applied to HTML, CSS, JavaScript, tests, and Git. Formatting is handled by the tools in [Tooling](/tooling), so review time stays on behavior.

## How we work

- Write for the next person who will edit the file.
- Stay with the stack the project already uses. We have Sass projects and Tailwind projects. We have TypeScript projects and JavaScript projects. A second styling system or a second language dialect does not belong in the same codebase.
- Leave minification, prefixes, and unused code removal to the build. Source stays readable.
- Comment the reason when a reader cannot get it from the code. A comment that repeats the line under it should be deleted.

## Files

Lowercase, words separated with hyphens: `order-summary.ts`, `_order-summary.scss`.

React components use PascalCase: `OrderSummary.tsx`.

## Later

The coding-style rules in the public guides are already here. [Google's HTML and CSS guide](https://google.github.io/styleguide/htmlcssguide.html) and [Airbnb's JavaScript guide](https://github.com/airbnb/javascript) are formatting, naming, and language rules. Google's JavaScript guide is frozen and points to TypeScript, which we already choose per project. Twitter does not publish a current frontend guide. The older one from that company is [Code Guide](https://codeguide.co/), and the HTML and CSS pages follow that shape.

What those companies publish beside the style guide, we do not cover yet. Microsoft's [Fluent accessibility guidance](https://fluent2.microsoft.design/accessibility) is the clearest gap: WCAG AA, keyboard use, and contrast, as a standard of its own. The HTML page only has the basics.

Add these as their own short pages when the team needs them:

- Accessibility to WCAG 2.2 AA, including contrast, a full keyboard path, and where focus goes when a dialog closes.
- Browser security: unsanitized HTML, secrets in client code, and keeping dependencies current.
- Performance budgets. Keep the measurement steps in the [Foundations performance guide](https://foundations.significa.co/guides/performance-tracking) so this site does not keep a second copy.
- Internationalization, for a product that ships in more than one language.

# Principles

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

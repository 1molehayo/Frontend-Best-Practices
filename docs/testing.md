# Testing

Test behavior a teammate could break without noticing. A test that restates the implementation will fail on a refactor that changed nothing a user can see.

Test branched logic and user flows. A coverage number on its own says little.

## What gets a test

| Layer | Covers | Tool |
| --- | --- | --- |
| Types | Contracts and refactors | `tsc`, in TypeScript projects |
| Unit | Pure logic with branches | Vitest or Jest, whichever the repo already has |
| Component | How a component behaves, in isolation | Testing Library |
| Browser | A user flow through the running app | Playwright |
| Accessibility | Names, labels, and contrast on the UI you ship | `eslint-plugin-jsx-a11y`, and axe when you need a page audit |

Use the runner the repository already has. A new project uses Vitest when the bundler is Vite, and Jest when the repo is already on Jest. Do not add both.

How these layers differ, and how many of each to write, is the testing trophy in [Testing JavaScript](https://www.testingjavascript.com/). Static checks (types and lint) sit under the tests. Component tests, written the way a user drives the UI, carry more of the suite than isolated units. A few browser tests cover the flows that have to work.

## Playwright

Playwright is how we write browser tests. Install, configuration, UI mode, codegen, traces, and CI are documented in the [automated tests guide](https://foundations.significa.co/guides/automated-tests). Follow that guide. The rules below are what review checks.

- Locate elements by role, label, or text: `getByRole`, `getByLabel`, `getByText`. A CSS selector breaks when the markup is restyled.
- Assert with retrying matchers (`toBeVisible`, `toHaveText`, `toHaveValue`). Do not sleep for a fixed time.
- Each test starts from a known state. `beforeEach` is the place for shared setup, such as opening the page.
- Chain and filter locators until you mean one element. A locator aimed at a whole region will pass for the wrong node.
- Keep the config in `playwright.config.ts`.
- On CI, cap retries and workers at 2. A higher retry count hides a flaky test.
- Ignore generated output: `test-results/`, `playwright-report/`, `blob-report/`, `playwright/.cache/`.

```ts
import { expect, test } from '@playwright/test'

test('signs in with valid credentials', async ({ page }) => {
  await page.goto('/login')
  await page.getByLabel('Email').fill('dev@example.com')
  await page.getByLabel('Password').fill('password')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await expect(page.getByRole('heading', { name: 'Account' })).toBeVisible()
})
```

Run the suite before code reaches production. Pull requests are the right default, because the flow breaks while the change is still in review. When the suite gets slow enough to block review, keep a small set on the pull request and run the full browser list on a schedule.

Playwright's own notes on locators and isolation: [Best practices](https://playwright.dev/docs/best-practices).

## Unit tests

Cover the branch that costs money or data if it is wrong. Leave the trivial getter alone.

```ts
import { describe, expect, it } from 'vitest'
import { isLegalAge } from './is-legal-age'

describe('isLegalAge', () => {
  it('accepts the boundary age', () => {
    expect(isLegalAge(18, 18)).toBe(true)
  })

  it('rejects a younger age', () => {
    expect(isLegalAge(17, 18)).toBe(false)
  })
})
```

A Jest repo uses the same `describe` and `expect`. Match the import the repo already uses.

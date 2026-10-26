# JavaScript and TypeScript

A project is TypeScript or JavaScript. Do not add TypeScript one file at a time inside a JavaScript project. Do not add untyped modules to a project that is `strict`.

## Names

The name says what the value is for. Short is good. Cryptic is not.

```ts
const email = getEmail()

function isLegalAge(age: number, legalAge: number) {
  return age >= legalAge
}
```

A function name that describes the current implementation (`incrementerForMainLoop`) will lie after the next edit.

## Modules

Use ES modules. Do not hang state off `window`, and do not leave a binding another script can overwrite.

If two flows build the same object, one function returns it.

```ts
export function getUser() {
  return {
    username: getUserName(),
    email: getEmail()
  }
}

export function createUser() {
  return client.post(getUser())
}

export function loadUser() {
  return client.get(getUser())
}
```

Named exports are the default. A default export is fine for a React file that exports one component.

## Files

React components: `OrderSummary.tsx` (or `.jsx`).

Other modules: `format-price.ts`.

Tests sit next to the file: `format-price.test.ts`.

## Control flow

Return early. A deep nest is usually a missing name.

```ts
function getDiscount(order: Order) {
  if (!order.customer) return 0
  if (!order.customer.isMember) return 0
  return MEMBER_DISCOUNT
}
```

A function does one job. If you can split it into two functions that each have a real name, it was doing two jobs.

## Data

Check data where it enters the app: a form, a response, a URL parameter. After that check, the rest of the code can trust the type.

```ts
function readCount(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error('Expected a finite number')
  }
  return value
}
```

The browser is not a security boundary. Anything it can read, the user can change.

## Language

- `const` unless the binding is reassigned, then `let`.
- `===`.
- `async` / `await` for async work that runs in sequence.
- Optional chaining when it removes a nest, and you are fine with the missing value. If a missing value is a bug, handle it.
- Template strings when you are assembling a string.

## TypeScript

`strict` is on.

- Annotate inputs, and values that cross a module boundary.
- Prefer a specific type. `unknown` is the type for data you have not checked yet. `any` opts out of the check.
- Skip annotations the compiler already infers, unless the annotation is the contract you want to lock.
- Pick `interface` or `type` for the project and stay with it.

In TypeScript, the props type is the contract. Do not also add PropTypes.

## JavaScript

At a boundary, check the value in code. Add a JSDoc annotation when a signature is easy to call wrong and the project is not on TypeScript.

## React

Match the component style already in the repo.

- Props are explicit.
- Extract a child component when the JSX has a second job.
- State lives as close to its use as it can. Lift it when two components need the same state.
- An effect synchronizes React with something outside it.

## Comments

```ts
// The API returns amounts in minor units.
const total = amount / 100
```

A `TODO` names the condition that removes it.

```ts
// TODO: switch to the billing API once IR-308 is deployed.
```

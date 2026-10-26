# Tailwind

Tailwind projects follow the [CSS](/css) page for anything you write by hand. Utilities live in the template. Tokens live in the theme.

## Tokens

Color, type, spacing, and breakpoints come from the theme. An arbitrary value (`p-[13px]`, `text-[#123456]`) is for a one-off measurement that will not be reused. The second time you need it, it goes in the theme.

- Tailwind v4: tokens are `@theme` in CSS.
- Tailwind v3: tokens are `tailwind.config`.

Stay on the version the project already uses. Do not mix the two config styles.

## Repetition

A class list copied across components should become a component, in whatever template language the project uses. That is the DRY rule for Tailwind.

`@apply` is for a class that has to live in CSS, such as a third-party slot or a rich-text style.

## Classes the compiler must see

Tailwind generates a utility only when the full class name appears in a scanned file. A name built by concatenation is invisible, and the style is missing in production.

```html
<div class="{{ isActive ? 'bg-surface' : 'bg-muted' }}"></div>
```

```html
<!-- broken: the compiler never sees bg-surface -->
<div class="bg-{{ color }}"></div>
```

[Source detection](https://tailwindcss.com/docs/detecting-classes-in-source-files) is the reference if a class is missing from the build.

## Hand-written CSS

Class names you still write follow the [CSS](/css) page. State is still `is-open` or `data-state`. Do not style by `id`. Do not add `!important` to win a conflict. Fix the layer or the source order.

In a Tailwind project, add `prettier-plugin-tailwindcss` so class lists stay in one order and reviews do not reshuffle them. The [Tooling](/tooling) page has the line to add.

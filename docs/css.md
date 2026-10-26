# CSS

Rules that apply in both Sass and Tailwind projects. What differs is on the [Sass](/sass) and [Tailwind](/tailwind) pages.

## One system per project

A project is styled with Sass or with Tailwind. Tokens can be CSS variables in either case. Do not add the other system because one component would be faster that way.

## Names

A name describes the component or the role it plays: `button`, `order-summary`, `is-open`.

A name that only describes the current look (`red-text`, `left-col`) will be wrong after the next design change.

`.btn` is fine. A one letter class is not a name.

## Selectors

Style with classes. An `id` is for a label or an anchor.

Do not use `!important`. If a declaration will not land without it, the selector structure is wrong. Fix that.

In CSS you write by hand, nest at most three levels. Past that, the class name should carry the structure.

Shared state uses `is-*` or `data-state`, on purpose, so CSS and JavaScript meet at a name both sides expect: `is-open`, `data-state="open"`.

## Values

- One declaration per line. A semicolon on every declaration, including the last.
- A space after the colon. No space before it.
- Lowercase hex, shortened when the digits allow it: `#fff`.
- Hex for opaque colors. For alpha, use modern `rgb()`: `rgb(0 0 0 / 50%)`.
- No unit on `0`.
- Single quotes around strings in CSS.
- Related declarations stay together, in this order: position, box, text, then everything else. Stylelint checks the order in Sass projects. Do not spend review comments on it.

```css
.order-summary {
  position: relative;
  margin: 0;
  padding: 1rem;
  color: #333;
  line-height: 1.5;
}
```

## Type

`font-size` uses `rem`. `line-height` is unitless, so it scales with the element's own font size.

## Responsive

Write the base styles for the smallest screen. Add `min-width` queries for larger ones.

Breakpoints are few, and they are named once for the project (a Sass token or the Tailwind theme). A component does not invent a new breakpoint.

If something moves, honor `prefers-reduced-motion`.

## Build

Do not write vendor prefixes by hand. The project `browserslist` tells the build which prefixes are still required.

Do not minify source by hand. The bundler minifies, and it drops unused JavaScript exports. Tailwind's own compiler drops utilities that never appear in a template. Those are two different steps. Both belong to the build.

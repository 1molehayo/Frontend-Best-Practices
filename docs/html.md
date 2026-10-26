# HTML

HTML is the structure. Get the element right and a lot of accessibility, and a lot of CSS, gets easier.

## Document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Order summary</title>
  </head>
  <body>
    ...
  </body>
</html>
```

`lang` matches the language of the page. The charset is `UTF-8`.

Stylesheets and scripts do not need a `type`. `text/css` and `text/javascript` are the defaults.

## Formatting

- Double quotes around attribute values, including numbers.
- Lowercase element and attribute names.
- Indent children one level.
- Close every element, including tags the parser would forgive, such as `</li>` and `</body>`.
- Void elements have no trailing slash in HTML: `<img>`, `<br>`, `<input>`, `<hr>`.
- In JSX, Prettier prints those same elements as self-closing: `<img alt="" src={src} />`. Follow the file type you are in.

```html
<img src="logo.png" alt="Foo Corp">
<ul class="order-list">
  <li>First item</li>
  <li>Second item</li>
</ul>
```

## Elements

Use the element that matches the content. A semantic element used for the wrong job is worse than a `div`.

- One `h1`. Lower headings follow in order. Do not skip a level to get a font size.
- A `button` performs an action. An `a` navigates.
- Every form control has a `label`. Required fields say so in the label.
- Data tables use `th` and `caption`. Add `scope` when a header applies to a row or a column and the association is otherwise unclear.
- Reach for `dialog`, `details`, and `a` before building a widget that has to reimplement them.

## Attribute order

1. `src`, `for`, `type`, `href`, `value`
2. `class`
3. `id`, `name`
4. `title`, `alt`
5. `role`, `aria-*`
6. `data-*`

Classes are the reusable hook, so they come before `id`. An `id` is for a label, a form owner, or an in-page link.

Boolean attributes stand alone:

```html
<input type="checkbox" checked disabled>
```

## Behavior in the markup

Keep markup in the template. Large HTML strings inside JavaScript are hard to find and hard to review.

Behavior uses a `data-*` attribute, namespaced to the component. Style stays on classes. Renaming a class must not break the script.

```html
<button type="button" data-nav="toggle">Menu</button>
<div class="nav is-open" data-nav="panel">...</div>
```

A state that both CSS and JavaScript share uses `is-*` or `data-state`:

```html
<div class="accordion is-open" data-state="open">...</div>
```

## Accessibility

Write this with the markup.

- An image that carries information has an `alt` that describes the content. A decorative image has `alt=""`.
- Text belongs in HTML. An image of text needs a reason, and still needs a real text alternative.
- Decorative inline SVG is `aria-hidden="true"`. An SVG that carries information starts with `title`, and the `svg` points at it with `aria-labelledby`.
- Keyboard users need a visible focus style. Use `:focus-visible`. Do not remove an outline unless a replacement is already in the CSS.
- Color is not the only signal for an error or a required field.

Scripts the page can render without go at the end of `body`, or use `defer` on a script in `head`. In an app, the bundler does this. Do not block the first paint.

## Images

An image with information belongs in the markup. A purely decorative image can be a CSS background.

Set `width` and `height` so the layout does not jump when the file loads. Prefer `webp` or `avif` when the pipeline can produce them.

Optimize the file before it is committed. [SVGOMG](https://jakearchibald.github.io/svgomg/) is enough for SVG.

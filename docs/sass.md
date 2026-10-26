# Sass

Sass projects follow the [CSS](/css) page, plus the structure and naming below.

Files are `.scss`. Partials start with `_` and are not compiled on their own.

## Modules

`@import` is deprecated. Use `@use` and `@forward`.

`@use` does not create globals. Each file imports the modules it needs. The entry file only loads partials that emit CSS. It contains no rules.

```scss
// styles/main.scss
@use 'base/reset';
@use 'base/typography';
@use 'components/button';
@use 'layout/header';
@use 'pages/home';
```

```scss
// components/_button.scss
@use '../helpers/tokens' as tokens;

.button {
  padding: tokens.$space-s tokens.$space-m;
  color: tokens.$color-text;
}
```

A folder with several partials can `@forward` them from `_index.scss`, so callers import the folder once.

Load a token module where it is used. Do not copy the variables into each file.

Official reference: [Sass `@use`](https://sass-lang.com/documentation/at-rules/use/).

## Folders

| Folder | Contents |
| --- | --- |
| `base` | Reset, typography, tokens |
| `helpers` | Functions and mixins |
| `vendors` | Third-party CSS |
| `components` | One partial per component |
| `layout` | Header, footer, navigation |
| `pages` | Styles that exist on one page only |
| `themes` | Theme overrides, when the product has themes |

Third-party CSS stays in `vendors`. Use the published package when the library has one.

There is no cost to a small file. A partial you can open and understand beats a long sheet you have to search.

## BEM

```html
<article class="media">
  <img class="media__image" alt="Foo Corp logo" src="logo.png">
  <div class="media__body">
    <h2 class="media__title">Welcome</h2>
  </div>
</article>
```

```scss
.media {
  padding: tokens.$space-m;
}

.media__title {
  margin: 0;
}

.media--featured {
  background: tokens.$color-surface;
}
```

- Block: the component (`.media`).
- Element: a part that only exists inside that block (`.media__title`).
- Modifier: a variant (`.media--featured`).

Do not chain elements (`.media__body__title`). Name the child (`.media__title`), or make it a new block.

Put a second variant on a second class (`media media--featured media--dark`). One modifier per class name.

`@extend` merges selectors in a way that is hard to trace. Use a modifier class. Use a mixin when the pattern needs a parameter.

Reference: [getbem.com](https://getbem.com/).

## Inside a ruleset

Declarations first, then `@media`, then pseudos, then nested selectors. An `@include` sits above the declarations it might override.

```scss
.media {
  @include tokens.surface;

  padding: tokens.$space-m;

  @media (min-width: tokens.$screen-m) {
    padding: tokens.$space-l;
  }

  &:hover {
    background: tokens.$color-surface-hover;
  }

  &::before {
    content: '';
  }
}
```

Pseudo-elements use `::`. Pseudo-classes use `:`.

Stop at three levels of nesting. Stylelint flags a fourth. If you need it, BEM should be doing that work in the class name.

Keep source maps on in development, so a rule in the browser traces back to the partial.

## Comments

The file name is the header. Add a comment for a calculation, a browser exception, or a constraint the next edit could break. Skip comments that restate the selector.

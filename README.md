# Front-End Coding Standards (HTML, CSS & Javascript) For Summitech

The following document outlines a reasonable style guide for CSS and JavaScript development. These guidelines strongly encourage the use of existing, common, sensible patterns. They can be adapted by the staffs as needed to create their own style guide.

## Introduction

This is a document of Best Practices and Code Standards for Front-End Development at Summitech. The Development Team is encouraged to test, discuss, and evolve what is documented here together as best practices change and new ideas are shared. **Please implement and enforce these agreed upon standards in your own builds and in code reviews at all times for all projects.**

> Well-formed markup is made up of part standards and part agreed upon preferences by the development team. Along with consistency, both are important in creating maintainable, readable code for everybody.

**An [.editorconfig](#editor-config) file is included with this documentation to aid in enforcing some of these standards.** A full breakdown of the current `.editorconfig` is provided later in this document.

The Table of Contents below will help jump you to the pertinent section of this Code Standards document:

## Table of Contents

- [Principles of Standardized Code](#principles-of-standardized-code)
  - [Readability and Minification](#readability-and-minification)
  - [Whitespace](#whitespace)
  - [Comments](#comments)
- [HTML](#html)
  - [File Naming and Organization](#html-file-naming-and-organization)
  - [Semantics](#semantics)
  - [Formatting](#formatting)
  - [HTML5 DOCTYPE](#html5-doctype)
  - [Language and Character Encoding](#language-and-character-encoding)
  - [CSS and JavaScript Includes](#css-and-javascript-includes)
  - [Attribute Order](#attribute-order)
  - [Boolean Attributes](#boolean-attributes)
  - [JavaScript-Generated Markup](#javascript-generated-markup)
  - [Accessibility](#accessibility)
  - [Performance](#performance)
- [CSS/SCSS](#css-scss)
  - [File Naming and Organization](#scss-file-naming-and-organization)
  - [Rule Structure](#rule-structure)
  - [Rule/Selector/Property Formatting](#rule-selector-property-formatting)
  - [Property Declaration Order](#property-declaration-order)
  - [Pixels vs. EMs vs. REMs for Typography](#pixels-ems-rems-for-typography)
  - [Comments](#scss-comments)
  - [Class Naming Conventions](#class-naming-conventions)
  - [Block Element Modifier (BEM)](#block-element-modifier-bem)
  - [CSS and JavaScript](#css-and-javascript)
  - [CSS Frameworks](#css-frameworks)
  - [Responsive Designs](#responsive-designs)
  - [Linting](#scss-linting)
- [Javascript](#javascript)
  - [File Naming and Organization](#javascript-file-naming-and-organization)
  - [Comments](#javascript-comments)
  - [Javascript Best Practices](#javascript-best-practices)
  - [Writing Tests](#writing-tests)
  - [Javascript Frameworks](#javascript-frameworks)
    - [React](#react)
    - [React Native](#react-native)
  - [Linting](#javascript-linting)
- [Git](#git)
- [Images](#images)
- [Editor Config](#editor-config)
- [Sources](#sources)
- [Tools](#tools)

<a name="principles-of-standardized-code"></a>

## Principles of Standardized Code

There are several guiding principles with Code Standards. These represent the core concepts of standardized code and why we use this document to guide development best practices.

- Code should be readable and understandable by all members of the team. This includes internal and external developers.
- All code, regardless of the project, should read as if it was developed by a single person regardless of how many individuals actually worked on it.
- The style of writing and implementation of these Code Standards is agreed upon and implemented by the team.
- Assist in developing well-formed, semantically correct, and mostly valid code.
- Aid in the onboarding of new development team members to new and existing projects.

<a name="readability-and-minification"></a>

### Readability and Minification

When developing, readability is preferred over compression. There is no need for a developer to purposefully (manually or automatically) compress HTML or CSS/SCSS, nor obfuscate JavaScript (more details provided in JavaScript Code Standards).

_Automation tools such as [Gulp](https://gulpjs.com/) are used to combine and minify CSS and JavaScript assets as needed. **Verbosity is preferred in original source code.**_

<a name="whitespace"></a>

### Whitespace

- Always be consistent in your use of whitespace using it to improve code readability.
- Use soft tabs with four spaces.

_Our [.editorconfig](#editor-config) file helps with maintaining proper whitespace in different files._

<a name="comments"></a>

### Comments

Your code should be easily readable and self-explanatory, thus removing the need for comments. **Avoid it whenever possible.**

<a name="html"></a>

## HTML

HTML (Hyper Text Markup Language) acts as the Structure or skeleton for which our Presentation (Styles) and Functionality (JavaScript) are built on. This makes it the foundation of the other components of our Front-End. It’s semantics can have a either a positive, or negative, impact on:

- Browser Rendering Speed
- Search Engine Optimization (SEO)
- Accessibility (a11y)
- Validation
- Usability

<a name="html-file-naming-and-organization"></a>

## File Naming and Organization

Filenames should contain lowercase letters and words should be separated with a hyphen. The hyphen word separator (as opposed to an underscore or camelcase) is considered good practice for SEO reasons.

<a name="semantics"></a>

## Semantics

HTML5 provides us with lots of semantic elements aimed to describe precisely the content - take advantage of its rich vocabulary. Make sure you understand the semantics of the elements you're using.

**NOTE: It's worse to use a semantic element in a wrong way than staying neutral.**

> Good developers can write valid HTML markup that is formatted properly and easy to read. Great developers go beyond that and know when to use the appropriate element for the job.

<a name="formatting"></a>

## Formatting

- Attribute values, even numeric attributes, should be quoted. Even though quotes around attributes are optional, always put quotes around attributes for readability. Always use double quotes, never single quotes, on attributes.
- **DO NOT** include a trailing slash in self-closing elements - the HTML5 spec defines this as optional. These self-closing elements include:
  - `<hr>`
  - `<br>`
  - `<input>`
  - `<img>`
- **DO NOT** omit optional closing tags (e.g. `</li>` or `</body>`).
- Element and attribute names should all be lowercase.
- Nested elements should be indented once (four spaces).
- Classes are preferred over IDs when it comes to CSS references to avoid specificity issues. More details on [Class Naming Conventions](#class-naming-conventions) are below.

```html
<!-- bad -->
<body>
  <img src="../path/file" alt="Alternative Text" />
  <ul id="myList">
    <li>
      This is the first part of some sample text before a break. <br />
      More text after the break.
    </li>

    <li>Just another list item in the middle of two others.</li>
    <li>The final list item.</li>
  </ul>

  <hr />
  <form><label>Form Label</label> <input type="text" placeholder="Sample Input" /> <input type="submit" value="Submit" /></form>

  <!-- good -->
  <body>
    <img src="../path/file" alt="Alternative Text" />
    <ul class="my-list">
      <li>
        This is the first part of some sample text before a break. <br />
        More text after the break.
      </li>
      <li>Just another list item in the middle of two others.</li>
      <li>The final list item.</li>
    </ul>
    <hr />
    <form>
      <label>Form Label</label> <input type="text" placeholder="Sample Input" /> <input type="submit" value="Submit" />
    </form>
  </body>
</body>
```

**All HTML code must be valid and well formed.** A validator can often help a developer track down styling or scripting bugs. Valid HTML also increases the likelihood that a page will be displayed correctly in current and future browsers.

_Tools such as [The W3C Markup Validation Service](https://validator.w3.org/) or [PowerMapper’s SortSite](https://www.powermapper.com/products/sortsite/) can be used to test code validation as well as other aspects of development._

<a name="html5-doctype"></a>

### HTML5 DOCTYPE

Enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
</html>
```

<a name="language-and-character-encoding"></a>

### Language and Character Encoding

**From the HTML5 spec (`<html lang="en-us">`):**

> Authors are encouraged to specify a lang attribute on the root html element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use as well as aids translation tools to determine what rules to use.

Quickly and easily ensure proper rendering of your content by declaring an explicit character encoding. When doing so, you may avoid using character entities in your HTML, provided their encoding matches that of the document (generally `<meta charset="UTF-8">`).

```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    ...
  </head>
</html>
```

_**Starting HTML5 markup is included with this documentation (based on [HTML5 Boilerplate](https://html5boilerplate.com/)) with a fully formed and valid skeleton for front-end development.**_

<a name="css-and-javascript-includes"></a>

### CSS and JavaScript Includes

Per the HTML5 spec, typically there is no need to specify a type when including CSS and JavaScript files as `text/css` and `text/javascript` are their respective defaults.

```html
<!-- external CSS -->
<link rel="stylesheet" href="my-styles.css" />

<!-- in-document CSS -->
<style>
  /* ... */
</style>

<!-- javascript -->
<script src="my-javascript.js"></script>
```

<a name="attribute-order"></a>

### Attribute Order

HTML attributes should come in this particular order for easier reading of code.

- `src`, `for`, `type`, `href`, `value`
- `class`
- `id`, `name`
- `title`, `alt`
- `role`, `aria-*`
- `data-*`

```html
<a href="#" class="..." id="..." data-toggle="modal"> Example Link </a>

<input type="text" class="form-control" />

<img src="..." class="..." alt="..." />
```

As far as Identifiable information is concerned, Classes make for great reusable components, so they come first. IDs are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come after Classes.

<a name="boolean-attributes"></a>

### Boolean Attributes

XHTML required you to declare a value for all attributes, but HTML5 has no such requirement for boolean attributes. A list of some of these boolean attributes includes:

- autofocus
- selected
- checked
- disabled
- readonly
- multiple
- required
- novalidate
- formnovalidate

```html
<input type="text" disabled />

<input type="checkbox" value="1" checked />

<select>
  <option value="1" selected>1</option>
</select>
```

The [W3C Spec for Boolean Attributes](https://www.w3.org/TR/html5/infrastructure.html#sec-boolean-attributes) has additional information on these boolean attributes.

<a name="javascript-generated-markup"></a>

### JavaScript-Generated Markup

Writing markup in a JavaScript file makes the content harder to find, harder to edit, and less performant. **Avoid it whenever possible.**

<a name="accessibility"></a>

### Accessibility (a11y)

Basic accessibility principles should be adhered to when writing HTML - it shouldn't be an afterthought. You don't have to be a [WCAG](https://www.w3.org/WAI/intro/wcag) expert and different clients have different requirements for level of support, but **basic accessibility support can have a huge impact.**

- Use `H1` - `H6` to properly order and identify headings.
- In tables, use the `scope` attribute to associate header cells and data cells in data tables and use the `summary` attribute of the table element to give an overview of data tables.
- For forms, always provide a submit button, use `label` elements to associate text labels with form controls, and visually indicate required form controls.
- With image elements, **always** use `alt` attributes. Use an empty `alt` attribute on image elements that Assistive Technology should ignore.
  - Good `alt` attribute text should describe the content of the image as specifically as possible.
  - If an image is used for decorative purposes only, an `alt=""` should be used.
- Text should NEVER be included as part of an image even when using and `alt` attribute to describe it.
- Inline `svg` elements should include `title` and, as needed, `desc` elements to provide alternative titles and descriptions.
  - The `title` element must be the first child of it's parent element. This provides a human readable name for the SVG content.
  - A `desc` element may be added to describe the SVG. Consider adding `desc` elements to describe complex SVGs such as charts or process maps.
  - If an SVG image is purely decorative, do not include a title or description. Decorative SVG elements should be identified as presentational by adding the ARIA attributes `aria-hidden="true"` and `role="presentation"`.

**For additional information on writing good `alt` attribute text, check out [What is Alt Text (Alternative Text)?](https://moz.com/learn/seo/alt-text) by Moz.**

_Tools such as [PowerMapper’s SortSite](https://www.powermapper.com/products/sortsite/) or [Chrome’s Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) extension can be used to audit and correct basic accessibility issues._

<a name="performance"></a>

### Performance

Unless there's a valid reason for loading your scripts before your content (e.g. [Modernizr](https://modernizr.com/) or certain tracking scripts), don't block the rendering of your page by placing them in the `<head>`. Move as many as possible to the bottom of the markup right above the `</body>` or `async`/`defer` the load.

Individual SVG assets should be optimized using a tool such as [SVGOMG](https://jakearchibald.github.io/svgomg/). Image assets should be processed using a tool like [ImageOptim](https://imageoptim.com/mac). Both of these safely remove - without a noticeable change to the asset - redundant and useless information such as editor metadata, comments, hidden elements, default or non-optimal values which can have a significant impact on file size.

_The default Gulp setup has been configured to combine and minify CSS and JavaScript into as few files as possible, but it can be configured to suit the unique needs of individual projects._

<a name="css-scss"></a>

## CSS/SCSS

Representing the Presentation layer of our Front-End Development, it’s important that our CSS/SCSS is well organized and documented. One of CSS’ best features - cascading - can also be its biggest achilles.

**A [.sass-lint.yml](#scss-linting) file is included with this documentation to aid in enforcing some of these standards.** A full breakdown of the current `.sass-lint.yml` is provided later in this document.

<a name="scss-file-naming-and-organization"></a>

### File Naming and Organization

Filenames should contain lowercase letters and words should be separated with a hyphen.

- Within individual CSS/SCSS files, organize sections of code by component element.
- Maintain a consistent commenting hierarchy for each section of code.
- Use consistent white space to your advantage when separating sections of code for scanning larger documents.

#### Global and Section-Specific SCSS

The top-level SCSS should serve as a “Table of Contents” with no styles directly within it. Keep all styles organized into component parts. When ordering your partials within your “Table of Contents”, the ideal order/grouping is:

- base (contains global styles, such as resets, typography, variables, etc)
- helpers (contains global mixins, functions, helper selectors, etc.)
- components (contains each self-contained component in its own .scss partial)
- layout (contains styling for larger layout components; e.g. nav, header, footer, etc.)
- pages (contains page-specific styling, if necessary)
- themes (contains styling for different themes)
- vendors (contains 3rd-party styles, mixins, etc.)
- main.scss (output file that brings together all of the above parts)

Partials are named `_partial-name.scss` - with a "\_" prefix - to indicate that this file isn't meant to be compiled by itself.
Each folder should have a single .scss partial file that collects the other files in the same directory - such as \_module.scss (my preference) or \_glob.scss

There is no penalty to splitting into many small files. It’s much easier to jump to small specific files and navigate through them than fewer/larger ones.

```css
// base
@import "base/resets";
@import "base/typography";

// helpers
@import "helpers/functions";
@import "helpers/mixins";

// components
@import "components/button";
@import "components/tabs";

// layout
@import "layout/header";
@import "layout/footer";

// pages
@import "pages/home";
@import "pages/contact";

// themes
@import "themes/default";
@import "themes/dark-mode";

// vendors
@import "vendors/bootstrap/bootstrap";
```

Learn more about [SCSS Naming and Organization](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

#### Compile with Source Maps

Source Maps are produced as part of our Gulp build to more easily determine where particular SCSS partial rules are coming from to aid in visual debugging within the browser.

<a name="rule-structure"></a>

### Rule Structure

The overall structure of a SCSS rule should follow the below order:

- **Extends and Includes**
  - Always place `@extend` and `@include` statements on the first lines of a declaration block.
  - Knowing right off the bat that this class inherits another set of rules from elsewhere is good and overriding styles for that inherited set of rules becomes much easier.
- **Regular Styles**
  - Adding our regular styles after `@extend` and `@include` allows us to properly override those properties, if needed.
  - To support a mobile-first cascade, the styles that are defined first represent the "base" or smallest screen look. Media Queries are added after our Regular Styles to build on or modify the "base" look.
- **Pseudo Class’ and Elements**
  - Pseudo Class’ and Pseudo Elements directly relate to the element itself so we nest them first before other selectors.
  - Differentiate between Pseudo Elements and Pseudo Classes by using a double colon versus a single colon, respectively (`my-class::before { … }` versus `my-class:hover { … }`).
- **Nested Selectors**
  - This includes any modifiers and children of the class we’re working within.

```css
.my-module {
  @extend %module;
  @include font-size(16);

  background: #0f0;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    background: #f00;
    text-align: center;
  }

  &:hover {
    background: #0c0;
  }

  &::before {
    display: block;
    content: "";
  }

  > h3 {
    @include transform(rotate(90deg));

    border-bottom: 1px solid #fff;

    @media screen and (min-width: 768px) {
      border-bottom: 0;
      text-transform: uppercase;
    }
  }
}
```

As a rule of thumb, avoid unnecessary nesting in SCSS. **At most, aim for three levels.** If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting). This prevents overly-specific CSS selectors.

<a name="rule-selector-property-formatting"></a>

### Rule/Selector/Property Formatting

CSS/SCSS formatting decisions documented below are in place to ensure that code is: easy to read; easy to clearly comment; minimizes the chance of accidentally introducing errors; and results in useful diffs and blames:

- When grouping selectors, keep each selector to a single line.
- Include one space before the opening brace of declaration blocks for legibility.
- Place closing braces of declaration blocks on a new line.
- Include one space after the `:` for each declaration.
- Each declaration should appear on its own line for more accurate error reporting.
- End all declarations with a semicolon. The last declarations semicolon is optional, but your code is more error prone without it.
- Comma-separated property values should include a space after each comma (e.g., `box-shadow`).
- Don't include spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values. This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
- If you need transparency, use `rgba()`. Otherwise, always use the hexadecimal format.
- Lowercase all hex values (e.g., `#fff`). Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
- Use shorthand hex values where available (e.g., `#fff` instead of `#ffffff`).
- Use single quotes consistently (e.g., `content: '';`).
- Quote attribute values in selectors (e.g., `input[type='text']`). They’re only optional in some cases, and it’s a good practice for consistency.
- Avoid specifying units for zero values (e.g., `margin: 0;` instead of `margin: 0px;`).
- Separate each ruleset by a blank line.
- Don't make values and selectors hard to override. Minimize the use of id's and avoid `!important`.
- For improved readability, wrap all math operations in parentheses with a single space between values, variables, and operators.

```css
.selector-1,
.selector-2,
.selector-3[type="text"] {
  display: block;
  box-shadow: 0 1px 2px #ccc;
  background: #fff;
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  font-family: helvetica, arial, sans-serif;
  color: #333;

  &::before {
    position: absolute;
    padding: 0;
    content: "";
  }
}

.selector-a {
  padding: (10px * 2) 5px;
}

.selector-b,
.selector-c {
  padding: 10px;
}
```

_Adding vendor prefixes for CSS properties is unnecessary since Gulp uses [Autoprefixer](https://github.com/postcss/autoprefixer) to only post-process vendor prefixes based on the declared browser support. The unique browsers supported can be updated on a project basic._

#### Exceptions and Slight Deviations to the Above Syntax Rules

Long, comma-separated property values - such as collections of gradients or shadows - can be arranged across multiple lines in an effort to improve readability and produce more useful diffs.

```css
.selector-1 {
  display: block;
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

In instances where a rule set includes only one declaration it may optionally be placed on a single line. When grouping single line selectors consider removing line breaks for readability and faster editing. Any rule set with multiple declarations should be split to separate lines.

```css
.span1 {
  width: 60px;
}
.span2 {
  width: 140px;
}
.span3 {
  width: 220px;
}
```

<a name="property-declaration-order"></a>

### Property Declaration Order

Related property declarations should be grouped together following the below general order:

- **Box Sizing**
  - `box-sizing`
- **Position**
  - `z-index`
  - `position`
  - `top`
  - `right`
  - `bottom`
  - `left`
- **Display**
  - `display`
- **Flex**
  - `flex`
  - `flex-basis`
  - `flex-direction`
  - `flex-flow`
  - `flex-grow`
  - `flex-shrink`
  - `flex-wrap`
  - `align-content`
  - `align-items`
  - `align-self`
  - `justify-content`
- **Grid**
  - `grid`
  - `grid-area`
  - `grid-template`
  - `grid-template-areas`
  - `grid-template-rows`
  - `grid-template-columns`
  - `grid-column`
  - `grid-column-start`
  - `grid-column-end`
  - `grid-row`
  - `grid-row-start`
  - `grid-row-end`
  - `grid-auto-rows`
  - `grid-auto-columns`
  - `grid-auto-flow`
  - `grid-gap`
  - `grid-row-gap`
  - `grid-column-gap`
- **Order**
  - `order`
- **Columns**
  - `columns`
  - `column-gap`
  - `column-fill`
  - `column-rule`
  - `column-rule-width`
  - `column-rule-style`
  - `column-rule-color`
  - `column-span`
  - `column-count`
  - `column-width`
- **Float**
  - `float`
  - `clear`
- **Margin**
  - `margin`
  - `margin-top`
  - `margin-right`
  - `margin-bottom`
  - `margin-left`
  - `margin-collapse`
  - `margin-top-collapse`
  - `margin-right-collapse`
  - `margin-bottom-collapse`
  - `margin-left-collapse`
- **Outline**
  - `outline`
  - `outline-offset`
  - `outline-width`
  - `outline-style`
  - `outline-color`
- **Box Shadow**
  - `box-shadow`
- **Border Radius**
  - `border-radius`
  - `border-top-right-radius`
  - `border-top-left-radius`
  - `border-bottom-right-radius`
  - `border-bottom-left-radius`
- **Border**
  - `border`
  - `border-top`
  - `border-right`
  - `border-bottom`
  - `border-left`
  - `border-width`
  - `border-top-width`
  - `border-right-width`
  - `border-bottom-width`
  - `border-left-width`
- **Border Style**
  - `border-style`
  - `border-top-style`
  - `border-right-style`
  - `border-bottom-style`
  - `border-left-style`
- **Border Color**
  - `border-color`
  - `border-top-color`
  - `border-right-color`
  - `border-bottom-color`
  - `border-left-color`
- **Border Image**
  - `border-image`
  - `border-image-source`
  - `border-image-width`
  - `border-image-outset`
  - `border-image-repeat`
  - `border-image-slice`
- **Padding**
  - `padding`
  - `padding-top`
  - `padding-right`
  - `padding-bottom`
  - `padding-left`
- **Width**
  - `width`
  - `min-width`
  - `max-width`
- **Height**
  - `height`
  - `min-height`
  - `max-height`
- **Overflow**
  - `overflow`
  - `overflow-x`
  - `overflow-y`
  - `resize`
- **Background**
  - `background`
  - `background-attachment`
  - `background-clip`
  - `background-color`
  - `background-image`
  - `background-repeat`
  - `background-position`
  - `background-size`
- **Cursor and Events**
  - `cursor`
  - `pointer-events`
- **svg**
  - `fill`
  - `stroke`
- **List Style**
  - `list-style`
  - `list-style-type`
  - `list-style-position`
  - `list-style-image`
  - `caption-side`
- **Counters**
  - `counter-reset`
  - `counter-increment`
- **Tables**
  - `table-layout`
  - `border-collapse`
  - `border-spacing`
  - `empty-cells`
- **Visibility**
  - `opacity`
  - `visibility`
- **Vertical Alignment**
  - `vertical-align`
- **Text Alignment and Decoration**
  - `direction`
  - `tab-size`
  - `text-align`
  - `text-align-last`
  - `text-decoration`
  - `text-decoration-color`
  - `text-decoration-line`
  - `text-decoration-style`
  - `text-justify`
  - `text-indent`
  - `text-transform`
  - `text-rendering`
  - `text-shadow`
  - `text-overflow`
- **Text Spacing**
  - `line-height`
  - `letter-spacing`
  - `word-spacing`
  - `white-space`
  - `word-break`
  - `word-wrap`
- **Font**
  - `font`
  - `font-family`
  - `font-size`
  - `font-size-adjust`
  - `font-stretch`
  - `font-weight`
  - `font-smoothing`
  - `osx-font-smoothing`
  - `font-variant`
  - `font-style`
- **Color**
  - `color`
- **Animation**
  - `animation`
  - `animation-name`
  - `animation-duration`
  - `animation-timing-function`
  - `animation-delay`
  - `animation-iteration-count`
  - `animation-direction`
  - `animation-fill-mode`
  - `animation-play-state`
- **Transform**
  - `backface-visibility`
  - `perspective`
  - `perspective-origin`
  - `transform`
  - `transform-origin`
  - `transform-style`
- **Transition**
  - `transition`
  - `transition-delay`
  - `transition-duration`
  - `transition-property`
  - `transition-timing-function`
- **Content**
  - `content`
  - `quotes`
- **Breaks**
  - `page-break-before`
  - `page-break-after`
  - `page-break-inside`
- **Misc**
  - `hyphens`
  - `src`
  - `clip`
  - `filter`
  - `size`
  - `zoom`
  - `appearance`
  - `user-select`
  - `interpolation-mode`
  - `marks`
  - `page`
  - `set-link-source`
  - `unicode-bidi`
  - `speak`

Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement.

Everything else takes place inside the component or without impacting the previous two sections, and thus they come last.

```css
.declaration-order {
  /* positioning */
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* display and box-model */
  display: block;
  float: right;
  margin: 0;
  outline: 1px solid #f00;
  box-shadow: 0 5px 5px #000;
  border-radius: 50%;
  border: 1px solid #999;
  padding: 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
  background-color: #f5f5f5;
  opacity: 1;
  visibility: visible;
  vertical-align: middle;

  /* typography */
  text-align: center;
  text-decoration: underline;
  line-height: 1.5;
  font: normal 13px "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #333;

  /* misc */
  transform: translateX(10px);
  transition: color #f00;
  content: "";
  appearance: none;
}
```

_NOTE: A comprehensive property order breakdown can be viewed in the custom `.sass-lint.yml` file. Properties that are delared out of the order defined in this file will be flagged with a warning during linting._

<a name="pixels-ems-rems-for-typography"></a>

### Pixels vs. EMs vs. REMs for Typography

Use REMs with a pixel fallback for `font-size`, because it offers absolute control over text. Additionally, a unitless `line-height` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the `font-size`.

_`font-size` and `line-height` mixins are available and will generate a REM value with a Pixel fallback._

<a name="scss-comments"></a>

### Comments

Well commented code is extremely important. Take time to describe components, how they work, their limitations, and the way they are constructed. Don't leave others in the team guessing as to the purpose of uncommon or non-obvious code.

- Each SCSS partial should have a clear comment header to define the role of this section of code.
- Place comments on a new line above their subject.
- Keep line-length to a sensible maximum (e.g. 80 columns).
- Make liberal use of comments to break SCSS code into discrete sections.
- Use "sentence case" comments and consistent text indentation.

```css
/*
 * Comment Header
 *
 *****************************************************************************/

/*
 * Detailed Comment Header
 *
 * This is some text the describes, in detail, how the below SCSS works, any
 limitations, and the way it is constructed.
 *
 * 1. Targeted notations can be included as well if inline comments aren't
 sufficient to outline functionality
 *
 *****************************************************************************/

/*
 * Child Comment
 *
 *********************************************************/

/* Single line comment */
```

Pre-formatted comment chunks can be setup within most IDEs and tied to a keyboard shortcut to more easily apply consistent formatting.

<a name="class-naming-conventions"></a>

### Class Naming Conventions

- Avoid excessive and arbitrary shorthand notation. `.btn` is useful for button, but `.s` doesn't mean anything.
- Use meaningful names; use structural or purposeful names over presentational.
- It's also useful to apply many of these same rules when creating SCSS variable names.

<a name="block-element-modifier-bem"></a>

### Block Element Modifier (BEM)

[Block Element Modifier (BEM)](http://getbem.com/) is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.

The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language - exactly what we’re looking for! Using BEM’s proper naming convention will better prepare you for design changes made to your website.

The naming convention follows this pattern:

```css
.block {
  ...;
}
.block__element {
  ...;
}
.block--modifier {
  ...;
}
```

- `.block` represents the higher level of an abstraction or component.
- `.block__element` represents a descendent of `.block` that helps form `.block` as a whole.
- `.block--modifier` represents a different state or version of `.block`.

An analogy/model for how elements are related:

```css
.media {
  ...;
}
.media__img {
  ...;
}
.media__img--rev {
  ...;
}
.media__body {
  ...;
}
```

```html
<div class="media">
  <img src="logo.png" class="media__img media__img--rev" alt="Foo Corp logo" />
  <div class="media__body">
    <h3 class="h2">Welcome to Foo Corp</h3>
    <p class="lede">Foo Corp is the best, seriously!</p>
  </div>
</div>
```

<a name="css-and-javascript"></a>

### CSS and JavaScript

CSS classes or IDs as references for JavaScript functionality should be avoided as much as possible to prevent conflicts where renaming or removing a class or ID name would break JavaScript functionality.

Instead use `data-*` attributes to apply JavaScript functionality to elements and components exclusive of styling applied by classes. This `data-*` attribute should be namespaced to the element or component where you are applying functionality.

If, for instance, you are applying `data-*` attributes to a mobile primary navigation with toggle buttons and flyout panels, you might use a naming convention like:

```
data-nav="container"
data-nav="toggle"
data-subnav="container"
data-subnav="toggle"
```

_Use your best judgement or ask a fellow developer if your namespacing makes sense. TL;DR Naming is hard._

#### State Classes

Use the `.is-*` prefix for state classes that are shared between CSS/SCSS and JavaScript to denote a temporary styling application.

```html
<div class="accordion-tab is-active" data-accordion="true">...</div>
```

<a name="scss-linting"></a>

### Linting

A custom `.sass-lint.yml` file has been setup and included with this documentation to aid in the implementation of these standards. This Linting process runs as a Gulp task - courtesy of the [sass-lint](https://github.com/sasstools/sass-lint) package - when your SCSS is processed. It will provide Warnings and Errors within the console for you to review and correct.

Most items will be flagged as a Warning, but a few items that will generate an Error include:

- Extends before mixins
- Extends before declarations
- Mixins before declarations
- One declaration per line
- Empty line between blocks
- Single line per selector
- No invalid hexs
- No trailing whitespace
- No URL domains
- No URL protocols
- Declarations before nesting
- Quote attributes
- Border zero
- Hex length
- Hex notation
- Quotes
- Zero units
- Space before colon
- Space after colon
- Space before brace
- Space before bang (!)
- Space after bang (!)
- Space between parens
- Space around operator
- Trailing semicolon
- Final newline

**All items (Warnings and Errors) should be addressed to be inline with Front-End Standards defined in this document.**

A full breakdown of all available Rules in the SASS Linter are available with the [Documentation](https://github.com/sasstools/sass-lint/tree/develop/docs/rules).

_NOTE: There are instances where exceptions to these Linting rules are necessary. In those instances, individual file, rule, and declaration exceptions can be added. A breakdown of these exception comments is below:_

**Disable a rule for the entire file**

```css
// sass-lint:disable border-zero
p {
  border: 0; // No lint reported
}
```

**Disable more than 1 rule**

```css
// sass-lint:disable border-zero, quotes
p {
  border: none; // No lint reported
  content: "hello"; // No lint reported
}
```

**Disable a rule for a single line**

```css
p {
  border: 0; // sass-lint:disable-line border-zero
}
```

**Disable all lints within a block (and all contained blocks)**

```css
p {
  // sass-lint:disable-block border-zero
  border: 0; // No result reported
}

a {
  border: 0; // Failing result reported
}
```

**Disable and enable again**

```css
// sass-lint:disable border-zero
p {
  border: 0; // No result reported
}
// sass-lint:enable border-zero

a {
  border: 0; // Failing result reported
}
```

**Disable/enable all linters**

```css
// sass-lint:disable-all
p {
  border: 0; // No result reported
}
// sass-lint:enable-all

a {
  border: 0; // Failing result reported
}
```

<a name="css-frameworks">

## CSS Frameworks

Summitech uses bootstrap as their standard for frontend styles in all project.

<a name="responsive-designs">

## Responsive Designs

**All web designs should be responsive**. This means to adapt a website’s layout for multiple screen resolutions (i.e desktops, tablets and mobile phones).

In summitech we believe in the [mobile first approach](#http://bradfrost.com/blog/post/mobile-first-responsive-web-design/).

Mobile-First Responsive Web Design is a combination of philosophies/strategies, and ultimately boils down to a broader application of good ol’ web best practices. As the digital landscape gets increasingly complex, we need to design experiences that work across the entire spectrum of digital devices.

Mobile First simply highlights the need to prioritize the mobile context when creating user experiences. Starting with mobile first:

- Allows websites to reach more people (77% of the world’s population has a mobile device, 85% of phones sold in 2011 equipped with browser)
- Forces designers to focus on core content and functionality (What do you do when you lose 80% of your screen real estate?)
- Lets designers innovate and take advantage of new technologies (geolocation, touch events and more)

Creating a responsive web design utilizes:

- Fluid grids that ebb and flow with a devices’ screen size
- Flexible images and media that keep content intact on any resolution
- Media queries allowing designs to adapt by establishing dimension breakpoints

You can find more information in [Brad Frost - Mobile First Responsive Web Design](#http://bradfrost.com/blog/post/mobile-first-responsive-web-design/)

<a name="javascript"></a>

## Javascript

Representing the Logic layer of our Front-End Development, it’s important that our Javascript logic is well organized and documented, in alignment with the world standard best practices today.

**A [.eslintrc](#javascript-linting) file is included with this documentation to aid in enforcing some of these standards.** A full breakdown of the current `.eslintrc` is provided later in this document.

<a name="javascript-file-naming-and-organization"></a>

### File Naming and Organization

Filenames should contain lowercase letters and words should be separated with a hyphen.

- Within individual javascript files, organize sections of code by component element.
- Use consistent white space to your advantage when separating sections of code for scanning larger documents.

<a name="javascript-comments"></a>

### Comments

Your code should be easily readable and self-explanatory, thus removing the need for comments. **Avoid it whenever possible.**

Although use of comments should be avoided but comments can be used for reminders or to pass really important information.
If its necessary to use comments you can use the approach in the example below.

```Javascript
// TODO: Change data source when the apis have been integrated
```

<a name="javascript-best-practices"></a>

### Javascript Best Practices

#### 1. Make Variable Names Understandable

Choose easy to understand and short names for variables and functions.
Your code is a story - make your storyline easy to follow!

**Example of bad names**

```Javascript
// bad variable names
var x1, fe2, xbqne;

function incrementerForMainLoopWhichSpansFromTenToTwenty() {
}

function createNewMemberIfAgeOverTwentyOneAndMoonIsFull() {
}
```

**Avoid describing a value with your variable or function name.**

```Javascript
// Might not make sense in some countries:
isOverEighteen()

// Works everywhere:
isLegalAge()
```

#### 2. Avoid Globals Variables

You run the danger of your code being overwritten by any other JavaScript added to the page after yours.
Use closures and the module pattern instead.

**Problem:** all variables are global and can be accessed; access is not contained, anything in the page can overwrite what you do.

```Javascript
var current = null;
var labels = {
   'home':'home',
   'articles':'articles',
   'contact':'contact'
};
function init(){
};
function show(){
   current = 1;
};
function hide(){
   show();
};
```

**Solution:** use module pattern. Keep consistent syntax and mix and match what to make global.

```Javascript
module = function(){
   var current = null;
   var labels = {
      'home':'home',
      'articles':'articles',
      'contact':'contact'
   };
   var init = function(){
   };
   var show = function(){
      current = 1;
   };
   var hide = function(){
      show();
   }
   return{init:init, show:show, current:current}
}();
module.init();
```

#### 3. Stick to a Strict Coding Style

Summitech uses [ESLint Airbnb](http://airbnb.io/javascript/).

#### 4. Use Shortcut Notations

Shortcut notations keep your code snappy and easier to read once you get used to it.

Example 1

```Javascript
// this code
var lunch = new Array();
lunch[0]='Dosa';
lunch[1]='Roti';
lunch[2]='Rice';
lunch[3]='what the heck is this?';

// is same as...
var lunch = [
   'Dosa',
   'Roti',
   'Rice',
   'what the heck is this?'
];
```

Example 2

```Javascript
// this code
var direction;
if(x > 100){
   direction = 1;
} else {
   direction = -1;
}

// is same as...
var direction = (x > 100) ? 1 : -1;
```

#### 5. Modularize

> Keep your code modularized and specialized.

It is tempting and easy to write one function that does everything. However, as you extend the functionality you will find that you do the same things in several functions.

To prevent that, make sure to write smaller, generic helper functions that fulfill one specific task rather than catch-all methods.

At a later stage you can also expose these functions when using the revealing module pattern to create an API to extend the main functionality.

Good code should be easy to build upon without rewriting the core.

#### 6. Avoid Heavy Nesting

Code gets unreadable after a certain level of nesting.

For example

```Javascript
// A really bad idea is to nest loops inside loops as that also means taking care of several iterator variables (i,j,k,l,m...).
function renderProfiles(o){
   var out = document.getElementById('profiles');
   for(var i=0;i<o.members.length;i++){
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(o.members[i].name));
      var nestedul = document.createElement('ul');
      for(var j=0;j<o.members[i].data.length;j++){
         var datali = document.createElement('li');
         datali.appendChild(
            document.createTextNode(
               o.members[i].data[j].label + ' ' +
               o.members[i].data[j].value
            )
         );
         nestedul.appendChild(detali);
      }
      li.appendChild(nestedul);
   }
   out.appendChild(ul);
}

// You can avoid heavy nesting and loops inside loops with specialized tool methods.
function renderProfiles(o){
   var out = document.getElementById('profiles');
   for(var i=0;i<o.members.length;i++){
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data.members[i].name));
      li.appendChild(addMemberData(o.members[i]));
   }
   out.appendChild(ul);
}
function addMemberData(member){
   var ul = document.createElement('ul');
   for(var i=0;i<member.data.length;i++){
      var li = document.createElement('li');
      li.appendChild(
         document.createTextNode(
            member.data[i].label + ' ' +
            member.data[i].value
         )
      );
   }
   ul.appendChild(li);
   return ul;
}
```

#### 7. Don’t Yield to Browser Whims

Instead of relying on flaky browser behavior and hoping it works across the board...

Avoid hacking around and analyze the problem in detail instead.
Most of the time you’ll find the extra functionality you need is because of bad planning of your interface.

#### 8. Don’t Trust Any Data

> Good code does not trust any data that comes in.

- Don’t believe the HTML document, any user can meddle with it for example in Firebug.
- Don’t trust that data reaches your function is of the right format. Test with typeof and then do something with it.
- Don’t expect elements in the DOM to be available. Test for them and that they indeed are what you expect them to be before altering them.
- Never ever use JavaScript to protect something. JavaScript is as easy to crack as it is to code

#### 9. Add Functionality with Javascript Not Content

If you find yourself creating lots and lots of HTML in JavaScript, you might be doing something wrong.

It is not convenient to create using the DOM, it’s flasky to use innerHTML (IE’s Operation Aborted error), and it’s hard to keep track of the quality of the HTML you produce.

If you really have a massive interface that should only be available when JavaScript is turned on, load the interface as a static HTML document via Ajax.

That way you keep maintenance in HTML and allow for customization.

#### 10. Development Code is Not Live Code

Live code is written for machines. Development code is written for humans.

- Collate, minify and optimize your code in a build process.
- Don’t optimize prematurely and punish your fellow developers and those who have to take over from them.
- If we cut down on the time spent coding we have more time to perfect the conversion to machine code.

Learn more about Javascript best practices from, [Javascript best practices Part 1](https://www.thinkful.com/learn/javascript-best-practices-1/) and [Javascript best practices Part 2](https://www.thinkful.com/learn/javascript-best-practices-2/).

### Acronyms Every Summitech Developer Should Know

People love acronyms, acronyms are dedicated to reducing, simplifying and thinking twice about what we’re adding, and for a good reason, as developers we tend to complicate things surprisingly often.
We believe the following acronyms are very useful in building our coding culture as they help buttress most of the best practices

**1. DRY (Don’t Repeat Yourself)**

DRY refers to code writing methodology. DRY usually refers to code duplication. If we write the same logic more than once, we should “DRY up our code.”
A common way to DRY up code is to wrap our duplicated logic with a function and replace all places it appears with function calls.

```
Good code is DRY code
```

**`Example with code repetition:`**

```Javascript
//flow A
let username = getUserName();
let email = getEmail();
let user = { username, email };
client.post(user).then(/*do stuff*/);

//flow B
let username = getUserName();
let email = getEmail();
let user = { username, email };
client.get(user).then(/*do stuff*/);
```

**`Example with DRY principle:`**

```Javascript
function getUser(){
	return {
		user:getUserName();
		password:getPassword();
	}
}
//flow A
client.post(getUser()).then(/*do stuff*/ );
//flow B
client.get(getUser()).then(/*do stuff*/);
```

**2. KISS (Keep It Simple Stupid)**

Keeping it simple surpsingly hard. Usually when someone tries to over-engineer a soluiton to a problem. For example an Architect suggests creating a Microservice framework for a simple website. The Engineer will then say: “Let’s KISS it and do something simpler”.

Another rule of thumb is whenever you think to yourself “Finally I’m going to use something from my Computer Science degree,” you should probably KISS it.

**3. YAGNI (You Aren’t Gonna Need It)**

A step brother of KISS. Part of keeping it simple is not adding modules, frameworks and dependencies we don’t actually need.

Let’s Imagine you’re working on a simple prototype to show to a client.

You decide to develop it in React because you read a cool blog post about it. You then find yourself comparing flux implementations, and deciding to go with Redux. You also need webpack to process JSX for React, naturally.

You decide to setup a small nodejs server to serve your files. You add Socket.IO just in case you’ll need real-time notifications for whatever reason.

You finish your prototype, which is essentially turned out to be a glorified web page to show a concept for your product manager. You later find out your product manager took a screenshot of the page and put it on a slide.

We didn’t really need React + Redux + Socket.IO for a screenshot now did we?

**4. BDUF (Big Design Up Front)**

This is a relic from the waterfall era before everyone became cool and Agile (F.Y.I. Summitech is cool and agile).

This acronym is here to remind us not get over carried with super complex architecture. We shouldn’t spend 3 months designing our application before even writing the first line of code. Start small and iterate.

BDUF is basically what happens when you don’t KISS and end up with a lot of stuff which YAGNI.

**5. SOC (Separation of Concerns)**

Another something we need to keep reminder ourselves is to do just one thing. As developers we apparently want to “do all the things” with every function, class or object we create.

In Unix, this is referred to in the mantra “do one thing well”. It’s also the first [SOLID Principle](https://thefullstack.xyz/solid-javascript/) – “Single Responsibility Principle.”

Either way, it’s really important to remember that every construct you create will do just one thing.

There’s a reason there are so many different ways of reminding you to do just one thing. A lot of times you believe you’re doing just the one thing, but you then realize you can divide that one thing into several other smaller things.

```
Rule of thumb:
If we can divide one thing into several other smaller things it is no longer considered a one thing.
```

Simple right? Don’t make a thing out of it.

You can check out more on [Acronyms Every Developer Should Know](https://thefullstack.xyz/dry-yagni-kiss-tdd-soc-bdfu), for reference.

<a name="writing-tests"></a>

### Writing Tests

Why bother testing your JavaScript?

- When a user encounters a bug they look like this: 🤬
- Bugs grind work to a halt.
- Bugs cause financial harm.
- Every single time a bug is encountered, user trust erodes.
- Bugs are bad.

And who gets blamed? You, the developer.

You know you should squash bugs before your code is deployed.

In Summitech, tests are expected to be written for react and react-native applications.

Currently Summitech use Jest javascript automation frameworks for integration testing in both react and react-native.

Learn more about [Javascript Automated Testing](https://testingjavascript.com/)

<a name="javascript-frameworks"></a>

### Javascript Frameworks

Summitech currently uses react and react-native as their stack for frontend development

<a name="react"></a>

### React

Use the [React boilerplate](https://github.com/1molehayo/react-boilerplate) as a guide.

<a name="react-native"></a>

### React Native

Use the [React Native boilerplate](https://github.com/1molehayo/react-native-boilerplate) as a guide.

<a name="javascript-linting"></a>

### Linting

**Linting for React and React-native applications**

A custom `.eslintrc` file has been setup and included with this documentation to aid in the implementation of these standards. This Linting process requires the following plugins to run

**Required Plugins**

- eslint-config-airbnb
- eslint-config-airbnb-base
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react

**Add this configuration to your package.json file**

```
"scripts" : {
  "lint": "eslint '**/*.{js,jsx}' --quiet"
}
"eslintConfig": {
    "extends": "react-app"
  },
```

When your react app is processed, it will provide Warnings and Errors within the console for you to review and correct.

Most items will be flagged as a Warning, but a few items that will generate an Error include:

- Disallow trailing commas
- No linebreak
- Do not require require() calls to be placed at top-level module scope
- Do not flag usage of Function.prototype.apply()
- Do not require parentheses around arrow function arguments
- Disallow the use of console in production
- No restricted syntax
- Allow the unary operators
- Enforce return statements in callbacks of array methods
- Enforce the use of variables within the scope they are defined
- Enforce consistent brace style for all control statements
- Require the use of === and !==
- Disallow the use of alert, confirm, and prompt in production
- Disallow else blocks after return statements in if statements
- Disallow empty functions
- Disallow the use of variables before they are defined
- Do not enforce that class methods utilize this
- Allow nested ternary expressions
- Disallow Unused Expressions

**All items (Warnings and Errors) should be addressed to be inline with Front-End Standards defined in this document.**

A full breakdown of all available Rules in the ESLint linter are available with the [Documentation](https://eslint.org/docs/rules/).

<a name="git"></a>

## Git

As products become successful and support the business to the point where they've become mission critical, you'll find the increasing need for tracking changes. This helps in tracking bugs seeing Version Control Systems are meant to help us do exactly that.

### Commit Message Conventions

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on github as well as in various git tools.

### Subject line

Subject line contains succinct description of the change.

#### Allowed `<type>`

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)

#### Allowed `<scope>`

Scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc... or could be context for the commit e.g. user-validation, hospital-configuration.

#### `<subject>` text

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

#### Message body

Do's use this to explain the motivation behind the change and not the actual change. The files already show the actual change.

What you want to do is use this as an opportunity to explain the reason, what it implies and caveats.

#### Message footer

The footer should be used for referencing issues/stories. e.g:

```
Closes #IR-308, #IR-245, #IN-992
```

### The seven rules of a great Git commit message

- Separate subject from body with a blank line
- Limit the subject to 50 characters.
- Do not capitalize the subject line
- Do not end the subject line with a period.
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs how.

These rules are adopted from [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit).

### Examples

```
fix($compile): add unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

This commit implements the tests to make sure when incompatible
features are used, we know!

Closes #IR-392
```

```
chore (processor): add CPU arch filter scheduler support

In a mixed environment of running different CPU architecutres,
one would not want to run an ARM instance on a X86_64 host and
vice versa.

This scheduler filter option will prevent instances running
on a host that it is not intended for.

The libvirt driver queries the guest capabilities of the
host and stores the guest arches in the permitted_instances_types
list in the cpu_info dict of the host.

The Xen equivalent will be done later in another commit.

The arch filter will compare the instance arch against
the permitted_instances_types of a host
and filter out invalid hosts.

Also adds ARM as a valid arch to the filter.

The ArchFilter is not turned on by default.

Closes PC-999
```

Learn more about [Summitech Git PR Conventions](https://gitlab.com/summitech/pr-conventions)

<a name="images"></a>

## Images

An image that has informational value should be a part of the markup and include an appropriate `alt` attribute - more on proper `alt` attribute implementation can be found in [Accessibility](#accessibility).

If an image is purely decorative (it provides no content value other than visual flair to the page) then a `background-image` is appropriate. An inline image can also be used, but with the appropriate ARIA and `role` attributes applied.

`<img src="../path/to/image/file.jpg" alt="" aria-hidden="true" role="presentation"`

These attributes should also be applied when defining an inline SVG icon that is used for presentational purposes only. [Learn More about SVG Accessibility](#accessibility).

```
<svg class="u-icon-search-dims" aria-hidden="true" role="presentation">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
</svg>
```

These attributes cascade down the tree, so any markup that might appear within the container where they are declared will also be considered not for screen reader use.

<a name="editor-config"></a>

## Editor Config

An EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. This will help avoid common code inconsistencies and dirty diffs due to differences in editor formatting.

A few items pre-set in the `.editorconfig` file:

- `root = true`
  - Says that this file represents the top-most .editorconfig file and settings here should be applied.
- `[*]` denotes that the following settings will be applied to all files:
  - `indent_style = space`
    - Use a soft space character for indents.
  - `indent_size = 4`
    - A single indent is equal to 4 spaces.
  - `end_of_line = lf`
    - Unix-style line breaks.
  - `charset = utf-8`
    - Use the UTF-8 character set.
  - `trim_trailing_whitespace = true`
    - Removes any whitespace characters at the end of each line.
  - `insert_final_newline = true`
    - Adds a new, blank line to the end of our file.
- `[*.md]` is specific to files with this extension
  - `trim_trailing_whitespace = false`
    - Do Not remove any trailing whitespace from lines.
- The indent size used in the `package.json` file cannot be changed, so we have specific settings for this file type:
  - `[{.travis.yml,package.json}]`
  - `indent_size = 2`
  - `indent_style = space`

```
# .editorconfig helps developers define and maintain consistent coding
# styles between different editors and IDEs

# for more information about the properties used in this file, please see
# the .editorconfig documentation: http://editorconfig.org/

# this is the top-most .editorconfig file; do not search parent directories
root = true

# applied to all files
[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

# the indent size used in the `package.json` file cannot be changed
# https://github.com/npm/npm/pull/3180#issuecomment-16336516
[{.travis.yml,package.json}]
indent_size = 2
indent_style = space
```

<a name="sources"></a>

## Sources

These Code Standards are the culmination of research into best practices as well as input from the Development team. Specifics are adapted from various sources, including:

- [Front-End Guidelines](https://github.com/bendc/frontend-guidelines)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [Code Guide](http://codeguide.co/)
- [SASS Style Guide](https://css-tricks.com/sass-style-guide/)
- [SASS Guidelines](https://sass-guidelin.es/)
- [Airbnb Style Guide](http://airbnb.io/javascript/)
- [Javascript Style Guide](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/en/hoisting.html)
- [Javascript Guidelines](https://eslint.org/docs/rules/)
- [Automated Testing](https://testingjavascript.com/)
- [Javascript Best Practices](https://www.slideshare.net/cheilmann/javascript-best-practices-1041724)
- [Responsive Designs](https://teamtreehouse.com/library/using-a-mobile-first-approach)

<a name="tools"></a>

## Tools

### [CSScomb](https://github.com/csscomb/csscomb.js)

Will fix code to adhere to a predefined configuration file. The .csscomb file in this repository is set to fix scss to adhere to sass-lint settings.

![image](https://user-images.githubusercontent.com/3884266/59288379-a88bae00-8c41-11e9-9732-5e5a20e9ea05.png)

#### Usage

1. Copy .csscomb file from this repo in the root of your project.
2. Install the CSScomb plugin to your IDE (see links below)
3. Follow instructions from the plugin to configure the plugin.

#### IDE Plugins

- [Atom CSScomb plugin](https://atom.io/packages/atom-css-comb)
- [VS Code CSScomb plugin](https://github.com/mrmlnc/vscode-csscomb)
- [Github Repo](https://github.com/csscomb/csscomb.js)

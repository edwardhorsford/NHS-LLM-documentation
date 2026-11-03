---
applyTo: "**/*.njk, **/*.html, **/*.scss"
---

# NHS Frontend guide

How to use NHS Frontend (the `nhsuk-frontend` package) components and write custom styles alongside them. Describes NHS Frontend version 10.7, which renamed many macro options and most of the Sass API: older names from training data are often wrong.

Examples use syntax added in version 10.6.1. On older versions labels, legends and other text can silently go missing, with no error, so check the `nhsuk-frontend` version in `package.json`. If it is older, upgrade it, or use objects with `text` and `isPageHeading: true`.

This guide covers conventions. For exact names, use the references:

- **Component reference** (for example `docs/nhs-frontend-component-reference.md`) - every macro with its parameters and examples. Find a component via the table of contents, or search for `## Component name` or `**Macro name:** \`macroName\``.
- **Sass reference** (for example `docs/nhs-frontend-sass-reference.md`) - every mixin, function and variable. Find an item via the table of contents, or search for `### name`.

**Do not guess parameter, mixin, function or variable names.** Look them up in the reference before writing or changing a macro call or stylesheet.

---

## Content

- Follow the [NHS design system](https://service-manual.nhs.uk/design-system) for patterns and content guidance
- Use clear, concise language and British English spelling
- Sentence case for all text and headings
- Hints are short (ideally one sentence) with no full stop, and plain text only. Screen readers read hints via `aria-describedby`, so links in hints are not announced. If a hint needs a link or formatting, put that content in the page body above the form instead, following the [question page guidance](https://service-manual.nhs.uk/design-system/patterns/question-pages#asking-complex-questions-without-using-hint-text)

---

## Using components

### Text vs HTML

Most components accept either `text` or `html`. Prefer `text`, which is escaped. Use `html` only for formatted content such as links, and prefer building it in a `set` or `call` block rather than inline.

```njk
{{ insetText({ text: "You'll need to bring photo ID to your appointment" }) }}
```
Use double quotes for string values in macros and HTML attributes. Nunjucks does not support trailing commas.

### Strings or objects

When an option only needs text, pass a string rather than an object. This works for labels, legends, hints, error messages, headings, captions, descriptions, summaries, and table, summary list and tab content. Use an object when you need another option such as `size`, or for HTML.

```njk
{{ card({
  heading: "Your appointments",
  description: "View or change your upcoming appointments"
}) }}

{{ details({
  summary: "Where can I find my NHS number?",
  text: "It's on any letter the NHS has sent you"
}) }}

{{ table({
  caption: "Appointments",
  head: ["Time", "Clinic"],
  rows: [
    ["11:00", "Leeds"],
    ["11:30", "York"]
  ]
}) }}

{{ summaryList({
  rows: [
    {
      key: "Name",
      value: "Karen Francis",
      actions: [
        {
          href: "#/change-name",
          text: "Change",
          visuallyHiddenText: "name"
        }
      ]
    }
  ]
}) }}
```

Strings are always escaped, even when they come from a `set` block. For HTML use the `html` option: `value: { html: addressHtml }`.

### Options, classes and attributes

Prefer a component's own options over modifier classes, for example `variant: "secondary"` on buttons, `width: 10` on inputs, `small: true` on radios and checkboxes, or `colour: "green"` on tags. The component reference lists them.

Every component also takes `classes` (added to the root element) and `attributes` (an object of extra HTML attributes). Use `classes` for utility classes and your own classes.

```njk
{{ button({
  text: "Save and continue",
  variant: "secondary",
  classes: "nhsuk-u-margin-bottom-4",
  attributes: {
    "data-module": "app-save-tracker"
  }
}) }}
```

### Renamed options

These older options still work but are deprecated. The component reference marks every deprecated option.

- `isPageHeading: true` on labels and legends: use `heading` (see below)
- Card `headingSize` and `headingLevel`: use `heading.size` and `heading.level`
- Details `summaryText`: use `summary`
- Error summary `titleText` and `descriptionText`: use `heading` and `description`
- Panel `titleText`: use `heading`
- Notification banner `titleText`: use `title`
- Table `captionSize`: use `caption.size`
- Task list `item.title`: use `item.heading`
- Checkboxes `exclusive: true`: use `behaviour: "exclusive"`
- Buttons, action links and back links `element`: remove it. Setting `href` gives a link, otherwise you get a button

### Form inputs

All form inputs share the same shape. `label`, `hint` and `errorMessage` are strings, or objects if they need other options. `id` is for the label, `name` is for form submission. Include `errorMessage` only when there is an error.

```njk
{{ input({
  id: "nhs-number",
  name: "nhsNumber",
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: "It's a 10 digit number, for example 485 777 3456",
  errorMessage: "Enter your NHS number" if errors.nhsNumber
}) }}
```

When the input is the only question on the page, make its label (or fieldset legend) the page heading with `heading` and `size: "l"`, as above. This wraps it in an `h1`. Otherwise the page needs its own `h1`, and the label uses `text` with a smaller `size`, or is just a string:

```njk
{{ input({
  id: "full-name",
  name: "fullName",
  label: {
    text: "Full name",
    size: "m"
  }
}) }}

{{ input({
  id: "email",
  name: "email",
  label: "Email address"
}) }}
```

### Groups of radios and checkboxes

Groups need a `fieldset` with a `legend`. A single checkbox (like “I agree”) does not.

```njk
{{ radios({
  name: "contactMethod",
  fieldset: {
    legend: {
      heading: "How would you like to be contacted?",
      size: "l"
    }
  },
  items: [
    {
      value: "Email",
      text: "Email"
    },
    {
      value: "Phone",
      text: "Phone"
    },
    {
      value: "Text message",
      text: "Text message"
    } if supportsText
  ]
}) }}
```

Items in an `items` array can be made conditional inline, as above, with no need to filter the array. Whole components can be conditional the same way: `{{ errorSummary({ ... }) if errors }}`.

---

## Page structure and layout

Pages sit inside a width container and main wrapper, with content in grid rows and columns:

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
        <h1 class="nhsuk-heading-l">Page title</h1>
      </div>
    </div>
  </main>
</div>
```

Grid columns: `nhsuk-grid-column-full`, `-one-half`, `-one-third`, `-two-thirds`, `-one-quarter`, `-three-quarters`. Question pages and body text usually use two thirds.

Use NHS Frontend's typography classes rather than styling headings and text yourself:

- Headings: `nhsuk-heading-xl`, `-l`, `-m`, `-s`, `-xs`, `-xxs`. Heading size is independent of heading level
- Body text: `nhsuk-body-l`, `-m`, `-s`; `nhsuk-lede-text` for an intro paragraph; `nhsuk-caption-xl`, `-l` and `-m` for a caption above a heading
- Lists: `nhsuk-list` with `nhsuk-list--bullet`, `--number`, `--tick`, `--cross`
- Links: `nhsuk-link` with `nhsuk-link--no-visited-state` for navigation links that should not show as visited (the usual choice within a service), `--no-underline`, `--text-colour`, `--reverse`

Common utility classes:

- Spacing: `nhsuk-u-margin-{direction}-{0-9}` and `nhsuk-u-padding-{direction}-{0-9}`, where direction is `top`, `right`, `bottom` or `left` (or omitted for all sides). These are responsive: larger points reduce on mobile. `nhsuk-u-static-margin-*` does not
- Text: `nhsuk-u-font-weight-bold`, `nhsuk-u-font-size-{scale}` (for example `nhsuk-u-font-size-19`), `nhsuk-u-font-code` for codes and sequences such as NHS numbers, `nhsuk-u-secondary-text-colour`, `nhsuk-u-text-align-centre`, `nhsuk-u-nowrap`, `nhsuk-u-reading-width`
- Width: `nhsuk-u-width-full`, `-one-half`, `-one-third`, `-two-thirds`, `-one-quarter`, `-three-quarters`
- Visibility: `nhsuk-u-visually-hidden`, `nhsuk-u-display-none`, `nhsuk-u-display-none-print`

---

## Writing custom Sass

**Custom Sass should be rare.** Try in order: a component as-is, a built-in modifier, a utility class, and only then a new class. Assume NHS Frontend is already loaded into the project's main stylesheet, so its functions, mixins and variables are available in your files.

### Naming

- All NHS Frontend classes use the `nhsuk-` namespace. Use your own namespace, such as `app-`, for custom classes. Never create `nhsuk-` classes and never override `nhsuk-` classes to restyle components
- Follow Block Element Modifier (BEM): `.app-card`, `.app-card__heading`, `.app-card--featured`. Not `.app-card__heading__link`
- Keep selectors flat. Write out each block, element and modifier as its own top-level selector rather than nesting with `&__` or `&--`. Nesting pseudo-classes and pseudo-elements (`&:hover`, `&::before`) is fine
- Style classes, not elements. Not `li {}` or `.app-list li {}`
- Never build selectors dynamically (`.app- { &foo {} }`). Full class names must be searchable
- One file per block, named after it (`_app-card.scss`), loaded from the main stylesheet

### Use NHS Frontend's tokens, not hardcoded values

Never write hex colours, pixel sizes or breakpoint widths. Everything below is in the Sass reference with its full signature.

```scss
.app-highlight {
  @include nhsuk-responsive-margin(4, "bottom");
  @include nhsuk-font(19);
  padding: nhsuk-spacing(3);
  border-left: nhsuk-spacing(1) solid nhsuk-colour("blue");
  background-color: nhsuk-colour("pale-yellow");
  color: $nhsuk-text-colour;

  @include nhsuk-media-query($from: tablet) {
    padding: nhsuk-spacing(4);
  }
}

.app-highlight__link {
  @include nhsuk-link-style-default;
}

.app-highlight__button {
  &:focus {
    @include nhsuk-focused-text;
  }
}
```

- **Colours:** `nhsuk-colour("name")` for palette colours: `blue`, `green`, `aqua-green`, `purple`, `pink`, `red`, `orange`, `warm-yellow` and `yellow`, each with `dark-` and `pale-` shades (for example `dark-blue`, `pale-green`), plus `black`, `white` and `grey-1` to `grey-5`. Prefer the semantic variables where one fits: `$nhsuk-text-colour`, `$nhsuk-secondary-text-colour`, `$nhsuk-link-colour`, `$nhsuk-border-colour`, `$nhsuk-error-colour`, `$nhsuk-focus-colour`. Use a palette shade before deriving a colour with `nhsuk-tint()` or `nhsuk-shade()`
- **Spacing:** `nhsuk-spacing(0-9)` returns a fixed value from the spacing scale. `nhsuk-responsive-margin()` and `nhsuk-responsive-padding()` take the same points but reduce on mobile, and are what NHS Frontend components use for their own outer spacing. They accept several directions: `@include nhsuk-responsive-padding(5, ("left", "right"))`
- **Typography:** `nhsuk-font($size, $weight, $line-height)` sets a responsive size from the scale (14, 16, 19, 22, 26, 36, 48, 64 - the desktop pixel size) plus the font family. `nhsuk-font-size($size)` sets size only. `nhsuk-font-weight-bold` sets the weight
- **Breakpoints:** mobile-first. `nhsuk-media-query($from: tablet)`, `$until:`, with breakpoints `mobile`, `tablet`, `desktop`, `large-desktop`. For `@container` queries or other custom queries, use the `nhsuk-from-breakpoint()` and `nhsuk-until-breakpoint()` functions
- **Print:** use `@media print` directly. The `nhsuk-print-colour` and `nhsuk-print-hide` mixins are deprecated
- **Focus and links:** anything interactive needs the NHS Frontend focus style. Use `nhsuk-focused-text` for inline elements and `nhsuk-focused-box` for block elements. Custom links use `nhsuk-link-style-default` (or `-no-visited-state`, `-reverse`)
- **Deprecated names:** the reference marks deprecated items. Only use `nhsuk-` prefixed mixins and functions. Older unprefixed names like `mq`, `care-card`, `visually-hidden` and `px2em`, and `$color_nhsuk-*` variables, no longer exist or are being removed. The `nhsuk-panel` mixins are replaced by `nhsuk-card`. `nhsuk-care-card` and `nhsuk-heading-label` are also deprecated

### Adding to a component

To vary a component, add a modifier class in your own namespace through `classes` and style that. Do not add styles to the `nhsuk-` class.

```njk
{{ card({
  heading: "Your appointments",
  classes: "app-card--compact"
}) }}
```

```scss
.app-card--compact {
  @include nhsuk-responsive-padding(3);
}
```

---

## JavaScript

Some components (button, character count, checkboxes and radios with conditional content, code, error summary, file upload, header, notification banner, password input, scroll, skip link, sortable and scrolling tables, tabs) need NHS Frontend's JavaScript, which is initialised with `initAll()` from the package. Assume the project already does this. Custom behaviour goes in your own modules, attached with a `data-module` attribute. Pages must still work without JavaScript.

---

## Further reading

- [NHS design system](https://service-manual.nhs.uk/design-system) - components, patterns and content guidance
- [NHS Frontend on GitHub](https://github.com/nhsuk/nhsuk-frontend) - source, [coding standards](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/contributing/coding-standards.md) and [configuration docs](https://github.com/nhsuk/nhsuk-frontend/tree/main/docs/configuration)

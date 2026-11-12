# Panel

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `panel`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the panel. |
| `heading` | object | ✓ | Heading of the panel component. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `heading.size` | string |  | Size of the heading – `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional heading level. Defaults to `1`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `titleText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.text` option. |
| `titleHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.html` option. |
| `titleSize` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.size` option. |
| `titleClasses` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.classes` option. |
| `headingLevel` | integer |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.level` option. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the panel content. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire panel component in a `call` block. |
| `classes` | string |  | Classes to add to the panel. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the panel. |
| `variant` | string |  | Optional variant of panel. You can use only `"interruption"` or empty values with this option. |

## Examples

### default

```njk
{{ panel({
  heading: {
    text: "Booking complete"
  },
  text: "We have sent you a confirmation email"
}) }}
```

### heading

with size M

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    size: "m"
  },
  text: "We have sent you a confirmation email"
}) }}
```

[2 more variants of this example](variants/panel.md#heading)

### interruption

```njk
{{ panel({
  heading: {
    text: "Jodie Brown had a COVID-19 vaccine less than 3 months ago",
    size: "l"
  },
  variant: "interruption",
  html: '<p>They had a COVID-19 vaccine on 25 September 2025.</p>\n<p>For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.</p>\n<div class="nhsuk-button-group">\n  <a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n    Continue anyway\n  </a>\n  \n  <a href="#">Cancel</a>\n</div>'
}) }}
```

### interruption for confirmation to cancel

```njk
{{ panel({
  heading: {
    text: "Confirm you want to cancel your hospital appointment",
    size: "l"
  },
  variant: "interruption",
  html: '<p>You will be able to reschedule your appointment for another time, but this may delay your treatment.</p>\n<p>Cancelling your appointment cannot be undone.</p>\n<div class="nhsuk-button-group">\n  <a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n    Cancel appointment\n  </a>\n  \n  <a href="#">Change my weight</a>\n</div>'
}) }}
```

### interruption for confirmation to continue

```njk
{{ panel({
  heading: {
    text: "Is your weight correct?",
    size: "l"
  },
  variant: "interruption",
  html: '<p>You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.</p>\n<div class="nhsuk-button-group">\n  <a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n    Yes, this is correct\n  </a>\n  \n  <a href="#">Change my weight</a>\n</div>'
}) }}
```

### with heading as string

```njk
{{ panel({
  heading: "Booking complete",
  text: "We have sent you a confirmation email"
}) }}
```

### with heading classes

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    classes: "nhsuk-panel__heading--l"
  },
  text: "We have sent you a confirmation email"
}) }}
```

### with heading level 1

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    level: 1
  },
  text: "We have sent you a confirmation email"
}) }}
```

### with heading level 2

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    level: 2
  },
  text: "We have sent you a confirmation email"
}) }}
```

### with heading level 3

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    level: 3
  },
  text: "We have sent you a confirmation email"
}) }}
```

### with HTML

```njk
{{ panel({
  heading: {
    text: "Booking complete"
  },
  html: "We have sent you a confirmation email"
}) }}
```

### with HTML via call block

```njk
{% call panel({
  heading: {
    text: "Booking complete"
  }
}) -%}
We have sent you a confirmation email
{%- endcall %}
```

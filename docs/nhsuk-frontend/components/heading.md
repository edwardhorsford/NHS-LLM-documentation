# Heading

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `heading`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the heading. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire heading component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `href` | string |  | If set, the heading will become a link. |
| `openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `size` | string |  | Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `sizes` | array |  | Allowed sizes for the heading – Defaults to `["xxs", "xs", "s", "m", "l", "xl"]`. |
| `level` | integer |  | Optional heading level. Defaults to `1`. |
| `className` | string |  | Optional class to use for the heading. Defaults to `"nhsuk-heading"`. |
| `classPrefix` | string |  | Optional class prefix to use for the heading. Defaults to `"nhsuk-heading-"`. |
| `classes` | string |  | Classes to add to the heading. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `element` | string |  | HTML element for the heading component – for example, `"caption"`. Defaults to the `level` option prefixed with `"h"`. |

## Examples

### default

```njk
{{ heading({
  text: "What is your full name?",
  size: "l"
}) }}
```

### size class

```njk
{{ heading({
  text: "What is your full name?",
  classes: "nhsuk-heading-l"
}) }}
```

### size class overriding size option

```njk
{{ heading({
  text: "What is your full name?",
  classes: "nhsuk-heading-l",
  size: "s"
}) }}
```

### text

with size S

```njk
{{ heading({
  text: "What is your full name?",
  size: "s"
}) }}
```

[3 more variants of this example](variants/heading.md#text)

### text and caption

with size S

```njk
{{ heading({
  text: "What is your home address?",
  caption: "About you",
  size: "s"
}) }}
```

[3 more variants of this example](variants/heading.md#text-and-caption)

### text and caption "after"

with size S

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/heading.md#text-and-caption-after)

### text and caption "after" as a paragraph

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "l"
}) }}
```

### text and caption "before"

with size S

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "before"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/heading.md#text-and-caption-before)

### text and caption "before" as a heading

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "before",
    element: "h2"
  },
  size: "l"
}) }}
```

### text and caption "end"

with size S

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "end"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/heading.md#text-and-caption-end)

### text and caption "start"

with size S

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "start"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/heading.md#text-and-caption-start)

### text escaping

```njk
{{ heading({
  text: "What to expect at A&E",
  size: "l"
}) }}
```

### with custom class and size

```njk
{{ heading({
  text: "What is your full name?",
  className: "app-heading",
  size: "s"
}) }}
```

### with custom class and size as modifier

```njk
{{ heading({
  text: "What is your full name?",
  className: "app-heading",
  classPrefix: "app-heading--",
  size: "s"
}) }}
```

### with HTML

```njk
{{ heading({
  html: "What to expect at A&amp;E",
  size: "l"
}) }}
```

### with HTML and caption

```njk
{{ heading({
  html: "What to expect at A&amp;E",
  caption: "Urgent and emergency care services",
  size: "l"
}) }}
```

### with HTML via call block

```njk
{% call heading({
  size: "l"
}) -%}
What to expect at A&amp;E
{%- endcall %}
```

### with HTML via call block and caption "end"

```njk
{% call heading({
  caption: {
    text: "Urgent and emergency care services",
    placement: "end"
  },
  size: "l"
}) -%}
What to expect at A&amp;E
{%- endcall %}
```

### with HTML via call block and caption "start"

```njk
{% call heading({
  caption: {
    text: "Urgent and emergency care services",
    placement: "start"
  },
  size: "l"
}) -%}
What to expect at A&amp;E
{%- endcall %}
```

### with link

```njk
{{ heading({
  text: "Skin colour changes",
  href: "#/result/1",
  size: "l"
}) }}
```

### with link and caption

```njk
{{ heading({
  href: "#/result/1",
  text: "Skin colour changes",
  caption: "A to Z of NHS health writing",
  size: "l"
}) }}
```

### with link opens in a new tab

```njk
{{ heading({
  href: "#/result/1",
  text: "Skin colour changes",
  openInNewTab: true,
  size: "l"
}) }}
```

### without class

```njk
{{ heading({
  text: "What is your full name?",
  className: false
}) }}
```

### with visually hidden text

```njk
{{ heading({
  text: "Home address",
  visuallyHiddenText: "(Karen Francis)",
  size: "l"
}) }}
```

### with visually hidden text and caption

```njk
{{ heading({
  text: "Home address",
  visuallyHiddenText: "(Karen Francis)",
  caption: "About you",
  size: "l"
}) }}
```

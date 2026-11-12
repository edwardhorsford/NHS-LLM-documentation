# Legend

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `legend`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the legend. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire legend component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden suffix added to the legend. |
| `caption` | object |  | Optional caption for the legend. *(accepts nested component params, see [caption](caption.md))* |
| `size` | string |  | Size of the legend – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading` | object |  | Whether the legend also acts as a heading. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the legend heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text to use within the legend as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the legend as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the legend as a heading. |
| `heading.caption` | object |  | Optional caption for the legend as a heading. *(accepts nested component params, see [caption](caption.md))* |
| `heading.size` | string |  | Size of the legend as a heading – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional legend heading level. Defaults to `1`. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the legend heading. |
| `isPageHeading` | boolean |  | **Deprecated in 10.6.1, do not use.** Replaced by the `heading` option. |
| `classes` | string |  | Classes to add to the legend. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the legend. |

## Examples

### default

```njk
{{ legend({
  heading: "What is your address?",
  size: "l"
}) }}
```

### text

with size S

```njk
{{ legend({
  heading: "What is your address?",
  size: "s"
}) }}
```

[3 more variants of this example](variants/legend.md#text)

### text and caption

with size S

```njk
{{ legend({
  text: "What is your home address?",
  caption: "About you",
  size: "s"
}) }}
```

[3 more variants of this example](variants/legend.md#text-and-caption)

### text and caption "after" as a paragraph

with size S

```njk
{{ legend({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/legend.md#text-and-caption-after-as-a-paragraph)

### with heading level 1

```njk
{{ legend({
  text: "What is your address?",
  size: "l",
  heading: {
    level: 1
  }
}) }}
```

### with heading level 2

```njk
{{ legend({
  text: "What is your address?",
  size: "m",
  heading: {
    level: 2
  }
}) }}
```

### with heading level 3

```njk
{{ legend({
  text: "What is your address?",
  size: "s",
  heading: {
    level: 3
  }
}) }}
```

### with heading options only

```njk
{{ legend({
  heading: {
    text: "What is your address?",
    level: 3,
    size: "s"
  }
}) }}
```

### with HTML

```njk
{{ legend({
  html: "What is your address?",
  heading: true,
  size: "l"
}) }}
```

### with HTML via call block

```njk
{% call legend({
  heading: true,
  size: "l"
}) -%}
What is your address?
{%- endcall %}
```

### with HTML via call block, without heading

```njk
{% call legend({
  size: "l"
}) -%}
What is your address?
{%- endcall %}
```

### with id attribute

```njk
{{ legend({
  id: "custom-id",
  heading: "What is your address?",
  size: "l"
}) }}
```

### with id attribute on heading

```njk
{{ legend({
  heading: {
    text: "What is your address?",
    id: "custom-id"
  },
  size: "l"
}) }}
```

### without heading

```njk
{{ legend({
  text: "What is your address?"
}) }}
```

### with size class

```njk
{{ legend({
  heading: "What is your address?",
  classes: "nhsuk-fieldset__legend--l"
}) }}
```

### with size class overriding size option

```njk
{{ legend({
  heading: "What is your address?",
  classes: "nhsuk-fieldset__legend--l",
  size: "s"
}) }}
```

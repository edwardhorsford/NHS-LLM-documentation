# Label

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `label`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the label. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire label component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden suffix added to the label. |
| `caption` | object |  | Optional caption for the label. *(accepts nested component params, see [caption](caption.md))* |
| `for` | string |  | The label `for` attribute, the ID of the input the label is associated with. |
| `heading` | object |  | Whether the label also acts as a heading. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the label heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text to use within the label as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the label as a heading. |
| `heading.caption` | object |  | Optional caption for the label as a heading. *(accepts nested component params, see [caption](caption.md))* |
| `heading.size` | string |  | Size of the label as a heading – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional label heading level. Defaults to `1`. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the label heading. |
| `isPageHeading` | boolean |  | **Deprecated in 10.6.1, do not use.** Replaced by the `heading` option. |
| `size` | string |  | Size of the label – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `classes` | string |  | Classes to add to the label tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |

## Examples

### default

```njk
{{ label({
  heading: "What is your full name?",
  size: "l"
}) }}
```

### text

with size S

```njk
{{ label({
  heading: "What is your full name?",
  size: "s"
}) }}
```

[3 more variants of this example](variants/label.md#text)

### text and caption

with size S

```njk
{{ label({
  text: "What is your full name?",
  caption: "About you",
  size: "s"
}) }}
```

[3 more variants of this example](variants/label.md#text-and-caption)

### text and caption "after" as a paragraph

with size S

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/label.md#text-and-caption-after-as-a-paragraph)

### text and caption "before" as a paragraph

with size S

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "before",
    element: "p"
  },
  size: "s"
}) }}
```

[3 more variants of this example](variants/label.md#text-and-caption-before-as-a-paragraph)

### with heading level 1

```njk
{{ label({
  text: "What is your full name?",
  size: "l",
  heading: {
    level: 1
  }
}) }}
```

### with heading level 2

```njk
{{ label({
  text: "What is your full name?",
  size: "m",
  heading: {
    level: 2
  }
}) }}
```

### with heading level 3

```njk
{{ label({
  text: "What is your full name?",
  size: "s",
  heading: {
    level: 3
  }
}) }}
```

### with heading options only

```njk
{{ label({
  heading: {
    text: "What is your full name?",
    level: 3,
    size: "s"
  }
}) }}
```

### with HTML

```njk
{{ label({
  html: "What is your full name?",
  heading: true,
  size: "l"
}) }}
```

### with HTML via call block

```njk
{% call label({
  heading: true,
  size: "l"
}) -%}
What is your full name?
{%- endcall %}
```

### with HTML via call block, without heading

```njk
{% call label({
  size: "l"
}) -%}
What is your full name?
{%- endcall %}
```

### with id attribute

```njk
{{ label({
  id: "custom-id",
  heading: "What is your full name?",
  size: "l"
}) }}
```

### with id attribute on heading

```njk
{{ label({
  heading: {
    text: "What is your full name?",
    id: "custom-id"
  },
  size: "l"
}) }}
```

### without heading

```njk
{{ label({
  text: "What is your full name?"
}) }}
```

### with size class

```njk
{{ label({
  heading: "What is your full name?",
  classes: "nhsuk-label--l"
}) }}
```

### with size class overriding size option

```njk
{{ label({
  heading: "What is your full name?",
  classes: "nhsuk-label--l",
  size: "s"
}) }}
```

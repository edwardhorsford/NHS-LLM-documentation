# Tag

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `tag`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the tag. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire tag component in a `call` block. |
| `classes` | string |  | Classes to add to the tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |
| `colour` | string |  | Optional colour modifier for the tag – `"white"`, `"grey"`, `"green"`, `"aqua-green"`, `"blue"`, `"purple"`, `"pink"`, `"red"`, `"orange"`, `"warm-yellow"` or `"yellow"`. If set to `false`, remove colour from the tag. |
| `border` | boolean |  | If set to `false`, remove border from the tag. |

## Examples

### default

```njk
{{ tag({
  text: "Active"
}) }}
```

[11 more variants of this example](variants/tag.md#default)

### colour class

```njk
{{ tag({
  text: "Green",
  classes: "nhsuk-tag--green"
}) }}
```

### colour class overriding colour option

```njk
{{ tag({
  text: "Not green",
  colour: "green",
  classes: "nhsuk-tag--red"
}) }}
```

### with HTML

```njk
{{ tag({
  html: "A&amp;E",
  colour: "red"
}) }}
```

### with HTML via call block

```njk
{% call tag({
  colour: "red"
}) -%}
A&amp;E
{%- endcall %}
```

### without border

```njk
{{ tag({
  border: false,
  text: "Active"
}) }}
```

[11 more variants of this example](variants/tag.md#without-border)

### without colour

```njk
{{ tag({
  text: "Completed",
  colour: false
}) }}
```

### with text escaping

```njk
{{ tag({
  text: "A&E",
  colour: "red"
}) }}
```

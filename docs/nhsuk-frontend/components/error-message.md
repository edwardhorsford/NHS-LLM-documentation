# Error message

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `errorMessage`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire error message component in a `call` block. |
| `id` | string |  | The `id` attribute to add to the error message `<span>` tag. |
| `classes` | string |  | Classes to add to the error message `<span>` tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error message `<span>` tag. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the error message. Defaults to `"Error"`. |

## Examples

### default

```njk
{{ errorMessage({
  text: "Enter your full name"
}) }}
```

### with HTML

```njk
{{ errorMessage({
  html: "Postcode must not include &amp; and &lt;"
}) }}
```

### with HTML via call block

```njk
{% call errorMessage() -%}
Postcode must not include &amp; and &lt;
{%- endcall %}
```

### without visually hidden text

```njk
{{ errorMessage({
  text: "There is an error on line 42",
  visuallyHiddenText: ""
}) }}
```

### with text escaping

```njk
{{ errorMessage({
  text: "Postcode must not include & and <"
}) }}
```

### with translations

```njk
{{ errorMessage({
  text: "Rhowch eich enw llawn",
  visuallyHiddenText: "Gwall"
}) }}
```

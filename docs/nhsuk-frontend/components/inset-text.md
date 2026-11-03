# Inset text

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `insetText`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the inset text component. |
| `text` | string | ✓ | Text content to be used within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | HTML content to be used within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `classes` | string |  | Classes to add to the inset text. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the inset text. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the inset text. Defaults to `"Information"`. |

## Examples

### default

```njk
{{ insetText({
  text: "You can report any suspected side effect using the Yellow Card safety scheme"
}) }}
```

### with HTML

```njk
{{ insetText({
  html: '<p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>'
}) }}
```

### with HTML via call block

```njk
{% call insetText() -%}
<p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>
{%- endcall %}
```

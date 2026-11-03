# Hint text

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `hint`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire hint component in a `call` block. |
| `id` | string |  | The `id` attribute to add to the hint. |
| `classes` | string |  | Classes to add to the hint. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hint. |

## Examples

### default

```njk
{{ hint({
  text: "Do not include personal information like your name, date of birth or NHS number"
}) }}
```

### with HTML

```njk
{{ hint({
  html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
}) }}
```

### with HTML via call block

```njk
{% call hint() -%}
This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App
{%- endcall %}
```

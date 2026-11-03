# Back link

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `backLink`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the back link. |
| `text` | string |  | Text to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`. |
| `html` | string |  | HTML to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire back link component in a `call` block. |
| `type` | string |  | Type of back link as a button – `"button"` or `"submit"`. Defaults to `"submit"` unless `href` is provided. |
| `href` | string |  | The back link `href` attribute. If set, the back link will use an `<a>` tag automatically unless `type` is provided. |
| `variant` | string |  | Optional variant of back link. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the back link component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the back link component. |
| `visuallyHiddenText` | string |  | An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component. |
| `element` | string |  | **Deprecated in 10.6.0, do not use.** Configured automatically if `href` is provided. |

## Examples

### default

```njk
{{ backLink({
  text: "Back",
  href: "#"
}) }}
```

[1 more variant of this example](variants/back-link.md#default)

### with HTML

```njk
{{ backLink({
  html: "What to expect at A&amp;E"
}) }}
```

### with HTML via call block

```njk
{% call backLink() -%}
What to expect at A&amp;E
{%- endcall %}
```

### with text escaping

```njk
{{ backLink({
  text: "What to expect at A&E"
}) }}
```

### with visually hidden text

```njk
{{ backLink({
  text: "A&E",
  visuallyHiddenText: "Back to"
}) }}
```

### as a button

```njk
{{ backLink({
  text: "Back",
  type: "submit"
}) }}
```

[1 more variant of this example](variants/back-link.md#as-a-button)

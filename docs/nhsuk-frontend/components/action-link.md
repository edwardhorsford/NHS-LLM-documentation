# Action link

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `actionLink`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the action link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the action link. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the action link. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire action link component in a `call` block. |
| `type` | string |  | Type of action link as a button – `"button"` or `"submit"`. Defaults to `"submit"` unless `href` is provided. |
| `href` | string | ✓ | The action link `href` attribute. If set, the action link will use an `<a>` tag automatically unless `type` is provided. |
| `openInNewWindow` | boolean |  | Optional alias for the `openInNewTab` option. |
| `openInNewTab` | boolean |  | If set to `true`, then the action link will open in a new tab. If `type` is set, this has no effect. |
| `variant` | string |  | Optional variant of action link. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the action link component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the action link component. |
| `element` | string |  | **Deprecated in 10.6.0, do not use.** Configured automatically if `href` is provided. |

## Examples

### default

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  href: "#/find"
}) }}
```

[1 more variant of this example](variants/action-link.md#default)

### opens in a new tab

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  href: "#/find",
  openInNewTab: true
}) }}
```

### with HTML

```njk
{{ actionLink({
  html: 'Start session<br>\n<span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>',
  href: "#/start"
}) }}
```

[1 more variant of this example](variants/action-link.md#with-html)

### with HTML via call block

```njk
{% call actionLink({
  href: "#/start"
}) -%}
Start session<br>
<span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>
{%- endcall %}
```

### as a button

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  type: "submit"
}) }}
```

[1 more variant of this example](variants/action-link.md#as-a-button)

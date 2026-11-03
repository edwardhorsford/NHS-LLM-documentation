# Environment banner

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `environmentBanner`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the environment banner. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the environment banner. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the environment banner. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire environment banner component in a `call` block. |
| `name` | object |  | Environment name. |
| `name.text` | string | ✓ | If `html` is set, this is not required. Text for the environment name. If `html` is provided, the `text` option will be ignored. |
| `name.html` | string | ✓ | If `text` is set, this is not required. HTML for the environment name. If `html` is provided, the `text` option will be ignored. |
| `tag` | object |  | Environment tag. If set to `false`, remove the tag. *(accepts nested component params, see [tag](tag.md))* |
| `containerClasses` | string |  | Classes to add to the environment banner container, useful if you want to make the environment banner fixed width. |
| `classes` | string |  | Classes to add to the environment banner. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the environment banner. |
| `colour` | string |  | Optional colour modifier for the tag – `"white"`, `"grey"`, `"green"`, `"aqua-green"`, `"blue"`, `"purple"`, `"pink"`, `"red"`, `"orange"`, `"warm-yellow"` or `"yellow"`. |

## Examples

### default

```njk
{{ environmentBanner({
  tag: "Default"
}) }}
```

[11 more variants of this example](variants/environment-banner.md#default)

### with HTML

```njk
{{ environmentBanner({
  tag: {
    text: "Custom",
    colour: "red"
  },
  html: 'This is a %{name} environment for <a class="nhsuk-link nhsuk-link--reverse" href="https://github.com/nhsuk/nhsuk-frontend/pulls">pull request #1234</a>'
}) }}
```

### with HTML via call block

```njk
{% call environmentBanner({
  tag: {
    text: "Custom",
    colour: "red"
  }
}) -%}
This is a %{name} environment for <a class="nhsuk-link nhsuk-link--reverse" href="https://github.com/nhsuk/nhsuk-frontend/pulls">pull request #1234</a>
{%- endcall %}
```

### without tag

```njk
{{ environmentBanner({
  tag: false
}) }}
```

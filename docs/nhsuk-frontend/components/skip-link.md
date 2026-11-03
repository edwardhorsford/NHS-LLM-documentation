# Skip link

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `skipLink`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the skip link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire skip link component in a `call` block. |
| `href` | string |  | The skip link `href` attribute. Defaults to `"#maincontent"`. |
| `classes` | string |  | Classes to add to the skip link. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the skip link. |

## Examples

### default

```njk
{{ skipLink({
  href: "#maincontent",
  text: "Skip to main content"
}) }}
```

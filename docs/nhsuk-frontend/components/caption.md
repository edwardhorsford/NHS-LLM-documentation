# Caption

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `caption`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the caption. |
| `element` | string |  | HTML element for the caption – for example, `"span"`, `"p"`, `"h2"` or `"h3"`. Defaults to `"span"`. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the caption. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the caption. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire caption component in a `call` block. |
| `placement` | string | ✓ | Placement of the caption relative to the heading – `"before"`, `"after"`, `"start"` or `"end"`. |
| `size` | string |  | Size of the caption – `"m"`, `"l"`, `"xl"` or `"xxl"`. |
| `classes` | string |  | Classes to add to the caption. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the caption. |

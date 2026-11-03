# Visually hidden

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `visuallyHidden`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the visually hidden component. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the visually hidden component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the visually hidden component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire visually hidden component in a `call` block. |
| `classes` | string |  | Classes to add to the visually hidden component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the visually hidden component. |
| `element` | string |  | HTML element for the visually hidden component – for example, `"span"`, `"p"`, `"h2"` or `"h3"`. Defaults to `"span"`. |
| `slots` | object |  | Specified points for injecting custom content relative to the visually hidden component. |
| `slots.before` | object |  | Custom content injected before the visually hidden component. |
| `slots.before.text` | string | ✓ | Custom text injected before the visually hidden component. |
| `slots.before.html` | string | ✓ | Custom HTML injected before the visually hidden component. |
| `slots.start` | object |  | Custom content injected at the start, within the visually hidden component. |
| `slots.start.text` | string | ✓ | Custom text injected at the start, within the visually hidden component. |
| `slots.start.html` | string | ✓ | Custom HTML injected at the start, within the visually hidden component. |
| `slots.end` | object |  | Custom content injected at the end, within the visually hidden component. |
| `slots.end.text` | string | ✓ | Custom text injected at the end, within the visually hidden component. |
| `slots.end.html` | string | ✓ | Custom HTML injected at the end, within the visually hidden component. |
| `slots.after` | object |  | Custom content injected after the visually hidden component. |
| `slots.after.text` | string | ✓ | Custom text injected after the visually hidden component. |
| `slots.after.html` | string | ✓ | Custom HTML injected after the visually hidden component. |

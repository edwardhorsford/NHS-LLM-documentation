# Scroll

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `scroll`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The `id` to add to the scroll component. |
| `labelledBy` | string |  | One or more element IDs to add to the scrolling content `aria-labelledby` attribute, used to provide accessible names for screenreader users. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the scrolling content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the scrolling content. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire scroll component in a `call` block. |
| `variant` | string |  | Optional variant of scroll. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the scroll component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the scroll component. |

## Examples

### default

```njk
{{ scroll({
  text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
}) }}
```

### with HTML

```njk
{{ scroll({
  html: '<h1 class="nhsuk-heading-m" id="example-heading">Example heading</h1>\n<p class="nhsuk-body">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n<p class="nhsuk-body">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>\n<p class="nhsuk-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Bibendum commodo ullamcorper vulputate. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>',
  labelledBy: "example-heading"
}) }}
```

### with HTML via call block

```njk
{% call scroll({
  labelledBy: "example-heading"
}) -%}
<h1 class="nhsuk-heading-m" id="example-heading">Example heading</h1>
  <p class="nhsuk-body">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  <p class="nhsuk-body">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
  <p class="nhsuk-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Bibendum commodo ullamcorper vulputate. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>
{%- endcall %}
```

# Fieldset

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `fieldset`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the fieldset. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `legend` | object |  | The legend for the fieldset component. *(accepts nested component params, see [legend](legend.md))* |
| `classes` | string |  | Classes to add to the fieldset container. |
| `role` | string |  | Optional ARIA `role` attribute. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the fieldset container. |
| `html` | string |  | HTML to use within the fieldset element. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire fieldset component in a `call` block. |

## Examples

### default

```njk
{{ fieldset({
  legend: {
    heading: "What is your address?",
    size: "l"
  }
}) }}
```

### with HTML

```njk
{{ fieldset({
  legend: {
    caption: "About you",
    heading: "What is your address?",
    size: "l"
  },
  html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-line1">\n    Address line 1\n  </label>\n  <input class="nhsuk-input" id="address-line1" name="address-line1" type="text" autocomplete="address-line1">\n</div>\n\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-line2">\n    Address line 2 (optional)\n  </label>\n  <input class="nhsuk-input" id="address-line2" name="address-line2" type="text" autocomplete="address-line2">\n</div>\n\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-town">\n    Town or city\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="address-town" name="address-town" type="text" autocomplete="address-level2">\n</div>\n\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-postcode">\n    Postcode\n  </label>\n  <input class="nhsuk-input nhsuk-input--width-10" id="address-postcode" name="address-postcode" type="text" autocomplete="postal-code">\n</div>\n'
}) }}
```

### with HTML via call block

```njk
{% call fieldset({
  legend: {
    caption: "About you",
    heading: "What is your address?",
    size: "l"
  }
}) -%}
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-line1">
    Address line 1
  </label>
  <input class="nhsuk-input" id="address-line1" name="address-line1" type="text" autocomplete="address-line1">
</div>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-line2">
    Address line 2 (optional)
  </label>
  <input class="nhsuk-input" id="address-line2" name="address-line2" type="text" autocomplete="address-line2">
</div>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-town">
    Town or city
  </label>
  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="address-town" name="address-town" type="text" autocomplete="address-level2">
</div>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-postcode">
    Postcode
  </label>
  <input class="nhsuk-input nhsuk-input--width-10" id="address-postcode" name="address-postcode" type="text" autocomplete="postal-code">
</div>

{%- endcall %}
```

### without legend heading

```njk
{{ fieldset({
  legend: "What is your address?"
}) }}
```

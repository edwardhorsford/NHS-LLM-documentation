# Search input

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `searchInput`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `type` | string |  | Type of input control, for example, an email input control. Defaults to `"search"`. |
| `inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the search input component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Can be used to add a hint to a search input component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the search input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `prefix` | object |  | Can be used to add a prefix to the search input component. |
| `prefix.text` | string | ✓ | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | ✓ | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string |  | Classes to add to the prefix. |
| `prefix.attributes` | object |  | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object |  | Can be used to add a suffix to the search input component. |
| `suffix.text` | string | ✓ | If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.classes` | string |  | Classes to add to the suffix element. |
| `suffix.attributes` | object |  | HTML attributes (for example data attributes) to add to the suffix element. |
| `code` | boolean |  | If set to `true`, use a monospace font for codes or sequences. |
| `width` | integer |  | Optional fixed width for the search input component – `2`, `3`, `4`, `5`, `10`, `20` or `30`. |
| `large` | boolean |  | If set to `true`, larger input size will be used. |
| `formGroup` | object |  | Additional options for the form group containing the search input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the search input component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the search input component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the input. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. Default is `"off"`. |
| `placeholder` | string |  | Attribute to provide placeholder text for the search input. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the search input. |
| `autocapitalize` | string |  | Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object |  | Additional options for the wrapping element containing the search input component. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |
| `button` | object |  | Optional object allowing customisation of the search button. *(accepts nested component params, see [button](button.md))* |
| `button.variant` | string |  | Optional variant of search button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`. |
| `button.classes` | string |  | Classes to add to the search button. |
| `button.ariaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when only an icon is used. |
| `button.icon` | object |  | Can be used to add an icon to the search button. |
| `button.icon.name` | string | ✓ | Icon name for the button – for example, `"search"`, `"arrow-right"`, `"plus"` or `"minus"`. |
| `button.icon.html` | string | ✓ | HTML to use for the icon, as an alternative to the `name` option. If `html` is provided, the `name` option will be ignored. |
| `button.icon.placement` | string | ✓ | Placement of the icon within the button – `"start"` or `"end"`. |

## Examples

### default

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  name: "example",
  width: 20
}) }}
```

### disabled

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  name: "example",
  disabled: true
}) }}
```

### disabled button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  name: "example",
  button: {
    disabled: true
  }
}) }}
```

### disabled with enabled button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  name: "example",
  disabled: true,
  button: {
    disabled: false
  }
}) }}
```

### large

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "l"
  },
  name: "example",
  large: true,
  width: 30
}) }}
```

### large with before and after input content

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "l"
  },
  name: "example",
  large: true,
  width: 30,
  formGroup: {
    beforeInput: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    afterInput: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### large with brand button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "l"
  },
  button: {
    variant: "brand"
  },
  name: "example",
  large: true,
  width: 30
}) }}
```

### large with prefix

```njk
{{ searchInput({
  label: {
    heading: "Code lookup",
    size: "m"
  },
  prefix: {
    text: "SNOMED"
  },
  id: "with-prefix",
  name: "example",
  value: "160245001",
  large: true,
  width: 10,
  code: true,
  button: {
    icon: "arrow-right",
    variant: "brand"
  }
}) }}
```

### with alternative icon

```njk
{{ searchInput({
  label: {
    heading: "Search by postcode",
    size: "m"
  },
  button: {
    icon: "arrow-right"
  },
  name: "example",
  width: 10
}) }}
```

### with before and after input content

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  name: "example",
  width: 20,
  formGroup: {
    beforeInput: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    afterInput: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### with brand button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    variant: "brand"
  },
  name: "example",
  width: 20
}) }}
```

### with brand button text

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    text: "Search",
    variant: "brand"
  },
  name: "example",
  width: 20
}) }}
```

### with brand button text only

```njk
{{ searchInput({
  label: {
    heading: "Product order number",
    size: "m"
  },
  button: {
    icon: false,
    text: "Find",
    variant: "brand"
  },
  name: "example",
  width: 20
}) }}
```

### with error message

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### with error message and hint

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### with error message and hint as strings

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: "This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App",
  errorMessage: "Enter NHS number",
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### with error message and hint, without heading

```njk
{{ searchInput({
  label: {
    text: "Search by NHS number"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### with error message, without heading

```njk
{{ searchInput({
  label: {
    text: "Search by NHS number"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### with error only

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  errorMessage: true,
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### with hidden label

```njk
{{ searchInput({
  label: {
    text: "Search by NHS number",
    classes: "nhsuk-u-visually-hidden"
  },
  name: "example",
  width: 20
}) }}
```

### with hint

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  id: "with-hint",
  name: "example",
  width: 20
}) }}
```

### with hint and value

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

### without button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: false,
  name: "example",
  width: 20
}) }}
```

### without heading

```njk
{{ searchInput({
  label: "Search by NHS number",
  name: "example",
  width: 20
}) }}
```

### with prefix

```njk
{{ searchInput({
  label: {
    heading: "Code lookup",
    size: "m"
  },
  prefix: {
    text: "SNOMED"
  },
  id: "with-prefix",
  name: "example",
  value: "160245001",
  width: 10,
  code: true,
  button: {
    icon: "arrow-right",
    variant: "brand"
  }
}) }}
```

### with prefix and error message

```njk
{{ searchInput({
  label: {
    heading: "Code lookup",
    size: "m"
  },
  prefix: {
    text: "SNOMED"
  },
  errorMessage: {
    text: "Enter a SNOMED code"
  },
  id: "with-prefix",
  name: "example",
  width: 10,
  code: true,
  button: {
    icon: "arrow-right",
    variant: "brand"
  }
}) }}
```

### with secondary button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    variant: "secondary"
  },
  name: "example",
  width: 20
}) }}
```

### with secondary button text

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    text: "Search",
    variant: "secondary"
  },
  name: "example",
  width: 20
}) }}
```

### with secondary button text only

```njk
{{ searchInput({
  label: {
    heading: "Product order number",
    size: "m"
  },
  button: {
    icon: false,
    text: "Find",
    variant: "secondary"
  },
  name: "example",
  width: 20
}) }}
```

# Input

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `input`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `type` | string |  | Type of input control, for example, an email input control. Defaults to `"text"`. |
| `inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the text input component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Can be used to add a hint to a text input component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `prefix` | object |  | Can be used to add a prefix to the text input component. |
| `prefix.text` | string | ✓ | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | ✓ | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string |  | Classes to add to the prefix. |
| `prefix.attributes` | object |  | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object |  | Can be used to add a suffix to the text input component. |
| `suffix.text` | string | ✓ | If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.classes` | string |  | Classes to add to the suffix element. |
| `suffix.attributes` | object |  | HTML attributes (for example data attributes) to add to the suffix element. |
| `code` | boolean |  | If set to `true`, use a monospace font for codes or sequences. |
| `width` | integer |  | Optional fixed width for the text input component – `2`, `3`, `4`, `5`, `10`, `20` or `30`. |
| `large` | boolean |  | If set to `true`, larger input size will be used. |
| `formGroup` | object |  | Additional options for the form group containing the text input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the text input component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the input. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `pattern` | string |  | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `placeholder` | string |  | Attribute to provide placeholder text for the input. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the input. |
| `autocapitalize` | string |  | Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object |  | If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |

## Examples

### default

```njk
{{ input({
  label: {
    heading: "What is your full name?",
    size: "l"
  },
  name: "example"
}) }}
```

### disabled

```njk
{{ input({
  label: {
    heading: "What is your full name?",
    size: "l"
  },
  name: "example",
  disabled: true
}) }}
```

### label

with size S

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "s"
  },
  id: "custom-size",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

[3 more variants of this example](variants/input.md#label)

### width

with 2 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "2 character width"
  },
  width: 2
}) }}
```

[6 more variants of this example](variants/input.md#width)

### width class

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "input-width",
  name: "example",
  classes: "nhsuk-input--width-10"
}) }}
```

### width class overriding width option

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "input-width",
  name: "example",
  classes: "nhsuk-input--width-10",
  width: 30
}) }}
```

### with autocomplete attribute

```njk
{{ input({
  label: {
    heading: "Enter a full postcode in England"
  },
  hint: {
    text: "For example, LS1 1AB"
  },
  id: "with-autocomplete-attribute",
  name: "example",
  autocomplete: "postal-code"
}) }}
```

### with before and after input content

```njk
{{ input({
  label: {
    heading: "What is your full name?",
    size: "l"
  },
  name: "example",
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

### with button

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "with-button",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false,
  formGroup: {
    afterInput: {
      html: '<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small" data-module="nhsuk-button" type="submit">\n  Search\n</button>\n'
    }
  }
}) }}
```

### with button and error message

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-button-error-message",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false,
  formGroup: {
    afterInput: {
      html: '<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small" data-module="nhsuk-button" type="submit">\n  Search\n</button>\n'
    }
  }
}) }}
```

### with code input styling

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  id: "with-code-input-styling",
  name: "example",
  width: 10,
  code: true,
  value: "999 123 4567",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with error message

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-error-message",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with error message and hint

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-hint-error",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with error message and hint as strings

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: "This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App",
  errorMessage: "Enter NHS number",
  id: "with-hint-error",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with error message and hint, without heading

```njk
{{ input({
  label: {
    text: "What is your NHS number?"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-hint-error",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with error message, without heading

```njk
{{ input({
  label: {
    text: "What is your NHS number?"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-error-message",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with error only

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with hint

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  id: "with-hint",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### without heading

```njk
{{ input({
  label: "What is your NHS number?",
  id: "without-heading",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with prefix

```njk
{{ input({
  label: {
    heading: "Cost in pounds"
  },
  id: "with-prefix",
  name: "example",
  prefix: {
    text: "£"
  },
  width: 5
}) }}
```

### with prefix and suffix

```njk
{{ input({
  label: {
    heading: "Cost per item, in pounds"
  },
  id: "with-prefix-suffix",
  name: "example",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  width: 5
}) }}
```

### with prefix and suffix and error message

```njk
{{ input({
  label: {
    heading: "Cost per item, in pounds"
  },
  errorMessage: {
    text: "Enter a cost per item, in pounds"
  },
  id: "with-prefix-suffix",
  name: "example",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  width: 5
}) }}
```

### with prefix as string

```njk
{{ input({
  label: {
    heading: "Cost in pounds"
  },
  id: "with-prefix",
  name: "example",
  prefix: "£",
  width: 5
}) }}
```

### with prefix HTML

```njk
{{ input({
  label: {
    heading: "Cost in pounds"
  },
  id: "with-prefix",
  name: "example",
  prefix: {
    html: "<span>£</span>"
  },
  width: 5
}) }}
```

### with suffix

```njk
{{ input({
  label: {
    heading: "Weight in kilograms"
  },
  id: "with-suffix",
  name: "example",
  suffix: {
    text: "kg"
  },
  width: 5
}) }}
```

### with suffix as string

```njk
{{ input({
  label: {
    heading: "Weight in kilograms"
  },
  id: "with-suffix",
  name: "example",
  suffix: "kg",
  width: 5
}) }}
```

### with suffix HTML

```njk
{{ input({
  label: {
    heading: "Weight in kilograms"
  },
  id: "with-suffix",
  name: "example",
  suffix: {
    html: "<span>kg</span>"
  },
  width: 5
}) }}
```

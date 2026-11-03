# Password input

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `passwordInput`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | Options for the label component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Options for the hint component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `prefix` | object |  | Can be used to add a prefix to the password input component. |
| `prefix.text` | string | ✓ | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | ✓ | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string |  | Classes to add to the prefix. |
| `prefix.attributes` | object |  | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object |  | Can be used to add a suffix to the password input component. |
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
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`. |
| `inputWrapper` | object |  | Additional options for the wrapping element containing the password input component. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |
| `showPasswordText` | string |  | Button text when the password is hidden. Defaults to `"Show"`. |
| `hidePasswordText` | string |  | Button text when the password is visible. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by `showPasswordAriaLabel`. |
| `showPasswordAriaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by `hidePasswordAriaLabel`. |
| `hidePasswordAriaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string |  | Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string |  | Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`. |
| `button` | object |  | Optional object allowing customisation of the toggle button. The `button.attributes` and `button.html` options are not supported. *(accepts nested component params, see [button](button.md))* |
| `button.variant` | string |  | Optional variant of password input button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`. |
| `button.classes` | string |  | Classes to add to the button. |

## Examples

### default

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example"
}) }}
```

### disabled

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example",
  disabled: true
}) }}
```

### disabled button

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example",
  button: {
    disabled: true
  }
}) }}
```

### disabled with enabled button

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example",
  disabled: true,
  button: {
    disabled: false
  }
}) }}
```

### with autocomplete attribute

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  id: "new-password",
  name: "example",
  autocomplete: "new-password"
}) }}
```

### with before and after input content

```njk
{{ passwordInput({
  label: {
    heading: "Password",
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

### with button double click not prevented

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example",
  button: {
    preventDoubleClick: false
  }
}) }}
```

### with button double click prevented

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example",
  button: {
    preventDoubleClick: true
  }
}) }}
```

### with error message

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  errorMessage: {
    text: "Enter a password"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

### with error message and hint

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it"
  },
  errorMessage: {
    text: "Enter a password"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

### with error message and hint as strings

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  hint: "It probably has some letters, numbers and maybe even some symbols in it",
  errorMessage: "Enter a password",
  id: "with-error-message",
  name: "example"
}) }}
```

### with error message and hint, without heading

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it"
  },
  errorMessage: {
    text: "Enter a password"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

### with error message, without heading

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  errorMessage: {
    text: "Enter a password"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

### with error only

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
  name: "example"
}) }}
```

### with hint

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it"
  },
  id: "with-hint-text",
  name: "example"
}) }}
```

### without heading

```njk
{{ passwordInput({
  label: "Password",
  id: "without-heading",
  name: "example"
}) }}
```

### with prefix

```njk
{{ passwordInput({
  label: {
    heading: "Secret code",
    size: "m"
  },
  prefix: {
    text: "PIN"
  },
  id: "with-prefix",
  name: "example",
  value: "3.14159",
  width: 5,
  code: true,
  button: {
    variant: "brand"
  }
}) }}
```

### with prefix and error message

```njk
{{ passwordInput({
  label: {
    heading: "Secret code",
    size: "m"
  },
  prefix: {
    text: "PIN"
  },
  errorMessage: {
    text: "Enter secret code"
  },
  id: "with-prefix",
  name: "example",
  width: 5,
  code: true,
  button: {
    variant: "brand"
  }
}) }}
```

### with translations

```njk
{{ passwordInput({
  label: {
    heading: "Cyfrinair",
    size: "l"
  },
  id: "password-translated",
  name: "example",
  showPasswordText: "Dangos",
  hidePasswordText: "Cuddio",
  showPasswordAriaLabel: "Dangos cyfrinair",
  hidePasswordAriaLabel: "Cuddio cyfrinair",
  passwordShownAnnouncementText: "Mae eich cyfrinair yn weladwy.",
  passwordHiddenAnnouncementText: "Mae eich cyfrinair wedi'i guddio."
}) }}
```

### with width

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  id: "width-class",
  name: "example",
  width: 10
}) }}
```

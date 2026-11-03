# Textarea

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `textarea`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the textarea. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `disabled` | boolean |  | If `true`, textarea will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the textarea component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Can be used to add a hint to the textarea component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `formGroup` | object |  | Additional options for the form group containing the textarea component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the textarea used by the textarea component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the textarea used by the textarea component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the textarea. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"street-address"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |

## Examples

### default

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example"
}) }}
```

### disabled

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  disabled: true
}) }}
```

### label

with size S

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "s"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "custom-size",
  name: "example"
}) }}
```

[3 more variants of this example](variants/textarea.md#label)

### with autocomplete attribute

```njk
{{ textarea({
  label: {
    heading: "Full address",
    size: "l"
  },
  id: "with-autocomplete-attribute",
  name: "example",
  autocomplete: "street-address"
}) }}
```

### with before and after input content

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
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

### with error message

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  errorMessage: {
    text: "You must provide an explanation"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

### with error message and hint

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  errorMessage: {
    text: "You must provide an explanation"
  },
  id: "with-hint-error",
  name: "example"
}) }}
```

### with error message and hint as strings

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: "Do not include personal information like your name, date of birth or NHS number",
  errorMessage: "You must provide an explanation",
  id: "with-hint-error",
  name: "example"
}) }}
```

### with error message and hint, without heading

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  errorMessage: {
    text: "You must provide an explanation"
  },
  id: "with-hint-error",
  name: "example"
}) }}
```

### with error message, without heading

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?"
  },
  errorMessage: {
    text: "You must provide an explanation"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

### with error only

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
  name: "example"
}) }}
```

### with hint

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "with-hint",
  name: "example"
}) }}
```

### without heading

```njk
{{ textarea({
  label: "Can you provide more detail?",
  hint: "Do not include personal information like your name, date of birth or NHS number",
  id: "without-heading",
  name: "example"
}) }}
```

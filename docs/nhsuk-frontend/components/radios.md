# Radios

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `radios`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the radios component. |
| `fieldset` | object |  | The fieldset used by the radios component. The `fieldset.html` option is not supported. *(accepts nested component params, see [fieldset](fieldset.md))* |
| `hint` | object |  | Can be used to add a hint to the radios component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `formGroup` | object |  | Additional options for the form group containing the radios component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before all radio items within the radios component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after all radio items within the radios component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | ✓ | The `name` attribute for the radio items. |
| `items` | array | ✓ | The radio items within the radios component. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items.id` | string |  | Specific `id` attribute for the radio item. If omitted, then `idPrefix` string will be applied. |
| `items.value` | string | ✓ | The `value` attribute for the radio input. |
| `items.label` | object |  | The label used by each radio item within the radios component. The `label.caption`, `label.heading` and `label.size` options are not supported. *(accepts nested component params, see [label](label.md))* |
| `items.hint` | object |  | Can be used to add a hint to each radio item within the radios component. *(accepts nested component params, see [hint](hint.md))* |
| `items.divider` | object |  | Divider text to separate radio items, for example the text `"or"`. |
| `items.divider.text` | string | ✓ | If `html` is set, this is not required. Text for the divider. If `html` is provided, the `text` option will be ignored. |
| `items.divider.html` | string | ✓ | If `text` is set, this is not required. HTML for the divider. If `html` is provided, the `text` option will be ignored. |
| `items.checked` | boolean |  | Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the radio is checked. |
| `items.conditional.text` | string | ✓ | If `html` is set, this is not required. The text to reveal when the radio is checked. |
| `items.conditional.html` | string | ✓ | If `text` is set, this is not required. The HTML to reveal when the radio is checked. |
| `items.disabled` | boolean |  | If `true`, radio will be disabled. |
| `items.classes` | string |  | Classes to add to the radio input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the radio input tag. |
| `value` | string |  | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `disabled` | boolean |  | If `true`, radio inputs used by the radios component will be disabled. |
| `small` | boolean |  | If set to `true`, small radios will be used. |
| `inline` | boolean |  | If set to `true`, inline radios will be used. |
| `classes` | string |  | Classes to add to the radios container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the radios container. |

## Examples

### default

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#default)

### disabled

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  idPrefix: "disabled",
  name: "example",
  disabled: true,
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#disabled)

### disabled input

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  idPrefix: "disabled-input",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message",
      disabled: true
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#disabled-input)

### disabled with enabled input

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  idPrefix: "disabled-enabled-input",
  name: "example",
  disabled: true,
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message",
      disabled: false
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#disabled-with-enabled-input)

### inline

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Are you 18 or over?",
      size: "l"
    }
  },
  idPrefix: "inline",
  name: "example",
  inline: true,
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#inline)

### legend

with size S

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "s"
    }
  },
  idPrefix: "custom-size",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[3 more variants of this example](variants/radios.md#legend)

### with before and after inputs content

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ],
  formGroup: {
    beforeInputs: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    afterInputs: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### with conditional content

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  idPrefix: "conditional",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-email">\n    Email address\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-email" name="contact-by-email" type="text" spellcheck="false">\n</div>\n'
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-phone">\n    Phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-phone" name="contact-by-phone" type="tel">\n</div>\n'
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-text">\n    Mobile phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-text" name="contact-by-text" type="tel">\n</div>\n'
      }
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-conditional-content)

### with conditional content as strings

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "What is your favourite colour?",
      size: "l"
    }
  },
  idPrefix: "conditional-strings",
  name: "example",
  items: [
    {
      value: "red",
      text: "Red",
      conditional: "I like red"
    },
    {
      value: "green",
      text: "Green",
      conditional: "I like green"
    },
    {
      value: "blue",
      text: "Blue",
      conditional: "I like blue"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-conditional-content-as-strings)

### with conditional content, error message

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  errorMessage: {
    text: "Select how you want to be contacted"
  },
  idPrefix: "conditional",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-email">\n    Email address\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-email" name="contact-by-email" type="text" spellcheck="false">\n</div>\n'
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-phone">\n    Phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-phone" name="contact-by-phone" type="tel">\n</div>\n'
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-text">\n    Mobile phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-text" name="contact-by-text" type="tel">\n</div>\n'
      }
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-conditional-content-error-message)

### with conditional content, error message (nested)

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  idPrefix: "conditional",
  name: "example",
  value: "phone",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-email">\n    Email address\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-email" name="contact-by-email" type="text" spellcheck="false">\n</div>\n'
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: '<div class="nhsuk-form-group nhsuk-form-group--error">\n  <label class="nhsuk-label" for="contact-by-phone">\n    Phone number\n  </label>\n  <span class="nhsuk-error-message" id="contact-by-phone-error">\n    <span class="nhsuk-u-visually-hidden">Error: </span>Enter your phone number\n  </span>\n  <input class="nhsuk-input nhsuk-input--error nhsuk-u-width-two-thirds" id="contact-by-phone" name="contact-by-phone" type="tel" aria-describedby="contact-by-phone-error">\n</div>\n'
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-text">\n    Mobile phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-text" name="contact-by-text" type="tel">\n</div>\n'
      }
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-conditional-content-error-message-nested)

### with divider

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Do you know your NHS number?",
      size: "l"
    }
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  idPrefix: "with-divider",
  name: "example",
  items: [
    {
      value: "yes",
      text: "Yes, I know my NHS number"
    },
    {
      value: "no",
      text: "No, I do not know my NHS number"
    },
    {
      divider: "or"
    },
    {
      value: "not sure",
      text: "I'm not sure"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-divider)

### with error message

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  errorMessage: {
    text: "Select how you want to be contacted"
  },
  idPrefix: "with-error-message",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-error-message)

### with error message and hint

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  errorMessage: {
    text: "Select how you want to be contacted"
  },
  idPrefix: "with-hint-error",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-error-message-and-hint)

### with error message and hint as strings

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: "Select 1 option",
  errorMessage: "Select how you want to be contacted",
  idPrefix: "with-hint-error",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-error-message-and-hint-as-strings)

### with error message and hint, without heading

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: null
    }
  },
  hint: {
    text: "Select 1 option"
  },
  errorMessage: {
    text: "Select how you want to be contacted"
  },
  idPrefix: "with-hint-error",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-error-message-and-hint-without-heading)

### with error message, without heading

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: null
    }
  },
  errorMessage: {
    text: "Select how you want to be contacted"
  },
  idPrefix: "with-error-message",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-error-message-without-heading)

### with error only

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  errorMessage: true,
  idPrefix: "with-error-only",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

### with hint

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  idPrefix: "with-hint",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-hint)

### with hints on items

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Do you have a mobile phone with signal?",
      size: "l"
    }
  },
  idPrefix: "with-hint-item",
  name: "example",
  items: [
    {
      value: "mobile",
      text: "Yes, I have a mobile phone with signal",
      hint: {
        text: "We will text you a 6 digit security code"
      }
    },
    {
      value: "landline",
      text: "No, I want to use my landline",
      hint: {
        text: "We will call you to give you a 6 digit security code"
      }
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-hints-on-items)

### with long text

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Venenatis Condimentum",
      size: "l"
    }
  },
  idPrefix: "with-long-text",
  name: "example",
  items: [
    {
      value: "nullam",
      text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo\nquam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nMaecenas faucibus mollis interdum. Donec id elit non mi porta gravida\nat eget metus."
    },
    {
      value: "aenean",
      text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\nvestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,\nnisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis\nnatoque penatibus et magnis dis parturient montes, nascetur ridiculus\nmus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam\nvenenatis vestibulum. Cras mattis consectetur purus sit amet\nfermentum."
    },
    {
      value: "fusce",
      text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum\nnibh, ut fermentum massa justo sit amet risus. Etiam porta sem\nmalesuada magna mollis euismod. Praesent commodo cursus magna, vel\nscelerisque nisl consectetur et. Etiam porta sem malesuada magna\nmollis euismod. Etiam porta sem malesuada magna mollis euismod.\nDonec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-long-text)

### with nested conditional radios

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  idPrefix: "conditional-nested",
  name: "example-outer",
  items: [
    {
      value: "no-conditional",
      text: "No conditional"
    },
    {
      value: "nested",
      text: "Nested conditional",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <fieldset class="nhsuk-fieldset" aria-describedby="example-inner-hint">\n  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--s">\n    How do you want to be contacted about this?\n  </legend>\n  <div class="nhsuk-hint" id="example-inner-hint">\n    Select 1 option\n  </div>\n  <div class="nhsuk-radios" data-module="nhsuk-radios">\n    <div class="nhsuk-radios__item">\n      <input class="nhsuk-radios__input" id="example-inner" name="example-inner" type="radio" value="email" data-aria-controls="conditional-example-inner">\n      <label class="nhsuk-label nhsuk-radios__label" for="example-inner">\n        Email\n      </label>\n    </div>\n    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner">\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-email">\n    Email address\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-email" name="contact-by-email" type="text" spellcheck="false">\n</div>\n    </div>\n    <div class="nhsuk-radios__item">\n      <input class="nhsuk-radios__input" id="example-inner-2" name="example-inner" type="radio" value="phone" data-aria-controls="conditional-example-inner-2">\n      <label class="nhsuk-label nhsuk-radios__label" for="example-inner-2">\n        Phone\n      </label>\n    </div>\n    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner-2">\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-phone">\n    Phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-phone" name="contact-by-phone" type="tel">\n</div>\n    </div>\n    <div class="nhsuk-radios__item">\n      <input class="nhsuk-radios__input" id="example-inner-3" name="example-inner" type="radio" value="text" data-aria-controls="conditional-example-inner-3">\n      <label class="nhsuk-label nhsuk-radios__label" for="example-inner-3">\n        Text message\n      </label>\n    </div>\n    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner-3">\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-text">\n    Mobile phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-text" name="contact-by-text" type="tel">\n</div>\n    </div>\n  </div>\n</fieldset>\n</div>\n'
      }
    }
  ]
}) }}
```

### without fieldset

```njk
{{ radios({
  fieldset: null,
  idPrefix: "without-fieldset",
  name: "colours",
  items: [
    {
      value: "red",
      text: "Red"
    },
    {
      value: "green",
      text: "Green"
    },
    {
      value: "blue",
      text: "Blue"
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#without-fieldset)

### without heading

```njk
{{ radios({
  fieldset: {
    legend: "How do you want to be contacted about this?"
  },
  idPrefix: "without-heading",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

### with pre-checked value

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  idPrefix: "conditional",
  name: "example",
  value: "email",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-email">\n    Email address\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-email" name="contact-by-email" type="text" spellcheck="false">\n</div>\n'
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-phone">\n    Phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-phone" name="contact-by-phone" type="tel">\n</div>\n'
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-text">\n    Mobile phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-text" name="contact-by-text" type="tel">\n</div>\n'
      }
    }
  ]
}) }}
```

[1 more variant of this example](variants/radios.md#with-pre-checked-value)

# Checkboxes

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `checkboxes`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the checkboxes component. |
| `describedBy` | string |  | One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users. |
| `fieldset` | object |  | Can be used to add a fieldset to the checkboxes component. The `fieldset.html` option is not supported. *(accepts nested component params, see [fieldset](fieldset.md))* |
| `hint` | object |  | Can be used to add a hint to the checkboxes component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `formGroup` | object |  | Additional options for the form group containing the checkboxes component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before all checkbox items within the checkboxes component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after all checkbox items within the checkboxes component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | ✓ | The `name` attribute for all checkbox items. |
| `items` | array | ✓ | The checkbox items within the checkboxes component. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items.id` | string |  | Specific `id` attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied. |
| `items.name` | string |  | Specific `name` attribute for the checkbox item. If omitted, then component global `name` string will be applied. |
| `items.value` | string | ✓ | The `value` attribute for the checkbox input. |
| `items.label` | object |  | The label used by each checkbox item within the checkboxes component. The `label.caption`, `label.heading` and `label.size` options are not supported. *(accepts nested component params, see [label](label.md))* |
| `items.hint` | object |  | Can be used to add a hint to each checkbox item within the checkboxes component. *(accepts nested component params, see [hint](hint.md))* |
| `items.divider` | object |  | Divider text to separate checkbox items, for example the text `"or"`. |
| `items.divider.text` | string | ✓ | If `html` is set, this is not required. Text for the divider. If `html` is provided, the `text` option will be ignored. |
| `items.divider.html` | string | ✓ | If `text` is set, this is not required. HTML for the divider. If `html` is provided, the `text` option will be ignored. |
| `items.checked` | boolean |  | Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the checkbox is checked. |
| `items.conditional.text` | string | ✓ | If `html` is set, this is not required. The text to reveal when the checkbox is checked. |
| `items.conditional.html` | string | ✓ | If `text` is set, this is not required. The HTML to reveal when the checkbox is checked. |
| `items.disabled` | boolean |  | If `true`, checkbox will be disabled. |
| `items.classes` | string |  | Classes to add to the checkbox input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `items.behaviour` | string |  | Behaviour of the checkbox when JavaScript is enabled – `"exclusive"` or `"inclusive"`. Use `"exclusive"` for a "none" option or `"inclusive"` for an "all" option. |
| `items.behaviourGroup` | string |  | Used in conjunction with `behaviour` - this should be set to a string which groups checkboxes together into a set for use with a "none" or "all" option. |
| `items.exclusive` | boolean |  | **Deprecated in 10.6.0, do not use.** Replaced by `item.behaviour` in the `items` option. |
| `items.exclusiveGroup` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by `item.behaviourGroup` in the `items` option. |
| `values` | array |  | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `disabled` | boolean |  | If `true`, checkbox inputs used by the checkboxes component will be disabled. |
| `small` | boolean |  | If set to `true`, small checkboxes will be used. |
| `inline` | boolean |  | If set to `true`, inline checkboxes will be used. |
| `classes` | string |  | Classes to add to the checkboxes container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the checkboxes container. |

## Examples

### default

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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

[1 more variant of this example](variants/checkboxes.md#default)

### disabled

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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

[1 more variant of this example](variants/checkboxes.md#disabled)

### disabled input

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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

[1 more variant of this example](variants/checkboxes.md#disabled-input)

### disabled with enabled input

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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

[1 more variant of this example](variants/checkboxes.md#disabled-with-enabled-input)

### inline

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "Which nipple has changed?",
      size: "l"
    }
  },
  idPrefix: "inline",
  name: "example",
  inline: true,
  items: [
    {
      value: "right",
      text: "Right nipple"
    },
    {
      value: "left",
      text: "Left nipple"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#inline)

### legend

with size S

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "s"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

[3 more variants of this example](variants/checkboxes.md#legend)

### with "all" option

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "Which vaccines would you like to include?",
      size: "l"
    }
  },
  idPrefix: "all",
  name: "example",
  items: [
    {
      value: "all",
      text: "All 9 vaccines",
      behaviour: "inclusive"
    },
    {
      divider: "or",
      behaviour: "inclusive"
    },
    {
      value: "4in1",
      text: "4-in-1 pre-school booster"
    },
    {
      value: "6in1",
      text: "6-in-1"
    },
    {
      value: "hpv",
      text: "HPV"
    },
    {
      value: "menb",
      text: "MenB"
    },
    {
      value: "menacwy",
      text: "MenACWY"
    },
    {
      value: "mmrv",
      text: "MMRV"
    },
    {
      value: "rotavirus",
      text: "Rotavirus"
    },
    {
      value: "pneumococcal",
      text: "Pneumococcal"
    },
    {
      value: "tdipv",
      text: "Td/IPV"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-all-option)

### with before and after inputs content

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  idPrefix: "conditional",
  name: "contact",
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

[1 more variant of this example](variants/checkboxes.md#with-conditional-content)

### with conditional content as strings

```njk
{{ checkboxes({
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

[1 more variant of this example](variants/checkboxes.md#with-conditional-content-as-strings)

### with conditional content, error message

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  errorMessage: {
    text: "Select how you like to be contacted"
  },
  idPrefix: "conditional",
  name: "contact",
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

[1 more variant of this example](variants/checkboxes.md#with-conditional-content-error-message)

### with conditional content, error message (nested)

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  idPrefix: "conditional",
  name: "example",
  values: ["phone"],
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

[1 more variant of this example](variants/checkboxes.md#with-conditional-content-error-message-nested)

### with error message

```njk
{{ checkboxes({
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-error-message)

### with error message and hint

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-error-message-and-hint)

### with error message and hint as strings

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: "Select all options that are relevant to you",
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-error-message-and-hint-as-strings)

### with error message and hint, without heading

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: null
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-error-message-and-hint-without-heading)

### with error message, without heading

```njk
{{ checkboxes({
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-error-message-without-heading)

### with error only

```njk
{{ checkboxes({
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

### with hint

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "What medical conditions do you have?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 or more"
  },
  idPrefix: "with-hint",
  name: "example",
  items: [
    {
      value: "alzheimers",
      text: "Alzheimer's disease or dementia"
    },
    {
      value: "asthma",
      text: "Asthma"
    },
    {
      value: "cancer",
      text: "Cancer"
    },
    {
      value: "diabetes",
      text: "Diabetes"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-hint)

### with hints on items

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "What medical conditions do you have?",
      size: "l"
    }
  },
  hint: {
    text: "Select 1 or more"
  },
  idPrefix: "with-hint-item",
  name: "example",
  items: [
    {
      value: "alzheimers",
      text: "Alzheimer's disease or dementia"
    },
    {
      value: "asthma",
      text: "Asthma"
    },
    {
      value: "cancer",
      text: "Cancer"
    },
    {
      value: "diabetes",
      text: "Diabetes",
      hint: {
        text: "including type 1, type 2, and gestational diabetes"
      }
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-hints-on-items)

### with long text

```njk
{{ checkboxes({
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

[1 more variant of this example](variants/checkboxes.md#with-long-text)

### with "none" option

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  idPrefix: "none",
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
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "I do not want to be contacted",
      behaviour: "exclusive"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-none-option)

### with "none" option, conditional content

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  idPrefix: "none",
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
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "I do not want to be contacted",
      behaviour: "exclusive"
    }
  ]
}) }}
```

[1 more variant of this example](variants/checkboxes.md#with-none-option-conditional-content)

### without fieldset

```njk
{{ checkboxes({
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

[1 more variant of this example](variants/checkboxes.md#without-fieldset)

### without heading

```njk
{{ checkboxes({
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
      value: "text message",
      text: "Text message"
    }
  ]
}) }}
```

### with pre-checked values

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  idPrefix: "conditional",
  name: "contact",
  values: ["email", "text"],
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

[1 more variant of this example](variants/checkboxes.md#with-pre-checked-values)

# Checkboxes variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [checkboxes.md](../checkboxes.md).

## default

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  small: true
}) }}
```

## disabled

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## disabled input

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## disabled with enabled input

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## inline

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "Which nipple has changed?",
      size: "m"
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
  ],
  small: true
}) }}
```

## legend

### with size M

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "m"
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

### with size L

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "l"
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

### with size XL

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "xl"
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

## with "all" option

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "Which vaccines would you like to include?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with conditional content

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with conditional content as strings

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "What is your favourite colour?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with conditional content, error message

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with conditional content, error message (nested)

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message and hint

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message and hint as strings

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message and hint, without heading

### small

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
  ],
  small: true
}) }}
```

## with error message, without heading

### small

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
  ],
  small: true
}) }}
```

## with hint

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "What medical conditions do you have?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with hints on items

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "What medical conditions do you have?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with long text

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "Venenatis Condimentum",
      size: "m"
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
  ],
  small: true
}) }}
```

## with "none" option

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with "none" option, conditional content

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## without fieldset

### small

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
  ],
  small: true
}) }}
```

## with pre-checked values

### small

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

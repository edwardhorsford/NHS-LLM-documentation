# Radios variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [radios.md](../radios.md).

## default

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  small: true
}) }}
```

## disabled

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## disabled input

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## disabled with enabled input

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## inline

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Are you 18 or over?",
      size: "m"
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
  ],
  small: true
}) }}
```

## legend

### with size M

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "m"
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

### with size L

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "l"
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

### with size XL

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "xl"
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

## with conditional content

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with conditional content as strings

### small

```njk
{{ radios({
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
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with conditional content, error message (nested)

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with divider

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Do you know your NHS number?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message

### small

```njk
{{ radios({
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
      value: "text",
      text: "Text message"
    }
  ],
  small: true
}) }}
```

## with error message and hint

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message and hint as strings

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with error message and hint, without heading

### small

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
  ],
  small: true
}) }}
```

## with error message, without heading

### small

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
  ],
  small: true
}) }}
```

## with hint

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with hints on items

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "Do you have a mobile phone with signal?",
      size: "m"
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
  ],
  small: true
}) }}
```

## with long text

### small

```njk
{{ radios({
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

## without fieldset

### small

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
  ],
  small: true
}) }}
```

## with pre-checked value

### small

```njk
{{ radios({
  fieldset: {
    legend: {
      heading: "How do you want to be contacted about this?",
      size: "m"
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
  ],
  small: true
}) }}
```

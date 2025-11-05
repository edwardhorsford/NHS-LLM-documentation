# NHS Prototype Kit Guide

A guide for building prototypes with NHS Frontend components in the NHS Prototype Kit.

**Related guides:**
- [NHS Frontend Guide](nhs-frontend-guide.instructions.md) - Core NHS Frontend patterns, conventions, and best practices
- [NHS Frontend Component Reference](nhs-frontend-component-reference.instructions.md) - Detailed component parameters and documentation

---

## Nunjucks preferences

- Prefer splitting object keys over separate lines
- Trailing commas are not supported by Nunjucks

## Saving data

All data submitted via POST or GET will be saved to `req.session.data` using the name param.

```nunjucks
{{ input({
  label: {
    text: "Full name"
  },
  id: "fullName",
  name: "fullName"
}) }}
```

This data will be available in routes at `req.session.data.fullName` or in views as `data.fullName` (or `data["fullName"]` if using square bracket notation).

Save to nested properties using square brackets and no quotation marks. Express will expand this. Eg `name: "person[fullName]"`, will expand to `data.person.fullName`. `name: "person[address][line1]"` will expand to `data.person.address.line1`.

Prefer `camelCase` for names.

## Routes and branching

**In most cases, routes aren't needed.** The prototype kit automatically saves form data and handles navigation. You only need routes when:
- Deciding which page to show next based on user answers (branching)
- Doing custom processing of data before saving
- Redirecting users based on missing data

### Creating a route

When adding a route, **don't post to the same page**. Instead, post to a separate route. For example, if your page is `contact-preference`, post to `contact-preference-answer`:

**In your view (e.g., `contact-preference.html`):**
```nunjucks
<form method="post" action="contact-preference-answer">
  {{ radios({
    name: "contactPreference",
    fieldset: {
      legend: {
        text: "How would you like to be contacted?",
        classes: "nhsuk-fieldset__legend--l",
        isPageHeading: true
      }
    },
    items: [
      {
        value: "Email",
        text: "Email"
      },
      {
        value: "Phone",
        text: "Phone"
      },
      {
        value: "Text message",
        text: "Text message"
      }
    ]
  }) }}

  {{ button({
    text: "Continue"
  }) }}
</form>
```

**In your routes file (e.g., `app/routes.js`):**
```javascript
router.post('/contact-preference-answer', function (req, res) {
  const data = req.session.data
  const contactPreference = data.contactPreference

  // Branch based on the answer
  if (contactPreference === 'Email') {
    res.redirect('email-address')
  } else if (contactPreference === 'Phone') {
    res.redirect('phone-number')
  } else if (contactPreference === 'Text message') {
    res.redirect('mobile-number')
  } else {
    // Redirect back if no valid answer
    res.redirect('contact-preference')
  }
})
```

### Checking for missing data

**In most cases, error validation isn't necessary in a prototype.** However, you can use a route to check for likely missing data and redirect back if needed:

```javascript
router.post('/contact-preference-answer', function (req, res) {
  const data = req.session.data
  const contactPreference = data.contactPreference

  // Redirect back if no answer provided
  if (!contactPreference) {
    res.redirect('contact-preference')
    return
  }

  // Continue with branching logic
  if (contactPreference === 'Email') {
    res.redirect('email-address')
  } else {
    res.redirect('phone-number')
  }
})
```

**Note:** This doesn't show error messages - it just prevents users progressing without answering. For most prototypes, this level of validation is sufficient.

## Prefilling data

Form components support either a `value` or `values` params for pre-filling existing data.

```nunjucks
{{ input({
  label: {
    text: "Full name"
  },
  id: "fullName",
  name: "fullName",
  value: data.fullName
}) }}
```

```nunjucks
{{ checkboxes({
  idPrefix: "contactMethods",
  name: "contactMethods",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  values: data.contactMethods
  items: [
    {
      value: "Email",
      text: "Email"
    },
    {
      value: "Phone",
      text: "Phone"
    },
    {
      value: "Text message",
      text: "Text message"
    }
  ]
}) }}
```

## Default data

Default data can be added in `app/data/session-data-defaults.js`. This is imported when the kit starts or restarts, or if a user visits the reset data route.

Default data can be useful for:

* Pre-setting user answers for testing returning journeys to flows
* Storing sets of reference data - lists of countries, medical conditions
* Storing other static content that might want to get reused
* Storing lists of users (or user objects) for testing multi-user flows

Keys included in `session-data-defaults.js` will be available in views as `data.[key]` and in routes as `req.session.data.[key]`.

## Radios / checkboxes / select components

Radios, Checkboxes and Select components support directly setting a `checked` or `selected` boolean param on each item - this should be rarely needed.

Default to using identical text for `value` as for `text` - eg correct casing and spacing. This makes it quicker to display data. Use `camelCase` otherwise where the data will need logic applied.

Good:

```nunjucks
items: [
  {
    value: "Email",
    text: "Email"
  },
  {
    value: "Phone",
    text: "Phone"
  },
  {
    value: "Text message",
    text: "Text message"
  }
]
```

Bad:

```nunjucks
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
    value: "text-message",
    text: "Text message"
  }
]
```

## Logic in components

Simple logic can be applied inline in components.

```nunjucks
{% set fruit = [
  "Apple",
  "Pears",
  "Bananas" if includeBananas,
  "Oranges"
] %}
```

Inline logic can include else:
`"Bananas" if includeBananas else "Other"`

If the logic is more than one or two conditions, prefer using a `set` or `call` block instead to create the data.

## HTML in components

Avoid directly setting html in components - prefer `set` or `call` blocks instead.

Good:

```nunjucks
{% set addressHtml %}
  <ul class="nhsuk-list">
    <li>Line 1</li>
    <li>Line 2</li>
    <li>Line 3</li>
  </ul>
{% endset %}

{{ summaryList({
  rows: [
    {
      key: {
        text: "Address"
      },
      value: {
        html: addressHtml
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    }
  ]
}) }}
```

Bad:

```nunjucks
{{ summaryList({
  rows: [
    {
      key: {
        text: "Address"
      },
      value: {
        html: "<ul class='nhsuk-list'><li>Line 1</li><li>Line 2</li><li>Line 3</li></ul>"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    }
  ]
}) }}
```

## Fieldsets

Do not use a fieldset to wrap a single input. They are only needed when grouping related inputs together - like address input. They're already included for radios and checkboxes.

## Page headings and single or multiple questions on a page.

If a form input is the only question on the page, set the `isPageHeading` param to `true`. You may also need to set a related styling class.

If a form component is not the only question on the page, set the param to false. There should be a separate h1 on the page.

Checkboxes as only question on page:

```nunjucks
{{ checkboxes({
  idPrefix: "contactMethods",
  name: "contactMethods",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  values: data.contactMethods
  items: [
    {
      value: "Email",
      text: "Email"
    },
    {
      value: "Phone",
      text: "Phone"
    },
    {
      value: "Text message",
      text: "Text message"
    }
  ]
}) }}
```

Checkboxes where there are other questions or another h1 on the page:

```nunjucks
{{ checkboxes({
  idPrefix: "contactMethods",
  name: "contactMethods",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
      classes: "nhsuk-fieldset__legend--m",
      isPageHeading: false
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  values: data.contactMethods,
  items: [
    {
      value: "Email",
      text: "Email"
    },
    {
      value: "Phone",
      text: "Phone"
    },
    {
      value: "Text message",
      text: "Text message"
    }
  ]
}) }}
```

Text input as only question on page:

```nunjucks
{{ input({
  label: {
    text: "What is your home postcode?",
    isPageHeading: true,
    classes: "nhsuk-label--l"
  },
  classes: "nhsuk-input--width-10",
  name: "postcode",
  autocomplete: "postal-code"
}) }}
```

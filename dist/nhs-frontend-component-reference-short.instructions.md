# NHS Frontend Components - Quick Reference

---
**Auto-generated Documentation**

- **NHS Frontend Version:** 10.0.0
- **Git Branch:** main
- **Git Commit:** 52eeee1
- **Generated:** 2025-10-06 11:03:51 UTC
- **Source:** [NHS Frontend Repository](https://github.com/nhsuk/nhsuk-frontend)

*This documentation is automatically extracted from NHS Frontend component definitions. Do not edit manually.*

---

This is a quick reference guide for NHS Frontend components, generated from macro-options.mjs files.

## Components Overview

| Component | Required Params | Optional Key Params |
|-----------|----------------|-------------------|
| **Action link** | text, href | classes |
| **Back link** | None | text, html, href |
| **Breadcrumb** | items, items.text, text | classes |
| **Button** | text, html | href, classes |
| **Card** | heading, headingHtml | href, classes |
| **Character count** | name, label, formGroup.beforeInput.text | hint, classes |
| **Checkboxes** | formGroup.beforeInputs.text, formGroup.beforeInputs.html, formGroup.afterInputs.text | fieldset, hint, classes |
| **Contents list** | items, items.href, items.text | classes |
| **Date input** | items.name, formGroup.beforeInputs.text, formGroup.beforeInputs.html | items, fieldset, hint |
| **Details** | summaryText, summaryHtml, text | classes |
| **Do and Don't list** | title, type, items | classes |
| **Error message** | text, html | classes |
| **Error summary** | titleText, titleHtml, errorList | classes |
| **Fieldset** | legend.text, legend.html | classes |
| **Footer** | navigation.items.href, navigation.items.text, navigation.items.html | classes |
| **Header** | navigation.items.href, navigation.items.text, navigation.items.html | classes |
| **Hero** | heading | text, html, classes |
| **Hint text** | text, html | classes |
| **Images** | src, alt | classes |
| **Input** | name, label, formGroup.beforeInput.text | hint, classes |
| **Inset text** | text, html | classes |
| **Label** | text, html, for | classes |
| **Notification banner** | text, html | classes |
| **Pagination** | previousUrl, previousPage, nextUrl | classes |
| **Panel** | titleText | text, html, classes |
| **Radios** | formGroup.beforeInputs.text, formGroup.beforeInputs.html, formGroup.afterInputs.text | fieldset, hint, classes |
| **Select** | name, items, items.text | hint, classes |
| **Skip link** | None | text, href, classes |
| **Summary list** | rows, rows.key, rows.key.text | classes |
| **Tables** | rows, rows.text, rows.html | None |
| **Tabs** | items, items.id, items.label | None |
| **Tag** | text, html | classes |
| **Task list** | items, items.title, items.title.text | classes |
| **Textarea** | name, label, formGroup.beforeInput.text | hint, classes |
| **Warning callout** | heading, text, html | classes |

## Quick Usage Examples

### Action link

```njk
{{ actionlink({
  text: 'Find your nearest A&E',
  href: '#'
}) }}
```

### Back link

```njk
{{ backlink({
  text: 'Back',
  href: '#'
}) }}
```

### Breadcrumb

```njk
{{ breadcrumb({
  items: [
    {
      href: '#',
      text: 'Home'
    },
    {
      href: '#',
      text: 'NHS services'
    },
    {
      href: '#',
      text: 'Hospitals'
    }
  ]
}) }}
```

### Button

```njk
{{ button({
  text: 'Save and continue'
}) }}
```

### Card

```njk
{% call card({
  heading: 'If you need help now, but it's not an emergency',
  headingLevel: 3
}) %}
  <p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{% endcall %}
```

### Character count

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  name: 'example',
  maxlength: 200
}) }}
```

### Checkboxes

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select all options that are relevant to you'
  },
  name: 'example',
  items: [
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'text',
      text: 'Text message'
    }
  ]
}) }}
```

### Contents list

```njk
{{ contentslist({
  items: [
    {
      href: '#',
      text: 'What is AMD?',
      current: true
    },
    {
      href: '#',
      text: 'Symptoms'
    },
    {
      href: '#',
      text: 'Getting diagnosed'
    },
    {
      href: '#',
      text: 'Treatments'
    },
    {
      href: '#',
      text: 'Living with AMD'
    }
  ]
}) }}
```

### Date input

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your date of birth?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 31 3 1980'
  },
  id: 'example'
}) }}
```

### Details

```njk
{% call details({
  summaryText: 'How to find your NHS number'
}) %}
  <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
  <p>You can find your NHS number by logging in to a GP online service or on any document the NHS has sent you, such as your:</p>
  <ul>
    <li>prescriptions</li>
    <li>test results</li>
    <li>hospital referral letters</li>
    <li>appointment letters</li>
  </ul>
  <p>Ask your GP surgery for help if you can't find your NHS number.</p>
{% endcall %}
```

### Do and Don't list

```njk
{{ doanddon'tlist({
  title: 'Do',
  type: 'tick',
  items: [
    {
      item: 'cover blisters with a soft plaster or padded dressing'
    },
    {
      item: 'wash your hands before touching a burst blister'
    },
    {
      item: 'allow the fluid in a burst blister to drain before covering it with a plaster or dressing'
    }
  ]
}) }}
```

### Error message

```njk
{{ errormessage({
  text: 'Enter your full name'
}) }}
```

### Error summary

```njk
{{ errorsummary({
  titleText: 'There is a problem',
  descriptionText: 'Describe the errors and how to correct them',
  errorList: [
    {
      text: 'Date of birth must be in the past',
      href: '#example-day'
    }
  ]
}) }}
```

### Fieldset

```njk
{% call fieldset({
  legend: {
    text: 'What is your address?',
    classes: 'nhsuk-fieldset__legend--l',
    isPageHeading: true
  }
}) %}
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="address-line1">
      Address line 1
    </label>    <input class="nhsuk-input" id="address-line1" name="address-line1" type="text" autocomplete="address-line1"></div> 
  
  
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="address-line2">
      Address line 2 (optional)
    </label>    <input class="nhsuk-input" id="address-line2" name="address-line2" type="text" autocomplete="address-line2"></div> 
  
  
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="address-town">
      Town or city
    </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="address-town" name="address-town" type="text" autocomplete="address-level2"></div> 
  
  
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="address-postcode">
      Postcode
    </label>    <input class="nhsuk-input nhsuk-input--width-10" id="address-postcode" name="address-postcode" type="text" autocomplete="postal-code"></div>
{% endcall %}
```

### Footer

```njk
{{ footer({
  meta: {
    items: [
      {
        href: '#',
        text: 'Accessibility statement'
      },
      {
        href: '#',
        text: 'Contact us'
      },
      {
        href: '#',
        text: 'Cookies'
      },
      {
        href: '#',
        text: 'Privacy policy'
      },
      {
        href: '#',
        text: 'Terms and conditions'
      }
    ]
  }
}) }}
```

### Header

```njk
{{ header({
  logo: {
    href: '#'
  },
  service: {
    text: 'Digital service manual',
    href: '#'
  },
  search: {
    placeholder: 'Search',
    visuallyHiddenLabel: 'Search the NHS digital service manual'
  },
  navigation: {
    items: [
      {
        text: 'NHS service standard',
        href: '#'
      },
      {
        text: 'Design system',
        href: '#'
      },
      {
        text: 'Content guide',
        href: '#'
      },
      {
        text: 'Accessibility',
        href: '#'
      },
      {
        text: 'Community and contribution',
        href: '#'
      }
    ]
  }
}) }}
```

### Hero

```njk
{{ hero({
  heading: 'We're here for you',
  text: 'Helping you take control of your health and wellbeing.'
}) }}
```

### Hint text

```njk
{{ hinttext({
  text: 'Do not include personal information like your name, date of birth or NHS number'
}) }}
```

### Images

```njk
{{ images({
  src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
  sizes: '(max-width: 768px) 100vw, 66vw',
  srcset: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w',
  alt: 'Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.',
  caption: 'Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time.'
}) }}
```

### Input

```njk
{{ input({
  label: {
    text: 'What is your full name?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  name: 'example'
}) }}
```

### Inset text

```njk
{
  text: 'Example text',
  html: 'example',
  // ... other optional params
}
```

### Label

```njk
{{ label({
  text: 'What is your full name?',
  classes: 'nhsuk-label--l',
  isPageHeading: true
}) }}
```

### Notification banner

```njk
{{ notificationbanner({
  text: 'The patient record was updated.'
}) }}
```

### Pagination

```njk
{{ pagination({
  previousUrl: '/section/treatments',
  previousPage: 'Treatments',
  nextUrl: '/section/symptoms',
  nextPage: 'Symptoms'
}) }}
```

### Panel

```njk
{{ panel({
  titleText: 'Booking complete',
  text: 'We have sent you a confirmation email'
}) }}
```

### Radios

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Are you 18 or over?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  name: 'example',
  items: [
    {
      value: 'yes',
      text: 'Yes'
    },
    {
      value: 'no',
      text: 'No'
    }
  ]
}) }}
```

### Select

```njk
{{ select({
  label: {
    text: 'Sort by',
    isPageHeading: true
  },
  name: 'example',
  items: [
    {
      value: 'published',
      text: 'Recently published'
    },
    {
      value: 'updated',
      text: 'Recently updated'
    },
    {
      value: 'views',
      text: 'Most views'
    },
    {
      value: 'comments',
      text: 'Most comments'
    }
  ]
}) }}
```

### Skip link

```njk
{{ skiplink({
  href: '#maincontent',
  text: 'Skip to main content'
}) }}
```

### Summary list

```njk
{{ summarylist({
  rows: [
    {
      key: {
        text: 'Name'
      },
      value: {
        text: 'Karen Francis'
      },
      actions: {
        items: [
          {
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'name'
          }
        ]
      }
    },
    {
      key: {
        text: 'Date of birth'
      },
      value: {
        text: '15 March 1984'
      },
      actions: {
        items: [
          {
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'date of birth'
          }
        ]
      }
    },
    {
      key: {
        text: 'Contact information'
      },
      value: {
        html: '73 Roman Rd<br>
Leeds<br>
LS2 5ZN'
      },
      actions: {
        items: [
          {
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact information'
          }
        ]
      }
    },
    {
      key: {
        text: 'Contact details'
      },
      value: {
        html: '<p>07700 900362</p>
<p>karen.francis@example.com</p>'
      },
      actions: {
        items: [
          {
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }
        ]
      }
    }
  ]
}) }}
```

### Tables

```njk
{{ tables({
  caption: 'Skin symptoms and possible causes',
  head: [
    {
      text: 'Skin symptoms'
    },
    {
      text: 'Possible cause'
    }
  ],
  rows: [
    [
      {
        text: 'Blisters on lips or around the mouth'
      },
      {
        text: 'Cold sores'
      }
    ],
    [
      {
        text: 'Itchy, dry, cracked, sore'
      },
      {
        text: 'Eczema'
      }
    ],
    [
      {
        text: 'Itchy blisters'
      },
      {
        text: 'Shingles, chickenpox'
      }
    ]
  ]
}) }}
```

### Tabs

```njk
{{ tabs({
  items: [
    {
      label: 'Past day',
      id: 'past-day',
      panel: {
        html: '  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past day</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">3</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">0</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">0</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">2</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">0</td>      </tr>    </tbody>
  </table>'
      }
    },
    {
      label: 'Past week',
      id: 'past-week',
      panel: {
        html: '  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past week</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">24</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">18</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">16</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">20</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">24</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">27</td>      </tr>    </tbody>
  </table>'
      }
    },
    {
      label: 'Past month',
      id: 'past-month',
      panel: {
        html: '  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past month</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">98</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">95</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">122</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">131</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">126</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">142</td>      </tr>    </tbody>
  </table>'
      }
    },
    {
      label: 'Past year',
      id: 'past-year',
      panel: {
        html: '  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past year</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1380</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1472</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1129</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1083</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1539</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1265</td>      </tr>    </tbody>
  </table>'
      }
    }
  ]
}) }}
```

### Tag

```njk
{{ tag({
  text: 'Active'
}) }}
```

### Task list

```njk
{{ tasklist({
  idPrefix: 'your-health',
  items: [
    {
      title: {
        text: 'Exercise'
      },
      href: '#',
      status: {
        text: 'Completed',
        classes: 'nhsuk-task-list__status--completed'
      }
    },
    {
      title: {
        text: 'Personal health'
      },
      href: '#',
      status: {
        text: 'Completed',
        classes: 'nhsuk-task-list__status--completed'
      }
    },
    {
      title: {
        text: 'Family health history'
      },
      hint: {
        text: 'Details of your parents, brothers and sisters'
      },
      href: '#',
      status: {
        tag: {
          text: 'Incomplete',
          classes: 'nhsuk-tag--blue'
        }
      }
    },
    {
      title: {
        text: 'Smoking history'
      },
      href: '#',
      status: {
        tag: {
          text: 'Incomplete',
          classes: 'nhsuk-tag--blue'
        }
      }
    },
    {
      title: {
        text: 'Blood test'
      },
      status: {
        text: 'Cannot start yet',
        classes: 'nhsuk-task-list__status--cannot-start-yet'
      }
    }
  ]
}) }}
```

### Textarea

```njk
{{ textarea({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  name: 'example'
}) }}
```

### Warning callout

```njk
{{ warningcallout({
  heading: 'Important',
  text: 'For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements.'
}) }}
```


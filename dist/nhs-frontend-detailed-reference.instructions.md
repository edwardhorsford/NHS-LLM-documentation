# NHS Frontend Components - Detailed Reference

---
**Auto-generated Documentation**

- **NHS Frontend Version:** 10.0.0
- **Git Branch:** main
- **Git Commit:** 52eeee1
- **Generated:** 2025-10-06 09:43:30 UTC
- **Source:** [NHS Frontend Repository](https://github.com/nhsuk/nhsuk-frontend)

*This documentation is automatically extracted from NHS Frontend component definitions. Do not edit manually.*

---

This comprehensive reference guide for NHS Frontend components includes all parameters and examples.

## Action link

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the action link. |
| `text` | string | ✓ | Text to use within the action link component. |
| `href` | string | ✓ | The value of the link href attribute. |
| `openInNewWindow` | boolean |  | If set to true, then the link will open in a new window. |
| `classes` | string |  | Classes to add to the anchor tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the anchor tag. |

### Examples

#### default

```njk
{{ actionlink({
  text: 'Find your nearest A&E',
  href: '#'
}) }}
```

#### reverse

```njk
{{ actionlink({
  classes: 'nhsuk-action-link--reverse',
  text: 'Find your nearest A&E',
  href: '#'
}) }}
```

---

## Back link

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the back link. |
| `text` | string |  | Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`. |
| `html` | string |  | HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`. |
| `href` | string |  | The value of the link href attribute. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |
| `element` | string |  | HTML element for the back link component – `"button"` or `"a"`. If not provided, defaults to `"a"`. |

### Examples

#### default

```njk
{{ backlink({
  text: 'Back',
  href: '#'
}) }}
```

#### as a button

```njk
{{ backlink({
  text: 'Back',
  element: 'button'
}) }}
```

#### reverse

```njk
{{ backlink({
  text: 'Back',
  href: '#',
  classes: 'nhsuk-back-link--reverse'
}) }}
```

---

## Breadcrumb

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the breadcrumb. |
| `items` | array | ✓ | Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page. |
| `items.text` | string | ✓ | Text to use within the breadcrumbs item. |
| `items.href` | string |  | The value of the breadcrumb item link href attribute. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the individual crumb. |
| `text` | string | ✓ | Text to use for the parent page. |
| `href` | string | ✓ | The value of the parent page link href attribute. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |
| `labelText` | string |  | Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". |

### Examples

#### default

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

#### reverse

```njk
{{ breadcrumb({
  classes: 'nhsuk-breadcrumb--reverse',
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

#### attributes

```njk
{{ breadcrumb({
  items: [
    {
      href: '#',
      text: 'Home',
      attributes: {
        lang: 'en'
      }
    },
    {
      href: '#',
      text: 'NHS services',
      attributes: {
        lang: 'en'
      }
    },
    {
      href: '#',
      text: 'Hospitals',
      classes: 'example-class-one example-class-two',
      attributes: {
        lang: 'en'
      }
    }
  ]
}) }}
```

---

## Button

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `element` | string |  | HTML element for the button component – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided. |
| `text` | string | ✓ | If `html` is set, this is not required. Text for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`. |
| `name` | string |  | Name for the `input` or `button`. This has no effect on `a` elements. |
| `type` | string |  | Type of `input` or `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements. |
| `value` | string |  | Value for the `button` tag. This has no effect on `a` or `input` elements. |
| `disabled` | boolean |  | Whether the button should be disabled. For button and input elements, `disabled` and `aria-disabled` attributes will be set automatically. |
| `href` | string |  | The URL that the button should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined. |
| `classes` | string |  | Classes to add to the button component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the button component. |
| `preventDoubleClick` | boolean |  | Prevent accidental double clicks on submit buttons from submitting forms multiple times. |

### Examples

#### default

```njk
{{ button({
  text: 'Save and continue'
}) }}
```

#### disabled

```njk
{{ button({
  text: 'Disabled button',
  disabled: true
}) }}
```

#### as a link

```njk
{{ button({
  text: 'Link button',
  href: '#'
}) }}
```

#### login

```njk
{{ button({
  text: 'Continue',
  classes: 'nhsuk-button--login'
}) }}
```

#### login disabled

```njk
{{ button({
  text: 'Continue',
  classes: 'nhsuk-button--login',
  disabled: true
}) }}
```

#### login as a link

```njk
{{ button({
  text: 'Continue',
  classes: 'nhsuk-button--login',
  href: '#'
}) }}
```

#### with double click prevented

```njk
{{ button({
  text: 'Save and continue',
  preventDoubleClick: true
}) }}
```

#### with double click not prevented

```njk
{{ button({
  text: 'Save and continue',
  preventDoubleClick: false
}) }}
```

#### reverse

```njk
{{ button({
  text: 'Log out',
  classes: 'nhsuk-button--reverse'
}) }}
```

#### reverse disabled

```njk
{{ button({
  text: 'Log out',
  classes: 'nhsuk-button--reverse',
  disabled: true
}) }}
```

#### reverse as a link

```njk
{{ button({
  text: 'Log out',
  classes: 'nhsuk-button--reverse',
  href: '#'
}) }}
```

#### secondary

```njk
{{ button({
  text: 'Find my location',
  classes: 'nhsuk-button--secondary'
}) }}
```

#### secondary disabled

```njk
{{ button({
  text: 'Find my location',
  classes: 'nhsuk-button--secondary',
  disabled: true
}) }}
```

#### secondary as a link

```njk
{{ button({
  text: 'Find my location',
  classes: 'nhsuk-button--secondary',
  href: '#'
}) }}
```

#### secondary, solid background

```njk
{{ button({
  text: 'Find my location',
  classes: 'nhsuk-button--secondary-solid'
}) }}
```

#### secondary, solid background disabled

```njk
{{ button({
  text: 'Find my location',
  classes: 'nhsuk-button--secondary-solid',
  disabled: true
}) }}
```

#### secondary, solid background as a link

```njk
{{ button({
  text: 'Find my location',
  classes: 'nhsuk-button--secondary-solid',
  href: '#'
}) }}
```

#### warning

```njk
{{ button({
  text: 'Yes, delete this vaccine',
  classes: 'nhsuk-button--warning'
}) }}
```

#### warning disabled

```njk
{{ button({
  text: 'Yes, delete this vaccine',
  classes: 'nhsuk-button--warning',
  disabled: true
}) }}
```

#### warning as a link

```njk
{{ button({
  text: 'Yes, delete this vaccine',
  classes: 'nhsuk-button--warning',
  href: '#'
}) }}
```

---

## Card

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the card. |
| `heading` | string | ✓ | Text to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored. |
| `headingHtml` | string | ✓ | HTML to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored. |
| `headingClasses` | string |  | Classes to add to the card heading. |
| `headingLevel` | integer |  | Optional heading level for the card heading. Defaults to `2`. |
| `href` | string |  | The value of the card link href attribute. |
| `clickable` | boolean |  | If set to true, then the whole card will become a clickable card variant. |
| `type` | string |  | Care card variant type – `"non-urgent"`, `"urgent"` or `"emergency"`. |
| `feature` | boolean |  | If set to true, then the card will become a feature card variant. |
| `primary` | boolean |  | If set to true, the card will become a primary card variant (with chevron). |
| `secondary` | boolean |  | If set to true, the card will become a secondary card variant. |
| `topTask` | boolean |  | If set to true, the card will become a top task card variant. |
| `imgURL` | string |  | The URL of the image in the card. |
| `imgALT` | string |  | The alternative text of the image in the card. |
| `description` | string |  | Text description within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored. |
| `descriptionHtml` | string |  | HTML to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire card component in a `call` block. |
| `classes` | string |  | Classes to add to the card. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the card. |

### Examples

#### default

```njk
{% call card({
  heading: 'If you need help now, but it's not an emergency',
  headingLevel: 3
}) %}
  <p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{% endcall %}
```

#### basic with custom HTML

```njk
{% call card({
  heading: 'Help from NHS 111',
  headingLevel: 3
}) %}
  <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
  <p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
  <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{% endcall %}
```

#### non-urgent (blue)

```njk
{% call card({
  heading: 'Speak to a GP if:',
  headingLevel: 3,
  type: 'non-urgent'
}) %}
  <ul>
    <li>you're not sure it's chickenpox</li>
    <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
    <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
    <li>you're concerned about your child or they get worse</li>
  </ul>
  <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
{% endcall %}
```

#### urgent (red)

```njk
{% call card({
  heading: 'Ask for an urgent GP appointment if:',
  headingLevel: 3,
  type: 'urgent'
}) %}
  <ul>
    <li>you're an adult and have chickenpox</li>
    <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
    <li>you have a weakened immune system and you've been near someone with chickenpox</li>
    <li>you think your newborn baby has chickenpox</li>
  </ul>
  <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
{% endcall %}
```

#### emergency (red and black)

```njk
{% call card({
  heading: 'Call 999 if you have sudden chest pain that:',
  headingLevel: 3,
  type: 'emergency'
}) %}
  <ul>
    <li>spreads to your arms, back, neck or jaw</li>
    <li>makes your chest feel tight or heavy</li>
    <li>also started with shortness of breath, sweating and feeling or being sick</li>
  </ul>
  <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
{% endcall %}
```

#### emergency (red and black) with action link

```njk
{% call card({
  heading: 'Call 999 or go to A&E now if:',
  headingLevel: 3,
  type: 'emergency'
}) %}
  <ul>
    <li>you're coughing up more than just a few spots or streaks of blood – this could be a sign of serious bleeding in your lungs</li>
    <li>you have severe difficulty breathing – you're gasping, choking or not able to get words out</li>
  </ul>
  
  
  <div class="nhsuk-action-link">
    <a class="nhsuk-action-link__link nhsuk-action-link--reverse" href="#">
      <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
      </svg>
      <span class="nhsuk-action-link__text">Find your nearest A&amp;E</span>
    </a>
  </div>
{% endcall %}
```

#### primary (with chevron)

```njk
{{ card({
  href: '#',
  primary: true,
  clickable: true,
  heading: 'Breast screening',
  headingClasses: 'nhsuk-heading-m'
}) }}
```

#### primary (with chevron and description)

```njk
{{ card({
  href: '#',
  primary: true,
  clickable: true,
  heading: 'Introduction to care and support',
  headingClasses: 'nhsuk-heading-m',
  description: 'A quick guide for people who have care and support needs and their carers'
}) }}
```

#### clickable

```njk
{{ card({
  href: '#',
  clickable: true,
  heading: 'Introduction to care and support',
  headingClasses: 'nhsuk-heading-m',
  description: 'A quick guide for people who have care and support needs and their carers'
}) }}
```

#### secondary

```njk
{{ card({
  href: '#',
  clickable: true,
  secondary: true,
  heading: 'Urgent and emergency care services',
  headingClasses: 'nhsuk-heading-m',
  description: 'Services the NHS provides if you need urgent or emergency medical help'
}) }}
```

#### feature

```njk
{{ card({
  feature: true,
  href: '#',
  heading: 'Feature card heading',
  headingClasses: 'nhsuk-heading-m',
  description: 'Feature card description'
}) }}
```

#### with image

```njk
{{ card({
  imgURL: 'https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg',
  href: '#',
  clickable: true,
  heading: 'Exercise',
  headingClasses: 'nhsuk-heading-m',
  description: 'Programmes, workouts and tips to get you moving and improve your fitness and wellbeing'
}) }}
```

#### top task

```njk
{{ card({
  href: '#',
  clickable: true,
  headingLevel: 5,
  heading: 'Order a repeat prescription',
  headingClasses: 'nhsuk-heading-xs'
}) }}
```

---

## Character count

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `label` | object | ✓ | Options for the label component. |
| `hint` | object |  | Options for the hint component. |
| `errorMessage` | object |  | Options for the error message component. |
| `formGroup` | object |  | Additional options for the form group containing the character count component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the textarea used by the character count component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the textarea used by the character count component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Optional additional classes to add to the textarea tag. Separate each class with a space. |
| `maxlength` | string |  | If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` argument will be ignored. |
| `maxwords` | string |  | If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` argument will be ignored. |
| `threshold` | string |  | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. |
| `spellcheck` | boolean |  | Optional field to enable or disable the spellcheck attribute on the textarea. |
| `attributes` | object |  | Any extra HTML attributes (for example data attributes) to add to the textarea tag. |
| `countMessage` | object |  | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string |  | Classes to add to the count message. |

### Examples

#### default

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

#### with hint

```njk
{{ charactercount({
  label: {
    text: 'Enter a job description',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  id: 'with-hint',
  name: 'example',
  maxlength: 200
}) }}
```

#### with error message

```njk
{{ charactercount({
  label: {
    text: 'Enter a job description',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  errorMessage: {
    text: 'Job description must be 350 characters or less'
  },
  id: 'with-error-message',
  name: 'example',
  maxlength: 350,
  value: 'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
}) }}
```

#### with hint and error

```njk
{{ charactercount({
  label: {
    text: 'Enter a job description',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  errorMessage: {
    text: 'Job description must be 350 characters or less'
  },
  id: 'with-error-message',
  name: 'example',
  maxlength: 350,
  value: 'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
}) }}
```

#### with default value

```njk
{{ charactercount({
  label: {
    text: 'Enter a job description',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  errorMessage: {
    text: 'Job description must be 350 characters or less'
  },
  id: 'with-error-message',
  name: 'example',
  maxlength: 350,
  value: 'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels.'
}) }}
```

#### with custom rows

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'custom-rows',
  name: 'example',
  maxlength: 350,
  rows: 15
}) }}
```

#### with label size S

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--s',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  maxlength: 200
}) }}
```

#### with label size M

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--m',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  maxlength: 200
}) }}
```

#### with label size L

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  maxlength: 200
}) }}
```

#### with label size XL

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--xl',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  maxlength: 200
}) }}
```

#### without page heading

```njk
{{ charactercount({
  label: {
    text: 'Tell us more about what happened'
  },
  id: 'without-heading',
  name: 'example',
  maxlength: 150
}) }}
```

#### with maxlength attribute

```njk
{{ charactercount({
  label: {
    text: 'Enter a job description'
  },
  id: 'maxlength-attribute',
  name: 'example',
  maxlength: 11,
  attributes: {
    maxlength: 11
  }
}) }}
```

#### with word count

```njk
{{ charactercount({
  label: {
    text: 'Enter a job description',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'with-word-count',
  name: 'example',
  maxwords: 150
}) }}
```

#### with threshold

```njk
{{ charactercount({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'with-threshold',
  name: 'example',
  value: 'Type another letter into this field after this message to see the threshold feature',
  maxlength: 112,
  threshold: 75
}) }}
```

---

## Checkboxes

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the checkboxes component. |
| `describedBy` | string |  | One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users. |
| `fieldset` | object |  | Options for the fieldset component (for example legend). |
| `hint` | object |  | Options for the hint component (for example text). |
| `errorMessage` | object |  | Options for the error message component. |
| `formGroup` | object |  | Additional options for the form group containing the checkboxes component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before all checkbox items within the checkboxes component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after all checkbox items within the checkboxes component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string |  | String to prefix id for each checkbox item if no id is specified on each item. If not passed, fall back to using the name option instead. |
| `name` | string | ✓ | Name attribute for all checkbox items. |
| `items` | array | ✓ | Array of checkbox items objects. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` argument will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` argument will be ignored. |
| `items.id` | string |  | Specific id attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied. |
| `items.name` | string |  | Specific name for the checkbox item. If omitted, then component global `name` string will be applied. |
| `items.label` | object |  | Options for the label component. |
| `items.value` | string | ✓ | Value for the checkbox input. |
| `items.divider` | string | ✓ | Optional divider text to separate checkbox items, for example the text `'or'`. |
| `items.hint` | object |  | Provide hint to each checkbox item. |
| `items.checked` | boolean |  | If true, checkbox will be checked. |
| `items.conditional` | object |  | Provide additional content to reveal when the checkbox is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the checkbox is checked. |
| `items.disabled` | boolean |  | If true, checkbox will be disabled. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `exclusive` | boolean |  | If set to `true`, marks this checkbox as the None option in a None of these type behaviour. Unchecking all other checkboxes in the group when None is clicked. |
| `exclusiveGroup` | string |  | Used in conjunction with `exclusive` - this should be set to a string which groups checkboxes together into a set for use in a None of these scenario. |
| `values` | array |  | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string |  | Classes to add to the checkboxes container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the anchor tag. |

### Examples

#### default

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

#### with hint

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'What is your nationality?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'If you have dual nationality, select all options that are relevant to you'
  },
  idPrefix: 'with-hint',
  name: 'example',
  items: [
    {
      value: 'british',
      text: 'British'
    },
    {
      value: 'irish',
      text: 'Irish'
    },
    {
      value: 'other',
      text: 'Citizen of another country'
    }
  ]
}) }}
```

#### with pre-checked values

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'What is your nationality?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'with-values',
  name: 'example',
  values: [
    'british'
  ],
  items: [
    {
      value: 'british',
      text: 'British'
    },
    {
      value: 'irish',
      text: 'Irish'
    },
    {
      value: 'other',
      text: 'Citizen of another country'
    }
  ]
}) }}
```

#### with hints on items

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'What is your nationality?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'If you have dual nationality, select all options that are relevant to you'
  },
  idPrefix: 'with-hint-item',
  name: 'example',
  items: [
    {
      value: 'british',
      text: 'British',
      hint: {
        text: 'including English, Scottish, Welsh and Northern Irish'
      }
    },
    {
      value: 'irish',
      text: 'Irish'
    },
    {
      value: 'other',
      text: 'Citizen of another country'
    }
  ]
}) }}
```

#### with disabled item

```njk
{{ checkboxes({
  id: 'with-disabled-item',
  name: 'colours',
  items: [
    {
      value: 'red',
      text: 'Red'
    },
    {
      value: 'green',
      text: 'Green'
    },
    {
      value: 'blue',
      text: 'Blue',
      disabled: true
    }
  ]
}) }}
```

#### with error message

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  errorMessage: {
    text: 'Select how you want to be contacted'
  },
  idPrefix: 'with-error-message',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### with hint and error

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
  errorMessage: {
    text: 'Select how you want to be contacted'
  },
  idPrefix: 'with-hint-error',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### with legend size S

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--s',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select all options that are relevant to you'
  },
  idPrefix: 'custom-size',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### with legend size M

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--m',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select all options that are relevant to you'
  },
  idPrefix: 'custom-size',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### with legend size L

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
  idPrefix: 'custom-size',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### with legend size XL

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--xl',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select all options that are relevant to you'
  },
  idPrefix: 'custom-size',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### without page heading

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?'
    }
  },
  hint: {
    text: 'Select all options that are relevant to you'
  },
  idPrefix: 'without-heading',
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
      value: 'text message',
      text: 'Text message'
    }
  ]
}) }}
```

#### with conditional content

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
  idPrefix: 'conditional',
  name: 'contact',
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    }
  ]
}) }}
```

#### with conditional content, error message

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
  errorMessage: {
    text: 'Select how you like to be contacted'
  },
  idPrefix: 'conditional',
  name: 'contact',
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    }
  ]
}) }}
```

#### with conditional content, error message (nested)

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
  idPrefix: 'conditional',
  name: 'example',
  values: [
    'phone'
  ],
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>  <span class="nhsuk-error-message" id="phone-error">
  <span class="nhsuk-u-visually-hidden">Error:</span> Enter your phone number
  </span>    <input class="nhsuk-input nhsuk-u-width-two-thirds nhsuk-input--error" id="phone" name="phone" type="tel" aria-describedby="phone-error"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    }
  ]
}) }}
```

#### with "none of the above" option

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'conditional',
  name: 'example',
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    },
    {
      divider: 'or'
    },
    {
      value: 'none',
      text: 'None of the above',
      exclusive: true
    }
  ]
}) }}
```

#### with "none of the above" option (named group)

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'conditional',
  name: 'example',
  items: [
    {
      value: 'email',
      text: 'Email',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    },
    {
      divider: 'or'
    },
    {
      value: 'none',
      text: 'None of the above',
      exclusive: true,
      exclusiveGroup: 'communication-preferences'
    }
  ]
}) }}
```

#### with "none of the above" option (named group, unique)

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'conditional',
  items: [
    {
      name: 'preference-email',
      value: 'yes',
      text: 'Email',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      name: 'preference-phone',
      value: 'yes',
      text: 'Phone',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      name: 'preference-text',
      value: 'yes',
      text: 'Text message',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    },
    {
      divider: 'or'
    },
    {
      name: 'preference-none',
      value: 'yes',
      text: 'None of the above',
      exclusive: true,
      exclusiveGroup: 'communication-preferences'
    }
  ]
}) }}
```

---

## Contents list

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the contents list. |
| `items` | array | ✓ | Array of content list items objects. |
| `items.href` | string | ✓ | href value to use within each content list item label. |
| `items.text` | string | ✓ | Text to use within each content list item label. |
| `current` | boolean |  | Set the current active page. |
| `classes` | string |  | Classes to add to the content list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to items in the content list. |

### Examples

#### default

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

---

## Date input

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | This is used for the main component and to compose id attribute for each item. |
| `namePrefix` | string |  | Optional prefix. This is used to prefix each `item.name` using `'-'`. |
| `items` | array |  | An array of input objects with name, value and classes. |
| `items.id` | string |  | Item-specific id. If provided, it will be used instead of the generated id. |
| `items.name` | string | ✓ | Item-specific name attribute. |
| `items.label` | string |  | Item-specific label text. If provided, this will be used instead of `name` for item label text. |
| `items.inputmode` | string |  | Optional value for [the inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). Defaults to `'numeric'`. |
| `items.value` | string |  | Optional initial value of the input. |
| `items.autocomplete` | string |  | Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance `'postal-code'` or `'username'`. See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used. |
| `items.pattern` | string |  | Attribute to [provide a regular expression pattern](https://www.w3.org/TR/html51/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `items.classes` | string |  | Classes to add to the date input item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the date input item. |
| `fieldset` | object |  | Options for the fieldset component (for example legend). |
| `hint` | object |  | Options for the hint component. |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `values` | object |  | An optional object use to specify value attributes for the date parts without setting items. |
| `values.day` | string |  | Value attribute for the day input. |
| `values.month` | string |  | Value attribute for the month input. |
| `values.year` | string |  | Value attribute for the year input. |
| `classes` | string |  | Classes to add to the date-input container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the date-input container. |

### Examples

#### default

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

#### with values

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
  id: 'example',
  values: {
    day: '5',
    month: '8',
    year: '2024'
  }
}) }}
```

#### day and month

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your birthday?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 5 12'
  },
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2'
    }
  ]
}) }}
```

#### month and year

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'When did you start your job?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 11 2023'
  },
  id: 'example',
  items: [
    {
      name: 'month',
      classes: 'nhsuk-input--width-2'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4'
    }
  ]
}) }}
```

#### month and year with values

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'When did you start your job?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 11 2023'
  },
  id: 'example',
  values: {
    month: '8',
    year: '2024'
  },
  items: [
    {
      name: 'month',
      classes: 'nhsuk-input--width-2'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4'
    }
  ]
}) }}
```

#### with legend size S

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your date of birth?',
      classes: 'nhsuk-fieldset__legend--s',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 31 3 1980'
  },
  id: 'custom-size'
}) }}
```

#### with legend size M

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your date of birth?',
      classes: 'nhsuk-fieldset__legend--m',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 31 3 1980'
  },
  id: 'custom-size'
}) }}
```

#### with legend size L

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
  id: 'custom-size'
}) }}
```

#### with legend size XL

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your date of birth?',
      classes: 'nhsuk-fieldset__legend--xl',
      isPageHeading: true
    }
  },
  hint: {
    text: 'For example, 31 3 1980'
  },
  id: 'custom-size'
}) }}
```

#### without page heading

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your date of birth?'
    }
  },
  hint: {
    text: 'For example, 31 3 1980'
  },
  id: 'example'
}) }}
```

#### with autocomplete values

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
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2',
      autocomplete: 'bday-day'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2',
      autocomplete: 'bday-month'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4',
      autocomplete: 'bday-year'
    }
  ]
}) }}
```

#### with custom name prefix

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
  id: 'example',
  namePrefix: 'example'
}) }}
```

#### with errors only

```njk
{{ dateinput({
  fieldset: {
    legend: {
      text: 'What is your date of birth?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  errorMessage: {
    text: 'Enter your date of birth'
  },
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4 nhsuk-input--error'
    }
  ]
}) }}
```

#### with errors and hint

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
  errorMessage: {
    text: 'Enter your date of birth'
  },
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4 nhsuk-input--error'
    }
  ]
}) }}
```

#### with error on day input

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
  errorMessage: {
    text: 'Date of birth must include a day'
  },
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'month',
      value: '3',
      classes: 'nhsuk-input--width-2'
    },
    {
      name: 'year',
      value: '1980',
      classes: 'nhsuk-input--width-4'
    }
  ]
}) }}
```

#### with error on month input

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
  errorMessage: {
    text: 'Date of birth must include a month'
  },
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2',
      value: '31'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4',
      value: '1980'
    }
  ]
}) }}
```

#### with error on year input

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
  errorMessage: {
    text: 'Date of birth must include a year'
  },
  id: 'example',
  items: [
    {
      name: 'day',
      classes: 'nhsuk-input--width-2',
      value: '31'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2',
      value: '3'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4 nhsuk-input--error'
    }
  ]
}) }}
```

---

## Details

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `summaryText` | string | ✓ | If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `summaryHtml` | string | ✓ | If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | Id to add to the details element. |
| `open` | boolean |  | If true, details element will be expanded. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block. |
| `classes` | string |  | Classes to add to the details element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the details element. |

### Examples

#### default

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

#### open

```njk
{% call details({
  summaryText: 'How to find your NHS number',
  open: true
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

#### expander

```njk
{% call details({
  summaryText: 'Opening times',
  classes: 'nhsuk-expander'
}) %}
  <table class="nhsuk-table">    <thead class="nhsuk-table__head">
        <tr>          <th scope="col" class="nhsuk-table__header">Day of the week</th>          <th scope="col" class="nhsuk-table__header">Opening hours</th>      </tr>
      </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Monday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Tuesday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Wednesday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Thursday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Friday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Saturday</th>            <td class="nhsuk-table__cell">9am to 1pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Sunday</th>            <td class="nhsuk-table__cell">Closed</td>      </tr>    </tbody>
    </table>
{% endcall %}
```

#### expander open

```njk
{% call details({
  summaryText: 'Opening times',
  classes: 'nhsuk-expander',
  open: true
}) %}
  <table class="nhsuk-table">    <thead class="nhsuk-table__head">
        <tr>          <th scope="col" class="nhsuk-table__header">Day of the week</th>          <th scope="col" class="nhsuk-table__header">Opening hours</th>      </tr>
      </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Monday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Tuesday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Wednesday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Thursday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Friday</th>            <td class="nhsuk-table__cell">9am to 6pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Saturday</th>            <td class="nhsuk-table__cell">9am to 1pm</td>      </tr>      <tr class="nhsuk-table__row">            <th scope="row" class="nhsuk-table__header">Sunday</th>            <td class="nhsuk-table__cell">Closed</td>      </tr>    </tbody>
    </table>
{% endcall %}
```

---

## Do and Don't list

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the do and don't list component. |
| `title` | string | ✓ | Title to be displayed on the do and don't list component. |
| `type` | string | ✓ | Type of do and don't list component – `'cross'` or `'tick'`. |
| `items` | array | ✓ | Array of do and don't items objects. |
| `items.item` | string | ✓ | Text to use within each do and don't item label. |
| `hidePrefix` | boolean |  | If set to true when type is `'cross'`, then removes the default `'do not'` text prefix to each item. |
| `headingLevel` | integer |  | Optional heading level for the title heading. Defaults to `3`. |
| `classes` | string |  | Classes to add to the do and don't list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the do and don't list container. |

### Examples

#### default

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

#### don't

```njk
{{ doanddon'tlist({
  title: 'Don't',
  type: 'cross',
  items: [
    {
      item: 'burst a blister yourself'
    },
    {
      item: 'peel the skin off a burst blister'
    },
    {
      item: 'pick at the edges of the remaining skin'
    },
    {
      item: 'wear the shoes or use the equipment that caused your blister until it heals'
    }
  ]
}) }}
```

---

## Error message

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` argument will be ignored. |
| `id` | string |  | Id attribute to add to the error message span tag. |
| `classes` | string |  | Classes to add to the error message span tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error message span tag. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the error message. Defaults to `"Error"`. |

### Examples

#### default

```njk
{{ errormessage({
  text: 'Enter your full name'
}) }}
```

---

## Error summary

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the error summary. |
| `titleText` | string | ✓ | If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `titleHtml` | string | ✓ | If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `descriptionText` | string |  | Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`. |
| `descriptionHtml` | string |  | HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array | ✓ | Contains an array of error link items and all their available arguments. |
| `errorList.href` | string |  | Href attribute for the error link item. If provided item will be an anchor. |
| `errorList.text` | string | ✓ | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` argument will be ignored. |
| `errorList.html` | string | ✓ | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` argument will be ignored. |
| `errorList.attributes` | object |  | HTML attributes (for example data attributes) to add to the error link anchor. |
| `disableAutoFocus` | boolean |  | Prevent moving focus to the error summary when the page loads. |
| `classes` | string |  | Classes to add to the error-summary container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error-summary container. |

### Examples

#### default

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

#### without description

```njk
{{ errorsummary({
  titleText: 'There is a problem',
  errorList: [
    {
      text: 'Date of birth must be in the past',
      href: '#example-day'
    }
  ]
}) }}
```

#### auto-focus disabled

```njk
{{ errorsummary({
  titleText: 'There is a problem',
  errorList: [
    {
      text: 'Date of birth must be in the past',
      href: '#example-day'
    }
  ],
  disableAutoFocus: true
}) }}
```

#### auto-focus explicitly enabled

```njk
{{ errorsummary({
  titleText: 'There is a problem',
  errorList: [
    {
      text: 'Date of birth must be in the past',
      href: '#example-day'
    }
  ],
  disableAutoFocus: false
}) }}
```

---

## Fieldset

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the fieldset. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `legend` | object |  | Options for the legend |
| `legend.text` | string | ✓ | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` argument will be ignored. |
| `legend.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` argument will be ignored. |
| `legend.classes` | string |  | Classes to add to the legend. |
| `legend.isPageHeading` | boolean |  | Whether the legend also acts as the heading for the page. |
| `classes` | string |  | Classes to add to the fieldset container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the fieldset container. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block. |

### Examples

#### default

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

#### with legend size XL

```njk
{{ fieldset({
  legend: {
    text: 'What is your address?',
    classes: 'nhsuk-fieldset__legend--xl',
    isPageHeading: true
  }
}) }}
```

#### with legend size L

```njk
{{ fieldset({
  legend: {
    text: 'What is your address?',
    classes: 'nhsuk-fieldset__legend--l',
    isPageHeading: true
  }
}) }}
```

#### with legend size M

```njk
{{ fieldset({
  legend: {
    text: 'What is your address?',
    classes: 'nhsuk-fieldset__legend--m',
    isPageHeading: true
  }
}) }}
```

#### with legend size S

```njk
{{ fieldset({
  legend: {
    text: 'What is your address?',
    classes: 'nhsuk-fieldset__legend--s',
    isPageHeading: true
  }
}) }}
```

#### without page heading

```njk
{{ fieldset({
  legend: {
    text: 'What is your address?'
  }
}) }}
```

---

## Footer

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the footer. |
| `columns` | integer |  | Number of columns to display per row in the navigation section of the footer – `4`, `3`, `2` or `1`. Defaults to `4`. |
| `navigation` | object |  | The navigation section of the footer before the copyright information. Alternatively supports an array of `navigation` objects. |
| `navigation.title` | string |  | Title for group of footer navigation links. |
| `navigation.text` | string |  | Optional text to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.html` | string |  | Optional HTML to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.width` | string |  | Width of each navigation section column in the footer. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-quarter"`. |
| `navigation.items` | array |  | Contains the array of footer navigation link items for this group. |
| `navigation.items.href` | string | ✓ | Footer navigation link `href` attribute. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the anchor in the footer meta section. |
| `meta` | object |  | The meta section of the footer after any navigation, before the copyright information. |
| `meta.visuallyHiddenTitle` | string |  | Title for meta `items` links. Defaults to `"Support links"`. |
| `meta.html` | string |  | HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`. |
| `meta.text` | string |  | Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored. |
| `meta.items` | array |  | Contains the array of key policy footer link items. |
| `meta.items.href` | string | ✓ | Footer meta link `href` attribute. |
| `meta.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer meta link. If `html` is provided, the `text` option will be ignored. |
| `meta.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer meta link. If `html` is provided, the `text` option will be ignored. |
| `meta.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the footer meta link. |
| `copyright` | object |  | The copyright information in the footer component, this defaults to `"© NHS England"`. |
| `copyright.text` | string | ✓ | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used. |
| `copyright.html` | string | ✓ | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used. |
| `containerClasses` | string |  | Classes to add to the footer container, useful if you want to make the footer fixed width. |
| `classes` | string |  | Classes to add to the footer container. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire footer component in a `call` block. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the footer container. |

### Examples

#### default

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

#### with custom copyright text

```njk
{{ footer({
  copyright: {
    text: '© East London NHS Foundation Trust'
  }
}) }}
```

#### with meta (links only)

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

#### with meta (links and text)

```njk
{{ footer({
  copyright: {
    text: '© Crown copyright'
  },
  meta: {
    text: 'All content is available under the Open Government Licence v3.0, except where otherwise stated.',
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

#### with single navigation group

```njk
{{ footer({
  navigation: {
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

#### with multiple navigation groups

```njk
{{ footer({
  copyright: {
    text: '© Crown copyright'
  },
  navigation: [
    {
      items: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'Health A to Z'
        },
        {
          href: '#',
          text: 'NHS services'
        },
        {
          href: '#',
          text: 'Live Well'
        },
        {
          href: '#',
          text: 'Mental health'
        },
        {
          href: '#',
          text: 'Care and support'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Pregnancy'
        },
        {
          href: '#',
          text: 'COVID-19'
        }
      ]
    },
    {
      items: [
        {
          href: '#',
          text: 'NHS App'
        },
        {
          href: '#',
          text: 'Find my NHS number'
        },
        {
          href: '#',
          text: 'View your GP health records'
        },
        {
          href: '#',
          text: 'View your test results'
        },
        {
          href: '#',
          text: 'About the NHS'
        },
        {
          href: '#',
          text: 'Healthcare abroad'
        }
      ]
    },
    {
      items: [
        {
          href: '#',
          text: 'Other NHS websites'
        },
        {
          href: '#',
          text: 'Profile editor login'
        }
      ]
    },
    {
      items: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Our policies'
        },
        {
          href: '#',
          text: 'Cookies'
        }
      ]
    }
  ]
}) }}
```

#### with multiple navigation groups and custom HTML

```njk
{{ footer({
  copyright: {
    text: '© 2025 – Manchester University NHS Foundation Trust'
  },
  columns: 3,
  navigation: [
    {
      width: 'one-quarter',
      items: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        }
      ]
    },
    {
      width: 'one-quarter',
      items: [
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
    },
    {
      width: 'one-half',
      html: '<p class="nhsuk-body-s nhsuk-u-margin-bottom-6"><strong>Manchester
University NHS Foundation Trust (MFT)</strong> was formed on 1st
October 2017 following the merger of Central Manchester University
Hospitals NHS Foundation Trust (CMFT) and University Hospital of
South Manchester NHS Foundation Trust (UHSM).</p>'
    },
    {
      width: 'full',
      html: '<p class="nhsuk-body-s">Cobbett House, Manchester University NHS
Foundation Trust, Oxford Road, Manchester, M13 9WL</p>'
    }
  ]
}) }}
```

#### with multiple titled navigation groups

```njk
{{ footer({
  navigation: [
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          text: 'Looking after your data'
        },
        {
          href: '#',
          text: 'Freedom of information'
        },
        {
          href: '#',
          text: 'Modern Slavery and human trafficking statement'
        }
      ]
    },
    {
      title: 'Get in touch',
      items: [
        {
          href: '#',
          text: 'Contact us'
        },
        {
          href: '#',
          text: 'Press office'
        },
        {
          href: '#',
          text: 'Tell us what you think of our website'
        },
        {
          href: '#',
          text: 'RSS feeds'
        }
      ]
    },
    {
      title: 'Follow us',
      items: [
        {
          href: '#',
          text: 'LinkedIn'
        },
        {
          href: '#',
          text: 'YouTube'
        }
      ]
    }
  ]
}) }}
```

#### with meta and navigation

```njk
{{ footer({
  copyright: {
    text: '© Crown copyright'
  },
  navigation: [
    {
      items: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'Health A to Z'
        },
        {
          href: '#',
          text: 'Live Well'
        },
        {
          href: '#',
          text: 'Mental health'
        },
        {
          href: '#',
          text: 'Care and support'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Pregnancy'
        },
        {
          href: '#',
          text: 'NHS services'
        },
        {
          href: '#',
          text: 'Coronavirus (COVID-19)'
        }
      ]
    },
    {
      items: [
        {
          href: '#',
          text: 'NHS App'
        },
        {
          href: '#',
          text: 'Find my NHS number'
        },
        {
          href: '#',
          text: 'Your health records'
        },
        {
          href: '#',
          text: 'About the NHS'
        },
        {
          href: '#',
          text: 'Healthcare abroad'
        }
      ]
    },
    {
      items: [
        {
          href: '#',
          text: 'Other NHS websites'
        },
        {
          href: '#',
          text: 'Profile editor login'
        }
      ]
    }
  ],
  meta: {
    html: '<p class="nhsuk-body-s">
  <svg class="nhsuk-u-static-margin-right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 17" aria-hidden="true" focusable="false" height="17" width="41">
    <path fill="currentColor" d="M35.77 12.4V.02l-4.3 2.8V16.8H41v-4.4Zm-10.38-.83a3.93 3.93 0 0 1-4.29.64 4.09 4.09 0 0 1-2.35-3.71 3.97 3.97 0 0 1 7.36-2.2l3.63-2.35A8.25 8.25 0 0 0 22.75.02c-3.1 0-5.8 1.74-7.22 4.3A8.3 8.3 0 0 0 8.3.02 8.4 8.4 0 0 0 0 8.5a8.4 8.4 0 0 0 8.3 8.48c3.1 0 5.8-1.75 7.22-4.32a8.17 8.17 0 0 0 12.7 2.2l1.64 1.93h.25V9.18h-6.79Zm-17.1 1.02A4.04 4.04 0 0 1 4.3 8.5c0-2.25 1.8-4.08 4-4.08s4 1.82 4 4.08c0 2.25-1.8 4.09-4 4.09"/>
  </svg>
  All content is available under the <a class="nhsuk-footer__list-item-link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated.
</p>',
    items: [
      {
        href: '#',
        text: 'About us'
      },
      {
        href: '#',
        text: 'Give us feedback'
      },
      {
        href: '#',
        text: 'Accessibility statement'
      },
      {
        href: '#',
        text: 'Our policies'
      },
      {
        href: '#',
        text: 'Cookies'
      }
    ]
  }
}) }}
```

---

## Header

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the header. |
| `logo` | object |  | Object containing options for the logo |
| `logo.href` | string |  | The `href` of the link for the logo. If not set, and a `service.href` is set, or both are set to same value, then the logo and service name will be combined into a single link. |
| `logo.src` | string |  | The path of the logo image, if you are not using the default NHS logo. |
| `logo.alt` | string |  | The alt text for the logo. Defaults to `'NHS'` |
| `logo.ariaLabel` | string |  | The `aria-label` for a linked logo. Defaults to `'NHS homepage'` |
| `service` | object |  | Object containing options for the service name. |
| `service.text` | string |  | The text to use for the service name. |
| `service.href` | string |  | The `href` of the link for the service name. |
| `organisation` | object |  | Settings for header with organisational logo. |
| `organisation.name` | string |  | Organisation name. |
| `organisation.split` | string |  | Longer organisation names can be split onto multiple lines. |
| `organisation.descriptor` | string |  | Organisation descriptor. |
| `navigation` | object |  | Object containing settings for the primary navigation. |
| `navigation.items` | array |  | Array of navigation links for use in the header. |
| `navigation.items.href` | string | ✓ | The href of a navigation item in the header. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text for the navigation item. If `html` is provided, the `text` argument will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the navigation item. If `html` is provided, the `text` argument will be ignored. |
| `navigation.items.current` | boolean |  | Set to true if this links to the current page being shown. |
| `navigation.items.active` | boolean |  | Set to true if the current page is within this section, but the link doesn't necessarily link to the current page |
| `navigation.items.classes` | string |  | Classes to add to the list item containing the link. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the list item containing the link. |
| `navigation.ariaLabel` | string |  | The `aria-label` for the primary navigation. Defaults to `'Menu'` |
| `navigation.classes` | string |  | Classes to add to the primary navigation. |
| `navigation.attributes` | object |  | HTML attributes (for example data attributes) to add to the primary navigation. |
| `search` | object |  | Object containing settings for a search box |
| `search.action` | string |  | The search action endpoint. Defaults to `'https://www.nhs.uk/search'` |
| `search.name` | string |  | The name for the search field. Defaults to `'q'` |
| `search.placeholder` | string |  | The placeholder text for the search field. Defaults to `'Search'` |
| `search.visuallyHiddenLabel` | string |  | The label for the search field. Defaults to `'Search the NHS website'` |
| `search.visuallyHiddenButton` | string |  | The label for the visually hidden button. Defaults to `'Search'` |
| `account` | object |  | Object containing settings for the account section of the header. |
| `account.items` | array |  | Array of account items for use in the header. |
| `account.items.href` | string |  | The href of an account item in the header. |
| `account.items.text` | string | ✓ | If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` argument will be ignored. |
| `account.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` argument will be ignored. |
| `account.items.icon` | boolean |  | Whether to include the account icon for the account item. Defaults to `false`. |
| `account.items.action` | string |  | If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons. |
| `account.items.method` | string |  | The value to use for the `method` of the form if `action` is set. Defaults to `'post'` |
| `account.ariaLabel` | string |  | The `aria-label` for the account navigation. Defaults to `'Account'` |
| `account.classes` | string |  | Classes to add to the account navigation. |
| `account.attributes` | object |  | HTML attributes (for example data attributes) to add to the account navigation. |
| `baseUrl` | string |  | Base URL to prepend to the `logo.src` path. |
| `containerClasses` | string |  | Classes to add to the header container, useful if you want to make the header fixed width. |
| `classes` | string |  | Classes to add to the header container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the header container. |

### Examples

#### default

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

#### blue

```njk
{{ header({}) }}
```

#### blue (linked logo)

```njk
{{ header({
  logo: {
    href: '#'
  }
}) }}
```

#### blue with account (logged in)

```njk
{{ header({
  account: {
    items: [
      {
        href: '#',
        text: 'florence.nightingale@nhs.net',
        icon: true
      },
      {
        action: '#',
        text: 'Log out'
      }
    ]
  }
}) }}
```

#### blue with account (logged out)

```njk
{{ header({
  account: {
    items: [
      {
        href: '#',
        text: 'Log in'
      }
    ]
  }
}) }}
```

#### blue with navigation

```njk
{{ header({
  logo: {
    href: '#'
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      }
    ]
  }
}) }}
```

#### blue with navigation (justified)

```njk
{{ header({
  logo: {
    href: '#'
  },
  navigation: {
    classes: 'nhsuk-header__navigation--justified',
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      }
    ]
  }
}) }}
```

#### blue with navigation (overflow)

```njk
{{ header({
  logo: {
    href: '#'
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      },
      {
        href: '#',
        text: 'Another item #1'
      },
      {
        href: '#',
        text: 'Another item #2'
      }
    ]
  }
}) }}
```

#### blue with navigation (overflow, white)

```njk
{{ header({
  logo: {
    href: '#'
  },
  navigation: {
    classes: 'nhsuk-header__navigation--white',
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      },
      {
        href: '#',
        text: 'Another item #1'
      },
      {
        href: '#',
        text: 'Another item #2'
      }
    ]
  }
}) }}
```

#### blue with search

```njk
{{ header({
  search: true
}) }}
```

#### blue with service name

```njk
{{ header({
  logo: {
    href: '#'
  },
  service: {
    text: 'Find your NHS number'
  }
}) }}
```

#### blue with service name (linked)

```njk
{{ header({
  logo: {
    href: '#nhs'
  },
  service: {
    text: 'Find your NHS number',
    href: '#'
  }
}) }}
```

#### blue with service name (linked with logo)

```njk
{{ header({
  service: {
    text: 'Prototype kit',
    href: '#'
  }
}) }}
```

#### blue with service name (linked and long), search

```njk
{{ header({
  logo: {
    href: '#nhs'
  },
  service: {
    text: 'This a really long service name to fully test wrapping',
    href: '#'
  },
  search: true
}) }}
```

#### blue with service name, search, account (logged in, complex), navigation

```njk
{{ header({
  service: {
    href: '#',
    text: 'Manage patients'
  },
  search: {
    placeholder: 'Name or NHS number',
    visuallyHiddenLabel: 'Search patients by name or NHS number'
  },
  account: {
    items: [
      {
        href: '#',
        text: 'Florence Nightingale',
        icon: true
      },
      {
        text: 'Regional Manager, Hull and East Yorkshire Hospitals NHS Trust'
      },
      {
        href: '#',
        text: 'Change role'
      },
      {
        action: '#',
        text: 'Log out'
      }
    ]
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Home'
      },
      {
        href: '#',
        text: 'Create user'
      },
      {
        href: '#',
        text: 'Find user'
      }
    ]
  }
}) }}
```

#### blue with service name, search, account, navigation

```njk
{{ header({
  service: {
    text: 'Search patient directory',
    href: '#'
  },
  search: {
    placeholder: 'Name or NHS number',
    visuallyHiddenLabel: 'Search patients by name or NHS number'
  },
  account: {
    items: [
      {
        text: 'Florence Nightingale',
        icon: true
      },
      {
        action: '#',
        text: 'Log out'
      }
    ]
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Home'
      },
      {
        href: '#',
        text: 'Patient list'
      },
      {
        href: '#',
        text: 'Advanced search'
      },
      {
        href: '#',
        text: 'Help guides'
      }
    ]
  }
}) }}
```

#### blue with organisation name

```njk
{{ header({
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Business Services Authority'
  }
}) }}
```

#### blue with organisation name (and descriptor)

```njk
{{ header({
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Anytown Anyplace Anywhere',
    descriptor: 'NHS Foundation Trust'
  }
}) }}
```

#### blue with organisation name (split with descriptor)

```njk
{{ header({
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Anytown Anyplace',
    split: 'Anywhere',
    descriptor: 'NHS Foundation Trust'
  }
}) }}
```

#### blue with organisation name (split with descriptor), search

```njk
{{ header({
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Anytown Anyplace',
    split: 'Anywhere',
    descriptor: 'NHS Foundation Trust'
  },
  search: {
    visuallyHiddenLabel: 'Search the Anytown Anyplace Anywhere website'
  }
}) }}
```

#### white

```njk
{{ header({
  classes: 'nhsuk-header--white'
}) }}
```

#### white (linked logo)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  }
}) }}
```

#### white (linked logo, ARIA label)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    ariaLabel: 'NHS white homepage',
    href: '#'
  }
}) }}
```

#### white (linked logo, custom)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#',
    src: '/nhsuk-frontend/assets/example-logo.svg',
    alt: 'Great Ormond Street Hospital for Children, NHS Foundation Trust'
  }
}) }}
```

#### white with account (logged in)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  account: {
    items: [
      {
        href: '#',
        text: 'florence.nightingale@nhs.net',
        icon: true
      },
      {
        action: '#',
        text: 'Log out'
      }
    ]
  }
}) }}
```

#### white with account (logged out)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  account: {
    items: [
      {
        href: '#',
        text: 'Log in'
      }
    ]
  }
}) }}
```

#### white with navigation

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      }
    ]
  }
}) }}
```

#### white with navigation (justified)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  navigation: {
    classes: 'nhsuk-header__navigation--justified',
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      }
    ]
  }
}) }}
```

#### white with navigation (overflow)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      },
      {
        href: '#',
        text: 'Another item #1'
      },
      {
        href: '#',
        text: 'Another item #2'
      }
    ]
  }
}) }}
```

#### white with navigation (overflow, white)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  navigation: {
    classes: 'nhsuk-header__navigation--white',
    items: [
      {
        href: '#',
        text: 'Health A to Z'
      },
      {
        href: '#',
        text: 'Live Well'
      },
      {
        href: '#',
        text: 'Mental health'
      },
      {
        href: '#',
        text: 'Care and support'
      },
      {
        href: '#',
        text: 'Pregnancy',
        active: true
      },
      {
        href: '#',
        text: 'NHS services'
      },
      {
        href: '#',
        text: 'Another item #1'
      },
      {
        href: '#',
        text: 'Another item #2'
      }
    ]
  }
}) }}
```

#### white with search

```njk
{{ header({
  classes: 'nhsuk-header--white',
  search: true
}) }}
```

#### white with service name

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  service: {
    text: 'Find your NHS number'
  }
}) }}
```

#### white with service name (linked)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#nhs'
  },
  service: {
    text: 'Find your NHS number',
    href: '#'
  }
}) }}
```

#### white with service name (linked with logo)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  service: {
    text: 'Prototype kit',
    href: '#'
  }
}) }}
```

#### white with service name (linked and long), search

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#nhs'
  },
  service: {
    text: 'This a really long service name to fully test wrapping',
    href: '#'
  },
  search: true
}) }}
```

#### white with service name, search, account (logged in, complex), navigation

```njk
{{ header({
  classes: 'nhsuk-header--white',
  service: {
    href: '#',
    text: 'Manage patients'
  },
  search: {
    placeholder: 'Name or NHS number',
    visuallyHiddenLabel: 'Search patients by name or NHS number'
  },
  account: {
    items: [
      {
        href: '#',
        text: 'Florence Nightingale',
        icon: true
      },
      {
        text: 'Regional Manager, Hull and East Yorkshire Hospitals NHS Trust'
      },
      {
        href: '#',
        text: 'Change role'
      },
      {
        action: '#',
        text: 'Log out'
      }
    ]
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Home'
      },
      {
        href: '#',
        text: 'Create user'
      },
      {
        href: '#',
        text: 'Find user'
      }
    ]
  }
}) }}
```

#### white with service name, search, account, navigation

```njk
{{ header({
  classes: 'nhsuk-header--white',
  service: {
    text: 'Search patient directory',
    href: '#'
  },
  search: {
    placeholder: 'Name or NHS number',
    visuallyHiddenLabel: 'Search patients by name or NHS number'
  },
  account: {
    items: [
      {
        text: 'Florence Nightingale',
        icon: true
      },
      {
        action: '#',
        text: 'Log out'
      }
    ]
  },
  navigation: {
    items: [
      {
        href: '#',
        text: 'Home'
      },
      {
        href: '#',
        text: 'Patient list'
      },
      {
        href: '#',
        text: 'Advanced search'
      },
      {
        href: '#',
        text: 'Help guides'
      }
    ]
  }
}) }}
```

#### white with organisation name

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Business Services Authority'
  }
}) }}
```

#### white with organisation name (and descriptor)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Anytown Anyplace Anywhere',
    descriptor: 'NHS Foundation Trust'
  }
}) }}
```

#### white with organisation name (split with descriptor)

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Anytown Anyplace',
    split: 'Anywhere',
    descriptor: 'NHS Foundation Trust'
  }
}) }}
```

#### white with organisation name (split with descriptor), search

```njk
{{ header({
  classes: 'nhsuk-header--white',
  logo: {
    href: '#'
  },
  organisation: {
    name: 'Anytown Anyplace',
    split: 'Anywhere',
    descriptor: 'NHS Foundation Trust'
  },
  search: {
    visuallyHiddenLabel: 'Search the Anytown Anyplace Anywhere website'
  }
}) }}
```

---

## Hero

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the hero. |
| `heading` | string | ✓ | Text heading of the hero. |
| `headingClasses` | string |  | Optional additional classes to add to heading. Separate each class with a space. |
| `headingLevel` | integer |  | Optional heading level for the heading. Defaults to `1`. |
| `text` | string |  | If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored. |
| `html` | string |  | If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire hero component in a `call` block. |
| `imageURL` | string |  | The URL of the image in the hero. |
| `containerClasses` | string |  | Classes to add to the hero container, useful if you want to make the hero fixed width. |
| `classes` | string |  | Classes to add to the hero. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hero. |

### Examples

#### default

```njk
{{ hero({
  heading: 'We're here for you',
  text: 'Helping you take control of your health and wellbeing.'
}) }}
```

#### with image

```njk
{{ hero({
  imageURL: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
}) }}
```

#### with image, content

```njk
{{ hero({
  heading: 'We're here for you',
  text: 'Helping you take control of your health and wellbeing.',
  imageURL: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
}) }}
```

#### with html content

```njk
{{ hero({
  heading: 'This is a header for the product or service',
  headingClasses: 'nhsuk-heading-l nhsuk-u-margin-top-5',
  html: '<p class="nhsuk-body-l">This is some more content which explains the product or service.</p>





<a class="nhsuk-button nhsuk-button--reverse"
  data-module="nhsuk-button"
 href="#" draggable="false" role="button">
  Sign up
</a>

'
}) }}
```

---

## Hint text

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `id` | string |  | Id attribute to add to the hint. |
| `classes` | string |  | Classes to add to the hint. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hint. |

### Examples

#### default

```njk
{{ hinttext({
  text: 'Do not include personal information like your name, date of birth or NHS number'
}) }}
```

---

## Images

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the image. |
| `src` | string | ✓ | The source location of the image. |
| `alt` | string | ✓ | The alt text of the image. |
| `caption` | string |  | Optional caption text for the image. |
| `sizes` | string |  | A list of screen sizes for the browser to load the correct image from the srcset images. |
| `srcset` | string |  | A list of image source URLs and their respective sizes. Separate each image with a comma. |
| `classes` | string |  | Classes to add to the image container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the image container. |

### Examples

#### default

```njk
{{ images({
  src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
  sizes: '(max-width: 768px) 100vw, 66vw',
  srcset: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w',
  alt: 'Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.',
  caption: 'Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time.'
}) }}
```

#### without caption

```njk
{{ images({
  src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
  alt: 'Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.'
}) }}
```

---

## Input

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `type` | string |  | Type of input control to render. Defaults to `"text"`. |
| `inputmode` | string |  | Optional value for inputmode. |
| `value` | string |  | Optional initial value of the input. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | Options for the label component. |
| `hint` | object |  | Options for the hint component. |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `prefix` | string |  | Optional prefix text to be displayed before the input. |
| `suffix` | string |  | Optional suffix text to be displayed after the input. |
| `formGroup` | object |  | Additional options for the form group containing the input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the date input component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the input. |
| `autocomplete` | string |  | autocomplete attribute to identify input purpose, for instance `"postal-code"` or `"username"`. |
| `pattern` | string |  | pattern attribute to provide a regular expression pattern, used to match allowed character combinations for the input value. |
| `spellcheck` | boolean |  | Optional field to enable or disable the spellcheck attribute on the input. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |

### Examples

#### default

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

#### with hint

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  hint: {
    text: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you, for example, 485 777 3456'
  },
  id: 'with-hint',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with error message

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  errorMessage: {
    text: 'Enter NHS number'
  },
  id: 'with-error-message',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with hint and error

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  hint: {
    text: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you, for example, 485 777 3456'
  },
  errorMessage: {
    text: 'Enter NHS number'
  },
  id: 'with-hint-error',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with 2 character width

```njk
{{ input({
  label: {
    text: '2 character width'
  },
  id: 'input-width-2',
  name: 'example',
  classes: 'nhsuk-input--width-2'
}) }}
```

#### with 3 character width

```njk
{{ input({
  label: {
    text: '3 character width'
  },
  id: 'input-width-3',
  name: 'example',
  classes: 'nhsuk-input--width-3'
}) }}
```

#### with 4 character width

```njk
{{ input({
  label: {
    text: '4 character width'
  },
  id: 'input-width-4',
  name: 'example',
  classes: 'nhsuk-input--width-4'
}) }}
```

#### with 5 character width

```njk
{{ input({
  label: {
    text: '5 character width'
  },
  id: 'input-width-5',
  name: 'example',
  classes: 'nhsuk-input--width-5'
}) }}
```

#### with 10 character width

```njk
{{ input({
  label: {
    text: '10 character width'
  },
  id: 'input-width-10',
  name: 'example',
  classes: 'nhsuk-input--width-10'
}) }}
```

#### with 20 character width

```njk
{{ input({
  label: {
    text: '20 character width'
  },
  id: 'input-width-20',
  name: 'example',
  classes: 'nhsuk-input--width-20'
}) }}
```

#### with 30 character width

```njk
{{ input({
  label: {
    text: '30 character width'
  },
  id: 'input-width-30',
  name: 'example',
  classes: 'nhsuk-input--width-30'
}) }}
```

#### with label size S

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--s',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with label size M

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--m',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with label size L

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with label size XL

```njk
{{ input({
  label: {
    text: 'What is your NHS number?',
    classes: 'nhsuk-label--xl',
    isPageHeading: true
  },
  id: 'custom-size',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### without page heading

```njk
{{ input({
  label: {
    text: 'What is your NHS number?'
  },
  id: 'without-heading',
  name: 'example',
  classes: 'nhsuk-input--width-10',
  inputmode: 'numeric',
  spellcheck: false
}) }}
```

#### with prefix

```njk
{{ input({
  label: {
    text: 'Cost in pounds',
    isPageHeading: true
  },
  id: 'with-prefix',
  name: 'example',
  prefix: '£',
  classes: 'nhsuk-input--width-5'
}) }}
```

#### with suffix

```njk
{{ input({
  label: {
    text: 'Weight in kilograms',
    isPageHeading: true
  },
  id: 'with-suffix',
  name: 'example',
  suffix: 'kg',
  classes: 'nhsuk-input--width-5'
}) }}
```

#### with prefix and suffix

```njk
{{ input({
  label: {
    text: 'Cost per item, in pounds',
    isPageHeading: true
  },
  id: 'with-prefix-suffix',
  name: 'example',
  prefix: '£',
  suffix: 'per item',
  classes: 'nhsuk-input--width-5'
}) }}
```

#### with prefix and suffix and error

```njk
{{ input({
  label: {
    text: 'Cost per item, in pounds',
    isPageHeading: true
  },
  errorMessage: {
    text: 'Enter a cost per item, in pounds'
  },
  id: 'with-prefix-suffix',
  name: 'example',
  prefix: '£',
  suffix: 'per item',
  classes: 'nhsuk-input--width-5'
}) }}
```

#### with autocomplete attribute

```njk
{{ input({
  label: {
    text: 'Enter a full postcode in England',
    isPageHeading: true
  },
  hint: {
    text: 'For example, LS1 1AB'
  },
  id: 'with-autocomplete-attribute',
  name: 'example',
  autocomplete: 'postal-code'
}) }}
```

---

## Inset text

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the inset text component. |
| `text` | string | ✓ | Text content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | HTML content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `classes` | string |  | Classes to add to the inset text. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the inset text. |

### Examples

---

## Label

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the label. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored. |
| `for` | string | ✓ | The value of the for attribute, the id of the input the label is associated with. |
| `isPageHeading` | boolean |  | Whether the label also acts as the heading for the page. |
| `classes` | string |  | Classes to add to the label tag. Separate each class with a space. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |

### Examples

#### default

```njk
{{ label({
  text: 'What is your full name?',
  classes: 'nhsuk-label--l',
  isPageHeading: true
}) }}
```

#### size XL

```njk
{{ label({
  text: 'What is your full name?',
  classes: 'nhsuk-label--xl',
  isPageHeading: true
}) }}
```

#### size L

```njk
{{ label({
  text: 'What is your full name?',
  classes: 'nhsuk-label--l',
  isPageHeading: true
}) }}
```

#### size M

```njk
{{ label({
  text: 'What is your full name?',
  classes: 'nhsuk-label--m',
  isPageHeading: true
}) }}
```

#### size S

```njk
{{ label({
  text: 'What is your full name?',
  classes: 'nhsuk-label--s',
  isPageHeading: true
}) }}
```

#### without page heading

```njk
{{ label({
  text: 'What is your full name?'
}) }}
```

---

## Notification banner

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the notification banner. |
| `text` | string | ✓ | The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored. |
| `html` | string | ✓ | The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire notification banner component in a `call` block. |
| `titleText` | string |  | The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are 'Important', 'Success', and null:
- if you do not set `type`, `titleText` defaults to `"Important"`
- if you set `type` to `success`, `titleText` defaults to `"Success"`
- if you set `titleHtml`, this option is ignored |
| `titleHtml` | string |  | The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored. |
| `titleHeadingLevel` | string |  | Sets heading level for the title only. You can only use values between `1` and `6` with this option. The default is `2`. |
| `type` | string |  | The type of notification to render. You can use only `"success"` or `null` values with this option. If you set `type` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `type`, the notification banner sets `role` to `"region"`. |
| `role` | string |  | Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `type` to `"success"`, `role` defaults to `"alert"`. |
| `titleId` | string |  | The `id` for the banner title, and the `aria-labelledby` attribute in the banner. Defaults to `"nhsuk-notification-banner-title"`. |
| `disableAutoFocus` | boolean |  | If you set `type` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`. |
| `classes` | string |  | The classes that you want to add to the notification banner. |
| `attributes` | object |  | The HTML attributes that you want to add to the notification banner, for example, data attributes. |

### Examples

#### default

```njk
{{ notificationbanner({
  text: 'The patient record was updated.'
}) }}
```

#### paragraph as html heading

```njk
{{ notificationbanner({
  html: '<p class="nhsuk-notification-banner__heading">You have 9 days to send a response.</p>'
}) }}
```

#### with text as html

```njk
{{ notificationbanner({
  html: '<h3 class="nhsuk-notification-banner__heading">
  The patient record was updated
</h3>
<p class="nhsuk-body">
  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
</p>'
}) }}
```

#### with type as success

```njk
{{ notificationbanner({
  type: 'success',
  text: 'Email sent to example@email.com'
}) }}
```

#### success with custom html

```njk
{{ notificationbanner({
  type: 'success',
  html: '<h3 class="nhsuk-notification-banner__heading">
  4 files uploaded
</h3>
<ul class="nhsuk-u-margin-0 nhsuk-list">
  <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
  <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
</ul>'
}) }}
```

#### with a list

```njk
{{ notificationbanner({
  html: '<h3 class="nhsuk-notification-banner__heading">4 files uploaded</h3>
<ul class="nhsuk-list nhsuk-list--bullet nhsuk-u-margin-bottom-0">
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v2.pdf</a></li>
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>
</ul>'
}) }}
```

#### with long heading

```njk
{{ notificationbanner({
  text: 'The patient record was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters.'
}) }}
```

#### with lots of content

```njk
{{ notificationbanner({
  html: '<h3 class="nhsuk-notification-banner__heading">
  Check if you need to apply the reverse charge to this application
</h3>
<p class="nhsuk-body">
  You will have to apply the <a href="#" class="nhsuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:
</p>
<ul class="nhsuk-list nhsuk-list--bullet">
  <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>
  <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>
</ul>'
}) }}
```

#### auto-focus disabled, with type as success

```njk
{{ notificationbanner({
  type: 'success',
  disableAutoFocus: true,
  text: 'Email sent to example@email.com'
}) }}
```

#### auto-focus explicitly enabled, with type as success

```njk
{{ notificationbanner({
  type: 'success',
  disableAutoFocus: false,
  text: 'Email sent to example@email.com'
}) }}
```

#### role=alert overridden to role=region, with type as success

```njk
{{ notificationbanner({
  type: 'success',
  role: 'region',
  text: 'Email sent to example@email.com'
}) }}
```

#### custom tabindex

```njk
{{ notificationbanner({
  type: 'success',
  text: 'Email sent to example@email.com',
  attributes: {
    tabindex: 2
  }
}) }}
```

---

## Pagination

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the pagination container. |
| `previousUrl` | string | ✓ | The value of the previous link href attribute. |
| `previousPage` | string | ✓ | The text of the previous link. |
| `nextUrl` | string | ✓ | The value of the next link href attribute. |
| `nextPage` | string | ✓ | The text of the next link. |
| `classes` | string |  | Classes to add to the pagination container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the pagination container. |

### Examples

#### default

```njk
{{ pagination({
  previousUrl: '/section/treatments',
  previousPage: 'Treatments',
  nextUrl: '/section/symptoms',
  nextPage: 'Symptoms'
}) }}
```

---

## Panel

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the panel. |
| `titleText` | string | ✓ | If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleHtml` | string |  | If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `headingLevel` | integer |  | Heading level, from `1` to `6`. Defaults to `1`. |
| `text` | string |  | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `html` | string |  | If `text` is set, this is not required. Text to use within the panel content. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block. |
| `classes` | string |  | Optional additional classes to add to the hint `div` tag. Separate each class with a space. |
| `attributes` | object |  | Any extra HTML attributes (for example data attributes) to add to the input component. |

### Examples

#### default

```njk
{{ panel({
  titleText: 'Booking complete',
  text: 'We have sent you a confirmation email'
}) }}
```

---

## Radios

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the radios component. |
| `fieldset` | object |  | Options for the fieldset component (for example legend). |
| `hint` | object |  | Options for the hint component (for example text). |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the radios component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before all radio items within the radios component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after all radio items within the radios component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string |  | String to prefix id for each radio item if no id is specified on each item. If `idPrefix` is not passed, fallback to using the name attribute instead. |
| `name` | string | ✓ | Name attribute for each radio item. |
| `value` | string |  | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `items` | array | ✓ | Array of radio items objects. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` argument will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` argument will be ignored. |
| `items.id` | string |  | Specific id attribute for the radio item. If omitted, then `idPrefix` string will be applied. |
| `items.label` | object |  | Options for the label component. |
| `items.value` | string | ✓ | Value for the radio input. |
| `items.hint` | object |  | Provide hint to each radio item. |
| `items.divider` | string |  | Divider text to separate radio items, for example the text `'or'`. |
| `items.checked` | boolean |  | If true, radio will be checked. |
| `items.conditional` | object |  | Provide additional content to reveal when the radio is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the radio is checked. |
| `classes` | string |  | Classes to add to the radio container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the radio input tag. |

### Examples

#### default

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

#### with hint

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Do you know your NHS number?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'This is a 10 digit number, like 485 777 3456, that you can find on an NHS letter, prescription or in the NHS App'
  },
  idPrefix: 'with-hint',
  name: 'example',
  items: [
    {
      value: 'yes',
      text: 'Yes, I know my NHS number'
    },
    {
      value: 'no',
      text: 'No, I do not know my NHS number'
    },
    {
      value: 'not sure',
      text: 'I'm not sure'
    }
  ]
}) }}
```

#### inline

```njk
{{ radios({
  classes: 'nhsuk-radios--inline',
  fieldset: {
    legend: {
      text: 'Are you 18 or over?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'inline',
  name: 'example',
  value: 'no',
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

#### with legend size S

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Are you 18 or over?',
      classes: 'nhsuk-fieldset__legend--s',
      isPageHeading: true
    }
  },
  idPrefix: 'custom-size',
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

#### with legend size M

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Are you 18 or over?',
      classes: 'nhsuk-fieldset__legend--m',
      isPageHeading: true
    }
  },
  idPrefix: 'custom-size',
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

#### with legend size L

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Are you 18 or over?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'custom-size',
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

#### with legend size XL

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Are you 18 or over?',
      classes: 'nhsuk-fieldset__legend--xl',
      isPageHeading: true
    }
  },
  idPrefix: 'custom-size',
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

#### without page heading

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Are you 18 or over?'
    }
  },
  idPrefix: 'without-heading',
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

#### with divider

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'How do you want to sign in?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'with-divider',
  name: 'example',
  items: [
    {
      value: 'nhsuk-login',
      text: 'Use NHS login'
    },
    {
      value: 'government-verify',
      text: 'Use GOV.UK Verify'
    },
    {
      divider: 'or'
    },
    {
      value: 'create-account',
      text: 'Create an account'
    }
  ]
}) }}
```

#### with hints on items

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Do you have a mobile phone with signal?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  idPrefix: 'with-hint-item',
  name: 'example',
  items: [
    {
      value: 'mobile',
      text: 'Yes, I have a mobile phone with signal',
      hint: {
        text: 'We will text you a 6 digit security code'
      }
    },
    {
      value: 'landline',
      text: 'No, I want to use my landline',
      hint: {
        text: 'We will call you to give you a 6 digit security code'
      }
    }
  ]
}) }}
```

#### without fieldset

```njk
{{ radios({
  id: 'without-fieldset',
  name: 'colours',
  items: [
    {
      value: 'red',
      text: 'Red'
    },
    {
      value: 'green',
      text: 'Green'
    },
    {
      value: 'blue',
      text: 'Blue'
    }
  ]
}) }}
```

#### with disabled item

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Have you changed your name?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'This includes changing your last name or spelling your name differently'
  },
  idPrefix: 'with-disabled-item',
  name: 'example',
  items: [
    {
      value: 'yes',
      text: 'Yes',
      disabled: true
    },
    {
      value: 'no',
      text: 'No',
      disabled: true
    }
  ]
}) }}
```

#### with error message

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Have you changed your name?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  errorMessage: {
    text: 'Select yes if you have changed your name'
  },
  idPrefix: 'with-error-message',
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

#### with hint and error

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'Have you changed your name?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'This includes changing your last name or spelling your name differently'
  },
  errorMessage: {
    text: 'Select yes if you have changed your name'
  },
  idPrefix: 'with-hint-error',
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

#### with conditional content

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select 1 option'
  },
  idPrefix: 'conditional',
  name: 'example',
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    }
  ]
}) }}
```

#### with conditional content, error message

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select 1 option'
  },
  errorMessage: {
    text: 'Select how you prefer to be contacted'
  },
  idPrefix: 'conditional',
  name: 'example',
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    }
  ]
}) }}
```

#### with conditional content, error message (nested)

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--l',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select 1 option'
  },
  idPrefix: 'conditional',
  name: 'example',
  value: 'phone',
  items: [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
'
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: '<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>  <span class="nhsuk-error-message" id="phone-error">
  <span class="nhsuk-u-visually-hidden">Error:</span> Enter your phone number
  </span>    <input class="nhsuk-input nhsuk-u-width-two-thirds nhsuk-input--error" id="phone" name="phone" type="tel" aria-describedby="phone-error"></div> 
'
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: '<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
'
      }
    }
  ]
}) }}
```

#### with nested conditional radios

```njk
{{ radios({
  fieldset: {
    legend: {
      text: 'How do you want to be contacted about this?',
      classes: 'nhsuk-fieldset__legend--m',
      isPageHeading: true
    }
  },
  hint: {
    text: 'Select 1 option'
  },
  idPrefix: 'conditional-nested',
  name: 'example-outer',
  items: [
    {
      value: 'no-conditional',
      text: 'No conditional'
    },
    {
      value: 'nested',
      text: 'Nested conditional',
      conditional: {
        html: '<div class="nhsuk-form-group">

<fieldset class="nhsuk-fieldset" aria-describedby="example-inner-hint">  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--s">    How do you want to be contacted about this?
</legend>  <div class="nhsuk-hint" id="example-inner-hint">
    Select 1 option
  </div>
  <div class="nhsuk-radios nhsuk-radios--conditional" data-module="nhsuk-radios">    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example-inner" name="example-inner" type="radio" value="email" aria-controls="conditional-example-inner" aria-expanded="false">
      <label class="nhsuk-label nhsuk-radios__label" for="example-inner">
        Email
      </label>    </div>
    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner">
      <div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 

    </div>
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example-inner-2" name="example-inner" type="radio" value="phone" aria-controls="conditional-example-inner-2" aria-expanded="false">
      <label class="nhsuk-label nhsuk-radios__label" for="example-inner-2">
        Phone
      </label>    </div>
    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner-2">
      <div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 

    </div>
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example-inner-3" name="example-inner" type="radio" value="text" aria-controls="conditional-example-inner-3" aria-expanded="false">
      <label class="nhsuk-label nhsuk-radios__label" for="example-inner-3">
        Text message
      </label>    </div>
    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner-3">
      <div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 

    </div>
  </div>
</fieldset>
</div>
'
      }
    }
  ]
}) }}
```

---

## Select

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the select. Defaults to the value of `name`. |
| `name` | string | ✓ | Name property for the select. |
| `items` | array | ✓ | Array of option items for the select. |
| `items.value` | string |  | Value for the option item. Defaults to an empty string. |
| `items.text` | string | ✓ | Text for the option item. |
| `items.selected` | boolean |  | Sets the option as the selected. |
| `items.disabled` | boolean |  | Sets the option item as disabled. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the option. |
| `value` | string |  | Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item. |
| `disabled` | boolean |  | If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object |  | Options for the label component. |
| `hint` | object |  | Options for the hint component. |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the select component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the select used by the select component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the select used by the select component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the select. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the select. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the select. |

### Examples

#### default

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

#### with disabled item

```njk
{{ select({
  label: {
    text: 'Sort by',
    isPageHeading: true
  },
  id: 'with-disabled-item',
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
      text: 'Most comments',
      disabled: true
    }
  ]
}) }}
```

#### with hint

```njk
{{ select({
  label: {
    text: 'Choose location',
    isPageHeading: true
  },
  hint: {
    text: 'This can be different to where you went before'
  },
  id: 'with-hint',
  name: 'example',
  items: [
    {
      value: 'choose',
      text: 'Choose location'
    },
    {
      value: 'eastmidlands',
      text: 'East Midlands'
    },
    {
      value: 'eastofengland',
      text: 'East of England'
    },
    {
      value: 'london',
      text: 'London'
    },
    {
      value: 'northeast',
      text: 'North East'
    },
    {
      value: 'northwest',
      text: 'North West'
    },
    {
      value: 'southeast',
      text: 'South East'
    },
    {
      value: 'southwest',
      text: 'South West'
    },
    {
      value: 'westmidlands',
      text: 'West Midlands'
    },
    {
      value: 'yorkshire',
      text: 'Yorkshire and the Humber'
    }
  ]
}) }}
```

#### with label size S

```njk
{{ select({
  label: {
    text: 'Sort by',
    classes: 'nhsuk-label--s',
    isPageHeading: true
  },
  id: 'custom-size',
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

#### with label size M

```njk
{{ select({
  label: {
    text: 'Sort by',
    classes: 'nhsuk-label--m',
    isPageHeading: true
  },
  id: 'custom-size',
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

#### with label size L

```njk
{{ select({
  label: {
    text: 'Sort by',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'custom-size',
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

#### with label size XL

```njk
{{ select({
  label: {
    text: 'Sort by',
    classes: 'nhsuk-label--xl',
    isPageHeading: true
  },
  id: 'custom-size',
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

#### without page heading

```njk
{{ select({
  label: {
    text: 'Sort by'
  },
  id: 'without-heading',
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

#### with error message

```njk
{{ select({
  label: {
    text: 'Choose location',
    isPageHeading: true
  },
  errorMessage: {
    text: 'Select a location'
  },
  id: 'with-error-message',
  name: 'example',
  items: [
    {
      value: 'choose',
      text: 'Choose location'
    },
    {
      value: 'eastmidlands',
      text: 'East Midlands'
    },
    {
      value: 'eastofengland',
      text: 'East of England'
    },
    {
      value: 'london',
      text: 'London'
    },
    {
      value: 'northeast',
      text: 'North East'
    },
    {
      value: 'northwest',
      text: 'North West'
    },
    {
      value: 'southeast',
      text: 'South East'
    },
    {
      value: 'southwest',
      text: 'South West'
    },
    {
      value: 'westmidlands',
      text: 'West Midlands'
    },
    {
      value: 'yorkshire',
      text: 'Yorkshire and the Humber'
    }
  ]
}) }}
```

#### with hint and error

```njk
{{ select({
  label: {
    text: 'Choose location',
    isPageHeading: true
  },
  hint: {
    text: 'This can be different to where you went before'
  },
  errorMessage: {
    text: 'Select a location'
  },
  id: 'with-hint-error',
  name: 'example',
  items: [
    {
      value: 'choose',
      text: 'Choose location'
    },
    {
      value: 'eastmidlands',
      text: 'East Midlands'
    },
    {
      value: 'eastofengland',
      text: 'East of England'
    },
    {
      value: 'london',
      text: 'London'
    },
    {
      value: 'northeast',
      text: 'North East'
    },
    {
      value: 'northwest',
      text: 'North West'
    },
    {
      value: 'southeast',
      text: 'South East'
    },
    {
      value: 'southwest',
      text: 'South West'
    },
    {
      value: 'westmidlands',
      text: 'West Midlands'
    },
    {
      value: 'yorkshire',
      text: 'Yorkshire and the Humber'
    }
  ]
}) }}
```

#### with selected value

```njk
{{ select({
  label: {
    text: 'Sort by',
    isPageHeading: true
  },
  id: 'with-value',
  name: 'example',
  value: 'updated',
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

---

## Skip link

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the skip link. |
| `text` | string |  | Text to use within the skip link component. Defaults to `"Skip to main content"` if you do not provide a value. |
| `href` | string |  | The value of the skip link's `href` attribute. Defaults to `"#maincontent"` if you do not provide a value. |
| `classes` | string |  | Classes to add to the skip link. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the skip link. |

### Examples

#### default

```njk
{{ skiplink({
  href: '#maincontent',
  text: 'Skip to main content'
}) }}
```

---

## Summary list

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the summary list. |
| `rows` | array | ✓ | The rows within the summary list component. |
| `rows.classes` | string |  | Classes to add to the row `div`. |
| `rows.key` | object | ✓ | The reference content (key) for each row item in the summary list component. |
| `rows.key.text` | string | ✓ | If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.classes` | string |  | Classes to add to the key wrapper. |
| `rows.value` | object | ✓ | The value for each row item in the summary list component. |
| `rows.value.text` | string | ✓ | If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.classes` | string |  | Classes to add to the value wrapper. |
| `rows.actions` | object |  | The action link content for each row item in the summary list component. |
| `rows.actions.items` | array |  | The action link items within the row item of the summary list component. |
| `rows.actions.items.href` | string | ✓ | The value of the link's `href` attribute for an action item. |
| `rows.actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `rows.actions.classes` | string |  | Classes to add to the actions wrapper. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |

### Examples

#### default

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

#### with multiple actions

```njk
{{ summarylist({
  rows: [
    {
      key: {
        text: 'Name'
      },
      value: {
        text: 'Karen Francis'
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
            text: 'Add',
            visuallyHiddenText: 'new contact details'
          },
          {
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }
        ]
      }
    },
    {
      key: {
        text: 'Medicines'
      },
      value: {
        html: '<p>Isotretinoin capsules (Roaccutane)</p>
<p>Isotretinoin gel (Isotrex)</p>
<p>Pepto-Bismol (bismuth subsalicylate)</p>'
      },
      actions: {
        items: [
          {
            href: '#',
            text: 'Add',
            visuallyHiddenText: 'new medicine'
          },
          {
            href: '#',
            text: 'Change',
            visuallyHiddenText: 'medicines'
          }
        ]
      }
    }
  ]
}) }}
```

#### without actions

```njk
{{ summarylist({
  rows: [
    {
      key: {
        text: 'Name'
      },
      value: {
        text: 'Karen Francis'
      }
    },
    {
      key: {
        text: 'Date of birth'
      },
      value: {
        text: '15 March 1984'
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
      }
    },
    {
      key: {
        text: 'Contact details'
      },
      value: {
        html: '<p>07700 900362</p>
<p>karen.francis@example.com</p>'
      }
    }
  ]
}) }}
```

#### without border

```njk
{{ summarylist({
  classes: 'nhsuk-summary-list--no-border',
  rows: [
    {
      key: {
        text: 'Name'
      },
      value: {
        text: 'Karen Francis'
      }
    },
    {
      key: {
        text: 'Date of birth'
      },
      value: {
        text: '15 March 1984'
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
      }
    },
    {
      key: {
        text: 'Contact details'
      },
      value: {
        html: '<p>07700 900362</p>
<p>karen.francis@example.com</p>'
      }
    }
  ]
}) }}
```

#### without row border

```njk
{{ summarylist({
  rows: [
    {
      key: {
        text: 'Name'
      },
      value: {
        text: 'Karen Francis'
      }
    },
    {
      key: {
        text: 'Date of birth'
      },
      value: {
        text: '15 March 1984'
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
      }
    },
    {
      classes: 'nhsuk-summary-list__row--no-border',
      key: {
        text: 'Contact details'
      },
      value: {
        html: '<p>07700 900362</p>
<p>karen.francis@example.com</p>'
      }
    }
  ]
}) }}
```

---

## Tables

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the table. |
| `rows` | array | ✓ | Array of table rows and cells. |
| `rows.text` | string | ✓ | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` argument will be ignored. |
| `rows.html` | string | ✓ | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` argument will be ignored. |
| `rows.header` | string |  | Header text for cells in responsive table rows only. |
| `rows.format` | string |  | Specify format of a cell. Currently we only use `'numeric'`. |
| `rows.colspan` | integer |  | Specify how many columns a cell extends. |
| `rows.rowspan` | integer |  | Specify how many rows a cell extends. |
| `head` | array |  | Array of table head cells. |
| `head.text` | string |  | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` argument will be ignored. |
| `head.html` | string |  | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` argument will be ignored. |
| `head.format` | string |  | Specify format of a cell. Currently we only use `'numeric'`. |
| `head.colspan` | integer |  | Specify how many columns a cell extends. |
| `head.rowspan` | integer |  | Specify how many rows a cell extends. |
| `heading` | string |  | Heading/label of the panel if the panel argument is set to true. |
| `headingLevel` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `caption` | string |  | Caption text. |
| `captionClasses` | string |  | Classes for caption text size. Classes to add to the table caption, for example `'nhsuk-table__caption--l'`. |
| `firstCellIsHeader` | boolean |  | If set to true, first cell in table row will be a TH instead of a TD. |
| `responsive` | boolean |  | If set to true, responsive table classes will be applied. |
| `tableClasses` | string |  | Classes to add to the table container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the table container. |

### Examples

#### default

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

#### with missing data

```njk
{{ tables({
  caption: 'Vaccinations given',
  head: [
    {
      text: 'Date'
    },
    {
      text: 'Vaccine'
    },
    {
      text: 'Product'
    }
  ],
  rows: [
    [
      {
        text: '10 July 2024'
      },
      {
        text: 'RSV'
      },
      {
        text: 'Abrysvo'
      }
    ],
    [
      {
        text: '6 September 2023'
      },
      {
        text: 'Flu'
      },
      {
        text: 'No data',
        classes: 'nhsuk-u-secondary-text-colour'
      }
    ]
  ]
}) }}
```

#### with numeric data

```njk
{{ tables({
  caption: 'Prescription prepayment certificate (PPC) charges',
  head: [
    {
      text: 'Item'
    },
    {
      text: 'Current charge',
      format: 'numeric'
    },
    {
      text: 'New charge',
      format: 'numeric'
    }
  ],
  rows: [
    [
      {
        text: '3-month'
      },
      {
        text: '£31.25',
        format: 'numeric'
      },
      {
        text: '£32.05',
        format: 'numeric'
      }
    ],
    [
      {
        text: '12-month'
      },
      {
        text: '£111.60',
        format: 'numeric'
      },
      {
        text: '£114.50',
        format: 'numeric'
      }
    ],
    [
      {
        text: 'HRT'
      },
      {
        text: '£19.30',
        format: 'numeric'
      },
      {
        text: '£19.80',
        format: 'numeric'
      }
    ]
  ]
}) }}
```

#### with responsive layout

```njk
{{ tables({
  caption: 'Ibuprofen syrup dosages for children',
  responsive: true,
  head: [
    {
      text: 'Age',
      classes: 'nhsuk-u-width-one-half'
    },
    {
      text: 'How much?',
      classes: 'nhsuk-u-width-one-quarter'
    },
    {
      text: 'How often?',
      classes: 'nhsuk-u-width-one-quarter'
    }
  ],
  rows: [
    [
      {
        header: 'Age',
        text: '3 to 5 months (weighing more than 5kg)'
      },
      {
        header: 'How much?',
        text: '2.5ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }
    ],
    [
      {
        header: 'Age',
        text: '6 to 11 months'
      },
      {
        header: 'How much?',
        text: '2.5ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 to 4 times in 24 hours'
      }
    ],
    [
      {
        header: 'Age',
        text: '1 to 3 years'
      },
      {
        header: 'How much?',
        text: '5ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }
    ],
    [
      {
        header: 'Age',
        text: '4 to 6 years'
      },
      {
        header: 'How much?',
        text: '7.5ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }
    ],
    [
      {
        header: 'Age',
        text: '7 to 9 years'
      },
      {
        header: 'How much?',
        text: '10ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }
    ],
    [
      {
        header: 'Age',
        text: '10 to 11 years'
      },
      {
        header: 'How much?',
        text: '15ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }
    ],
    [
      {
        header: 'Age',
        text: '12 to 17 years'
      },
      {
        header: 'How much?',
        text: '15ml to 20ml'
      },
      {
        header: 'How often?',
        text: 'Max 3 to 4 times in 24 hours'
      }
    ]
  ]
}) }}
```

#### with word breaks

```njk
{{ tables({
  caption: 'Users',
  head: [
    {
      text: 'Name'
    },
    {
      text: 'Email address'
    },
    {
      text: 'Status'
    },
    {
      html: '<span class="nhsuk-u-visually-hidden">Actions</span>'
    }
  ],
  rows: [
    [
      {
        text: 'Stephanie Meyer',
        classes: 'nhsuk-u-text-break-word'
      },
      {
        text: 'stephanie.meyer9@test.com',
        classes: 'nhsuk-u-text-break-word'
      },
      {
        text: 'Active'
      },
      {
        html: '<a href="#">Change <span class="nhsuk-u-visually-hidden">status for Stephanie Meyer</span></a>'
      }
    ],
    [
      {
        text: 'Aleksandrina Featherstonehaugh-Whitehead',
        classes: 'nhsuk-u-text-break-word'
      },
      {
        text: 'aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com',
        classes: 'nhsuk-u-text-break-word'
      },
      {
        text: 'Inactive'
      },
      {
        html: '<a href="#">Change <span class="nhsuk-u-visually-hidden">status for Aleksandrina Featherstonehaugh-Whitehead</span></a>'
      }
    ]
  ]
}) }}
```

#### with first cell as header

```njk
{{ tables({
  firstCellIsHeader: true,
  head: [
    {
      text: 'Day of the week'
    },
    {
      text: 'Opening hours'
    }
  ],
  rows: [
    [
      {
        text: 'Monday'
      },
      {
        text: '9am to 6pm'
      }
    ],
    [
      {
        text: 'Tuesday'
      },
      {
        text: '9am to 6pm'
      }
    ],
    [
      {
        text: 'Wednesday'
      },
      {
        text: '9am to 6pm'
      }
    ],
    [
      {
        text: 'Thursday'
      },
      {
        text: '9am to 6pm'
      }
    ],
    [
      {
        text: 'Friday'
      },
      {
        text: '9am to 6pm'
      }
    ],
    [
      {
        text: 'Saturday'
      },
      {
        text: '9am to 1pm'
      }
    ],
    [
      {
        text: 'Sunday'
      },
      {
        text: 'Closed'
      }
    ]
  ]
}) }}
```

#### as a panel

```njk
{{ tables({
  heading: 'Conditions similar to impetigo',
  caption: 'Other possible causes of your symptoms',
  captionClasses: 'nhsuk-u-visually-hidden',
  panel: true,
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

---

## Tabs

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | This is used for the main component and to compose id attribute for each item. |
| `idPrefix` | string |  | String to prefix id for each tab item if no id is specified on each item. |
| `title` | string |  | Title for the tabs table of contents. |
| `items` | array | ✓ | Array of tab items. |
| `items.id` | string | ✓ | Specific id attribute for the tab item. If omitted, then idPrefix string is required instead. |
| `items.label` | string | ✓ | The text label of a tab item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab. |
| `items.panel` | object | ✓ | Content for the panel |
| `items.panel.text` | string | ✓ | Specific id attribute for the tab item. If omitted, then idPrefix string is required instead. |
| `items.panel.html` | string | ✓ | The title of the panel. |
| `items.panel.attributes` | object |  | The body of the panel. |

### Examples

#### default

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

#### with anchor in panel

```njk
{{ tabs({
  items: [
    {
      label: 'Tab 1',
      id: 'tab-1',
      panel: {
        html: '<h2>Tab 1 content</h2>
<p>Testing that when you <a href="#anchor">click the link</a> it moves focus.</p>
<ul>
  <li><a href="#tab-1" id="anchor">Tab panel 1</a></li>
  <li><a href="#tab-2">Tab panel 2</a></li>
  <li><a href="#tab-3">Tab panel 3</a></li>
</ul>'
      }
    },
    {
      label: 'Tab 2',
      id: 'tab-2',
      panel: {
        html: '<h2>Tab 2 content</h2>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>'
      }
    },
    {
      label: 'Tab 3',
      id: 'tab-3',
      panel: {
        html: '<h2>Tab 3 content</h2>
<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>'
      }
    }
  ]
}) }}
```

---

## Tag

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the tag. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored. |
| `classes` | string |  | Classes to add to the tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |

### Examples

#### default

```njk
{{ tag({
  text: 'Active'
}) }}
```

#### white

```njk
{{ tag({
  text: 'In progress',
  classes: 'nhsuk-tag--white'
}) }}
```

#### grey

```njk
{{ tag({
  text: 'Inactive',
  classes: 'nhsuk-tag--grey'
}) }}
```

#### green

```njk
{{ tag({
  text: 'New',
  classes: 'nhsuk-tag--green'
}) }}
```

#### aqua-green

```njk
{{ tag({
  text: 'Active',
  classes: 'nhsuk-tag--aqua-green'
}) }}
```

#### blue

```njk
{{ tag({
  text: 'Pending',
  classes: 'nhsuk-tag--blue'
}) }}
```

#### purple

```njk
{{ tag({
  text: 'Received',
  classes: 'nhsuk-tag--purple'
}) }}
```

#### pink

```njk
{{ tag({
  text: 'Sent',
  classes: 'nhsuk-tag--pink'
}) }}
```

#### red

```njk
{{ tag({
  text: 'Rejected',
  classes: 'nhsuk-tag--red'
}) }}
```

#### orange

```njk
{{ tag({
  text: 'Declined',
  classes: 'nhsuk-tag--orange'
}) }}
```

#### yellow

```njk
{{ tag({
  text: 'Delayed',
  classes: 'nhsuk-tag--yellow'
}) }}
```

---

## Task list

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `classes` | string |  | Classes to add to the `ul` container for the task list. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `'-'`. Defaults to `'task-list'`. |
| `items` | array | ✓ | The items for each task within the task list component. See items. |
| `items.title` | object | ✓ | The main title for the task within the task list component. See title. |
| `items.title.text` | string | ✓ | Text to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items.title.html` | string | ✓ | HTML to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items.title.classes` | string |  | Classes to add to the title wrapper. |
| `items.hint` | object |  | Can be used to add a hint to each task within the task list component. See items hint. |
| `items.hint.text` | string | ✓ | Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items.hint.html` | string | ✓ | HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items.status` | object | ✓ | The status for each task within the task list component. See items status. |
| `items.status.tag` | object |  | Can be used to add a tag to the status of the task within the task list component. See tag. |
| `items.status.text` | string |  | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items.status.html` | string |  | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items.status.classes` | string |  | Classes to add to the status container. |
| `items.href` | string |  | The value of the link's `href` attribute for the task list item. |
| `items.classes` | string |  | Classes to add to the item `div`. |

### Examples

#### default

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

---

## Textarea

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | Options for the label component. |
| `hint` | object |  | Options for the hint component. |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the textarea component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the textarea used by the textarea component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the textarea used by the textarea component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `autocomplete` | string |  | autocomplete attribute to identify input purpose, for instance `'postal-code'` or `'username'`. |
| `classes` | string |  | Classes to add to the textarea. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |

### Examples

#### default

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

#### with hint

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
  id: 'with-hint',
  name: 'example'
}) }}
```

#### with label size S

```njk
{{ textarea({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--s',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  id: 'custom-size',
  name: 'example'
}) }}
```

#### with label size M

```njk
{{ textarea({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--m',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  id: 'custom-size',
  name: 'example'
}) }}
```

#### with label size L

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
  id: 'custom-size',
  name: 'example'
}) }}
```

#### with label size XL

```njk
{{ textarea({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--xl',
    isPageHeading: true
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  id: 'custom-size',
  name: 'example'
}) }}
```

#### without page heading

```njk
{{ textarea({
  label: {
    text: 'Can you provide more detail?'
  },
  hint: {
    text: 'Do not include personal information like your name, date of birth or NHS number'
  },
  id: 'without-heading',
  name: 'example'
}) }}
```

#### with error message

```njk
{{ textarea({
  label: {
    text: 'Can you provide more detail?',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  errorMessage: {
    text: 'You must provide an explanation'
  },
  id: 'with-error-message',
  name: 'example'
}) }}
```

#### with hint and error

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
  errorMessage: {
    text: 'You must provide an explanation'
  },
  id: 'with-hint-error',
  name: 'example'
}) }}
```

#### with autocomplete attribute

```njk
{{ textarea({
  label: {
    text: 'Full address',
    classes: 'nhsuk-label--l',
    isPageHeading: true
  },
  id: 'with-autocomplete-attribute',
  name: 'example',
  autocomplete: 'street-address'
}) }}
```

---

## Warning callout

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the warning callout. |
| `heading` | string | ✓ | Heading to be used on the warning callout. |
| `headingLevel` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `text` | string | ✓ | Text content to be used within the warning callout. |
| `html` | string | ✓ | HTML content to be used within the warning callout. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire warning callout component in a `call` block. |
| `classes` | string |  | Classes to add to the warning callout. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the warning callout. |

### Examples

#### default

```njk
{{ warningcallout({
  heading: 'Important',
  text: 'For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements.'
}) }}
```

#### with custom heading

```njk
{{ warningcallout({
  heading: 'School, nursery or work',
  text: 'Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.'
}) }}
```

---


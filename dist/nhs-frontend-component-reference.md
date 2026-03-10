# NHS Frontend Component Reference

---
**Auto-generated Documentation**

- **NHS Frontend Version:** 10.3.1
- **Git Branch:** detached
- **Git Commit:** b3c4f56
- **Generated:** 2026-03-10 16:41:54 UTC
- **Source:** [NHS Frontend Repository](https://github.com/nhsuk/nhsuk-frontend)

*This documentation is automatically extracted from NHS Frontend component definitions. Do not edit manually.*

---

Use the component reference table below to find the line number for any component, then read it with a file tool.

## Table of Contents

| Component | Macro | Category | Line |
|-----------|-------|----------|------|
| Character count | `characterCount()` | Form Inputs | 1698 |
| Checkboxes | `checkboxes()` | Form Inputs | 2002 |
| Date input | `dateInput()` | Form Inputs | 2903 |
| File upload | `fileUpload()` | Form Inputs | 3973 |
| Input | `input()` | Form Inputs | 5566 |
| Password input | `passwordInput()` | Form Inputs | 6710 |
| Radios | `radios()` | Form Inputs | 6882 |
| Select | `select()` | Form Inputs | 7615 |
| Textarea | `textarea()` | Form Inputs | 10227 |
| Button | `button()` | Form Controls | 314 |
| Error message | `errorMessage()` | Form Controls | 3710 |
| Fieldset | `fieldset()` | Form Controls | 3869 |
| Hint text | `hint()` | Form Controls | 5489 |
| Label | `label()` | Form Controls | 6014 |
| Back link | `backLink()` | Navigation | 105 |
| Breadcrumb | `breadcrumb()` | Navigation | 166 |
| Contents list | `contentsList()` | Navigation | 2822 |
| Pagination | `pagination()` | Navigation | 6270 |
| Skip link | `skipLink()` | Navigation | 8175 |
| Action link | `actionLink()` | Content | 64 |
| Card | `card()` | Content | 704 |
| Details | `details()` | Content | 3400 |
| Do and Don't list | `list()` | Content | 3490 |
| Hero | `hero()` | Content | 5407 |
| Images | `image()` | Content | 5517 |
| Inset text | `insetText()` | Content | 5984 |
| Legend | `legend()` | Content | 6086 |
| Panel | `panel()` | Content | 6575 |
| Summary list | `summaryList()` | Content | 8205 |
| Tables | `table()` | Content | 9093 |
| Tabs | `tabs()` | Content | 9852 |
| Tag | `tag()` | Content | 9965 |
| Task list | `taskList()` | Content | 10083 |
| Footer | `footer()` | Layout | 4192 |
| Header | `header()` | Layout | 4794 |
| Error summary | `errorSummary()` | Notifications | 3739 |
| Notification banner | `notificationBanner()` | Notifications | 6105 |
| Warning callout | `warningCallout()` | Notifications | 10380 |


---

## Action link

[↑ Back to top](#table-of-contents)

**Macro name:** `actionLink`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the action link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the action link. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the action link. If `html` is provided, the `text` option will be ignored. |
| `href` | string | ✓ | The value of the link `href` attribute. |
| `openInNewWindow` | boolean |  | If set to `true`, then the link will open in a new window. |
| `classes` | string |  | Classes to add to the anchor tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the anchor tag. |

### Examples

#### default

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  href: "#"
}) }}
```

#### reverse

```njk
{{ actionLink({
  classes: "nhsuk-action-link--reverse",
  text: "Find your nearest A&E",
  href: "#"
}) }}
```

---

## Back link

[↑ Back to top](#table-of-contents)

**Macro name:** `backLink`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the back link. |
| `text` | string |  | Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`. |
| `html` | string |  | HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`. |
| `href` | string |  | The value of the link `href` attribute. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |
| `visuallyHiddenText` | string |  | An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component. |
| `element` | string |  | HTML element for the back link component – `"button"` or `"a"`. If not provided, defaults to `"a"`. |

### Examples

#### default

```njk
{{ backLink({
  text: "Back",
  href: "#"
}) }}
```

#### as a button

```njk
{{ backLink({
  text: "Back",
  element: "button"
}) }}
```

#### reverse

```njk
{{ backLink({
  text: "Back",
  href: "#",
  classes: "nhsuk-back-link--reverse"
}) }}
```

#### with visually hidden text

```njk
{{ backLink({
  visuallyHiddenText: "Back to",
  text: "Search results",
  href: "#"
}) }}
```

---

## Breadcrumb

[↑ Back to top](#table-of-contents)

**Macro name:** `breadcrumb`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the breadcrumb. |
| `items` | array | ✓ | Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page. |
| `items.text` | string | ✓ | Text to use within the breadcrumbs item. |
| `items.href` | string |  | The value of the breadcrumb item link `href` attribute. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the individual crumb. |
| `text` | string | ✓ | Text to use for the parent page. |
| `href` | string | ✓ | The value of the parent page link `href` attribute. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |
| `labelText` | string |  | Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". |
| `backLink` | object |  | The back link used by the breadcrumbs component on mobile. *(accepts nested component params)* |

### Examples

#### default

```njk
{{ breadcrumb({
  items: [
    {
      href: "#",
      text: "Home"
    },
    {
      href: "#",
      text: "NHS services"
    },
    {
      href: "#",
      text: "Hospitals"
    }
  ]
}) }}
```

#### reverse

```njk
{{ breadcrumb({
  classes: "nhsuk-breadcrumb--reverse",
  items: [
    {
      href: "#",
      text: "Home"
    },
    {
      href: "#",
      text: "NHS services"
    },
    {
      href: "#",
      text: "Hospitals"
    }
  ]
}) }}
```

#### with back link as a button

```njk
{{ breadcrumb({
  items: [
    {
      href: "#",
      text: "Home"
    },
    {
      href: "#",
      text: "Search results"
    }
  ],
  backLink: {
    element: "button"
  }
}) }}
```

#### with back link custom text

```njk
{{ breadcrumb({
  items: [
    {
      href: "#",
      text: "Home"
    },
    {
      href: "#",
      text: "Advanced search"
    }
  ],
  backLink: {
    text: "Search results",
    href: "#"
  }
}) }}
```

#### attributes

```njk
{{ breadcrumb({
  id: "with-attributes",
  items: [
    {
      href: "#",
      text: "Home",
      attributes: {
        lang: "en"
      }
    },
    {
      href: "#",
      text: "NHS services",
      attributes: {
        lang: "en"
      }
    },
    {
      href: "#",
      text: "Hospitals",
      classes: "example-class-one example-class-two",
      attributes: {
        lang: "en"
      }
    }
  ],
  backLink: {
    id: "back-link-with-attributes",
    attributes: {
      lang: "en"
    }
  }
}) }}
```

---

## Button

[↑ Back to top](#table-of-contents)

**Macro name:** `button`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `element` | string |  | HTML element for the button component – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided. |
| `text` | string | ✓ | If `html` is set, this is not required. Text for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`. |
| `name` | string |  | Name for the `input` or `button`. This has no effect on `a` elements. |
| `type` | string |  | Type of `input` or `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements. |
| `value` | string |  | The `value` attribute for the `button` tag. This has no effect on `a` or `input` elements. |
| `disabled` | boolean |  | Whether the button should be disabled. For button and input elements, `disabled` and `aria-disabled` attributes will be set automatically. |
| `href` | string |  | The URL that the button should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined. |
| `classes` | string |  | Classes to add to the button component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the button component. |
| `preventDoubleClick` | boolean |  | Prevent accidental double clicks on submit buttons from submitting forms multiple times. |

### Examples

#### default

```njk
{{ button({
  text: "Save and continue"
}) }}
```

#### default, small

```njk
{{ button({
  text: "Save and continue",
  classes: "nhsuk-button--small"
}) }}
```

#### disabled

```njk
{{ button({
  text: "Disabled button",
  disabled: true
}) }}
```

#### disabled, small

```njk
{{ button({
  text: "Disabled button",
  classes: "nhsuk-button--small",
  disabled: true
}) }}
```

#### as a link

```njk
{{ button({
  text: "Link button",
  href: "#"
}) }}
```

#### as a link, small

```njk
{{ button({
  text: "Link button",
  classes: "nhsuk-button--small",
  href: "#"
}) }}
```

#### login

```njk
{{ button({
  text: "Continue",
  classes: "nhsuk-button--login"
}) }}
```

#### login, small

```njk
{{ button({
  text: "Continue",
  classes: "nhsuk-button--login nhsuk-button--small"
}) }}
```

#### login disabled

```njk
{{ button({
  text: "Continue",
  classes: "nhsuk-button--login",
  disabled: true
}) }}
```

#### login disabled, small

```njk
{{ button({
  text: "Continue",
  classes: "nhsuk-button--login nhsuk-button--small",
  disabled: true
}) }}
```

#### login as a link

```njk
{{ button({
  text: "Continue",
  classes: "nhsuk-button--login",
  href: "#"
}) }}
```

#### login as a link, small

```njk
{{ button({
  text: "Continue",
  classes: "nhsuk-button--login nhsuk-button--small",
  href: "#"
}) }}
```

#### with double click prevented

```njk
{{ button({
  text: "Save and continue",
  preventDoubleClick: true
}) }}
```

#### with double click not prevented

```njk
{{ button({
  text: "Save and continue",
  preventDoubleClick: false
}) }}
```

#### reverse

```njk
{{ button({
  text: "Log out",
  classes: "nhsuk-button--reverse"
}) }}
```

#### reverse, small

```njk
{{ button({
  text: "Log out",
  classes: "nhsuk-button--reverse nhsuk-button--small"
}) }}
```

#### reverse disabled

```njk
{{ button({
  text: "Log out",
  classes: "nhsuk-button--reverse",
  disabled: true
}) }}
```

#### reverse disabled, small

```njk
{{ button({
  text: "Log out",
  classes: "nhsuk-button--reverse nhsuk-button--small",
  disabled: true
}) }}
```

#### reverse as a link

```njk
{{ button({
  text: "Log out",
  classes: "nhsuk-button--reverse",
  href: "#"
}) }}
```

#### reverse as a link, small

```njk
{{ button({
  text: "Log out",
  classes: "nhsuk-button--reverse nhsuk-button--small",
  href: "#"
}) }}
```

#### secondary

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary"
}) }}
```

#### secondary, small

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary nhsuk-button--small"
}) }}
```

#### secondary disabled

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary",
  disabled: true
}) }}
```

#### secondary disabled, small

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary nhsuk-button--small",
  disabled: true
}) }}
```

#### secondary as a link

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary",
  href: "#"
}) }}
```

#### secondary as a link, small

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary nhsuk-button--small",
  href: "#"
}) }}
```

#### secondary, solid background

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary-solid"
}) }}
```

#### secondary, solid background, small

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary-solid nhsuk-button--small"
}) }}
```

#### secondary, solid background disabled

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary-solid",
  disabled: true
}) }}
```

#### secondary, solid background disabled, small

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary-solid nhsuk-button--small",
  disabled: true
}) }}
```

#### secondary, solid background as a link

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary-solid",
  href: "#"
}) }}
```

#### secondary, solid background as a link, small

```njk
{{ button({
  text: "Find my location",
  classes: "nhsuk-button--secondary-solid nhsuk-button--small",
  href: "#"
}) }}
```

#### warning

```njk
{{ button({
  text: "Yes, delete this vaccine",
  classes: "nhsuk-button--warning"
}) }}
```

#### warning, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  classes: "nhsuk-button--warning nhsuk-button--small"
}) }}
```

#### warning disabled

```njk
{{ button({
  text: "Yes, delete this vaccine",
  classes: "nhsuk-button--warning",
  disabled: true
}) }}
```

#### warning disabled, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  classes: "nhsuk-button--warning nhsuk-button--small",
  disabled: true
}) }}
```

#### warning as a link

```njk
{{ button({
  text: "Yes, delete this vaccine",
  classes: "nhsuk-button--warning",
  href: "#"
}) }}
```

#### warning as a link, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  classes: "nhsuk-button--warning nhsuk-button--small",
  href: "#"
}) }}
```

---

## Card

[↑ Back to top](#table-of-contents)

**Macro name:** `card`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the card. |
| `heading` | string | ✓ | Text to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored. |
| `headingHtml` | string | ✓ | HTML to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored. |
| `headingClasses` | string |  | Classes to add to the card heading. |
| `headingSize` | string |  | Size of the heading – `"xss"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `headingLevel` | integer |  | Optional heading level for the card heading. Defaults to `2`. |
| `headingId` | string |  | Optional `id` attribute for the card heading. |
| `headingVisuallyHiddenText` | string |  | Optional visually hidden prefix used before the heading. |
| `href` | string |  | The value of the card link `href` attribute. |
| `clickable` | boolean |  | If set to `true`, then the whole card will become a clickable card variant. |
| `type` | string |  | Care card variant type – `"non-urgent"`, `"urgent"` or `"emergency"`. |
| `feature` | boolean |  | If set to `true`, then the card will become a feature card variant. |
| `primary` | boolean |  | If set to `true`, the card will become a primary card variant (with chevron). |
| `secondary` | boolean |  | If set to `true`, the card will become a secondary card variant. |
| `warning` | boolean |  | If set to `true`, then the card will become a warning card variant used by the warning callout. |
| `image` | object |  | Can be used to add an image to the card component. |
| `image.src` | string | ✓ | The URL of the image in the card. |
| `image.alt` | string |  | The alternative text of the image in the card. |
| `image.html` | string |  | HTML to use for the image content. If `html` is provided, the `src` and `alt` arguments will be ignored. |
| `description` | string |  | Text description within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored. |
| `descriptionHtml` | string |  | HTML to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored. |
| `actions` | object |  | Can be used to add actions to the card component. |
| `actions.items` | array |  | Array of actions as links for use in the card component. |
| `actions.items.href` | string | ✓ | The value of the link's `href` attribute for an action item. |
| `actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `actions.items.classes` | string |  | Classes to add to the action item. |
| `actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `actions.classes` | string |  | Classes to add to the actions wrapper. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire card component in a `call` block. |
| `classes` | string |  | Classes to add to the card. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the card. |

### Examples

#### default

```njk
{% call card({
  heading: "If you need help now, but it's not an emergency",
  headingLevel: 3
}) %}
  <p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{% endcall %}
```

#### basic without heading

```njk
{{ card({
  description: "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### basic with heading link

```njk
{{ card({
  href: "#",
  heading: "Introduction to care and support",
  headingSize: "m",
  headingLevel: 3,
  description: "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### basic with custom HTML

```njk
{% call card({
  heading: "Help from NHS 111",
  headingLevel: 3
}) %}
  <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
  <p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
  <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{% endcall %}
```

#### basic with summary list

```njk
{% call card({
  heading: "Regional Manager",
  headingLevel: 3
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### basic with summary lists

```njk
{% call card({
  heading: "Regional Managers",
  headingLevel: 3
}) %}
  <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">East</h4>
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
  
  
  <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">West</h4>
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Sarah Philips
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          5 January 1978
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### basic with summary list and button

```njk
{% call card({
  heading: "Regional Manager",
  headingLevel: 3
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
  
  
  
  
  
  
  
  <button class="nhsuk-button nhsuk-button--secondary"
    data-module="nhsuk-button"
   type="submit">
    Add role
  </button>
{% endcall %}
```

#### basic with summary list and actions

```njk
{% call card({
  heading: "Regional Manager",
  headingLevel: 3,
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        href: "#/withdraw"
      }
    ]
  }
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### basic with summary list and actions, without heading

```njk
{% call card({
  actions: {
    items: [
      {
        text: "Delete",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/withdraw"
      }
    ]
  }
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### basic with summary list and actions (empty items)

```njk
{% call card({
  heading: "Regional Manager",
  headingLevel: 3,
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      false
    ]
  }
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### basic with summary list and heading link

```njk
{% call card({
  href: "#",
  heading: "Regional Manager",
  headingLevel: 3
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### secondary without heading

```njk
{{ card({
  secondary: true,
  description: "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### secondary with heading link

```njk
{{ card({
  href: "#",
  secondary: true,
  heading: "Introduction to care and support",
  headingSize: "m",
  headingLevel: 3,
  description: "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### secondary with custom HTML

```njk
{% call card({
  secondary: true,
  heading: "Help from NHS 111",
  headingLevel: 3
}) %}
  <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
  <p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
  <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{% endcall %}
```

#### secondary with summary list

```njk
{% call card({
  secondary: true,
  heading: "Regional Manager",
  headingLevel: 3
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### secondary with summary lists

```njk
{% call card({
  secondary: true,
  heading: "Regional Managers",
  headingLevel: 3
}) %}
  <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">East</h4>
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
  
  
  <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">West</h4>
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Sarah Philips
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          5 January 1978
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### secondary with summary list and button

```njk
{% call card({
  secondary: true,
  heading: "Regional Manager",
  headingLevel: 3
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
  
  
  
  
  
  
  
  <button class="nhsuk-button nhsuk-button--secondary"
    data-module="nhsuk-button"
   type="submit">
    Add role
  </button>
{% endcall %}
```

#### secondary with summary list and actions

```njk
{% call card({
  secondary: true,
  heading: "Regional Manager",
  headingLevel: 3,
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        href: "#/withdraw"
      }
    ]
  }
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### secondary with summary list and actions, without heading

```njk
{% call card({
  secondary: true,
  actions: {
    items: [
      {
        text: "Delete",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/withdraw"
      }
    ]
  }
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### secondary with summary list and actions (empty items)

```njk
{% call card({
  secondary: true,
  heading: "Regional Manager",
  headingLevel: 3,
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      false
    ]
  }
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### secondary with summary list and heading link

```njk
{% call card({
  href: "#",
  secondary: true,
  heading: "Regional Manager",
  headingLevel: 3
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### non-urgent (blue)

```njk
{% call card({
  heading: "Speak to a GP if:",
  headingLevel: 3,
  type: "non-urgent"
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
  heading: "Ask for an urgent GP appointment if:",
  headingLevel: 3,
  type: "urgent"
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
  heading: "Call 999 if you have sudden chest pain that:",
  headingLevel: 3,
  type: "emergency"
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
  heading: "Call 999 or go to A&E now if:",
  headingLevel: 3,
  type: "emergency"
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
  href: "#",
  primary: true,
  clickable: true,
  heading: "Breast screening",
  headingSize: "m"
}) }}
```

#### primary (with chevron and description)

```njk
{{ card({
  href: "#",
  primary: true,
  clickable: true,
  heading: "Introduction to care and support",
  headingSize: "m",
  description: "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### clickable

```njk
{{ card({
  href: "#",
  clickable: true,
  heading: "Introduction to care and support",
  headingSize: "m",
  description: "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### secondary

```njk
{{ card({
  href: "#",
  clickable: true,
  secondary: true,
  heading: "Urgent and emergency care services",
  headingSize: "m",
  description: "Services the NHS provides if you need urgent or emergency medical help"
}) }}
```

#### secondary non-clickable with custom description

```njk
{{ card({
  href: "#",
  secondary: true,
  heading: "Why we are reinvesting in the NHS Prototype kit",
  headingClasses: "nhsuk-u-font-size-22 nhsuk-u-margin-bottom-2",
  descriptionHtml: "<p class="nhsuk-body-s nhsuk-u-margin-bottom-2">21 July 2025</p>
<p class="nhsuk-card__description">Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.</p>"
}) }}
```

#### feature

```njk
{{ card({
  feature: true,
  heading: "Feature card heading",
  description: "Feature card description."
}) }}
```

#### feature with A to Z content

```njk
{{ card({
  feature: true,
  heading: "A",
  headingId: "a",
  headingSize: "m",
  descriptionHtml: "<ul class="nhsuk-list nhsuk-list--border">
  <li><a href="#/conditions/abdominal-aortic-aneurysm/">AAA, see Abdominal aortic aneurysm</a></li>
  <li><a href="#/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a></li>
  <li><a href="#/conditions/abscess/">Abscess</a></li>
</ul>"
}) }}
```

#### feature with summary list

```njk
{% call card({
  feature: true,
  heading: "Feature card heading"
}) %}
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Name
        </dt>
        <dd class="nhsuk-summary-list__value">
          Karen Francis
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="nhsuk-summary-list__value">
          15 March 1984
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### feature with nested card and summary list

```njk
{% call card({
  feature: true,
  heading: "Flu: Follow-up requested"
}) %}
  <p>Sarah Philips (Mum) would like to speak to a member of the team about other options for their child's vaccination.</p>
  <a class="nhsuk-button nhsuk-button--secondary" href="#">Record a new consent response</a>
  
  <h3 class="nhsuk-heading-s">Consent responses</h3>
  
  <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Email address
        </dt>
        <dd class="nhsuk-summary-list__value">
          sarah.philips@example.com
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Date
        </dt>
        <dd class="nhsuk-summary-list__value">
          25 August 2025 at 4:04 pm
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Response
        </dt>
        <dd class="nhsuk-summary-list__value">
          <strong class="nhsuk-tag nhsuk-tag--orange">
            Follow up requested
          </strong>
        </dd>
      </div>
  </dl>
{% endcall %}
```

#### warning

```njk
{{ card({
  warning: true,
  heading: "School, nursery or work",
  description: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

#### warning with actions

```njk
{{ card({
  warning: true,
  heading: "School, nursery or work",
  description: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.",
  actions: {
    items: [
      {
        text: "Dismiss",
        href: "#/dismiss"
      }
    ]
  }
}) }}
```

#### with image

```njk
{{ card({
  image: {
    src: "https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
  },
  href: "#",
  clickable: true,
  heading: "Exercise",
  headingSize: "m",
  description: "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
}) }}
```

#### with image and caption

```njk
{{ card({
  image: {
    html: "
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" alt="">  <figcaption class="nhsuk-image__caption">
    [object Object]
  </figcaption></figure>
"
  },
  href: "#",
  clickable: true,
  heading: "Exercise",
  headingSize: "m",
  description: "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
}) }}
```

#### with image and custom HTML

```njk
{{ card({
  image: {
    src: "https://service-manual.nhs.uk/assets/blog-prototype-kit.png"
  },
  href: "https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit",
  clickable: true,
  heading: "Why we are reinvesting in the NHS prototype kit",
  headingSize: "m",
  headingHtml: "<p class="nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-bottom-0"><span class="nhsuk-u-visually-hidden">Published on: </span>21 July 2025</p>
<p class="nhsuk-body-s nhsuk-u-font-weight-bold">NHS England Design Matters blog</p>",
  description: "Frankie Roberto and Mike Gallagher explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it."
}) }}
```

#### top task

```njk
{{ card({
  href: "#",
  clickable: true,
  headingLevel: 5,
  heading: "Order a repeat prescription",
  headingSize: "xs"
}) }}
```

---

## Character count

[↑ Back to top](#table-of-contents)

**Macro name:** `characterCount`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `maxlength` | string | ✓ | If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored. |
| `maxwords` | string | ✓ | If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored. |
| `threshold` | string |  | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. |
| `label` | object | ✓ | The label used by the character count component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to the character count component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
| `formGroup` | object |  | Additional options for the form group containing the character count component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the textarea used by the character count component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the textarea used by the character count component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the textarea. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the character count. |
| `countMessage` | object |  | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string |  | Classes to add to the count message. |
| `textareaDescriptionText` | string |  | Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` parameter. |

### Examples

#### default

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  maxlength: 200
}) }}
```

#### with hint

```njk
{{ characterCount({
  label: {
    text: "Enter a job description",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "with-hint",
  name: "example",
  maxlength: 200
}) }}
```

#### with error message

```njk
{{ characterCount({
  label: {
    text: "Enter a job description",
    size: "l",
    isPageHeading: true
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value: "A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with hint and error

```njk
{{ characterCount({
  label: {
    text: "Enter a job description",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value: "A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with default value

```njk
{{ characterCount({
  label: {
    text: "Enter a job description",
    size: "l",
    isPageHeading: true
  },
  id: "with-default-value",
  name: "example",
  maxlength: 350,
  value: "A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

#### with custom rows

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  id: "custom-rows",
  name: "example",
  maxlength: 350,
  rows: 15
}) }}
```

#### label

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    isPageHeading: true
  },
  id: "custom-size",
  name: "example",
  maxlength: 200
}) }}
```

#### without page heading

```njk
{{ characterCount({
  label: {
    text: "Tell us more about what happened"
  },
  id: "without-heading",
  name: "example",
  maxlength: 150
}) }}
```

#### with maxlength attribute

```njk
{{ characterCount({
  label: {
    text: "Enter a job description"
  },
  id: "maxlength-attribute",
  name: "example",
  maxlength: 11,
  attributes: {
    maxlength: 11
  }
}) }}
```

#### with word count

```njk
{{ characterCount({
  label: {
    text: "Enter a job description",
    size: "l",
    isPageHeading: true
  },
  id: "with-word-count",
  name: "example",
  maxwords: 150
}) }}
```

#### with threshold

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  id: "with-threshold",
  name: "example",
  value: "Type another letter into this field after this message to see the threshold feature",
  maxlength: 112,
  threshold: 75
}) }}
```

#### with neither maxlength nor maxwords set

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  textareaDescriptionText: "No more than %{count} characters",
  id: "no-maximum-description",
  name: "example",
  value: "This textarea has no maximum character or word count.",
  rows: 8
}) }}
```

#### with neither maxlength, maxwords nor textarea description set

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  id: "no-maximum",
  name: "example",
  value: "This textarea has no maximum character or word count.",
  rows: 8
}) }}
```

#### with translations

```njk
{{ characterCount({
  label: {
    text: "Allwch chi roi mwy o fanylion?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Peidiwch â chynnwys gwybodaeth bersonol, fel eich enw, dyddiad geni na rhif y GIG"
  },
  id: "with-translations",
  name: "example",
  maxlength: 200,
  textareaDescriptionText: "Gallwch ddefnyddio hyd at %{count} nod",
  charactersUnderLimitText: {
    one: "Mae gennych %{count} nod ar ôl",
    two: "Mae gennych %{count} nod ar ôl",
    few: "Mae gennych %{count} nod ar ôl",
    many: "Mae gennych %{count} nod ar ôl",
    other: "Mae gennych %{count} nod ar ôl"
  },
  charactersAtLimitText: "Mae gennych 0 nod ar ôl",
  charactersOverLimitText: {
    one: "Mae gennych %{count} nod yn ormod",
    two: "Mae gennych %{count} nod yn ormod",
    few: "Mae gennych %{count} nod yn ormod",
    many: "Mae gennych %{count} nod yn ormod",
    other: "Mae gennych chi %{count} nod yn ormod"
  }
}) }}
```

#### to configure in JavaScript

```njk
{{ characterCount({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  id: "to-configure-in-javascript",
  name: "example"
}) }}
```

---

## Checkboxes

[↑ Back to top](#table-of-contents)

**Macro name:** `checkboxes`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the checkboxes component. |
| `describedBy` | string |  | One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users. |
| `fieldset` | object |  | Can be used to add a fieldset to the checkboxes component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to the checkboxes component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
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
| `items.label` | object |  | Subset of options for the label used by each checkbox item within the checkboxes component. *(accepts nested component params)* |
| `items.label.classes` | string |  | Classes to add to the label tag. |
| `items.label.attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |
| `items.hint` | object |  | Can be used to add a hint to each checkbox item within the checkboxes component. *(accepts nested component params)* |
| `items.divider` | string |  | Divider text to separate checkbox items, for example the text `"or"`. |
| `items.checked` | boolean |  | Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the checkbox is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the checkbox is checked. |
| `items.disabled` | boolean |  | If `true`, checkbox will be disabled. |
| `items.classes` | string |  | Classes to add to the checkbox input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `items.exclusive` | boolean |  | If set to `true`, marks this checkbox as the None option in a None of these type behaviour. Unchecking all other checkboxes in the group when None is clicked. |
| `items.exclusiveGroup` | string |  | Used in conjunction with `exclusive` - this should be set to a string which groups checkboxes together into a set for use in a None of these scenario. |
| `values` | array |  | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string |  | Classes to add to the checkboxes container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the checkboxes container. |

### Examples

#### default

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
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

#### with hint

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "What is your nationality?"
    }
  },
  hint: {
    text: "If you have dual nationality, select all options that are relevant to you"
  },
  idPrefix: "with-hint",
  name: "example",
  items: [
    {
      value: "british",
      text: "British"
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

#### with pre-checked values

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  idPrefix: "conditional",
  name: "contact",
  values: [
    "email",
    "text"
  ],
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
      }
    }
  ]
}) }}
```

#### with hints on items

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "What is your nationality?"
    }
  },
  hint: {
    text: "If you have dual nationality, select all options that are relevant to you"
  },
  idPrefix: "with-hint-item",
  name: "example",
  items: [
    {
      value: "british",
      text: "British",
      hint: {
        text: "including English, Scottish, Welsh and Northern Irish"
      }
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

#### without fieldset

```njk
{{ checkboxes({
  fieldset: null,
  id: "with-disabled-item",
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
      text: "Blue",
      disabled: true
    }
  ]
}) }}
```

#### with disabled item

```njk
{{ checkboxes({
  fieldset: null,
  id: "with-disabled-item",
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
      text: "Blue",
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
      text: "How do you want to be contacted about this?"
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

#### with hint and error

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
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

#### with long text

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "Venenatis Condimentum"
    }
  },
  idPrefix: "with-long-text",
  name: "example",
  items: [
    {
      value: "nullam",
      text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
at eget metus."
    },
    {
      value: "aenean",
      text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
venenatis vestibulum. Cras mattis consectetur purus sit amet
fermentum."
    },
    {
      value: "fusce",
      text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
malesuada magna mollis euismod. Praesent commodo cursus magna, vel
scelerisque nisl consectetur et. Etiam porta sem malesuada magna
mollis euismod. Etiam porta sem malesuada magna mollis euismod.
Donec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}) }}
```

#### legend

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
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

#### without page heading

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      isPageHeading: false
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
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

#### with conditional content

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
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
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
      }
    }
  ]
}) }}
```

#### with conditional content, special characters

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  idPrefix: "user.profile[contact-prefs]",
  name: "contact",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
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
      text: "How do you want to be contacted about this?"
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
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
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
      text: "How do you want to be contacted about this?"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  idPrefix: "conditional",
  name: "example",
  values: [
    "phone"
  ],
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>  <span class="nhsuk-error-message" id="phone-error">
  <span class="nhsuk-u-visually-hidden">Error:</span> Enter your phone number
  </span>    <input class="nhsuk-input nhsuk-u-width-two-thirds nhsuk-input--error" id="phone" name="phone" type="tel" aria-describedby="phone-error"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
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
      text: "How do you want to be contacted about this?"
    }
  },
  idPrefix: "conditional",
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
      text: "None of the above",
      exclusive: true
    }
  ]
}) }}
```

#### with "none of the above" option, conditional content

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
    }
  },
  idPrefix: "conditional",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
      }
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "None of the above",
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
      text: "How do you want to be contacted about this?",
      size: "l",
      isPageHeading: true
    }
  },
  idPrefix: "conditional",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email",
      exclusiveGroup: "communication-preferences"
    },
    {
      value: "phone",
      text: "Phone",
      exclusiveGroup: "communication-preferences"
    },
    {
      value: "text",
      text: "Text message",
      exclusiveGroup: "communication-preferences"
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "None of the above",
      exclusive: true,
      exclusiveGroup: "communication-preferences"
    }
  ]
}) }}
```

#### with "none of the above" option (named group, unique)

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?",
      size: "l",
      isPageHeading: true
    }
  },
  idPrefix: "conditional",
  items: [
    {
      name: "preference-email",
      value: "yes",
      text: "Email",
      exclusiveGroup: "communication-preferences"
    },
    {
      name: "preference-phone",
      value: "yes",
      text: "Phone",
      exclusiveGroup: "communication-preferences"
    },
    {
      name: "preference-text",
      value: "yes",
      text: "Text message",
      exclusiveGroup: "communication-preferences"
    },
    {
      divider: "or"
    },
    {
      name: "preference-none",
      value: "yes",
      text: "None of the above",
      exclusive: true,
      exclusiveGroup: "communication-preferences"
    }
  ]
}) }}
```

---

## Contents list

[↑ Back to top](#table-of-contents)

**Macro name:** `contentsList`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the contents list. |
| `items` | array | ✓ | Array of content list items objects. |
| `items.href` | string | ✓ | The `href` attribute for the content list item label. Required unless `item.current` is set. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each content list item label. If `html` is provided, the `text` argument will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each content list item label. If `html` is provided, the `text` argument will be ignored. |
| `items.classes` | string |  | Classes to add to the content list item label. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the content list item label. |
| `landmarkLabel` | string |  | The label for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`. |
| `classes` | string |  | Classes to add to the content list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the content list container. |
| `visuallyHiddenTitle` | string |  | Visually hidden title for the contents list items. Defaults to `"Contents"`. |

### Examples

#### default

```njk
{{ contentsList({
  items: [
    {
      href: "#",
      text: "What is AMD?",
      current: true
    },
    {
      href: "#",
      text: "Symptoms"
    },
    {
      href: "#",
      text: "Getting diagnosed"
    },
    {
      href: "#",
      text: "Treatments"
    },
    {
      href: "#",
      text: "Living with AMD"
    }
  ]
}) }}
```

#### with empty items

```njk
{{ contentsList({
  items: [
    {
      href: "#",
      text: "What is AMD?",
      current: true
    },
    {
      href: "#",
      text: "Symptoms"
    },
    false,
    {
      href: "#",
      text: "Treatments"
    },
    false
  ]
}) }}
```

---

## Date input

[↑ Back to top](#table-of-contents)

**Macro name:** `dateInput`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✓ | This is used for the main component and to compose the `id` attribute for each item. |
| `namePrefix` | string |  | Optional prefix. This is used to prefix each date input `name` attribute, wrapped in `[` and `]`. For example, setting `namePrefix: "dob"` will output the `name` attributes `dob[day]`, `dob[month]` and `dob[year]` respectively. |
| `items` | array |  | The inputs within the date input component. |
| `items.id` | string |  | Item-specific `id` attribute. If provided, it will be used instead of the generated ID. |
| `items.name` | string | ✓ | Item-specific `name` attribute. |
| `items.label` | string |  | Item-specific label text. If provided, this will be used instead of `name` for item label text. |
| `items.inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). Defaults to `"numeric"`. |
| `items.value` | string |  | If provided, it will be used as the initial `value` attribute of the input. |
| `items.autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `items.pattern` | string |  | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `items.classes` | string |  | Classes to add to date input item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the date input tag. |
| `hint` | object |  | Can be used to add a hint to a date input component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
| `formGroup` | object |  | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `fieldset` | object |  | Can be used to add a fieldset to the date input component. *(accepts nested component params)* |
| `values` | object |  | An optional object use to specify `value` attributes for the date parts without setting items. |
| `values.day` | string |  | The `value` attribute for the day input. |
| `values.month` | string |  | The `value` attribute for the month input. |
| `values.year` | string |  | The `value` attribute for the year input. |
| `classes` | string |  | Classes to add to the date-input container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the date-input container. |

### Examples

#### default

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example"
}) }}
```

#### with values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  values: {
    day: "5",
    month: "8",
    year: "2024"
  }
}) }}
```

#### day and month

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your birthday?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2"
    }
  ]
}) }}
```

#### day and month (empty item)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your birthday?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2"
    },
    false
  ]
}) }}
```

#### month and year

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "When did you start your job?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  items: [
    {
      name: "month",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4"
    }
  ]
}) }}
```

#### month and year (empty item)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "When did you start your job?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  items: [
    false,
    {
      name: "month",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4"
    }
  ]
}) }}
```

#### month and year with values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "When did you start your job?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  values: {
    month: "8",
    year: "2024"
  },
  items: [
    {
      name: "month",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4"
    }
  ]
}) }}
```

#### legend

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "custom-size"
}) }}
```

#### without page heading

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example"
}) }}
```

#### with autocomplete values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2",
      autocomplete: "bday-day"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2",
      autocomplete: "bday-month"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4",
      autocomplete: "bday-year"
    }
  ]
}) }}
```

#### with custom name prefix

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  namePrefix: "example"
}) }}
```

#### with errors only

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4 nhsuk-input--error"
    }
  ]
}) }}
```

#### with errors and hint

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4 nhsuk-input--error"
    }
  ]
}) }}
```

#### with error on day input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a day"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      name: "month",
      value: "3",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "year",
      value: "1980",
      classes: "nhsuk-input--width-4"
    }
  ]
}) }}
```

#### with error on month input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a month"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2",
      value: "31"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4",
      value: "1980"
    }
  ]
}) }}
```

#### with error on year input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a year"
  },
  id: "example",
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2",
      value: "31"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2",
      value: "3"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4 nhsuk-input--error"
    }
  ]
}) }}
```

---

## Details

[↑ Back to top](#table-of-contents)

**Macro name:** `details`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `summaryText` | string | ✓ | If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `summaryHtml` | string | ✓ | If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | The `id` to add to the details element. |
| `open` | boolean |  | If `true`, details element will be expanded. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block. |
| `classes` | string |  | Classes to add to the details element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the details element. |

### Examples

#### default

```njk
{% call details({
  summaryText: "How to find your NHS number"
}) %}
  <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
  <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
  <ul>
    <li>prescriptions</li>
    <li>test results</li>
    <li>hospital referral letters</li>
    <li>appointment letters</li>
  </ul>
  <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
{% endcall %}
```

#### open

```njk
{% call details({
  summaryText: "How to find your NHS number",
  open: true
}) %}
  <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
  <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
  <ul>
    <li>prescriptions</li>
    <li>test results</li>
    <li>hospital referral letters</li>
    <li>appointment letters</li>
  </ul>
  <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
{% endcall %}
```

#### expander

```njk
{% call details({
  summaryText: "Opening times",
  classes: "nhsuk-expander"
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
  summaryText: "Opening times",
  classes: "nhsuk-expander",
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

[↑ Back to top](#table-of-contents)

**Macro name:** `list`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the do and don't list component. |
| `title` | string | ✓ | Title to be displayed on the do and don't list component. |
| `type` | string | ✓ | Type of do and don't list component – `"cross"` or `"tick"`. |
| `items` | array | ✓ | Array of do and don't items objects. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `prefixText` | string |  | Optional prefix text used before each do and don't item. Defaults to `"do not"` when `type` is `"cross"`. |
| `hidePrefix` | boolean |  | If set to `true`, the optional `prefixText` will be removed from each do and don't item. |
| `headingLevel` | integer |  | Optional heading level for the title heading. Defaults to `3`. |
| `classes` | string |  | Classes to add to the do and don't list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the do and don't list container. |

### Examples

#### default

```njk
{{ list({
  title: "Do",
  type: "tick",
  items: [
    {
      text: "cover blisters with a soft plaster or padded dressing"
    },
    {
      text: "wash your hands before touching a burst blister"
    },
    {
      text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
    }
  ]
}) }}
```

#### (do) with empty items

```njk
{{ list({
  title: "Do",
  type: "tick",
  items: [
    {
      text: "cover blisters with a soft plaster or padded dressing"
    },
    {
      text: "wash your hands before touching a burst blister"
    },
    false
  ]
}) }}
```

#### (do) with deprecated parameters

```njk
{{ list({
  title: "Do",
  type: "tick",
  items: [
    {
      item: "cover blisters with a soft plaster or padded dressing"
    },
    {
      item: "wash your hands before touching a burst blister"
    },
    {
      item: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
    }
  ]
}) }}
```

#### (do) with custom prefix

```njk
{{ list({
  title: "Do",
  type: "tick",
  prefixText: "always",
  items: [
    {
      item: "cover blisters with a soft plaster or padded dressing"
    },
    {
      item: "wash your hands before touching a burst blister"
    },
    {
      item: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
    }
  ]
}) }}
```

#### (don't)

```njk
{{ list({
  title: "Don't",
  type: "cross",
  items: [
    {
      text: "burst a blister yourself"
    },
    {
      text: "peel the skin off a burst blister"
    },
    {
      text: "pick at the edges of the remaining skin"
    },
    {
      text: "wear the shoes or use the equipment that caused your blister until it heals"
    }
  ]
}) }}
```

#### (don't) with empty items

```njk
{{ list({
  title: "Don't",
  type: "cross",
  items: [
    {
      item: "burst a blister yourself"
    },
    {
      item: "peel the skin off a burst blister"
    },
    {
      item: "pick at the edges of the remaining skin"
    },
    false
  ]
}) }}
```

#### (don't) with deprecated parameters

```njk
{{ list({
  title: "Don't",
  type: "cross",
  items: [
    {
      item: "burst a blister yourself"
    },
    {
      item: "peel the skin off a burst blister"
    },
    {
      item: "pick at the edges of the remaining skin"
    },
    {
      item: "wear the shoes or use the equipment that caused your blister until it heals"
    }
  ]
}) }}
```

#### (don't) with custom prefix

```njk
{{ list({
  title: "Never",
  type: "cross",
  prefixText: "never",
  items: [
    {
      text: "burst a blister yourself"
    },
    {
      text: "peel the skin off a burst blister"
    },
    {
      text: "pick at the edges of the remaining skin"
    },
    {
      text: "wear the shoes or use the equipment that caused your blister until it heals"
    }
  ]
}) }}
```

#### (don't) with hidden prefix

```njk
{{ list({
  title: "Don't",
  type: "cross",
  hidePrefix: true,
  items: [
    {
      text: "avoid bursting a blister yourself"
    },
    {
      text: "certainly don't peel the skin off a burst blister"
    },
    {
      text: "absolutely do not pick at the edges of the remaining skin"
    },
    {
      text: "please don't wear the shoes or use the equipment that caused your blister until it heals"
    }
  ]
}) }}
```

---

## Error message

[↑ Back to top](#table-of-contents)

**Macro name:** `errorMessage`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | The `id` attribute to add to the error message `<span>` tag. |
| `classes` | string |  | Classes to add to the error message `<span>` tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error message `<span>` tag. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the error message. Defaults to `"Error"`. |

### Examples

#### default

```njk
{{ errorMessage({
  text: "Enter your full name"
}) }}
```

---

## Error summary

[↑ Back to top](#table-of-contents)

**Macro name:** `errorSummary`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the error summary. |
| `titleText` | string | ✓ | If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `titleHtml` | string | ✓ | If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `descriptionText` | string |  | Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`. |
| `descriptionHtml` | string |  | HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`. |
| `caller` | nunjucks-block |  | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array |  | A list of errors to include in the error summary. |
| `errorList.href` | string |  | The `href` attribute for the error link item. If provided item will be an anchor. |
| `errorList.text` | string | ✓ | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.html` | string | ✓ | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.attributes` | object |  | HTML attributes (for example data attributes) to add to the error link anchor. |
| `disableAutoFocus` | boolean |  | Prevent moving focus to the error summary when the page loads. |
| `classes` | string |  | Classes to add to the error-summary container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error-summary container. |

### Examples

#### default

```njk
{{ errorSummary({
  titleText: "There is a problem",
  descriptionText: "Describe the errors and how to correct them",
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### with multiple errors

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your first name",
      href: "#example-first-name"
    },
    {
      text: "Enter your last name",
      href: "#example-last-name"
    }
  ]
}) }}
```

#### with multiple errors (empty items)

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your first name",
      href: "#example-first-name"
    },
    false
  ]
}) }}
```

#### without description

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### without error list

```njk
{{ errorSummary({
  titleText: "There is a problem",
  descriptionText: "Describe the errors and how to correct them"
}) }}
```

#### auto-focus disabled

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ],
  disableAutoFocus: true
}) }}
```

#### auto-focus explicitly enabled

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ],
  disableAutoFocus: false
}) }}
```

---

## Fieldset

[↑ Back to top](#table-of-contents)

**Macro name:** `fieldset`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the fieldset. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `legend` | object |  | The legend for the fieldset component. *(accepts nested component params)* |
| `classes` | string |  | Classes to add to the fieldset container. |
| `role` | string |  | Optional ARIA `role` attribute. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the fieldset container. |
| `html` | string |  | HTML to use/render within the fieldset element. |
| `caller` | nunjucks-block |  | Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block. |

### Examples

#### default

```njk
{% call fieldset({
  legend: {
    text: "What is your address?",
    size: "l",
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

#### legend

```njk
{{ fieldset({
  legend: {
    text: "What is your address?",
    isPageHeading: true
  }
}) }}
```

#### with legend size class

```njk
{{ fieldset({
  legend: {
    text: "What is your address?",
    classes: "nhsuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}
```

#### with legend size class overriding size param

```njk
{{ fieldset({
  legend: {
    text: "What is your address?",
    classes: "nhsuk-fieldset__legend--l",
    size: "s",
    isPageHeading: true
  }
}) }}
```

#### without page heading

```njk
{{ fieldset({
  legend: {
    text: "What is your address?"
  }
}) }}
```

---

## File upload

[↑ Back to top](#table-of-contents)

**Macro name:** `fileUpload`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `disabled` | boolean |  | If `true`, file input will be disabled. |
| `multiple` | boolean |  | If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the file upload component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to the file upload component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
| `formGroup` | object |  | Additional options for the form group containing the file upload component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the file upload component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the file upload component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `chooseFilesButtonClassList` | array |  | Classes to add to the button that opens the file picker. Default is `["nhsuk-button--secondary"]`. |
| `chooseFilesButtonText` | string |  | The text of the button that opens the file picker. Default is `"Choose file"`. |
| `dropInstructionText` | string |  | The text informing users they can drop files. Default is `"or drop file"`. |
| `multipleFilesChosenText` | object |  | The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules). |
| `noFileChosenText` | string |  | The text displayed when no file has been chosen by the user. Default is `"No file chosen"`. |
| `enteredDropZoneText` | string |  | The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`. |
| `leftDropZoneText` | string |  | The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`. |
| `classes` | string |  | Classes to add to the file upload component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the file upload component. |

### Examples

#### default

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    size: "l",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with hint

```njk
{{ fileUpload({
  label: {
    text: "Upload your photo",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with error message

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    size: "l",
    isPageHeading: true
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with hint and error

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    size: "l",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload",
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  }
}) }}
```

#### label

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### button

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    size: "l",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### without page heading

```njk
{{ fileUpload({
  label: {
    text: "Upload a file"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with multiple

```njk
{{ fileUpload({
  label: {
    text: "Upload multiple files",
    size: "l",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload",
  multiple: true,
  chooseFilesButtonText: "Choose files",
  dropInstructionText: "or drop files",
  noFileChosenText: "No files chosen"
}) }}
```

#### disabled

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    size: "l",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload",
  disabled: true
}) }}
```

#### with translations

```njk
{{ fileUpload({
  label: {
    text: "Llwythwch ffeil i fyny",
    size: "l",
    isPageHeading: true
  },
  id: "file-upload",
  name: "file-upload",
  multiple: true,
  chooseFilesButtonText: "Dewiswch ffeil",
  dropInstructionText: "neu ollwng ffeil",
  noFileChosenText: "Dim ffeil wedi'i dewis",
  multipleFilesChosenText: {
    other: "%{count} ffeil wedi'u dewis",
    one: "%{count} ffeil wedi'i dewis"
  },
  enteredDropZoneText: "Wedi mynd i mewn i'r parth gollwng",
  leftDropZoneText: "Parth gollwng i'r chwith"
}) }}
```

#### to configure in JavaScript

```njk
{{ fileUpload({
  label: {
    text: "Upload a file",
    size: "l",
    isPageHeading: true
  },
  id: "to-configure-in-javascript",
  name: "file-upload"
}) }}
```

---

## Footer

[↑ Back to top](#table-of-contents)

**Macro name:** `footer`

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
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

#### with copyright text only

```njk
{{ footer({}) }}
```

#### with custom copyright text

```njk
{{ footer({
  copyright: {
    text: "© East London NHS Foundation Trust"
  }
}) }}
```

#### with meta (links only)

```njk
{{ footer({
  meta: {
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

#### with meta (links and text)

```njk
{{ footer({
  copyright: {
    text: "© Crown copyright"
  },
  meta: {
    text: "All content is available under the Open Government Licence v3.0, except where otherwise stated.",
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

#### with meta (links and HTML)

```njk
{{ footer({
  copyright: {
    text: ""
  },
  meta: {
    html: "<p class="nhsuk-body-s">All content is available under the Open Government Licence v3.0, except where otherwise stated.</p>
<p class="nhsuk-body-s">© Custom copyright</p>",
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
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
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

#### with single navigation group (empty items)

```njk
{{ footer({
  navigation: {
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      false,
      false,
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

#### with multiple navigation groups

```njk
{{ footer({
  copyright: {
    text: "© Crown copyright"
  },
  navigation: [
    {
      items: [
        {
          href: "#",
          text: "Home"
        },
        {
          href: "#",
          text: "Health A to Z"
        },
        {
          href: "#",
          text: "NHS services"
        },
        {
          href: "#",
          text: "Live Well"
        },
        {
          href: "#",
          text: "Mental health"
        },
        {
          href: "#",
          text: "Care and support"
        },
        {
          href: "#",
          text: "Accessibility statement"
        },
        {
          href: "#",
          text: "Pregnancy"
        },
        {
          href: "#",
          text: "COVID-19"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "NHS App"
        },
        {
          href: "#",
          text: "Find my NHS number"
        },
        {
          href: "#",
          text: "View your GP health records"
        },
        {
          href: "#",
          text: "View your test results"
        },
        {
          href: "#",
          text: "About the NHS"
        },
        {
          href: "#",
          text: "Healthcare abroad"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "Other NHS websites"
        },
        {
          href: "#",
          text: "Profile editor login"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "About us"
        },
        {
          href: "#",
          text: "Give us feedback"
        },
        {
          href: "#",
          text: "Accessibility statement"
        },
        {
          href: "#",
          text: "Our policies"
        },
        {
          href: "#",
          text: "Cookies"
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
    text: "© 2025 – Manchester University NHS Foundation Trust"
  },
  columns: 3,
  navigation: [
    {
      width: "one-quarter",
      items: [
        {
          href: "#",
          text: "About us"
        },
        {
          href: "#",
          text: "Give us feedback"
        },
        {
          href: "#",
          text: "Accessibility statement"
        }
      ]
    },
    {
      width: "one-quarter",
      items: [
        {
          href: "#",
          text: "Cookies"
        },
        {
          href: "#",
          text: "Privacy policy"
        },
        {
          href: "#",
          text: "Terms and conditions"
        }
      ]
    },
    {
      width: "one-half",
      html: "<p class="nhsuk-body-s nhsuk-u-margin-bottom-6"><strong>Manchester
University NHS Foundation Trust (MFT)</strong> was formed on 1st
October 2017 following the merger of Central Manchester University
Hospitals NHS Foundation Trust (CMFT) and University Hospital of
South Manchester NHS Foundation Trust (UHSM).</p>"
    },
    {
      width: "full",
      html: "<p class="nhsuk-body-s">Cobbett House, Manchester University NHS
Foundation Trust, Oxford Road, Manchester, M13 9WL</p>"
    }
  ]
}) }}
```

#### with multiple titled navigation groups

```njk
{{ footer({
  navigation: [
    {
      title: "Legal",
      items: [
        {
          href: "#",
          text: "Looking after your data"
        },
        {
          href: "#",
          text: "Freedom of information"
        },
        {
          href: "#",
          text: "Modern Slavery and human trafficking statement"
        }
      ]
    },
    {
      title: "Get in touch",
      items: [
        {
          href: "#",
          text: "Contact us"
        },
        {
          href: "#",
          text: "Press office"
        },
        {
          href: "#",
          text: "Tell us what you think of our website"
        },
        {
          href: "#",
          text: "RSS feeds"
        }
      ]
    },
    {
      title: "Follow us",
      items: [
        {
          href: "#",
          text: "LinkedIn"
        },
        {
          href: "#",
          text: "YouTube"
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
    text: "© Crown copyright"
  },
  navigation: [
    {
      items: [
        {
          href: "#",
          text: "Home"
        },
        {
          href: "#",
          text: "Health A to Z"
        },
        {
          href: "#",
          text: "Live Well"
        },
        {
          href: "#",
          text: "Mental health"
        },
        {
          href: "#",
          text: "Care and support"
        },
        {
          href: "#",
          text: "Accessibility statement"
        },
        {
          href: "#",
          text: "Pregnancy"
        },
        {
          href: "#",
          text: "NHS services"
        },
        {
          href: "#",
          text: "Coronavirus (COVID-19)"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "NHS App"
        },
        {
          href: "#",
          text: "Find my NHS number"
        },
        {
          href: "#",
          text: "Your health records"
        },
        {
          href: "#",
          text: "About the NHS"
        },
        {
          href: "#",
          text: "Healthcare abroad"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "Other NHS websites"
        },
        {
          href: "#",
          text: "Profile editor login"
        }
      ]
    }
  ],
  meta: {
    html: "<p class="nhsuk-body-s">
  <svg class="nhsuk-u-static-margin-right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 17" aria-hidden="true" focusable="false" height="17" width="41">
    <path fill="currentColor" d="M35.77 12.4V.02l-4.3 2.8V16.8H41v-4.4Zm-10.38-.83a3.93 3.93 0 0 1-4.29.64 4.09 4.09 0 0 1-2.35-3.71 3.97 3.97 0 0 1 7.36-2.2l3.63-2.35A8.25 8.25 0 0 0 22.75.02c-3.1 0-5.8 1.74-7.22 4.3A8.3 8.3 0 0 0 8.3.02 8.4 8.4 0 0 0 0 8.5a8.4 8.4 0 0 0 8.3 8.48c3.1 0 5.8-1.75 7.22-4.32a8.17 8.17 0 0 0 12.7 2.2l1.64 1.93h.25V9.18h-6.79Zm-17.1 1.02A4.04 4.04 0 0 1 4.3 8.5c0-2.25 1.8-4.08 4-4.08s4 1.82 4 4.08c0 2.25-1.8 4.09-4 4.09"/>
  </svg>
  All content is available under the <a class="nhsuk-footer__list-item-link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated.
</p>",
    items: [
      {
        href: "#",
        text: "About us"
      },
      {
        href: "#",
        text: "Give us feedback"
      },
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Our policies"
      },
      {
        href: "#",
        text: "Cookies"
      }
    ]
  }
}) }}
```

---

## Header

[↑ Back to top](#table-of-contents)

**Macro name:** `header`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the header. |
| `logo` | object |  | Object containing options for the logo. |
| `logo.href` | string |  | The `href` of the link for the logo. If not set, and a `service.href` is set, or both are set to same value, then the logo and service name will be combined into a single link. |
| `logo.src` | string |  | The path of the logo image, if you are not using the default NHS logo. |
| `logo.alt` | string |  | The alt text for the logo. Defaults to `"NHS"`. |
| `logo.ariaLabel` | string |  | The `aria-label` for a linked logo. Defaults to `"NHS homepage"`. |
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
| `navigation.items.current` | boolean |  | Set to `true` if this links to the current page being shown. |
| `navigation.items.active` | boolean |  | Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page |
| `navigation.items.classes` | string |  | Classes to add to the list item containing the link. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the list item containing the link. |
| `navigation.ariaLabel` | string |  | The `aria-label` for the primary navigation. Defaults to `"Menu"`. |
| `navigation.toggleMenuText` | string |  | Text for the toggle menu button. Defaults to `"More"`. |
| `navigation.toggleMenuVisuallyHiddenText` | string |  | A visually hidden prefix used before the toggle menu button text. Defaults to `"Browse"`. |
| `navigation.classes` | string |  | Classes to add to the primary navigation. |
| `navigation.attributes` | object |  | HTML attributes (for example data attributes) to add to the primary navigation. |
| `search` | object |  | Object containing settings for a search box. |
| `search.action` | string |  | The search form `action` attribute. Defaults to `"https://www.nhs.uk/search"`. |
| `search.method` | string |  | The search form `method` attribute. Defaults to `"get"`. |
| `search.name` | string |  | The `name` attribute for the search field. Defaults to `"q"`. |
| `search.placeholder` | string |  | The placeholder text for the search field. Defaults to `"Search"`. |
| `search.visuallyHiddenLabel` | string |  | The label for the search field. Defaults to `"Search the NHS website"`. |
| `search.visuallyHiddenButton` | string |  | The label for the visually hidden button. Defaults to `"Search"`. |
| `search.classes` | string |  | Classes to add to the search element. |
| `search.attributes` | object |  | HTML attributes (for example data attributes) to add to the search element. |
| `account` | object |  | Object containing settings for the account section of the header. |
| `account.items` | array |  | Array of account items for use in the header. |
| `account.items.href` | string |  | The href of an account item in the header. |
| `account.items.text` | string | ✓ | If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` argument will be ignored. |
| `account.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` argument will be ignored. |
| `account.items.icon` | boolean |  | Whether to include the account icon for the account item. Defaults to `false`. |
| `account.items.action` | string |  | If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons. |
| `account.items.method` | string |  | The value to use for the `method` of the form if `action` is set. Defaults to `"post"`. |
| `account.items.classes` | string |  | Classes to add to the list item containing the account item. |
| `account.ariaLabel` | string |  | The `aria-label` for the account navigation. Defaults to `"Account"`. |
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
    href: "#"
  },
  service: {
    text: "Digital service manual",
    href: "#"
  },
  search: {
    placeholder: "Search",
    visuallyHiddenLabel: "Search the NHS digital service manual"
  },
  navigation: {
    items: [
      {
        text: "NHS service standard",
        href: "#"
      },
      {
        text: "Design system",
        href: "#"
      },
      {
        text: "Content guide",
        href: "#"
      },
      {
        text: "Accessibility",
        href: "#"
      },
      {
        text: "Community and contribution",
        href: "#"
      }
    ]
  }
}) }}
```

#### linked logo

```njk
{{ header({
  logo: {
    href: "#"
  }
}) }}
```

#### with account (logged in)

```njk
{{ header({
  account: {
    items: [
      {
        href: "#",
        text: "florence.nightingale@nhs.net",
        icon: true
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  }
}) }}
```

#### with account (logged out)

```njk
{{ header({
  account: {
    items: [
      {
        href: "#",
        text: "Log in"
      }
    ]
  }
}) }}
```

#### with navigation

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    items: [
      {
        href: "#",
        text: "Health A to Z"
      },
      {
        href: "#",
        text: "Live Well"
      },
      {
        href: "#",
        text: "Mental health"
      },
      {
        href: "#",
        text: "Care and support"
      },
      {
        href: "#",
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      }
    ]
  }
}) }}
```

#### with navigation (empty items)

```njk
{{ header({
  logo: {
    href: "#"
  },
  account: {
    items: [
      {
        href: "#",
        text: "Account",
        icon: true
      },
      false,
      false,
      false,
      {
        action: "#",
        text: "Log out"
      }
    ]
  },
  navigation: {
    items: [
      {
        text: "Home",
        href: "/"
      },
      false,
      false,
      false,
      {
        text: "Reports",
        href: "/"
      }
    ]
  }
}) }}
```

#### with navigation (justified)

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    classes: "nhsuk-header__navigation--justified",
    items: [
      {
        href: "#",
        text: "Health A to Z"
      },
      {
        href: "#",
        text: "Live Well"
      },
      {
        href: "#",
        text: "Mental health"
      },
      {
        href: "#",
        text: "Care and support"
      },
      {
        href: "#",
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      }
    ]
  }
}) }}
```

#### with navigation (overflow)

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    items: [
      {
        href: "#",
        text: "Health A to Z"
      },
      {
        href: "#",
        text: "Live Well"
      },
      {
        href: "#",
        text: "Mental health"
      },
      {
        href: "#",
        text: "Care and support"
      },
      {
        href: "#",
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      },
      {
        href: "#",
        text: "Another item #1"
      },
      {
        href: "#",
        text: "Another item #2"
      }
    ]
  }
}) }}
```

#### with navigation (overflow, white)

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    classes: "nhsuk-header__navigation--white",
    items: [
      {
        href: "#",
        text: "Health A to Z"
      },
      {
        href: "#",
        text: "Live Well"
      },
      {
        href: "#",
        text: "Mental health"
      },
      {
        href: "#",
        text: "Care and support"
      },
      {
        href: "#",
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      },
      {
        href: "#",
        text: "Another item #1"
      },
      {
        href: "#",
        text: "Another item #2"
      }
    ]
  }
}) }}
```

#### with search

```njk
{{ header({
  search: true
}) }}
```

#### with service name

```njk
{{ header({
  logo: {
    href: "#"
  },
  service: {
    text: "Find your NHS number"
  }
}) }}
```

#### with service name (linked)

```njk
{{ header({
  logo: {
    href: "#nhs"
  },
  service: {
    text: "Find your NHS number",
    href: "#"
  }
}) }}
```

#### with service name (linked with logo)

```njk
{{ header({
  service: {
    text: "Prototype kit",
    href: "#"
  }
}) }}
```

#### with service name (linked and long), search

```njk
{{ header({
  logo: {
    href: "#nhs"
  },
  service: {
    text: "This a really long service name to fully test wrapping",
    href: "#"
  },
  search: true
}) }}
```

#### with service name, search, account (logged in, complex), navigation

```njk
{{ header({
  service: {
    href: "#",
    text: "Manage patients"
  },
  search: {
    placeholder: "Name or NHS number",
    visuallyHiddenLabel: "Search patients by name or NHS number"
  },
  account: {
    items: [
      {
        href: "#",
        text: "Florence Nightingale",
        icon: true
      },
      {
        text: "Regional Manager, Hull and East Yorkshire Hospitals NHS Trust"
      },
      {
        href: "#",
        text: "Change role"
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  },
  navigation: {
    items: [
      {
        href: "#",
        text: "Home"
      },
      {
        href: "#",
        text: "Create user"
      },
      {
        href: "#",
        text: "Find user"
      }
    ]
  }
}) }}
```

#### with service name, search, account, navigation

```njk
{{ header({
  service: {
    text: "Search patient directory",
    href: "#"
  },
  search: {
    placeholder: "Name or NHS number",
    visuallyHiddenLabel: "Search patients by name or NHS number"
  },
  account: {
    items: [
      {
        text: "Florence Nightingale",
        icon: true
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  },
  navigation: {
    items: [
      {
        href: "#",
        text: "Home"
      },
      {
        href: "#",
        text: "Patient list"
      },
      {
        href: "#",
        text: "Advanced search"
      },
      {
        href: "#",
        text: "Help guides"
      }
    ]
  }
}) }}
```

#### with organisation name

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Business Services Authority"
  }
}) }}
```

#### with organisation name (and descriptor)

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace Anywhere",
    descriptor: "NHS Foundation Trust"
  }
}) }}
```

#### with organisation name (split with descriptor)

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace",
    split: "Anywhere",
    descriptor: "NHS Foundation Trust"
  }
}) }}
```

#### with organisation name (split with descriptor), search

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace",
    split: "Anywhere",
    descriptor: "NHS Foundation Trust"
  },
  search: {
    visuallyHiddenLabel: "Search the Anytown Anyplace Anywhere website"
  }
}) }}
```

#### white linked logo, ARIA label

```njk
{{ header({
  classes: "nhsuk-header--white",
  logo: {
    ariaLabel: "NHS white homepage",
    href: "#"
  }
}) }}
```

#### white linked logo, custom

```njk
{{ header({
  classes: "nhsuk-header--white",
  logo: {
    href: "#",
    src: "/nhsuk-frontend/assets/example-logo.svg",
    alt: "Great Ormond Street Hospital for Children, NHS Foundation Trust"
  }
}) }}
```

---

## Hero

[↑ Back to top](#table-of-contents)

**Macro name:** `hero`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the hero. |
| `heading` | string | ✓ | Text heading of the hero. |
| `headingClasses` | string |  | Optional additional classes to add to heading. Separate each class with a space. |
| `headingSize` | string |  | Size of the heading – `"xss"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `headingLevel` | integer |  | Optional heading level for the heading. Defaults to `1`. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire hero component in a `call` block. |
| `image` | object |  | Can be used to add an image to the hero component. |
| `image.src` | string | ✓ | The URL of the image in the hero. |
| `containerClasses` | string |  | Classes to add to the hero container, useful if you want to make the hero fixed width. |
| `classes` | string |  | Classes to add to the hero. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hero. |

### Examples

#### default

```njk
{{ hero({
  heading: "We're here for you",
  text: "Helping you take control of your health and wellbeing."
}) }}
```

#### with image

```njk
{{ hero({
  image: {
    src: "https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
  }
}) }}
```

#### with image, content

```njk
{{ hero({
  heading: "We're here for you",
  text: "Helping you take control of your health and wellbeing.",
  image: {
    src: "https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
  }
}) }}
```

#### with html content

```njk
{{ hero({
  heading: "This is a header for the product or service",
  headingSize: "l",
  headingClasses: "nhsuk-u-margin-top-5",
  html: "<p class="nhsuk-body-l">This is some more content which explains the product or service.</p>





<a class="nhsuk-button nhsuk-button--reverse"
  data-module="nhsuk-button"
 href="#" draggable="false" role="button">
  Sign up
</a>

"
}) }}
```

---

## Hint text

[↑ Back to top](#table-of-contents)

**Macro name:** `hint`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `id` | string |  | The `id` attribute to add to the hint. |
| `classes` | string |  | Classes to add to the hint. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hint. |

### Examples

#### default

```njk
{{ hint({
  text: "Do not include personal information like your name, date of birth or NHS number"
}) }}
```

---

## Images

[↑ Back to top](#table-of-contents)

**Macro name:** `image`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the image. |
| `src` | string | ✓ | The source location of the image. |
| `alt` | string | ✓ | The alt text of the image. |
| `caption` | object |  | Optional caption for the image. |
| `caption.text` | string | ✓ | Text to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.html` | string | ✓ | HTML to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.classes` | string |  | Classes to add to the figcaption element. |
| `sizes` | string |  | A list of screen sizes for the browser to load the correct image from the srcset images. |
| `srcset` | string |  | A list of image source URLs and their respective sizes. Separate each image with a comma. |
| `classes` | string |  | Classes to add to the image container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the image container. |

### Examples

#### default

```njk
{{ image({
  src: "https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg",
  sizes: "(max-width: 768px) 100vw, 66vw",
  srcset: "https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
  caption: {
    text: "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
  }
}) }}
```

#### without caption

```njk
{{ image({
  src: "https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
}) }}
```

---

## Input

[↑ Back to top](#table-of-contents)

**Macro name:** `input`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `type` | string |  | Type of input control to render, for example, an email input control. Defaults to `"text"`. |
| `inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the text input component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to a text input component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
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
| `pattern` | string |  | Attribute to provide a regular expression pattern, used to match allowed character combinations for the input value. |
| `placeholder` | string |  | Attribute to provide placeholder text for the input. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the input. |
| `autocapitalize` | string |  | Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object |  | If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |

### Examples

#### default

```njk
{{ input({
  label: {
    text: "What is your full name?",
    size: "l",
    isPageHeading: true
  },
  name: "example"
}) }}
```

#### with hint

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    html: "This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App"
  },
  id: "with-hint",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with button

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    size: "l",
    isPageHeading: true
  },
  id: "with-button",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false,
  formGroup: {
    afterInput: {
      html: "




<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small"
  data-module="nhsuk-button"
 type="submit">
  Search
</button>

"
    }
  }
}) }}
```

#### with button and error message

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    size: "l",
    isPageHeading: true
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-button-error-message",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false,
  formGroup: {
    afterInput: {
      html: "




<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small"
  data-module="nhsuk-button"
 type="submit">
  Search
</button>

"
    }
  }
}) }}
```

#### with error message

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    size: "l",
    isPageHeading: true
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-error-message",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with hint and error

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    html: "This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-hint-error",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### width

```njk
{{ input({
  name: "example",
  id: "input-width"
}) }}
```

#### label

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    isPageHeading: true
  },
  id: "custom-size",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### without page heading

```njk
{{ input({
  label: {
    text: "What is your NHS number?"
  },
  id: "without-heading",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with code input styling

```njk
{{ input({
  label: {
    text: "What is your NHS number?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    html: "This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App"
  },
  id: "with-code-input-styling",
  name: "example",
  classes: "nhsuk-input--width-10 nhsuk-input--code",
  value: "999 123 4567",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with prefix

```njk
{{ input({
  label: {
    text: "Cost in pounds",
    isPageHeading: true
  },
  id: "with-prefix",
  name: "example",
  prefix: {
    text: "£"
  },
  classes: "nhsuk-input--width-5"
}) }}
```

#### with prefix HTML

```njk
{{ input({
  label: {
    text: "Cost in pounds",
    isPageHeading: true
  },
  id: "with-prefix",
  name: "example",
  prefix: {
    html: "<span>£</span>"
  },
  classes: "nhsuk-input--width-5"
}) }}
```

#### with deprecated prefix string parameter

```njk
{{ input({
  label: {
    text: "Cost in pounds",
    isPageHeading: true
  },
  id: "with-prefix",
  name: "example",
  prefix: "£",
  classes: "nhsuk-input--width-5"
}) }}
```

#### with suffix

```njk
{{ input({
  label: {
    text: "Weight in kilograms",
    isPageHeading: true
  },
  id: "with-suffix",
  name: "example",
  suffix: {
    text: "kg"
  },
  classes: "nhsuk-input--width-5"
}) }}
```

#### with suffix HTML

```njk
{{ input({
  label: {
    text: "Weight in kilograms",
    isPageHeading: true
  },
  id: "with-suffix",
  name: "example",
  suffix: {
    html: "<span>kg</span>"
  },
  classes: "nhsuk-input--width-5"
}) }}
```

#### with deprecated suffix string parameter

```njk
{{ input({
  label: {
    text: "Weight in kilograms",
    isPageHeading: true
  },
  id: "with-suffix",
  name: "example",
  suffix: "kg",
  classes: "nhsuk-input--width-5"
}) }}
```

#### with prefix and suffix

```njk
{{ input({
  label: {
    text: "Cost per item, in pounds",
    isPageHeading: true
  },
  id: "with-prefix-suffix",
  name: "example",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  classes: "nhsuk-input--width-5"
}) }}
```

#### with prefix and suffix and error

```njk
{{ input({
  label: {
    text: "Cost per item, in pounds",
    isPageHeading: true
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
  classes: "nhsuk-input--width-5"
}) }}
```

#### with autocomplete attribute

```njk
{{ input({
  label: {
    text: "Enter a full postcode in England",
    isPageHeading: true
  },
  hint: {
    text: "For example, LS1 1AB"
  },
  id: "with-autocomplete-attribute",
  name: "example",
  autocomplete: "postal-code"
}) }}
```

---

## Inset text

[↑ Back to top](#table-of-contents)

**Macro name:** `insetText`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the inset text component. |
| `text` | string | ✓ | Text content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | HTML content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `classes` | string |  | Classes to add to the inset text. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the inset text. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the inset text. Defaults to `"Information"`. |

### Examples

#### default

```njk
{% call insetText({}) %}
  <p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>
{% endcall %}
```

---

## Label

[↑ Back to top](#table-of-contents)

**Macro name:** `label`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the label. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire label component in a `call` block. |
| `for` | string |  | The value of the `for` attribute, the ID of the input the label is associated with. |
| `isPageHeading` | boolean |  | Whether the label also acts as the heading for the page. |
| `size` | string |  | Size of the label – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `classes` | string |  | Classes to add to the label tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |

### Examples

#### default

```njk
{{ label({
  text: "What is your full name?",
  size: "l",
  isPageHeading: true
}) }}
```

#### text

```njk
{{ label({
  text: "What is your full name?",
  isPageHeading: true
}) }}
```

#### size class

```njk
{{ label({
  text: "What is your full name?",
  classes: "nhsuk-label--l",
  isPageHeading: true
}) }}
```

#### size class overriding size param

```njk
{{ label({
  text: "What is your full name?",
  classes: "nhsuk-label--l",
  size: "s",
  isPageHeading: true
}) }}
```

#### without page heading

```njk
{{ label({
  text: "What is your full name?"
}) }}
```

---

## Legend

[↑ Back to top](#table-of-contents)

**Macro name:** `legend`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire legend component in a `call` block. |
| `classes` | string |  | Classes to add to the legend. |
| `isPageHeading` | boolean |  | Whether the legend also acts as the heading for the page. |
| `size` | string |  | Size of the legend – `"s"`, `"m"`, `"l"` or `"xl"`. |

---

## Notification banner

[↑ Back to top](#table-of-contents)

**Macro name:** `notificationBanner`

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
{{ notificationBanner({
  text: "The patient record was updated."
}) }}
```

#### paragraph as html heading

```njk
{{ notificationBanner({
  html: "<p class="nhsuk-notification-banner__heading">You have 9 days to send a response.</p>"
}) }}
```

#### with text as html

```njk
{{ notificationBanner({
  html: "<h3 class="nhsuk-notification-banner__heading">
  The patient record was updated
</h3>
<p class="nhsuk-body">
  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
</p>"
}) }}
```

#### with type as success

```njk
{{ notificationBanner({
  type: "success",
  text: "Email sent to example@email.com"
}) }}
```

#### success with custom html

```njk
{{ notificationBanner({
  type: "success",
  html: "<h3 class="nhsuk-notification-banner__heading">
  4 files uploaded
</h3>
<ul class="nhsuk-u-margin-0 nhsuk-list">
  <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
  <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
</ul>"
}) }}
```

#### with a list

```njk
{{ notificationBanner({
  html: "<h3 class="nhsuk-notification-banner__heading">4 files uploaded</h3>
<ul class="nhsuk-list nhsuk-list--bullet nhsuk-u-margin-bottom-0">
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v2.pdf</a></li>
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>
  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>
</ul>"
}) }}
```

#### with long heading

```njk
{{ notificationBanner({
  text: "The patient record was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters."
}) }}
```

#### with lots of content

```njk
{{ notificationBanner({
  html: "<h3 class="nhsuk-notification-banner__heading">
  Check if you need to apply the reverse charge to this application
</h3>
<p class="nhsuk-body">
  You will have to apply the <a href="#" class="nhsuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:
</p>
<ul class="nhsuk-list nhsuk-list--bullet">
  <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>
  <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>
</ul>"
}) }}
```

#### auto-focus disabled, with type as success

```njk
{{ notificationBanner({
  type: "success",
  disableAutoFocus: true,
  text: "Email sent to example@email.com"
}) }}
```

#### auto-focus explicitly enabled, with type as success

```njk
{{ notificationBanner({
  type: "success",
  disableAutoFocus: false,
  text: "Email sent to example@email.com"
}) }}
```

#### role=alert overridden to role=region, with type as success

```njk
{{ notificationBanner({
  type: "success",
  role: "region",
  text: "Email sent to example@email.com"
}) }}
```

#### custom tabindex

```njk
{{ notificationBanner({
  type: "success",
  text: "Email sent to example@email.com",
  attributes: {
    tabindex: 2
  }
}) }}
```

---

## Pagination

[↑ Back to top](#table-of-contents)

**Macro name:** `pagination`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the pagination container. |
| `items` | array |  | The items within the pagination component. |
| `items.number` | string |  | The pagination item text – usually a page number.  Required unless the item is an ellipsis. |
| `items.visuallyHiddenText` | string |  | The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". |
| `items.href` | string |  | The link's URL. Required unless the item is an ellipsis. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.ellipsis` | boolean |  | Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored. |
| `items.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `previous` | object |  | A link to the previous page, if there is a previous page. |
| `previous.text` | string |  | The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.html` | string |  | The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.labelText` | string |  | The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. |
| `previous.href` | string | ✓ | The previous page's URL. |
| `previous.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `next` | object |  | A link to the next page, if there is a next page. |
| `next.text` | string |  | The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.html` | string |  | The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.labelText` | string |  | The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. |
| `next.href` | string | ✓ | The next page's URL. |
| `next.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `landmarkLabel` | string |  | The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`. |
| `classes` | string |  | The classes you want to add to the pagination `nav` parent. |
| `attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent. |

### Examples

#### default

```njk
{{ pagination({
  previous: {
    labelText: "Treatments",
    href: "/section/treatments"
  },
  next: {
    labelText: "Symptoms",
    href: "/section/symptoms"
  }
}) }}
```

#### with deprecated parameters

```njk
{{ pagination({
  previousUrl: "/section/treatments",
  previousPage: "Treatments",
  nextUrl: "/section/symptoms",
  nextPage: "Symptoms"
}) }}
```

#### with only previous

```njk
{{ pagination({
  previous: {
    labelText: "Treatments",
    href: "/section/treatments"
  }
}) }}
```

#### with only next

```njk
{{ pagination({
  next: {
    labelText: "Symptoms",
    href: "/section/symptoms"
  }
}) }}
```

#### with translations

```njk
{{ pagination({
  previous: {
    text: "Blaenorol",
    labelText: "Driniaethau",
    href: "/section/driniaethau"
  },
  next: {
    text: "Nesaf",
    labelText: "Symptomau",
    href: "/section/symptomau"
  }
}) }}
```

#### numbered

```njk
{{ pagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      href: "#",
      current: true
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

#### numbered with many pages

```njk
{{ pagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      ellipsis: true
    },
    {
      number: 8,
      href: "#"
    },
    {
      number: 9,
      href: "#"
    },
    {
      number: 10,
      href: "#",
      current: true
    },
    {
      number: 11,
      href: "#"
    },
    {
      number: 12,
      href: "#"
    },
    {
      ellipsis: true
    },
    {
      number: 40,
      href: "#"
    }
  ]
}) }}
```

#### numbered with many pages (empty items)

```njk
{{ pagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      ellipsis: true
    },
    false,
    {
      number: 9,
      href: "#"
    },
    {
      number: 10,
      href: "#",
      current: true
    },
    {
      number: 11,
      href: "#"
    },
    false,
    {
      ellipsis: true
    },
    {
      number: 40,
      href: "#"
    }
  ]
}) }}
```

#### numbered first page

```njk
{{ pagination({
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#",
      current: true
    },
    {
      number: 2,
      href: "#"
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

#### numbered last page

```njk
{{ pagination({
  previous: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      href: "#"
    },
    {
      number: 3,
      href: "#",
      current: true
    }
  ]
}) }}
```

#### numbered with translations

```njk
{{ pagination({
  previous: {
    text: "Blaenorol",
    href: "#"
  },
  next: {
    text: "Nesaf",
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      href: "#",
      current: true
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

---

## Panel

[↑ Back to top](#table-of-contents)

**Macro name:** `panel`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the panel. |
| `titleText` | string | ✓ | If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleHtml` | string |  | If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleSize` | string |  | Size of the title – `"m"`, `"l"` or `"xl"`. |
| `titleClasses` | string |  | Optional additional classes to add to the heading tag. Separate each class with a space. |
| `headingLevel` | integer |  | Heading level, from `1` to `6`. Defaults to `1`. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. Text to use within the panel content. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block. |
| `classes` | string |  | Optional additional classes to add to the hint `div` tag. Separate each class with a space. |
| `attributes` | object |  | Any extra HTML attributes (for example data attributes) to add to the input component. |

### Examples

#### default

```njk
{{ panel({
  titleText: "Booking complete",
  text: "We have sent you a confirmation email"
}) }}
```

#### interruption

```njk
{{ panel({
  titleText: "Jodie Brown had a COVID-19 vaccine less than 3 months ago",
  titleSize: "l",
  classes: "nhsuk-panel--interruption",
  html: "<p>They had a COVID-19 vaccine on 25 September 2025.</p>
<p>For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.</p>
<div class="nhsuk-button-group">
  




<a class="nhsuk-button nhsuk-button--reverse"
  data-module="nhsuk-button"
 href="#" draggable="false" role="button">
  Continue anyway
</a>


  <a href="#">Cancel</a>
</div>"
}) }}
```

#### interruption for confirmation to cancel

```njk
{{ panel({
  titleText: "Confirm you want to cancel your hospital appointment",
  titleSize: "l",
  classes: "nhsuk-panel--interruption",
  html: "<p>You will be able to reschedule your appointment for another time, but this may delay your treatment.</p>
<p>Cancelling your appointment cannot be undone.</p>
<div class="nhsuk-button-group">
  




<a class="nhsuk-button nhsuk-button--reverse"
  data-module="nhsuk-button"
 href="#" draggable="false" role="button">
  Cancel appointment
</a>


  <a href="#">Change my weight</a>
</div>"
}) }}
```

#### interruption for confirmation to continue

```njk
{{ panel({
  titleText: "Is your weight correct?",
  titleSize: "l",
  classes: "nhsuk-panel--interruption",
  html: "<p>You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.</p>
<div class="nhsuk-button-group">
  




<a class="nhsuk-button nhsuk-button--reverse"
  data-module="nhsuk-button"
 href="#" draggable="false" role="button">
  Yes, this is correct
</a>


  <a href="#">Change my weight</a>
</div>"
}) }}
```

#### title

```njk
{{ panel({
  titleText: "Booking complete",
  text: "We have sent you a confirmation email"
}) }}
```

#### with title classes and heading level

```njk
{{ panel({
  titleText: "Booking complete",
  titleClasses: "nhsuk-panel__title--l",
  text: "We have sent you a confirmation email",
  headingLevel: 2
}) }}
```

---

## Password input

[↑ Back to top](#table-of-contents)

**Macro name:** `passwordInput`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | Options for the label component. *(accepts nested component params)* |
| `hint` | object |  | Options for the hint component. *(accepts nested component params)* |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
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
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |
| `showPasswordText` | string |  | Button text when the password is hidden. Defaults to `"Show"`. |
| `hidePasswordText` | string |  | Button text when the password is visible. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string |  | Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string |  | Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`. |
| `button` | object |  | Optional object allowing customisation of the toggle button. |
| `button.classes` | string |  | Classes to add to the button. |

### Examples

#### default

```njk
{{ passwordInput({
  label: {
    text: "Password",
    size: "l",
    isPageHeading: true
  },
  name: "example"
}) }}
```

#### with hint

```njk
{{ passwordInput({
  label: {
    text: "Password",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it"
  },
  id: "with-hint-text",
  name: "example"
}) }}
```

#### with error message

```njk
{{ passwordInput({
  label: {
    text: "Password",
    size: "l",
    isPageHeading: true
  },
  errorMessage: {
    text: "Enter a password"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

#### with hint and error

```njk
{{ passwordInput({
  label: {
    text: "Password",
    size: "l",
    isPageHeading: true
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

#### without page heading

```njk
{{ passwordInput({
  label: {
    text: "Password"
  },
  id: "without-heading",
  name: "example"
}) }}
```

#### with width class

```njk
{{ passwordInput({
  label: {
    text: "Password",
    size: "l",
    isPageHeading: true
  },
  id: "width-class",
  name: "example",
  classes: "nhsuk-input--width-10"
}) }}
```

#### with autocomplete attribute

```njk
{{ passwordInput({
  label: {
    text: "Password",
    size: "l",
    isPageHeading: true
  },
  id: "new-password",
  name: "example",
  autocomplete: "new-password"
}) }}
```

#### with translations

```njk
{{ passwordInput({
  label: {
    text: "Cyfrinair",
    size: "l",
    isPageHeading: true
  },
  id: "password-translated",
  name: "example",
  showPasswordText: "Datguddia",
  hidePasswordText: "Cuddio",
  showPasswordAriaLabelText: "Datgelu cyfrinair",
  hidePasswordAriaLabelText: "Cuddio cyfrinair",
  passwordShownAnnouncementText: "Mae eich cyfrinair yn weladwy.",
  passwordHiddenAnnouncementText: "Mae eich cyfrinair wedi'i guddio."
}) }}
```

---

## Radios

[↑ Back to top](#table-of-contents)

**Macro name:** `radios`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the radios component. |
| `fieldset` | object |  | The fieldset used by the radios component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to the radios component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
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
| `items.label` | object |  | Subset of options for the label used by each radio item within the radios component. *(accepts nested component params)* |
| `items.label.classes` | string |  | Classes to add to the label tag. |
| `items.label.attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |
| `items.hint` | object |  | Can be used to add a hint to each radio item within the radios component. *(accepts nested component params)* |
| `items.divider` | string |  | Divider text to separate radio items, for example the text `"or"`. |
| `items.checked` | boolean |  | Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the radio is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the radio is checked. |
| `items.disabled` | boolean |  | If `true`, radio will be disabled. |
| `items.classes` | string |  | Classes to add to the radio input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the radio input tag. |
| `value` | string |  | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string |  | Classes to add to the radios container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the radios container. |

### Examples

#### default

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Are you 18 or over?"
    }
  },
  name: "example",
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

#### with hint

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Do you know your NHS number?"
    }
  },
  hint: {
    html: "This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App"
  },
  idPrefix: "with-hint",
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
      value: "not sure",
      text: "I'm not sure"
    }
  ]
}) }}
```

#### inline

```njk
{{ radios({
  classes: "nhsuk-radios--inline",
  fieldset: {
    legend: {
      text: "Are you 18 or over?"
    }
  },
  idPrefix: "inline",
  name: "example",
  value: "no",
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

#### legend

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Are you 18 or over?"
    }
  },
  idPrefix: "custom-size",
  name: "example",
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

#### without page heading

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Are you 18 or over?",
      isPageHeading: false
    }
  },
  idPrefix: "without-heading",
  name: "example",
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

#### with pre-checked value

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
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
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
      }
    }
  ]
}) }}
```

#### with divider

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to sign in?"
    }
  },
  idPrefix: "with-divider",
  name: "example",
  items: [
    {
      value: "nhsuk-login",
      text: "Use NHS login"
    },
    {
      value: "government-verify",
      text: "Use GOV.UK Verify"
    },
    {
      divider: "or"
    },
    {
      value: "create-account",
      text: "Create an account"
    }
  ]
}) }}
```

#### with hints on items

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Do you have a mobile phone with signal?"
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

#### without fieldset

```njk
{{ radios({
  fieldset: null,
  id: "without-fieldset",
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

#### with disabled item

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Have you changed your name?"
    }
  },
  hint: {
    text: "This includes changing your last name or spelling your name differently"
  },
  idPrefix: "with-disabled-item",
  name: "example",
  items: [
    {
      value: "yes",
      text: "Yes",
      disabled: true
    },
    {
      value: "no",
      text: "No",
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
      text: "Have you changed your name?"
    }
  },
  errorMessage: {
    text: "Select yes if you have changed your name"
  },
  idPrefix: "with-error-message",
  name: "example",
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

#### with hint and error

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Have you changed your name?"
    }
  },
  hint: {
    text: "This includes changing your last name or spelling your name differently"
  },
  errorMessage: {
    text: "Select yes if you have changed your name"
  },
  idPrefix: "with-hint-error",
  name: "example",
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

#### with long text

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "Venenatis Condimentum"
    }
  },
  idPrefix: "with-long-text",
  name: "example",
  items: [
    {
      value: "nullam",
      text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
at eget metus."
    },
    {
      value: "aenean",
      text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
venenatis vestibulum. Cras mattis consectetur purus sit amet
fermentum."
    },
    {
      value: "fusce",
      text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
malesuada magna mollis euismod. Praesent commodo cursus magna, vel
scelerisque nisl consectetur et. Etiam porta sem malesuada magna
mollis euismod. Etiam porta sem malesuada magna mollis euismod.
Donec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}) }}
```

#### with conditional content

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
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
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
      }
    }
  ]
}) }}
```

#### with conditional content, special characters

```njk
{{ radios({
  fieldset: {
    legend: {
      text: "How do you want to be contacted about this?"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  idPrefix: "user.profile[contact-prefs]",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
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
      text: "How do you want to be contacted about this?"
    }
  },
  hint: {
    text: "Select 1 option"
  },
  errorMessage: {
    text: "Select how you prefer to be contacted"
  },
  idPrefix: "conditional",
  name: "example",
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
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
      text: "How do you want to be contacted about this?"
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
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="email">
    Email address
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text" spellcheck="false"></div> 
"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="phone">
    Phone number
  </label>  <span class="nhsuk-error-message" id="phone-error">
  <span class="nhsuk-u-visually-hidden">Error:</span> Enter your phone number
  </span>    <input class="nhsuk-input nhsuk-u-width-two-thirds nhsuk-input--error" id="phone" name="phone" type="tel" aria-describedby="phone-error"></div> 
"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="mobile">
    Mobile phone number
  </label>    <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel"></div> 
"
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
      text: "How do you want to be contacted about this?"
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
        html: "<div class="nhsuk-form-group">

<fieldset class="nhsuk-fieldset" aria-describedby="example-inner-hint">  <legend class="nhsuk-fieldset__legend">    How do you want to be contacted about this?
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
"
      }
    }
  ]
}) }}
```

---

## Select

[↑ Back to top](#table-of-contents)

**Macro name:** `select`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | ID for the select box. Defaults to the value of `name`. |
| `name` | string | ✓ | The `name` attribute for the select. |
| `items` | array | ✓ | The items within the select component. |
| `items.value` | string |  | The `value` attribute for the option. If this is omitted, the value is taken from the text content of the option element. |
| `items.text` | string | ✓ | Text for the option item. |
| `items.divider` | boolean |  | Divider line used to separate option items. |
| `items.selected` | boolean |  | Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option. |
| `items.disabled` | boolean |  | Sets the option item as disabled. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the option. |
| `value` | string |  | The value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item. |
| `disabled` | boolean |  | If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the select component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to the select component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
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
| `inputWrapper` | object |  | If any of `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the select and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the select. |

### Examples

#### default

```njk
{{ select({
  label: {
    text: "Sort by",
    isPageHeading: true
  },
  name: "example",
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated"
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

#### with divider

```njk
{{ select({
  label: {
    text: "Sort by",
    isPageHeading: true
  },
  name: "example",
  items: [
    {
      value: "first-name-ascending",
      text: "First name (A to Z)"
    },
    {
      value: "first-name-descending",
      text: "First name (Z to A)"
    },
    {
      divider: true
    },
    {
      value: "last-name-ascending",
      text: "Last name (A to Z)"
    },
    {
      value: "last-name-descending",
      text: "Last name (Z to A)"
    }
  ]
}) }}
```

#### with disabled item

```njk
{{ select({
  label: {
    text: "Sort by",
    isPageHeading: true
  },
  id: "with-disabled-item",
  name: "example",
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated"
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments",
      disabled: true
    }
  ]
}) }}
```

#### with hint

```njk
{{ select({
  label: {
    text: "Choose location",
    isPageHeading: true
  },
  hint: {
    text: "This can be different to where you went before"
  },
  id: "with-hint",
  name: "example",
  items: [
    {
      value: "choose",
      text: "Choose location"
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

#### with button

```njk
{{ select({
  label: {
    text: "Choose location",
    isPageHeading: true
  },
  hint: {
    text: "This can be different to where you went before"
  },
  id: "with-hint",
  name: "example",
  items: [
    {
      value: "choose",
      text: "Choose location"
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ],
  formGroup: {
    afterInput: {
      html: "




<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small"
  data-module="nhsuk-button"
 type="submit">
  Save
</button>

"
    }
  }
}) }}
```

#### with button and error message

```njk
{{ select({
  label: {
    text: "Choose location",
    isPageHeading: true
  },
  hint: {
    text: "This can be different to where you went before"
  },
  errorMessage: {
    text: "Select a location"
  },
  id: "with-hint",
  name: "example",
  items: [
    {
      value: "choose",
      text: "Choose location"
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ],
  formGroup: {
    afterInput: {
      html: "




<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small"
  data-module="nhsuk-button"
 type="submit">
  Save
</button>

"
    }
  }
}) }}
```

#### label

```njk
{{ select({
  label: {
    text: "Sort by",
    isPageHeading: true
  },
  id: "custom-size",
  name: "example",
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated"
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

#### without page heading

```njk
{{ select({
  label: {
    text: "Sort by"
  },
  id: "without-heading",
  name: "example",
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated"
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

#### with error message

```njk
{{ select({
  label: {
    text: "Choose location",
    isPageHeading: true
  },
  errorMessage: {
    text: "Select a location"
  },
  id: "with-error-message",
  name: "example",
  items: [
    {
      value: "choose",
      text: "Choose location"
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

#### with hint and error

```njk
{{ select({
  label: {
    text: "Choose location",
    isPageHeading: true
  },
  hint: {
    text: "This can be different to where you went before"
  },
  errorMessage: {
    text: "Select a location"
  },
  id: "with-hint-error",
  name: "example",
  items: [
    {
      value: "choose",
      text: "Choose location"
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

#### with selected value

```njk
{{ select({
  label: {
    text: "Sort by",
    isPageHeading: true
  },
  id: "with-value",
  name: "example",
  value: "updated",
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated"
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

---

## Skip link

[↑ Back to top](#table-of-contents)

**Macro name:** `skipLink`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the skip link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`. |
| `href` | string |  | The value of the skip link's `href` attribute. Defaults to `"#maincontent"`. |
| `classes` | string |  | Classes to add to the skip link. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the skip link. |

### Examples

#### default

```njk
{{ skipLink({
  href: "#maincontent",
  text: "Skip to main content"
}) }}
```

---

## Summary list

[↑ Back to top](#table-of-contents)

**Macro name:** `summaryList`

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
| `rows.actions.items.classes` | string |  | Classes to add to the action item. |
| `rows.actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `rows.actions.classes` | string |  | Classes to add to the actions wrapper. |
| `card` | object |  | Can be used to wrap a card around the summary list component. If any of these options are present, a card will wrap around the summary list. *(accepts nested component params)* |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |

### Examples

#### default

```njk
{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact information"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

#### with multiple actions

```njk
{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact information"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      },
      actions: {
        items: [
          {
            href: "#/add",
            text: "Add",
            visuallyHiddenText: "new contact details"
          },
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    },
    {
      key: {
        text: "Medicines"
      },
      value: {
        html: "<p>Isotretinoin capsules (Roaccutane)</p>
<p>Isotretinoin gel (Isotrex)</p>
<p>Pepto-Bismol (bismuth subsalicylate)</p>"
      },
      actions: {
        items: [
          {
            href: "#/add",
            text: "Add",
            visuallyHiddenText: "new medicine"
          },
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "medicines"
          }
        ]
      }
    }
  ]
}) }}
```

#### with multiple actions (empty items)

```njk
{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      },
      actions: {
        items: [
          false,
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      },
      actions: {
        items: [
          false,
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact information"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      },
      actions: {
        items: [
          {
            href: "#/add",
            text: "Add",
            visuallyHiddenText: "new contact details"
          },
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    },
    {
      key: {
        text: "Medicines"
      },
      value: {
        html: "<p>Isotretinoin capsules (Roaccutane)</p>
<p>Isotretinoin gel (Isotrex)</p>
<p>Pepto-Bismol (bismuth subsalicylate)</p>"
      },
      actions: {
        items: [
          {
            href: "#/add",
            text: "Add",
            visuallyHiddenText: "new medicine"
          },
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "medicines"
          }
        ]
      }
    }
  ]
}) }}
```

#### without actions

```njk
{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### without border

```njk
{{ summaryList({
  classes: "nhsuk-summary-list--no-border",
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### without row border

```njk
{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### as a card

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    headingSize: "m"
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card with multiple actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    headingSize: "l",
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>
Leeds<br>
LS2 5ZN"
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact information"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>
<p>karen.francis@example.com</p>"
      },
      actions: {
        items: [
          {
            href: "#/add",
            text: "Add",
            visuallyHiddenText: "new contact details"
          },
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Medicines"
      },
      value: {
        html: "<p>Isotretinoin capsules (Roaccutane)</p>
<p>Isotretinoin gel (Isotrex)</p>
<p>Pepto-Bismol (bismuth subsalicylate)</p>"
      },
      actions: {
        items: [
          {
            href: "#/add",
            text: "Add",
            visuallyHiddenText: "new medicine"
          },
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "medicines"
          }
        ]
      }
    }
  ]
}) }}
```

#### as a card with actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    headingSize: "m",
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card (secondary) with actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    headingSize: "m",
    secondary: true,
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card (feature) with actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    headingSize: "m",
    feature: true,
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card (clickable) without actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    headingSize: "m",
    href: "#/card-clickable",
    clickable: true
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card (type non-urgent) with actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    type: "non-urgent",
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card (type urgent) with actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    type: "urgent",
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### as a card (type emergency) with actions

```njk
{{ summaryList({
  card: {
    heading: "Regional Manager",
    type: "emergency",
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        },
        {
          text: "Withdraw",
          href: "#/withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      classes: "nhsuk-summary-list__row--no-border",
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

---

## Tables

[↑ Back to top](#table-of-contents)

**Macro name:** `table`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the table. |
| `rows` | array | ✓ | Array of table rows and cells. |
| `rows.text` | string | ✓ | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` argument will be ignored. |
| `rows.html` | string | ✓ | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` argument will be ignored. |
| `rows.header` | string |  | Header text for cells in responsive table rows only. |
| `rows.format` | string |  | Specify format of a cell. Currently we only use `"numeric"`. |
| `rows.colspan` | integer |  | Specify how many columns a cell extends. |
| `rows.rowspan` | integer |  | Specify how many rows a cell extends. |
| `head` | array |  | Array of table head cells. |
| `head.text` | string |  | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` argument will be ignored. |
| `head.html` | string |  | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` argument will be ignored. |
| `head.format` | string |  | Specify format of a cell. Currently we only use `"numeric"`. |
| `head.colspan` | integer |  | Specify how many columns a cell extends. |
| `head.rowspan` | integer |  | Specify how many rows a cell extends. |
| `caption` | string |  | Caption text. |
| `captionClasses` | string |  | Classes for caption text size. Classes to add to the table caption, for example `"nhsuk-table__caption--l"`. |
| `captionSize` | string |  | Size of the caption – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `firstCellIsHeader` | boolean |  | If set to `true`, first cell in table row will be a TH instead of a TD. |
| `responsive` | boolean |  | If set to `true`, responsive table classes will be applied. |
| `card` | object |  | Can be used to wrap a card around the table component. If any of these options are present, a card will wrap around the table. *(accepts nested component params)* |
| `classes` | string |  | Classes to add to the table container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the table container. |

### Examples

#### default

```njk
{{ table({
  caption: "Impetigo can look similar to other skin conditions",
  captionSize: "m",
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

#### with empty items

```njk
{{ table({
  caption: "Vaccinations given",
  captionSize: "m",
  head: [
    {
      text: "Date"
    },
    {
      text: "Vaccine"
    },
    false
  ],
  rows: [
    [
      {
        text: "10 July 2024"
      },
      {
        text: "RSV"
      },
      false
    ],
    false
  ]
}) }}
```

#### with missing data

```njk
{{ table({
  caption: "Vaccinations given",
  captionSize: "m",
  head: [
    {
      text: "Date"
    },
    {
      text: "Vaccine"
    },
    {
      text: "Product"
    }
  ],
  rows: [
    [
      {
        text: "10 July 2024"
      },
      {
        text: "RSV"
      },
      {
        text: "Abrysvo"
      }
    ],
    [
      {
        text: "6 September 2023"
      },
      {
        text: "Flu"
      },
      {
        text: "No data",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ]
  ]
}) }}
```

#### with numeric data

```njk
{{ table({
  caption: "Prescription prepayment certificate (PPC) charges",
  captionSize: "m",
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month"
      },
      {
        text: "£31.25",
        format: "numeric"
      },
      {
        text: "£32.05",
        format: "numeric"
      }
    ],
    [
      {
        text: "12-month"
      },
      {
        text: "£111.60",
        format: "numeric"
      },
      {
        text: "£114.50",
        format: "numeric"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30",
        format: "numeric"
      },
      {
        text: "£19.80",
        format: "numeric"
      }
    ]
  ]
}) }}
```

#### with responsive layout

```njk
{{ table({
  caption: "Ibuprofen syrup dosages for children",
  captionSize: "m",
  responsive: true,
  head: [
    {
      text: "Age",
      classes: "nhsuk-u-width-one-half"
    },
    {
      text: "How much?",
      classes: "nhsuk-u-width-one-quarter"
    },
    {
      text: "How often?",
      classes: "nhsuk-u-width-one-quarter"
    }
  ],
  rows: [
    [
      {
        header: "Age",
        text: "3 to 5 months (weighing more than 5kg)"
      },
      {
        header: "How much?",
        text: "2.5ml"
      },
      {
        header: "How often?",
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        header: "Age",
        text: "6 to 11 months"
      },
      {
        header: "How much?",
        text: "2.5ml"
      },
      {
        header: "How often?",
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        header: "Age",
        text: "1 to 3 years"
      },
      {
        header: "How much?",
        text: "5ml"
      },
      {
        header: "How often?",
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        header: "Age",
        text: "4 to 6 years"
      },
      {
        header: "How much?",
        text: "7.5ml"
      },
      {
        header: "How often?",
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        header: "Age",
        text: "7 to 9 years"
      },
      {
        header: "How much?",
        text: "10ml"
      },
      {
        header: "How often?",
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        header: "Age",
        text: "10 to 11 years"
      },
      {
        header: "How much?",
        text: "15ml"
      },
      {
        header: "How often?",
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        header: "Age",
        text: "12 to 17 years"
      },
      {
        header: "How much?",
        text: "15ml to 20ml"
      },
      {
        header: "How often?",
        text: "Max 3 to 4 times in 24 hours"
      }
    ]
  ]
}) }}
```

#### with responsive layout and custom HTML

```njk
{{ table({
  caption: "Nunjucks macro options",
  firstCellIsHeader: true,
  responsive: true,
  head: [
    {
      text: "Name"
    },
    {
      text: "Type"
    },
    {
      text: "Description"
    }
  ],
  rows: [
    [
      {
        header: "Name",
        text: "id"
      },
      {
        header: "Type",
        text: "string"
      },
      {
        header: "Description",
        text: "The ID of the table."
      }
    ],
    [
      {
        header: "Name",
        text: "rows"
      },
      {
        header: "Type",
        text: "array"
      },
      {
        header: "Description",
        html: "<strong>Required.</strong> The rows within the table component.
<a href="#/macro-options">See macro options for rows</a>."
      }
    ],
    [
      {
        header: "Name",
        text: "head"
      },
      {
        header: "Type",
        text: "array"
      },
      {
        header: "Description",
        html: "Can be used to add a row of table header cells (<code class="app-code">&lt;th&gt;</code>) at the top of the table component.
<a href="#/macro-options">See macro options for head</a>."
      }
    ],
    [
      {
        header: "Name",
        text: "caption"
      },
      {
        header: "Type",
        text: "string"
      },
      {
        header: "Description",
        text: "Caption text."
      }
    ],
    [
      {
        header: "Name",
        text: "captionClasses"
      },
      {
        header: "Type",
        text: "string"
      },
      {
        header: "Description",
        text: "Classes for caption text size. Classes should correspond to the available typography heading classes."
      }
    ],
    [
      {
        header: "Name",
        text: "firstCellIsHeader"
      },
      {
        header: "Type",
        text: "string"
      },
      {
        header: "Description",
        html: "If set to <code class="app-code">true</code>, the first cell in each row will be a table header (<code class="app-code">&lt;th&gt;</code>)."
      }
    ],
    [
      {
        header: "Name",
        text: "classes"
      },
      {
        header: "Type",
        text: "string"
      },
      {
        header: "Description",
        text: "Classes to add to the table container."
      }
    ],
    [
      {
        header: "Name",
        text: "attributes"
      },
      {
        header: "Type",
        text: "object"
      },
      {
        header: "Description",
        text: "	HTML attributes (for example data attributes) to add to the table container."
      }
    ]
  ]
}) }}
```

#### with word breaks

```njk
{{ table({
  caption: "Users",
  captionSize: "m",
  head: [
    {
      text: "Name"
    },
    {
      text: "Email address"
    },
    {
      text: "Status"
    },
    {
      html: "<span class="nhsuk-u-visually-hidden">Actions</span>"
    }
  ],
  rows: [
    [
      {
        text: "Stephanie Meyer",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "stephanie.meyer9@test.com",
        classes: "nhsuk-u-text-break-word"
      },
      {
        html: "
<strong class="nhsuk-tag nhsuk-tag--green">
  Active
</strong>
"
      }
    ],
    [
      {
        text: "Aleksandrina Featherstonehaugh-Whitehead",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com",
        classes: "nhsuk-u-text-break-word"
      },
      {
        html: "
<strong class="nhsuk-tag nhsuk-tag--grey">
  Inactive
</strong>
"
      }
    ]
  ]
}) }}
```

#### with first cell as header

```njk
{{ table({
  firstCellIsHeader: true,
  head: [
    {
      text: "Day of the week"
    },
    {
      text: "Opening hours"
    }
  ],
  rows: [
    [
      {
        text: "Monday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Tuesday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Wednesday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Thursday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Friday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Saturday"
      },
      {
        text: "9am to 1pm"
      }
    ],
    [
      {
        text: "Sunday"
      },
      {
        text: "Closed"
      }
    ]
  ]
}) }}
```

#### as a card

```njk
{{ table({
  card: true,
  caption: "Impetigo can look similar to other skin conditions",
  captionSize: "m",
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

#### as a card (feature)

```njk
{{ table({
  card: {
    heading: "Other conditions like impetigo",
    headingSize: "m",
    feature: true
  },
  caption: "Impetigo can look similar to other skin conditions",
  captionSize: "s",
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

#### as a card (feature) with responsive layout

```njk
{{ table({
  card: {
    heading: "Other conditions like impetigo",
    headingSize: "m",
    feature: true
  },
  caption: "Impetigo can look similar to other skin conditions",
  captionSize: "s",
  responsive: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        header: "Skin problems",
        text: "Blisters on lips or around the mouth"
      },
      {
        header: "Possible cause",
        text: "Cold sores"
      }
    ],
    [
      {
        header: "Skin problems",
        text: "Itchy, dry, cracked, sore"
      },
      {
        header: "Possible cause",
        text: "Eczema"
      }
    ],
    [
      {
        header: "Skin problems",
        text: "Itchy blisters"
      },
      {
        header: "Possible cause",
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

---

## Tabs

[↑ Back to top](#table-of-contents)

**Macro name:** `tabs`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | This is used for the main component and to compose the `id` attribute for each item. |
| `idPrefix` | string |  | String to prefix the `id` for each tab item if no `id` is specified on each item. |
| `title` | string |  | Title for the tabs table of contents. |
| `items` | array | ✓ | Array of tab items. |
| `items.id` | string | ✓ | Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.label` | string | ✓ | The text label of a tab item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab. |
| `items.panel` | object | ✓ | Content for the panel. |
| `items.panel.text` | string | ✓ | Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.panel.html` | string | ✓ | The title of the panel. |
| `items.panel.attributes` | object |  | The body of the panel. |

### Examples

#### default

```njk
{{ tabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: "  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past day</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">3</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">0</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">0</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">2</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">0</td>      </tr>    </tbody>
  </table>"
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: "  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past week</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">24</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">18</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">16</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">20</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">24</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">27</td>      </tr>    </tbody>
  </table>"
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: "  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past month</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">98</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">95</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">122</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">131</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">126</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">142</td>      </tr>    </tbody>
  </table>"
      }
    },
    {
      label: "Past year",
      id: "past-year",
      panel: {
        html: "  <table class="nhsuk-table">    <caption class="nhsuk-table__caption">Past year</caption>    <thead class="nhsuk-table__head">
      <tr>          <th scope="col" class="nhsuk-table__header">Case manager</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases opened</th>          <th scope="col" class="nhsuk-table__header nhsuk-table__header--numeric">Cases closed</th>      </tr>
    </thead>    <tbody class="nhsuk-table__body">      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">David Francis</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1380</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1472</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Paul Farmer</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1129</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1083</td>      </tr>      <tr class="nhsuk-table__row">            <td class="nhsuk-table__cell">Rita Patel</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1539</td>            <td class="nhsuk-table__cell nhsuk-table__cell--numeric">1265</td>      </tr>    </tbody>
  </table>"
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
      label: "Tab 1",
      id: "tab-1",
      panel: {
        html: "<h2>Tab 1 content</h2>
<p>Testing that when you <a href="#anchor">click the link</a> it moves focus.</p>
<ul>
  <li><a href="#tab-1" id="anchor">Tab panel 1</a></li>
  <li><a href="#tab-2">Tab panel 2</a></li>
  <li><a href="#tab-3">Tab panel 3</a></li>
</ul>"
      }
    },
    {
      label: "Tab 2",
      id: "tab-2",
      panel: {
        html: "<h2>Tab 2 content</h2>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>"
      }
    },
    {
      label: "Tab 3",
      id: "tab-3",
      panel: {
        html: "<h2>Tab 3 content</h2>
<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>"
      }
    }
  ]
}) }}
```

---

## Tag

[↑ Back to top](#table-of-contents)

**Macro name:** `tag`

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
  text: "Active"
}) }}
```

#### white

```njk
{{ tag({
  text: "In progress",
  classes: "nhsuk-tag--white"
}) }}
```

#### grey

```njk
{{ tag({
  text: "Inactive",
  classes: "nhsuk-tag--grey"
}) }}
```

#### green

```njk
{{ tag({
  text: "New",
  classes: "nhsuk-tag--green"
}) }}
```

#### aqua-green

```njk
{{ tag({
  text: "Active",
  classes: "nhsuk-tag--aqua-green"
}) }}
```

#### blue

```njk
{{ tag({
  text: "Pending",
  classes: "nhsuk-tag--blue"
}) }}
```

#### purple

```njk
{{ tag({
  text: "Received",
  classes: "nhsuk-tag--purple"
}) }}
```

#### pink

```njk
{{ tag({
  text: "Sent",
  classes: "nhsuk-tag--pink"
}) }}
```

#### red

```njk
{{ tag({
  text: "Rejected",
  classes: "nhsuk-tag--red"
}) }}
```

#### orange

```njk
{{ tag({
  text: "Declined",
  classes: "nhsuk-tag--orange"
}) }}
```

#### yellow

```njk
{{ tag({
  text: "Delayed",
  classes: "nhsuk-tag--yellow"
}) }}
```

---

## Task list

[↑ Back to top](#table-of-contents)

**Macro name:** `taskList`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `classes` | string |  | Classes to add to the `ul` container for the task list. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `"-"`. Defaults to `"task-list"`. |
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
{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      title: {
        text: "Exercise"
      },
      href: "#",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    {
      title: {
        text: "Personal health"
      },
      href: "#",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    {
      title: {
        text: "Family health history"
      },
      hint: {
        text: "Details of your parents, brothers and sisters"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "nhsuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Smoking history"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "nhsuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Blood test"
      },
      status: {
        text: "Cannot start yet",
        classes: "nhsuk-task-list__status--cannot-start-yet"
      }
    }
  ]
}) }}
```

#### with empty items

```njk
{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      title: {
        text: "Exercise"
      },
      href: "#",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    {
      title: {
        text: "Personal health"
      },
      href: "#",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    false,
    false,
    {
      title: {
        text: "Blood test"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "nhsuk-tag--blue"
        }
      }
    }
  ]
}) }}
```

---

## Textarea

[↑ Back to top](#table-of-contents)

**Macro name:** `textarea`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the textarea. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `disabled` | boolean |  | If `true`, textarea will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the textarea component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to the textarea component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
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
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |

### Examples

#### default

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example"
}) }}
```

#### with hint

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "with-hint",
  name: "example"
}) }}
```

#### label

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "custom-size",
  name: "example"
}) }}
```

#### without page heading

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "without-heading",
  name: "example"
}) }}
```

#### with error message

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
  },
  errorMessage: {
    text: "You must provide an explanation"
  },
  id: "with-error-message",
  name: "example"
}) }}
```

#### with hint and error

```njk
{{ textarea({
  label: {
    text: "Can you provide more detail?",
    size: "l",
    isPageHeading: true
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

#### with autocomplete attribute

```njk
{{ textarea({
  label: {
    text: "Full address",
    size: "l",
    isPageHeading: true
  },
  id: "with-autocomplete-attribute",
  name: "example",
  autocomplete: "street-address"
}) }}
```

---

## Warning callout

[↑ Back to top](#table-of-contents)

**Macro name:** `warningCallout`

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
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the heading. Defaults to `"Important"`. |

### Examples

#### default

```njk
{{ warningCallout({
  heading: "Important",
  text: "For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."
}) }}
```

#### with custom heading

```njk
{{ warningCallout({
  heading: "School, nursery or work",
  text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

---


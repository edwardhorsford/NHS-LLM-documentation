# NHS Frontend Component Reference

---
**Auto-generated Documentation**

- **NHS Frontend Version:** 10.6.1
- **Git Branch:** detached
- **Git Commit:** ee96515
- **Generated:** 2026-09-09 14:23:49 UTC
- **Source:** [NHS Frontend Repository](https://github.com/nhsuk/nhsuk-frontend)

*This documentation is automatically extracted from NHS Frontend component definitions. Do not edit manually.*

---

Use the component reference table below to find the line number for any component, then read it with a file tool.

## Table of Contents

| Component | Macro | Category | Line |
|-----------|-------|----------|------|
| Character count | `characterCount()` | Form Inputs | 2395 |
| Checkboxes | `checkboxes()` | Form Inputs | 2944 |
| Date input | `dateInput()` | Form Inputs | 4447 |
| File upload | `fileUpload()` | Form Inputs | 6337 |
| Input | `input()` | Form Inputs | 8703 |
| Password input | `passwordInput()` | Form Inputs | 10563 |
| Radios | `radios()` | Form Inputs | 10929 |
| Search input | `searchInput()` | Form Inputs | 11819 |
| Select | `select()` | Form Inputs | 12318 |
| Textarea | `textarea()` | Form Inputs | 18343 |
| Button | `button()` | Form Controls | 352 |
| Error message | `errorMessage()` | Form Controls | 5893 |
| Fieldset | `fieldset()` | Form Controls | 6242 |
| Hint text | `hint()` | Form Controls | 8527 |
| Label | `label()` | Form Controls | 9363 |
| Back link | `backLink()` | Navigation | 133 |
| Breadcrumb | `breadcrumb()` | Navigation | 201 |
| Contents list | `contentsList()` | Navigation | 4303 |
| Pagination | `pagination()` | Navigation | 10066 |
| Skip link | `skipLink()` | Navigation | 13114 |
| Action link | `actionLink()` | Content | 69 |
| Caption | `caption()` | Content | 1125 |
| Card | `card()` | Content | 1147 |
| Code | `code()` | Content | 4169 |
| Details | `details()` | Content | 5335 |
| Do and Don't list | `list()` | Content | 5583 |
| Heading | `heading()` | Content | 8127 |
| Hero | `hero()` | Content | 8326 |
| Images | `image()` | Content | 8572 |
| Inset text | `insetText()` | Content | 9317 |
| Legend | `legend()` | Content | 9605 |
| Panel | `panel()` | Content | 10383 |
| Scroll | `scroll()` | Content | 11766 |
| Summary list | `summaryList()` | Content | 13163 |
| Tables | `table()` | Content | 14658 |
| Tabs | `tabs()` | Content | 17656 |
| Tag | `tag()` | Content | 17853 |
| Task list | `taskList()` | Content | 17940 |
| Footer | `footer()` | Layout | 6607 |
| Header | `header()` | Layout | 7312 |
| Error summary | `errorSummary()` | Notifications | 5965 |
| Notification banner | `notificationBanner()` | Notifications | 9832 |
| Warning callout | `warningCallout()` | Notifications | 18565 |


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
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire action link component in a `call` block. |
| `type` | string |  | Type of action link as a button – `"button"` or `"submit"`. Defaults to `"submit"` unless `href` is provided. |
| `href` | string | ✓ | The action link `href` attribute. If set, the action link will use an `<a>` tag automatically unless `type` is provided. |
| `openInNewWindow` | boolean |  | If set to `true`, then the action link will open in a new window. If `type` is set, this has no effect. |
| `variant` | string |  | Optional variant of action link. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the action link component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the action link component. |
| `element` | string |  | Configured automatically if `href` is provided. |

### Examples

#### default

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  href: "#/find"
}) }}
```

#### as a button

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  type: "submit"
}) }}
```

#### with HTML

```njk
{{ actionLink({
  html: 'Start session<br>\n<span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>',
  href: "#/start"
}) }}
```

#### with HTML via call block

```njk
{% call actionLink({
  href: "#/start"
}) %}
Start session<br>
<span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>
{%- endcall %}
```

---

## Back link

[↑ Back to top](#table-of-contents)

**Macro name:** `backLink`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the back link. |
| `text` | string |  | Text to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`. |
| `html` | string |  | HTML to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire back link component in a `call` block. |
| `type` | string |  | Type of back link as a button – `"button"` or `"submit"`. Defaults to `"submit"` unless `href` is provided. |
| `href` | string |  | The back link `href` attribute. If set, the back link will use an `<a>` tag automatically unless `type` is provided. |
| `variant` | string |  | Optional variant of back link. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the back link component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the back link component. |
| `visuallyHiddenText` | string |  | An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component. |
| `element` | string |  | Configured automatically if `href` is provided. |

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
  type: "submit"
}) }}
```

#### with text escaping

```njk
{{ backLink({
  text: "What to expect at A&E"
}) }}
```

#### with HTML

```njk
{{ backLink({
  html: "What to expect at A&amp;E"
}) }}
```

#### with HTML via call block

```njk
{% call backLink() %}
What to expect at A&amp;E
{%- endcall %}
```

---

## Breadcrumb

[↑ Back to top](#table-of-contents)

**Macro name:** `breadcrumb`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the breadcrumb. |
| `items` | array | ✓ | Array of breadcrumbs items. |
| `items.text` | string | ✓ | Text to use within the breadcrumbs item. |
| `items.html` | string | ✓ | HTML to use within the breadcrumbs item. |
| `items.href` | string |  | The breadcrumb item `href` attribute. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the individual crumb. |
| `text` | string | ✓ | Replaced by `item.text` in the `items` option. |
| `href` | string | ✓ | Replaced by `item.href` in the `items` option. |
| `variant` | string |  | Optional variant of breadcrumb. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |
| `labelText` | string |  | Replaced by the `ariaLabel` option. |
| `ariaLabel` | string |  | Accessible name identifying the landmark to screen readers. Defaults to "Breadcrumb". |
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
  variant: "reverse",
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
    type: "submit"
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
| `element` | string |  | HTML element for the button – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided. |
| `text` | string | ✓ | If `html` or `ariaLabel` is set, this is not required. Text for the button. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` or `ariaLabel` is set, this is not required. HTML for the button. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire button component in a `call` block. |
| `name` | string |  | Name for the button. If `href` is provided, this has no effect. |
| `type` | string |  | Type of button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `value` | string |  | The button `value` attribute. If `href` is provided, this has no effect. |
| `disabled` | boolean |  | Whether the button should be disabled. If `href` is provided, this has no effect. |
| `href` | string |  | The button `href` attribute. If set, the button will use an `<a>` tag automatically unless `type` is provided. |
| `variant` | string |  | Optional variant of button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`. |
| `small` | boolean |  | If set to `true`, smaller button size will be used. |
| `classes` | string |  | Classes to add to the button. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the button. |
| `ariaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when only an icon is used. |
| `preventDoubleClick` | boolean |  | Prevent accidental double clicks on submit buttons from submitting forms multiple times. |
| `icon` | object |  | Can be used to add an icon to the button. |
| `icon.name` | string | ✓ | Icon name for the button – for example, `"search"`, `"arrow-right"`, `"plus"` or `"minus"`. |
| `icon.html` | string | ✓ | HTML to use for the icon, as an alternative to the `name` option. If `html` is provided, the `name` option will be ignored. |
| `icon.placement` | string | ✓ | Placement of the icon within the button – `"start"` or `"end"`. |

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
  small: true
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
  disabled: true,
  small: true
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
  small: true,
  href: "#"
}) }}
```

#### with icon at start

```njk
{{ button({
  text: "Previous",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

#### with icon at start, small

```njk
{{ button({
  text: "Previous",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

#### with icon at end

```njk
{{ button({
  text: "Next",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

#### with icon at end, small

```njk
{{ button({
  text: "Next",
  icon: {
    name: "arrow-right",
    placement: "end"
  },
  small: true
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

#### login

```njk
{{ button({
  text: "Continue",
  variant: "login"
}) }}
```

#### login, small

```njk
{{ button({
  text: "Continue",
  variant: "login",
  small: true
}) }}
```

#### login disabled

```njk
{{ button({
  text: "Continue",
  variant: "login",
  disabled: true
}) }}
```

#### login disabled, small

```njk
{{ button({
  text: "Continue",
  variant: "login",
  disabled: true,
  small: true
}) }}
```

#### login as a link

```njk
{{ button({
  text: "Continue",
  variant: "login",
  href: "#"
}) }}
```

#### login as a link, small

```njk
{{ button({
  text: "Continue",
  variant: "login",
  small: true,
  href: "#"
}) }}
```

#### login with icon at start

```njk
{{ button({
  text: "Previous",
  variant: "login",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

#### login with icon at start, small

```njk
{{ button({
  text: "Previous",
  variant: "login",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

#### login with icon at end

```njk
{{ button({
  text: "Next",
  variant: "login",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

#### login with icon at end, small

```njk
{{ button({
  text: "Next",
  variant: "login",
  icon: {
    name: "arrow-right",
    placement: "end"
  },
  small: true
}) }}
```

#### reverse

```njk
{{ button({
  text: "Log out",
  variant: "reverse"
}) }}
```

#### reverse, small

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  small: true
}) }}
```

#### reverse disabled

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  disabled: true
}) }}
```

#### reverse disabled, small

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  disabled: true,
  small: true
}) }}
```

#### reverse as a link

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  href: "#"
}) }}
```

#### reverse as a link, small

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  small: true,
  href: "#"
}) }}
```

#### reverse with icon at start

```njk
{{ button({
  text: "Previous",
  variant: "reverse",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

#### reverse with icon at start, small

```njk
{{ button({
  text: "Previous",
  variant: "reverse",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

#### reverse with icon at end

```njk
{{ button({
  text: "Next",
  variant: "reverse",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

#### reverse with icon at end, small

```njk
{{ button({
  text: "Next",
  variant: "reverse",
  icon: {
    name: "arrow-right",
    placement: "end"
  },
  small: true
}) }}
```

#### secondary

```njk
{{ button({
  text: "Find my location",
  variant: "secondary"
}) }}
```

#### secondary, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  small: true
}) }}
```

#### secondary disabled

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  disabled: true
}) }}
```

#### secondary disabled, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  disabled: true,
  small: true
}) }}
```

#### secondary as a link

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  href: "#"
}) }}
```

#### secondary as a link, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  small: true,
  href: "#"
}) }}
```

#### secondary with icon at start

```njk
{{ button({
  text: "Previous",
  variant: "secondary",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

#### secondary with icon at start, small

```njk
{{ button({
  text: "Previous",
  variant: "secondary",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

#### secondary with icon at end

```njk
{{ button({
  text: "Next",
  variant: "secondary",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

#### secondary with icon at end, small

```njk
{{ button({
  text: "Next",
  variant: "secondary",
  icon: {
    name: "arrow-right",
    placement: "end"
  },
  small: true
}) }}
```

#### secondary, solid background

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid"
}) }}
```

#### secondary, solid background, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  small: true
}) }}
```

#### secondary, solid background disabled

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  disabled: true
}) }}
```

#### secondary, solid background disabled, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  disabled: true,
  small: true
}) }}
```

#### secondary, solid background as a link

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  href: "#"
}) }}
```

#### secondary, solid background as a link, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  small: true,
  href: "#"
}) }}
```

#### secondary, solid background with icon at start

```njk
{{ button({
  text: "Previous",
  variant: "secondary-solid",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

#### secondary, solid background with icon at start, small

```njk
{{ button({
  text: "Previous",
  variant: "secondary-solid",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

#### secondary, solid background with icon at end

```njk
{{ button({
  text: "Next",
  variant: "secondary-solid",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

#### secondary, solid background with icon at end, small

```njk
{{ button({
  text: "Next",
  variant: "secondary-solid",
  icon: {
    name: "arrow-right",
    placement: "end"
  },
  small: true
}) }}
```

#### warning

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning"
}) }}
```

#### warning, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  small: true,
  variant: "warning"
}) }}
```

#### warning disabled

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning",
  disabled: true
}) }}
```

#### warning disabled, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning",
  small: true,
  disabled: true
}) }}
```

#### warning as a link

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning",
  href: "#"
}) }}
```

#### warning as a link, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  small: true,
  variant: "warning",
  href: "#"
}) }}
```

#### warning with icon at start

```njk
{{ button({
  text: "Previous",
  variant: "warning",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

#### warning with icon at start, small

```njk
{{ button({
  text: "Previous",
  variant: "warning",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

#### warning with icon at end

```njk
{{ button({
  text: "Next",
  variant: "warning",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

#### warning with icon at end, small

```njk
{{ button({
  text: "Next",
  variant: "warning",
  icon: {
    name: "arrow-right",
    placement: "end"
  },
  small: true
}) }}
```

#### example reverse search button, small

```njk
{{ button({
  text: "Search",
  variant: "reverse",
  small: true
}) }}
```

#### example reverse save button, small

```njk
{{ button({
  text: "Save",
  variant: "reverse",
  small: true
}) }}
```

#### example secondary search button, small

```njk
{{ button({
  text: "Search",
  variant: "secondary",
  small: true
}) }}
```

#### example secondary save button, small

```njk
{{ button({
  text: "Save",
  variant: "secondary",
  small: true
}) }}
```

---

## Caption

[↑ Back to top](#table-of-contents)

**Macro name:** `caption`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the caption. |
| `element` | string |  | HTML element for the caption – for example, `"span"`, `"p"`, `"h2"` or `"h3"`. Defaults to `"span"`. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the caption. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the caption. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire caption component in a `call` block. |
| `placement` | string | ✓ | Placement of the caption relative to the heading – `"before"`, `"after"`, `"start"` or `"end"`. |
| `size` | string |  | Size of the caption – `"m"`, `"l"`, `"xl"` or `"xxl"`. |
| `classes` | string |  | Classes to add to the caption. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the caption. |

---

## Card

[↑ Back to top](#table-of-contents)

**Macro name:** `card`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the card. |
| `heading` | object | ✓ | Heading of the card component. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. |
| `heading.visuallyHiddenText` | string |  | Optional visually hidden prefix used before the heading. |
| `heading.size` | string |  | Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional heading level. Defaults to `2`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingHtml` | string | ✓ | Replaced by the `heading.html` option. |
| `headingClasses` | string |  | Replaced by the `heading.classes` option. |
| `headingSize` | string |  | Replaced by the `heading.size` option. |
| `headingLevel` | integer |  | Replaced by the `heading.level` option. |
| `headingId` | string |  | Replaced by the `heading.id` option. |
| `headingVisuallyHiddenText` | string |  | Replaced by the `heading.visuallyHiddenText` option. |
| `href` | string |  | The card link `href` attribute. |
| `clickable` | boolean |  | If set to `true`, then the whole card will become a clickable card variant. |
| `variant` | string |  | Optional variant of card – `"feature"`, `"primary"`, `"secondary"`, `"warning"`, `"non-urgent"`, `"urgent"` or `"emergency"`. |
| `type` | string |  | Replaced by the `variant` option. |
| `feature` | boolean |  | Replaced by the `variant: "feature"` option. |
| `primary` | boolean |  | Replaced by the `variant: "primary"` option. |
| `secondary` | boolean |  | Replaced by the `variant: "secondary"` option. |
| `warning` | boolean |  | Replaced by the `variant: "warning"` option. |
| `imgURL` | string |  | Replaced by the `image.src` option. |
| `imgALT` | string |  | Replaced by the `image.alt` option. |
| `image` | object |  | Can be used to add an image to the card component. |
| `image.src` | string | ✓ | The URL of the image in the card. |
| `image.alt` | string |  | The alternative text of the image in the card. |
| `image.html` | string |  | HTML to use for the image content. If `html` is provided, the `src` and `alt` options will be ignored. |
| `description` | object |  | Description to use within the card content. If `descriptionHtml` is provided, the `description` option will be ignored. |
| `description.text` | string | ✓ | If `html` is set, this is not required. Text to use within the card content. If `html` is provided, the `text` option will be ignored. |
| `description.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the card content. If `html` is provided, the `text` option will be ignored. |
| `description.classes` | string |  | Classes to add to the card content. |
| `description.attributes` | object |  | HTML attributes (for example data attributes) to add to the card content. |
| `descriptionHtml` | string |  | Replaced by the `description.html` option. |
| `actions` | object |  | Can be used to add actions to the card component. |
| `actions.items` | array |  | Array of actions as links for use in the card component. |
| `actions.items.id` | string |  | The ID of the action item. |
| `actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `actions.items.name` | string |  | Name for the action as a button. If `href` is provided, this has no effect. |
| `actions.items.type` | string |  | Type of action as a button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `actions.items.value` | string |  | The `value` attribute for the action as a button. If `href` is provided, this has no effect. |
| `actions.items.href` | string | ✓ | The action `href` attribute. If set, the action will use an `<a>` tag automatically unless `type` is provided. |
| `actions.items.classes` | string |  | Classes to add to the action item. |
| `actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `actions.classes` | string |  | Classes to add to the actions wrapper. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire card component in a `call` block. |
| `classes` | string |  | Classes to add to the card. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the card. |

### Examples

#### default

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency"
  }
}) %}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

#### heading

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency"
  }
}) %}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

#### basic without heading

```njk
{{ card({
  description:
    "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### basic with heading link

```njk
{{ card({
  href: "#",
  heading: {
    text: "Introduction to care and support",
    size: "m",
    level: 3
  },
  description:
    "A quick guide for people who have care and support needs and their carers"
}) }}
```

#### basic with custom HTML

```njk
{% call card({
  heading: {
    text: "Help from NHS 111",
    level: 3
  }
}) %}
<p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
<p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
<p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{%- endcall %}
```

#### basic with custom HTML and heading as string

```njk
{% call card({
  heading: "Help from NHS 111"
}) %}
<p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
<p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
<p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{%- endcall %}
```

#### basic with summary list

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary lists

```njk
{% call card({
  heading: {
    text: "Regional Managers",
    level: 3
  }
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
</dl>
{%- endcall %}
```

#### basic with summary list and button

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
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
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>


<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="submit">
  Add role
</button>
{%- endcall %}
```

#### basic with summary list and action

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      }
    ]
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary list and action as a button

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        type: "submit",
        text: "Delete"
      }
    ]
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary list and actions

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary list and actions array

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: [
    {
      text: "Delete",
      href: "#/delete"
    },
    {
      text: "Withdraw",
      href: "#/withdraw"
    }
  ]
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary list and actions as buttons

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        type: "submit",
        text: "Delete"
      },
      {
        type: "submit",
        text: "Withdraw"
      }
    ]
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary list and actions (empty items)

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### basic with summary list and heading link

```njk
{% call card({
  href: "#",
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### secondary without heading

```njk
{{ card({
  variant: "secondary",
  description: {
    text: "A quick guide for people who have care and support needs and their carers"
  }
}) }}
```

#### secondary with heading link

```njk
{{ card({
  href: "#",
  variant: "secondary",
  heading: {
    text: "Introduction to care and support",
    size: "m",
    level: 3
  },
  description: {
    text: "A quick guide for people who have care and support needs and their carers"
  }
}) }}
```

#### secondary with custom HTML

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Help from NHS 111",
    level: 3
  }
}) %}
<p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
<p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
<p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{%- endcall %}
```

#### secondary with summary list

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### secondary with summary lists

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Managers",
    level: 3
  }
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
</dl>
{%- endcall %}
```

#### secondary with summary list and button

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
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
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>


<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="submit">
  Add role
</button>
{%- endcall %}
```

#### secondary with summary list and actions

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  },
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### secondary with summary list and actions, without heading

```njk
{% call card({
  variant: "secondary",
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### secondary with summary list and actions (empty items)

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  },
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
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### secondary with summary list and heading link

```njk
{% call card({
  href: "#",
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### non-urgent (blue)

```njk
{% call card({
  heading: {
    text: "Speak to a GP if:",
    level: 3
  },
  variant: "non-urgent"
}) %}
<ul>
  <li>you're not sure it's chickenpox</li>
  <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
  <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
  <li>you're concerned about your child or they get worse</li>
</ul>
<p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
{%- endcall %}
```

#### urgent (red)

```njk
{% call card({
  heading: "Ask for an urgent GP appointment if:",
  variant: "urgent"
}) %}
<ul>
  <li>you're an adult and have chickenpox</li>
  <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
  <li>you have a weakened immune system and you've been near someone with chickenpox</li>
  <li>you think your newborn baby has chickenpox</li>
</ul>
<p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
{%- endcall %}
```

#### emergency (red and black)

```njk
{% call card({
  heading: "Call 999 if you have sudden chest pain that:",
  variant: "emergency"
}) %}
<ul>
  <li>spreads to your arms, back, neck or jaw</li>
  <li>makes your chest feel tight or heavy</li>
  <li>also started with shortness of breath, sweating and feeling or being sick</li>
</ul>
<p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
{%- endcall %}
```

#### emergency (red and black) with action link

```njk
{% call card({
  heading: "Call 999 or go to A&E now if:",
  variant: "emergency"
}) %}
<ul>
  <li>you're coughing up more than just a few spots or streaks of blood – this could be a sign of serious bleeding in your lungs</li>
  <li>you have severe difficulty breathing – you're gasping, choking or not able to get words out</li>
</ul>

<a class="nhsuk-action-link nhsuk-action-link--reverse" href="#">
  <svg class="nhsuk-icon nhsuk-icon--arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z"/>
  </svg>
  <span class="nhsuk-action-link__text">
    Find your nearest A&amp;E
  </span>
</a>
{%- endcall %}
```

#### primary (with chevron)

```njk
{{ card({
  href: "#",
  heading: {
    text: "Breast screening",
    size: "m"
  },
  variant: "primary",
  clickable: true
}) }}
```

#### primary (with chevron and description)

```njk
{{ card({
  href: "#",
  heading: {
    text: "Introduction to care and support",
    size: "m"
  },
  description:
    "A quick guide for people who have care and support needs and their carers",
  clickable: true,
  variant: "primary"
}) }}
```

#### clickable

```njk
{{ card({
  href: "#",
  heading: {
    text: "Introduction to care and support",
    size: "m"
  },
  description:
    "A quick guide for people who have care and support needs and their carers",
  clickable: true
}) }}
```

#### secondary

```njk
{{ card({
  href: "#",
  heading: {
    text: "Urgent and emergency care services",
    size: "m"
  },
  description:
    "Services the NHS provides if you need urgent or emergency medical help",
  clickable: true,
  variant: "secondary"
}) }}
```

#### secondary non-clickable with custom description

```njk
{{ card({
  href: "#",
  variant: "secondary",
  heading: {
    text: "Why we are reinvesting in the NHS Prototype kit",
    classes: "nhsuk-u-font-size-22 nhsuk-u-margin-bottom-2"
  },
  description: {
    html: '<p class="nhsuk-body-s nhsuk-u-margin-bottom-2">21 July 2025</p>\n<p class="nhsuk-card__description">Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.</p>'
  }
}) }}
```

#### feature

```njk
{{ card({
  variant: "feature",
  heading: "Feature card heading",
  description: "Feature card description."
}) }}
```

#### feature with A to Z content

```njk
{{ card({
  heading: {
    text: "A",
    id: "a",
    size: "m"
  },
  variant: "feature",
  description: {
    html: '<ul class="nhsuk-list nhsuk-list--border">\n  <li><a href="#/conditions/abdominal-aortic-aneurysm/">AAA, see Abdominal aortic aneurysm</a></li>\n  <li><a href="#/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a></li>\n  <li><a href="#/conditions/abscess/">Abscess</a></li>\n</ul>'
  }
}) }}
```

#### feature with summary list

```njk
{% call card({
  heading: "Feature card heading",
  variant: "feature"
}) %}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
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
{%- endcall %}
```

#### feature with nested card and summary list

```njk
{% call card({
  heading: "Flu: Follow-up requested",
  variant: "feature"
}) %}
<p>Sarah Philips (Mum) would like to speak to a member of the team about other options for their child's vaccination.</p>
<a class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" href="#" role="button" draggable="false">
  Record a new consent response
</a>


<h3 class="nhsuk-heading-s">Consent responses</h3>

<div class="nhsuk-card nhsuk-card--clickable">
  <div class="nhsuk-card__content">
    <h4 class="nhsuk-card__heading">
      <a class="nhsuk-card__link" href="#">Sarah Philips (Mum)</a>
    </h4>
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
  </div>
</div>
{%- endcall %}
```

#### warning

```njk
{{ card({
  heading: "School, nursery or work",
  description:
    "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.",
  variant: "warning"
}) }}
```

#### warning with actions

```njk
{{ card({
  heading: "School, nursery or work",
  description:
    "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.",
  variant: "warning",
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
    src: "/nhsuk-frontend/assets/example-image-exercise.jpg"
  },
  href: "#",
  heading: {
    text: "Exercise",
    size: "m"
  },
  description:
    "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing",
  clickable: true
}) }}
```

#### with image and caption

```njk
{{ card({
  image: {
    html: '<figure class="nhsuk-image">\n  <img class="nhsuk-image__img" src="/nhsuk-frontend/assets/example-image-exercise.jpg" alt="">\n  <figcaption class="nhsuk-image__caption">\n    No specific amount of time is recommended, but a typical training session could take less than 20 minutes.\n  </figcaption>\n</figure>\n'
  },
  href: "#",
  heading: {
    text: "Exercise",
    size: "m"
  },
  description:
    "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing",
  clickable: true
}) }}
```

#### with image and custom HTML

```njk
{{ card({
  image: {
    src: "/nhsuk-frontend/assets/example-image-prototype-kit.png"
  },
  href: "https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit",
  clickable: true,
  heading: {
    text: "Why we are reinvesting in the NHS prototype kit",
    html: '<p class="nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-bottom-0"><span class="nhsuk-u-visually-hidden">Published on: </span>21 July 2025</p>\n<p class="nhsuk-body-s nhsuk-u-font-weight-bold">NHS England Design Matters blog</p>',
    size: "m"
  },
  description:
    "Frankie Roberto and Mike Gallagher explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it."
}) }}
```

#### top task

```njk
{{ card({
  href: "#",
  clickable: true,
  heading: {
    text: "Order a repeat prescription",
    size: "xs",
    level: 3
  }
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
| `maxlength` | string | ✓ | The maximum number of characters (or words if `countType` is set to `"words"`). |
| `maxwords` | string | ✓ | Replaced by the `maxlength` and `countType: "words"` options. |
| `countType` | string |  | The count type used to count the text – `"length"` or `"words"`. Defaults to `"length"`. |
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
| `disabled` | boolean |  | If `true`, textarea will be disabled. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"street-address"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `countMessage` | object |  | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string |  | Classes to add to the count message. |
| `textareaDescriptionText` | string |  | Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page if `countType` is not supported or JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` option. |
| `charactersUnderLimitText` | object |  | Message displayed when the number of characters is under the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining characters. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |
| `charactersAtLimitText` | string |  | Message displayed when the number of characters reaches the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. |
| `charactersOverLimitText` | object |  | Message displayed when the number of characters is over the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |
| `wordsUnderLimitText` | object |  | Message displayed when the number of words is under the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining words. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |
| `wordsAtLimitText` | string |  | Message displayed when the number of words reaches the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. |
| `wordsOverLimitText` | object |  | Message displayed when the number of words is over the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of words above the maximum. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |

### Examples

#### default

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  maxlength: 200
}) }}
```

#### disabled

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  maxlength: 200,
  disabled: true
}) }}
```

#### with hint

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "with-hint",
  name: "example",
  maxlength: 200
}) }}
```

#### with error only

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with error message

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with error message and hint

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
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
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with error message and hint as strings

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  hint: "Do not include personal information like your name, date of birth or NHS number",
  errorMessage: "Job description must be 350 characters or less",
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with error message, without heading

```njk
{{ characterCount({
  label: {
    text: "Enter a job description"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with error message and hint, without heading

```njk
{{ characterCount({
  label: {
    text: "Enter a job description"
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
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with value

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-value",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

#### with custom rows

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
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
    heading: "Can you provide more detail?",
    size: "l"
  },
  id: "custom-size",
  name: "example",
  maxlength: 200
}) }}
```

#### without heading

```njk
{{ characterCount({
  label: "Tell us more about what happened",
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

#### with maxwords

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-word-count",
  name: "example",
  maxwords: 150
}) }}
```

#### with count type 'length'

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-length-count-type",
  name: "example",
  countType: "length",
  maxlength: 200
}) }}
```

#### with count type 'characters'

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-characters-count-type",
  name: "example",
  countType: "characters",
  maxlength: 200
}) }}
```

#### with count type 'characters' and error message

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: {
    text: "Job description must be 200 characters or less"
  },
  id: "with-characters-count-type-error-message",
  name: "example",
  countType: "characters",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with count type 'characters' and value

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-characters-count-type-value",
  name: "example",
  countType: "characters",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

#### with count type 'characters' and threshold

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-characters-count-type-threshold",
  name: "example",
  countType: "characters",
  value:
    "Type another letter into this field after this message to see the threshold feature",
  maxlength: 112,
  threshold: 75
}) }}
```

#### with count type 'words'

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-words-count-type",
  name: "example",
  countType: "words",
  maxlength: 50
}) }}
```

#### with count type 'words' and error message

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: {
    text: "Job description must be 40 words or less"
  },
  id: "with-words-count-type-error-message",
  name: "example",
  countType: "words",
  maxlength: 51,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### with count type 'words' and threshold

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-words-count-type-threshold",
  name: "example",
  countType: "words",
  value:
    "Type another word into this field after this message to see the threshold feature",
  maxlength: 51,
  threshold: 30
}) }}
```

#### with count type 'words' and value

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-words-count-type-value",
  name: "example",
  countType: "words",
  maxlength: 51,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

#### with threshold

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  id: "with-threshold",
  name: "example",
  value:
    "Type another letter into this field after this message to see the threshold feature",
  maxlength: 112,
  threshold: 75
}) }}
```

#### with neither maxlength nor maxwords set

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
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
    heading: "Can you provide more detail?",
    size: "l"
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
    heading: "Allwch chi roi mwy o fanylion?",
    size: "l"
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
    heading: "Can you provide more detail?",
    size: "l"
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
| `fieldset` | object |  | Can be used to add a fieldset to the checkboxes component. The `fieldset.html` option is not supported. *(accepts nested component params)* |
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
| `items.label` | object |  | The label used by each checkbox item within the checkboxes component. The `label.size` and `label.heading` options are not supported. *(accepts nested component params)* |
| `items.hint` | object |  | Can be used to add a hint to each checkbox item within the checkboxes component. *(accepts nested component params)* |
| `items.divider` | string |  | Divider text to separate checkbox items, for example the text `"or"`. |
| `items.checked` | boolean |  | Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the checkbox is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the checkbox is checked. |
| `items.disabled` | boolean |  | If `true`, checkbox will be disabled. |
| `items.classes` | string |  | Classes to add to the checkbox input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `items.behaviour` | string |  | Behaviour of the checkbox when JavaScript is enabled – `"exclusive"` or `"inclusive"`. Use `"exclusive"` for a "none" option or `"inclusive"` for an "all" option. |
| `items.behaviourGroup` | string |  | Used in conjunction with `behaviour` - this should be set to a string which groups checkboxes together into a set for use with a "none" or "all" option. |
| `items.exclusive` | boolean |  | Replaced by `item.behaviour` in the `items` option. |
| `items.exclusiveGroup` | string |  | Replaced by `item.behaviourGroup` in the `items` option. |
| `values` | array |  | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `disabled` | boolean |  | If `true`, checkbox inputs used by the checkboxes component will be disabled. |
| `small` | boolean |  | If set to `true`, small checkboxes will be used. |
| `inline` | boolean |  | If set to `true`, inline checkboxes will be used. |
| `classes` | string |  | Classes to add to the checkboxes container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the checkboxes container. |

### Examples

#### default

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

#### disabled

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

#### disabled input

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

#### disabled with enabled input

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

#### with hint

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

#### inline

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

#### with pre-checked values

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

#### with hints on items

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

#### without fieldset

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

#### with error only

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

#### with error message

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

#### with error message and hint

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

#### with error message and hint as strings

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

#### with error message, without heading

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

#### with error message and hint, without heading

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

#### with long text

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

#### legend

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

#### without heading

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

#### with conditional content

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

#### with conditional content, special characters

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
  idPrefix: "user.profile[contact-prefs]",
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

#### with conditional content, error message

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

#### with conditional content, error message (nested)

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

#### with "all" option

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

#### with "all" option (named group)

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
      behaviour: "inclusive",
      behaviourGroup: "vaccines-included"
    },
    {
      divider: "or",
      behaviour: "inclusive"
    },
    {
      value: "4in1",
      text: "4-in-1 pre-school booster",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "6in1",
      text: "6-in-1",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "hpv",
      text: "HPV",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "menb",
      text: "MenB",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "menacwy",
      text: "MenACWY",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "mmrv",
      text: "MMRV",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "rotavirus",
      text: "Rotavirus",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "pneumococcal",
      text: "Pneumococcal",
      behaviourGroup: "vaccines-included"
    },
    {
      value: "tdipv",
      text: "Td/IPV",
      behaviourGroup: "vaccines-included"
    }
  ]
}) }}
```

#### with "all" option (named group, unique)

```njk
{{ checkboxes({
  fieldset: {
    legend: {
      heading: "Which vaccines would you like to include?",
      size: "l"
    }
  },
  idPrefix: "all",
  items: [
    {
      name: "vaccines-all",
      value: "all",
      text: "All 9 vaccines",
      behaviour: "inclusive",
      behaviourGroup: "vaccines-included"
    },
    {
      divider: "or",
      behaviour: "inclusive"
    },
    {
      name: "vaccines-4in1",
      value: "4in1",
      text: "4-in-1 pre-school booster",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-6in1",
      value: "6in1",
      text: "6-in-1",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-hpv",
      value: "hpv",
      text: "HPV",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-menb",
      value: "menb",
      text: "MenB",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-menacwy",
      value: "menacwy",
      text: "MenACWY",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-mmrv",
      value: "mmrv",
      text: "MMRV",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-rotavirus",
      value: "rotavirus",
      text: "Rotavirus",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-pneumococcal",
      value: "pneumococcal",
      text: "Pneumococcal",
      behaviourGroup: "vaccines-included"
    },
    {
      name: "vaccines-tdipv",
      value: "tdipv",
      text: "Td/IPV",
      behaviourGroup: "vaccines-included"
    }
  ]
}) }}
```

#### with "none" option

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

#### with "none" option, deprecated

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
      exclusive: true
    }
  ]
}) }}
```

#### with "none" option, conditional content

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

#### with "none" option (named group)

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
      text: "I do not want to be contacted",
      behaviour: "exclusive",
      exclusiveGroup: "communication-preferences"
    }
  ]
}) }}
```

#### with "none" option (named group, unique)

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
      text: "I do not want to be contacted",
      behaviour: "exclusive",
      exclusiveGroup: "communication-preferences"
    }
  ]
}) }}
```

---

## Code

[↑ Back to top](#table-of-contents)

**Macro name:** `code`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the code component. |
| `text` | string | ✓ | If `html` is set, this is not required. Text for the code element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML for the code element. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire code component in a `call` block. |
| `classes` | string |  | Classes to add to the code container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the code container. |
| `copyButtonClassList` | array |  | Classes to add to the button. Default is `["nhsuk-button--secondary", "nhsuk-button--small"]`. |
| `copyButtonText` | string |  | Button text before the code is copied to clipboard. Defaults to `"Copy code"`. |
| `copiedButtonText` | string |  | Button text when the code is copied to clipboard. Defaults to `"Code copied"`. |
| `copiedAnnouncementText` | string |  | Announcement made to screen reader users when the code is copied to clipboard. Defaults to `"Code copied to clipboard"`. |
| `button` | object |  | Optional object allowing customisation of the copy button. The `button.attributes`, `button.html`, `button.small` and `button.variant` options are not supported. *(accepts nested component params)* |
| `button.classes` | string |  | Classes to add to the button. |
| `variant` | string |  | Optional variant of code. You can use only `"reverse"` or empty values with this option. |
| `background` | string |  | Optional background colour for the code element – `"body"` or `"template"`. |
| `border` | boolean |  | If set to `false`, remove border from the code container. |

### Examples

#### default

```njk
{{ code({
  text: "This is a plain text code block"
}) }}
```

#### button

```njk
{{ code({
  text: "This is a plain text code block",
  button: true
}) }}
```

#### with button double click prevented

```njk
{{ code({
  text: "This is a plain text code block",
  button: {
    preventDoubleClick: true
  }
}) }}
```

#### with button double click not prevented

```njk
{{ code({
  text: "This is a plain text code block",
  button: {
    preventDoubleClick: false
  }
}) }}
```

#### without border

```njk
{{ code({
  text: "This is a plain text code block",
  border: false
}) }}
```

#### with custom HTML

```njk
{{ code({
  html: "&lt;p&gt;This is an HTML code block.&lt;/p&gt;"
}) }}
```

#### with custom HTML and button

```njk
{{ code({
  html: "&lt;p&gt;This is an HTML code block.&lt;/p&gt;",
  button: true
}) }}
```

#### with custom HTML (escaped) and button

```njk
{% call code({
  button: true
}) %}
&lt;p&gt;This is an HTML code block.&lt;/p&gt;
{%- endcall %}
```

#### with scroll overflow

```njk
{{ code({
  text: "Supercalifragilisticexpialidocious! Even though the sound of it is something quite atrocious, if you say it loud enough, you'll always sound precocious!"
}) }}
```

#### with scroll overflow and button

```njk
{{ code({
  text: "Supercalifragilisticexpialidocious! Even though the sound of it is something quite atrocious, if you say it loud enough, you'll always sound precocious!",
  button: true
}) }}
```

#### with translations

```njk
{{ code({
  html: "&lt;p&gt;Bloc cod HTML yw hwn.&lt;/p&gt;",
  button: true,
  copyButtonText: "Copïo cod",
  copiedButtonText: "Cod wedi'i gopïo",
  copiedAnnouncementText: "Cod wedi'i gopïo i'r clipfwrdd"
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
| `items` | array | ✓ | Array of contents list items objects. |
| `items.href` | string | ✓ | The contents list item `href` attribute. Required unless `item.current` is set. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each contents list item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each contents list item. If `html` is provided, the `text` option will be ignored. |
| `items.classes` | string |  | Classes to add to the contents list item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the contents list item. |
| `classes` | string |  | Classes to add to the contents list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the contents list container. |
| `landmarkLabel` | string |  | Replaced by the `ariaLabel` option. |
| `ariaLabel` | string |  | The accessible name for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`. |
| `visuallyHiddenText` | string |  | Visually hidden heading for the contents list items. Defaults to `"Contents"`. |

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

#### with nested lists

```njk
{{ contentsList({
  items: [
    {
      href: "#",
      text: "Chapter 1"
    },
    {
      href: "#",
      text: "Chapter 2",
      items: [
        {
          href: "#",
          text: "Section 2.1"
        },
        {
          href: "#",
          text: "Section 2.2"
        }
      ]
    },
    {
      href: "#",
      text: "Chapter 3"
    }
  ]
}) }}
```

#### with visually hidden text

```njk
{{ contentsList({
  visuallyHiddenText: "Table of contents",
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

---

## Date input

[↑ Back to top](#table-of-contents)

**Macro name:** `dateInput`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✓ | This is used for the main component and to compose the `id` attribute for each item. |
| `namePrefix` | string |  | Optional prefix. This is used to prefix each date input `name` attribute, wrapped in `[` and `]` – for example, `namePrefix: "dob"` will output the `name` attributes `dob[day]`, `dob[month]` and `dob[year]` respectively. |
| `items` | array |  | The inputs within the date input component. The `input.errorMessage` and `input.hint` options are not supported. *(accepts nested component params)* |
| `items.name` | string | ✓ | Item-specific `name` attribute. Defaults to `"day"`, `"month"` or `"year"`. |
| `items.label` | object |  | Item-specific label. The `label.size` and `label.heading` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params)* |
| `items.error` | boolean |  | If set to `true`, show a red border on the item input. |
| `hint` | object |  | Can be used to add a hint to the date input component. *(accepts nested component params)* |
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
| `fieldset` | object |  | Can be used to add a fieldset to the date input component. The `fieldset.html` option is not supported. *(accepts nested component params)* |
| `day` | object |  | Can be used to customise the day input within the date input component. The `input.formGroup` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `day.name` | string |  | The `name` attribute for the day input. Defaults to `"day"`. |
| `day.value` | string |  | The `value` attribute for the day input. |
| `day.label` | object |  | The label used by the day input. The `label.size` and `label.heading` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params)* |
| `day.error` | boolean |  | If set to `true`, show a red border on the day input. |
| `month` | object |  | Can be used to customise the month input within the date input component. The `input.formGroup` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `month.name` | string |  | The `name` attribute for the month input. Defaults to `"month"`. |
| `month.value` | string |  | The `value` attribute for the month input. |
| `month.label` | object |  | The label used by the month input. The `label.size` and `label.heading` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params)* |
| `month.error` | boolean |  | If set to `true`, show a red border on the month input. |
| `year` | object |  | Can be used to customise the year input within the date input component. The `input.formGroup` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `year.name` | string |  | The `name` attribute for the year input. Defaults to `"year"`. |
| `year.value` | string |  | The `value` attribute for the year input. |
| `year.label` | object |  | The label used by the year input. The `label.size` and `label.heading` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params)* |
| `year.error` | boolean |  | If set to `true`, show a red border on the year input. |
| `values` | object |  | An optional object used to specify `value` attributes for the inputs within the date input component without setting `items`. |
| `values.day` | string |  | The `value` attribute for the day input. |
| `values.month` | string |  | The `value` attribute for the month input. |
| `values.year` | string |  | The `value` attribute for the year input. |
| `disabled` | boolean |  | If `true`, inputs used by the date input component will be disabled. |
| `classes` | string |  | Classes to add to the date input container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the date input container. |

### Examples

#### default

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example"
}) }}
```

#### disabled

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  disabled: true
}) }}
```

#### disabled with enabled input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  disabled: true,
  year: {
    disabled: false
  }
}) }}
```

#### disabled input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  year: {
    disabled: true
  }
}) }}
```

#### disabled input (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2
    },
    {
      name: "month",
      width: 2
    },
    {
      name: "year",
      width: 4,
      disabled: true
    }
  ]
}) }}
```

#### with translations

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "Beth yw eich dyddiad geni?",
      size: "l"
    }
  },
  hint: {
    text: "Er enghraifft, 31 3 1980"
  },
  id: "example",
  day: {
    label: "Dydd"
  },
  month: {
    label: "Mis"
  },
  year: {
    label: "Blwyddyn"
  }
}) }}
```

#### with values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
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
      heading: "What is your birthday?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  year: false
}) }}
```

#### day and month (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your birthday?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2
    },
    {
      name: "month",
      width: 2
    }
  ]
}) }}
```

#### day and month (with empty item)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your birthday?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2
    },
    {
      name: "month",
      width: 2
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
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false
}) }}
```

#### month and year (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  items: [
    {
      name: "month",
      width: 2
    },
    {
      name: "year",
      width: 4
    }
  ]
}) }}
```

#### month and year (with empty item)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
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
      width: 2
    },
    {
      name: "year",
      width: 4
    }
  ]
}) }}
```

#### month and year with fields

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false,
  month: {
    value: "11"
  },
  year: {
    value: "2023"
  }
}) }}
```

#### month and year with fields overriding values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false,
  month: {
    value: "11"
  },
  year: {
    value: "2023"
  },
  values: {
    month: "8",
    year: "2024"
  }
}) }}
```

#### month and year with values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false,
  values: {
    month: "8",
    year: "2024"
  }
}) }}
```

#### legend

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "custom-size"
}) }}
```

#### without heading

```njk
{{ dateInput({
  fieldset: {
    legend: "What is your date of birth?"
  },
  id: "example"
}) }}
```

#### with autocomplete values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  day: {
    autocomplete: "bday-day"
  },
  month: {
    autocomplete: "bday-month"
  },
  year: {
    autocomplete: "bday-year"
  }
}) }}
```

#### with autocomplete values (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      autocomplete: "bday-day"
    },
    {
      name: "month",
      width: 2,
      autocomplete: "bday-month"
    },
    {
      name: "year",
      width: 4,
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
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "example",
  namePrefix: "example"
}) }}
```

#### with error only

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  errorMessage: true,
  id: "example"
}) }}
```

#### with error message

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

#### with error message and hint

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

#### with error message and hint as strings

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: "For example, 31 3 1980",
  errorMessage: "Enter your date of birth",
  id: "example"
}) }}
```

#### with error message, without heading

```njk
{{ dateInput({
  fieldset: {
    legend: "What is your date of birth?"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

#### with error message and hint, without heading

```njk
{{ dateInput({
  fieldset: {
    legend: "What is your date of birth?"
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

#### with errors only

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  id: "example",
  day: {
    error: true
  },
  month: {
    error: true
  },
  year: {
    error: true
  }
}) }}
```

#### with errors only (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      error: true
    },
    {
      name: "month",
      width: 2,
      error: true
    },
    {
      name: "year",
      width: 4,
      error: true
    }
  ]
}) }}
```

#### with error on day input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a day"
  },
  id: "example",
  day: {
    error: true
  },
  month: {
    value: "3"
  },
  year: {
    value: "1980"
  }
}) }}
```

#### with error on day input (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
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
      width: 2,
      error: true
    },
    {
      name: "month",
      value: "3",
      width: 2
    },
    {
      name: "year",
      value: "1980",
      width: 4
    }
  ]
}) }}
```

#### with error on month input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
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
      width: 2,
      value: "31"
    },
    {
      name: "month",
      width: 2,
      error: true
    },
    {
      name: "year",
      width: 4,
      value: "1980"
    }
  ]
}) }}
```

#### with error on month input (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a month"
  },
  id: "example",
  day: {
    value: "31"
  },
  month: {
    error: true
  },
  year: {
    value: "1980"
  }
}) }}
```

#### with error on year input

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a year"
  },
  id: "example",
  day: {
    value: "31"
  },
  month: {
    value: "3"
  },
  year: {
    error: true
  }
}) }}
```

#### with error on year input (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
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
      width: 2,
      value: "31"
    },
    {
      name: "month",
      width: 2,
      value: "3"
    },
    {
      name: "year",
      width: 4,
      error: true
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
| `summary` | object |  | Summary element content (the visible part of the details element). |
| `summary.text` | string | ✓ | If `html` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `html` is provided, the `text` option will be ignored. |
| `summary.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `html` is provided, the `text` option will be ignored. |
| `summary.classes` | string |  | Classes to add to the summary element. |
| `summary.attributes` | object |  | HTML attributes (for example data attributes) to add to the summary element. |
| `summaryText` | string | ✓ | Replaced by the `summary.text` option. |
| `summaryHtml` | string | ✓ | Replaced by the `summary.html` option. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | The `id` to add to the details element. |
| `open` | boolean |  | If `true`, details element will be expanded. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire details component in a `call` block. |
| `variant` | string |  | Optional variant of details. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the details element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the details element. |

### Examples

#### default

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you."
}) }}
```

#### open

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
  open: true
}) }}
```

#### closed explicitly

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
  open: false
}) }}
```

#### with HTML

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  html: '<p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>\n<p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>\n<ul>\n  <li>prescriptions</li>\n  <li>test results</li>\n  <li>hospital referral letters</li>\n  <li>appointment letters</li>\n</ul>\n<p>Ask your GP surgery for help if you cannot find your NHS number.</p>'
}) }}
```

#### with HTML via call block

```njk
{% call details({
  summary: {
    text: "How to find your NHS number"
  }
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
{%- endcall %}
```

#### with summary HTML

```njk
{{ details({
  summary: {
    html: "How to find your <span>NHS number</span>"
  },
  text: "An NHS number is a 10 digit number, like 999 123 4567"
}) }}
```

#### with summary as string

```njk
{{ details({
  summary: "How to find your NHS number",
  text: "An NHS number is a 10 digit number, like 999 123 4567"
}) }}
```

#### expander

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  text: "We are open 9am to 6pm, Monday to Saturday.",
  classes: "nhsuk-expander"
}) }}
```

#### expander open

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  text: "We are open 9am to 6pm, Monday to Saturday.",
  classes: "nhsuk-expander",
  open: true
}) }}
```

#### expander closed explicitly

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  text: "We are open 9am to 6pm, Monday to Saturday.",
  classes: "nhsuk-expander",
  open: false
}) }}
```

#### expander with HTML

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  html: '\n<table class="nhsuk-table nhsuk-table--no-last-row-border">\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Day of the week\n      </th>\n      <th class="nhsuk-table__header" scope="col">\n        Opening hours\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Monday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Tuesday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Wednesday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Thursday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Friday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Saturday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 1pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Sunday\n      </th>\n      <td class="nhsuk-table__cell">\n        Closed\n      </td>\n    </tr>\n  </tbody>\n</table>\n',
  classes: "nhsuk-expander"
}) }}
```

#### expander with HTML via call block

```njk
{% call details({
  summary: {
    text: "Opening times"
  },
  classes: "nhsuk-expander"
}) %}
<table class="nhsuk-table nhsuk-table--no-last-row-border">
  <thead class="nhsuk-table__head">
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="col">
        Day of the week
      </th>
      <th class="nhsuk-table__header" scope="col">
        Opening hours
      </th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Monday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Tuesday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Wednesday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Thursday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Friday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Saturday
      </th>
      <td class="nhsuk-table__cell">
        9am to 1pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Sunday
      </th>
      <td class="nhsuk-table__cell">
        Closed
      </td>
    </tr>
  </tbody>
</table>
{%- endcall %}
```

---

## Do and Don't list

[↑ Back to top](#table-of-contents)

**Macro name:** `list`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the do and don't list component. |
| `title` | string | ✓ | Replaced by the `heading.text` option. |
| `heading` | object | ✓ | Heading to be displayed on the do and don't list component. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.level` | integer |  | Optional heading level. Defaults to `3`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingLevel` | integer |  | Replaced by the `heading.level` option. |
| `icon` | string |  | Optional icon modifier for the do and don't list items – `"cross"` or `"tick"`. Defaults to `"tick"`. |
| `type` | string | ✓ | Replaced by the `icon` option. |
| `items` | array | ✓ | Array of do and don't items objects. |
| `items.item` | string | ✓ | Replaced by the `item.text` and `item.html` options. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `prefixText` | string |  | Optional prefix text used before each do and don't item. Defaults to `"do not"` when `type` is `"cross"`. |
| `hidePrefix` | boolean |  | If set to `true`, the optional `prefixText` will be removed from each do and don't item. |
| `classes` | string |  | Classes to add to the do and don't list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the do and don't list container. |

### Examples

#### default

```njk
{{ list({
  heading: {
    text: "Do"
  },
  icon: "tick",
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

#### with heading as string

```njk
{{ list({
  heading: "Do",
  icon: "tick",
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

#### with heading level 1

```njk
{{ list({
  heading: {
    text: "Do",
    level: 1
  },
  icon: "tick",
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

#### with heading level 2

```njk
{{ list({
  heading: {
    text: "Do",
    level: 2
  },
  icon: "tick",
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
  heading: {
    text: "Do"
  },
  icon: "tick",
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

#### (do) with deprecated options

```njk
{{ list({
  title: "Do",
  icon: "tick",
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
  heading: {
    text: "Do"
  },
  icon: "tick",
  prefixText: "always",
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

#### (don't)

```njk
{{ list({
  heading: {
    text: "Don't"
  },
  icon: "cross",
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
  heading: {
    text: "Don't"
  },
  icon: "cross",
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
    false
  ]
}) }}
```

#### (don't) with deprecated options

```njk
{{ list({
  title: "Don't",
  icon: "cross",
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
  heading: {
    text: "Never"
  },
  icon: "cross",
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
  heading: {
    text: "Don't"
  },
  icon: "cross",
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
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire error message component in a `call` block. |
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

#### with text escaping

```njk
{{ errorMessage({
  text: "Postcode must not include & and <"
}) }}
```

#### with HTML

```njk
{{ errorMessage({
  html: "Postcode must not include &amp; and &lt;"
}) }}
```

#### with HTML via call block

```njk
{% call errorMessage() %}
Postcode must not include &amp; and &lt;
{%- endcall %}
```

#### with translations

```njk
{{ errorMessage({
  text: "Rhowch eich enw llawn",
  visuallyHiddenText: "Gwall"
}) }}
```

#### without visually hidden text

```njk
{{ errorMessage({
  text: "There is an error on line 42",
  visuallyHiddenText: ""
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
| `heading` | object | ✓ | Heading of the error summary component. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `titleText` | string | ✓ | Replaced by the `heading.text` option. |
| `titleHtml` | string | ✓ | Replaced by the `heading.html` option. |
| `description` | object |  | Description of the errors. |
| `description.text` | string | ✓ | If `html` is set, this is not required. Text to use for the description of the errors. If `html` is provided, the `text` option will be ignored. |
| `description.html` | string | ✓ | If `text` is set, this is not required. HTML to use for the description of the errors. If `html` is provided, the `text` option will be ignored. |
| `description.classes` | string |  | Classes to add to the error summary body. |
| `description.attributes` | object |  | HTML attributes (for example data attributes) to add to the error summary body. |
| `descriptionText` | string |  | Replaced by the `description.text` option. |
| `descriptionHtml` | string |  | Replaced by the `description.html` option. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array |  | A list of errors to include in the error summary. |
| `errorList.href` | string |  | The error `href` attribute. If set, the error will become a link. |
| `errorList.text` | string | ✓ | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.html` | string | ✓ | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.attributes` | object |  | HTML attributes (for example data attributes) to add to the error link. |
| `disableAutoFocus` | boolean |  | Prevent moving focus to the error summary when the page loads. |
| `classes` | string |  | Classes to add to the error-summary container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error-summary container. |

### Examples

#### default

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
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
  heading: {
    text: "There is a problem"
  },
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
  heading: {
    text: "There is a problem"
  },
  errorList: [
    {
      text: "Enter your first name",
      href: "#example-first-name"
    },
    false
  ]
}) }}
```

#### with heading as string

```njk
{{ errorSummary({
  heading: "There is a problem",
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### with heading HTML

```njk
{{ errorSummary({
  heading: {
    html: "There is a <span>problem</span>"
  },
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### with description

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
  description: {
    text: "Describe the errors and how to correct them"
  },
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### with description as string

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
  description: "Describe the errors and how to correct them",
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### with description HTML

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
  description: {
    html: "Describe the errors and <span>how to correct them</span>"
  },
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) }}
```

#### with description via call block

```njk
{% call errorSummary({
  heading: {
    text: "There is a problem"
  },
  errorList: [
    {
      text: "Date of birth must be in the past",
      href: "#example-day"
    }
  ]
}) %}
Describe the errors and <span>how to correct them</span>
{%- endcall %}
```

#### with description only

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
  description: {
    text: "Describe the errors and how to correct them"
  }
}) }}
```

#### without error link

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
  errorList: [
    {
      text: "Invalid username or password"
    }
  ]
}) }}
```

#### without error link (mixed)

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
  errorList: [
    {
      text: "Invalid username or password"
    },
    {
      text: "Agree to the terms of service to log in",
      href: "#example-terms-of-service"
    }
  ]
}) }}
```

#### auto-focus disabled

```njk
{{ errorSummary({
  heading: {
    text: "There is a problem"
  },
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
  heading: {
    text: "There is a problem"
  },
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
| `html` | string |  | HTML to use within the fieldset element. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire fieldset component in a `call` block. |

### Examples

#### default

```njk
{{ fieldset({
  legend: {
    heading: "What is your address?",
    size: "l"
  }
}) }}
```

#### with HTML

```njk
{{ fieldset({
  legend: {
    caption: "About you",
    heading: "What is your address?",
    size: "l"
  },
  html: '<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-line1">\n    Address line 1\n  </label>\n  <input class="nhsuk-input" id="address-line1" name="address-line1" type="text" autocomplete="address-line1">\n</div>\n\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-line2">\n    Address line 2 (optional)\n  </label>\n  <input class="nhsuk-input" id="address-line2" name="address-line2" type="text" autocomplete="address-line2">\n</div>\n\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-town">\n    Town or city\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="address-town" name="address-town" type="text" autocomplete="address-level2">\n</div>\n\n<div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="address-postcode">\n    Postcode\n  </label>\n  <input class="nhsuk-input nhsuk-input--width-10" id="address-postcode" name="address-postcode" type="text" autocomplete="postal-code">\n</div>\n'
}) }}
```

#### with HTML via call block

```njk
{% call fieldset({
  legend: {
    caption: "About you",
    heading: "What is your address?",
    size: "l"
  }
}) %}
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-line1">
    Address line 1
  </label>
  <input class="nhsuk-input" id="address-line1" name="address-line1" type="text" autocomplete="address-line1">
</div>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-line2">
    Address line 2 (optional)
  </label>
  <input class="nhsuk-input" id="address-line2" name="address-line2" type="text" autocomplete="address-line2">
</div>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-town">
    Town or city
  </label>
  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="address-town" name="address-town" type="text" autocomplete="address-level2">
</div>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="address-postcode">
    Postcode
  </label>
  <input class="nhsuk-input nhsuk-input--width-10" id="address-postcode" name="address-postcode" type="text" autocomplete="postal-code">
</div>
{%- endcall %}
```

#### without legend heading

```njk
{{ fieldset({
  legend: "What is your address?"
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
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### disabled

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  disabled: true
}) }}
```

#### with hint

```njk
{{ fileUpload({
  label: {
    heading: "Upload your photo",
    size: "l"
  },
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with error only

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  errorMessage: true,
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with error message

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with error message and hint

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
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

#### with error message and hint as strings

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  hint: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder",
  errorMessage: "The selected file must be a JPG, BMP or TIF"
}) }}
```

#### with error message, without heading

```njk
{{ fileUpload({
  label: {
    text: "Upload a file"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with error message and hint, without heading

```njk
{{ fileUpload({
  label: {
    text: "Upload a file"
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
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### button

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### without heading

```njk
{{ fileUpload({
  label: "Upload a file",
  id: "file-upload",
  name: "file-upload"
}) }}
```

#### with multiple

```njk
{{ fileUpload({
  label: {
    heading: "Upload multiple files",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  multiple: true,
  chooseFilesButtonText: "Choose files",
  dropInstructionText: "or drop files",
  noFileChosenText: "No files chosen"
}) }}
```

#### with translations

```njk
{{ fileUpload({
  label: {
    heading: "Llwythwch ffeil i fyny",
    size: "l"
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
    heading: "Upload a file",
    size: "l"
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
| `navigation.heading` | object |  | Heading for group of footer navigation links. *(accepts nested component params)* |
| `navigation.heading.id` | string |  | The ID of the heading. |
| `navigation.heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `navigation.heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `navigation.heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `navigation.heading.href` | string |  | If set, the heading will become a link. |
| `navigation.heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params)* |
| `navigation.heading.classes` | string |  | Classes to add to the heading. |
| `navigation.heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `navigation.title` | string |  | Replaced by the `navigation.heading.text` option. |
| `navigation.text` | string |  | Optional text to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.html` | string |  | Optional HTML to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.width` | string |  | Width of each navigation section column in the footer. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-quarter"`. |
| `navigation.items` | array |  | Contains the array of footer navigation link items for this group. |
| `navigation.items.href` | string | ✓ | Footer navigation link `href` attribute. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the footer navigation link. |
| `meta` | object |  | The meta section of the footer after any navigation, before the copyright information. |
| `meta.visuallyHiddenText` | string |  | Visually hidden heading for meta `items` links. Defaults to `"Support links"`. |
| `meta.visuallyHiddenTitle` | string |  | Replaced by the `meta.visuallyHiddenText` option. |
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
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire footer component in a `call` block. |
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

#### with copyright text string

```njk
{{ footer({
  copyright: "© East London NHS Foundation Trust"
}) }}
```

#### with custom copyright text

```njk
{{ footer({
  copyright: {
    text: "© East London NHS Foundation Trust"
  }
}) }}
```

#### with meta text

```njk
{{ footer({
  meta: {
    text: "NHS prototype kit v8.0.0"
  }
}) }}
```

#### with meta text string

```njk
{{ footer({
  meta: "NHS prototype kit v8.0.0"
}) }}
```

#### with meta HTML

```njk
{{ footer({
  meta: {
    html: '<p class="nhsuk-body-s">NHS prototype kit v8.0.0</p>'
  }
}) }}
```

#### with meta HTML via call block

```njk
{% call footer() %}
<p class="nhsuk-body-s">NHS prototype kit v8.0.0</p>
{%- endcall %}
```

#### with meta links

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

#### with meta links and text

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

#### with meta links and HTML

```njk
{{ footer({
  copyright: {
    text: ""
  },
  meta: {
    html: '<p class="nhsuk-body-s">All content is available under the Open Government Licence v3.0, except where otherwise stated.</p>\n<p class="nhsuk-body-s">© Custom copyright</p>',
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
      html: '<p class="nhsuk-body-s nhsuk-u-margin-bottom-6"><strong>Manchester\nUniversity NHS Foundation Trust (MFT)</strong> was formed on 1st\nOctober 2017 following the merger of Central Manchester University\nHospitals NHS Foundation Trust (CMFT) and University Hospital of\nSouth Manchester NHS Foundation Trust (UHSM).</p>'
    },
    {
      width: "full",
      html: '<p class="nhsuk-body-s">Cobbett House, Manchester University NHS\nFoundation Trust, Oxford Road, Manchester, M13 9WL</p>'
    }
  ]
}) }}
```

#### with multiple navigation groups and headings

```njk
{{ footer({
  navigation: [
    {
      heading: {
        text: "Legal"
      },
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
      heading: {
        text: "Get in touch"
      },
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
      heading: {
        text: "Follow us"
      },
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

#### with multiple navigation groups and headings as strings

```njk
{{ footer({
  navigation: [
    {
      heading: "Legal",
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
      heading: "Get in touch",
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
      heading: "Follow us",
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
    html: '<p class="nhsuk-body-s">\n  <svg class="nhsuk-u-static-margin-right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 17" aria-hidden="true" focusable="false" height="17" width="41">\n    <path fill="currentColor" d="M35.77 12.4V.02l-4.3 2.8V16.8H41v-4.4Zm-10.38-.83a3.93 3.93 0 0 1-4.29.64 4.09 4.09 0 0 1-2.35-3.71 3.97 3.97 0 0 1 7.36-2.2l3.63-2.35A8.25 8.25 0 0 0 22.75.02c-3.1 0-5.8 1.74-7.22 4.3A8.3 8.3 0 0 0 8.3.02 8.4 8.4 0 0 0 0 8.5a8.4 8.4 0 0 0 8.3 8.48c3.1 0 5.8-1.75 7.22-4.32a8.17 8.17 0 0 0 12.7 2.2l1.64 1.93h.25V9.18h-6.79Zm-17.1 1.02A4.04 4.04 0 0 1 4.3 8.5c0-2.25 1.8-4.08 4-4.08s4 1.82 4 4.08c0 2.25-1.8 4.09-4 4.09"/>\n  </svg>\n  All content is available under the <a class="nhsuk-footer__list-item-link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated.\n</p>',
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
| `inline` | boolean |  | If set to `true`, positions the search box (or account links) inline with the NHS logo. |
| `organisation` | object |  | Settings for header with organisational logo. |
| `organisation.name` | string |  | Organisation name. |
| `organisation.split` | string |  | Longer organisation names can be split onto multiple lines. |
| `organisation.descriptor` | string |  | Organisation descriptor. |
| `navigation` | object |  | Object containing settings for the primary navigation. |
| `navigation.items` | array |  | Array of navigation links for use in the header. |
| `navigation.items.href` | string |  | The href of a navigation item in the header. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.current` | boolean |  | Set to `true` if this links to the current page being shown. |
| `navigation.items.active` | boolean |  | Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page |
| `navigation.items.classes` | string |  | Classes to add to the list item containing the link. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the list item containing the link. |
| `navigation.ariaLabel` | string |  | The `aria-label` for the primary navigation. Defaults to `"Menu"`. |
| `navigation.toggleMenuText` | string |  | Text for the toggle menu button. Defaults to `"More"`. |
| `navigation.toggleMenuVisuallyHiddenText` | string |  | A visually hidden prefix used before the toggle menu button text. Defaults to `"Browse"`. |
| `navigation.classes` | string |  | Classes to add to the primary navigation. |
| `navigation.attributes` | object |  | HTML attributes (for example data attributes) to add to the primary navigation. |
| `navigation.justified` | boolean |  | If set to `true`, use justified alignment where navigation items appeared evenly spaced out. |
| `navigation.colour` | string |  | Optional colour modifier for the primary navigation. You can use only `"white"` or empty values with this option. |
| `search` | object |  | Object containing settings for a search box. |
| `search.action` | string |  | The search form `action` attribute. Defaults to `"https://www.nhs.uk/search"`. |
| `search.method` | string |  | The search form `method` attribute. Defaults to `"get"`. |
| `search.name` | string |  | The `name` attribute for the search input. Defaults to `"q"`. |
| `search.placeholder` | string |  | Replaced by the `search.input.placeholder` option. |
| `search.visuallyHiddenLabel` | string |  | Replaced by the `search.label.visuallyHiddenText` option. |
| `search.visuallyHiddenButton` | string |  | Replaced by the `search.button.ariaLabel` option. |
| `search.label` | object |  | Optional object allowing customisation of the search input label. *(accepts nested component params)* |
| `search.label.visuallyHiddenText` | string |  | The visually hidden label text for the search input. Defaults to `"Search the NHS website"`. |
| `search.input` | object |  | Optional object allowing customisation of the search input. *(accepts nested component params)* |
| `search.input.placeholder` | string |  | The placeholder text for the search input. Defaults to `"Search"`. |
| `search.button` | object |  | Optional object allowing customisation of the search button. *(accepts nested component params)* |
| `search.button.ariaLabel` | string |  | Search button text exposed to assistive technologies, like screen readers, when only an icon is used. Defaults to `"Search"`. |
| `search.classes` | string |  | Classes to add to the search element. |
| `search.attributes` | object |  | HTML attributes (for example data attributes) to add to the search element. |
| `account` | object |  | Object containing settings for the account section of the header. |
| `account.items` | array |  | Array of account items for use in the header. |
| `account.items.href` | string |  | The href of an account item in the header. |
| `account.items.text` | string | ✓ | If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` option will be ignored. |
| `account.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` option will be ignored. |
| `account.items.icon` | boolean |  | Whether to include the account icon for the account item. Defaults to `false`. |
| `account.items.action` | string |  | If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons. |
| `account.items.method` | string |  | The value to use for the `method` of the form if `action` is set. Defaults to `"post"`. |
| `account.items.classes` | string |  | Classes to add to the list item containing the account item. |
| `account.ariaLabel` | string |  | The `aria-label` for the account navigation. Defaults to `"Account"`. |
| `account.classes` | string |  | Classes to add to the account navigation. |
| `account.attributes` | object |  | HTML attributes (for example data attributes) to add to the account navigation. |
| `containerClasses` | string |  | Classes to add to the header container, useful if you want to make the header fixed width. |
| `classes` | string |  | Classes to add to the header container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the header container. |
| `colour` | string |  | Optional colour modifier for the header. You can use only `"white"` or empty values with this option. |

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
    input: {
      placeholder: "Search"
    },
    label: {
      visuallyHiddenText: "Search the NHS digital service manual"
    }
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

#### with account inline (logged in)

```njk
{{ header({
  inline: true,
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

#### with account inline (logged out)

```njk
{{ header({
  inline: true,
  logo: {
    href: "#"
  },
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

#### with navigation (unlinked item)

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
        text: "Pregnancy",
        current: true
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
    justified: true,
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
  service: {
    text: "Digital service manual",
    href: "#"
  },
  search: {
    input: {
      placeholder: "Search"
    },
    label: {
      visuallyHiddenText: "Search the NHS digital service manual"
    }
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
  service: {
    text: "Digital service manual",
    href: "#"
  },
  search: {
    input: {
      placeholder: "Search"
    },
    label: {
      visuallyHiddenText: "Search the NHS digital service manual"
    }
  },
  navigation: {
    colour: "white",
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

#### with search inline

```njk
{{ header({
  inline: true,
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

#### with service name as separate link

```njk
{{ header({
  logo: {
    href: "#/logo"
  },
  service: {
    text: "Find your NHS number",
    href: "#/service"
  }
}) }}
```

#### with service name, account inline (logged in)

```njk
{{ header({
  inline: true,
  service: {
    text: "Get a self-test kit for HIV",
    href: "#"
  },
  account: {
    items: [
      {
        action: "#",
        text: "Log out"
      }
    ]
  }
}) }}
```

#### with service name, account inline (logged out)

```njk
{{ header({
  inline: true,
  service: {
    text: "Get a self-test kit for HIV",
    href: "#"
  },
  account: {
    items: [
      {
        action: "#",
        text: "Log in"
      }
    ]
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

#### with service name (linked with logo, empty)

```njk
{{ header({
  service: {
    text: null,
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
    input: {
      placeholder: "Name or NHS number"
    },
    label: {
      visuallyHiddenText: "Search patients by name or NHS number"
    }
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
    input: {
      placeholder: "Name or NHS number"
    },
    label: {
      visuallyHiddenText: "Search patients by name or NHS number"
    }
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
    label: {
      visuallyHiddenText: "Search the Anytown Anyplace Anywhere website"
    }
  }
}) }}
```

#### white linked logo, ARIA label

```njk
{{ header({
  colour: "white",
  logo: {
    ariaLabel: "NHS white homepage",
    href: "#"
  }
}) }}
```

#### white linked logo, custom

```njk
{{ header({
  colour: "white",
  logo: {
    href: "#",
    src: "/nhsuk-frontend/assets/example-logo.svg",
    alt: "Great Ormond Street Hospital for Children, NHS Foundation Trust"
  }
}) }}
```

---

## Heading

[↑ Back to top](#table-of-contents)

**Macro name:** `heading`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the heading. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire heading component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `href` | string |  | If set, the heading will become a link. |
| `caption` | object |  | Optional caption for the heading. *(accepts nested component params)* |
| `size` | string |  | Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `sizes` | array |  | Allowed sizes for the heading – Defaults to `["xxs", "xs", "s", "m", "l", "xl"]`. |
| `level` | integer |  | Optional heading level. Defaults to `1`. |
| `className` | string |  | Optional class to use for the heading. Defaults to `"nhsuk-heading"`. |
| `classPrefix` | string |  | Optional class prefix to use for the heading. Defaults to `"nhsuk-heading-"`. |
| `classes` | string |  | Classes to add to the heading. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `element` | string |  | HTML element for the heading component – for example, `"caption"`. Defaults to the `level` option prefixed with `"h"`. |

### Examples

#### default

```njk
{{ heading({
  text: "What is your full name?",
  size: "l"
}) }}
```

#### text

```njk
{{ heading({
  text: "What is your full name?",
  size: "l"
}) }}
```

#### text and caption

```njk
{{ heading({
  text: "What is your home address?",
  caption: "About you",
  size: "l"
}) }}
```

#### text and caption "before"

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "before"
  },
  size: "l"
}) }}
```

#### text and caption "before" as a heading

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "before",
    element: "h2"
  },
  size: "l"
}) }}
```

#### text and caption "after"

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after"
  },
  size: "l"
}) }}
```

#### text and caption "after" as a paragraph

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "l"
}) }}
```

#### text and caption "start"

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "start"
  },
  size: "l"
}) }}
```

#### text and caption "end"

```njk
{{ heading({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "end"
  },
  size: "l"
}) }}
```

#### size class

```njk
{{ heading({
  text: "What is your full name?",
  classes: "nhsuk-heading-l"
}) }}
```

#### size class overriding size option

```njk
{{ heading({
  text: "What is your full name?",
  classes: "nhsuk-heading-l",
  size: "s"
}) }}
```

#### with link

```njk
{{ heading({
  text: "Skin colour changes",
  href: "#/result/1",
  size: "l"
}) }}
```

#### with link and caption

```njk
{{ heading({
  text: "Skin colour changes",
  caption: "A to Z of NHS health writing",
  href: "#/result/1",
  size: "l"
}) }}
```

#### with visually hidden text

```njk
{{ heading({
  text: "Home address",
  visuallyHiddenText: "(Karen Francis)",
  size: "l"
}) }}
```

#### with visually hidden text and caption

```njk
{{ heading({
  text: "Home address",
  visuallyHiddenText: "(Karen Francis)",
  caption: "About you",
  size: "l"
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
| `content` | object |  | The content section of the hero. Alternatively supports an array of `content` objects. |
| `content.heading` | object |  | Optional heading for content column. *(accepts nested component params)* |
| `content.heading.id` | string |  | The ID of the heading. |
| `content.heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `content.heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `content.heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `content.heading.href` | string |  | If set, the heading will become a link. |
| `content.heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params)* |
| `content.heading.size` | string |  | Size of the heading – `"m"`, `"l"` or `"xl"`. Defaults to `"xl"`. |
| `content.heading.level` | integer |  | Optional heading level. Defaults to `1`. |
| `content.heading.classes` | string |  | Classes to add to the heading. |
| `content.heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `content.text` | string |  | Optional text to use within each content column. If `html` is provided, the `text` option will be ignored. |
| `content.html` | string |  | Optional HTML to use within each content column. If `html` is provided, the `text` option will be ignored. |
| `content.image` | object |  | Optional image to use within each content column. *(accepts nested component params)* |
| `content.width` | string |  | Width of each content column. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-half"`. |
| `content.classes` | string |  | Classes to add to the content column. |
| `heading` | object | ✓ | Heading of the hero. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params)* |
| `heading.size` | string |  | Size of the heading – `"m"`, `"l"` or `"xl"`. Defaults to `"xl"`. |
| `heading.level` | integer |  | Optional heading level. Defaults to `1`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingClasses` | string |  | Replaced by the `heading.classes` option. |
| `headingSize` | string |  | Replaced by the `heading.size` option. |
| `headingLevel` | integer |  | Replaced by the `heading.level` option. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire hero component in a `call` block. |
| `imageURL` | string |  | Replaced by the `image.src` option. |
| `image` | object |  | Can be used to add an image to the hero component. |
| `image.src` | string | ✓ | The URL of the image in the hero. |
| `width` | string |  | Width of the hero content. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-half"`. |
| `containerClasses` | string |  | Classes to add to the hero container, useful if you want to make the hero fixed width. |
| `classes` | string |  | Classes to add to the hero. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hero. |
| `border` | boolean |  | If set to `false`, remove border from the hero. |

### Examples

#### default

```njk
{{ hero({
  heading: {
    text: "We're here for you"
  },
  text: "Helping you take control of your health and wellbeing.",
  border: false
}) }}
```

#### heading

```njk
{{ hero({
  heading: {
    text: "We're here for you"
  },
  text: "Helping you take control of your health and wellbeing.",
  border: false
}) }}
```

#### with heading as string

```njk
{{ hero({
  heading: "Prototyping",
  text: "Helping you take control of your health and wellbeing.",
  border: false
}) }}
```

#### with heading and caption

```njk
{{ hero({
  heading: {
    text: "Prototyping",
    caption: "Setup"
  }
}) }}
```

#### with heading only

```njk
{{ hero({
  heading: {
    text: "Prototyping"
  }
}) }}
```

#### with image

```njk
{{ hero({
  image: {
    src: "/nhsuk-frontend/assets/example-hero-background.jpg"
  }
}) }}
```

#### with image, content

```njk
{{ hero({
  heading: {
    text: "We're here for you"
  },
  text: "Helping you take control of your health and wellbeing.",
  image: {
    src: "/nhsuk-frontend/assets/example-hero-background.jpg"
  }
}) }}
```

#### with image, content and caption

```njk
{{ hero({
  heading: {
    text: "Find information and services to help you manage your health",
    size: "l",
    caption: {
      text: "NHS website for England",
      size: "xl"
    }
  },
  width: "three-quarters",
  image: {
    src: "/nhsuk-frontend/assets/example-hero-background.jpg"
  }
}) }}
```

#### product page

```njk
{{ hero({
  content: [
    {
      heading: {
        text: "This is a header for the product or service",
        size: "l"
      },
      html: '<p class="nhsuk-body-l">This is some more content which explains the product or service.</p>\n<a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Sign up\n</a>\n'
    },
    {
      image: {
        src: "/nhsuk-frontend/assets/example-hero-image.svg",
        background: false,
        border: false
      }
    }
  ],
  border: false
}) }}
```

#### product page with heading as string

```njk
{{ hero({
  content: [
    {
      heading: "Product or service",
      html: '<p class="nhsuk-body-l">This is some more content which explains the product or service.</p>\n<a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Sign up\n</a>\n'
    },
    {
      image: {
        src: "/nhsuk-frontend/assets/example-hero-image.svg",
        background: false,
        border: false
      }
    }
  ],
  border: false
}) }}
```

---

## Hint text

[↑ Back to top](#table-of-contents)

**Macro name:** `hint`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire hint component in a `call` block. |
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

#### with HTML

```njk
{{ hint({
  html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
}) }}
```

#### with HTML via call block

```njk
{% call hint() %}
This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App
{%- endcall %}
```

---

## Images

[↑ Back to top](#table-of-contents)

**Macro name:** `image`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the image. |
| `src` | string | ✓ | The source location of the image. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored. |
| `srcset` | string |  | A list of image source URLs and their respective sizes. Separate each image with a comma. |
| `sizes` | string |  | A list of screen sizes for the browser to load the correct image from the srcset images. |
| `alt` | string |  | The alt text of the image. Defaults to `""`. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored. |
| `html` | string | ✓ | If `src` is set, this is not required. HTML to use within the image component. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire image component in a `call` block. |
| `caption` | object |  | Optional caption for the image. |
| `caption.text` | string | ✓ | Text to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.html` | string | ✓ | HTML to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.classes` | string |  | Classes to add to the figcaption element. |
| `background` | string |  | Background colour for the image component – `"card"` or `false`. Defaults to `"card"`. To remove the background colour, set `background` to `false`. |
| `border` | boolean |  | If set to `false`, removes the border-bottom from the image component. |
| `width` | string |  | Width of the image component. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"two-thirds"`. |
| `classes` | string |  | Classes to add to the image component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the image component. |

### Examples

#### default

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  caption: {
    text: "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
  }
}) }}
```

#### width

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  alt: "A person in a bright pink athletic top, listening to music, pauses for thought during a short training session."
}) }}
```

#### with srcset

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg",
  sizes: "(max-width: 768px) 100vw, 66vw",
  srcset:
    "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg 600w, /nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg 1000w",
  caption:
    "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
}) }}
```

#### with srcset and alt text

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg",
  sizes: "(max-width: 768px) 100vw, 66vw",
  srcset:
    "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg 600w, /nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg 1000w",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
  caption:
    "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
}) }}
```

#### without caption

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
}) }}
```

#### without background

```njk
{{ image({
  background: false,
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  caption:
    "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
}) }}
```

#### without border

```njk
{{ image({
  border: false,
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  caption:
    "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
}) }}
```

#### without background, border or caption

```njk
{{ image({
  background: false,
  border: false,
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  alt: "A person in a bright pink athletic top, listening to music, pauses for thought during a short training session."
}) }}
```

#### with custom HTML

```njk
{% call image({
  caption:
    "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
}) %}
<img src="/nhsuk-frontend/assets/example-image-exercise.jpg" alt="">
{%- endcall %}
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
| `type` | string |  | Type of input control, for example, an email input control. Defaults to `"text"`. |
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
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `pattern` | string |  | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
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
    heading: "What is your full name?",
    size: "l"
  },
  name: "example"
}) }}
```

#### disabled

```njk
{{ input({
  label: {
    heading: "What is your full name?",
    size: "l"
  },
  name: "example",
  disabled: true
}) }}
```

#### with hint

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  id: "with-hint",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with button

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "with-button",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false,
  formGroup: {
    afterInput: {
      html: '<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small" data-module="nhsuk-button" type="submit">\n  Search\n</button>\n'
    }
  }
}) }}
```

#### with button and error message

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-button-error-message",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false,
  formGroup: {
    afterInput: {
      html: '<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small" data-module="nhsuk-button" type="submit">\n  Search\n</button>\n'
    }
  }
}) }}
```

#### with error only

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with error message

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-error-message",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with error message and hint

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-hint-error",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with error message and hint as strings

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: "This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App",
  errorMessage: "Enter NHS number",
  id: "with-hint-error",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with error message, without heading

```njk
{{ input({
  label: {
    text: "What is your NHS number?"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-error-message",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with error message and hint, without heading

```njk
{{ input({
  label: {
    text: "What is your NHS number?"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  id: "with-hint-error",
  name: "example",
  width: 10,
  code: true,
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

#### width class

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "input-width",
  name: "example",
  classes: "nhsuk-input--width-10"
}) }}
```

#### width class overriding width option

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "input-width",
  name: "example",
  classes: "nhsuk-input--width-10",
  width: 30
}) }}
```

#### label

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "custom-size",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### without heading

```njk
{{ input({
  label: "What is your NHS number?",
  id: "without-heading",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with code input styling

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  id: "with-code-input-styling",
  name: "example",
  width: 10,
  code: true,
  value: "999 123 4567",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

#### with prefix

```njk
{{ input({
  label: {
    heading: "Cost in pounds"
  },
  id: "with-prefix",
  name: "example",
  prefix: {
    text: "£"
  },
  width: 5
}) }}
```

#### with prefix HTML

```njk
{{ input({
  label: {
    heading: "Cost in pounds"
  },
  id: "with-prefix",
  name: "example",
  prefix: {
    html: "<span>£</span>"
  },
  width: 5
}) }}
```

#### with prefix as string

```njk
{{ input({
  label: {
    heading: "Cost in pounds"
  },
  id: "with-prefix",
  name: "example",
  prefix: "£",
  width: 5
}) }}
```

#### with suffix

```njk
{{ input({
  label: {
    heading: "Weight in kilograms"
  },
  id: "with-suffix",
  name: "example",
  suffix: {
    text: "kg"
  },
  width: 5
}) }}
```

#### with suffix HTML

```njk
{{ input({
  label: {
    heading: "Weight in kilograms"
  },
  id: "with-suffix",
  name: "example",
  suffix: {
    html: "<span>kg</span>"
  },
  width: 5
}) }}
```

#### with suffix as string

```njk
{{ input({
  label: {
    heading: "Weight in kilograms"
  },
  id: "with-suffix",
  name: "example",
  suffix: "kg",
  width: 5
}) }}
```

#### with prefix and suffix

```njk
{{ input({
  label: {
    heading: "Cost per item, in pounds"
  },
  id: "with-prefix-suffix",
  name: "example",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  width: 5
}) }}
```

#### with prefix and suffix and error message

```njk
{{ input({
  label: {
    heading: "Cost per item, in pounds"
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
  width: 5
}) }}
```

#### with autocomplete attribute

```njk
{{ input({
  label: {
    heading: "Enter a full postcode in England"
  },
  hint: {
    text: "For example, LS1 1AB"
  },
  id: "with-autocomplete-attribute",
  name: "example",
  autocomplete: "postal-code"
}) }}
```

#### example email address

```njk
{{ input({
  label: {
    text: "Email address"
  },
  name: "contact-by-email",
  classes: "nhsuk-u-width-two-thirds",
  spellcheck: false
}) }}
```

#### example phone number

```njk
{{ input({
  label: {
    text: "Phone number"
  },
  type: "tel",
  name: "contact-by-phone",
  classes: "nhsuk-u-width-two-thirds"
}) }}
```

#### example phone number with error message

```njk
{{ input({
  label: {
    text: "Phone number"
  },
  errorMessage: {
    text: "Enter your phone number"
  },
  type: "tel",
  name: "contact-by-phone",
  classes: "nhsuk-u-width-two-thirds"
}) }}
```

#### example mobile phone number

```njk
{{ input({
  label: {
    text: "Mobile phone number"
  },
  type: "tel",
  name: "contact-by-text",
  classes: "nhsuk-u-width-two-thirds"
}) }}
```

#### example address line 1

```njk
{{ input({
  label: {
    text: "Address line 1"
  },
  name: "address-line1",
  autocomplete: "address-line1"
}) }}
```

#### example address line 2

```njk
{{ input({
  label: {
    text: "Address line 2 (optional)"
  },
  name: "address-line2",
  autocomplete: "address-line2"
}) }}
```

#### example address town or city

```njk
{{ input({
  label: {
    text: "Town or city"
  },
  name: "address-town",
  autocomplete: "address-level2",
  classes: "nhsuk-u-width-two-thirds"
}) }}
```

#### example address postcode

```njk
{{ input({
  label: {
    text: "Postcode"
  },
  name: "address-postcode",
  autocomplete: "postal-code",
  width: 10
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
| `text` | string | ✓ | Text content to be used within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | HTML content to be used within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `classes` | string |  | Classes to add to the inset text. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the inset text. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the inset text. Defaults to `"Information"`. |

### Examples

#### default

```njk
{{ insetText({
  text: "You can report any suspected side effect using the Yellow Card safety scheme"
}) }}
```

#### with HTML

```njk
{{ insetText({
  html: '<p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>'
}) }}
```

#### with HTML via call block

```njk
{% call insetText() %}
<p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>
{%- endcall %}
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
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire label component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden suffix added to the label. |
| `caption` | object |  | Optional caption for the label. *(accepts nested component params)* |
| `for` | string |  | The label `for` attribute, the ID of the input the label is associated with. |
| `heading` | object |  | Whether the label also acts as a heading. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the label heading. |
| `heading.text` | string |  | If `html` is set, this is not required. Text to use within the label as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string |  | If `text` is set, this is not required. HTML to use within the label as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the label as a heading. |
| `heading.caption` | object |  | Optional caption for the label as a heading. *(accepts nested component params)* |
| `heading.size` | string |  | Size of the label as a heading – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional label heading level. Defaults to `1`. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the label heading. |
| `isPageHeading` | boolean |  | Replaced by the `heading` option. |
| `size` | string |  | Size of the label – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `classes` | string |  | Classes to add to the label tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |

### Examples

#### default

```njk
{{ label({
  heading: "What is your full name?",
  size: "l"
}) }}
```

#### text

```njk
{{ label({
  heading: "What is your full name?",
  size: "l"
}) }}
```

#### text and caption

```njk
{{ label({
  text: "What is your full name?",
  caption: "About you",
  size: "l"
}) }}
```

#### text and caption "before" as a paragraph

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "before",
    element: "p"
  },
  size: "l"
}) }}
```

#### text and caption "after" as a paragraph

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "l"
}) }}
```

#### size class

```njk
{{ label({
  heading: "What is your full name?",
  classes: "nhsuk-label--l"
}) }}
```

#### size class overriding size option

```njk
{{ label({
  heading: "What is your full name?",
  classes: "nhsuk-label--l",
  size: "s"
}) }}
```

#### with HTML

```njk
{{ label({
  html: "What is your full name?",
  heading: true,
  size: "l"
}) }}
```

#### with HTML via call block

```njk
{% call label({
  heading: true,
  size: "l"
}) %}
What is your full name?
{%- endcall %}
```

#### with HTML via call block, without heading

```njk
{% call label({
  size: "l"
}) %}
What is your full name?
{%- endcall %}
```

#### with heading level 1

```njk
{{ label({
  text: "What is your full name?",
  size: "l",
  heading: {
    level: 1
  }
}) }}
```

#### with heading level 2

```njk
{{ label({
  text: "What is your full name?",
  size: "m",
  heading: {
    level: 2
  }
}) }}
```

#### with heading level 3

```njk
{{ label({
  text: "What is your full name?",
  size: "s",
  heading: {
    level: 3
  }
}) }}
```

#### with heading options only

```njk
{{ label({
  heading: {
    text: "What is your full name?",
    level: 3,
    size: "s"
  }
}) }}
```

#### without heading

```njk
{{ label({
  text: "What is your full name?"
}) }}
```

#### with deprecated page heading

```njk
{{ label({
  text: "What is your full name?",
  size: "m",
  isPageHeading: true
}) }}
```

#### with deprecated page heading overriding heading

```njk
{{ label({
  heading: {
    text: "What is your full name?",
    level: 3,
    size: "s"
  },
  isPageHeading: false
}) }}
```

#### with id attribute

```njk
{{ label({
  id: "custom-id",
  heading: "What is your full name?",
  size: "l"
}) }}
```

#### with id attribute on heading

```njk
{{ label({
  heading: {
    text: "What is your full name?",
    id: "custom-id"
  },
  size: "l"
}) }}
```

---

## Legend

[↑ Back to top](#table-of-contents)

**Macro name:** `legend`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the legend. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire legend component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden suffix added to the legend. |
| `caption` | object |  | Optional caption for the legend. *(accepts nested component params)* |
| `size` | string |  | Size of the legend – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading` | object |  | Whether the legend also acts as a heading. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the legend heading. |
| `heading.text` | string |  | If `html` is set, this is not required. Text to use within the legend as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string |  | If `text` is set, this is not required. HTML to use within the legend as a heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the legend as a heading. |
| `heading.caption` | object |  | Optional caption for the legend as a heading. *(accepts nested component params)* |
| `heading.size` | string |  | Size of the legend as a heading – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional legend heading level. Defaults to `1`. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the legend heading. |
| `isPageHeading` | boolean |  | Replaced by the `heading` option. |
| `classes` | string |  | Classes to add to the legend. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the legend. |

### Examples

#### default

```njk
{{ legend({
  heading: "What is your address?",
  size: "l"
}) }}
```

#### text

```njk
{{ legend({
  heading: "What is your address?",
  size: "l"
}) }}
```

#### text and caption

```njk
{{ legend({
  text: "What is your home address?",
  caption: "About you",
  size: "l"
}) }}
```

#### text and caption "after" as a paragraph

```njk
{{ legend({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "l"
}) }}
```

#### size class

```njk
{{ legend({
  heading: "What is your address?",
  classes: "nhsuk-fieldset__legend--l"
}) }}
```

#### size class overriding size option

```njk
{{ legend({
  heading: "What is your address?",
  classes: "nhsuk-fieldset__legend--l",
  size: "s"
}) }}
```

#### with HTML

```njk
{{ legend({
  html: "What is your address?",
  heading: true,
  size: "l"
}) }}
```

#### with HTML via call block

```njk
{% call legend({
  heading: true,
  size: "l"
}) %}
What is your address?
{%- endcall %}
```

#### with HTML via call block, without heading

```njk
{% call legend({
  size: "l"
}) %}
What is your address?
{%- endcall %}
```

#### with heading level 1

```njk
{{ legend({
  text: "What is your address?",
  size: "l",
  heading: {
    level: 1
  }
}) }}
```

#### with heading level 2

```njk
{{ legend({
  text: "What is your address?",
  size: "m",
  heading: {
    level: 2
  }
}) }}
```

#### with heading level 3

```njk
{{ legend({
  text: "What is your address?",
  size: "s",
  heading: {
    level: 3
  }
}) }}
```

#### with heading options only

```njk
{{ legend({
  heading: {
    text: "What is your address?",
    level: 3,
    size: "s"
  }
}) }}
```

#### without heading

```njk
{{ legend({
  text: "What is your address?"
}) }}
```

#### with deprecated page heading

```njk
{{ legend({
  text: "What is your address?",
  size: "m",
  isPageHeading: true
}) }}
```

#### with deprecated page heading overriding heading

```njk
{{ legend({
  heading: {
    text: "What is your address?",
    level: 3,
    size: "s"
  },
  isPageHeading: false
}) }}
```

#### with id attribute

```njk
{{ legend({
  id: "custom-id",
  heading: "What is your address?",
  size: "l"
}) }}
```

#### with id attribute on heading

```njk
{{ legend({
  heading: {
    text: "What is your address?",
    id: "custom-id"
  },
  size: "l"
}) }}
```

---

## Notification banner

[↑ Back to top](#table-of-contents)

**Macro name:** `notificationBanner`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the notification banner. |
| `title` | object |  | The title that displays in the notification banner:
- if you do not set `variant`, `title.text` defaults to `"Important"`
- if you set `variant` to `"success"`, `title.text` defaults to `"Success"`
- if you set `title.text` or `title.html`, the defaults are ignored *(accepts nested component params)* |
| `title.id` | string |  | The ID of the title. |
| `title.text` | string | ✓ | If `html` is set, this is not required. Text for the title. If `html` is provided, the `text` option will be ignored. |
| `title.html` | string | ✓ | If `text` is set, this is not required. HTML for the title. If `html` is provided, the `text` option will be ignored. |
| `title.visuallyHiddenText` | string |  | A visually hidden suffix added to the title. |
| `title.headingLevel` | integer |  | Optional alias for the title heading `level` option. |
| `title.level` | integer |  | Optional heading level for the title. Defaults to `2`. |
| `title.classes` | string |  | Classes to add to the title. |
| `title.attributes` | object |  | HTML attributes (for example data attributes) to add to the title. |
| `titleId` | string |  | Replaced by the `title.id` option. |
| `titleText` | string |  | Replaced by the `title.text` option. |
| `titleHtml` | string |  | Replaced by the `title.html` option. |
| `titleHeadingLevel` | integer |  | Replaced by the `title.level` option. |
| `heading` | object |  | Heading to be used within the notification banner. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params)* |
| `heading.level` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `heading.element` | string |  | HTML element for the heading – for example, `"p"`. Defaults to the `level` option prefixed with `"h"`. |
| `text` | string | ✓ | The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored. |
| `html` | string | ✓ | The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire notification banner component in a `call` block. |
| `variant` | string |  | Optional variant of notification banner. You can use only `"success"` or empty values with this option. If you set `variant` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `variant`, the notification banner sets `role` to `"region"`. |
| `type` | string |  | Replaced by the `variant` option. |
| `role` | string |  | Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `variant` to `"success"`, `role` defaults to `"alert"`. |
| `disableAutoFocus` | boolean |  | If you set `variant` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`. |
| `classes` | string |  | The classes that you want to add to the notification banner. |
| `attributes` | object |  | The HTML attributes that you want to add to the notification banner, for example, data attributes. |

### Examples

#### default

```njk
{{ notificationBanner({
  text: "The patient record was updated."
}) }}
```

#### paragraph with heading class

```njk
{{ notificationBanner({
  heading: {
    text: "You have 9 days to send a response.",
    element: "p"
  }
}) }}
```

#### with HTML

```njk
{{ notificationBanner({
  heading: {
    text: "The patient record was updated"
  },
  html: '<p class="nhsuk-body">\n  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there\'s a problem.\n</p>'
}) }}
```

#### with HTML and heading as string

```njk
{{ notificationBanner({
  heading: "The patient record was updated",
  html: '<p class="nhsuk-body">\n  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there\'s a problem.\n</p>'
}) }}
```

#### with HTML via call block

```njk
{% call notificationBanner({
  heading: {
    text: "The patient record was updated"
  }
}) %}
<p class="nhsuk-body">
  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
</p>
{%- endcall %}
```

#### with custom title

```njk
{{ notificationBanner({
  title: {
    text: "Important information"
  },
  text: "The patient record was updated."
}) }}
```

#### with custom title as string

```njk
{{ notificationBanner({
  title: "Important information",
  text: "The patient record was updated."
}) }}
```

#### with success variant

```njk
{{ notificationBanner({
  variant: "success",
  text: "Email sent to example@email.com"
}) }}
```

#### success with HTML

```njk
{{ notificationBanner({
  variant: "success",
  heading: {
    text: "4 files uploaded"
  },
  html: '<ul class="nhsuk-list">\n  <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>\n  <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>\n</ul>'
}) }}
```

#### success with HTML via call block

```njk
{% call notificationBanner({
  variant: "success",
  heading: {
    text: "4 files uploaded"
  }
}) %}
<ul class="nhsuk-list">
  <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
  <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
</ul>
{%- endcall %}
```

#### with a list

```njk
{{ notificationBanner({
  heading: {
    text: "4 files uploaded"
  },
  html: '<ul class="nhsuk-list nhsuk-list--bullet">\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v2.pdf</a></li>\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>\n</ul>'
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
  heading: {
    text: "Check if you need to apply the reverse charge to this application"
  },
  html: '<p class="nhsuk-body">\n  You will have to apply the <a href="#" class="nhsuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:\n</p>\n<ul class="nhsuk-list nhsuk-list--bullet">\n  <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>\n  <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>\n</ul>'
}) }}
```

#### auto-focus disabled, with success variant

```njk
{{ notificationBanner({
  variant: "success",
  disableAutoFocus: true,
  text: "Email sent to example@email.com"
}) }}
```

#### auto-focus explicitly enabled, with success variant

```njk
{{ notificationBanner({
  variant: "success",
  disableAutoFocus: false,
  text: "Email sent to example@email.com"
}) }}
```

#### role=alert overridden to role=region, with success variant

```njk
{{ notificationBanner({
  variant: "success",
  role: "region",
  text: "Email sent to example@email.com"
}) }}
```

#### custom tabindex

```njk
{{ notificationBanner({
  variant: "success",
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
| `items.visuallyHiddenText` | string |  | The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". Replaced by the `item.ariaLabel` option. |
| `items.ariaLabel` | string |  | The accessible name for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". |
| `items.href` | string | ✓ | The pagination item `href` attribute. Required unless the item is an ellipsis. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.ellipsis` | boolean |  | Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored. |
| `items.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the link. |
| `previous` | object |  | A link to the previous page, if there is a previous page. |
| `previous.text` | string |  | The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.html` | string |  | The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.labelText` | string |  | Replaced by the `previous.label.text` option. |
| `previous.label` | object |  | The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. |
| `previous.label.text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `previous.label.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `previous.href` | string | ✓ | The previous page's URL. |
| `previous.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the link. |
| `previousUrl` | string |  | Replaced by the `previous.href` option. |
| `previousPage` | string |  | Replaced by the `previous.label.text` option. |
| `next` | object |  | A link to the next page, if there is a next page. |
| `next.text` | string |  | The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.html` | string |  | The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.labelText` | string |  | Replaced by the `next.label.text` option. |
| `next.label` | object |  | The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. |
| `next.label.text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `next.label.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `next.href` | string | ✓ | The next page's URL. |
| `next.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the link. |
| `nextUrl` | string |  | Replaced by the `next.href` option. |
| `nextPage` | string |  | Replaced by the `next.label.text` option. |
| `landmarkLabel` | string |  | Replaced by the `ariaLabel` option. |
| `ariaLabel` | string |  | The accessible name for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`. |
| `classes` | string |  | The classes you want to add to the pagination `nav` parent. |
| `attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent. |

### Examples

#### default

```njk
{{ pagination({
  previous: {
    label: "Treatments",
    href: "#/section/treatments"
  },
  next: {
    label: "Symptoms",
    href: "#/section/symptoms"
  }
}) }}
```

#### with deprecated options

```njk
{{ pagination({
  previousUrl: "#/section/treatments",
  previousPage: "Treatments",
  nextUrl: "#/section/symptoms",
  nextPage: "Symptoms"
}) }}
```

#### with only previous

```njk
{{ pagination({
  previous: {
    label: "Treatments",
    href: "#/section/treatments"
  }
}) }}
```

#### with only next

```njk
{{ pagination({
  next: {
    label: "Symptoms",
    href: "#/section/symptoms"
  }
}) }}
```

#### with translations

```njk
{{ pagination({
  previous: {
    text: "Blaenorol",
    label: "Driniaethau",
    href: "#/section/driniaethau"
  },
  next: {
    text: "Nesaf",
    label: "Symptomau",
    href: "#/section/symptomau"
  }
}) }}
```

#### numbered

```njk
{{ pagination({
  previous: {
    href: "#/section/1"
  },
  next: {
    href: "#/section/3"
  },
  items: [
    {
      number: 1,
      href: "#/section/1"
    },
    {
      number: 2,
      href: "#/section/2",
      current: true
    },
    {
      number: 3,
      href: "#/section/3"
    }
  ]
}) }}
```

#### numbered with many pages

```njk
{{ pagination({
  previous: {
    href: "#/section/9"
  },
  next: {
    href: "#/section/11"
  },
  items: [
    {
      number: 1,
      href: "#/section/1"
    },
    {
      ellipsis: true
    },
    {
      number: 8,
      href: "#/section/8"
    },
    {
      number: 9,
      href: "#/section/9"
    },
    {
      number: 10,
      href: "#/section/10",
      current: true
    },
    {
      number: 11,
      href: "#/section/11"
    },
    {
      number: 12,
      href: "#/section/12"
    },
    {
      ellipsis: true
    },
    {
      number: 40,
      href: "#/section/40"
    }
  ]
}) }}
```

#### numbered with many pages (empty items)

```njk
{{ pagination({
  previous: {
    href: "#/section/9"
  },
  next: {
    href: "#/section/11"
  },
  items: [
    {
      number: 1,
      href: "#/section/1"
    },
    {
      ellipsis: true
    },
    false,
    {
      number: 9,
      href: "#/section/9"
    },
    {
      number: 10,
      href: "#/section/10",
      current: true
    },
    {
      number: 11,
      href: "#/section/11"
    },
    false,
    {
      ellipsis: true
    },
    {
      number: 40,
      href: "#/section/40"
    }
  ]
}) }}
```

#### numbered first page

```njk
{{ pagination({
  next: {
    href: "#/section/2"
  },
  items: [
    {
      number: 1,
      href: "#/section/1",
      current: true
    },
    {
      number: 2,
      href: "#/section/2"
    },
    {
      number: 3,
      href: "#/section/3"
    }
  ]
}) }}
```

#### numbered last page

```njk
{{ pagination({
  previous: {
    href: "#/section/2"
  },
  items: [
    {
      number: 1,
      href: "#/section/1"
    },
    {
      number: 2,
      href: "#/section/2"
    },
    {
      number: 3,
      href: "#/section/3",
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
    href: "#/section/1"
  },
  next: {
    text: "Nesaf",
    href: "#/section/3"
  },
  items: [
    {
      number: 1,
      href: "#/section/1"
    },
    {
      number: 2,
      href: "#/section/2",
      current: true
    },
    {
      number: 3,
      href: "#/section/3"
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
| `heading` | object | ✓ | Heading of the panel component. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params)* |
| `heading.size` | string |  | Size of the heading – `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional heading level. Defaults to `1`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `titleText` | string | ✓ | Replaced by the `heading.text` option. |
| `titleHtml` | string |  | Replaced by the `heading.html` option. |
| `titleSize` | string |  | Replaced by the `heading.size` option. |
| `titleClasses` | string |  | Replaced by the `heading.classes` option. |
| `headingLevel` | integer |  | Replaced by the `heading.level` option. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the panel content. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire panel component in a `call` block. |
| `classes` | string |  | Classes to add to the panel. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the panel. |
| `variant` | string |  | Optional variant of panel. You can use only `"interruption"` or empty values with this option. |

### Examples

#### default

```njk
{{ panel({
  heading: {
    text: "Booking complete"
  },
  text: "We have sent you a confirmation email"
}) }}
```

#### with heading as string

```njk
{{ panel({
  heading: "Booking complete",
  text: "We have sent you a confirmation email"
}) }}
```

#### with HTML

```njk
{{ panel({
  heading: {
    text: "Booking complete"
  },
  html: "We have sent you a confirmation email"
}) }}
```

#### with HTML via call block

```njk
{% call panel({
  heading: {
    text: "Booking complete"
  }
}) %}
We have sent you a confirmation email
{%- endcall %}
```

#### interruption

```njk
{{ panel({
  heading: {
    text: "Jodie Brown had a COVID-19 vaccine less than 3 months ago",
    size: "l"
  },
  variant: "interruption",
  html: '<p>They had a COVID-19 vaccine on 25 September 2025.</p>\n<p>For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.</p>\n<div class="nhsuk-button-group">\n  <a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Continue anyway\n</a>\n\n  <a href="#">Cancel</a>\n</div>'
}) }}
```

#### interruption for confirmation to cancel

```njk
{{ panel({
  heading: {
    text: "Confirm you want to cancel your hospital appointment",
    size: "l"
  },
  variant: "interruption",
  html: '<p>You will be able to reschedule your appointment for another time, but this may delay your treatment.</p>\n<p>Cancelling your appointment cannot be undone.</p>\n<div class="nhsuk-button-group">\n  <a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Cancel appointment\n</a>\n\n  <a href="#">Change my weight</a>\n</div>'
}) }}
```

#### interruption for confirmation to continue

```njk
{{ panel({
  heading: {
    text: "Is your weight correct?",
    size: "l"
  },
  variant: "interruption",
  html: '<p>You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.</p>\n<div class="nhsuk-button-group">\n  <a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Yes, this is correct\n</a>\n\n  <a href="#">Change my weight</a>\n</div>'
}) }}
```

#### heading

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    size: "l"
  },
  text: "We have sent you a confirmation email"
}) }}
```

#### with heading classes

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    classes: "nhsuk-panel__heading--l"
  },
  text: "We have sent you a confirmation email"
}) }}
```

#### with heading level 1

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    level: 1
  },
  text: "We have sent you a confirmation email"
}) }}
```

#### with heading level 2

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    level: 2
  },
  text: "We have sent you a confirmation email"
}) }}
```

#### with heading level 3

```njk
{{ panel({
  heading: {
    text: "Booking complete",
    level: 3
  },
  text: "We have sent you a confirmation email"
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
| `showPasswordAriaLabelText` | string |  | Replaced by `showPasswordAriaLabel`. |
| `showPasswordAriaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string |  | Replaced by `hidePasswordAriaLabel`. |
| `hidePasswordAriaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string |  | Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string |  | Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`. |
| `button` | object |  | Optional object allowing customisation of the toggle button. The `button.attributes` and `button.html` options are not supported. *(accepts nested component params)* |
| `button.variant` | string |  | Optional variant of password input button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`. |
| `button.classes` | string |  | Classes to add to the button. |

### Examples

#### default

```njk
{{ passwordInput({
  label: {
    heading: "Password",
    size: "l"
  },
  name: "example"
}) }}
```

#### disabled

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

#### disabled with enabled button

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

#### disabled button

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

#### with button double click prevented

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

#### with button double click not prevented

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

#### with hint

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

#### with error only

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

#### with error message

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

#### with error message and hint

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

#### with error message and hint as strings

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

#### with error message, without heading

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

#### with error message and hint, without heading

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

#### with prefix

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

#### with prefix and error message

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

#### without heading

```njk
{{ passwordInput({
  label: "Password",
  id: "without-heading",
  name: "example"
}) }}
```

#### with width

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

#### with autocomplete attribute

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

#### with translations

```njk
{{ passwordInput({
  label: {
    heading: "Cyfrinair",
    size: "l"
  },
  id: "password-translated",
  name: "example",
  showPasswordText: "Datguddia",
  hidePasswordText: "Cuddio",
  showPasswordAriaLabel: "Datgelu cyfrinair",
  hidePasswordAriaLabel: "Cuddio cyfrinair",
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
| `fieldset` | object |  | The fieldset used by the radios component. The `fieldset.html` option is not supported. *(accepts nested component params)* |
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
| `items.label` | object |  | The label used by each radio item within the radios component. The `label.size` and `label.heading` options are not supported. *(accepts nested component params)* |
| `items.hint` | object |  | Can be used to add a hint to each radio item within the radios component. *(accepts nested component params)* |
| `items.divider` | string |  | Divider text to separate radio items, for example the text `"or"`. |
| `items.checked` | boolean |  | Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the radio is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the radio is checked. |
| `items.disabled` | boolean |  | If `true`, radio will be disabled. |
| `items.classes` | string |  | Classes to add to the radio input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the radio input tag. |
| `value` | string |  | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `disabled` | boolean |  | If `true`, radio inputs used by the radios component will be disabled. |
| `small` | boolean |  | If set to `true`, small radios will be used. |
| `inline` | boolean |  | If set to `true`, inline radios will be used. |
| `classes` | string |  | Classes to add to the radios container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the radios container. |

### Examples

#### default

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

#### disabled

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

#### disabled input

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

#### disabled with enabled input

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

#### with hint

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

#### inline

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

#### legend

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

#### without heading

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

#### with pre-checked value

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

#### with divider

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

#### with hints on items

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

#### without fieldset

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

#### with error only

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

#### with error message

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

#### with error message and hint

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

#### with error message and hint as strings

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

#### with error message, without heading

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

#### with error message and hint, without heading

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

#### with long text

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

#### with conditional content

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

#### with conditional content, special characters

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
  idPrefix: "user.profile[contact-prefs]",
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

#### with conditional content, error message

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

#### with conditional content, error message (nested)

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

#### with nested conditional radios

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
        html: '<div class="nhsuk-form-group">\n  <fieldset class="nhsuk-fieldset" aria-describedby="example-inner-hint">\n  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--s">\n    How do you want to be contacted about this?\n  </legend>\n  <div class="nhsuk-hint" id="example-inner-hint">\n    Select 1 option\n  </div>\n  <div class="nhsuk-radios" data-module="nhsuk-radios">\n    <div class="nhsuk-radios__item">\n      <input class="nhsuk-radios__input" id="example-inner" name="example-inner" type="radio" value="email" data-aria-controls="conditional-example-inner">\n      <label class="nhsuk-label nhsuk-radios__label" for="example-inner">\n        Email\n      </label>\n    </div>\n    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner">\n      <div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-email">\n    Email address\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-email" name="contact-by-email" type="text" spellcheck="false">\n</div>\n    </div>\n    <div class="nhsuk-radios__item">\n      <input class="nhsuk-radios__input" id="example-inner-2" name="example-inner" type="radio" value="phone" data-aria-controls="conditional-example-inner-2">\n      <label class="nhsuk-label nhsuk-radios__label" for="example-inner-2">\n        Phone\n      </label>\n    </div>\n    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner-2">\n      <div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-phone">\n    Phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-phone" name="contact-by-phone" type="tel">\n</div>\n    </div>\n    <div class="nhsuk-radios__item">\n      <input class="nhsuk-radios__input" id="example-inner-3" name="example-inner" type="radio" value="text" data-aria-controls="conditional-example-inner-3">\n      <label class="nhsuk-label nhsuk-radios__label" for="example-inner-3">\n        Text message\n      </label>\n    </div>\n    <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-example-inner-3">\n      <div class="nhsuk-form-group">\n  <label class="nhsuk-label" for="contact-by-text">\n    Mobile phone number\n  </label>\n  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="contact-by-text" name="contact-by-text" type="tel">\n</div>\n    </div>\n  </div>\n</fieldset>\n</div>\n'
      }
    }
  ]
}) }}
```

---

## Scroll

[↑ Back to top](#table-of-contents)

**Macro name:** `scroll`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The `id` to add to the scroll component. |
| `labelledBy` | string |  | One or more element IDs to add to the scrolling content `aria-labelledby` attribute, used to provide accessible names for screenreader users. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the scrolling content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the scrolling content. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire scroll component in a `call` block. |
| `variant` | string |  | Optional variant of scroll. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the scroll component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the scroll component. |

### Examples

#### default

```njk
{{ scroll({
  text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
}) }}
```

#### with HTML

```njk
{{ scroll({
  html: '<h1 class="nhsuk-heading-m" id="example-heading">Example heading</h1>\n<p class="nhsuk-body">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n<p class="nhsuk-body">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>\n<p class="nhsuk-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Bibendum commodo ullamcorper vulputate. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>',
  labelledBy: "example-heading"
}) }}
```

#### with HTML via call block

```njk
{% call scroll({
  labelledBy: "example-heading"
}) %}
<h1 class="nhsuk-heading-m" id="example-heading">Example heading</h1>
  <p class="nhsuk-body">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  <p class="nhsuk-body">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
  <p class="nhsuk-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Bibendum commodo ullamcorper vulputate. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>
{%- endcall %}
```

---

## Search input

[↑ Back to top](#table-of-contents)

**Macro name:** `searchInput`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `type` | string |  | Type of input control, for example, an email input control. Defaults to `"search"`. |
| `inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the search input component. *(accepts nested component params)* |
| `hint` | object |  | Can be used to add a hint to a search input component. *(accepts nested component params)* |
| `errorMessage` | object |  | Can be used to add an error message to the search input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params)* |
| `prefix` | object |  | Can be used to add a prefix to the search input component. |
| `prefix.text` | string | ✓ | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | ✓ | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string |  | Classes to add to the prefix. |
| `prefix.attributes` | object |  | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object |  | Can be used to add a suffix to the search input component. |
| `suffix.text` | string | ✓ | If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.classes` | string |  | Classes to add to the suffix element. |
| `suffix.attributes` | object |  | HTML attributes (for example data attributes) to add to the suffix element. |
| `code` | boolean |  | If set to `true`, use a monospace font for codes or sequences. |
| `width` | integer |  | Optional fixed width for the search input component – `2`, `3`, `4`, `5`, `10`, `20` or `30`. |
| `large` | boolean |  | If set to `true`, larger input size will be used. |
| `formGroup` | object |  | Additional options for the form group containing the search input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the search input component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the search input component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the input. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. Default is `"off"`. |
| `placeholder` | string |  | Attribute to provide placeholder text for the search input. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the search input. |
| `autocapitalize` | string |  | Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object |  | Additional options for the wrapping element containing the search input component. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |
| `button` | object |  | Optional object allowing customisation of the search button. *(accepts nested component params)* |
| `button.variant` | string |  | Optional variant of search button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`. |
| `button.classes` | string |  | Classes to add to the search button. |
| `button.ariaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when only an icon is used. |
| `button.icon` | object |  | Can be used to add an icon to the search button. |
| `button.icon.name` | string | ✓ | Icon name for the button – for example, `"search"`, `"arrow-right"`, `"plus"` or `"minus"`. |
| `button.icon.html` | string | ✓ | HTML to use for the icon, as an alternative to the `name` option. If `html` is provided, the `name` option will be ignored. |
| `button.icon.placement` | string | ✓ | Placement of the icon within the button – `"start"` or `"end"`. |

### Examples

#### default

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  name: "example",
  width: 20
}) }}
```

#### disabled

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  name: "example",
  disabled: true
}) }}
```

#### disabled with enabled button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  name: "example",
  disabled: true,
  button: {
    disabled: false
  }
}) }}
```

#### disabled button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  placeholder: "NHS number",
  name: "example",
  button: {
    disabled: true
  }
}) }}
```

#### large

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "l"
  },
  name: "example",
  large: true,
  width: 30
}) }}
```

#### large with brand button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "l"
  },
  button: {
    variant: "brand"
  },
  name: "example",
  large: true,
  width: 30
}) }}
```

#### with alternative icon

```njk
{{ searchInput({
  label: {
    heading: "Search by postcode",
    size: "m"
  },
  button: {
    icon: "arrow-right"
  },
  name: "example",
  width: 10
}) }}
```

#### with hint

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  id: "with-hint",
  name: "example",
  width: 20
}) }}
```

#### with hint and value

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with error only

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  errorMessage: true,
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with error message

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with error message and hint as strings

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: "This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App",
  errorMessage: "Enter NHS number",
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with error message and hint

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with error message, without heading

```njk
{{ searchInput({
  label: {
    text: "Search by NHS number"
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with error message and hint, without heading

```njk
{{ searchInput({
  label: {
    text: "Search by NHS number"
  },
  hint: {
    html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  errorMessage: {
    text: "Enter NHS number"
  },
  name: "example",
  value: "999 123 4567",
  width: 20
}) }}
```

#### with prefix

```njk
{{ searchInput({
  label: {
    heading: "Code lookup",
    size: "m"
  },
  prefix: {
    text: "SNOMED"
  },
  id: "with-prefix",
  name: "example",
  value: "160245001",
  width: 10,
  code: true,
  button: {
    icon: "arrow-right",
    variant: "brand"
  }
}) }}
```

#### with prefix and error message

```njk
{{ searchInput({
  label: {
    heading: "Code lookup",
    size: "m"
  },
  prefix: {
    text: "SNOMED"
  },
  errorMessage: {
    text: "Enter a SNOMED code"
  },
  id: "with-prefix",
  name: "example",
  width: 10,
  code: true,
  button: {
    icon: "arrow-right",
    variant: "brand"
  }
}) }}
```

#### with hidden label

```njk
{{ searchInput({
  label: {
    text: "Search by NHS number",
    classes: "nhsuk-u-visually-hidden"
  },
  name: "example",
  width: 20
}) }}
```

#### with brand button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    variant: "brand"
  },
  name: "example",
  width: 20
}) }}
```

#### with brand button text

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    text: "Search",
    variant: "brand"
  },
  name: "example",
  width: 20
}) }}
```

#### with brand button text only

```njk
{{ searchInput({
  label: {
    heading: "Product order number",
    size: "m"
  },
  button: {
    icon: false,
    text: "Find",
    variant: "brand"
  },
  name: "example",
  width: 20
}) }}
```

#### with secondary button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    variant: "secondary"
  },
  name: "example",
  width: 20
}) }}
```

#### with secondary button text

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: {
    text: "Search",
    variant: "secondary"
  },
  name: "example",
  width: 20
}) }}
```

#### with secondary button text only

```njk
{{ searchInput({
  label: {
    heading: "Product order number",
    size: "m"
  },
  button: {
    icon: false,
    text: "Find",
    variant: "secondary"
  },
  name: "example",
  width: 20
}) }}
```

#### without button

```njk
{{ searchInput({
  label: {
    heading: "Search by NHS number",
    size: "m"
  },
  button: false,
  name: "example",
  width: 20
}) }}
```

#### without heading

```njk
{{ searchInput({
  label: "Search by NHS number",
  name: "example",
  width: 20
}) }}
```

---

## Select

[↑ Back to top](#table-of-contents)

**Macro name:** `select`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | ID for the select. Defaults to the value of `name`. |
| `name` | string | ✓ | The `name` attribute for the select. |
| `items` | array | ✓ | The items within the select component. |
| `items.value` | string |  | The `value` attribute for the option. If this is omitted, the value is taken from the text content of the option element. |
| `items.text` | string | ✓ | Text for the option item. |
| `items.divider` | boolean |  | Divider line used to separate option items. |
| `items.selected` | boolean |  | Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option. |
| `items.disabled` | boolean |  | Sets the option item as disabled. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the option. |
| `value` | string |  | The value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item. |
| `disabled` | boolean |  | If `true`, select will be disabled. Use the `disabled` option on each individual item to only disable certain options. |
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
    heading: "Sort by",
    size: "l"
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

#### disabled

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "l"
  },
  name: "example",
  disabled: true,
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

#### disabled option

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "l"
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
      text: "Most comments",
      disabled: true
    }
  ]
}) }}
```

#### with divider

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "l"
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

#### with hint

```njk
{{ select({
  label: {
    heading: "Choose location",
    size: "l"
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
    heading: "Choose location",
    size: "l"
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
      html: '<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small" data-module="nhsuk-button" type="submit">\n  Save\n</button>\n'
    }
  }
}) }}
```

#### with button and error message

```njk
{{ select({
  label: {
    heading: "Choose location",
    size: "l"
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
      html: '<button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small" data-module="nhsuk-button" type="submit">\n  Save\n</button>\n'
    }
  }
}) }}
```

#### label

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "l"
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

#### without heading

```njk
{{ select({
  label: "Sort by",
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

#### with error only

```njk
{{ select({
  label: {
    heading: "Choose location",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
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

#### with error message

```njk
{{ select({
  label: {
    heading: "Choose location",
    size: "l"
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

#### with error message and hint

```njk
{{ select({
  label: {
    heading: "Choose location",
    size: "l"
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

#### with error message and hint as strings

```njk
{{ select({
  label: {
    heading: "Choose location",
    size: "l"
  },
  hint: "This can be different to where you went before",
  errorMessage: "Select a location",
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

#### with error message, without heading

```njk
{{ select({
  label: {
    text: "Choose location"
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

#### with error message and hint, without heading

```njk
{{ select({
  label: {
    text: "Choose location"
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
    heading: "Sort by",
    size: "l"
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
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire skip link component in a `call` block. |
| `href` | string |  | The skip link `href` attribute. Defaults to `"#maincontent"`. |
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

#### without hash fragment

```njk
{{ skipLink({
  href: "/nhsuk-frontend/components/boilerplate/",
  text: "Skip to main content"
}) }}
```

#### without link target

```njk
{{ skipLink({
  href: "#this-element-does-not-exist",
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
| `border` | boolean |  | If set to `false`, remove separating borders from all rows. |
| `lastRowBorder` | boolean |  | If set to `false`, remove separating border from the last row. |
| `rows` | array | ✓ | The rows within the summary list component. |
| `rows.id` | string |  | The ID of the row. |
| `rows.classes` | string |  | Classes to add to the row. |
| `rows.attributes` | string |  | HTML attributes (for example data attributes) to add to the row. |
| `rows.border` | boolean |  | If set to `false`, remove separating border from the row. |
| `rows.key` | object | ✓ | The reference content (key) for each row item in the summary list component. |
| `rows.key.id` | string |  | The ID of the key item. |
| `rows.key.text` | string | ✓ | If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.width` | string |  | Specify the key wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `rows.key.classes` | string |  | Classes to add to the key wrapper. |
| `rows.key.attributes` | string |  | HTML attributes (for example data attributes) to add to the key wrapper. |
| `rows.value` | object | ✓ | The value for each row item in the summary list component. |
| `rows.value.id` | string |  | The ID of the value item. |
| `rows.value.text` | string | ✓ | If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.width` | string |  | Specify the value wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `rows.value.classes` | string |  | Classes to add to the value wrapper. |
| `rows.value.attributes` | string |  | HTML attributes (for example data attributes) to add to the value wrapper. |
| `rows.actions` | object |  | The action link content for each row item in the summary list component. |
| `rows.actions.items` | array |  | The action link items within the row item of the summary list component. |
| `rows.actions.items.id` | string |  | The ID of the action item. |
| `rows.actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `rows.actions.items.name` | string |  | Name for the action as a button. If `type` is set, this has no effect. |
| `rows.actions.items.type` | string |  | Type of action as a button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `rows.actions.items.value` | string |  | The `value` attribute for the action as a button. If `type` is set, this has no effect. |
| `rows.actions.items.href` | string | ✓ | The action `href` attribute. If set, the action will use an `<a>` tag automatically unless `type` is provided. |
| `rows.actions.items.classes` | string |  | Classes to add to the action item. |
| `rows.actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `rows.actions.width` | string |  | Specify the actions wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `rows.actions.classes` | string |  | Classes to add to the actions wrapper. |
| `rows.actions.attributes` | string |  | HTML attributes (for example data attributes) to add to the actions wrapper. |
| `html` | string |  | HTML to use within the summary list. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire summary list component in a `call` block. |
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### with actions

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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
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

#### with actions array

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
      actions: [
        {
          href: "#/change",
          text: "Change",
          visuallyHiddenText: "name"
        }
      ]
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "15 March 1984"
      },
      actions: [
        {
          href: "#/change",
          text: "Change",
          visuallyHiddenText: "date of birth"
        }
      ]
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      },
      actions: [
        {
          href: "#/change",
          text: "Change",
          visuallyHiddenText: "contact details"
        }
      ]
    }
  ]
}) }}
```

#### with actions as buttons

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
            type: "submit",
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
            type: "submit",
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
      },
      actions: {
        items: [
          {
            type: "submit",
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      },
      actions: {
        items: [
          {
            type: "submit",
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
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
        html: "<p>Isotretinoin capsules (Roaccutane)</p>\n<p>Isotretinoin gel (Isotrex)</p>\n<p>Pepto-Bismol (bismuth subsalicylate)</p>"
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

#### with multiple actions as buttons

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
            type: "submit",
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
      },
      actions: {
        items: [
          {
            type: "submit",
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      },
      actions: {
        items: [
          {
            type: "submit",
            text: "Add",
            visuallyHiddenText: "new contact details"
          },
          {
            type: "submit",
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
        html: "<p>Isotretinoin capsules (Roaccutane)</p>\n<p>Isotretinoin gel (Isotrex)</p>\n<p>Pepto-Bismol (bismuth subsalicylate)</p>"
      },
      actions: {
        items: [
          {
            type: "submit",
            text: "Add",
            visuallyHiddenText: "new medicine"
          },
          {
            type: "submit",
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
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
        html: "<p>Isotretinoin capsules (Roaccutane)</p>\n<p>Isotretinoin gel (Isotrex)</p>\n<p>Pepto-Bismol (bismuth subsalicylate)</p>"
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

#### with item widths

```njk
{{ summaryList({
  rows: [
    {
      key: {
        text: "Name",
        width: "one-half"
      },
      value: {
        text: "Karen Francis"
      }
    },
    {
      key: {
        text: "Date of birth",
        width: "one-half"
      },
      value: {
        text: "15 March 1984"
      }
    }
  ]
}) }}
```

#### with item strings

```njk
{{ summaryList({
  rows: [
    {
      key: "Name",
      value: "Karen Francis"
    },
    {
      key: "Date of birth",
      value: "15 March 1984"
    }
  ]
}) }}
```

#### without border

```njk
{{ summaryList({
  border: false,
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### without last row border

```njk
{{ summaryList({
  lastRowBorder: false,
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### without specific row border

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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
      }
    },
    {
      border: false,
      key: {
        text: "Contact details"
      },
      value: {
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
      }
    }
  ]
}) }}
```

#### as a card

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    }
  },
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card with multiple actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "l"
    },
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
  lastRowBorder: false,
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
        html: "73 Roman Rd<br>\nLeeds<br>\nLS2 5ZN"
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
        html: "<p>07700 900362</p>\n<p>karen.francis@example.com</p>"
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
        html: "<p>Isotretinoin capsules (Roaccutane)</p>\n<p>Isotretinoin gel (Isotrex)</p>\n<p>Pepto-Bismol (bismuth subsalicylate)</p>"
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

#### as a card with action

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Delete",
          href: "#/delete"
        }
      ]
    }
  },
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card with action as a button

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
    actions: {
      items: [
        {
          type: "submit",
          text: "Delete"
        }
      ]
    }
  },
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card with actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
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
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card with actions as buttons

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
    actions: {
      items: [
        {
          type: "submit",
          text: "Delete"
        },
        {
          type: "submit",
          text: "Withdraw"
        }
      ]
    }
  },
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card (secondary) with actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
    variant: "secondary",
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
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card (feature) with actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
    variant: "feature",
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
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card (feature) with custom HTML

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Your read",
      size: "m"
    },
    variant: "feature"
  },
  lastRowBorder: false,
  rows: [
    {
      key: {
        text: "Opinion"
      },
      value: {
        html: '<p class="nhsuk-u-margin-bottom-3">\n  <strong class="nhsuk-tag nhsuk-tag--red">\n  Recall for assessment\n</strong>\n\n</p>'
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "opinion"
          }
        ]
      }
    },
    {
      key: {
        text: "Detailed opinion"
      },
      value: {
        html: '<div class="nhsuk-grid-row">\n  <div class="nhsuk-grid-column-one-half">\n    <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">\n      Right breast\n    </p>\n    <p class="nhsuk-u-margin-bottom-3">\n      <strong class="nhsuk-tag nhsuk-tag--red">\n  Abnormal\n</strong>\n\n    </p>\n  </div>\n\n  <div class="nhsuk-grid-column-one-half">\n    <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">\n      Left breast\n    </p>\n    <p class="nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour">\n      Not recorded\n    </p>\n  </div>\n</div>'
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "detailed opinion"
          }
        ]
      }
    },
    {
      key: {
        text: "Annotations"
      },
      value: {
        html: '<p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">\n  Right breast\n</p>\n<p class="nhsuk-u-margin-bottom-0">\n  Microcalcification outside a mass, Clinical abnormality – Level 2 (benign)\n</p>'
      },
      actions: {
        items: [
          {
            href: "#/change",
            text: "Change",
            visuallyHiddenText: "annotations"
          }
        ]
      }
    }
  ]
}) }}
```

#### as a card (clickable) without actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager",
      size: "m"
    },
    href: "#/card-clickable",
    clickable: true
  },
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card (type non-urgent) with actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager"
    },
    variant: "non-urgent",
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
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card (type urgent) with actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager"
    },
    variant: "urgent",
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
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### as a card (type emergency) with actions

```njk
{{ summaryList({
  card: {
    heading: {
      text: "Regional Manager"
    },
    variant: "emergency",
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
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### example person: Karen Francis

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
    }
  ]
}) }}
```

#### example person: Karen Francis (no border)

```njk
{{ summaryList({
  lastRowBorder: false,
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
    }
  ]
}) }}
```

#### example person: Sarah Philips (no border)

```njk
{{ summaryList({
  lastRowBorder: false,
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Philips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
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
| `border` | boolean |  | If set to `false`, remove separating borders from all rows. |
| `lastRowBorder` | boolean |  | If set to `false`, remove separating border from the last row. |
| `rows` | array | ✓ | Array of table rows and cells. |
| `rows.text` | string | ✓ | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows.html` | string | ✓ | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows.visuallyHiddenText` | string |  | A visually hidden suffix added to the table cell. |
| `rows.header` | string |  | Set automatically by table head cells in the `head` option. |
| `rows.href` | string |  | If set, the table cell will become a link. |
| `rows.format` | string |  | Specify format of a cell – `"numeric"` or `"string"`. Defaults to `"string"` |
| `rows.sortValue` | string |  | Sort value text for cells in table rows. |
| `rows.colspan` | integer |  | Specify how many columns a cell spans. |
| `rows.rowspan` | integer |  | Specify how many rows a cell spans. |
| `rows.align` | string |  | Specify the table cell alignment – `"left"`, `"centre"`, or `"right"`. Defaults to `"left"` |
| `rows.width` | string |  | Specify the table cell width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `rows.classes` | string |  | Classes to add to the table cell. |
| `rows.attributes` | object |  | HTML attributes (for example data attributes) to add to the table cell. |
| `head` | array |  | Array of table head cells. |
| `head.text` | string |  | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head.html` | string |  | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head.visuallyHiddenText` | string |  | A visually hidden suffix added to the table head cell. |
| `head.href` | string |  | If set, the table header will become a link for server-side table sorting. Use `sort` to set the column sort direction. |
| `head.format` | string |  | Specify format of a cell – `"numeric"` or `"string"`. Defaults to `"string"` |
| `head.colspan` | integer |  | Specify how many columns a cell spans. |
| `head.rowspan` | integer |  | Specify how many rows a cell spans. |
| `head.align` | string |  | Specify the table head cell alignment – `"left"`, `"centre"`, or `"right"`. Defaults to `"left"` |
| `head.width` | string |  | Specify the table head cell width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `head.classes` | string |  | Classes to add to the table head cell. |
| `head.attributes` | object |  | HTML attributes (for example data attributes) to add to the table head cell. |
| `head.sort` | string |  | The sort direction applied to the column using `aria-sort` – `"ascending"`, `"descending"`, `"none"` or `true`. To enable sorting without a default direction, set `sort` to `"none"` or `true`. |
| `head.sortNext` | string |  | The next sort direction applied to the column using `aria-sort` when clicked – `"ascending"` or `"descending"`. Defaults to `"ascending"`. If you set `sort` to `"ascending"`, `sortNext` defaults to `"descending"`. |
| `caption` | object |  | Table caption. *(accepts nested component params)* |
| `caption.id` | string |  | The ID of the table caption and the `aria-labelledby` attribute in the scrolling container. Defaults to the table `id` option suffixed with `"-caption"`. If neither are provided, the ID is generated from the caption `text` option. |
| `caption.text` | string | ✓ | If `html` is set, this is not required. Text for the table caption. If `html` is provided, the `text` option will be ignored. |
| `caption.html` | string | ✓ | If `text` is set, this is not required. HTML for the table caption. If `html` is provided, the `text` option will be ignored. |
| `caption.visuallyHiddenText` | string |  | Message made available to assistive technologies to describe that the table is sortable. Defaults to `"Column headers are sortable"`. |
| `caption.caption` | object |  | Optional caption for the table caption. *(accepts nested component params)* |
| `caption.size` | string |  | Size of the table caption – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `caption.classes` | string |  | Classes to add to the table caption, for example `"nhsuk-table__caption--l"`. |
| `caption.attributes` | object |  | HTML attributes (for example data attributes) to add to the table caption. |
| `captionClasses` | string |  | Replaced by the `caption.classes` option. |
| `captionSize` | string |  | Replaced by the `caption.size` option. |
| `firstCellIsHeader` | boolean |  | If set to `true`, first cell in table row will be a `th` instead of a `td`. |
| `compact` | boolean |  | If set to `true`, vertical padding will be reduced for table cells. |
| `responsive` | boolean |  | If set to `true`, responsive table classes will be applied. |
| `scroll` | boolean |  | If set to `true`, wrap a scrolling container around the table component. Scrolling tables require the `caption.text` and `caption.id` options. |
| `striped` | boolean |  | If set to `true`, striped background colours will be applied to table rows. |
| `variant` | string |  | Optional variant of table. You can use only `"reverse"` or empty values with this option. |
| `card` | object |  | Can be used to wrap a card around the table component. If any of these options are present, a card will wrap around the table. *(accepts nested component params)* |
| `panel` | boolean |  | Replaced by the `card` option. |
| `panelClasses` | string |  | Replaced by the `card.classes` option. |
| `heading` | string |  | Replaced by the `card.heading.text` option. |
| `headingLevel` | integer |  | Replaced by the `card.heading.level` option. |
| `classes` | string |  | Classes to add to the table container. |
| `tableClasses` | string |  | Replaced by the `classes` option. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the table container. |
| `ascendingText` | string |  | Text for columns in ascending sort order, used to populate the `%{direction}` placeholder in `sortAnnouncementText`. Defaults to `"ascending"`. |
| `descendingText` | string |  | Text for columns in descending sort order, used to populate the `%{direction}` placeholder in `sortAnnouncementText`. Defaults to `"descending"`. |
| `sortAnnouncementText` | string |  | Announcement made to screen reader users when a table column has been sorted. The component will replace the `%{header}` placeholder with the column header, and the `%{direction}` placeholder with the `ascendingText` or `descendingText` option value. |

### Examples

#### default

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
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

#### with column widths

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ]
}) }}
```

#### with custom HTML

```njk
{{ table({
  caption: "Nunjucks macro options",
  firstCellIsHeader: true,
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
        text: "id"
      },
      {
        text: "string"
      },
      {
        text: "The ID of the table."
      }
    ],
    [
      {
        text: "rows"
      },
      {
        text: "array"
      },
      {
        html: '<strong>Required.</strong> The rows within the table component.\n<a href="#/macro-options">See macro options for rows</a>.'
      }
    ],
    [
      {
        text: "head"
      },
      {
        text: "array"
      },
      {
        html: 'Can be used to add a row of table header cells (<code>&lt;th&gt;</code>) at the top of the table component.\n<a href="#/macro-options">See macro options for head</a>.'
      }
    ],
    [
      {
        text: "caption"
      },
      {
        text: "string"
      },
      {
        text: "Caption text."
      }
    ],
    [
      {
        text: "captionClasses"
      },
      {
        text: "string"
      },
      {
        text: "Classes for caption text size. Classes should correspond to the available typography heading classes."
      }
    ],
    [
      {
        text: "firstCellIsHeader"
      },
      {
        text: "string"
      },
      {
        html: "If set to <code>true</code>, the first cell in each row will be a table header (<code>&lt;th&gt;</code>)."
      }
    ],
    [
      {
        text: "classes"
      },
      {
        text: "string"
      },
      {
        text: "Classes to add to the table container."
      }
    ],
    [
      {
        text: "attributes"
      },
      {
        text: "object"
      },
      {
        text: "\tHTML attributes (for example data attributes) to add to the table container."
      }
    ]
  ]
}) }}
```

#### with tags

```njk
{{ table({
  caption: "Tags",
  firstCellIsHeader: true,
  head: ["Name", "Colour", "Tag"],
  rows: [
    [
      "Default",
      "None",
      {
        html: '<strong class="nhsuk-tag">\n  Default\n</strong>\n'
      }
    ],
    [
      "Red",
      {
        html: '<var class="nhsuk-body-s">red</var>'
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--red">\n  Rejected\n</strong>\n'
      }
    ],
    [
      "Blue",
      {
        html: '<var class="nhsuk-body-s">blue</var>'
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--blue">\n  Pending\n</strong>\n'
      }
    ],
    [
      "Green",
      {
        html: '<var class="nhsuk-body-s">green</var>'
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--green">\n  New\n</strong>\n'
      }
    ]
  ]
}) }}
```

#### with first cell as header

```njk
{{ table({
  firstCellIsHeader: true,
  lastRowBorder: false,
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

#### with empty items

```njk
{{ table({
  caption: {
    text: "Vaccinations given",
    size: "m"
  },
  firstCellIsHeader: true,
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

#### with string items

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: ["Skin symptoms", "Possible cause"],
  rows: [
    ["Blisters on lips or around the mouth", "Cold sores"],
    ["Itchy, dry, cracked, sore", "Eczema"],
    ["Itchy blisters", "Shingles, chickenpox"]
  ]
}) }}
```

#### with empty items and string items

```njk
{{ table({
  caption: {
    text: "Vaccinations given",
    size: "m"
  },
  firstCellIsHeader: true,
  head: ["Date", "Vaccine", false],
  rows: [["10 July 2024", "RSV", false], false]
}) }}
```

#### with missing data

```njk
{{ table({
  caption: {
    text: "Vaccinations given",
    size: "m"
  },
  firstCellIsHeader: true,
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

#### with numeric format

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
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
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

#### with numeric format and missing data

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
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
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

#### with numeric format (full width, past day)

```njk
{{ table({
  caption: "Past day",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "3"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "2"
      },
      {
        text: "0"
      }
    ]
  ]
}) }}
```

#### with numeric format (full width, past week)

```njk
{{ table({
  caption: "Past week",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "24"
      },
      {
        text: "18"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "16"
      },
      {
        text: "20"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      },
      {
        text: "27"
      }
    ]
  ]
}) }}
```

#### with numeric format (full width, past month)

```njk
{{ table({
  caption: "Past month",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "98"
      },
      {
        text: "95"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "122"
      },
      {
        text: "131"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "126"
      },
      {
        text: "142"
      }
    ]
  ]
}) }}
```

#### with numeric format (full width, past year)

```njk
{{ table({
  caption: "Past year",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      },
      {
        text: "1472"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      },
      {
        text: "1083"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "1539"
      },
      {
        text: "1265"
      }
    ]
  ]
}) }}
```

#### with word breaks

```njk
{{ table({
  caption: {
    text: "Users",
    size: "m"
  },
  firstCellIsHeader: true,
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
      visuallyHiddenText: "Actions"
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
        html: '<strong class="nhsuk-tag nhsuk-tag--green">\n  Active\n</strong>\n'
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
        html: '<strong class="nhsuk-tag nhsuk-tag--grey">\n  Inactive\n</strong>\n'
      }
    ],
    [
      {
        text: "Karen Francis",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "karen.francis@example.com",
        classes: "nhsuk-u-text-break-word"
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--blue">\n  Thisisaverylongwaytosaythatsomethingisincomplete\n</strong>\n'
      }
    ]
  ]
}) }}
```

#### without border

```njk
{{ table({
  caption: {
    text: "Cases per manager",
    classes: "nhsuk-u-visually-hidden"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ]
}) }}
```

#### without last row border

```njk
{{ table({
  caption: {
    text: "Cases per manager",
    classes: "nhsuk-u-visually-hidden"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ]
}) }}
```

#### as a card

```njk
{{ table({
  card: true,
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
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
    heading: {
      text: "Other conditions like impetigo",
      size: "m"
    },
    variant: "feature"
  },
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "s"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
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

#### as a card (feature) with deprecated options

```njk
{{ table({
  heading: "Other conditions like impetigo",
  headingLevel: 3,
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "s"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  panel: true,
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

#### scrolling

```njk
{{ table({
  caption: {
    id: "scrolling-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

#### scrolling sortable

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

#### scrolling as a card

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ]
}) }}
```

#### scrolling sortable as a card

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ]
}) }}
```

#### scrolling (full width)

```njk
{{ table({
  caption: {
    id: "scrolling-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

#### scrolling sortable (full width)

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

#### sortable

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ]
}) }}
```

#### sortable server-side

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ]
}) }}
```

#### sortable with numeric format

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

#### sortable with numeric format and missing data

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

#### sortable with numeric format and sort values

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item",
      sort: "ascending"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        sortValue: "3",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25",
        sortValue: "31.25"
      },
      {
        text: "£32.05",
        sortValue: "32.05"
      }
    ],
    [
      {
        text: "12-month",
        sortValue: "12",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60",
        sortValue: "111.60"
      },
      {
        text: "£114.50",
        sortValue: "114.50"
      }
    ],
    [
      {
        text: "HRT",
        sortValue: "100"
      },
      {
        text: "£19.30",
        sortValue: "19.30"
      },
      {
        text: "£19.80",
        sortValue: "19.80"
      }
    ]
  ]
}) }}
```

#### sortable with sort values

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "11:00am",
        sortValue: "11:00"
      },
      {
        text: "Laura Stone",
        sortValue: "Stone, Laura"
      },
      {
        text: "4 January 1986",
        sortValue: "1986-01-04"
      }
    ],
    [
      {
        text: "11:30am",
        sortValue: "11:30"
      },
      {
        text: "Emma Katie-Brown",
        sortValue: "Katie-Brown, Emma"
      },
      {
        text: "7 February 1976",
        sortValue: "1976-02-07"
      }
    ],
    [
      {
        text: "1:10pm",
        sortValue: "13:10"
      },
      {
        text: "David Chen",
        sortValue: "Chen, David"
      },
      {
        text: "19 March 1981",
        sortValue: "1981-03-19"
      }
    ],
    [
      {
        text: "1:40pm",
        sortValue: "13:40"
      },
      {
        text: "Michael Thompson",
        sortValue: "Thompson, Michael"
      },
      {
        text: "6 December 1964",
        sortValue: "1964-12-06"
      }
    ],
    [
      {
        text: "2:20pm",
        sortValue: "14:20"
      },
      {
        text: "Juan Martinez",
        sortValue: "Martinez, Juan"
      },
      {
        text: "18 April 1975",
        sortValue: "1975-04-18"
      }
    ]
  ]
}) }}
```

#### sortable with string items

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    ["11:00", "Laura Stone", "4 January 1986"],
    ["11:30", "Emma Katie-Brown", "7 February 1976"],
    ["13:10", "David Chen", "19 March 1981"],
    ["13:40", "Michael Thompson", "6 December 1964"],
    ["14:20", "Juan Martinez", "18 April 1975"]
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
| `id` | string |  | The ID of the tabs component. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for each tab item and panel, separated by `-`. Defaults to the `id` option value. |
| `title` | string |  | Replaced by the `visuallyHiddenText` option. |
| `visuallyHiddenText` | string |  | Visually hidden heading for the tabs contents list items. Defaults to `"Contents"`. |
| `items` | array | ✓ | Array of tab items. |
| `items.id` | string | ✓ | Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.label` | string | ✓ | The text label of a tab item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab. |
| `items.panel` | object | ✓ | Content for the tab panel. |
| `items.panel.text` | string | ✓ | If `html` is set, this is not required. Text for the tab panel. If `html` is provided, the `text` option will be ignored. |
| `items.panel.html` | string | ✓ | If `text` is set, this is not required. HTML for the tab panel. If `html` is provided, the `text` option will be ignored. |
| `items.panel.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab panel. |
| `classes` | string |  | Classes to add to the tabs component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tabs components. |

### Examples

#### default

```njk
{{ tabs({
  idPrefix: "example",
  items: [
    {
      label: "Past day",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past week",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past month",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past year",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

#### with anchor in panel

```njk
{{ tabs({
  idPrefix: "with-anchor",
  items: [
    {
      label: "Tab 1",
      panel: {
        html: '<h2>Tab 1 content</h2>\n<p>Testing that when you <a href="#anchor">click the link</a> it moves focus.</p>\n<ul>\n  <li><a href="#with-anchor-1" id="anchor">Tab panel 1</a></li>\n  <li><a href="#with-anchor-2">Tab panel 2</a></li>\n  <li><a href="#with-anchor-3">Tab panel 3</a></li>\n</ul>'
      }
    },
    {
      label: "Tab 2",
      panel: {
        html: "<h2>Tab 2 content</h2>\n<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>"
      }
    },
    {
      label: "Tab 3",
      panel: {
        html: "<h2>Tab 3 content</h2>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>"
      }
    }
  ]
}) }}
```

#### with id attribute

```njk
{{ tabs({
  id: "tab-id-attribute",
  items: [
    {
      label: "Past day",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past week",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past month",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past year",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

#### with id attribute on panels

```njk
{{ tabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past year",
      id: "past-year",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

#### with visually hidden text

```njk
{{ tabs({
  idPrefix: "visually-hidden",
  visuallyHiddenText: "Cases per manager",
  items: [
    {
      label: "Past day",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past week",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past month",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: "Past year",
      panel: {
        html: '\n<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
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
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire tag component in a `call` block. |
| `classes` | string |  | Classes to add to the tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |
| `colour` | string |  | Optional colour modifier for the tag – `"white"`, `"grey"`, `"green"`, `"aqua-green"`, `"blue"`, `"purple"`, `"pink"`, `"red"`, `"orange"` or `"yellow"`. If set to `false`, remove colour from the tag. |
| `border` | boolean |  | If set to `false`, remove border from the tag. |

### Examples

#### colour class

```njk
{{ tag({
  text: "Green",
  classes: "nhsuk-tag--green"
}) }}
```

#### colour class overriding colour option

```njk
{{ tag({
  text: "Not green",
  colour: "green",
  classes: "nhsuk-tag--red"
}) }}
```

#### with text escaping

```njk
{{ tag({
  text: "A&E",
  colour: "red"
}) }}
```

#### with HTML

```njk
{{ tag({
  html: "A&amp;E",
  colour: "red"
}) }}
```

#### with HTML via call block

```njk
{% call tag({
  colour: "red"
}) %}
A&amp;E
{%- endcall %}
```

#### without border

```njk
{{ tag({
  border: false
}) }}
```

#### without colour

```njk
{{ tag({
  text: "Completed",
  colour: false
}) }}
```

---

## Task list

[↑ Back to top](#table-of-contents)

**Macro name:** `taskList`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the task list. |
| `classes` | string |  | Classes to add to the `ul` container for the task list. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `"-"`. Defaults to `"task-list"`. |
| `items` | array | ✓ | The items for each task within the task list component. |
| `items.title` | object | ✓ | Replaced by the `item.heading` option. *(accepts nested component params)* |
| `items.heading` | object | ✓ | The main heading for the task within the task list component. *(accepts nested component params)* |
| `items.heading.id` | string |  | The ID of the heading. |
| `items.heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `items.heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `items.heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `items.heading.classes` | string |  | Classes to add to the heading. |
| `items.heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `items.hint` | object |  | Can be used to add a hint to each task within the task list component. |
| `items.hint.text` | string | ✓ | Text to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `items.hint.html` | string | ✓ | HTML to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `items.status` | object | ✓ | The status for each task within the task list component. |
| `items.status.tag` | object |  | Can be used to add a tag to the status of the task within the task list component. *(accepts nested component params)* |
| `items.status.text` | string |  | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` option will be ignored. |
| `items.status.html` | string |  | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` option will be ignored. |
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
      heading: {
        text: "Exercise"
      },
      href: "#/task/exercise",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      heading: {
        text: "Personal health"
      },
      href: "#/task/personal-health",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      heading: {
        text: "Family health history"
      },
      hint: {
        text: "Details of your parents, brothers and sisters"
      },
      href: "#/task/family-health-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      heading: {
        text: "Smoking history"
      },
      href: "#/task/smoking-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      heading: {
        text: "Blood test"
      },
      status: {
        tag: {
          text: "Cannot start yet",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal nhsuk-u-secondary-text-colour"
        }
      }
    }
  ]
}) }}
```

#### with deprecated titles

```njk
{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      title: {
        text: "Exercise"
      },
      href: "#/task/exercise",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      title: {
        text: "Personal health"
      },
      href: "#/task/personal-health",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      title: {
        text: "Family health history"
      },
      hint: {
        text: "Details of your parents, brothers and sisters"
      },
      href: "#/task/family-health-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      title: {
        text: "Smoking history"
      },
      href: "#/task/smoking-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      title: {
        text: "Blood test"
      },
      status: {
        tag: {
          text: "Cannot start yet",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal nhsuk-u-secondary-text-colour"
        }
      }
    }
  ]
}) }}
```

#### with deprecated status classes

```njk
{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      title: {
        text: "Exercise"
      },
      href: "#/task/exercise",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    {
      title: {
        text: "Personal health"
      },
      href: "#/task/personal-health",
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
      href: "#/task/family-health-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      title: {
        text: "Smoking history"
      },
      href: "#/task/smoking-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
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

#### with headings and hints as strings

```njk
{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      heading: "Exercise",
      href: "#/task/exercise",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      heading: "Personal health",
      href: "#/task/personal-health",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      heading: "Family health history",
      hint: "Details of your parents, brothers and sisters",
      href: "#/task/family-health-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      heading: "Smoking history",
      href: "#/task/smoking-history",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
        }
      }
    },
    {
      heading: "Blood test",
      status: {
        tag: {
          text: "Cannot start yet",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal nhsuk-u-secondary-text-colour"
        }
      }
    }
  ]
}) }}
```

#### with headings and status text as strings

```njk
{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      heading: "Exercise",
      href: "#/task/exercise",
      status: "Not applicable"
    },
    {
      heading: "Personal health",
      href: "#/task/personal-health",
      status: "Not applicable"
    },
    {
      heading: "Blood test",
      href: "#/task/blood-test",
      status: "Not applicable"
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
      heading: {
        text: "Exercise"
      },
      href: "#/task/exercise",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    {
      heading: {
        text: "Personal health"
      },
      href: "#/task/personal-health",
      status: {
        tag: {
          text: "Completed",
          border: false,
          colour: false,
          classes: "nhsuk-u-font-weight-normal"
        }
      }
    },
    false,
    false,
    {
      heading: {
        text: "Blood test"
      },
      href: "#/task/blood-test",
      status: {
        tag: {
          text: "Incomplete",
          colour: "blue"
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
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"street-address"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |

### Examples

#### default

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

#### disabled

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

#### with hint

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

#### label

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "custom-size",
  name: "example"
}) }}
```

#### without heading

```njk
{{ textarea({
  label: "Can you provide more detail?",
  hint: "Do not include personal information like your name, date of birth or NHS number",
  id: "without-heading",
  name: "example"
}) }}
```

#### with error only

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

#### with error message

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

#### with error message and hint

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

#### with error message and hint as strings

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

#### with error message, without heading

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

#### with error message and hint, without heading

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

#### with autocomplete attribute

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

---

## Warning callout

[↑ Back to top](#table-of-contents)

**Macro name:** `warningCallout`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the warning callout. |
| `heading` | object | ✓ | Heading to be used on the warning callout. *(accepts nested component params)* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.level` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingLevel` | integer |  | Replaced by the `heading.level` option. |
| `headingClasses` | string |  | Replaced by the `heading.classes` option. |
| `text` | string | ✓ | Text content to be used within the warning callout. |
| `html` | string | ✓ | HTML content to be used within the warning callout. |
| `actions` | object |  | Can be used to add actions to the warning callout. |
| `actions.items` | array |  | Array of actions as links for use in the warning callout. |
| `actions.items.id` | string |  | The ID of the action item. |
| `actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `actions.items.name` | string |  | Name for the action as a button. If `type` is set, this has no effect. |
| `actions.items.type` | string |  | Type of action as a button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `actions.items.value` | string |  | The `value` attribute for the action as a button. If `type` is set, this has no effect. |
| `actions.items.href` | string | ✓ | The action `href` attribute. If set, the action will use an `<a>` tag automatically unless `type` is provided. |
| `actions.items.classes` | string |  | Classes to add to the action item. |
| `actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `actions.classes` | string |  | Classes to add to the actions wrapper. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire warning callout component in a `call` block. |
| `classes` | string |  | Classes to add to the warning callout. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the warning callout. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the heading. Defaults to `"Important"`. |

### Examples

#### default

```njk
{{ warningCallout({
  heading: {
    text: "Important"
  },
  text: "For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."
}) }}
```

#### with HTML

```njk
{{ warningCallout({
  heading: {
    text: "Important"
  },
  html: '<p class="nhsuk-card__description">Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>'
}) }}
```

#### with HTML via call block

```njk
{% call warningCallout({
  heading: {
    text: "Important"
  }
}) %}
<p class="nhsuk-card__description">Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>
{%- endcall %}
```

#### with custom heading

```njk
{{ warningCallout({
  heading: {
    text: "School, nursery or work"
  },
  text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

#### with custom heading as string

```njk
{{ warningCallout({
  heading: "School, nursery or work",
  text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

#### without heading

```njk
{{ warningCallout({
  text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

---


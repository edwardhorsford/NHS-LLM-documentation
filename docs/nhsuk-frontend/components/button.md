# Button

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `button`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `element` | string |  | **Deprecated in 10.6.0, do not use.** HTML element for the button – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided. |
| `text` | string | ✓ | If `html` or `ariaLabel` is set, this is not required. Text for the button. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` or `ariaLabel` is set, this is not required. HTML for the button. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire button component in a `call` block. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the button text. Defaults to `"Warning"` for warning buttons. If `ariaLabel` is provided, this has no effect. |
| `name` | string |  | Name for the button. If `href` is provided, this has no effect. |
| `type` | string |  | Type of button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `value` | string |  | The button `value` attribute. If `href` is provided, this has no effect. |
| `disabled` | boolean |  | Whether the button should be disabled. If `href` is provided, this has no effect. |
| `href` | string |  | The button `href` attribute. If set, the button will use an `<a>` tag automatically unless `type` is provided. |
| `openInNewTab` | boolean |  | If set to `true`, then the button link will open in a new tab unless `type` is provided. |
| `variant` | string |  | Optional variant of button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`. |
| `small` | boolean |  | If set to `true`, smaller button size will be used. |
| `className` | string |  | Optional class to use for the button. Defaults to `"nhsuk-button"`. |
| `classes` | string |  | Classes to add to the button. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the button. |
| `ariaLabel` | string |  | Button text exposed to assistive technologies, like screen readers, when only an icon is used. |
| `preventDoubleClick` | boolean |  | Prevent accidental double clicks on submit buttons from submitting forms multiple times. |
| `icon` | object |  | Can be used to add an icon to the button. |
| `icon.name` | string | ✓ | Icon name for the button – for example, `"search"`, `"arrow-right"`, `"plus"` or `"minus"`. |
| `icon.html` | string | ✓ | HTML to use for the icon, as an alternative to the `name` option. If `html` is provided, the `name` option will be ignored. |
| `icon.placement` | string | ✓ | Placement of the icon within the button – `"start"` or `"end"`. |

## Examples

### default

```njk
{{ button({
  text: "Save and continue"
}) }}
```

### default, small

```njk
{{ button({
  text: "Save and continue",
  small: true
}) }}
```

### disabled

```njk
{{ button({
  text: "Disabled button",
  disabled: true
}) }}
```

### disabled, small

```njk
{{ button({
  text: "Disabled button",
  disabled: true,
  small: true
}) }}
```

### login

```njk
{{ button({
  text: "Continue",
  variant: "login"
}) }}
```

### login as a link

```njk
{{ button({
  text: "Continue",
  variant: "login",
  href: "#"
}) }}
```

### login as a link, small

```njk
{{ button({
  text: "Continue",
  variant: "login",
  small: true,
  href: "#"
}) }}
```

### login disabled

```njk
{{ button({
  text: "Continue",
  variant: "login",
  disabled: true
}) }}
```

### login disabled, small

```njk
{{ button({
  text: "Continue",
  variant: "login",
  disabled: true,
  small: true
}) }}
```

### login class overriding variant option

```njk
{{ button({
  text: "Continue",
  variant: "brand",
  classes: "nhsuk-button--login"
}) }}
```

### login, small

```njk
{{ button({
  text: "Continue",
  variant: "login",
  small: true
}) }}
```

### login with icon at end

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

### login with icon at end, small

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

### login with icon at start

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

### login with icon at start, small

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

### reverse

```njk
{{ button({
  text: "Log out",
  variant: "reverse"
}) }}
```

### reverse as a link

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  href: "#"
}) }}
```

### reverse as a link, small

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  small: true,
  href: "#"
}) }}
```

### reverse disabled

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  disabled: true
}) }}
```

### reverse disabled, small

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  disabled: true,
  small: true
}) }}
```

### reverse class overriding variant option

```njk
{{ button({
  text: "Continue",
  variant: "brand",
  classes: "nhsuk-button--reverse"
}) }}
```

### reverse, small

```njk
{{ button({
  text: "Log out",
  variant: "reverse",
  small: true
}) }}
```

### reverse with icon at end

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

### reverse with icon at end, small

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

### reverse with icon at start

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

### reverse with icon at start, small

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

### secondary

```njk
{{ button({
  text: "Find my location",
  variant: "secondary"
}) }}
```

### secondary as a link

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  href: "#"
}) }}
```

### secondary as a link, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  small: true,
  href: "#"
}) }}
```

### secondary disabled

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  disabled: true
}) }}
```

### secondary disabled, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  disabled: true,
  small: true
}) }}
```

### secondary class overriding variant option

```njk
{{ button({
  text: "Continue",
  variant: "brand",
  classes: "nhsuk-button--secondary"
}) }}
```

### secondary, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary",
  small: true
}) }}
```

### secondary, solid background

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid"
}) }}
```

### secondary, solid background as a link

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  href: "#"
}) }}
```

### secondary, solid background as a link, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  small: true,
  href: "#"
}) }}
```

### secondary, solid background disabled

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  disabled: true
}) }}
```

### secondary, solid background disabled, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  disabled: true,
  small: true
}) }}
```

### secondary, solid background class overriding variant option

```njk
{{ button({
  text: "Continue",
  variant: "brand",
  classes: "nhsuk-button--secondary-solid"
}) }}
```

### secondary, solid background, small

```njk
{{ button({
  text: "Find my location",
  variant: "secondary-solid",
  small: true
}) }}
```

### secondary, solid background with icon at end

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

### secondary, solid background with icon at end, small

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

### secondary, solid background with icon at start

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

### secondary, solid background with icon at start, small

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

### secondary with icon at end

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

### secondary with icon at end, small

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

### secondary with icon at start

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

### secondary with icon at start, small

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

### warning

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning"
}) }}
```

### warning as a link

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning",
  href: "#"
}) }}
```

### warning as a link, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  small: true,
  variant: "warning",
  href: "#"
}) }}
```

### warning disabled

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning",
  disabled: true
}) }}
```

### warning disabled, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  variant: "warning",
  small: true,
  disabled: true
}) }}
```

### warning class overriding variant option

```njk
{{ button({
  text: "Continue",
  variant: "brand",
  classes: "nhsuk-button--warning"
}) }}
```

### warning, small

```njk
{{ button({
  text: "Yes, delete this vaccine",
  small: true,
  variant: "warning"
}) }}
```

### warning with icon at end

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

### warning with icon at end, small

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

### warning with icon at start

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

### warning with icon at start, small

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

### with custom class

```njk
{{ button({
  text: "Link as a button",
  className: "nhsuk-link"
}) }}
```

### with double click not prevented

```njk
{{ button({
  text: "Save and continue",
  preventDoubleClick: false
}) }}
```

### with double click prevented

```njk
{{ button({
  text: "Save and continue",
  preventDoubleClick: true
}) }}
```

### with icon

```njk
{{ button({
  text: "Increase",
  icon: "plus"
}) }}
```

### with icon at end

```njk
{{ button({
  text: "Next",
  icon: {
    name: "arrow-right",
    placement: "end"
  }
}) }}
```

### with icon at end, small

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

### with icon at start

```njk
{{ button({
  text: "Previous",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

### with icon at start and visually hidden text

```njk
{{ button({
  text: "Previous",
  visuallyHiddenText: "Important",
  icon: {
    name: "arrow-left",
    placement: "start"
  }
}) }}
```

### with icon at start and visually hidden text, small

```njk
{{ button({
  text: "Previous",
  visuallyHiddenText: "Important",
  icon: {
    name: "arrow-left",
    placement: "start"
  },
  small: true
}) }}
```

### with icon at start, small

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

### with icon HTML

```njk
{{ button({
  text: "Increase",
  icon: {
    html: '<svg class="nhsuk-icon nhsuk-icon--plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">\n  <path d="M13.5 5.5a1.5 1.5 0 0 0-3 0v5h-5a1.5 1.5 0 0 0 0 3h5v5a1.5 1.5 0 0 0 3 0v-5h5a1.5 1.5 0 0 0 0-3h-5v-5Z"/>\n</svg>\n'
  }
}) }}
```

### with icon HTML only

```njk
{{ button({
  ariaLabel: "Increase",
  icon: {
    html: '<svg class="nhsuk-icon nhsuk-icon--plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">\n  <path d="M13.5 5.5a1.5 1.5 0 0 0-3 0v5h-5a1.5 1.5 0 0 0 0 3h5v5a1.5 1.5 0 0 0 3 0v-5h5a1.5 1.5 0 0 0 0-3h-5v-5Z"/>\n</svg>\n'
  }
}) }}
```

### with icon HTML only, small

```njk
{{ button({
  ariaLabel: "Increase",
  icon: {
    html: '<svg class="nhsuk-icon nhsuk-icon--plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">\n  <path d="M13.5 5.5a1.5 1.5 0 0 0-3 0v5h-5a1.5 1.5 0 0 0 0 3h5v5a1.5 1.5 0 0 0 3 0v-5h5a1.5 1.5 0 0 0 0-3h-5v-5Z"/>\n</svg>\n'
  },
  small: true
}) }}
```

### with icon HTML, small

```njk
{{ button({
  text: "Increase",
  icon: {
    html: '<svg class="nhsuk-icon nhsuk-icon--plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">\n  <path d="M13.5 5.5a1.5 1.5 0 0 0-3 0v5h-5a1.5 1.5 0 0 0 0 3h5v5a1.5 1.5 0 0 0 3 0v-5h5a1.5 1.5 0 0 0 0-3h-5v-5Z"/>\n</svg>\n'
  },
  small: true
}) }}
```

### with icon only

```njk
{{ button({
  ariaLabel: "Increase",
  icon: "plus"
}) }}
```

### with icon only, small

```njk
{{ button({
  ariaLabel: "Increase",
  icon: "plus",
  small: true
}) }}
```

### with icon, small

```njk
{{ button({
  text: "Increase",
  icon: "plus",
  small: true
}) }}
```

### without class

```njk
{{ button({
  text: "Default button",
  className: false
}) }}
```

### with small class

```njk
{{ button({
  text: "Save and continue",
  classes: "nhsuk-button--small"
}) }}
```

### with small class overriding small option

```njk
{{ button({
  text: "Save and continue",
  classes: "nhsuk-button--small",
  small: true
}) }}
```

### with visually hidden text

```njk
{{ button({
  text: "Update",
  visuallyHiddenText: "Important"
}) }}
```

### as a link

```njk
{{ button({
  text: "Link button",
  href: "#"
}) }}
```

### as a link opens in a new tab

```njk
{{ button({
  text: "Link button",
  href: "#",
  openInNewTab: true
}) }}
```

### as a link opens in a new tab (with "rel" attribute)

```njk
{{ button({
  text: "Link button",
  href: "#",
  openInNewTab: true,
  attributes: {
    rel: "noopener"
  }
}) }}
```

### as a link opens in a new tab (with "target" and "rel" attributes)

```njk
{{ button({
  text: "Link button",
  href: "#",
  openInNewTab: true,
  attributes: {
    target: "_blank",
    rel: "noopener"
  }
}) }}
```

### as a link opens in a new tab (with "target" attribute)

```njk
{{ button({
  text: "Link button",
  href: "#",
  openInNewTab: true,
  attributes: {
    target: "_blank"
  }
}) }}
```

### as a link, small

```njk
{{ button({
  text: "Link button",
  small: true,
  href: "#"
}) }}
```

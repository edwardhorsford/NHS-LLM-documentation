# Link

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `link`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the link. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the link. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire link component in a `call` block. |
| `visuallyHiddenText` | string |  | Optional alias for the link component `visuallyHidden` option. Defaults to `"end"` placement when set to a string. |
| `visuallyHidden` | object | ✓ | Can be used to add visually hidden content to the link component. If `ariaLabel` is provided, this has no effect. *(accepts nested component params, see [visually-hidden](visually-hidden.md))* |
| `ariaLabel` | string |  | Accessible name identifying the link to screen readers. |
| `name` | string |  | Name for the link as a button. If `href` is provided, this has no effect. |
| `value` | string |  | Link as a button `value` attribute. If `href` is provided, this has no effect. |
| `type` | string |  | Type of link as a button – `"button"` or `"submit"`. |
| `href` | string |  | The link `href` attribute. If set, the link will use an `<a>` tag automatically unless `type` is provided. |
| `openInNewTab` | boolean |  | If set to `true`, then the link will open in a new tab. If `type` is set, this has no effect. |
| `current` | string |  | Identifies the current item to screen readers using `aria-current` – for example, `"page"` or `true`. |
| `variant` | string |  | Optional variant of link. You can use only `"reverse"` or empty values with this option. |
| `moduleName` | string |  | Optional JavaScript module name to use for the link. |
| `className` | string |  | Alternative class to use for the link. Defaults to `"nhsuk-link"`. |
| `classes` | string |  | Classes to add to the link. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the link. |
| `slots` | object |  | Specified points for injecting custom content relative to the link component. |
| `slots.before` | object |  | Custom content injected before the link component. |
| `slots.before.text` | string | ✓ | Custom text injected before the link component. |
| `slots.before.html` | string | ✓ | Custom HTML injected before the link component. |
| `slots.start` | object |  | Custom content injected at the start, within the link component. |
| `slots.start.text` | string | ✓ | Custom text injected at the start, within the link component. |
| `slots.start.html` | string | ✓ | Custom HTML injected at the start, within the link component. |
| `slots.end` | object |  | Custom content injected at the end, within the link component. |
| `slots.end.text` | string | ✓ | Custom text injected at the end, within the link component. |
| `slots.end.html` | string | ✓ | Custom HTML injected at the end, within the link component. |
| `slots.after` | object |  | Custom content injected after the link component. |
| `slots.after.text` | string | ✓ | Custom text injected after the link component. |
| `slots.after.html` | string | ✓ | Custom HTML injected after the link component. |
| `element` | string |  | **Deprecated in 10.7.0, do not use.** Configured automatically if `href` is provided. |

## Examples

### default

```njk
{{ link({
  text: "Change",
  href: "#/change"
}) }}
```

### current

```njk
{{ link({
  text: "Change",
  href: "#/change",
  current: true
}) }}
```

### current "page"

```njk
{{ link({
  text: "Change",
  href: "#/change",
  current: "page"
}) }}
```

### opens in a new tab

```njk
{{ link({
  text: "Change",
  href: "#/change",
  openInNewTab: true
}) }}
```

### opens in a new tab (with "rel" attribute)

```njk
{{ link({
  text: "Change",
  href: "#/change",
  openInNewTab: true,
  attributes: {
    rel: "noopener"
  }
}) }}
```

### opens in a new tab (with "target" and "rel" attributes)

```njk
{{ link({
  text: "Change",
  href: "#/change",
  openInNewTab: true,
  attributes: {
    target: "_blank",
    rel: "noopener"
  }
}) }}
```

### opens in a new tab (with "target" attribute)

```njk
{{ link({
  text: "Change",
  href: "#/change",
  openInNewTab: true,
  attributes: {
    target: "_blank"
  }
}) }}
```

### reverse

```njk
{{ link({
  text: "Change",
  href: "#/change",
  variant: "reverse"
}) }}
```

### with ARIA label

```njk
{{ link({
  text: "Read more",
  href: "#/privacy-policy",
  ariaLabel: "Read more about our privacy policy"
}) }}
```

### with content slots

```njk
{{ link({
  text: "A&E waiting times",
  href: "#/waiting-times",
  slots: {
    before: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    start: {
      html: '<samp class="app-annotate app-annotate--start">Start</samp>'
    },
    end: {
      html: '<samp class="app-annotate app-annotate--end">End</samp>'
    },
    after: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### with custom class

```njk
{{ link({
  text: "Change",
  href: "#/change",
  className: "app-link"
}) }}
```

### with HTML

```njk
{{ link({
  html: "A&amp;E waiting times",
  href: "#/waiting-times"
}) }}
```

### with HTML via call block

```njk
{% call link({
  href: "#/waiting-times"
}) -%}
A&amp;E waiting times
{%- endcall %}
```

### without class

```njk
{{ link({
  text: "Change",
  href: "#/change",
  className: false
}) }}
```

### with reverse class

```njk
{{ link({
  text: "Change",
  href: "#/change",
  classes: "nhsuk-link--reverse"
}) }}
```

### with reverse class overriding reverse variant

```njk
{{ link({
  text: "Change",
  href: "#/change",
  classes: "nhsuk-link--reverse",
  variant: "reverse"
}) }}
```

### with text escaping

```njk
{{ link({
  text: "A&E waiting times",
  href: "#/waiting-times"
}) }}
```

### with visually hidden array of text

```njk
{{ link({
  text: "Change",
  href: "#/change",
  visuallyHidden: ["date of birth", "(Karen Francis)"]
}) }}
```

### with visually hidden HTML

```njk
{{ link({
  text: "Visit",
  href: "#/visit",
  visuallyHidden: {
    html: "A&amp;E",
    slots: {
      start: " "
    }
  }
}) }}
```

### with visually hidden text

```njk
{{ link({
  text: "Change",
  href: "#/change",
  visuallyHidden: "date of birth"
}) }}
```

### with visually hidden text (alias)

```njk
{{ link({
  text: "Change",
  href: "#/change",
  visuallyHiddenText: "date of birth"
}) }}
```

### with visually hidden text "end"

```njk
{{ link({
  text: "Enter your date of birth",
  href: "#/date-of-birth",
  visuallyHidden: {
    text: "(Karen Francis)",
    placement: "end",
    slots: {
      start: " "
    }
  }
}) }}
```

### with visually hidden text escaping

```njk
{{ link({
  text: "Visit",
  href: "#/visit",
  visuallyHidden: {
    text: "A&E",
    slots: {
      start: " "
    }
  }
}) }}
```

### with visually hidden text "start"

```njk
{{ link({
  text: "Enter your date of birth",
  href: "#/date-of-birth",
  visuallyHidden: {
    text: "Error:",
    placement: "start",
    slots: {
      end: " "
    }
  }
}) }}
```

### as a button

```njk
{{ link({
  text: "Change",
  type: "submit"
}) }}
```

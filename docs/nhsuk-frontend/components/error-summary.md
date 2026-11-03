# Error summary

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `errorSummary`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the error summary. |
| `heading` | object | ✓ | Heading of the error summary component. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `titleText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.text` option. |
| `titleHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.html` option. |
| `description` | object |  | Description of the errors. |
| `description.text` | string | ✓ | If `html` is set, this is not required. Text to use for the description of the errors. If `html` is provided, the `text` option will be ignored. |
| `description.html` | string | ✓ | If `text` is set, this is not required. HTML to use for the description of the errors. If `html` is provided, the `text` option will be ignored. |
| `description.classes` | string |  | Classes to add to the error summary body. |
| `description.attributes` | object |  | HTML attributes (for example data attributes) to add to the error summary body. |
| `descriptionText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `description.text` option. |
| `descriptionHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `description.html` option. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array |  | A list of errors to include in the error summary. |
| `errorList.text` | string | ✓ | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.html` | string | ✓ | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.href` | string |  | The error `href` attribute. If set, the error will become a link. |
| `errorList.attributes` | object |  | HTML attributes (for example data attributes) to add to the error link. |
| `disableAutoFocus` | boolean |  | Prevent moving focus to the error summary when the page loads. |
| `classes` | string |  | Classes to add to the error-summary container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error-summary container. |

## Examples

### default

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

### with description

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

### with description as string

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

### with description HTML

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

### with description only

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

### with description via call block

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
}) -%}
Describe the errors and <span>how to correct them</span>
{%- endcall %}
```

### with heading as string

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

### with heading HTML

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

### with multiple errors

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

### with multiple errors (empty items)

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

### without error link

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

### without error link (mixed)

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

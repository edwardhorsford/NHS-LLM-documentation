# Breadcrumb

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `breadcrumb`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the breadcrumb. |
| `items` | array | ✓ | Array of breadcrumbs items. *(accepts nested component params)* |
| `items.text` | string | ✓ | Text to use within the breadcrumbs item. |
| `items.html` | string | ✓ | HTML to use within the breadcrumbs item. |
| `items.href` | string |  | The breadcrumb item `href` attribute. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the individual crumb. |
| `text` | string |  | **Deprecated in 7.1.0, do not use.** Replaced by `item.text` in the `items` option. |
| `href` | string |  | **Deprecated in 7.1.0, do not use.** Replaced by `item.href` in the `items` option. |
| `variant` | string |  | Optional variant of breadcrumb. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |
| `labelText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `ariaLabel` option. |
| `ariaLabel` | string |  | Accessible name identifying the landmark to screen readers. Defaults to "Breadcrumb". |
| `backLink` | object |  | The back link used by the breadcrumbs component on mobile. *(accepts nested component params, see [back-link](back-link.md))* |

## Examples

### default

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

### reverse

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

### with back link as a button

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

### with back link custom text

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

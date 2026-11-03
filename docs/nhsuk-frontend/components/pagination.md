# Pagination

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `pagination`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the pagination container. |
| `items` | array |  | The items within the pagination component. |
| `items.number` | string |  | The pagination item text – usually a page number.  Required unless the item is an ellipsis. |
| `items.visuallyHiddenText` | string |  | **Deprecated in 10.6.0, do not use.** The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". Replaced by the `item.ariaLabel` option. |
| `items.ariaLabel` | string |  | The accessible name for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". |
| `items.href` | string | ✓ | The pagination item `href` attribute. Required unless the item is an ellipsis. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.ellipsis` | boolean |  | Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored. |
| `items.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the link. |
| `previous` | object |  | A link to the previous page, if there is a previous page. |
| `previous.text` | string |  | The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.html` | string |  | The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.labelText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `previous.label.text` option. |
| `previous.label` | object |  | The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. |
| `previous.label.text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `previous.label.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `previous.href` | string | ✓ | The previous page's URL. |
| `previous.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the link. |
| `previousUrl` | string |  | **Deprecated in 10.1.0, do not use.** Replaced by the `previous.href` option. |
| `previousPage` | string |  | **Deprecated in 10.1.0, do not use.** Replaced by the `previous.label.text` option. |
| `next` | object |  | A link to the next page, if there is a next page. |
| `next.text` | string |  | The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.html` | string |  | The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.labelText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `next.label.text` option. |
| `next.label` | object |  | The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. |
| `next.label.text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `next.label.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `next.href` | string | ✓ | The next page's URL. |
| `next.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the link. |
| `nextUrl` | string |  | **Deprecated in 10.1.0, do not use.** Replaced by the `next.href` option. |
| `nextPage` | string |  | **Deprecated in 10.1.0, do not use.** Replaced by the `next.label.text` option. |
| `landmarkLabel` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `ariaLabel` option. |
| `ariaLabel` | string |  | The accessible name for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`. |
| `classes` | string |  | The classes you want to add to the pagination `nav` parent. |
| `attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent. |

## Examples

### default

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

### numbered

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

### numbered first page

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

### numbered last page

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

### numbered with many pages

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

### numbered with many pages (empty items)

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

### numbered with translations

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

### with only next

```njk
{{ pagination({
  next: {
    label: "Symptoms",
    href: "#/section/symptoms"
  }
}) }}
```

### with only previous

```njk
{{ pagination({
  previous: {
    label: "Treatments",
    href: "#/section/treatments"
  }
}) }}
```

### with translations

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

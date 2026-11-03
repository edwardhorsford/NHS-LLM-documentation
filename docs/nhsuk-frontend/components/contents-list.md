# Contents list

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `contentsList`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the contents list. |
| `items` | array | ✓ | Array of contents list items objects. *(accepts nested component params)* |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each contents list item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each contents list item. If `html` is provided, the `text` option will be ignored. |
| `items.href` | string | ✓ | The contents list item `href` attribute. Required unless `item.current` is set. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.classes` | string |  | Classes to add to the contents list item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the contents list item. |
| `classes` | string |  | Classes to add to the contents list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the contents list container. |
| `landmarkLabel` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `ariaLabel` option. |
| `ariaLabel` | string |  | The accessible name for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`. |
| `visuallyHiddenText` | string |  | Visually hidden heading for the contents list items. Defaults to `"Contents"`. |

## Examples

### default

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

### with empty items

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

### with nested lists

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

### with visually hidden text

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

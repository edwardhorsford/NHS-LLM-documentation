# Do and Don't list

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `list`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the do and don't list component. |
| `title` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.text` option. |
| `heading` | object | ✓ | Heading to be displayed on the do and don't list component. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.level` | integer |  | Optional heading level. Defaults to `3`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingLevel` | integer |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.level` option. |
| `icon` | string |  | Optional icon modifier for the do and don't list items – `"cross"` or `"tick"`. Defaults to `"tick"`. |
| `type` | string |  | **Deprecated in 10.4.0, do not use.** Replaced by the `icon` option. |
| `items` | array | ✓ | Array of do and don't items objects. |
| `items.item` | string |  | **Deprecated in 10.1.0, do not use.** Replaced by the `item.text` and `item.html` options. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `prefixText` | string |  | Optional prefix text used before each do and don't item. Defaults to `"do not"` when `type` is `"cross"`. |
| `hidePrefix` | boolean |  | If set to `true`, the optional `prefixText` will be removed from each do and don't item. |
| `classes` | string |  | Classes to add to the do and don't list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the do and don't list container. |

## Examples

### (do) with custom prefix

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

### (do) with empty items

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

### (don't)

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

### (don't) with custom prefix

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

### (don't) with empty items

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

### (don't) with hidden prefix

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

### default

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

### with heading as string

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

### with heading level 1

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

### with heading level 2

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

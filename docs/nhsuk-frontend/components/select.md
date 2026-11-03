# Select

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `select`

## Parameters

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
| `label` | object | ✓ | The label used by the select component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Can be used to add a hint to the select component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
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

## Examples

### default

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

### disabled

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

### disabled option

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

### label

with size S

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "s"
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

[3 more variants of this example](variants/select.md#label)

### with before and after input content

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
  ],
  formGroup: {
    beforeInput: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    afterInput: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### with button

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

### with button and error message

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

### with divider

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

### with error message

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

### with error message and hint

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

### with error message and hint as strings

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

### with error message and hint, without heading

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

### with error message, without heading

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

### with error only

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

### with hint

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

### without heading

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

### with selected value

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

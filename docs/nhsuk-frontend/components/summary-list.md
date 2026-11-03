# Summary list

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `summaryList`

## Parameters

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
| `rows.actions.items` | array |  | The action link items within the row item of the summary list component. *(accepts nested component params)* |
| `rows.actions.items.id` | string |  | The ID of the action item. |
| `rows.actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `rows.actions.items.name` | string |  | Name for the action as a button. If `href` is provided, this has no effect. |
| `rows.actions.items.type` | string |  | Type of action as a button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `rows.actions.items.value` | string |  | The `value` attribute for the action as a button. If `href` is provided, this has no effect. |
| `rows.actions.items.href` | string | ✓ | The action `href` attribute. If set, the action will use an `<a>` tag automatically unless `type` is provided. |
| `rows.actions.items.openInNewTab` | boolean |  | If set to `true`, then the action will open in a new tab. |
| `rows.actions.items.classes` | string |  | Classes to add to the action item. |
| `rows.actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `rows.actions.width` | string |  | Specify the actions wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `rows.actions.classes` | string |  | Classes to add to the actions wrapper. |
| `rows.actions.attributes` | string |  | HTML attributes (for example data attributes) to add to the actions wrapper. |
| `html` | string |  | HTML to use within the summary list. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire summary list component in a `call` block. |
| `card` | object |  | Can be used to wrap a card around the summary list component. If any of these options are present, a card will wrap around the summary list. *(accepts nested component params, see [card](card.md))* |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |

## Examples

### default

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

### with actions

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

### with actions array

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

### with actions as buttons

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

### with item values as array of strings

```njk
{{ summaryList({
  rows: [
    {
      key: "Name",
      value: ["Karen Francis"]
    },
    {
      key: "Appointments",
      value: ["18 November 2023", "5 August 2024"]
    }
  ]
}) }}
```

### with item values as numbers

```njk
{{ summaryList({
  rows: [
    {
      key: "Name",
      value: "Karen Francis"
    },
    {
      key: "Age",
      value: 42
    }
  ]
}) }}
```

### with item values as strings

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

### with item widths

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

### with multiple actions

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

### with multiple actions array

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
      actions: [
        {
          href: "#/change",
          text: "Change",
          visuallyHiddenText: "contact information"
        }
      ]
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
    },
    {
      key: {
        text: "Medicines"
      },
      value: {
        html: "<p>Isotretinoin capsules (Roaccutane)</p>\n<p>Isotretinoin gel (Isotrex)</p>\n<p>Pepto-Bismol (bismuth subsalicylate)</p>"
      },
      actions: [
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
  ]
}) }}
```

### with multiple actions as buttons

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

### with multiple actions (empty items)

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

### without border

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

### without last row border

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

### without specific row border

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

### as a card

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

### as a card (clickable) without actions

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

### as a card (feature) with actions

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

### as a card (feature) with custom HTML

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
        html: '<p class="nhsuk-u-margin-bottom-3">\n  <strong class="nhsuk-tag nhsuk-tag--red">Recall for assessment</strong>\n  \n</p>'
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
        html: '<div class="nhsuk-grid-row">\n  <div class="nhsuk-grid-column-one-half">\n    <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">\n      Right breast\n    </p>\n    <p class="nhsuk-u-margin-bottom-3">\n      <strong class="nhsuk-tag nhsuk-tag--red">Abnormal</strong>\n      \n    </p>\n  </div>\n  <div class="nhsuk-grid-column-one-half">\n    <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">\n      Left breast\n    </p>\n    <p class="nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour">\n      Not recorded\n    </p>\n  </div>\n</div>'
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

### as a card (secondary) with actions

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

### as a card (type emergency) with actions

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

### as a card (type non-urgent) with actions

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

### as a card (type urgent) with actions

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

### as a card with action

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

### as a card with action as a button

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

### as a card with actions

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

### as a card with actions as buttons

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

### as a card with multiple actions

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

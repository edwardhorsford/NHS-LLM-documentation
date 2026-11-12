# Task list

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `taskList`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the task list. |
| `classes` | string |  | Classes to add to the `ul` container for the task list. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `"-"`. Defaults to `"task-list"`. |
| `items` | array | ✓ | The items for each task within the task list component. |
| `items.title` | object |  | **Deprecated in 10.6.0, do not use.** Replaced by the `item.heading` option. *(accepts nested component params)* |
| `items.title.text` | string | ✓ | Text to use within the title. If `html` is provided, the `text` option will be ignored. |
| `items.title.html` | string | ✓ | HTML to use within the title. If `html` is provided, the `text` option will be ignored. |
| `items.title.classes` | string |  | Classes to add to the title wrapper. |
| `items.heading` | object | ✓ | The main heading for the task within the task list component. *(accepts nested component params, see [heading](heading.md))* |
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
| `items.status.tag` | object |  | Can be used to add a tag to the status of the task within the task list component. *(accepts nested component params, see [tag](tag.md))* |
| `items.status.text` | string |  | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` option will be ignored. |
| `items.status.html` | string |  | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` option will be ignored. |
| `items.status.classes` | string |  | Classes to add to the status container. |
| `items.href` | string |  | The task list item link `href` attribute. |
| `items.classes` | string |  | Classes to add to the item `div`. |

## Examples

### default

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

### with empty items

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

### with headings and hints as strings

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

### with headings and status text as strings

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

# Tabs

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `tabs`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the tabs component. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for each tab item and panel, separated by `-`. Defaults to the `id` option value. |
| `title` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `visuallyHiddenText` option. |
| `visuallyHiddenText` | string |  | Visually hidden heading for the tabs contents list items. Defaults to `"Contents"`. |
| `items` | array | ✓ | Array of tab items. |
| `items.id` | string | ✓ | Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.label` | object | ✓ | The label of a tab item. |
| `items.label.text` | string | ✓ | If `html` is set, this is not required. Text for the tab label. If `html` is provided, the `text` option will be ignored. |
| `items.label.html` | string | ✓ | If `text` is set, this is not required. HTML for the tab label. If `html` is provided, the `text` option will be ignored. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab. |
| `items.panel` | object | ✓ | Content for the tab panel. |
| `items.panel.text` | string | ✓ | If `html` is set, this is not required. Text for the tab panel. If `html` is provided, the `text` option will be ignored. |
| `items.panel.html` | string | ✓ | If `text` is set, this is not required. HTML for the tab panel. If `html` is provided, the `text` option will be ignored. |
| `items.panel.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab panel. |
| `classes` | string |  | Classes to add to the tabs component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tabs components. |

## Examples

### default

```njk
{{ tabs({
  idPrefix: "example",
  items: [
    {
      label: {
        text: "Past day"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past week"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past month"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past year"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

### with anchor in panel

```njk
{{ tabs({
  idPrefix: "with-anchor",
  items: [
    {
      label: {
        text: "Tab 1"
      },
      panel: {
        html: '<h2>Tab 1 content</h2>\n<p>Testing that when you <a href="#anchor">click the link</a> it moves focus.</p>\n<ul>\n  <li><a href="#with-anchor-1" id="anchor">Tab panel 1</a></li>\n  <li><a href="#with-anchor-2">Tab panel 2</a></li>\n  <li><a href="#with-anchor-3">Tab panel 3</a></li>\n</ul>'
      }
    },
    {
      label: {
        text: "Tab 2"
      },
      panel: {
        html: "<h2>Tab 2 content</h2>\n<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>"
      }
    },
    {
      label: {
        text: "Tab 3"
      },
      panel: {
        html: "<h2>Tab 3 content</h2>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>"
      }
    }
  ]
}) }}
```

### with id attribute

```njk
{{ tabs({
  id: "tab-id-attribute",
  items: [
    {
      label: {
        text: "Past day"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past week"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past month"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past year"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

### with id attribute on panels

```njk
{{ tabs({
  items: [
    {
      label: {
        text: "Past day"
      },
      id: "past-day",
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past week"
      },
      id: "past-week",
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past month"
      },
      id: "past-month",
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past year"
      },
      id: "past-year",
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

### with labels as strings

```njk
{{ tabs({
  idPrefix: "with-labels-strings",
  items: [
    {
      label: "Tab 1",
      panel: {
        text: "Tab 1 content"
      }
    },
    {
      label: "Tab 2",
      panel: {
        text: "Tab 2 content"
      }
    },
    {
      label: "Tab 3",
      panel: {
        text: "Tab 3 content"
      }
    }
  ]
}) }}
```

### with panels as strings

```njk
{{ tabs({
  idPrefix: "with-panels-strings",
  items: [
    {
      label: {
        text: "Tab 1"
      },
      panel: "Tab 1 content"
    },
    {
      label: {
        text: "Tab 2"
      },
      panel: "Tab 2 content"
    },
    {
      label: {
        text: "Tab 3"
      },
      panel: "Tab 3 content"
    }
  ]
}) }}
```

### with visually hidden text

```njk
{{ tabs({
  idPrefix: "visually-hidden",
  visuallyHiddenText: "Cases per manager",
  items: [
    {
      label: {
        text: "Past day"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past day\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        3\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        2\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        0\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past week"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past week\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        18\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        16\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        20\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        24\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        27\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past month"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past month\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        98\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        95\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        122\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        131\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        126\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        142\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    },
    {
      label: {
        text: "Past year"
      },
      panel: {
        html: '<table class="nhsuk-table">\n  <caption class="nhsuk-table__caption">\n    Past year\n  </caption>\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Case manager\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases opened\n      </th>\n      <th class="nhsuk-table__header nhsuk-table__header--numeric" scope="col">\n        Cases closed\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        David Francis\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1380\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1472\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Paul Farmer\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1129\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1083\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <td class="nhsuk-table__cell">\n        Rita Patel\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1539\n      </td>\n      <td class="nhsuk-table__cell nhsuk-table__cell--numeric">\n        1265\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      }
    }
  ]
}) }}
```

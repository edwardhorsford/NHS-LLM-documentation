# Tables

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `table`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the table. |
| `border` | boolean |  | If set to `false`, remove separating borders from all rows. |
| `lastRowBorder` | boolean |  | If set to `false`, remove separating border from the last row. |
| `rows` | array | ✓ | Array of table rows and cells. |
| `rows.text` | string | ✓ | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows.html` | string | ✓ | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows.visuallyHiddenText` | string |  | A visually hidden suffix added to the table cell. |
| `rows.header` | string |  | **Deprecated in 10.6.0, do not use.** Set automatically by table head cells in the `head` option. |
| `rows.href` | string |  | If set, the table cell will become a link. |
| `rows.openInNewTab` | boolean |  | If set to `true`, then the table cell link will open in a new tab. |
| `rows.format` | string |  | Specify format of a cell – `"numeric"` or `"string"`. Defaults to `"string"` |
| `rows.sortValue` | string |  | Sort value text for cells in table rows. |
| `rows.colspan` | integer |  | Specify how many columns a cell spans. |
| `rows.rowspan` | integer |  | Specify how many rows a cell spans. |
| `rows.align` | string |  | Specify the table cell alignment – `"left"`, `"centre"`, or `"right"`. Defaults to `"left"` |
| `rows.width` | string |  | Specify the table cell width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `rows.classes` | string |  | Classes to add to the table cell. |
| `rows.attributes` | object |  | HTML attributes (for example data attributes) to add to the table cell. |
| `head` | array |  | Array of table head cells. |
| `head.text` | string | ✓ | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head.html` | string | ✓ | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head.visuallyHiddenText` | string |  | A visually hidden suffix added to the table head cell. |
| `head.href` | string |  | If set, the table header will become a link for server-side table sorting. Use `sort` to set the column sort direction. |
| `head.openInNewTab` | boolean |  | If set to `true`, then the table header link will open in a new tab. |
| `head.format` | string |  | Specify format of a cell – `"numeric"` or `"string"`. Defaults to `"string"` |
| `head.colspan` | integer |  | Specify how many columns a cell spans. |
| `head.rowspan` | integer |  | Specify how many rows a cell spans. |
| `head.align` | string |  | Specify the table head cell alignment – `"left"`, `"centre"`, or `"right"`. Defaults to `"left"` |
| `head.width` | string |  | Specify the table head cell width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. |
| `head.classes` | string |  | Classes to add to the table head cell. |
| `head.attributes` | object |  | HTML attributes (for example data attributes) to add to the table head cell. |
| `head.sort` | string |  | The sort direction applied to the column using `aria-sort` – `"ascending"`, `"descending"`, `"none"` or `true`. To enable sorting without a default direction, set `sort` to `"none"` or `true`. |
| `head.sortNext` | string |  | The next sort direction applied to the column using `aria-sort` when clicked – `"ascending"` or `"descending"`. Defaults to `"ascending"`. If you set `sort` to `"ascending"`, `sortNext` defaults to `"descending"`. |
| `caption` | object |  | Table caption. *(accepts nested component params, see [caption](caption.md))* |
| `caption.id` | string |  | The ID of the table caption and the `aria-labelledby` attribute in the scrolling container. Defaults to the table `id` option suffixed with `"-caption"`. If neither are provided, the ID is generated from the caption `text` option. |
| `caption.text` | string | ✓ | If `html` is set, this is not required. Text for the table caption. If `html` is provided, the `text` option will be ignored. |
| `caption.html` | string | ✓ | If `text` is set, this is not required. HTML for the table caption. If `html` is provided, the `text` option will be ignored. |
| `caption.visuallyHiddenText` | string |  | Message made available to assistive technologies to describe that the table is sortable. Defaults to `"Column headers are sortable"`. |
| `caption.caption` | object |  | Optional caption for the table caption. *(accepts nested component params, see [caption](caption.md))* |
| `caption.size` | string |  | Size of the table caption – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `caption.classes` | string |  | Classes to add to the table caption, for example `"nhsuk-table__caption--l"`. |
| `caption.attributes` | object |  | HTML attributes (for example data attributes) to add to the table caption. |
| `captionClasses` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `caption.classes` option. |
| `captionSize` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `caption.size` option. |
| `firstCellIsHeader` | boolean |  | If set to `true`, first cell in table row will be a `th` instead of a `td`. |
| `compact` | boolean |  | If set to `true`, vertical padding will be reduced for table cells. |
| `responsive` | boolean |  | If set to `true`, responsive table classes will be applied. |
| `scroll` | boolean |  | If set to `true`, wrap a scrolling container around the table component. Scrolling tables require the `caption.text` and `caption.id` options. |
| `striped` | boolean |  | If set to `true`, striped background colours will be applied to table rows. |
| `variant` | string |  | Optional variant of table. You can use only `"reverse"` or empty values with this option. |
| `card` | object |  | Can be used to wrap a card around the table component. If any of these options are present, a card will wrap around the table. *(accepts nested component params, see [card](card.md))* |
| `panel` | boolean |  | **Deprecated in 10.3.0, do not use.** Replaced by the `card` option. |
| `panelClasses` | string |  | **Deprecated in 10.3.0, do not use.** Replaced by the `card.classes` option. |
| `heading` | string |  | **Deprecated in 10.3.0, do not use.** Replaced by the `card.heading.text` option. |
| `headingLevel` | integer |  | **Deprecated in 10.3.0, do not use.** Replaced by the `card.heading.level` option. |
| `classes` | string |  | Classes to add to the table container. |
| `tableClasses` | string |  | **Deprecated in 10.3.0, do not use.** Replaced by the `classes` option. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the table container. |
| `ascendingText` | string |  | Text for columns in ascending sort order, used to populate the `%{direction}` placeholder in `sortAnnouncementText`. Defaults to `"ascending"`. |
| `descendingText` | string |  | Text for columns in descending sort order, used to populate the `%{direction}` placeholder in `sortAnnouncementText`. Defaults to `"descending"`. |
| `sortAnnouncementText` | string |  | Announcement made to screen reader users when a table column has been sorted. The component will replace the `%{header}` placeholder with the column header, and the `%{direction}` placeholder with the `ascendingText` or `descendingText` option value. |

## Examples

### default

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#default)

### scrolling

```njk
{{ table({
  caption: {
    id: "scrolling-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#scrolling)

### scrolling as a card

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#scrolling-as-a-card)

### scrolling (full width)

```njk
{{ table({
  caption: {
    id: "scrolling-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#scrolling-full-width)

### scrolling sortable

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#scrolling-sortable)

### scrolling sortable as a card

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#scrolling-sortable-as-a-card)

### scrolling sortable (full width)

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#scrolling-sortable-full-width)

### sortable

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#sortable)

### sortable server-side

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#sortable-server-side)

### sortable with numeric format

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

[1 more variant of this example](variants/tables.md#sortable-with-numeric-format)

### sortable with numeric format and missing data

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

[1 more variant of this example](variants/tables.md#sortable-with-numeric-format-and-missing-data)

### sortable with numeric format and sort values

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item",
      sort: "ascending"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        sortValue: "3",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25",
        sortValue: "31.25"
      },
      {
        text: "£32.05",
        sortValue: "32.05"
      }
    ],
    [
      {
        text: "12-month",
        sortValue: "12",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60",
        sortValue: "111.60"
      },
      {
        text: "£114.50",
        sortValue: "114.50"
      }
    ],
    [
      {
        text: "HRT",
        sortValue: "100"
      },
      {
        text: "£19.30",
        sortValue: "19.30"
      },
      {
        text: "£19.80",
        sortValue: "19.80"
      }
    ]
  ]
}) }}
```

### sortable with sort values

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "11:00am",
        sortValue: "11:00"
      },
      {
        text: "Laura Stone",
        sortValue: "Stone, Laura"
      },
      {
        text: "4 January 1986",
        sortValue: "1986-01-04"
      }
    ],
    [
      {
        text: "11:30am",
        sortValue: "11:30"
      },
      {
        text: "Emma Katie-Brown",
        sortValue: "Katie-Brown, Emma"
      },
      {
        text: "7 February 1976",
        sortValue: "1976-02-07"
      }
    ],
    [
      {
        text: "1:10pm",
        sortValue: "13:10"
      },
      {
        text: "David Chen",
        sortValue: "Chen, David"
      },
      {
        text: "19 March 1981",
        sortValue: "1981-03-19"
      }
    ],
    [
      {
        text: "1:40pm",
        sortValue: "13:40"
      },
      {
        text: "Michael Thompson",
        sortValue: "Thompson, Michael"
      },
      {
        text: "6 December 1964",
        sortValue: "1964-12-06"
      }
    ],
    [
      {
        text: "2:20pm",
        sortValue: "14:20"
      },
      {
        text: "Juan Martinez",
        sortValue: "Martinez, Juan"
      },
      {
        text: "18 April 1975",
        sortValue: "1975-04-18"
      }
    ]
  ]
}) }}
```

### sortable with string items

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    ["11:00", "Laura Stone", "4 January 1986"],
    ["11:30", "Emma Katie-Brown", "7 February 1976"],
    ["13:10", "David Chen", "19 March 1981"],
    ["13:40", "Michael Thompson", "6 December 1964"],
    ["14:20", "Juan Martinez", "18 April 1975"]
  ]
}) }}
```

### with 0 rows

striped

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [],
  striped: true
}) }}
```

[1 more variant of this example](variants/tables.md#with-0-rows)

### with 1 row

striped

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ]
  ],
  striped: true
}) }}
```

[1 more variant of this example](variants/tables.md#with-1-row)

### with 2 rows

striped

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ]
  ],
  striped: true
}) }}
```

[1 more variant of this example](variants/tables.md#with-2-rows)

### with array items

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: ["Skin symptoms", "Possible cause"],
  rows: [
    ["Blisters on lips or around the mouth", "Cold sores"],
    [["Itchy", "dry", "cracked", "sore"], "Eczema"],
    ["Itchy blisters", ["Shingles", "chickenpox"]]
  ]
}) }}
```

### with column widths

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#with-column-widths)

### with custom HTML

```njk
{{ table({
  caption: "Nunjucks macro options",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name"
    },
    {
      text: "Type"
    },
    {
      text: "Description"
    }
  ],
  rows: [
    [
      {
        text: "id"
      },
      {
        text: "string"
      },
      {
        text: "The ID of the table."
      }
    ],
    [
      {
        text: "rows"
      },
      {
        text: "array"
      },
      {
        html: '<strong>Required.</strong> The rows within the table component.\n<a href="#/macro-options">See macro options for rows</a>.'
      }
    ],
    [
      {
        text: "head"
      },
      {
        text: "array"
      },
      {
        html: 'Can be used to add a row of table header cells (<code>&lt;th&gt;</code>) at the top of the table component.\n<a href="#/macro-options">See macro options for head</a>.'
      }
    ],
    [
      {
        text: "caption"
      },
      {
        text: "string"
      },
      {
        text: "Caption text."
      }
    ],
    [
      {
        text: "captionClasses"
      },
      {
        text: "string"
      },
      {
        text: "Classes for caption text size. Classes should correspond to the available typography heading classes."
      }
    ],
    [
      {
        text: "firstCellIsHeader"
      },
      {
        text: "string"
      },
      {
        html: "If set to <code>true</code>, the first cell in each row will be a table header (<code>&lt;th&gt;</code>)."
      }
    ],
    [
      {
        text: "classes"
      },
      {
        text: "string"
      },
      {
        text: "Classes to add to the table container."
      }
    ],
    [
      {
        text: "attributes"
      },
      {
        text: "object"
      },
      {
        text: "\tHTML attributes (for example data attributes) to add to the table container."
      }
    ]
  ]
}) }}
```

### with empty items

```njk
{{ table({
  caption: {
    text: "Vaccinations given",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Vaccine"
    },
    {
      text: "",
      visuallyHiddenText: "Action"
    },
    false
  ],
  rows: [
    [
      {
        text: "10 July 2024"
      },
      {
        text: "RSV"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: false
      },
      false
    ],
    false
  ]
}) }}
```

### with empty items and string items

```njk
{{ table({
  caption: {
    text: "Vaccinations given",
    size: "m"
  },
  firstCellIsHeader: true,
  head: ["Date", "Vaccine", false],
  rows: [["10 July 2024", "RSV", false], true]
}) }}
```

### with first cell as header

```njk
{{ table({
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Day of the week"
    },
    {
      text: "Opening hours"
    }
  ],
  rows: [
    [
      {
        text: "Monday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Tuesday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Wednesday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Thursday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Friday"
      },
      {
        text: "9am to 6pm"
      }
    ],
    [
      {
        text: "Saturday"
      },
      {
        text: "9am to 1pm"
      }
    ],
    [
      {
        text: "Sunday"
      },
      {
        text: "Closed"
      }
    ]
  ]
}) }}
```

### with missing data

```njk
{{ table({
  caption: {
    text: "Vaccinations given",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Vaccine"
    },
    {
      text: "Product"
    }
  ],
  rows: [
    [
      {
        text: "10 July 2024"
      },
      {
        text: "RSV"
      },
      {
        text: "Abrysvo"
      }
    ],
    [
      {
        text: "6 September 2023"
      },
      {
        text: "Flu"
      },
      {
        text: "No data",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ]
  ]
}) }}
```

### with number items

```njk
{{ table({
  caption: {
    text: "Vaccination count",
    size: "m"
  },
  firstCellIsHeader: true,
  head: ["Date", "Vaccine", "Count"],
  rows: [
    ["10 July 2024", "RSV", 0],
    ["6 September 2023", "Flu", 89],
    ["15 October 2023", "MMR", 44]
  ]
}) }}
```

### with numeric format

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#with-numeric-format)

### with numeric format and missing data

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#with-numeric-format-and-missing-data)

### with numeric format (full width, past day)

```njk
{{ table({
  caption: "Past day",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "3"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "2"
      },
      {
        text: "0"
      }
    ]
  ]
}) }}
```

### with numeric format (full width, past month)

```njk
{{ table({
  caption: "Past month",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "98"
      },
      {
        text: "95"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "122"
      },
      {
        text: "131"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "126"
      },
      {
        text: "142"
      }
    ]
  ]
}) }}
```

### with numeric format (full width, past week)

```njk
{{ table({
  caption: "Past week",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "24"
      },
      {
        text: "18"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "16"
      },
      {
        text: "20"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      },
      {
        text: "27"
      }
    ]
  ]
}) }}
```

### with numeric format (full width, past year)

```njk
{{ table({
  caption: "Past year",
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened",
      format: "numeric"
    },
    {
      text: "Cases closed",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      },
      {
        text: "1472"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      },
      {
        text: "1083"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "1539"
      },
      {
        text: "1265"
      }
    ]
  ]
}) }}
```

### without border

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#without-border)

### without last row border

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ]
}) }}
```

[11 more variants of this example](variants/tables.md#without-last-row-border)

### with string items

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: ["Skin symptoms", "Possible cause"],
  rows: [
    ["Blisters on lips or around the mouth", "Cold sores"],
    ["Itchy, dry, cracked, sore", "Eczema"],
    ["Itchy blisters", "Shingles, chickenpox"]
  ]
}) }}
```

### with tags

```njk
{{ table({
  caption: "Tags",
  firstCellIsHeader: true,
  head: ["Name", "Colour", "Tag"],
  rows: [
    [
      "Default",
      "None",
      {
        html: '<strong class="nhsuk-tag">Default</strong>\n'
      }
    ],
    [
      "Red",
      {
        html: '<var class="nhsuk-body-s">red</var>'
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--red">Rejected</strong>\n'
      }
    ],
    [
      "Blue",
      {
        html: '<var class="nhsuk-body-s">blue</var>'
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--blue">Pending</strong>\n'
      }
    ],
    [
      "Green",
      {
        html: '<var class="nhsuk-body-s">green</var>'
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--green">New</strong>\n'
      }
    ]
  ]
}) }}
```

### with word breaks

```njk
{{ table({
  caption: {
    text: "Users",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Name"
    },
    {
      text: "Email address"
    },
    {
      text: "Status"
    },
    {
      visuallyHiddenText: "Actions"
    }
  ],
  rows: [
    [
      {
        text: "Stephanie Meyer",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "stephanie.meyer9@test.com",
        classes: "nhsuk-u-text-break-word"
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--green">Active</strong>\n'
      }
    ],
    [
      {
        text: "Aleksandrina Featherstonehaugh-Whitehead",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com",
        classes: "nhsuk-u-text-break-word"
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--grey">Inactive</strong>\n'
      }
    ],
    [
      {
        text: "Karen Francis",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "karen.francis@example.com",
        classes: "nhsuk-u-text-break-word"
      },
      {
        html: '<strong class="nhsuk-tag nhsuk-tag--blue">Thisisaverylongwaytosaythatsomethingisincomplete</strong>\n'
      }
    ]
  ]
}) }}
```

### as a card

```njk
{{ table({
  card: true,
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#as-a-card)

### as a card (feature)

```njk
{{ table({
  card: {
    heading: {
      text: "Other conditions like impetigo",
      size: "m"
    },
    variant: "feature"
  },
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "s"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ]
}) }}
```

[2 more variants of this example](variants/tables.md#as-a-card-feature)

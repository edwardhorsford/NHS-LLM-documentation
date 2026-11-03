# Footer

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `footer`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the footer. |
| `columns` | integer |  | Number of columns to display per row in the navigation section of the footer – `4`, `3`, `2` or `1`. Defaults to `4`. |
| `navigation` | object |  | The navigation section of the footer before the copyright information. Alternatively supports an array of `navigation` objects. |
| `navigation.heading` | object |  | Heading for group of footer navigation links. *(accepts nested component params, see [heading](heading.md))* |
| `navigation.heading.id` | string |  | The ID of the heading. |
| `navigation.heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `navigation.heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `navigation.heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `navigation.heading.href` | string |  | If set, the heading will become a link. |
| `navigation.heading.openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `navigation.heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `navigation.heading.classes` | string |  | Classes to add to the heading. |
| `navigation.heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `navigation.title` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `navigation.heading.text` option. |
| `navigation.text` | string |  | Optional text to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.html` | string |  | Optional HTML to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.width` | string |  | Width of each navigation section column in the footer. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-quarter"`. |
| `navigation.items` | array |  | Contains the array of footer navigation link items for this group. *(accepts nested component params)* |
| `navigation.items.href` | string | ✓ | Footer navigation link `href` attribute. |
| `navigation.items.openInNewTab` | boolean |  | If set to `true`, then the footer navigation link will open in a new tab. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the footer navigation link. |
| `meta` | object |  | The meta section of the footer after any navigation, before the copyright information. |
| `meta.visuallyHiddenText` | string |  | Visually hidden heading for meta `items` links. Defaults to `"Support links"`. |
| `meta.visuallyHiddenTitle` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `meta.visuallyHiddenText` option. |
| `meta.html` | string |  | HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`. |
| `meta.text` | string |  | Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored. |
| `meta.items` | array |  | Contains the array of key policy footer link items. *(accepts nested component params)* |
| `meta.items.href` | string | ✓ | Footer meta link `href` attribute. |
| `meta.items.openInNewTab` | boolean |  | If set to `true`, then the footer meta link will open in a new tab. |
| `meta.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer meta link. If `html` is provided, the `text` option will be ignored. |
| `meta.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer meta link. If `html` is provided, the `text` option will be ignored. |
| `meta.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the footer meta link. |
| `copyright` | object |  | The copyright information in the footer component, this defaults to `"© NHS England"`. |
| `copyright.text` | string | ✓ | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used. |
| `copyright.html` | string | ✓ | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used. |
| `containerClasses` | string |  | Classes to add to the footer container, useful if you want to make the footer fixed width. |
| `classes` | string |  | Classes to add to the footer container. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire footer component in a `call` block. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the footer container. |

## Examples

### default

```njk
{{ footer({
  meta: {
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

### with copyright text only

```njk
{{ footer() }}
```

### with copyright text string

```njk
{{ footer({
  copyright: "© East London NHS Foundation Trust"
}) }}
```

### with custom copyright text

```njk
{{ footer({
  copyright: {
    text: "© East London NHS Foundation Trust"
  }
}) }}
```

### with meta and navigation

```njk
{{ footer({
  copyright: {
    text: "© Crown copyright"
  },
  navigation: [
    {
      items: [
        {
          href: "#",
          text: "Home"
        },
        {
          href: "#",
          text: "Health A to Z"
        },
        {
          href: "#",
          text: "Live Well"
        },
        {
          href: "#",
          text: "Mental health"
        },
        {
          href: "#",
          text: "Care and support"
        },
        {
          href: "#",
          text: "Accessibility statement"
        },
        {
          href: "#",
          text: "Pregnancy"
        },
        {
          href: "#",
          text: "NHS services"
        },
        {
          href: "#",
          text: "Coronavirus (COVID-19)"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "NHS App"
        },
        {
          href: "#",
          text: "Find my NHS number"
        },
        {
          href: "#",
          text: "Your health records"
        },
        {
          href: "#",
          text: "About the NHS"
        },
        {
          href: "#",
          text: "Healthcare abroad"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "Other NHS websites"
        },
        {
          href: "#",
          text: "Profile editor login"
        }
      ]
    }
  ],
  meta: {
    html: '<p class="nhsuk-body-s">\n  <svg class="nhsuk-u-static-margin-right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 17" aria-hidden="true" focusable="false" height="17" width="41">\n    <path fill="currentColor" d="M35.77 12.4V.02l-4.3 2.8V16.8H41v-4.4Zm-10.38-.83a3.93 3.93 0 0 1-4.29.64 4.09 4.09 0 0 1-2.35-3.71 3.97 3.97 0 0 1 7.36-2.2l3.63-2.35A8.25 8.25 0 0 0 22.75.02c-3.1 0-5.8 1.74-7.22 4.3A8.3 8.3 0 0 0 8.3.02 8.4 8.4 0 0 0 0 8.5a8.4 8.4 0 0 0 8.3 8.48c3.1 0 5.8-1.75 7.22-4.32a8.17 8.17 0 0 0 12.7 2.2l1.64 1.93h.25V9.18h-6.79Zm-17.1 1.02A4.04 4.04 0 0 1 4.3 8.5c0-2.25 1.8-4.08 4-4.08s4 1.82 4 4.08c0 2.25-1.8 4.09-4 4.09"/>\n  </svg>\n  All content is available under the <a class="nhsuk-footer__list-item-link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated.\n</p>',
    items: [
      {
        href: "#",
        text: "About us"
      },
      {
        href: "#",
        text: "Give us feedback"
      },
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Our policies"
      },
      {
        href: "#",
        text: "Cookies"
      }
    ]
  }
}) }}
```

### with meta HTML

```njk
{{ footer({
  meta: {
    html: '<p class="nhsuk-body-s">NHS prototype kit v8.0.0</p>'
  }
}) }}
```

### with meta HTML via call block

```njk
{% call footer() -%}
<p class="nhsuk-body-s">NHS prototype kit v8.0.0</p>
{%- endcall %}
```

### with meta links

```njk
{{ footer({
  meta: {
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

### with meta links and HTML

```njk
{{ footer({
  copyright: {
    text: ""
  },
  meta: {
    html: '<p class="nhsuk-body-s">All content is available under the Open Government Licence v3.0, except where otherwise stated.</p>\n<p class="nhsuk-body-s">© Custom copyright</p>',
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

### with meta links and text

```njk
{{ footer({
  copyright: {
    text: "© Crown copyright"
  },
  meta: {
    text: "All content is available under the Open Government Licence v3.0, except where otherwise stated.",
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

### with meta text

```njk
{{ footer({
  meta: {
    text: "NHS prototype kit v8.0.0"
  }
}) }}
```

### with meta text string

```njk
{{ footer({
  meta: "NHS prototype kit v8.0.0"
}) }}
```

### with multiple navigation groups

```njk
{{ footer({
  copyright: {
    text: "© Crown copyright"
  },
  navigation: [
    {
      items: [
        {
          href: "#",
          text: "Home"
        },
        {
          href: "#",
          text: "Health A to Z"
        },
        {
          href: "#",
          text: "NHS services"
        },
        {
          href: "#",
          text: "Live Well"
        },
        {
          href: "#",
          text: "Mental health"
        },
        {
          href: "#",
          text: "Care and support"
        },
        {
          href: "#",
          text: "Accessibility statement"
        },
        {
          href: "#",
          text: "Pregnancy"
        },
        {
          href: "#",
          text: "COVID-19"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "NHS App"
        },
        {
          href: "#",
          text: "Find my NHS number"
        },
        {
          href: "#",
          text: "View your GP health records"
        },
        {
          href: "#",
          text: "View your test results"
        },
        {
          href: "#",
          text: "About the NHS"
        },
        {
          href: "#",
          text: "Healthcare abroad"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "Other NHS websites"
        },
        {
          href: "#",
          text: "Profile editor login"
        }
      ]
    },
    {
      items: [
        {
          href: "#",
          text: "About us"
        },
        {
          href: "#",
          text: "Give us feedback"
        },
        {
          href: "#",
          text: "Accessibility statement"
        },
        {
          href: "#",
          text: "Our policies"
        },
        {
          href: "#",
          text: "Cookies"
        }
      ]
    }
  ]
}) }}
```

### with multiple navigation groups and custom HTML

```njk
{{ footer({
  copyright: {
    text: "© 2025 – Manchester University NHS Foundation Trust"
  },
  columns: 3,
  navigation: [
    {
      width: "one-quarter",
      items: [
        {
          href: "#",
          text: "About us"
        },
        {
          href: "#",
          text: "Give us feedback"
        },
        {
          href: "#",
          text: "Accessibility statement"
        }
      ]
    },
    {
      width: "one-quarter",
      items: [
        {
          href: "#",
          text: "Cookies"
        },
        {
          href: "#",
          text: "Privacy policy"
        },
        {
          href: "#",
          text: "Terms and conditions"
        }
      ]
    },
    {
      width: "one-half",
      html: '<p class="nhsuk-body-s nhsuk-u-margin-bottom-6"><strong>Manchester\nUniversity NHS Foundation Trust (MFT)</strong> was formed on 1st\nOctober 2017 following the merger of Central Manchester University\nHospitals NHS Foundation Trust (CMFT) and University Hospital of\nSouth Manchester NHS Foundation Trust (UHSM).</p>'
    },
    {
      width: "full",
      html: '<p class="nhsuk-body-s">Cobbett House, Manchester University NHS\nFoundation Trust, Oxford Road, Manchester, M13 9WL</p>'
    }
  ]
}) }}
```

### with multiple navigation groups and headings

```njk
{{ footer({
  navigation: [
    {
      heading: {
        text: "Legal"
      },
      items: [
        {
          href: "#",
          text: "Looking after your data"
        },
        {
          href: "#",
          text: "Freedom of information"
        },
        {
          href: "#",
          text: "Modern Slavery and human trafficking statement"
        }
      ]
    },
    {
      heading: {
        text: "Get in touch"
      },
      items: [
        {
          href: "#",
          text: "Contact us"
        },
        {
          href: "#",
          text: "Press office"
        },
        {
          href: "#",
          text: "Tell us what you think of our website"
        },
        {
          href: "#",
          text: "RSS feeds"
        }
      ]
    },
    {
      heading: {
        text: "Follow us"
      },
      items: [
        {
          href: "#",
          text: "LinkedIn"
        },
        {
          href: "#",
          text: "YouTube"
        }
      ]
    }
  ]
}) }}
```

### with multiple navigation groups and headings as strings

```njk
{{ footer({
  navigation: [
    {
      heading: "Legal",
      items: [
        {
          href: "#",
          text: "Looking after your data"
        },
        {
          href: "#",
          text: "Freedom of information"
        },
        {
          href: "#",
          text: "Modern Slavery and human trafficking statement"
        }
      ]
    },
    {
      heading: "Get in touch",
      items: [
        {
          href: "#",
          text: "Contact us"
        },
        {
          href: "#",
          text: "Press office"
        },
        {
          href: "#",
          text: "Tell us what you think of our website"
        },
        {
          href: "#",
          text: "RSS feeds"
        }
      ]
    },
    {
      heading: "Follow us",
      items: [
        {
          href: "#",
          text: "LinkedIn"
        },
        {
          href: "#",
          text: "YouTube"
        }
      ]
    }
  ]
}) }}
```

### with single navigation group

```njk
{{ footer({
  navigation: {
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      {
        href: "#",
        text: "Contact us"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

### with single navigation group (empty items)

```njk
{{ footer({
  navigation: {
    items: [
      {
        href: "#",
        text: "Accessibility statement"
      },
      false,
      false,
      {
        href: "#",
        text: "Privacy policy"
      },
      {
        href: "#",
        text: "Terms and conditions"
      }
    ]
  }
}) }}
```

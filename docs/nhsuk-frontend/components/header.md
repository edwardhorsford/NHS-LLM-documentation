# Header

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `header`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the header. |
| `logo` | object |  | Object containing options for the logo. |
| `logo.href` | string |  | The logo link `href` attribute. If not set, and a `service.href` is set, or both are set to same value, then the logo and service name will be combined into a single link. |
| `logo.src` | string |  | The path of the logo image, if you are not using the default NHS logo. |
| `logo.alt` | string |  | The alt text for the logo. Defaults to `"NHS"`. |
| `logo.ariaLabel` | string |  | The `aria-label` for a linked logo. Defaults to `"NHS homepage"`. |
| `service` | object |  | Object containing options for the service name. |
| `service.text` | string |  | The text to use for the service name. |
| `service.href` | string |  | The service name link `href` attribute. |
| `inline` | boolean |  | If set to `true`, positions the search box (or account links) inline with the NHS logo. |
| `organisation` | object |  | Settings for header with organisational logo. |
| `organisation.name` | string |  | Organisation name. |
| `organisation.split` | string |  | Longer organisation names can be split onto multiple lines. |
| `organisation.descriptor` | string |  | Organisation descriptor. |
| `navigation` | object |  | Object containing settings for the primary navigation. |
| `navigation.items` | array |  | Array of navigation links for use in the header. *(accepts nested component params)* |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.href` | string |  | The navigation item `href` attribute. |
| `navigation.items.openInNewTab` | boolean |  | If set to `true`, then the navigation item link will open in a new tab. |
| `navigation.items.current` | boolean |  | Set to `true` if this links to the current page being shown. |
| `navigation.items.active` | boolean |  | Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page |
| `navigation.items.classes` | string |  | Classes to add to the list item containing the link. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the list item containing the link. |
| `navigation.ariaLabel` | string |  | The `aria-label` for the primary navigation. Defaults to `"Menu"`. |
| `navigation.toggleMenuText` | string |  | Text for the toggle menu button. Defaults to `"More"`. |
| `navigation.toggleMenuVisuallyHiddenText` | string |  | A visually hidden prefix used before the toggle menu button text. Defaults to `"Browse"`. |
| `navigation.classes` | string |  | Classes to add to the primary navigation. |
| `navigation.attributes` | object |  | HTML attributes (for example data attributes) to add to the primary navigation. |
| `navigation.justified` | boolean |  | If set to `true`, use justified alignment where navigation items appeared evenly spaced out. |
| `navigation.colour` | string |  | Optional colour modifier for the primary navigation. You can use only `"white"` or empty values with this option. |
| `search` | object |  | Object containing settings for a search box. |
| `search.action` | string |  | The search form `action` attribute. Defaults to `"https://www.nhs.uk/search"`. |
| `search.method` | string |  | The search form `method` attribute. Defaults to `"get"`. |
| `search.name` | string |  | The `name` attribute for the search input. Defaults to `"q"`. |
| `search.placeholder` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `search.input.placeholder` option. |
| `search.visuallyHiddenLabel` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `search.label.visuallyHiddenText` option. |
| `search.visuallyHiddenButton` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `search.button.ariaLabel` option. |
| `search.label` | object |  | Optional object allowing customisation of the search input label. *(accepts nested component params, see [label](label.md))* |
| `search.label.visuallyHiddenText` | string |  | The visually hidden label text for the search input. Defaults to `"Search the NHS website"`. |
| `search.input` | object |  | Optional object allowing customisation of the search input. *(accepts nested component params, see [input](input.md))* |
| `search.input.placeholder` | string |  | The placeholder text for the search input. Defaults to `"Search"`. |
| `search.button` | object |  | Optional object allowing customisation of the search button. *(accepts nested component params, see [button](button.md))* |
| `search.button.ariaLabel` | string |  | Search button text exposed to assistive technologies, like screen readers, when only an icon is used. Defaults to `"Search"`. |
| `search.classes` | string |  | Classes to add to the search element. |
| `search.attributes` | object |  | HTML attributes (for example data attributes) to add to the search element. |
| `account` | object |  | Object containing settings for the account section of the header. |
| `account.items` | array |  | Array of account items for use in the header. *(accepts nested component params)* |
| `account.items.text` | string | ✓ | If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` option will be ignored. |
| `account.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` option will be ignored. |
| `account.items.icon` | boolean |  | Whether to include the account icon for the account item. Defaults to `false`. |
| `account.items.href` | string |  | The account item `href` attribute. |
| `account.items.openInNewTab` | boolean |  | If set to `true`, then the account item link will open in a new tab. |
| `account.items.action` | string |  | If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons. |
| `account.items.method` | string |  | The value to use for the `method` of the form if `action` is set. Defaults to `"post"`. |
| `account.items.classes` | string |  | Classes to add to the list item containing the account item. |
| `account.ariaLabel` | string |  | The `aria-label` for the account navigation. Defaults to `"Account"`. |
| `account.classes` | string |  | Classes to add to the account navigation. |
| `account.attributes` | object |  | HTML attributes (for example data attributes) to add to the account navigation. |
| `containerClasses` | string |  | Classes to add to the header container, useful if you want to make the header fixed width. |
| `classes` | string |  | Classes to add to the header container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the header container. |
| `colour` | string |  | Optional colour modifier for the header. You can use only `"white"` or empty values with this option. |

## Examples

### default

```njk
{{ header({
  logo: {
    href: "#"
  },
  service: {
    text: "Digital service manual",
    href: "#"
  },
  search: {
    input: {
      placeholder: "Search"
    },
    label: {
      visuallyHiddenText: "Search the NHS digital service manual"
    }
  },
  navigation: {
    items: [
      {
        text: "NHS service standard",
        href: "#"
      },
      {
        text: "Design system",
        href: "#"
      },
      {
        text: "Content guide",
        href: "#"
      },
      {
        text: "Accessibility",
        href: "#"
      },
      {
        text: "Community and contribution",
        href: "#"
      }
    ]
  }
}) }}
```

### linked logo

blue

```njk
{{ header({
  logo: {
    href: "#"
  }
}) }}
```

[1 more variant of this example](variants/header.md#linked-logo)

### unlinked logo

blue

```njk
{{ header() }}
```

[1 more variant of this example](variants/header.md#unlinked-logo)

### white linked logo, custom

```njk
{{ header({
  colour: "white",
  logo: {
    href: "#",
    src: "/nhsuk-frontend/assets/example-logo.svg",
    alt: "Great Ormond Street Hospital for Children, NHS Foundation Trust"
  }
}) }}
```

### with account inline (logged in)

blue

```njk
{{ header({
  inline: true,
  logo: {
    href: "#"
  },
  account: {
    items: [
      {
        href: "#",
        text: "Account",
        icon: true
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-account-inline-logged-in)

### with account inline (logged out)

blue

```njk
{{ header({
  inline: true,
  logo: {
    href: "#"
  },
  account: {
    items: [
      {
        href: "#",
        text: "Log in"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-account-inline-logged-out)

### with account (logged in)

blue

```njk
{{ header({
  account: {
    items: [
      {
        href: "#",
        text: "florence.nightingale@nhs.net",
        icon: true
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-account-logged-in)

### with account (logged out)

blue

```njk
{{ header({
  account: {
    items: [
      {
        href: "#",
        text: "Log in"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-account-logged-out)

### with navigation

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    items: [
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
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-navigation)

### with navigation (empty items)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  account: {
    items: [
      {
        href: "#",
        text: "Account",
        icon: true
      },
      false,
      false,
      false,
      {
        action: "#",
        text: "Log out"
      }
    ]
  },
  navigation: {
    items: [
      {
        text: "Home",
        href: "/"
      },
      false,
      false,
      false,
      {
        text: "Reports",
        href: "/"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-navigation-empty-items)

### with navigation (justified)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    justified: true,
    items: [
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
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-navigation-justified)

### with navigation (overflow)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  service: {
    text: "Digital service manual",
    href: "#"
  },
  search: {
    input: {
      placeholder: "Search"
    },
    label: {
      visuallyHiddenText: "Search the NHS digital service manual"
    }
  },
  navigation: {
    items: [
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
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      },
      {
        href: "#",
        text: "Another item #1"
      },
      {
        href: "#",
        text: "Another item #2"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-navigation-overflow)

### with navigation (overflow, white)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  service: {
    text: "Digital service manual",
    href: "#"
  },
  search: {
    input: {
      placeholder: "Search"
    },
    label: {
      visuallyHiddenText: "Search the NHS digital service manual"
    }
  },
  navigation: {
    colour: "white",
    items: [
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
        text: "Pregnancy",
        active: true
      },
      {
        href: "#",
        text: "NHS services"
      },
      {
        href: "#",
        text: "Another item #1"
      },
      {
        href: "#",
        text: "Another item #2"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-navigation-overflow-white)

### with navigation (unlinked item)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  navigation: {
    items: [
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
        text: "Pregnancy",
        current: true
      },
      {
        href: "#",
        text: "NHS services"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-navigation-unlinked-item)

### with organisation name

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Business Services Authority"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-organisation-name)

### with organisation name (and descriptor)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace Anywhere",
    descriptor: "NHS Foundation Trust"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-organisation-name-and-descriptor)

### with organisation name (split with descriptor)

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace",
    split: "Anywhere",
    descriptor: "NHS Foundation Trust"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-organisation-name-split-with-descriptor)

### with organisation name (split with descriptor), search

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace",
    split: "Anywhere",
    descriptor: "NHS Foundation Trust"
  },
  search: {
    label: {
      visuallyHiddenText: "Search the Anytown Anyplace Anywhere website"
    }
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-organisation-name-split-with-descriptor-search)

### with search

blue

```njk
{{ header({
  search: true
}) }}
```

[1 more variant of this example](variants/header.md#with-search)

### with search inline

blue

```njk
{{ header({
  inline: true,
  search: true
}) }}
```

[1 more variant of this example](variants/header.md#with-search-inline)

### with service name

blue

```njk
{{ header({
  logo: {
    href: "#"
  },
  service: {
    text: "Find your NHS number"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name)

### with service name, account inline (logged in)

blue

```njk
{{ header({
  inline: true,
  service: {
    text: "Get a self-test kit for HIV",
    href: "#"
  },
  account: {
    items: [
      {
        action: "#",
        text: "Log out"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-account-inline-logged-in)

### with service name, account inline (logged out)

blue

```njk
{{ header({
  inline: true,
  service: {
    text: "Get a self-test kit for HIV",
    href: "#"
  },
  account: {
    items: [
      {
        action: "#",
        text: "Log in"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-account-inline-logged-out)

### with service name as separate link

blue

```njk
{{ header({
  logo: {
    href: "#/logo"
  },
  service: {
    text: "Find your NHS number",
    href: "#/service"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-as-separate-link)

### with service name (linked)

blue

```njk
{{ header({
  logo: {
    href: "#nhs"
  },
  service: {
    text: "Find your NHS number",
    href: "#"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-linked)

### with service name (linked and long), search

blue

```njk
{{ header({
  logo: {
    href: "#nhs"
  },
  service: {
    text: "This a really long service name to fully test wrapping",
    href: "#"
  },
  search: true
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-linked-and-long-search)

### with service name (linked with logo)

blue

```njk
{{ header({
  service: {
    text: "Prototype kit",
    href: "#"
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-linked-with-logo)

### with service name, search, account (logged in, complex), navigation

blue

```njk
{{ header({
  service: {
    href: "#",
    text: "Manage patients"
  },
  search: {
    input: {
      placeholder: "Name or NHS number"
    },
    label: {
      visuallyHiddenText: "Search patients by name or NHS number"
    }
  },
  account: {
    items: [
      {
        href: "#",
        text: "Florence Nightingale",
        icon: true
      },
      {
        text: "Regional Manager, Hull and East Yorkshire Hospitals NHS Trust"
      },
      {
        href: "#",
        text: "Change role"
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  },
  navigation: {
    items: [
      {
        href: "#",
        text: "Home"
      },
      {
        href: "#",
        text: "Create user"
      },
      {
        href: "#",
        text: "Find user"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-search-account-logged-in-complex-navigation)

### with service name, search, account, navigation

blue

```njk
{{ header({
  service: {
    text: "Search patient directory",
    href: "#"
  },
  search: {
    input: {
      placeholder: "Name or NHS number"
    },
    label: {
      visuallyHiddenText: "Search patients by name or NHS number"
    }
  },
  account: {
    items: [
      {
        text: "Florence Nightingale",
        icon: true
      },
      {
        action: "#",
        text: "Log out"
      }
    ]
  },
  navigation: {
    items: [
      {
        href: "#",
        text: "Home"
      },
      {
        href: "#",
        text: "Patient list"
      },
      {
        href: "#",
        text: "Advanced search"
      },
      {
        href: "#",
        text: "Help guides"
      }
    ]
  }
}) }}
```

[1 more variant of this example](variants/header.md#with-service-name-search-account-navigation)

# Header variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [header.md](../header.md).

## linked logo

### white

```njk
{{ header({
  logo: {
    href: "#"
  },
  colour: "white"
}) }}
```

## unlinked logo

### white

```njk
{{ header({
  colour: "white"
}) }}
```

## with account inline (logged in)

### white

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
  },
  colour: "white"
}) }}
```

## with account inline (logged out)

### white

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
  },
  colour: "white"
}) }}
```

## with account (logged in)

### white

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
  },
  colour: "white"
}) }}
```

## with account (logged out)

### white

```njk
{{ header({
  account: {
    items: [
      {
        href: "#",
        text: "Log in"
      }
    ]
  },
  colour: "white"
}) }}
```

## with navigation

### white

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
  },
  colour: "white"
}) }}
```

## with navigation (empty items)

### white

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
  },
  colour: "white"
}) }}
```

## with navigation (justified)

### white

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
  },
  colour: "white"
}) }}
```

## with navigation (overflow)

### white

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
  },
  colour: "white"
}) }}
```

## with navigation (overflow, white)

### white

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
  },
  colour: "white"
}) }}
```

## with navigation (unlinked item)

### white

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
  },
  colour: "white"
}) }}
```

## with organisation name

### white

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Business Services Authority"
  },
  colour: "white"
}) }}
```

## with organisation name (and descriptor)

### white

```njk
{{ header({
  logo: {
    href: "#"
  },
  organisation: {
    name: "Anytown Anyplace Anywhere",
    descriptor: "NHS Foundation Trust"
  },
  colour: "white"
}) }}
```

## with organisation name (split with descriptor)

### white

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
  colour: "white"
}) }}
```

## with organisation name (split with descriptor), search

### white

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
  },
  colour: "white"
}) }}
```

## with search

### white

```njk
{{ header({
  search: true,
  colour: "white"
}) }}
```

## with search inline

### white

```njk
{{ header({
  inline: true,
  search: true,
  colour: "white"
}) }}
```

## with service name

### white

```njk
{{ header({
  logo: {
    href: "#"
  },
  service: {
    text: "Find your NHS number"
  },
  colour: "white"
}) }}
```

## with service name, account inline (logged in)

### white

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
  },
  colour: "white"
}) }}
```

## with service name, account inline (logged out)

### white

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
  },
  colour: "white"
}) }}
```

## with service name as separate link

### white

```njk
{{ header({
  logo: {
    href: "#/logo"
  },
  service: {
    text: "Find your NHS number",
    href: "#/service"
  },
  colour: "white"
}) }}
```

## with service name (linked)

### white

```njk
{{ header({
  logo: {
    href: "#nhs"
  },
  service: {
    text: "Find your NHS number",
    href: "#"
  },
  colour: "white"
}) }}
```

## with service name (linked and long), search

### white

```njk
{{ header({
  logo: {
    href: "#nhs"
  },
  service: {
    text: "This a really long service name to fully test wrapping",
    href: "#"
  },
  search: true,
  colour: "white"
}) }}
```

## with service name (linked with logo)

### white

```njk
{{ header({
  service: {
    text: "Prototype kit",
    href: "#"
  },
  colour: "white"
}) }}
```

## with service name, search, account (logged in, complex), navigation

### white

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
  },
  colour: "white"
}) }}
```

## with service name, search, account, navigation

### white

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
  },
  colour: "white"
}) }}
```

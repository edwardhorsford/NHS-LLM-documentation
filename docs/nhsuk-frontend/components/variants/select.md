# Select variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [select.md](../select.md).

## label

### with size M

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "m"
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

### with size L

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "l"
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

### with size XL

```njk
{{ select({
  label: {
    heading: "Sort by",
    size: "xl"
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

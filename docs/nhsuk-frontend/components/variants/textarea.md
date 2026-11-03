# Textarea variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [textarea.md](../textarea.md).

## label

### with size M

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "m"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "custom-size",
  name: "example"
}) }}
```

### with size L

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "custom-size",
  name: "example"
}) }}
```

### with size XL

```njk
{{ textarea({
  label: {
    heading: "Can you provide more detail?",
    size: "xl"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "custom-size",
  name: "example"
}) }}
```

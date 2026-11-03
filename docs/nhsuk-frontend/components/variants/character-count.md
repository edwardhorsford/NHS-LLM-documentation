# Character count variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [character-count.md](../character-count.md).

## label

### with size M

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "m"
  },
  id: "custom-size",
  name: "example",
  maxlength: 200
}) }}
```

### with size L

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  id: "custom-size",
  name: "example",
  maxlength: 200
}) }}
```

### with size XL

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "xl"
  },
  id: "custom-size",
  name: "example",
  maxlength: 200
}) }}
```

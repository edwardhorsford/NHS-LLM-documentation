# Input variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [input.md](../input.md).

## label

### with size M

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "m"
  },
  id: "custom-size",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with size L

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "l"
  },
  id: "custom-size",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

### with size XL

```njk
{{ input({
  label: {
    heading: "What is your NHS number?",
    size: "xl"
  },
  id: "custom-size",
  name: "example",
  width: 10,
  code: true,
  inputmode: "numeric",
  spellcheck: false
}) }}
```

## width

### with 3 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "3 character width"
  },
  width: 3
}) }}
```

### with 4 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "4 character width"
  },
  width: 4
}) }}
```

### with 5 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "5 character width"
  },
  width: 5
}) }}
```

### with 10 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "10 character width"
  },
  width: 10
}) }}
```

### with 20 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "20 character width"
  },
  width: 20
}) }}
```

### with 30 character

```njk
{{ input({
  name: "example",
  id: "input-width",
  label: {
    text: "30 character width"
  },
  width: 30
}) }}
```

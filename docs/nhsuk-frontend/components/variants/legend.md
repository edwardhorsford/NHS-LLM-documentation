# Legend variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [legend.md](../legend.md).

## text

### with size M

```njk
{{ legend({
  heading: "What is your address?",
  size: "m"
}) }}
```

### with size L

```njk
{{ legend({
  heading: "What is your address?",
  size: "l"
}) }}
```

### with size XL

```njk
{{ legend({
  heading: "What is your address?",
  size: "xl"
}) }}
```

## text and caption

### with size M

```njk
{{ legend({
  text: "What is your home address?",
  caption: "About you",
  size: "m"
}) }}
```

### with size L

```njk
{{ legend({
  text: "What is your home address?",
  caption: "About you",
  size: "l"
}) }}
```

### with size XL

```njk
{{ legend({
  text: "What is your home address?",
  caption: "About you",
  size: "xl"
}) }}
```

## text and caption "after" as a paragraph

### with size M

```njk
{{ legend({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "m"
}) }}
```

### with size L

```njk
{{ legend({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "l"
}) }}
```

### with size XL

```njk
{{ legend({
  text: "What is your home address?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "xl"
}) }}
```

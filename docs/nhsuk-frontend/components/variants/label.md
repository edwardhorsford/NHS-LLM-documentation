# Label variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [label.md](../label.md).

## text

### with size M

```njk
{{ label({
  heading: "What is your full name?",
  size: "m"
}) }}
```

### with size L

```njk
{{ label({
  heading: "What is your full name?",
  size: "l"
}) }}
```

### with size XL

```njk
{{ label({
  heading: "What is your full name?",
  size: "xl"
}) }}
```

## text and caption

### with size M

```njk
{{ label({
  text: "What is your full name?",
  caption: "About you",
  size: "m"
}) }}
```

### with size L

```njk
{{ label({
  text: "What is your full name?",
  caption: "About you",
  size: "l"
}) }}
```

### with size XL

```njk
{{ label({
  text: "What is your full name?",
  caption: "About you",
  size: "xl"
}) }}
```

## text and caption "after" as a paragraph

### with size M

```njk
{{ label({
  text: "What is your full name?",
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
{{ label({
  text: "What is your full name?",
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
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "after",
    element: "p"
  },
  size: "xl"
}) }}
```

## text and caption "before" as a paragraph

### with size M

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "before",
    element: "p"
  },
  size: "m"
}) }}
```

### with size L

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "before",
    element: "p"
  },
  size: "l"
}) }}
```

### with size XL

```njk
{{ label({
  text: "What is your full name?",
  caption: {
    text: "About you",
    placement: "before",
    element: "p"
  },
  size: "xl"
}) }}
```

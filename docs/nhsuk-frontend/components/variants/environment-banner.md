# Environment banner variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [environment-banner.md](../environment-banner.md).

## default

### white

```njk
{{ environmentBanner({
  tag: "Development",
  colour: "white"
}) }}
```

### grey

```njk
{{ environmentBanner({
  tag: "Prototype",
  colour: "grey"
}) }}
```

### green

```njk
{{ environmentBanner({
  tag: "Staging",
  colour: "green"
}) }}
```

### aqua green

```njk
{{ environmentBanner({
  tag: "Sandbox",
  colour: "aqua-green"
}) }}
```

### blue

```njk
{{ environmentBanner({
  tag: "Production",
  colour: "blue"
}) }}
```

### purple

```njk
{{ environmentBanner({
  tag: "Review",
  colour: "purple"
}) }}
```

### pink

```njk
{{ environmentBanner({
  tag: "Demo",
  colour: "pink"
}) }}
```

### red

```njk
{{ environmentBanner({
  tag: "Test",
  colour: "red"
}) }}
```

### orange

```njk
{{ environmentBanner({
  tag: "QA",
  name: "QA",
  colour: "orange"
}) }}
```

### warm yellow

```njk
{{ environmentBanner({
  tag: "Training",
  colour: "warm-yellow"
}) }}
```

### yellow

```njk
{{ environmentBanner({
  tag: "Preview",
  colour: "yellow"
}) }}
```

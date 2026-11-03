# Date input variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [date-input.md](../date-input.md).

## legend

### with size M

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "m"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "custom-size"
}) }}
```

### with size L

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "custom-size"
}) }}
```

### with size XL

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "xl"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "custom-size"
}) }}
```

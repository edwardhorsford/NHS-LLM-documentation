# Code variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [code.md](../code.md).

## button

### with secondary

```njk
{{ code({
  text: "This is a plain text code block",
  button: true
}) }}
```

### with secondary, solid background

```njk
{{ code({
  text: "This is a plain text code block",
  button: true,
  background: "body",
  copyButtonClassList: ["nhsuk-button--secondary-solid", "nhsuk-button--small"]
}) }}
```

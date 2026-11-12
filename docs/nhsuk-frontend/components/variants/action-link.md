# Action link variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [action-link.md](../action-link.md).

## default

### reverse

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  href: "#/find",
  variant: "reverse"
}) }}
```

## with HTML

### reverse

```njk
{{ actionLink({
  html: 'Start session<br>\n<span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>',
  href: "#/start",
  variant: "reverse"
}) }}
```

## as a button

### reverse

```njk
{{ actionLink({
  text: "Find your nearest A&E",
  type: "submit",
  variant: "reverse"
}) }}
```

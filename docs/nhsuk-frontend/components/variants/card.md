# Card variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [card.md](../card.md).

## heading

### basic with size M

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency",
    size: "m"
  }
}) -%}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

### basic with size L

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency",
    size: "l"
  }
}) -%}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

### basic with size XL

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency",
    size: "xl"
  }
}) -%}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

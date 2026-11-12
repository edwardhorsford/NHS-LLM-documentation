# Warning callout

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `warningCallout`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the warning callout. |
| `heading` | object | ✓ | Heading to be used on the warning callout. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.level` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingLevel` | integer |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.level` option. |
| `headingClasses` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.classes` option. |
| `text` | string | ✓ | Text content to be used within the warning callout. |
| `html` | string | ✓ | HTML content to be used within the warning callout. |
| `actions` | object |  | Can be used to add actions to the warning callout. |
| `actions.items` | array |  | Array of actions as links for use in the warning callout. *(accepts nested component params)* |
| `actions.items.id` | string |  | The ID of the action item. |
| `actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `actions.items.name` | string |  | Name for the action as a button. If `href` is provided, this has no effect. |
| `actions.items.type` | string |  | Type of action as a button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `actions.items.value` | string |  | The `value` attribute for the action as a button. If `href` is provided, this has no effect. |
| `actions.items.href` | string | ✓ | The action `href` attribute. If set, the action will use an `<a>` tag automatically unless `type` is provided. |
| `actions.items.openInNewTab` | boolean |  | If set to `true`, then the action will open in a new tab. |
| `actions.items.classes` | string |  | Classes to add to the action item. |
| `actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `actions.classes` | string |  | Classes to add to the actions wrapper. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire warning callout component in a `call` block. |
| `classes` | string |  | Classes to add to the warning callout. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the warning callout. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the heading. Defaults to `"Important"`. |

## Examples

### default

```njk
{{ warningCallout({
  heading: {
    text: "Important"
  },
  text: "For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."
}) }}
```

### with custom heading

```njk
{{ warningCallout({
  heading: {
    text: "School, nursery or work"
  },
  text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

### with custom heading as string

```njk
{{ warningCallout({
  heading: "School, nursery or work",
  text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

### with HTML

```njk
{{ warningCallout({
  heading: {
    text: "Important"
  },
  html: '<p class="nhsuk-card__description">Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>'
}) }}
```

### with HTML via call block

```njk
{% call warningCallout({
  heading: {
    text: "Important"
  }
}) -%}
<p class="nhsuk-card__description">Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>
{%- endcall %}
```

# Details

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `details`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `summary` | object |  | Summary element content (the visible part of the details element). |
| `summary.text` | string | ✓ | If `html` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `html` is provided, the `text` option will be ignored. |
| `summary.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `html` is provided, the `text` option will be ignored. |
| `summary.classes` | string |  | Classes to add to the summary element. |
| `summary.attributes` | object |  | HTML attributes (for example data attributes) to add to the summary element. |
| `summaryText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `summary.text` option. |
| `summaryHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `summary.html` option. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | The `id` to add to the details element. |
| `open` | boolean |  | If `true`, details element will be expanded. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire details component in a `call` block. |
| `variant` | string |  | Optional variant of details. You can use only `"reverse"` or empty values with this option. |
| `classes` | string |  | Classes to add to the details element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the details element. |

## Examples

### default

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you."
}) }}
```

### closed explicitly

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
  open: false
}) }}
```

### expander

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  text: "We are open 9am to 6pm, Monday to Saturday.",
  classes: "nhsuk-expander"
}) }}
```

### expander closed explicitly

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  text: "We are open 9am to 6pm, Monday to Saturday.",
  classes: "nhsuk-expander",
  open: false
}) }}
```

### expander open

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  text: "We are open 9am to 6pm, Monday to Saturday.",
  classes: "nhsuk-expander",
  open: true
}) }}
```

### expander with HTML

```njk
{{ details({
  summary: {
    text: "Opening times"
  },
  html: '<table class="nhsuk-table nhsuk-table--no-last-row-border">\n  <thead class="nhsuk-table__head">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="col">\n        Day of the week\n      </th>\n      <th class="nhsuk-table__header" scope="col">\n        Opening hours\n      </th>\n    </tr>\n  </thead>\n  <tbody class="nhsuk-table__body">\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Monday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Tuesday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Wednesday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Thursday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Friday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 6pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Saturday\n      </th>\n      <td class="nhsuk-table__cell">\n        9am to 1pm\n      </td>\n    </tr>\n    <tr class="nhsuk-table__row">\n      <th class="nhsuk-table__header" scope="row">\n        Sunday\n      </th>\n      <td class="nhsuk-table__cell">\n        Closed\n      </td>\n    </tr>\n  </tbody>\n</table>\n',
  classes: "nhsuk-expander"
}) }}
```

### expander with HTML via call block

```njk
{% call details({
  summary: {
    text: "Opening times"
  },
  classes: "nhsuk-expander"
}) -%}
<table class="nhsuk-table nhsuk-table--no-last-row-border">
  <thead class="nhsuk-table__head">
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="col">
        Day of the week
      </th>
      <th class="nhsuk-table__header" scope="col">
        Opening hours
      </th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Monday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Tuesday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Wednesday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Thursday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Friday
      </th>
      <td class="nhsuk-table__cell">
        9am to 6pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Saturday
      </th>
      <td class="nhsuk-table__cell">
        9am to 1pm
      </td>
    </tr>
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="row">
        Sunday
      </th>
      <td class="nhsuk-table__cell">
        Closed
      </td>
    </tr>
  </tbody>
</table>

{%- endcall %}
```

### open

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
  open: true
}) }}
```

### with HTML

```njk
{{ details({
  summary: {
    text: "How to find your NHS number"
  },
  html: '<p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>\n<p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>\n<ul>\n  <li>prescriptions</li>\n  <li>test results</li>\n  <li>hospital referral letters</li>\n  <li>appointment letters</li>\n</ul>\n<p>Ask your GP surgery for help if you cannot find your NHS number.</p>'
}) }}
```

### with HTML via call block

```njk
{% call details({
  summary: {
    text: "How to find your NHS number"
  }
}) -%}
<p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
<p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
<ul>
  <li>prescriptions</li>
  <li>test results</li>
  <li>hospital referral letters</li>
  <li>appointment letters</li>
</ul>
<p>Ask your GP surgery for help if you cannot find your NHS number.</p>
{%- endcall %}
```

### with summary as string

```njk
{{ details({
  summary: "How to find your NHS number",
  text: "An NHS number is a 10 digit number, like 999 123 4567"
}) }}
```

### with summary HTML

```njk
{{ details({
  summary: {
    html: "How to find your <span>NHS number</span>"
  },
  text: "An NHS number is a 10 digit number, like 999 123 4567"
}) }}
```

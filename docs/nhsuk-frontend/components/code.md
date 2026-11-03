# Code

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `code`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the code component. |
| `text` | string | ✓ | If `html` is set, this is not required. Text for the code element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML for the code element. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire code component in a `call` block. |
| `classes` | string |  | Classes to add to the code container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the code container. |
| `copyButtonClassList` | array |  | Classes to add to the button. Default is `["nhsuk-button--secondary", "nhsuk-button--small"]`. |
| `copyButtonText` | string |  | Button text before the code is copied to clipboard. Defaults to `"Copy code"`. |
| `copiedButtonText` | string |  | Button text when the code is copied to clipboard. Defaults to `"Code copied"`. |
| `copiedAnnouncementText` | string |  | Announcement made to screen reader users when the code is copied to clipboard. Defaults to `"Code copied to clipboard"`. |
| `button` | object |  | Optional object allowing customisation of the copy button. The `button.attributes`, `button.html`, `button.small` and `button.variant` options are not supported. *(accepts nested component params, see [button](button.md))* |
| `button.classes` | string |  | Classes to add to the button. |
| `variant` | string |  | Optional variant of code. You can use only `"reverse"` or empty values with this option. |
| `background` | string |  | Optional background colour for the code element – `"body"` or `"template"`. |
| `border` | boolean |  | If set to `false`, remove border from the code container. |

## Examples

### default

```njk
{{ code({
  text: "This is a plain text code block"
}) }}
```

### button

with primary

```njk
{{ code({
  text: "This is a plain text code block",
  button: true,
  copyButtonClassList: ["nhsuk-button--small"]
}) }}
```

[2 more variants of this example](variants/code.md#button)

### with button double click not prevented

```njk
{{ code({
  text: "This is a plain text code block",
  button: {
    preventDoubleClick: false
  }
}) }}
```

### with button double click prevented

```njk
{{ code({
  text: "This is a plain text code block",
  button: {
    preventDoubleClick: true
  }
}) }}
```

### with custom HTML

```njk
{{ code({
  html: "&lt;p&gt;This is an HTML code block.&lt;/p&gt;"
}) }}
```

### with custom HTML and button

```njk
{{ code({
  html: "&lt;p&gt;This is an HTML code block.&lt;/p&gt;",
  button: true
}) }}
```

### with custom HTML (escaped) and button

```njk
{% call code({
  button: true
}) -%}
&lt;p&gt;This is an HTML code block.&lt;/p&gt;
{%- endcall %}
```

### without border

```njk
{{ code({
  text: "This is a plain text code block",
  border: false
}) }}
```

### with scroll overflow

```njk
{{ code({
  text: "Supercalifragilisticexpialidocious! Even though the sound of it is something quite atrocious, if you say it loud enough, you'll always sound precocious!"
}) }}
```

### with scroll overflow and button

```njk
{{ code({
  text: "Supercalifragilisticexpialidocious! Even though the sound of it is something quite atrocious, if you say it loud enough, you'll always sound precocious!",
  button: true
}) }}
```

### with translations

```njk
{{ code({
  html: "&lt;p&gt;Bloc cod HTML yw hwn.&lt;/p&gt;",
  button: true,
  copyButtonText: "Copïo cod",
  copiedButtonText: "Cod wedi'i gopïo",
  copiedAnnouncementText: "Cod wedi'i gopïo i'r clipfwrdd"
}) }}
```

# Notification banner

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `notificationBanner`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the notification banner. |
| `title` | object |  | The title that displays in the notification banner: - if you do not set `variant`, `title.text` defaults to `"Important"` - if you set `variant` to `"success"`, `title.text` defaults to `"Success"` - if you set `title.text` or `title.html`, the defaults are ignored *(accepts nested component params)* |
| `title.id` | string |  | The ID of the title. |
| `title.text` | string | ✓ | If `html` is set, this is not required. Text for the title. If `html` is provided, the `text` option will be ignored. |
| `title.html` | string | ✓ | If `text` is set, this is not required. HTML for the title. If `html` is provided, the `text` option will be ignored. |
| `title.visuallyHiddenText` | string |  | A visually hidden suffix added to the title. |
| `title.headingLevel` | integer |  | Optional alias for the title heading `level` option. |
| `title.level` | integer |  | Optional heading level for the title. Defaults to `2`. |
| `title.classes` | string |  | Classes to add to the title. |
| `title.attributes` | object |  | HTML attributes (for example data attributes) to add to the title. |
| `titleId` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `title.id` option. |
| `titleText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `title.text` option. |
| `titleHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `title.html` option. |
| `titleHeadingLevel` | integer |  | **Deprecated in 10.6.0, do not use.** Replaced by the `title.level` option. |
| `heading` | object |  | Heading to be used within the notification banner. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `heading.level` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `heading.element` | string |  | HTML element for the heading – for example, `"p"`. Defaults to the `level` option prefixed with `"h"`. |
| `text` | string | ✓ | The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored. |
| `html` | string | ✓ | The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire notification banner component in a `call` block. |
| `variant` | string |  | Optional variant of notification banner. You can use only `"success"` or empty values with this option. If you set `variant` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `variant`, the notification banner sets `role` to `"region"`. |
| `type` | string |  | **Deprecated in 10.4.0, do not use.** Replaced by the `variant` option. |
| `role` | string |  | Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `variant` to `"success"`, `role` defaults to `"alert"`. |
| `disableAutoFocus` | boolean |  | If you set `variant` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`. |
| `classes` | string |  | The classes that you want to add to the notification banner. |
| `attributes` | object |  | The HTML attributes that you want to add to the notification banner, for example, data attributes. |

## Examples

### default

```njk
{{ notificationBanner({
  text: "The patient record was updated."
}) }}
```

### paragraph with heading class

```njk
{{ notificationBanner({
  heading: {
    text: "You have 9 days to send a response.",
    element: "p"
  }
}) }}
```

### success with HTML

```njk
{{ notificationBanner({
  variant: "success",
  heading: {
    text: "4 files uploaded"
  },
  html: '<ul class="nhsuk-list">\n  <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>\n  <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>\n</ul>'
}) }}
```

### success with HTML via call block

```njk
{% call notificationBanner({
  variant: "success",
  heading: {
    text: "4 files uploaded"
  }
}) -%}
<ul class="nhsuk-list">
  <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
  <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
</ul>
{%- endcall %}
```

### with a list

```njk
{{ notificationBanner({
  heading: {
    text: "4 files uploaded"
  },
  html: '<ul class="nhsuk-list nhsuk-list--bullet">\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v2.pdf</a></li>\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>\n  <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>\n</ul>'
}) }}
```

### with custom title

```njk
{{ notificationBanner({
  title: {
    text: "Important information"
  },
  text: "The patient record was updated."
}) }}
```

### with custom title as string

```njk
{{ notificationBanner({
  title: "Important information",
  text: "The patient record was updated."
}) }}
```

### with HTML

```njk
{{ notificationBanner({
  heading: {
    text: "The patient record was updated"
  },
  html: '<p class="nhsuk-body">\n  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there\'s a problem.\n</p>'
}) }}
```

### with HTML and heading as string

```njk
{{ notificationBanner({
  heading: "The patient record was updated",
  html: '<p class="nhsuk-body">\n  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there\'s a problem.\n</p>'
}) }}
```

### with HTML via call block

```njk
{% call notificationBanner({
  heading: {
    text: "The patient record was updated"
  }
}) -%}
<p class="nhsuk-body">
  Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
</p>
{%- endcall %}
```

### with long heading

```njk
{{ notificationBanner({
  text: "The patient record was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters."
}) }}
```

### with lots of content

```njk
{{ notificationBanner({
  heading: {
    text: "Check if you need to apply the reverse charge to this application"
  },
  html: '<p class="nhsuk-body">\n  You will have to apply the <a href="#" class="nhsuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:\n</p>\n<ul class="nhsuk-list nhsuk-list--bullet">\n  <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>\n  <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>\n</ul>'
}) }}
```

### with success variant

```njk
{{ notificationBanner({
  variant: "success",
  text: "Email sent to example@email.com"
}) }}
```

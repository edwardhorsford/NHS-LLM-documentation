# NHS Frontend Component Reference

---
**Auto-generated Documentation**

- **NHS Frontend Version:** 10.3.1
- **Git Branch:** detached
- **Git Commit:** b3c4f56
- **Generated:** 2026-02-26 14:22:55 UTC
- **Source:** [NHS Frontend Repository](https://github.com/nhsuk/nhsuk-frontend)

*This documentation is automatically extracted from NHS Frontend component definitions. Do not edit manually.*

---

Reference guide for NHS Frontend components includes all parameters and examples. Use the table of contents to skip to relevant sections.

## Table of Contents

### Form Inputs
- [Character count](#character-count)
- [Checkboxes](#checkboxes)
- [Date input](#date-input)
- [File upload](#file-upload)
- [Input](#input)
- [Password input](#password-input)
- [Radios](#radios)
- [Select](#select)
- [Textarea](#textarea)

### Form Controls
- [Button](#button)
- [Error message](#error-message)
- [Fieldset](#fieldset)
- [Hint text](#hint-text)
- [Label](#label)

### Navigation
- [Back link](#back-link)
- [Breadcrumb](#breadcrumb)
- [Contents list](#contents-list)
- [Pagination](#pagination)
- [Skip link](#skip-link)

### Content
- [Action link](#action-link)
- [Card](#card)
- [Details](#details)
- [Do and Don't list](#do-and-don't-list)
- [Hero](#hero)
- [Images](#images)
- [Inset text](#inset-text)
- [Legend](#legend)
- [Panel](#panel)
- [Summary list](#summary-list)
- [Tables](#tables)
- [Tabs](#tabs)
- [Tag](#tag)
- [Task list](#task-list)

### Layout
- [Footer](#footer)
- [Header](#header)

### Notifications
- [Error summary](#error-summary)
- [Notification banner](#notification-banner)
- [Warning callout](#warning-callout)

---

## Action link

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the action link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the action link. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the action link. If `html` is provided, the `text` option will be ignored. |
| `href` | string | ✓ | The value of the link `href` attribute. |
| `openInNewWindow` | boolean |  | If set to `true`, then the link will open in a new window. |
| `classes` | string |  | Classes to add to the anchor tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the anchor tag. |

---

## Back link

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the back link. |
| `text` | string |  | Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`. |
| `html` | string |  | HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`. |
| `href` | string |  | The value of the link `href` attribute. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |
| `visuallyHiddenText` | string |  | An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component. |
| `element` | string |  | HTML element for the back link component – `"button"` or `"a"`. If not provided, defaults to `"a"`. |

---

## Breadcrumb

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the breadcrumb. |
| `items` | array | ✓ | Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page. |
| `items.text` | string | ✓ | Text to use within the breadcrumbs item. |
| `items.href` | string |  | The value of the breadcrumb item link `href` attribute. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the individual crumb. |
| `text` | string | ✓ | Text to use for the parent page. |
| `href` | string | ✓ | The value of the parent page link `href` attribute. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |
| `labelText` | string |  | Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". |
| `backLink` | object |  | The back link used by the breadcrumbs component on mobile. |

---

## Button

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `element` | string |  | HTML element for the button component – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided. |
| `text` | string | ✓ | If `html` is set, this is not required. Text for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`. |
| `name` | string |  | Name for the `input` or `button`. This has no effect on `a` elements. |
| `type` | string |  | Type of `input` or `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements. |
| `value` | string |  | The `value` attribute for the `button` tag. This has no effect on `a` or `input` elements. |
| `disabled` | boolean |  | Whether the button should be disabled. For button and input elements, `disabled` and `aria-disabled` attributes will be set automatically. |
| `href` | string |  | The URL that the button should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined. |
| `classes` | string |  | Classes to add to the button component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the button component. |
| `preventDoubleClick` | boolean |  | Prevent accidental double clicks on submit buttons from submitting forms multiple times. |

---

## Card

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the card. |
| `heading` | string | ✓ | Text to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored. |
| `headingHtml` | string | ✓ | HTML to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored. |
| `headingClasses` | string |  | Classes to add to the card heading. |
| `headingSize` | string |  | Size of the heading – `"xss"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `headingLevel` | integer |  | Optional heading level for the card heading. Defaults to `2`. |
| `headingId` | string |  | Optional `id` attribute for the card heading. |
| `headingVisuallyHiddenText` | string |  | Optional visually hidden prefix used before the heading. |
| `href` | string |  | The value of the card link `href` attribute. |
| `clickable` | boolean |  | If set to `true`, then the whole card will become a clickable card variant. |
| `type` | string |  | Care card variant type – `"non-urgent"`, `"urgent"` or `"emergency"`. |
| `feature` | boolean |  | If set to `true`, then the card will become a feature card variant. |
| `primary` | boolean |  | If set to `true`, the card will become a primary card variant (with chevron). |
| `secondary` | boolean |  | If set to `true`, the card will become a secondary card variant. |
| `warning` | boolean |  | If set to `true`, then the card will become a warning card variant used by the warning callout. |
| `image` | object |  | Can be used to add an image to the card component. |
| `image.src` | string | ✓ | The URL of the image in the card. |
| `image.alt` | string |  | The alternative text of the image in the card. |
| `image.html` | string |  | HTML to use for the image content. If `html` is provided, the `src` and `alt` arguments will be ignored. |
| `description` | string |  | Text description within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored. |
| `descriptionHtml` | string |  | HTML to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored. |
| `actions` | object |  | Can be used to add actions to the card component. |
| `actions.items` | array |  | Array of actions as links for use in the card component. |
| `actions.items.href` | string | ✓ | The value of the link's `href` attribute for an action item. |
| `actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `actions.items.classes` | string |  | Classes to add to the action item. |
| `actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `actions.classes` | string |  | Classes to add to the actions wrapper. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire card component in a `call` block. |
| `classes` | string |  | Classes to add to the card. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the card. |

---

## Character count

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `maxlength` | string | ✓ | If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored. |
| `maxwords` | string | ✓ | If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored. |
| `threshold` | string |  | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. |
| `label` | object | ✓ | The label used by the character count component. |
| `hint` | object |  | Can be used to add a hint to the character count component. |
| `errorMessage` | object |  | Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the character count component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the textarea used by the character count component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the textarea used by the character count component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the textarea. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the character count. |
| `countMessage` | object |  | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string |  | Classes to add to the count message. |
| `textareaDescriptionText` | string |  | Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` parameter. |

---

## Checkboxes

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the checkboxes component. |
| `describedBy` | string |  | One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users. |
| `fieldset` | object |  | Can be used to add a fieldset to the checkboxes component. |
| `hint` | object |  | Can be used to add a hint to the checkboxes component. |
| `errorMessage` | object |  | Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the checkboxes component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before all checkbox items within the checkboxes component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after all checkbox items within the checkboxes component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | ✓ | The `name` attribute for all checkbox items. |
| `items` | array | ✓ | The checkbox items within the checkboxes component. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items.id` | string |  | Specific `id` attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied. |
| `items.name` | string |  | Specific `name` attribute for the checkbox item. If omitted, then component global `name` string will be applied. |
| `items.value` | string | ✓ | The `value` attribute for the checkbox input. |
| `items.label` | object |  | Subset of options for the label used by each checkbox item within the checkboxes component. |
| `items.label.classes` | string |  | Classes to add to the label tag. |
| `items.label.attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |
| `items.hint` | object |  | Can be used to add a hint to each checkbox item within the checkboxes component. |
| `items.divider` | string |  | Divider text to separate checkbox items, for example the text `"or"`. |
| `items.checked` | boolean |  | Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the checkbox is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the checkbox is checked. |
| `items.disabled` | boolean |  | If `true`, checkbox will be disabled. |
| `items.classes` | string |  | Classes to add to the checkbox input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `items.exclusive` | boolean |  | If set to `true`, marks this checkbox as the None option in a None of these type behaviour. Unchecking all other checkboxes in the group when None is clicked. |
| `items.exclusiveGroup` | string |  | Used in conjunction with `exclusive` - this should be set to a string which groups checkboxes together into a set for use in a None of these scenario. |
| `values` | array |  | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string |  | Classes to add to the checkboxes container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the checkboxes container. |

---

## Contents list

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the contents list. |
| `items` | array | ✓ | Array of content list items objects. |
| `items.href` | string | ✓ | The `href` attribute for the content list item label. Required unless `item.current` is set. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each content list item label. If `html` is provided, the `text` argument will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each content list item label. If `html` is provided, the `text` argument will be ignored. |
| `items.classes` | string |  | Classes to add to the content list item label. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the content list item label. |
| `landmarkLabel` | string |  | The label for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`. |
| `classes` | string |  | Classes to add to the content list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the content list container. |
| `visuallyHiddenTitle` | string |  | Visually hidden title for the contents list items. Defaults to `"Contents"`. |

---

## Date input

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✓ | This is used for the main component and to compose the `id` attribute for each item. |
| `namePrefix` | string |  | Optional prefix. This is used to prefix each date input `name` attribute, wrapped in `[` and `]`. For example, setting `namePrefix: "dob"` will output the `name` attributes `dob[day]`, `dob[month]` and `dob[year]` respectively. |
| `items` | array |  | The inputs within the date input component. |
| `items.id` | string |  | Item-specific `id` attribute. If provided, it will be used instead of the generated ID. |
| `items.name` | string | ✓ | Item-specific `name` attribute. |
| `items.label` | string |  | Item-specific label text. If provided, this will be used instead of `name` for item label text. |
| `items.inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). Defaults to `"numeric"`. |
| `items.value` | string |  | If provided, it will be used as the initial `value` attribute of the input. |
| `items.autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `items.pattern` | string |  | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `items.classes` | string |  | Classes to add to date input item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the date input tag. |
| `hint` | object |  | Can be used to add a hint to a date input component. |
| `errorMessage` | object |  | Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `fieldset` | object |  | Can be used to add a fieldset to the date input component. |
| `values` | object |  | An optional object use to specify `value` attributes for the date parts without setting items. |
| `values.day` | string |  | The `value` attribute for the day input. |
| `values.month` | string |  | The `value` attribute for the month input. |
| `values.year` | string |  | The `value` attribute for the year input. |
| `classes` | string |  | Classes to add to the date-input container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the date-input container. |

---

## Details

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `summaryText` | string | ✓ | If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `summaryHtml` | string | ✓ | If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | The `id` to add to the details element. |
| `open` | boolean |  | If `true`, details element will be expanded. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block. |
| `classes` | string |  | Classes to add to the details element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the details element. |

---

## Do and Don't list

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the do and don't list component. |
| `title` | string | ✓ | Title to be displayed on the do and don't list component. |
| `type` | string | ✓ | Type of do and don't list component – `"cross"` or `"tick"`. |
| `items` | array | ✓ | Array of do and don't items objects. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each do and don't item. If `html` is provided, the `text` option will be ignored. |
| `prefixText` | string |  | Optional prefix text used before each do and don't item. Defaults to `"do not"` when `type` is `"cross"`. |
| `hidePrefix` | boolean |  | If set to `true`, the optional `prefixText` will be removed from each do and don't item. |
| `headingLevel` | integer |  | Optional heading level for the title heading. Defaults to `3`. |
| `classes` | string |  | Classes to add to the do and don't list container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the do and don't list container. |

---

## Error message

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `id` | string |  | The `id` attribute to add to the error message `<span>` tag. |
| `classes` | string |  | Classes to add to the error message `<span>` tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error message `<span>` tag. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the error message. Defaults to `"Error"`. |

---

## Error summary

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the error summary. |
| `titleText` | string | ✓ | If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `titleHtml` | string | ✓ | If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `descriptionText` | string |  | Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`. |
| `descriptionHtml` | string |  | HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`. |
| `caller` | nunjucks-block |  | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array |  | A list of errors to include in the error summary. |
| `errorList.href` | string |  | The `href` attribute for the error link item. If provided item will be an anchor. |
| `errorList.text` | string | ✓ | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.html` | string | ✓ | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.attributes` | object |  | HTML attributes (for example data attributes) to add to the error link anchor. |
| `disableAutoFocus` | boolean |  | Prevent moving focus to the error summary when the page loads. |
| `classes` | string |  | Classes to add to the error-summary container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the error-summary container. |

---

## Fieldset

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the fieldset. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `legend` | object |  | The legend for the fieldset component. |
| `classes` | string |  | Classes to add to the fieldset container. |
| `role` | string |  | Optional ARIA `role` attribute. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the fieldset container. |
| `html` | string |  | HTML to use/render within the fieldset element. |
| `caller` | nunjucks-block |  | Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block. |

---

## File upload

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `disabled` | boolean |  | If `true`, file input will be disabled. |
| `multiple` | boolean |  | If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the file upload component. |
| `hint` | object |  | Can be used to add a hint to the file upload component. |
| `errorMessage` | object |  | Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the file upload component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the file upload component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the file upload component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `chooseFilesButtonClassList` | array |  | Classes to add to the button that opens the file picker. Default is `["nhsuk-button--secondary"]`. |
| `chooseFilesButtonText` | string |  | The text of the button that opens the file picker. Default is `"Choose file"`. |
| `dropInstructionText` | string |  | The text informing users they can drop files. Default is `"or drop file"`. |
| `multipleFilesChosenText` | object |  | The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules). |
| `noFileChosenText` | string |  | The text displayed when no file has been chosen by the user. Default is `"No file chosen"`. |
| `enteredDropZoneText` | string |  | The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`. |
| `leftDropZoneText` | string |  | The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`. |
| `classes` | string |  | Classes to add to the file upload component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the file upload component. |

---

## Footer

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the footer. |
| `columns` | integer |  | Number of columns to display per row in the navigation section of the footer – `4`, `3`, `2` or `1`. Defaults to `4`. |
| `navigation` | object |  | The navigation section of the footer before the copyright information. Alternatively supports an array of `navigation` objects. |
| `navigation.title` | string |  | Title for group of footer navigation links. |
| `navigation.text` | string |  | Optional text to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.html` | string |  | Optional HTML to use within each navigation section column. If `html` is provided, the `text` option will be ignored. |
| `navigation.width` | string |  | Width of each navigation section column in the footer. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-quarter"`. |
| `navigation.items` | array |  | Contains the array of footer navigation link items for this group. |
| `navigation.items.href` | string | ✓ | Footer navigation link `href` attribute. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer navigation link. If `html` is provided, the `text` option will be ignored. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the anchor in the footer meta section. |
| `meta` | object |  | The meta section of the footer after any navigation, before the copyright information. |
| `meta.visuallyHiddenTitle` | string |  | Title for meta `items` links. Defaults to `"Support links"`. |
| `meta.html` | string |  | HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`. |
| `meta.text` | string |  | Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored. |
| `meta.items` | array |  | Contains the array of key policy footer link items. |
| `meta.items.href` | string | ✓ | Footer meta link `href` attribute. |
| `meta.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each footer meta link. If `html` is provided, the `text` option will be ignored. |
| `meta.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each footer meta link. If `html` is provided, the `text` option will be ignored. |
| `meta.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the footer meta link. |
| `copyright` | object |  | The copyright information in the footer component, this defaults to `"© NHS England"`. |
| `copyright.text` | string | ✓ | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used. |
| `copyright.html` | string | ✓ | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used. |
| `containerClasses` | string |  | Classes to add to the footer container, useful if you want to make the footer fixed width. |
| `classes` | string |  | Classes to add to the footer container. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire footer component in a `call` block. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the footer container. |

---

## Header

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the header. |
| `logo` | object |  | Object containing options for the logo. |
| `logo.href` | string |  | The `href` of the link for the logo. If not set, and a `service.href` is set, or both are set to same value, then the logo and service name will be combined into a single link. |
| `logo.src` | string |  | The path of the logo image, if you are not using the default NHS logo. |
| `logo.alt` | string |  | The alt text for the logo. Defaults to `"NHS"`. |
| `logo.ariaLabel` | string |  | The `aria-label` for a linked logo. Defaults to `"NHS homepage"`. |
| `service` | object |  | Object containing options for the service name. |
| `service.text` | string |  | The text to use for the service name. |
| `service.href` | string |  | The `href` of the link for the service name. |
| `organisation` | object |  | Settings for header with organisational logo. |
| `organisation.name` | string |  | Organisation name. |
| `organisation.split` | string |  | Longer organisation names can be split onto multiple lines. |
| `organisation.descriptor` | string |  | Organisation descriptor. |
| `navigation` | object |  | Object containing settings for the primary navigation. |
| `navigation.items` | array |  | Array of navigation links for use in the header. |
| `navigation.items.href` | string | ✓ | The href of a navigation item in the header. |
| `navigation.items.text` | string | ✓ | If `html` is set, this is not required. Text for the navigation item. If `html` is provided, the `text` argument will be ignored. |
| `navigation.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the navigation item. If `html` is provided, the `text` argument will be ignored. |
| `navigation.items.current` | boolean |  | Set to `true` if this links to the current page being shown. |
| `navigation.items.active` | boolean |  | Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page |
| `navigation.items.classes` | string |  | Classes to add to the list item containing the link. |
| `navigation.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the list item containing the link. |
| `navigation.ariaLabel` | string |  | The `aria-label` for the primary navigation. Defaults to `"Menu"`. |
| `navigation.toggleMenuText` | string |  | Text for the toggle menu button. Defaults to `"More"`. |
| `navigation.toggleMenuVisuallyHiddenText` | string |  | A visually hidden prefix used before the toggle menu button text. Defaults to `"Browse"`. |
| `navigation.classes` | string |  | Classes to add to the primary navigation. |
| `navigation.attributes` | object |  | HTML attributes (for example data attributes) to add to the primary navigation. |
| `search` | object |  | Object containing settings for a search box. |
| `search.action` | string |  | The search form `action` attribute. Defaults to `"https://www.nhs.uk/search"`. |
| `search.method` | string |  | The search form `method` attribute. Defaults to `"get"`. |
| `search.name` | string |  | The `name` attribute for the search field. Defaults to `"q"`. |
| `search.placeholder` | string |  | The placeholder text for the search field. Defaults to `"Search"`. |
| `search.visuallyHiddenLabel` | string |  | The label for the search field. Defaults to `"Search the NHS website"`. |
| `search.visuallyHiddenButton` | string |  | The label for the visually hidden button. Defaults to `"Search"`. |
| `search.classes` | string |  | Classes to add to the search element. |
| `search.attributes` | object |  | HTML attributes (for example data attributes) to add to the search element. |
| `account` | object |  | Object containing settings for the account section of the header. |
| `account.items` | array |  | Array of account items for use in the header. |
| `account.items.href` | string |  | The href of an account item in the header. |
| `account.items.text` | string | ✓ | If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` argument will be ignored. |
| `account.items.html` | string | ✓ | If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` argument will be ignored. |
| `account.items.icon` | boolean |  | Whether to include the account icon for the account item. Defaults to `false`. |
| `account.items.action` | string |  | If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons. |
| `account.items.method` | string |  | The value to use for the `method` of the form if `action` is set. Defaults to `"post"`. |
| `account.items.classes` | string |  | Classes to add to the list item containing the account item. |
| `account.ariaLabel` | string |  | The `aria-label` for the account navigation. Defaults to `"Account"`. |
| `account.classes` | string |  | Classes to add to the account navigation. |
| `account.attributes` | object |  | HTML attributes (for example data attributes) to add to the account navigation. |
| `baseUrl` | string |  | Base URL to prepend to the `logo.src` path. |
| `containerClasses` | string |  | Classes to add to the header container, useful if you want to make the header fixed width. |
| `classes` | string |  | Classes to add to the header container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the header container. |

---

## Hero

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the hero. |
| `heading` | string | ✓ | Text heading of the hero. |
| `headingClasses` | string |  | Optional additional classes to add to heading. Separate each class with a space. |
| `headingSize` | string |  | Size of the heading – `"xss"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `headingLevel` | integer |  | Optional heading level for the heading. Defaults to `1`. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire hero component in a `call` block. |
| `image` | object |  | Can be used to add an image to the hero component. |
| `image.src` | string | ✓ | The URL of the image in the hero. |
| `containerClasses` | string |  | Classes to add to the hero container, useful if you want to make the hero fixed width. |
| `classes` | string |  | Classes to add to the hero. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hero. |

---

## Hint text

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `id` | string |  | The `id` attribute to add to the hint. |
| `classes` | string |  | Classes to add to the hint. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hint. |

---

## Images

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the image. |
| `src` | string | ✓ | The source location of the image. |
| `alt` | string | ✓ | The alt text of the image. |
| `caption` | object |  | Optional caption for the image. |
| `caption.text` | string | ✓ | Text to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.html` | string | ✓ | HTML to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.classes` | string |  | Classes to add to the figcaption element. |
| `sizes` | string |  | A list of screen sizes for the browser to load the correct image from the srcset images. |
| `srcset` | string |  | A list of image source URLs and their respective sizes. Separate each image with a comma. |
| `classes` | string |  | Classes to add to the image container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the image container. |

---

## Input

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `type` | string |  | Type of input control to render, for example, an email input control. Defaults to `"text"`. |
| `inputmode` | string |  | Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the text input component. |
| `hint` | object |  | Can be used to add a hint to a text input component. |
| `errorMessage` | object |  | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `prefix` | object |  | Can be used to add a prefix to the text input component. |
| `prefix.text` | string | ✓ | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | ✓ | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string |  | Classes to add to the prefix. |
| `prefix.attributes` | object |  | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object |  | Can be used to add a suffix to the text input component. |
| `suffix.text` | string | ✓ | If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.classes` | string |  | Classes to add to the suffix element. |
| `suffix.attributes` | object |  | HTML attributes (for example data attributes) to add to the suffix element. |
| `formGroup` | object |  | Additional options for the form group containing the text input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the text input component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the input. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `pattern` | string |  | Attribute to provide a regular expression pattern, used to match allowed character combinations for the input value. |
| `placeholder` | string |  | Attribute to provide placeholder text for the input. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the input. |
| `autocapitalize` | string |  | Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object |  | If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |

---

## Inset text

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the inset text component. |
| `text` | string | ✓ | Text content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | HTML content to be used within the inset text component. If `html` is provided, the `text` argument will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `classes` | string |  | Classes to add to the inset text. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the inset text. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the inset text. Defaults to `"Information"`. |

---

## Label

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the label. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire label component in a `call` block. |
| `for` | string |  | The value of the `for` attribute, the ID of the input the label is associated with. |
| `isPageHeading` | boolean |  | Whether the label also acts as the heading for the page. |
| `size` | string |  | Size of the label – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `classes` | string |  | Classes to add to the label tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |

---

## Legend

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire legend component in a `call` block. |
| `classes` | string |  | Classes to add to the legend. |
| `isPageHeading` | boolean |  | Whether the legend also acts as the heading for the page. |
| `size` | string |  | Size of the legend – `"s"`, `"m"`, `"l"` or `"xl"`. |

---

## Notification banner

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the notification banner. |
| `text` | string | ✓ | The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored. |
| `html` | string | ✓ | The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire notification banner component in a `call` block. |
| `titleText` | string |  | The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are 'Important', 'Success', and null:
- if you do not set `type`, `titleText` defaults to `"Important"`
- if you set `type` to `success`, `titleText` defaults to `"Success"`
- if you set `titleHtml`, this option is ignored |
| `titleHtml` | string |  | The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored. |
| `titleHeadingLevel` | string |  | Sets heading level for the title only. You can only use values between `1` and `6` with this option. The default is `2`. |
| `type` | string |  | The type of notification to render. You can use only `"success"` or `null` values with this option. If you set `type` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `type`, the notification banner sets `role` to `"region"`. |
| `role` | string |  | Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `type` to `"success"`, `role` defaults to `"alert"`. |
| `titleId` | string |  | The `id` for the banner title, and the `aria-labelledby` attribute in the banner. Defaults to `"nhsuk-notification-banner-title"`. |
| `disableAutoFocus` | boolean |  | If you set `type` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`. |
| `classes` | string |  | The classes that you want to add to the notification banner. |
| `attributes` | object |  | The HTML attributes that you want to add to the notification banner, for example, data attributes. |

---

## Pagination

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the pagination container. |
| `items` | array |  | The items within the pagination component. |
| `items.number` | string |  | The pagination item text – usually a page number.  Required unless the item is an ellipsis. |
| `items.visuallyHiddenText` | string |  | The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". |
| `items.href` | string |  | The link's URL. Required unless the item is an ellipsis. |
| `items.current` | boolean |  | Set to `true` to indicate the current page the user is on. |
| `items.ellipsis` | boolean |  | Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored. |
| `items.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `previous` | object |  | A link to the previous page, if there is a previous page. |
| `previous.text` | string |  | The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.html` | string |  | The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.labelText` | string |  | The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. |
| `previous.href` | string | ✓ | The previous page's URL. |
| `previous.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `next` | object |  | A link to the next page, if there is a next page. |
| `next.text` | string |  | The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.html` | string |  | The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.labelText` | string |  | The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. |
| `next.href` | string | ✓ | The next page's URL. |
| `next.attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `landmarkLabel` | string |  | The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`. |
| `classes` | string |  | The classes you want to add to the pagination `nav` parent. |
| `attributes` | object |  | The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent. |

---

## Panel

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the panel. |
| `titleText` | string | ✓ | If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleHtml` | string |  | If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleSize` | string |  | Size of the title – `"m"`, `"l"` or `"xl"`. |
| `titleClasses` | string |  | Optional additional classes to add to the heading tag. Separate each class with a space. |
| `headingLevel` | integer |  | Heading level, from `1` to `6`. Defaults to `1`. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. Text to use within the panel content. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block. |
| `classes` | string |  | Optional additional classes to add to the hint `div` tag. Separate each class with a space. |
| `attributes` | object |  | Any extra HTML attributes (for example data attributes) to add to the input component. |

---

## Password input

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `value` | string |  | Optional initial value of the input. |
| `disabled` | boolean |  | If `true`, input will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | Options for the label component. |
| `hint` | object |  | Options for the hint component. |
| `errorMessage` | object |  | Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the text input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the input used by the text input component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the input. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the input. |
| `showPasswordText` | string |  | Button text when the password is hidden. Defaults to `"Show"`. |
| `hidePasswordText` | string |  | Button text when the password is visible. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string |  | Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string |  | Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string |  | Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`. |
| `button` | object |  | Optional object allowing customisation of the toggle button. |
| `button.classes` | string |  | Classes to add to the button. |

---

## Radios

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the radios component. |
| `fieldset` | object |  | The fieldset used by the radios component. |
| `hint` | object |  | Can be used to add a hint to the radios component. |
| `errorMessage` | object |  | Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the radios component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before all radio items within the radios component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after all radio items within the radios component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | ✓ | The `name` attribute for the radio items. |
| `items` | array | ✓ | The radio items within the radios component. |
| `items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items.id` | string |  | Specific `id` attribute for the radio item. If omitted, then `idPrefix` string will be applied. |
| `items.value` | string | ✓ | The `value` attribute for the radio input. |
| `items.label` | object |  | Subset of options for the label used by each radio item within the radios component. |
| `items.label.classes` | string |  | Classes to add to the label tag. |
| `items.label.attributes` | object |  | HTML attributes (for example data attributes) to add to the label tag. |
| `items.hint` | object |  | Can be used to add a hint to each radio item within the radios component. |
| `items.divider` | string |  | Divider text to separate radio items, for example the text `"or"`. |
| `items.checked` | boolean |  | Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option. |
| `items.conditional` | object |  | Provide additional content to reveal when the radio is checked. |
| `items.conditional.html` | string | ✓ | The HTML to reveal when the radio is checked. |
| `items.disabled` | boolean |  | If `true`, radio will be disabled. |
| `items.classes` | string |  | Classes to add to the radio input tag. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the radio input tag. |
| `value` | string |  | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string |  | Classes to add to the radios container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the radios container. |

---

## Select

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | ID for the select box. Defaults to the value of `name`. |
| `name` | string | ✓ | The `name` attribute for the select. |
| `items` | array | ✓ | The items within the select component. |
| `items.value` | string |  | The `value` attribute for the option. If this is omitted, the value is taken from the text content of the option element. |
| `items.text` | string | ✓ | Text for the option item. |
| `items.divider` | boolean |  | Divider line used to separate option items. |
| `items.selected` | boolean |  | Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option. |
| `items.disabled` | boolean |  | Sets the option item as disabled. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the option. |
| `value` | string |  | The value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item. |
| `disabled` | boolean |  | If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the select component. |
| `hint` | object |  | Can be used to add a hint to the select component. |
| `errorMessage` | object |  | Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the select component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the select used by the select component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the select used by the select component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the select. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the select. |
| `inputWrapper` | object |  | If any of `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the select and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string |  | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object |  | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the select. |

---

## Skip link

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the skip link. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`. |
| `href` | string |  | The value of the skip link's `href` attribute. Defaults to `"#maincontent"`. |
| `classes` | string |  | Classes to add to the skip link. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the skip link. |

---

## Summary list

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the summary list. |
| `rows` | array | ✓ | The rows within the summary list component. |
| `rows.classes` | string |  | Classes to add to the row `div`. |
| `rows.key` | object | ✓ | The reference content (key) for each row item in the summary list component. |
| `rows.key.text` | string | ✓ | If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.classes` | string |  | Classes to add to the key wrapper. |
| `rows.value` | object | ✓ | The value for each row item in the summary list component. |
| `rows.value.text` | string | ✓ | If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.classes` | string |  | Classes to add to the value wrapper. |
| `rows.actions` | object |  | The action link content for each row item in the summary list component. |
| `rows.actions.items` | array |  | The action link items within the row item of the summary list component. |
| `rows.actions.items.href` | string | ✓ | The value of the link's `href` attribute for an action item. |
| `rows.actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `rows.actions.items.classes` | string |  | Classes to add to the action item. |
| `rows.actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `rows.actions.classes` | string |  | Classes to add to the actions wrapper. |
| `card` | object |  | Can be used to wrap a card around the summary list component. If any of these options are present, a card will wrap around the summary list. |
| `classes` | string |  | Classes to add to the container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the container. |

---

## Tables

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the table. |
| `rows` | array | ✓ | Array of table rows and cells. |
| `rows.text` | string | ✓ | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` argument will be ignored. |
| `rows.html` | string | ✓ | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` argument will be ignored. |
| `rows.header` | string |  | Header text for cells in responsive table rows only. |
| `rows.format` | string |  | Specify format of a cell. Currently we only use `"numeric"`. |
| `rows.colspan` | integer |  | Specify how many columns a cell extends. |
| `rows.rowspan` | integer |  | Specify how many rows a cell extends. |
| `head` | array |  | Array of table head cells. |
| `head.text` | string |  | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` argument will be ignored. |
| `head.html` | string |  | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` argument will be ignored. |
| `head.format` | string |  | Specify format of a cell. Currently we only use `"numeric"`. |
| `head.colspan` | integer |  | Specify how many columns a cell extends. |
| `head.rowspan` | integer |  | Specify how many rows a cell extends. |
| `caption` | string |  | Caption text. |
| `captionClasses` | string |  | Classes for caption text size. Classes to add to the table caption, for example `"nhsuk-table__caption--l"`. |
| `captionSize` | string |  | Size of the caption – `"s"`, `"m"`, `"l"` or `"xl"`. |
| `firstCellIsHeader` | boolean |  | If set to `true`, first cell in table row will be a TH instead of a TD. |
| `responsive` | boolean |  | If set to `true`, responsive table classes will be applied. |
| `card` | object |  | Can be used to wrap a card around the table component. If any of these options are present, a card will wrap around the table. |
| `classes` | string |  | Classes to add to the table container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the table container. |

---

## Tabs

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | This is used for the main component and to compose the `id` attribute for each item. |
| `idPrefix` | string |  | String to prefix the `id` for each tab item if no `id` is specified on each item. |
| `title` | string |  | Title for the tabs table of contents. |
| `items` | array | ✓ | Array of tab items. |
| `items.id` | string | ✓ | Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.label` | string | ✓ | The text label of a tab item. |
| `items.attributes` | object |  | HTML attributes (for example data attributes) to add to the tab. |
| `items.panel` | object | ✓ | Content for the panel. |
| `items.panel.text` | string | ✓ | Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.panel.html` | string | ✓ | The title of the panel. |
| `items.panel.attributes` | object |  | The body of the panel. |

---

## Tag

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the tag. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` argument will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored. |
| `classes` | string |  | Classes to add to the tag. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the tag. |

---

## Task list

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the button. |
| `classes` | string |  | Classes to add to the `ul` container for the task list. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string |  | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `"-"`. Defaults to `"task-list"`. |
| `items` | array | ✓ | The items for each task within the task list component. See items. |
| `items.title` | object | ✓ | The main title for the task within the task list component. See title. |
| `items.title.text` | string | ✓ | Text to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items.title.html` | string | ✓ | HTML to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items.title.classes` | string |  | Classes to add to the title wrapper. |
| `items.hint` | object |  | Can be used to add a hint to each task within the task list component. See items hint. |
| `items.hint.text` | string | ✓ | Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items.hint.html` | string | ✓ | HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items.status` | object | ✓ | The status for each task within the task list component. See items status. |
| `items.status.tag` | object |  | Can be used to add a tag to the status of the task within the task list component. See tag. |
| `items.status.text` | string |  | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items.status.html` | string |  | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items.status.classes` | string |  | Classes to add to the status container. |
| `items.href` | string |  | The value of the link's `href` attribute for the task list item. |
| `items.classes` | string |  | Classes to add to the item `div`. |

---

## Textarea

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `spellcheck` | boolean |  | Optional field to enable or disable the `spellcheck` attribute on the textarea. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `disabled` | boolean |  | If `true`, textarea will be disabled. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the textarea component. |
| `hint` | object |  | Can be used to add a hint to the textarea component. |
| `errorMessage` | object |  | Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object |  | Additional options for the form group containing the textarea component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object |  | Content to add before the textarea used by the textarea component. |
| `formGroup.beforeInput.text` | string | ✓ | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | ✓ | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object |  | Content to add after the textarea used by the textarea component. |
| `formGroup.afterInput.text` | string | ✓ | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | ✓ | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string |  | Classes to add to the textarea. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the textarea. |

---

## Warning callout

[↑ Back to top](#table-of-contents)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the warning callout. |
| `heading` | string | ✓ | Heading to be used on the warning callout. |
| `headingLevel` | integer |  | Optional heading level for the heading. Defaults to `3`. |
| `text` | string | ✓ | Text content to be used within the warning callout. |
| `html` | string | ✓ | HTML content to be used within the warning callout. |
| `caller` | nunjucks-block |  | Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire warning callout component in a `call` block. |
| `classes` | string |  | Classes to add to the warning callout. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the warning callout. |
| `visuallyHiddenText` | string |  | A visually hidden prefix used before the heading. Defaults to `"Important"`. |

---


# Character count

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `characterCount`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | ✓ | The name of the textarea, which is submitted with the form data. |
| `rows` | string |  | Optional number of textarea rows (default is 5 rows). |
| `value` | string |  | Optional initial value of the textarea. |
| `maxlength` | string | ✓ | The maximum number of characters (or words if `countType` is set to `"words"`). |
| `maxwords` | string |  | **Deprecated in 10.5.0, do not use.** Replaced by the `maxlength` and `countType: "words"` options. |
| `countType` | string |  | The count type used to count the text – `"length"` or `"words"`. Defaults to `"length"`. |
| `threshold` | string |  | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. |
| `label` | object | ✓ | The label used by the character count component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Can be used to add a hint to the character count component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
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
| `disabled` | boolean |  | If `true`, textarea will be disabled. |
| `autocomplete` | string |  | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"street-address"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. |
| `countMessage` | object |  | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string |  | Classes to add to the count message. |
| `textareaDescriptionText` | string |  | Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page if `countType` is not supported or JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` option. |
| `charactersUnderLimitText` | object |  | Message displayed when the number of characters is under the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining characters. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |
| `charactersAtLimitText` | string |  | Message displayed when the number of characters reaches the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. |
| `charactersOverLimitText` | object |  | Message displayed when the number of characters is over the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |
| `wordsUnderLimitText` | object |  | Message displayed when the number of words is under the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining words. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |
| `wordsAtLimitText` | string |  | Message displayed when the number of words reaches the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. |
| `wordsOverLimitText` | object |  | Message displayed when the number of words is over the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of words above the maximum. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules) |

## Examples

### default

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  maxlength: 200
}) }}
```

### disabled

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  maxlength: 200,
  disabled: true
}) }}
```

### label

with size S

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "s"
  },
  id: "custom-size",
  name: "example",
  maxlength: 200
}) }}
```

[3 more variants of this example](variants/character-count.md#label)

### with before and after input content

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  name: "example",
  maxlength: 200,
  formGroup: {
    beforeInput: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    afterInput: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### with count type 'characters'

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-characters-count-type",
  name: "example",
  countType: "characters",
  maxlength: 200
}) }}
```

### with count type 'characters' and error message

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: {
    text: "Job description must be 200 characters or less"
  },
  id: "with-characters-count-type-error-message",
  name: "example",
  countType: "characters",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with count type 'characters' and threshold

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-characters-count-type-threshold",
  name: "example",
  countType: "characters",
  value:
    "Type another letter into this field after this message to see the threshold feature",
  maxlength: 112,
  threshold: 75
}) }}
```

### with count type 'characters' and value

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-characters-count-type-value",
  name: "example",
  countType: "characters",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

### with count type 'length'

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-length-count-type",
  name: "example",
  countType: "length",
  maxlength: 200
}) }}
```

### with count type 'words'

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-words-count-type",
  name: "example",
  countType: "words",
  maxlength: 50
}) }}
```

### with count type 'words' and error message

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: {
    text: "Job description must be 40 words or less"
  },
  id: "with-words-count-type-error-message",
  name: "example",
  countType: "words",
  maxlength: 51,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with count type 'words' and threshold

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-words-count-type-threshold",
  name: "example",
  countType: "words",
  value:
    "Type another word into this field after this message to see the threshold feature",
  maxlength: 51,
  threshold: 30
}) }}
```

### with count type 'words' and value

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-words-count-type-value",
  name: "example",
  countType: "words",
  maxlength: 51,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

### with custom rows

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  id: "custom-rows",
  name: "example",
  maxlength: 350,
  rows: 15
}) }}
```

### with error message

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with error message and hint

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with error message and hint as strings

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  hint: "Do not include personal information like your name, date of birth or NHS number",
  errorMessage: "Job description must be 350 characters or less",
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with error message and hint, without heading

```njk
{{ characterCount({
  label: {
    text: "Enter a job description"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with error message, without heading

```njk
{{ characterCount({
  label: {
    text: "Enter a job description"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  id: "with-error-message",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with error only

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  errorMessage: true,
  id: "with-error-only",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

### with hint

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  hint: {
    text: "Do not include personal information like your name, date of birth or NHS number"
  },
  id: "with-hint",
  name: "example",
  maxlength: 200
}) }}
```

### with maxwords

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-word-count",
  name: "example",
  maxwords: 150
}) }}
```

### without heading

```njk
{{ characterCount({
  label: "Tell us more about what happened",
  id: "without-heading",
  name: "example",
  maxlength: 150
}) }}
```

### with threshold

```njk
{{ characterCount({
  label: {
    heading: "Can you provide more detail?",
    size: "l"
  },
  id: "with-threshold",
  name: "example",
  value:
    "Type another letter into this field after this message to see the threshold feature",
  maxlength: 112,
  threshold: 75
}) }}
```

### with translations

```njk
{{ characterCount({
  label: {
    heading: "Allwch chi roi mwy o fanylion?",
    size: "l"
  },
  hint: {
    text: "Peidiwch â chynnwys gwybodaeth bersonol, fel eich enw, dyddiad geni na rhif y GIG"
  },
  id: "with-translations",
  name: "example",
  maxlength: 200,
  textareaDescriptionText: "Gallwch ddefnyddio hyd at %{count} nod",
  charactersUnderLimitText: {
    one: "Mae gennych %{count} nod ar ôl",
    two: "Mae gennych %{count} nod ar ôl",
    few: "Mae gennych %{count} nod ar ôl",
    many: "Mae gennych %{count} nod ar ôl",
    other: "Mae gennych %{count} nod ar ôl"
  },
  charactersAtLimitText: "Mae gennych 0 nod ar ôl",
  charactersOverLimitText: {
    one: "Mae gennych %{count} nod yn ormod",
    two: "Mae gennych %{count} nod yn ormod",
    few: "Mae gennych %{count} nod yn ormod",
    many: "Mae gennych %{count} nod yn ormod",
    other: "Mae gennych chi %{count} nod yn ormod"
  }
}) }}
```

### with value

```njk
{{ characterCount({
  label: {
    heading: "Enter a job description",
    size: "l"
  },
  id: "with-value",
  name: "example",
  maxlength: 350,
  value:
    "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

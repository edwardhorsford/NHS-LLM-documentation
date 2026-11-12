# Date input

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `dateInput`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✓ | This is used for the main component and to compose the `id` attribute for each item. |
| `namePrefix` | string |  | Optional prefix. This is used to prefix each date input `name` attribute, wrapped in `[` and `]` – for example, `namePrefix: "dob"` will output the `name` attributes `dob[day]`, `dob[month]` and `dob[year]` respectively. |
| `items` | array |  | The inputs within the date input component. The `input.code`, `input.errorMessage`, `input.formGroup`, `input.hint` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `items.name` | string | ✓ | Item-specific `name` attribute. Defaults to `"day"`, `"month"` or `"year"`. |
| `items.value` | string |  | If provided, it will be used as the initial `value` attribute of the input. |
| `items.label` | object |  | Item-specific label. The `label.caption`, `label.heading` and `label.size` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params, see [label](label.md))* |
| `items.error` | boolean |  | If set to `true`, show a red border on the item input. |
| `hint` | object |  | Can be used to add a hint to the date input component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
| `formGroup` | object |  | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string |  | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object |  | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object |  | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | ✓ | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | ✓ | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object |  | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | ✓ | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | ✓ | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `fieldset` | object |  | Can be used to add a fieldset to the date input component. The `fieldset.html` option is not supported. *(accepts nested component params, see [fieldset](fieldset.md))* |
| `day` | object |  | Can be used to customise the day input within the date input component. The `input.code`, `input.errorMessage`, `input.formGroup`, `input.hint` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `day.name` | string |  | The `name` attribute for the day input. Defaults to `"day"`. |
| `day.value` | string |  | The `value` attribute for the day input. |
| `day.label` | object |  | The label used by the day input. The `label.caption`, `label.heading` and `label.size` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params, see [label](label.md))* |
| `day.error` | boolean |  | If set to `true`, show a red border on the day input. |
| `month` | object |  | Can be used to customise the month input within the date input component. The `input.code`, `input.errorMessage`, `input.formGroup`, `input.hint` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `month.name` | string |  | The `name` attribute for the month input. Defaults to `"month"`. |
| `month.value` | string |  | The `value` attribute for the month input. |
| `month.label` | object |  | The label used by the month input. The `label.caption`, `label.heading` and `label.size` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params, see [label](label.md))* |
| `month.error` | boolean |  | If set to `true`, show a red border on the month input. |
| `year` | object |  | Can be used to customise the year input within the date input component. The `input.code`, `input.errorMessage`, `input.formGroup`, `input.hint` and `input.inputWrapper` options are not supported. *(accepts nested component params)* |
| `year.name` | string |  | The `name` attribute for the year input. Defaults to `"year"`. |
| `year.value` | string |  | The `value` attribute for the year input. |
| `year.label` | object |  | The label used by the year input. The `label.caption`, `label.heading` and `label.size` options are not supported. Defaults to the `name` option capitalised. *(accepts nested component params, see [label](label.md))* |
| `year.error` | boolean |  | If set to `true`, show a red border on the year input. |
| `values` | object |  | An optional object used to specify `value` attributes for the inputs within the date input component without setting `items`. |
| `values.day` | string |  | The `value` attribute for the day input. |
| `values.month` | string |  | The `value` attribute for the month input. |
| `values.year` | string |  | The `value` attribute for the year input. |
| `disabled` | boolean |  | If `true`, inputs used by the date input component will be disabled. |
| `classes` | string |  | Classes to add to the date input container. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the date input container. |

## Examples

### default

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
  id: "example"
}) }}
```

### disabled

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
  id: "example",
  disabled: true
}) }}
```

### disabled input

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
  id: "example",
  year: {
    disabled: true
  }
}) }}
```

### disabled input (using items)

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
  id: "example",
  items: [
    {
      name: "day",
      width: 2
    },
    {
      name: "month",
      width: 2
    },
    {
      name: "year",
      width: 4,
      disabled: true
    }
  ]
}) }}
```

### disabled with enabled input

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
  id: "example",
  disabled: true,
  year: {
    disabled: false
  }
}) }}
```

### day and month

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your birthday?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  year: false
}) }}
```

### day and month (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your birthday?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2
    },
    {
      name: "month",
      width: 2
    }
  ]
}) }}
```

### day and month (with empty item)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your birthday?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2
    },
    {
      name: "month",
      width: 2
    },
    false
  ]
}) }}
```

### legend

with size S

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "s"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  id: "custom-size"
}) }}
```

[3 more variants of this example](variants/date-input.md#legend)

### month and year

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false
}) }}
```

### month and year (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  items: [
    {
      name: "month",
      width: 2
    },
    {
      name: "year",
      width: 4
    }
  ]
}) }}
```

### month and year (with empty item)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  items: [
    false,
    {
      name: "month",
      width: 2
    },
    {
      name: "year",
      width: 4
    }
  ]
}) }}
```

### month and year with fields

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false,
  month: {
    value: "11"
  },
  year: {
    value: "2023"
  }
}) }}
```

### month and year with fields overriding values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false,
  month: {
    value: "11"
  },
  year: {
    value: "2023"
  },
  values: {
    month: "8",
    year: "2024"
  }
}) }}
```

### month and year with values

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "When did you start your job?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: false,
  values: {
    month: "8",
    year: "2024"
  }
}) }}
```

### with autocomplete values

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
  id: "example",
  day: {
    autocomplete: "bday-day"
  },
  month: {
    autocomplete: "bday-month"
  },
  year: {
    autocomplete: "bday-year"
  }
}) }}
```

### with autocomplete values (using items)

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
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      autocomplete: "bday-day"
    },
    {
      name: "month",
      width: 2,
      autocomplete: "bday-month"
    },
    {
      name: "year",
      width: 4,
      autocomplete: "bday-year"
    }
  ]
}) }}
```

### with before and after inputs content

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
  id: "example",
  formGroup: {
    beforeInputs: {
      html: '<samp class="app-annotate">Before</samp>'
    },
    afterInputs: {
      html: '<samp class="app-annotate">After</samp>'
    }
  }
}) }}
```

### with custom name prefix

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
  id: "example",
  namePrefix: "example"
}) }}
```

### with error message

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

### with error message and hint

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
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

### with error message and hint as strings

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: "For example, 31 3 1980",
  errorMessage: "Enter your date of birth",
  id: "example"
}) }}
```

### with error message and hint, without heading

```njk
{{ dateInput({
  fieldset: {
    legend: "What is your date of birth?"
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

### with error message, without heading

```njk
{{ dateInput({
  fieldset: {
    legend: "What is your date of birth?"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  id: "example"
}) }}
```

### with error on day input

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
  errorMessage: {
    text: "Date of birth must include a day"
  },
  id: "example",
  day: {
    error: true
  },
  month: {
    value: "3"
  },
  year: {
    value: "1980"
  }
}) }}
```

### with error on day input (using items)

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
  errorMessage: {
    text: "Date of birth must include a day"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      error: true
    },
    {
      name: "month",
      value: "3",
      width: 2
    },
    {
      name: "year",
      value: "1980",
      width: 4
    }
  ]
}) }}
```

### with error only

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  errorMessage: true,
  id: "example"
}) }}
```

### with error on month input

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
  errorMessage: {
    text: "Date of birth must include a month"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      value: "31"
    },
    {
      name: "month",
      width: 2,
      error: true
    },
    {
      name: "year",
      width: 4,
      value: "1980"
    }
  ]
}) }}
```

### with error on month input (using items)

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
  errorMessage: {
    text: "Date of birth must include a month"
  },
  id: "example",
  day: {
    value: "31"
  },
  month: {
    error: true
  },
  year: {
    value: "1980"
  }
}) }}
```

### with error on year input

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
  errorMessage: {
    text: "Date of birth must include a year"
  },
  id: "example",
  day: {
    value: "31"
  },
  month: {
    value: "3"
  },
  year: {
    error: true
  }
}) }}
```

### with error on year input (using items)

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
  errorMessage: {
    text: "Date of birth must include a year"
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      value: "31"
    },
    {
      name: "month",
      width: 2,
      value: "3"
    },
    {
      name: "year",
      width: 4,
      error: true
    }
  ]
}) }}
```

### with errors only

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  id: "example",
  day: {
    error: true
  },
  month: {
    error: true
  },
  year: {
    error: true
  }
}) }}
```

### with errors only (using items)

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  id: "example",
  items: [
    {
      name: "day",
      width: 2,
      error: true
    },
    {
      name: "month",
      width: 2,
      error: true
    },
    {
      name: "year",
      width: 4,
      error: true
    }
  ]
}) }}
```

### with fields

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: {
    value: "5"
  },
  month: {
    value: "8"
  },
  year: {
    value: "2024"
  }
}) }}
```

### with fields as numbers

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: 5,
  month: 8,
  year: 2024
}) }}
```

### with fields as strings

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "What is your date of birth?",
      size: "l"
    }
  },
  hint: {
    text: "For example, 11 2023"
  },
  id: "example",
  day: "5",
  month: "8",
  year: "2024"
}) }}
```

### without heading

```njk
{{ dateInput({
  fieldset: {
    legend: "What is your date of birth?"
  },
  id: "example"
}) }}
```

### with translations

```njk
{{ dateInput({
  fieldset: {
    legend: {
      heading: "Beth yw eich dyddiad geni?",
      size: "l"
    }
  },
  hint: {
    text: "Er enghraifft, 31 3 1980"
  },
  id: "example",
  day: {
    label: "Dydd"
  },
  month: {
    label: "Mis"
  },
  year: {
    label: "Blwyddyn"
  }
}) }}
```

### with values

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
  id: "example",
  values: {
    day: "5",
    month: "8",
    year: "2024"
  }
}) }}
```

### with values as numbers

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
  id: "example",
  values: {
    day: 5,
    month: 8,
    year: 2024
  }
}) }}
```

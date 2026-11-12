# File upload

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `fileUpload`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | ✓ | The name of the input, which is submitted with the form data. |
| `id` | string |  | The ID of the input. Defaults to the value of `name`. |
| `disabled` | boolean |  | If `true`, file input will be disabled. |
| `multiple` | boolean |  | If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system. |
| `describedBy` | string |  | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | ✓ | The label used by the file upload component. *(accepts nested component params, see [label](label.md))* |
| `hint` | object |  | Can be used to add a hint to the file upload component. *(accepts nested component params, see [hint](hint.md))* |
| `errorMessage` | object |  | Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. *(accepts nested component params, see [error-message](error-message.md))* |
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

## Examples

### default

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

### disabled

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  disabled: true
}) }}
```

### button

with primary

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  chooseFilesButtonClassList: []
}) }}
```

[2 more variants of this example](variants/file-upload.md#button)

### label

with size S

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "s"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

[3 more variants of this example](variants/file-upload.md#label)

### with before and after input content

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
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

### with error message

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

### with error message and hint

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  }
}) }}
```

### with error message and hint as strings

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  hint: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder",
  errorMessage: "The selected file must be a JPG, BMP or TIF"
}) }}
```

### with error message and hint, without heading

```njk
{{ fileUpload({
  label: {
    text: "Upload a file"
  },
  id: "file-upload",
  name: "file-upload",
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  }
}) }}
```

### with error message, without heading

```njk
{{ fileUpload({
  label: {
    text: "Upload a file"
  },
  errorMessage: {
    text: "The selected file must be a JPG, BMP or TIF"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

### with error only

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  errorMessage: true,
  id: "file-upload",
  name: "file-upload"
}) }}
```

### with hint

```njk
{{ fileUpload({
  label: {
    heading: "Upload your photo",
    size: "l"
  },
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

### with multiple

```njk
{{ fileUpload({
  label: {
    heading: "Upload multiple files",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  multiple: true,
  chooseFilesButtonText: "Choose files",
  dropInstructionText: "or drop files",
  noFileChosenText: "No files chosen"
}) }}
```

### without heading

```njk
{{ fileUpload({
  label: "Upload a file",
  id: "file-upload",
  name: "file-upload"
}) }}
```

### with translations

```njk
{{ fileUpload({
  label: {
    heading: "Llwythwch ffeil i fyny",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  multiple: true,
  chooseFilesButtonText: "Dewiswch ffeil",
  dropInstructionText: "neu ollwng ffeil",
  noFileChosenText: "Dim ffeil wedi'i dewis",
  multipleFilesChosenText: {
    other: "%{count} ffeil wedi'u dewis",
    one: "%{count} ffeil wedi'i dewis"
  },
  enteredDropZoneText: "Wedi mynd i mewn i'r parth gollwng",
  leftDropZoneText: "Parth gollwng i'r chwith"
}) }}
```

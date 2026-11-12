# File upload variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [file-upload.md](../file-upload.md).

## button

### with small primary

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  chooseFilesButtonClassList: ["nhsuk-button--small"]
}) }}
```

### with small secondary

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "l"
  },
  id: "file-upload",
  name: "file-upload",
  chooseFilesButtonClassList: ["nhsuk-button--secondary", "nhsuk-button--small"]
}) }}
```

## label

### with size M

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "m"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

### with size L

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

### with size XL

```njk
{{ fileUpload({
  label: {
    heading: "Upload a file",
    size: "xl"
  },
  id: "file-upload",
  name: "file-upload"
}) }}
```

# Images

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `image`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the image. |
| `src` | string | ✓ | The source location of the image. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored. |
| `srcset` | string |  | A list of image source URLs and their respective sizes. Separate each image with a comma. |
| `sizes` | string |  | A list of screen sizes for the browser to load the correct image from the srcset images. |
| `alt` | string |  | The alt text of the image. Defaults to `""`. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored. |
| `html` | string | ✓ | If `src` is set, this is not required. HTML to use within the image component. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire image component in a `call` block. |
| `caption` | object |  | Optional caption for the image. |
| `caption.text` | string | ✓ | Text to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.html` | string | ✓ | HTML to add within the caption. If `html` is provided, the `text` option will be ignored. |
| `caption.classes` | string |  | Classes to add to the figcaption element. |
| `background` | string |  | Background colour for the image component – `"card"` or `false`. Defaults to `"card"`. To remove the background colour, set `background` to `false`. |
| `border` | boolean |  | If set to `false`, removes the border-bottom from the image component. |
| `width` | string |  | Width of the image component. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"two-thirds"`. |
| `classes` | string |  | Classes to add to the image component. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the image component. |

## Examples

### default

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  caption: {
    text: "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
  }
}) }}
```

### width

with one-quarter

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  alt: "A person in a bright pink athletic top, listening to music, pauses for thought during a short training session.",
  width: "one-quarter"
}) }}
```

[5 more variants of this example](variants/images.md#width)

### with custom HTML

```njk
{% call image({
  caption:
    "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
}) -%}
<img src="/nhsuk-frontend/assets/example-image-exercise.jpg" alt="">
{%- endcall %}
```

### without background

```njk
{{ image({
  background: false,
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  caption:
    "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
}) }}
```

### without background, border or caption

```njk
{{ image({
  background: false,
  border: false,
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  alt: "A person in a bright pink athletic top, listening to music, pauses for thought during a short training session."
}) }}
```

### without border

```njk
{{ image({
  border: false,
  src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
  caption:
    "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
}) }}
```

### without caption

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
}) }}
```

### with srcset

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg",
  sizes: "(max-width: 768px) 100vw, 66vw",
  srcset:
    "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg 600w, /nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg 1000w",
  caption:
    "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
}) }}
```

### with srcset and alt text

```njk
{{ image({
  src: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg",
  sizes: "(max-width: 768px) 100vw, 66vw",
  srcset:
    "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg 600w, /nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg 1000w",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
  caption:
    "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
}) }}
```

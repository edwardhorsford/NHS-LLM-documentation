# Hero

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `hero`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the hero. |
| `content` | object |  | The content section of the hero. Alternatively supports an array of `content` objects. |
| `content.heading` | object |  | Optional heading for content column. *(accepts nested component params, see [heading](heading.md))* |
| `content.heading.id` | string |  | The ID of the heading. |
| `content.heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `content.heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `content.heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `content.heading.href` | string |  | If set, the heading will become a link. |
| `content.heading.openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `content.heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `content.heading.size` | string |  | Size of the heading – `"m"`, `"l"` or `"xl"`. Defaults to `"xl"`. |
| `content.heading.level` | integer |  | Optional heading level. Defaults to `1`. |
| `content.heading.classes` | string |  | Classes to add to the heading. |
| `content.heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `content.text` | string |  | Optional text to use within each content column. If `html` is provided, the `text` option will be ignored. |
| `content.html` | string |  | Optional HTML to use within each content column. If `html` is provided, the `text` option will be ignored. |
| `content.image` | object |  | Optional image to use within each content column. *(accepts nested component params)* |
| `content.width` | string |  | Width of each content column. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-half"`. |
| `content.classes` | string |  | Classes to add to the content column. |
| `heading` | object | ✓ | Heading of the hero. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored. |
| `heading.visuallyHiddenText` | string |  | A visually hidden suffix added to the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `heading.size` | string |  | Size of the heading – `"m"`, `"l"` or `"xl"`. Defaults to `"xl"`. |
| `heading.level` | integer |  | Optional heading level. Defaults to `1`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingClasses` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.classes` option. |
| `headingSize` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.size` option. |
| `headingLevel` | integer |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.level` option. |
| `text` | string | ✓ | If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored. |
| `html` | string | ✓ | If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire hero component in a `call` block. |
| `imageURL` | string |  | **Deprecated in 10.3.0, do not use.** Replaced by the `image.src` option. |
| `image` | object |  | Can be used to add an image to the hero component. |
| `image.src` | string | ✓ | The URL of the image in the hero. |
| `width` | string |  | Width of the hero content. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-half"`. |
| `containerClasses` | string |  | Classes to add to the hero container, useful if you want to make the hero fixed width. |
| `classes` | string |  | Classes to add to the hero. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the hero. |
| `border` | boolean |  | If set to `false`, remove border from the hero. |

## Examples

### default

```njk
{{ hero({
  heading: {
    text: "We're here for you"
  },
  text: "Helping you take control of your health and wellbeing."
}) }}
```

### heading

with size L

```njk
{{ hero({
  heading: {
    text: "We're here for you",
    size: "l"
  },
  text: "Helping you take control of your health and wellbeing."
}) }}
```

[1 more variant of this example](variants/hero.md#heading)

### product page

```njk
{{ hero({
  content: [
    {
      heading: {
        text: "This is a header for the product or service",
        size: "l"
      },
      html: '<p class="nhsuk-body-l">This is some more content which explains the product or service.</p>\n<a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Sign up\n</a>\n'
    },
    {
      image: {
        src: "/nhsuk-frontend/assets/example-hero-image.svg",
        background: false,
        border: false
      }
    }
  ]
}) }}
```

### product page with heading as string

```njk
{{ hero({
  content: [
    {
      heading: "Product or service",
      html: '<p class="nhsuk-body-l">This is some more content which explains the product or service.</p>\n<a class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" href="#" role="button" draggable="false">\n  Sign up\n</a>\n'
    },
    {
      image: {
        src: "/nhsuk-frontend/assets/example-hero-image.svg",
        background: false,
        border: false
      }
    }
  ]
}) }}
```

### with heading and caption

```njk
{{ hero({
  heading: {
    text: "Prototyping",
    caption: "Setup"
  }
}) }}
```

### with heading as string

```njk
{{ hero({
  heading: "Prototyping",
  text: "Helping you take control of your health and wellbeing."
}) }}
```

### with heading only

```njk
{{ hero({
  heading: {
    text: "Prototyping"
  }
}) }}
```

### with image

```njk
{{ hero({
  image: {
    src: "/nhsuk-frontend/assets/example-hero-background.jpg"
  }
}) }}
```

### with image, content

```njk
{{ hero({
  heading: {
    text: "We're here for you"
  },
  text: "Helping you take control of your health and wellbeing.",
  image: {
    src: "/nhsuk-frontend/assets/example-hero-background.jpg"
  }
}) }}
```

### with image, content and caption

```njk
{{ hero({
  heading: {
    text: "Find information and services to help you manage your health",
    size: "l",
    caption: {
      text: "NHS website for England",
      size: "xl"
    }
  },
  width: "three-quarters",
  image: {
    src: "/nhsuk-frontend/assets/example-hero-background.jpg"
  }
}) }}
```

### without border

```njk
{{ hero({
  heading: {
    text: "We're here for you"
  },
  text: "Helping you take control of your health and wellbeing.",
  border: false
}) }}
```

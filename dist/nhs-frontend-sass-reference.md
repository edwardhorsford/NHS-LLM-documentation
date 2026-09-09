# NHS Frontend Sass Reference

> Auto-generated from NHS Frontend Sass documentation. Do not edit manually.

## Metadata

- NHS Frontend Version: 10.6.1
- Git Branch: detached
- Git Commit: ee96515
- Generated: 2026-09-09 14:49:33 UTC
- Source: https://github.com/nhsuk/nhsuk-frontend

## Table of Contents

| Name | Type | Group | Line |
|------|------|-------|------|
| _nhsuk-equilateral-height | function | tools | 208 |
| _reverse-colour | function | none | 240 |
| _should-warn | function | settings/warnings | 261 |
| _warning-text | function | settings/warnings | 290 |
| nhsuk-breakpoint-value | function | tools | 320 |
| nhsuk-chevron-size | function | tools | 381 |
| nhsuk-colour | function | helpers/colour | 407 |
| nhsuk-colour-compatible | function | helpers/colour | 442 |
| nhsuk-em | function | tools | 477 |
| nhsuk-font-url | function | tools | 520 |
| nhsuk-from-breakpoint | function | tools | 546 |
| nhsuk-grid-width | function | tools | 616 |
| nhsuk-image-url | function | tools | 654 |
| nhsuk-line-height | function | tools | 680 |
| nhsuk-px-to-rem | function | tools | 715 |
| nhsuk-shade | function | helpers/colour | 758 |
| nhsuk-spacing | function | tools | 795 |
| nhsuk-tint | function | helpers/colour | 867 |
| nhsuk-until-breakpoint | function | tools | 900 |
| _header-link-style | mixin | components/header | 970 |
| _nhsuk-generate-responsive-spacing-overrides | mixin | utilities | 998 |
| _nhsuk-generate-static-spacing-overrides | mixin | utilities | 1038 |
| _nhsuk-visually-hide-content | mixin | tools | 1072 |
| care-card (deprecated) | mixin | tools | 1100 |
| clearfix (deprecated) | mixin | tools | 1119 |
| flex (deprecated) | mixin | tools | 1137 |
| flex-item (deprecated) | mixin | tools | 1153 |
| govuk-media-query (deprecated) | mixin | tools | 1169 |
| heading-label (deprecated) | mixin | tools | 1187 |
| nhsuk-button-style | mixin | tools | 1206 |
| nhsuk-care-card | mixin | tools | 1236 |
| nhsuk-clearfix | mixin | tools | 1270 |
| nhsuk-exports | mixin | tools | 1291 |
| nhsuk-flex | mixin | tools | 1320 |
| nhsuk-flex-item | mixin | tools | 1341 |
| nhsuk-focused-box | mixin | tools | 1366 |
| nhsuk-focused-button | mixin | tools | 1396 |
| nhsuk-focused-checkbox | mixin | tools | 1420 |
| nhsuk-focused-input | mixin | tools | 1444 |
| nhsuk-focused-radio | mixin | tools | 1470 |
| nhsuk-focused-text | mixin | tools | 1500 |
| nhsuk-font | mixin | tools | 1528 |
| nhsuk-font-code | mixin | tools | 1566 |
| nhsuk-font-dynamic-type | mixin | generic | 1590 |
| nhsuk-font-monospace | mixin | tools | 1608 |
| nhsuk-font-size | mixin | tools | 1634 |
| nhsuk-font-weight-bold | mixin | tools | 1701 |
| nhsuk-font-weight-normal | mixin | tools | 1728 |
| nhsuk-frontend-not-supported | mixin | tools | 1755 |
| nhsuk-frontend-supported | mixin | tools | 1777 |
| nhsuk-grid-column | mixin | tools | 1799 |
| nhsuk-heading-label | mixin | tools | 1862 |
| nhsuk-link-image | mixin | tools | 1907 |
| nhsuk-link-style | mixin | tools | 1925 |
| nhsuk-link-style-active | mixin | tools | 1960 |
| nhsuk-link-style-default | mixin | tools | 1988 |
| nhsuk-link-style-error | mixin | tools | 2013 |
| nhsuk-link-style-focus | mixin | tools | 2045 |
| nhsuk-link-style-hover | mixin | tools | 2071 |
| nhsuk-link-style-no-underline | mixin | tools | 2099 |
| nhsuk-link-style-no-visited-state | mixin | tools | 2122 |
| nhsuk-link-style-reverse | mixin | tools | 2159 |
| nhsuk-link-style-success | mixin | tools | 2194 |
| nhsuk-link-style-text | mixin | tools | 2226 |
| nhsuk-link-style-visited | mixin | tools | 2262 |
| nhsuk-link-style-white (deprecated) | mixin | tools | 2290 |
| nhsuk-logo-size | mixin | tools | 2308 |
| nhsuk-media-query | mixin | tools | 2322 |
| nhsuk-panel | mixin | tools | 2381 |
| nhsuk-panel-with-label | mixin | tools | 2419 |
| nhsuk-print-color (deprecated) | mixin | tools | 2455 |
| nhsuk-print-colour (deprecated) | mixin | tools | 2474 |
| nhsuk-print-hide (deprecated) | mixin | tools | 2504 |
| nhsuk-reading-width | mixin | tools | 2532 |
| nhsuk-remove-margin-mobile | mixin | tools | 2554 |
| nhsuk-responsive-margin | mixin | tools | 2576 |
| nhsuk-responsive-padding | mixin | tools | 2625 |
| nhsuk-responsive-spacing | mixin | tools | 2673 |
| nhsuk-shape-arrow | mixin | tools | 2740 |
| nhsuk-shape-chevron | mixin | tools | 2782 |
| nhsuk-text-break-word | mixin | tools | 2813 |
| nhsuk-text-color (deprecated) | mixin | tools | 2834 |
| nhsuk-text-colour | mixin | tools | 2852 |
| nhsuk-top-and-bottom | mixin | tools | 2878 |
| nhsuk-typography-responsive (deprecated) | mixin | tools | 2901 |
| nhsuk-typography-weight-bold (deprecated) | mixin | tools | 2935 |
| nhsuk-typography-weight-normal (deprecated) | mixin | tools | 2953 |
| nhsuk-visually-hidden | mixin | tools | 2971 |
| nhsuk-visually-hidden-focusable | mixin | tools | 3002 |
| nhsuk-warning | mixin | settings/warnings | 3033 |
| nhsuk-width-container | mixin | objects/layout | 3103 |
| panel (deprecated) | mixin | tools | 3142 |
| panel-with-label (deprecated) | mixin | tools | 3160 |
| print-color (deprecated) | mixin | tools | 3179 |
| print-hide (deprecated) | mixin | tools | 3198 |
| reading-width (deprecated) | mixin | tools | 3216 |
| remove-margin-mobile (deprecated) | mixin | tools | 3235 |
| top-and-bottom (deprecated) | mixin | tools | 3255 |
| visually-hidden (deprecated) | mixin | tools | 3274 |
| visually-hidden-focusable (deprecated) | mixin | tools | 3293 |
| visually-shown (deprecated) | mixin | tools | 3313 |
| _icon-sizes | variable | styles | 3340 |
| _spacing-directions | variable | utilities | 3357 |
| imported-modules | variable | tools | 3383 |
| nhsuk-assets-path | variable | settings/globals | 3404 |
| nhsuk-body-background-colour | variable | settings/colours | 3421 |
| nhsuk-border-colour | variable | settings/colours | 3438 |
| nhsuk-border-hover-colour (deprecated) | variable | settings/colours | 3457 |
| nhsuk-border-width | variable | settings/globals | 3475 |
| nhsuk-border-width-form-element | variable | settings/globals | 3492 |
| nhsuk-border-width-form-group-error | variable | settings/globals | 3514 |
| nhsuk-brand-colour | variable | settings/colours | 3531 |
| nhsuk-breakpoints | variable | settings/layout | 3548 |
| nhsuk-button-active-colour | variable | settings/colours | 3570 |
| nhsuk-button-border-radius | variable | settings/globals | 3587 |
| nhsuk-button-colour | variable | settings/colours | 3608 |
| nhsuk-button-hover-colour | variable | settings/colours | 3625 |
| nhsuk-button-shadow-colour | variable | settings/colours | 3642 |
| nhsuk-button-shadow-size | variable | settings/globals | 3659 |
| nhsuk-button-text-colour | variable | settings/colours | 3680 |
| nhsuk-card-background-colour | variable | settings/colours | 3697 |
| nhsuk-code-colour | variable | settings/colours | 3714 |
| nhsuk-code-font | variable | settings/typography | 3731 |
| nhsuk-colours | variable | settings/colours | 3760 |
| nhsuk-error-colour | variable | settings/colours | 3806 |
| nhsuk-focus-colour | variable | settings/colours | 3829 |
| nhsuk-focus-text-colour | variable | settings/colours | 3858 |
| nhsuk-focus-width | variable | settings/globals | 3888 |
| nhsuk-font-family | variable | settings/globals | 3915 |
| nhsuk-font-family-print | variable | settings/globals | 3932 |
| nhsuk-font-weight-bold | variable | settings/globals | 3952 |
| nhsuk-font-weight-normal | variable | settings/globals | 3973 |
| nhsuk-fonts-path | variable | settings/globals | 3994 |
| nhsuk-grid-widths | variable | settings/globals | 4015 |
| nhsuk-gutter | variable | settings/globals | 4043 |
| nhsuk-gutter-half | variable | settings/globals | 4064 |
| nhsuk-hover-colour | variable | settings/colours | 4087 |
| nhsuk-hover-width | variable | settings/globals | 4106 |
| nhsuk-images-path | variable | settings/globals | 4123 |
| nhsuk-include-default-font-face | variable | settings/globals | 4144 |
| nhsuk-include-dynamic-type | variable | settings/globals | 4164 |
| nhsuk-input-background-colour | variable | settings/colours | 4192 |
| nhsuk-input-border-colour | variable | settings/colours | 4209 |
| nhsuk-link-active-colour | variable | settings/colours | 4228 |
| nhsuk-link-colour | variable | settings/colours | 4249 |
| nhsuk-link-hover-colour | variable | settings/colours | 4270 |
| nhsuk-link-visited-colour | variable | settings/colours | 4291 |
| nhsuk-login-button-active-colour | variable | settings/colours | 4308 |
| nhsuk-login-button-colour | variable | settings/colours | 4325 |
| nhsuk-login-button-hover-colour | variable | settings/colours | 4342 |
| nhsuk-login-button-shadow-colour | variable | settings/colours | 4359 |
| nhsuk-page-width | variable | settings/globals | 4376 |
| nhsuk-panel-border-width | variable | components/panel | 4393 |
| nhsuk-print-text-colour | variable | settings/colours | 4417 |
| nhsuk-reverse-border-colour | variable | settings/colours | 4443 |
| nhsuk-reverse-button-active-colour | variable | settings/colours | 4460 |
| nhsuk-reverse-button-colour | variable | settings/colours | 4477 |
| nhsuk-reverse-button-hover-colour | variable | settings/colours | 4494 |
| nhsuk-reverse-button-shadow-colour | variable | settings/colours | 4511 |
| nhsuk-reverse-button-text-colour | variable | settings/colours | 4528 |
| nhsuk-reverse-hover-colour | variable | settings/colours | 4545 |
| nhsuk-reverse-secondary-text-colour | variable | settings/colours | 4564 |
| nhsuk-reverse-target-hover-colour | variable | settings/colours | 4583 |
| nhsuk-reverse-text-colour | variable | settings/colours | 4603 |
| nhsuk-root-font-size | variable | settings/globals | 4624 |
| nhsuk-secondary-border-colour (deprecated) | variable | settings/colours | 4655 |
| nhsuk-secondary-button-active-colour | variable | settings/colours | 4673 |
| nhsuk-secondary-button-border-colour | variable | settings/colours | 4690 |
| nhsuk-secondary-button-colour | variable | settings/colours | 4707 |
| nhsuk-secondary-button-hover-colour | variable | settings/colours | 4724 |
| nhsuk-secondary-button-shadow-colour | variable | settings/colours | 4741 |
| nhsuk-secondary-button-solid-background-colour | variable | settings/colours | 4758 |
| nhsuk-secondary-button-text-colour | variable | settings/colours | 4775 |
| nhsuk-secondary-text-colour | variable | settings/colours | 4792 |
| nhsuk-show-breakpoints | variable | settings/layout | 4811 |
| nhsuk-spacing-points | variable | settings/spacing | 4830 |
| nhsuk-spacing-responsive-scale | variable | settings/spacing | 4867 |
| nhsuk-success-colour | variable | settings/colours | 4944 |
| nhsuk-suppressed-warnings | variable | settings/warnings | 4967 |
| nhsuk-target-hover-colour | variable | settings/colours | 5014 |
| nhsuk-template-background-colour | variable | settings/colours | 5033 |
| nhsuk-text-colour | variable | settings/colours | 5053 |
| nhsuk-typography-scale | variable | settings/typography | 5074 |
| nhsuk-warning-button-active-colour | variable | settings/colours | 5225 |
| nhsuk-warning-button-colour | variable | settings/colours | 5242 |
| nhsuk-warning-button-hover-colour | variable | settings/colours | 5259 |
| nhsuk-warning-button-shadow-colour | variable | settings/colours | 5276 |


## Functions

### _nhsuk-equilateral-height

- Type: function
- Access: private
- Group: tools
- File: core/tools/_shape-arrow.scss (L22-L26)

Calculate the height of an equilateral triangle
Multiplying half the length of the base of an equilateral triangle by the
square root of three gives us its height. We use 1.732 as an approximation.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| base | Number | No | - | Length of the base of the triangle |

#### Returns

- Type: Number
- Description: Calculated height of the triangle

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-shape-arrow

---

### _reverse-colour

- Type: function
- Access: private
- Group: none
- File: lib/highlighter/styles/index.scss (L25-L27)

Lighten colour for reverse backgrounds

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| code-colour | Colour | No | - | Code colour to reverse |

#### Requires

- function: nhsuk-colour-compatible

---

### _should-warn

- Type: function
- Access: private
- Group: settings/warnings
- File: core/settings/_warnings.scss (L71-L73)

Check whether a key is present in the suppressed warnings list.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| key | String | No | - | The key to be checked against \`$nhsuk-suppressed-warnings\`. |

#### Requires

- variable: nhsuk-suppressed-warnings

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-warning

---

### _warning-text

- Type: function
- Access: private
- Group: settings/warnings
- File: core/settings/_warnings.scss (L84-L86)

Format a warning by appending information on how to suppress it.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| key | String | No | - | The key needed to suppress the warning. |
| message | String | No | - | The warning text. |

#### Requires

- variable: nhsuk-suppressed-warnings

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-warning

---

### nhsuk-breakpoint-value

- Type: function
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L43-L62)

Get the value of a breakpoint by name.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| value | String \| Number | No | - | If a string, the name of a breakpoint
  in $breakpoints. If a number without units, it will convert to px. If a
  number with units, it will return the value unaltered. |
| breakpoints | Map | No | $nhsuk-breakpoints | The map to look for $value. |

#### Returns

- Type: Number
- Description: The set (minimum) value of the breakpoint

#### Throws

- Unknown breakpoint \`#{$value}\`

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- function: nhsuk-from-breakpoint
- function: nhsuk-until-breakpoint

#### Examples

```scss
.element {
  width: nhsuk-breakpoint-value(tablet);
  @media (min-width: #{nhsuk-breakpoint-value(desktop)}) {
    color: red;
  }
  @media (min-width: #{nhsuk-breakpoint-value(400px)}) {
    color: green;
  }
  $custom-breakpoint-map: (
    small: 350px,
    medium: 769px,
    large: 1100px,
    extra-large: 1600px
  );
  @media (orientation: landscape) and (min-width: #{nhsuk-breakpoint-value(extra-large, $custom-breakpoint-map)}) {
    color: blue;
  }
}
```

---

### nhsuk-chevron-size

- Type: function
- Access: public
- Group: tools
- File: core/tools/_functions.scss (L66-L79)

Get the size (△↕) of chevron, from base to tip, given a certain font size

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| font-size | Number | No | $nhsuk-root-font-size | Font size to base chevron size on |

#### Returns

- Type: String
- Description: Height of chevron in rems

#### Used By

- mixin: nhsuk-shape-chevron

---

### nhsuk-colour

- Type: function
- Access: public
- Group: helpers/colour
- File: core/helpers/_colour.scss (L21-L31)

Get colour

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| colour | String \| Colour | No | - | Name of colour from the colour palette
  (\`$nhsuk-colours\`) |

#### Returns

- Type: Colour
- Description: Representation of named colour

#### Throws

- Unknown colour \`#{$colour}\`

#### Requires

- variable: nhsuk-colours

#### Used By

- function: nhsuk-colour-compatible

---

### nhsuk-colour-compatible

- Type: function
- Access: public
- Group: helpers/colour
- File: core/helpers/_colour.scss (L41-L72)

Converts a colour with potential float values for its RGB channels
into hexadecimal notation where possible (e.g. no alpha transparency)

This ensures the colour is rendered properly by Safari < 12

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| colour | String \| Colour | No | - | The colour to convert or name from the colour palette |

#### Returns

- Colour

#### Requires

- function: nhsuk-colour

#### Used By

- function: nhsuk-shade
- function: nhsuk-tint
- mixin: nhsuk-link-style-error
- function: _reverse-colour

---

### nhsuk-em

- Type: function
- Access: public
- Group: tools
- File: core/tools/_functions.scss (L21-L35)

Convert pixels to em

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| value | Number | No | - | Length in pixels |
| context-font-size | Number | No | $nhsuk-root-font-size | Font size of element |

#### Returns

- Type: Number
- Description: Length in ems

#### Requires

- variable: nhsuk-root-font-size

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- function: nhsuk-from-breakpoint
- function: nhsuk-until-breakpoint
- mixin: nhsuk-shape-chevron

#### Examples

```scss
nhsuk-em(20px, $nhsuk-root-font-size);
```

---

### nhsuk-font-url

- Type: function
- Access: public
- Group: tools
- File: core/tools/_font-url.scss (L12-L14)

Font URL

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| filename | String | No | - | Font filename |

#### Returns

- Type: String
- Description: URL for the filename, wrapped in \`url()\`

#### Requires

- variable: nhsuk-fonts-path

---

### nhsuk-from-breakpoint

- Type: function
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L98-L106)

Generate the `min-width` segment of a media query given a breakpoint key

Pixel values are converted to ems for backwards compatibility with
sass-mq. Unlike sass-mq, non-px and em values can be used as well.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| from | String \| Number | No | - | If a string, expects the name of a
  breakpoint in $breakpoints. If a number, it will use that number. |
| breakpoints | Map | No | $nhsuk-breakpoints | The map to look for $from. |

#### Returns

- Type: String
- Description: A \`min-width\` media query segment

#### Requires

- function: nhsuk-breakpoint-value
- function: nhsuk-em

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-width-container
- mixin: nhsuk-grid-column
- mixin: nhsuk-heading-label
- mixin: nhsuk-media-query
- mixin: nhsuk-responsive-spacing
- mixin: nhsuk-font-size

#### Examples

```scss
.example {
  @media #{nhsuk-from-breakpoint(tablet)} {
    color: red;
  }
  @media #{nhsuk-from-breakpoint(30em)} {
    color: green;
  }
  @media #{nhsuk-from-breakpoint(tablet)} and (orientation: landscape) {
    color: blue;
  }
  $custom-breakpoint-map: (
    small: 350px,
    medium: 769px,
    large: 1100px,
    extra-large: 1600px
  );
  @media #{nhsuk-from-breakpoint(extra-large, $custom-breakpoint-map)} {
    color: cyan;
  }
}
```

---

### nhsuk-grid-width

- Type: function
- Access: public
- Group: tools
- File: core/tools/_grid.scss (L20-L26)

Grid width percentage

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| key | String | No | - | Name of grid width (e.g. two-thirds) |

#### Returns

- Type: Number
- Description: Percentage width

#### Throws

- Unknown grid width \`#{$key}\`

#### Requires

- variable: nhsuk-grid-widths

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-grid-column

---

### nhsuk-image-url

- Type: function
- Access: public
- Group: tools
- File: core/tools/_image-url.scss (L12-L14)

Font URL

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| filename | String | No | - | Image filename |

#### Returns

- Type: String
- Description: URL for the filename, wrapped in \`url()\`

#### Requires

- variable: nhsuk-images-path

---

### nhsuk-line-height

- Type: function
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L162-L182)

Line height

Convert line-heights specified in pixels into a relative value, unless
they are already unit-less (and thus already treated as relative values),
in rems, or the units do not match the units used for the font size.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| line-height | Number | No | - | Line height |
| font-size | Number | No | - | Font size |

#### Returns

- Type: Number
- Description: The line height as either a relative value or unmodified

#### Requires

- variable: nhsuk-root-font-size

#### Used By

- mixin: nhsuk-font-size

---

### nhsuk-px-to-rem

- Type: function
- Access: public
- Group: tools
- File: core/tools/_functions.scss (L49-L59)

Convert pixels to rem

The $nhsuk-root-font-size (defined in settings/_globals.scss)
must be configured to match the font-size of your root (html) element

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| value | Number | No | - | Length in pixels |

#### Returns

- Type: Number
- Description: Length in rems

#### Requires

- variable: nhsuk-root-font-size

#### Used By

- mixin: nhsuk-button-style
- mixin: nhsuk-shape-arrow
- function: nhsuk-spacing
- mixin: nhsuk-responsive-spacing
- mixin: nhsuk-font-size

#### Examples

```scss
nhsuk-px-to-rem(20px);
```

---

### nhsuk-shade

- Type: function
- Access: public
- Group: helpers/colour
- File: core/helpers/_colour.scss (L84-L88)

Make a colour darker by mixing it with black

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| colour | Colour | No | - | colour to shade |
| percentage | Number | No | - | percentage of black to mix with $colour |

#### Returns

- Colour

#### Requires

- function: nhsuk-colour-compatible

#### Used By

- mixin: nhsuk-link-style-success

#### Examples

```scss
nhsuk-shade(color, percentage);
nhsuk-shade(nhsuk-colour("blue"), 50%);
```

---

### nhsuk-spacing

- Type: function
- Access: public
- Group: tools
- File: core/tools/_spacing.scss (L45-L89)

Single point spacing

Returns measurement corresponding to the spacing point requested.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| spacing-point | Number | No | - | Point on the spacing scale
 (set in \`settings/_spacing.scss\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | null | Offset to adjust spacing by |
| unit | String | No | "px" | Unit to use for spacing |

#### Returns

- Type: String
- Description: Spacing measurement eg. 8px

#### Throws

- Expected a number (integer), but got a
- Unknown unit \`#{$unit}\`
- Unknown spacing point \`#{$spacing-point}\`. Make sure you are using a point from the

#### Requires

- function: nhsuk-px-to-rem
- variable: nhsuk-spacing-points

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-heading-label
- mixin: _nhsuk-generate-static-spacing-overrides

#### Examples

```scss
.element {
  padding: nhsuk-spacing(5);
}
```

Using negative spacing

```scss
.element {
  margin-top: nhsuk-spacing(-1);
}
```

Marking spacing declarations as important

```scss
.element {
  margin-top: nhsuk-spacing(1) !important;
}
```

---

### nhsuk-tint

- Type: function
- Access: public
- Group: helpers/colour
- File: core/helpers/_colour.scss (L100-L104)

Make a colour lighter by mixing it with white

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| colour | Colour | No | - | colour to tint |
| percentage | Number | No | - | percentage of white to mix with $colour |

#### Returns

- Colour

#### Requires

- function: nhsuk-colour-compatible

#### Examples

```scss
nhsuk-tint(color, percentage);
nhsuk-tint(nhsuk-colour("blue"), 10%);
```

---

### nhsuk-until-breakpoint

- Type: function
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L143-L157)

Generate the `max-width` segment of a media query given a breakpoint key

sass-mq converted pixel values to ems, and only performed subtractions on
named breakpoints. These have been retained for backwards compatibility,
though unlike sass-mq, this also supports using non-px and em values.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| until | String \| Number | No | - | If a string, expects the name of a
  breakpoint in $breakpoints. If a number, it will use that number. |
| breakpoints | Map | No | $nhsuk-breakpoints | The map to look for $until. |

#### Returns

- Type: String
- Description: A \`max-width\` media query segment

#### Requires

- function: nhsuk-breakpoint-value
- function: nhsuk-em

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-flex-item
- mixin: nhsuk-remove-margin-mobile
- mixin: nhsuk-media-query

#### Examples

```scss
.example {
  @media #{nhsuk-until-breakpoint(desktop)} {
    color: red;
  }
  @media #{nhsuk-until-breakpoint(40em)} {
    color: green;
  }
  @media #{nhsuk-until-breakpoint(tablet)} and (orientation: landscape) {
    color: blue;
  }
  $custom-breakpoint-map: (
    small: 350px,
    medium: 769px,
    large: 1100px,
    extra-large: 1600px
  );
  @media #{nhsuk-until-breakpoint(extra-large, $custom-breakpoint-map)} {
    color: cyan;
  }
}
```

---

## Mixins

### _header-link-style

- Type: mixin
- Access: private
- Group: components/header
- File: components/header/_index.scss (L45-L71)

Header link styling

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| link-colour | Colour | No | $nhsuk-header-item-colour | Link colour |
| link-hover-colour | Colour | No | $nhsuk-header-item-hover-colour | Link hover colour |
| link-active-colour | Colour | No | $nhsuk-header-item-active-colour | Link active colour |

#### Requires

- mixin: nhsuk-link-style-visited
- mixin: nhsuk-link-style-hover
- mixin: nhsuk-link-style-active
- mixin: nhsuk-link-style-focus
- variable: nhsuk-focus-text-colour
- variable: nhsuk-focus-width

---

### _nhsuk-generate-responsive-spacing-overrides

- Type: mixin
- Access: private
- Group: utilities
- File: core/utilities/_spacing.scss (L41-L56)

Generate responsive spacing override classes

Generate spacing override classes for the given property (e.g. margin)
for each point in the responsive spacing scale.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| property | String | No | - | Property to add spacing to (e.g. 'margin') |

#### Requires

- mixin: nhsuk-responsive-spacing
- variable: nhsuk-spacing-responsive-scale
- variable: _spacing-directions

#### Examples

```css
.nhsuk-u-margin-4 {
  margin: 16px !important;
}

@media (min-width: 40.0625em) {
  .nhsuk-u-margin-4 {
    margin: 24px !important;
  }
}
```

---

### _nhsuk-generate-static-spacing-overrides

- Type: mixin
- Access: private
- Group: utilities
- File: core/utilities/_spacing.scss (L72-L84)

Generate static spacing override classes

Generate spacing override classes for the given property (e.g. margin)
for each point in the non-responsive spacing scale.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| property | String | No | - | Property to add spacing to (e.g. 'margin') |

#### Requires

- function: nhsuk-spacing
- variable: nhsuk-spacing-points
- variable: _spacing-directions

#### Examples

```css
.nhsuk-u-static-margin-4 {
   margin: 24px !important;
}
```

---

### _nhsuk-visually-hide-content

- Type: mixin
- Access: private
- Group: tools
- File: core/tools/_mixins.scss (L74-L112)

Helper function containing the common code for the following two mixins

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | true | Whether to mark as \`!important\` |

#### Links

- [- Hiding Content for Accessibility, Jonathan Snook, February 2011](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)
- [- h5bp/html5-boilerplate - Thanks!](https://github.com/h5bp/html5-boilerplate/blob/9f13695d21ff92c55c78dfa9f16bb02a1b6e911f/src/css/main.css#L121-L158)
- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-visually-hidden
- mixin: nhsuk-visually-hidden-focusable

---

### care-card

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L419-L422)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-care-card
- Alias of: nhsuk-care-card (prefer the original)

Care card mixin, used for creating
different coloured care cards (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-care-card

---

### clearfix

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L34-L37)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-clearfix
- Alias of: nhsuk-clearfix (prefer the original)

Clearfix mixin (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-clearfix

---

### flex

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L569-L572)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-flex
- Alias of: nhsuk-flex (prefer the original)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-flex

---

### flex-item

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L593-L596)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-flex-item
- Alias of: nhsuk-flex-item (prefer the original)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-flex-item

---

### govuk-media-query

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L225-L230)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-media-query
- Alias of: nhsuk-media-query (prefer the original)

Media query (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-media-query

---

### heading-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L383-L386)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-heading-label
- Alias of: nhsuk-heading-label (prefer the original)

Heading label mixin, adds a tab heading to
warning callout, do and don't lists and panel (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-heading-label

---

### nhsuk-button-style

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_buttons.scss (L22-L127)

Button styling with colour overrides

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| button-colour | Colour | No | $nhsuk-secondary-button-colour | Button background colour |
| button-hover-colour | Colour | No | null | Button hover background colour |
| button-active-colour | Colour | No | null | Button active background colour |
| button-text-colour | Colour | No | $nhsuk-secondary-button-text-colour | Button text colour |
| button-shadow-colour | Colour | No | $nhsuk-secondary-button-shadow-colour | Button shadow colour |
| button-border-colour | Colour | No | null | Button border colour (optional, e.g. secondary button) |
| button-border-radius | Number | No | $nhsuk-button-border-radius | Button border radius |

#### Requires

- function: nhsuk-px-to-rem
- variable: nhsuk-button-shadow-size
- variable: nhsuk-button-border-radius
- variable: nhsuk-border-width-form-element

---

### nhsuk-care-card

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L399-L411)

Care card mixin, used for creating
different coloured care cards

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| heading-background-colour | Colour | No | - | Heading background colour |
| heading-text-colour | Colour | No | - | Heading text colour |
| print-border-size | Number | No | - | Print border size |

#### Requires

- variable: nhsuk-print-text-colour

#### Used By

- mixin: care-card

#### Examples

```scss
@include nhsuk-care-card($nhsuk-brand-colour, $nhsuk-reverse-text-colour, 4px);
```

---

### nhsuk-clearfix

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L21-L27)

Clearfix mixin

#### Used By

- mixin: clearfix

#### Examples

```scss
@include nhsuk-clearfix;
```

---

### nhsuk-exports

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_exports.scss (L25-L35)

Export module

Ensure that the modules of CSS that we define throughout frontend are only
included in the generated CSS once, no matter how many times they are
imported across the individual components.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| name | String | No | - | Name of module - must be unique within the codebase |

#### Requires

- variable: imported-modules

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

---

### nhsuk-flex

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L559-L562)

Flex mixin

#### Used By

- mixin: flex

#### Examples

```scss
@include nhsuk-flex;
```

---

### nhsuk-flex-item

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L580-L586)

Flex item mixin

#### Requires

- function: nhsuk-until-breakpoint

#### Used By

- mixin: flex-item

#### Examples

```scss
@include nhsuk-flex-item;
```

---

### nhsuk-focused-box

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_focused.scss (L128-L139)

Focused box

Provides an outline to clearly indicate when the target element is focused.
Unlike nhsuk-focused-text, which only draws an underline below the element,
nhsuk-focused-box draws an outline around all sides of the element.
Best used for non-text content contained within links.

#### Requires

- variable: nhsuk-focus-width
- variable: nhsuk-focus-colour
- variable: nhsuk-focus-text-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

#### Used By

- mixin: nhsuk-link-image

---

### nhsuk-focused-button

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_focused.scss (L105-L119)

Focused button

Provides an additional outline and background to clearly indicate when
the target element has focus. Used for buttons.

#### Requires

- variable: nhsuk-focus-width
- variable: nhsuk-focus-text-colour
- variable: nhsuk-focus-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

---

### nhsuk-focused-checkbox

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_focused.scss (L82-L98)

Focused checkbox input (form element)

Provides an additional outline and border to clearly indicate when
the target element has focus. Used by checkbox.

#### Requires

- variable: nhsuk-focus-width
- variable: nhsuk-focus-text-colour
- variable: nhsuk-focus-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

---

### nhsuk-focused-input

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_focused.scss (L41-L50)

Focused input (form elements)

Provides an additional outline and border to clearly indicate when
the target element has focus. Used for interactive input-based elements such
as text inputs.

#### Requires

- variable: nhsuk-border-width-form-element
- variable: nhsuk-focus-text-colour
- variable: nhsuk-focus-width
- variable: nhsuk-focus-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

---

### nhsuk-focused-radio

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_focused.scss (L59-L75)

Focused radio input (form element)

Provides an additional outline and border to clearly indicate when
the target element has focus. Used by radios.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| focus-width | Number | No | $nhsuk-focus-width + 1px | Focus width |

#### Requires

- variable: nhsuk-focus-width
- variable: nhsuk-focus-text-colour
- variable: nhsuk-focus-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

---

### nhsuk-focused-text

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_focused.scss (L15-L33)

Focused text

Provides an outline to clearly indicate when the target element is focused.
Used for interactive text-based elements.

#### Requires

- variable: nhsuk-focus-width
- variable: nhsuk-focus-text-colour
- variable: nhsuk-focus-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

#### Used By

- mixin: nhsuk-link-style-focus

---

### nhsuk-font

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L346-L358)

Font helper

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| size | Number | No | - | Size of the font as it would appear on desktop -
  uses the responsive font size map |
| weight | String | No | normal | Weight: \`bold\` or \`normal\` |
| line-height | Number | No | false | Line-height, if overriding the default |

#### Requires

- mixin: nhsuk-font-weight-normal
- mixin: nhsuk-font-weight-bold
- mixin: nhsuk-font-size

#### Examples

```scss
.foo {
  @include nhsuk-font(19);
}

.foo {
  @include nhsuk-font(36, $weight: bold);
}
```

---

### nhsuk-font-code

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L102-L106)

Code font helper

Used for codes and sequences

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally used to create override classes. |

#### Requires

- mixin: nhsuk-font-monospace

---

### nhsuk-font-dynamic-type

- Type: mixin
- Access: public
- Group: generic
- File: core/generic/_font-face.scss (L46-L57)

Font 'Dynamic Type' support

On Apple devices, uses the -apple-system-body font to enable system-level
Dynamic Type for accessibility but prevents the system body font-family.

#### Requires

- variable: nhsuk-root-font-size

---

### nhsuk-font-monospace

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L113-L122)

Monospace font helper

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally used to create override classes. |

#### Requires

- variable: nhsuk-code-font

#### Used By

- mixin: nhsuk-font-code

---

### nhsuk-font-size

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L220-L305)

Font size and line height helper

Takes a point from the responsive 'font map' as an argument (the size as it
would appear on tablet and above), and uses it to create font-size and
line-height declarations for different breakpoints, and print.

Example font map:

```scss
19: (
  null: (
    font-size: 16px,
    line-height: 20px
  ),
  tablet: (
    font-size: 19px,
    line-height: 25px
  ),
  print: (
    font-size: 14pt,
    line-height: 1.15
  )
);
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| size | Number \| String | No | - | Point from the typography scale (the size
  as it would appear on tablet and above) |
| line-height | Number | No | false | Non responsive custom line
  height. Omit to use the line height from the font map. |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. |

#### Throws

- Unknown font size \`#{$size}\` - expected a point from the typography scale

#### Requires

- mixin: nhsuk-warning
- function: nhsuk-px-to-rem
- function: nhsuk-line-height
- function: nhsuk-from-breakpoint
- variable: nhsuk-typography-scale

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-heading-label
- mixin: nhsuk-typography-responsive
- mixin: nhsuk-font

---

### nhsuk-font-weight-bold

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L74-L80)

Bold font weight

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally Used to create override classes. |

#### Requires

- variable: nhsuk-font-weight-bold

#### Used By

- mixin: nhsuk-typography-weight-bold
- mixin: nhsuk-font

---

### nhsuk-font-weight-normal

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L48-L54)

Normal font weight

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally Used to create override classes. |

#### Requires

- variable: nhsuk-font-weight-normal

#### Used By

- mixin: nhsuk-typography-weight-normal
- mixin: nhsuk-font

---

### nhsuk-frontend-not-supported

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L541-L551)

NHS.UK frontend not supported mixin

Applied when NHS.UK frontend JavaScript is not supported
For example, in older browsers without `<script type="module">` support

#### Examples

```scss
@include nhsuk-frontend-not-supported; {
  color: blue;
}
```

---

### nhsuk-frontend-supported

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L518-L528)

NHS.UK frontend supported mixin

Applied when NHS.UK frontend JavaScript is supported
For example, in modern browsers with `<script type="module">` support

#### Examples

```scss
@include nhsuk-frontend-supported; {
  color: red;
}
```

---

### nhsuk-grid-column

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_grid.scss (L59-L72)

Generate grid column styles

Creates a grid column with standard gutter between the columns.

Grid widths are defined in the `$nhsuk-grid-widths` map.

By default the column width changes from 100% to specified width at the
'desktop' breakpoint, but other breakpoints can be specified using the `$at`
parameter.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| width | String | No | full | name of a grid width from $nhsuk-grid-widths |
| float | String | No | left | left \| right |
| at | String | No | desktop | mobile \| tablet \| desktop \| any custom breakpoint |

#### Requires

- function: nhsuk-from-breakpoint
- function: nhsuk-grid-width
- variable: nhsuk-gutter-half

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Examples

Default

```scss
.nhsuk-grid-column-two-thirds {
  @include nhsuk-grid-column(two-thirds)
}
```

Customising the breakpoint where width percentage is applied

```scss
.nhsuk-grid-column-one-half-at-tablet {
  @include nhsuk-grid-column(one-half, $at: tablet);
}
```

Customising the float direction

```scss
.nhsuk-grid-column-one-half-right {
  @include nhsuk-grid-column(two-thirds, $float: right);
}
```

---

### nhsuk-heading-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L345-L375)

Heading label mixin, adds a tab heading to
warning callout, do and don't lists and panel

1. Background colour to be set on the @include.
2. Ensures heading appears separate to the body text in high contrast mode.
3. Text colour to be set on the @include.
4. Display inline-block so it does not take up the full width.
5. Negative left margin aligns the heading to the box.
6. Top positioning set to minus to make heading sit just outside the box.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| heading-background-colour | Colour | No | - | Heading background colour |
| heading-text-colour | Colour | No | - | Heading text colour |

#### Requires

- mixin: nhsuk-font-size
- mixin: nhsuk-responsive-margin
- mixin: nhsuk-responsive-padding
- function: nhsuk-spacing
- function: nhsuk-from-breakpoint
- variable: nhsuk-print-text-colour

#### Used By

- mixin: heading-label

#### Examples

```scss
@include nhsuk-heading-label($nhsuk-brand-colour, $nhsuk-reverse-text-colour);
```

---

### nhsuk-link-image

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L319-L332)

Image link styles

Prepares and provides the focus state for links that only contain images
with no accompanying text.

#### Requires

- mixin: nhsuk-focused-box

---

### nhsuk-link-style

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L20-L39)

Link styling with colour overrides

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| link-colour | Colour | No | $nhsuk-link-colour | Link colour |
| link-hover-colour | Colour | No | $nhsuk-link-hover-colour | Link hover colour |
| link-visited-colour | Colour | No | $nhsuk-link-visited-colour | Link visited colour |
| link-active-colour | Colour | No | $nhsuk-link-active-colour | Link active colour |

#### Requires

- mixin: nhsuk-link-style-visited
- mixin: nhsuk-link-style-hover
- mixin: nhsuk-link-style-active
- mixin: nhsuk-link-style-focus

#### Used By

- mixin: nhsuk-link-style-default
- mixin: nhsuk-link-style-error
- mixin: nhsuk-link-style-success
- mixin: nhsuk-link-style-no-visited-state
- mixin: nhsuk-link-style-text

---

### nhsuk-link-style-active

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L168-L176)

Default link active only styling

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| link-active-colour | Colour | No | $nhsuk-link-active-colour | Link active colour |

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-link-style

#### Examples

```scss
@include nhsuk-link-style-active;
```

---

### nhsuk-link-style-default

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L51-L53)

Default link styles

Makes links use the default unvisited, visited, hover and active colours.

#### Requires

- mixin: nhsuk-link-style

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
}
```

---

### nhsuk-link-style-error

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L193-L200)

Error link styles

Makes links use the error colour. The link will darken if it's active or a
user hovers their cursor over it.

If you use this mixin in a component, you must also include the
`nhsuk-link-style-default` mixin to get the correct focus and hover states.

#### Requires

- mixin: nhsuk-link-style
- function: nhsuk-colour-compatible
- variable: nhsuk-error-colour

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
  @include nhsuk-link-style-error;
}
```

---

### nhsuk-link-style-focus

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L150-L158)

Default link focus only styling

#### Requires

- mixin: nhsuk-focused-text

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-link-style

#### Examples

```scss
@include nhsuk-link-style-focus;
```

---

### nhsuk-link-style-hover

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L133-L142)

Default link hover only styling

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| link-hover-colour | Colour | No | $nhsuk-link-hover-colour | Link hover colour |

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-link-style

#### Examples

```scss
@include nhsuk-link-style-hover;
```

---

### nhsuk-link-style-no-underline

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L266-L277)

Remove underline from links

Remove underlines from links unless the link is active or a user hovers
their cursor over it.

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
  @include nhsuk-link-style-no-underline;
}
```

---

### nhsuk-link-style-no-visited-state

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L245-L252)

No visited state link mixin

Used in cases where it is not helpful to distinguish between visited and
non-visited links.

For example, navigation links to pages with dynamic content like admin
dashboards. The content on the page is changing all the time, so the fact
that you’ve visited it before is not important.

If you use this mixin in a component, you must also include the
`nhsuk-link-style-default` mixin to get the correct focus and hover states.

#### Requires

- mixin: nhsuk-link-style
- variable: nhsuk-link-colour
- variable: nhsuk-link-hover-colour
- variable: nhsuk-link-active-colour

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
  @include nhsuk-link-style-no-visited-state;
}
```

---

### nhsuk-link-style-reverse

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L70-L76)

Reverse link styles

Makes links white, in all states. Use this mixin if you're displaying links
against a dark background.

If you use this mixin in a component, you must also include the
`nhsuk-link-style-default` mixin to get the correct focus and hover states.

#### Requires

- mixin: nhsuk-link-style-text
- variable: nhsuk-reverse-text-colour

#### Used By

- mixin: nhsuk-link-style-white

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
  @include nhsuk-link-style-reverse;
}
```

---

### nhsuk-link-style-success

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L217-L224)

Success link styles

Makes links use the success colour. The link will darken if it's active or a
user hovers their cursor over it.

If you use this mixin in a component you must also include the
`nhsuk-link-style-default` mixin to get the correct focus and hover states.

#### Requires

- mixin: nhsuk-link-style
- function: nhsuk-shade
- variable: nhsuk-success-colour

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
  @include nhsuk-link-style-success;
}
```

---

### nhsuk-link-style-text

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L292-L312)

Text link styles

Makes links use the primary text colour, in all states. Use this mixin for
navigation components, such as breadcrumbs or the back link.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| override-colour | Colour | No | $nhsuk-text-colour | Link colour for all states |

#### Requires

- mixin: nhsuk-link-style

#### Used By

- mixin: nhsuk-link-style-reverse

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-text;
}
```

---

### nhsuk-link-style-visited

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L99-L123)

Default link visited only styling

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| link-visited-colour | Colour | No | $nhsuk-link-visited-colour | Link visited colour |

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-link-style

#### Examples

```scss
@include nhsuk-link-style-visited;
```

---

### nhsuk-link-style-white

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L83-L89)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-link-style-reverse
- Alias of: nhsuk-link-style-reverse (prefer the original)

White link styles (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-link-style-reverse

---

### nhsuk-logo-size

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L630-L633)

NHS logo size helper

Saves duplicating the code for when using the logo as a link.
Used in the header and footer.

---

### nhsuk-media-query

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L193-L218)

Media query

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| from | String \| Boolean | No | false | One of $breakpoints |
| until | String \| Boolean | No | false | One of $breakpoints |
| and | String \| Boolean | No | false | Additional media query parameters |
| media-type | String | No | all | Override media type: screen, print… |
| breakpoints | Map | No | $nhsuk-breakpoints | Map of breakpoints to use |

#### Requires

- function: nhsuk-from-breakpoint
- function: nhsuk-until-breakpoint

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: govuk-media-query

#### Examples

```scss
.element {
  @include nhsuk-media-query($from: mobile) {
    color: red;
  }
  @media #{nhsuk-until-breakpoint(tablet)} {
    color: blue;
  }
  @include nhsuk-media-query(mobile, tablet) {
    color: green;
  }
  @include nhsuk-media-query($from: tablet, $and: '(orientation: landscape)') {
    color: teal;
  }
  @include nhsuk-media-query(950px) {
    color: hotpink;
  }
  @include nhsuk-media-query(tablet, $media-type: screen) {
    color: rebeccapurple;
  }
}
```

---

### nhsuk-panel

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L270-L285)

Panel mixin

See components/_panel

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| panel-background-colour | Colour | No | - | Panel background colour |
| panel-text-colour | Colour | No | - | Panel text colour |
| panel-border-colour | Colour | No | null | Optional panel border colour |

#### Requires

- mixin: nhsuk-top-and-bottom
- mixin: nhsuk-responsive-margin
- variable: nhsuk-print-text-colour

#### Used By

- mixin: panel
- mixin: nhsuk-panel-with-label

#### Examples

```scss
@include nhsuk-panel($nhsuk-brand-colour, $nhsuk-reverse-text-colour, $nhsuk-reverse-border-colour);
```

---

### nhsuk-panel-with-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L308-L315)

Panel with label mixin, inherits panel styling
and removes padding top for the label positioning

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| panel-background-colour | Colour | No | - | Panel background colour |
| panel-text-colour | Colour | No | - | Panel text colour |
| panel-border-colour | Colour | No | - | Panel border colour |

#### Requires

- mixin: nhsuk-panel
- mixin: nhsuk-responsive-margin
- mixin: nhsuk-responsive-padding

#### Used By

- mixin: panel-with-label

#### Examples

```scss
@include nhsuk-panel-with-label($nhsuk-brand-colour, $nhsuk-reverse-text-colour, $nhsuk-reverse-border-colour);
```

---

### nhsuk-print-color

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L453-L459)
- **Deprecated:** To be removed in v11.0
- Alias of: nhsuk-print-colour (prefer the original)

Print colour mixin, sets the text print colour
warning callout, do and don't lists and panels (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-print-colour

---

### nhsuk-print-colour

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L433-L445)
- **Deprecated:** To be removed in v11.0

Print colour mixin, sets the text print colour
warning callout, do and don't lists and panels

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| print-colour | Colour | No | $nhsuk-print-text-colour | Print colour |
| silence-warning | Boolean | No | false | Whether to silence deprecation
warning when already logged by another deprecated mixin |

#### Requires

- mixin: nhsuk-warning

#### Used By

- mixin: nhsuk-print-color
- mixin: print-color

---

### nhsuk-print-hide

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L480-L495)
- **Deprecated:** To be removed in v11.0

Print hide mixin, hides the element from print

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| silence-warning | Boolean | No | false | Whether to silence deprecation
warning when already logged by another deprecated mixin |

#### Requires

- mixin: nhsuk-warning

#### Used By

- mixin: print-hide

---

### nhsuk-reading-width

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L46-L48)

Reading width mixin, add a maximum width
to large pieces of content

#### Used By

- mixin: reading-width

#### Examples

```scss
@include nhsuk-reading-width;
```

---

### nhsuk-remove-margin-mobile

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L602-L607)

Remove margin mobile mixin

Removes left and right margin at tablet breakpoint

#### Requires

- function: nhsuk-until-breakpoint
- variable: nhsuk-gutter-half

#### Used By

- mixin: remove-margin-mobile

---

### nhsuk-responsive-margin

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_spacing.scss (L233-L241)

Responsive margin

Adds responsive margin by fetching a 'spacing map' from the responsive
spacing scale, which defines different spacing values at different
breakpoints. Wrapper for the `nhsuk-responsive-spacing` mixin.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| responsive-spacing-point | Number | No | - | Point on the responsive spacing
scale, corresponds to a map of breakpoints and spacing values |
| direction | String \| List | No | all | Direction(s) to add spacing to
  (\`top\`, \`right\`, \`bottom\`, \`left\`, \`all\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | null | Offset to adjust spacing by |
| unit | String | No | "px" | Unit to use for spacing |

#### Requires

- mixin: nhsuk-responsive-spacing

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-panel
- mixin: nhsuk-panel-with-label
- mixin: nhsuk-heading-label

#### Examples

```scss
.foo {
  @include nhsuk-responsive-margin(6, "left", $adjustment: 1px);
}
```

---

### nhsuk-responsive-padding

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_spacing.scss (L264-L272)

Responsive padding

Adds responsive padding by fetching a 'spacing map' from the responsive
spacing scale, which defines different spacing values at different
breakpoints. Wrapper for the `nhsuk-responsive-spacing` mixin.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| responsive-spacing-point | Number | No | - | Point on the responsive spacing
  scale, corresponds to a map of breakpoints and spacing values |
| direction | String \| List | No | all | Direction(s) to add spacing to
  (\`top\`, \`right\`, \`bottom\`, \`left\`, \`all\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | null | Offset to adjust spacing by |
| unit | String | No | "px" | Unit to use for spacing |

#### Requires

- mixin: nhsuk-responsive-spacing

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-panel-with-label
- mixin: nhsuk-heading-label

#### Examples

```scss
.foo {
  @include nhsuk-responsive-padding(6, 'left', $adjustment: 1px);
}
```

---

### nhsuk-responsive-spacing

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_spacing.scss (L121-L210)

Responsive spacing

Adds responsive spacing (either padding or margin, depending on `$property`)
by fetching a 'spacing map' from the responsive spacing scale, which defines
different spacing values at different breakpoints.

To generate responsive spacing, use 'nhsuk-responsive-margin' or
'nhsuk-responsive-padding' mixins

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| responsive-spacing-point | Number | No | - | Point on the responsive spacing
 scale, corresponds to a map of breakpoints and spacing values |
| property | String | No | - | Property to add spacing to (e.g. 'margin') |
| direction | String \| List | No | all | Direction to add spacing to
 (\`top\`, \`right\`, \`bottom\`, \`left\`, \`all\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | null | Offset to adjust spacing by |
| unit | String | No | "px" | Unit to use for spacing |

#### Throws

- Expected a number (integer), but got a
- Unknown unit \`#{$unit}\`
- Expected a string or list, but got a
- Unknown responsive spacing point \`#{$responsive-spacing-point}\`. Make sure you are using a point from the

#### Requires

- function: nhsuk-px-to-rem
- function: nhsuk-from-breakpoint
- variable: nhsuk-spacing-responsive-scale

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-responsive-margin
- mixin: nhsuk-responsive-padding
- mixin: _nhsuk-generate-responsive-spacing-overrides

#### Examples

```scss
.foo {
    @include nhsuk-responsive-spacing(4, "padding");
    @include nhsuk-responsive-spacing(2, "top", $important: true); // if `!important` is required
  }

1. Make sure that the return value from `_settings/spacing.scss` is a map.
2. Loop through each breakpoint in the map
3. The 'null' breakpoint is for mobile.
```

---

### nhsuk-shape-arrow

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_shape-arrow.scss (L46-L79)

Arrow mixin

Generate Arrows (triangles) by using a mix of transparent (1) and coloured
borders. The coloured borders inherit the text colour of the element (2).

Ensure the arrow is rendered correctly if browser colours are overridden by
providing a clip path (3). Without this the transparent borders are
overridden to become visible which results in a square.

We need both because older browsers do not support clip-path.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| direction | String | No | - | Direction for arrow: up, right, down, left. |
| base | Number | No | - | Length of the triangle 'base' side |
| height | Number | No | null | Height of triangle. Omit for equilateral. |
| display | String | No | block | CSS display property of the arrow |

#### Throws

- Invalid arrow direction: expected \`up\`, \`right\`, \`down\` or \`left\`, got \`#{$direction}\`

#### Requires

- function: nhsuk-px-to-rem
- function: _nhsuk-equilateral-height

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

---

### nhsuk-shape-chevron

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_shape-chevron.scss (L21-L61)

Chevron mixin

Generate chevron by using a box with borders on two sides, then rotating it.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| direction | String | No | - | Direction for chevron: up, right, down, left |
| colour | Colour | No | - | Colour of chevron |
| font-size | Number | No | 16 | Font size to base chevron size on |
| display | String | No | block | CSS display property of the arrow |

#### Throws

- Invalid arrow direction: expected \`up\`, \`right\`, \`down\` or \`left\`, got \`#{$direction}\`

#### Requires

- function: nhsuk-em
- function: nhsuk-chevron-size

---

### nhsuk-text-break-word

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L132-L149)

Word break helper

Forcibly breaks long words that lack spaces, such as email addresses,
across multiple lines when they wouldn't otherwise fit.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally used to create override classes. |

---

### nhsuk-text-color

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L38-L41)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-text-colour
- Alias of: nhsuk-text-colour (prefer the original)

Text colour (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-text-colour

---

### nhsuk-text-colour

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L25-L31)

Text colour

Sets the text colour, including a suitable override for print.

#### Requires

- variable: nhsuk-text-colour
- variable: nhsuk-print-text-colour

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-text-color

---

### nhsuk-top-and-bottom

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L237-L245)

Top and bottom margin mixin, remove
the top and bottom margin spacing

#### Used By

- mixin: top-and-bottom
- mixin: nhsuk-panel

#### Examples

```scss
@include nhsuk-top-and-bottom;
```

---

### nhsuk-typography-responsive

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L322-L328)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-font-size
- Alias of: nhsuk-font-size (prefer the original)

Font size and line height helper (deprecated)

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| size | Number \| Boolean \| String | No | - | Point from the typography scale
  (the size as it would appear on tablet and above). Use \`false\` to avoid
  setting a size. |
| override-line-height | Number | No | false | Non responsive custom line
  height. Omit to use the line height from the font map. |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. |

#### Throws

- if \`$size\` is not a valid point from the typography scale (or false)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-font-size

---

### nhsuk-typography-weight-bold

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L87-L93)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-font-weight-bold
- Alias of: nhsuk-font-weight-bold (prefer the original)

Bold typography weight (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-font-weight-bold

---

### nhsuk-typography-weight-normal

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L61-L67)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-font-weight-normal
- Alias of: nhsuk-font-weight-normal (prefer the original)

Normal typography weight (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-font-weight-normal

---

### nhsuk-visually-hidden

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L122-L136)

Hide an element visually, but have it available for screen readers

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | true | Whether to mark as \`!important\` |

#### Requires

- mixin: _nhsuk-visually-hide-content

#### Used By

- mixin: visually-hidden

#### Examples

```scss
@include nhsuk-visually-hidden;
```

---

### nhsuk-visually-hidden-focusable

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L157-L165)

Hide an element visually, but have it available for screen readers whilst
allowing the element to be focused when navigated to via the keyboard (e.g.
for the skip link)

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | true | Whether to mark as \`!important\` |

#### Requires

- mixin: _nhsuk-visually-hide-content

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: visually-hidden-focusable

---

### nhsuk-warning

- Type: mixin
- Access: public
- Group: settings/warnings
- File: core/settings/_warnings.scss (L53-L61)

Warnings

Acts as a wrapper for the built in `@warn` sass function

We use this instead of using `@warn` for 3 reasons:

- To check if a warning is being suppressed through `$nhsuk-suppressed-warnings`,
in which case we don't call `@warn` and printing the warning to the user
- To format the passed warning `$message` with the warning key at the end
- To prevent duplicate warnings by adding the passed `$key` to
`$nhsuk-suppressed-warnings` after `@warn` is called to ensure it only runs
once per sass compilation

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| key | String | No | - | The key to be checked against \`$nhsuk-suppressed-warnings\`
and then passed to it to prevent multiple of the same warning. |
| message | String | No | - | The message to use when calling \`@warn\` |
| silence-further-warnings | Boolean | No | - | Whether to silence future
warnings that use the same $key |

#### Requires

- function: _should-warn
- function: _warning-text
- variable: nhsuk-suppressed-warnings

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-link-style-white
- mixin: clearfix
- mixin: reading-width
- mixin: visually-hidden
- mixin: visually-hidden-focusable
- mixin: visually-shown
- mixin: top-and-bottom
- mixin: panel
- mixin: panel-with-label
- mixin: heading-label
- mixin: care-card
- mixin: nhsuk-print-colour
- mixin: nhsuk-print-color
- mixin: print-color
- mixin: nhsuk-print-hide
- mixin: print-hide
- mixin: flex
- mixin: flex-item
- mixin: remove-margin-mobile
- mixin: govuk-media-query
- mixin: nhsuk-text-color
- mixin: nhsuk-typography-weight-normal
- mixin: nhsuk-typography-weight-bold
- mixin: nhsuk-font-size
- mixin: nhsuk-typography-responsive

---

### nhsuk-width-container

- Type: mixin
- Access: public
- Group: objects/layout
- File: core/objects/_width-container.scss (L22-L71)

Width container mixin

Used to create page width and custom width container classes.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| width | String | No | $nhsuk-page-width | Width in pixels |

#### Requires

- function: nhsuk-from-breakpoint
- variable: nhsuk-gutter-half
- variable: nhsuk-gutter

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Examples

Creating a 1200px wide container class

```scss
.app-width-container--wide {
  @include nhsuk-width-container(1200px);
}
```

---

### panel

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L292-L295)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-panel
- Alias of: nhsuk-panel (prefer the original)

Panel mixin (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-panel

---

### panel-with-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L323-L326)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-panel-with-label
- Alias of: nhsuk-panel-with-label (prefer the original)

Panel with label mixin, inherits panel styling
and removes padding top for the label positioning (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-panel-with-label

---

### print-color

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L467-L470)
- **Deprecated:** To be removed in v11.0
- Alias of: nhsuk-print-colour (prefer the original)

Print colour mixin, sets the text print colour
warning callout, do and don't lists and panels (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-print-colour

---

### print-hide

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L502-L505)
- **Deprecated:** To be removed in v11.0
- Alias of: nhsuk-print-hide (prefer the original)

Print hide mixin, hides the element from print (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-print-hide

---

### reading-width

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L56-L59)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-reading-width
- Alias of: nhsuk-reading-width (prefer the original)

Reading width mixin, add a maximum width
to large pieces of content (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-reading-width

---

### remove-margin-mobile

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L616-L623)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-remove-margin-mobile
- Alias of: nhsuk-remove-margin-mobile (prefer the original)

Remove margin mobile mixin (deprecated)

Removes left and right margin at tablet breakpoint

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-remove-margin-mobile

---

### top-and-bottom

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L253-L256)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-top-and-bottom
- Alias of: nhsuk-top-and-bottom (prefer the original)

Top and bottom margin mixin, remove
the top and bottom margin spacing (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-top-and-bottom

---

### visually-hidden

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L144-L147)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-visually-hidden
- Alias of: nhsuk-visually-hidden (prefer the original)

Hide an element visually, but have it available for screen readers
(deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-visually-hidden

---

### visually-hidden-focusable

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L174-L180)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-visually-hidden-focusable
- Alias of: nhsuk-visually-hidden-focusable (prefer the original)

Hide an element visually, but have it available for screen readers whilst
allowing the element to be focused when navigated to via the keyboard (e.g.
for the skip link) (deprecated)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-visually-hidden-focusable

---

### visually-shown

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L191-L228)
- **Deprecated:** To be removed in v11.0, use @media queries to apply \`visually-hidden\` instead

Show an element visually that has previously been hidden by visually-hidden

For differences between mobile and desktop views, use $display to set the CSS display property

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| display | String | No | null | CSS display property (optional) |
| important | Boolean | No | true | Whether to mark as \`!important\` |

#### Requires

- mixin: nhsuk-warning

---

## Variables

### _icon-sizes

- Type: variable
- Access: private
- Group: styles
- File: core/styles/_icons.scss (L37)

Icon size adjustments

#### Value

```scss
(25%, 50%, 75%, 100%)
```

---

### _spacing-directions

- Type: variable
- Access: private
- Group: utilities
- File: core/utilities/_spacing.scss (L19)

Directions for spacing

#### Value

```scss
("top", "right", "bottom", "left")
```

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: _nhsuk-generate-responsive-spacing-overrides
- mixin: _nhsuk-generate-static-spacing-overrides

---

### imported-modules

- Type: variable
- Access: public
- Group: tools
- File: core/tools/_exports.scss (L11)

List of modules which have already been exported

#### Value

```scss
()
```

#### Used By

- mixin: nhsuk-exports

---

### nhsuk-assets-path

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L18)

Path to the assets directory, with trailing slash.

#### Value

```scss
"/assets/"
```

---

### nhsuk-body-background-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L44)

Body background colour

#### Value

```scss
nhsuk-colour("grey-5")
```

---

### nhsuk-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L116)

Border colour

Used in for example borders, separators, rules and keylines.

#### Value

```scss
nhsuk-colour("grey-4")
```

---

### nhsuk-border-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L123)
- **Deprecated:** To be removed in v11.0

Border hover colour

#### Value

```scss
nhsuk-colour("grey-3")
```

---

### nhsuk-border-width

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L185)

Standard border width

#### Value

```scss
4px
```

---

### nhsuk-border-width-form-element

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L191)

Form control border width

#### Value

```scss
2px
```

#### Used By

- mixin: nhsuk-button-style
- mixin: nhsuk-focused-input

---

### nhsuk-border-width-form-group-error

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L197)

Form group border width when in error state

#### Value

```scss
$nhsuk-border-width
```

---

### nhsuk-brand-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L17)

Brand colour

#### Value

```scss
nhsuk-colour("blue")
```

---

### nhsuk-breakpoints

- Type: variable
- Access: public
- Group: settings/layout
- File: core/settings/_breakpoints.scss (L13-L18)

Breakpoint definitions

#### Value

```scss
(
  mobile: 320px,
  tablet: 641px,
  desktop: 769px,
  large-desktop: 990px
)
```

---

### nhsuk-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L245)

Button background colour (active)

#### Value

```scss
nhsuk-shade($nhsuk-button-colour, 50%)
```

---

### nhsuk-button-border-radius

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L215)

Button border radius

#### Value

```scss
4px
```

#### Used By

- mixin: nhsuk-button-style

---

### nhsuk-button-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L227)

Button background colour

#### Value

```scss
nhsuk-colour("green")
```

---

### nhsuk-button-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L239)

Button background colour (hover)

#### Value

```scss
nhsuk-shade($nhsuk-button-colour, 20%)
```

---

### nhsuk-button-shadow-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L251)

Button shadow colour

#### Value

```scss
nhsuk-shade($nhsuk-button-colour, 50%)
```

---

### nhsuk-button-shadow-size

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L221)

Button shadow size

#### Value

```scss
4px
```

#### Used By

- mixin: nhsuk-button-style

---

### nhsuk-button-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L233)

Button text colour

#### Value

```scss
nhsuk-colour("white")
```

---

### nhsuk-card-background-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L50)

Card background colour

#### Value

```scss
nhsuk-colour("white")
```

---

### nhsuk-code-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L189)

Code text colour

#### Value

```scss
nhsuk-colour("red")
```

---

### nhsuk-code-font

- Type: variable
- Access: public
- Group: settings/typography
- File: core/settings/_typography.scss (L155)

System monospace font stack

Android typically avoids the "Courier" based monospace
default but we need to specify fallbacks for others:

* Menlo - Font for older macOS, OS X versions
* Cascadia Mono, Segoe UI Mono, Consolas - Fonts for Windows 11, 10, 8
* Consolas - Font for older Windows versions
* Liberation Mono - Font for Linux used by GitHub

#### Value

```scss
menlo, "Cascadia Mono", "Segoe UI Mono", consolas, "Liberation Mono", monospace
```

#### Used By

- mixin: nhsuk-font-monospace

---

### nhsuk-colours

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-palette.scss (L14-L39)

NHS colour palette

#### Value

```scss
(
  // Primary
  "blue": #005eb8,
  "white": #ffffff,
  "black": #212b32,
  "green": #007f3b,
  "purple": #330072,
  "dark-pink": #7c2855,
  "red": #d5281b,
  "yellow": #ffeb3b,

  // Secondary
  "dark-blue": #003087,
  "pale-yellow": #fff9c4,
  "warm-yellow": #ffb81c,
  "orange": #ed8b00,
  "aqua-green": #00a499,
  "pink": #ae2573,

  // Greyscale
  "grey-1": #4c6272,
  "grey-2": #768692,
  "grey-3": #aeb7bd,
  "grey-4": #d8dde0,
  "grey-5": #f0f4f5
)
```

#### Used By

- function: nhsuk-colour

---

### nhsuk-error-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L100)

Error colour

Used to highlight error messages and form controls in an error state

#### Value

```scss
nhsuk-colour("red")
```

#### Used By

- mixin: nhsuk-link-style-error

---

### nhsuk-focus-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L83)

Focus colour

Used for outline (and background, where appropriate) when interactive
elements (links, form controls) have keyboard focus.

#### Value

```scss
nhsuk-colour("yellow")
```

#### Used By

- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-radio
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-box

---

### nhsuk-focus-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L92)

Focused text colour

Ensure that the contrast between the text and background colour passes
WCAG Level AA contrast requirements.

#### Value

```scss
nhsuk-colour("black")
```

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-radio
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-box

---

### nhsuk-focus-width

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L203)

Border width of focus outline

#### Value

```scss
4px
```

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-radio
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-box

---

### nhsuk-font-family

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L49)

Font families to use for all typography on screen media

#### Value

```scss
$nhsuk-font, $nhsuk-font-fallback
```

---

### nhsuk-font-family-print

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L58)

Font families to use for print media

We recommend that you use system fonts when printing. This will avoid issues
with some printer drivers and operating systems.

#### Value

```scss
sans-serif
```

---

### nhsuk-font-weight-bold

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L93)

Font weight for bold typography

#### Value

```scss
$nhsuk-font-bold
```

#### Used By

- mixin: nhsuk-font-weight-bold

---

### nhsuk-font-weight-normal

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L87)

Font weight for normal typography

#### Value

```scss
$nhsuk-font-normal
```

#### Used By

- mixin: nhsuk-font-weight-normal

---

### nhsuk-fonts-path

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L30)

Path or URL to the fonts folder, with trailing slash.

#### Value

```scss
"https://assets.nhs.uk/fonts/"
```

#### Used By

- function: nhsuk-font-url

---

### nhsuk-grid-widths

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L149-L156)

Map of grid column widths

#### Value

```scss
(
  one-quarter: math.percentage(math.div(1, 4)),
  one-third: math.percentage(math.div(1, 3)),
  one-half: math.percentage(math.div(1, 2)),
  two-thirds: math.percentage(math.div(2, 3)),
  three-quarters: math.percentage(math.div(3, 4)),
  full: 100%
)
```

#### Used By

- function: nhsuk-grid-width

---

### nhsuk-gutter

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L162)

Width of gutter between grid columns

#### Value

```scss
32px
```

#### Used By

- mixin: nhsuk-width-container

---

### nhsuk-gutter-half

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L168)

Width of half the gutter between grid columns

#### Value

```scss
math.div($nhsuk-gutter, 2)
```

#### Used By

- mixin: nhsuk-width-container
- mixin: nhsuk-grid-column
- mixin: nhsuk-remove-margin-mobile

---

### nhsuk-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L152)

Input hover colour

Used for hover states on form controls

#### Value

```scss
nhsuk-colour("grey-3")
```

---

### nhsuk-hover-width

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L209)

Hover width for form controls with a hover state

#### Value

```scss
10px
```

---

### nhsuk-images-path

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L24)

Path or URL to the images folder, with trailing slash.

#### Value

```scss
"#{$nhsuk-assets-path}images/"
```

#### Used By

- function: nhsuk-image-url

---

### nhsuk-include-default-font-face

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L67)

Include the default @font-face declarations

Defaults to true if "Frutiger W01" appears in the $nhsuk-font-family
setting.

#### Value

```scss
$nhsuk-include-font-face
```

---

### nhsuk-include-dynamic-type

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L108)

Feature flag for Apple Dynamic Type

When set to true, $nhsuk-include-dynamic-type will automatically apply the
user's preferred text size on iOS and iPadOS devices.

Note: This flag adjusts `$nhsuk-root-font-size` from 16px to 17px when set.
Please review all custom sizes not calculated relative to the root font
size as they will not scale dynamically.

#### Value

```scss
false
```

#### Links

- [https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type)

---

### nhsuk-input-background-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L183)

Form element background colour

#### Value

```scss
nhsuk-colour("white")
```

---

### nhsuk-input-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L144)

Form border colour

Used for form inputs and controls

#### Value

```scss
nhsuk-colour("grey-1")
```

---

### nhsuk-link-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L217)

Active link colour

#### Value

```scss
nhsuk-shade($nhsuk-link-colour, 50%)
```

#### Used By

- mixin: nhsuk-link-style-no-visited-state

---

### nhsuk-link-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L199)

Link colour

#### Value

```scss
nhsuk-colour("blue")
```

#### Used By

- mixin: nhsuk-link-style-no-visited-state

---

### nhsuk-link-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L211)

Link hover colour

#### Value

```scss
nhsuk-colour("dark-pink")
```

#### Used By

- mixin: nhsuk-link-style-no-visited-state

---

### nhsuk-link-visited-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L205)

Visited link colour

#### Value

```scss
nhsuk-colour("purple")
```

---

### nhsuk-login-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L365)

Login button background colour (active)

#### Value

```scss
nhsuk-shade($nhsuk-login-button-colour, 50%)
```

---

### nhsuk-login-button-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L353)

Login button background colour

#### Value

```scss
$nhsuk-brand-colour
```

---

### nhsuk-login-button-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L359)

Login button background colour (hover)

#### Value

```scss
nhsuk-shade($nhsuk-login-button-colour, 20%)
```

---

### nhsuk-login-button-shadow-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L371)

Login button shadow colour

#### Value

```scss
nhsuk-shade($nhsuk-login-button-colour, 50%)
```

---

### nhsuk-page-width

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L143)

Width of main container

#### Value

```scss
960px
```

---

### nhsuk-panel-border-width

- Type: variable
- Access: public
- Group: components/panel
- File: components/panel/_index.scss (L26)

The overflowing is a particular problem with the panel component since it uses white
   text: when the text overflows the container, it is invisible on the white (page)
   background. When the text in our other components overflow, the user might have to scroll
   horizontally to view it but the text remains legible.

#### Value

```scss
nhsuk-spacing(1)
```

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

---

### nhsuk-print-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L58)

Text colour for print media

Use 'true black' to avoid printers using colour ink to print body text

#### Value

```scss
#000000
```

#### Used By

- mixin: nhsuk-panel
- mixin: nhsuk-heading-label
- mixin: nhsuk-care-card
- mixin: nhsuk-text-colour

---

### nhsuk-reverse-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L136)

Reverse border colour

#### Value

```scss
nhsuk-tint($nhsuk-brand-colour, 20%)
```

---

### nhsuk-reverse-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L317)

Reverse button background colour (active)

#### Value

```scss
nhsuk-shade($nhsuk-reverse-button-colour, 30%)
```

---

### nhsuk-reverse-button-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L299)

Reverse button background colour

#### Value

```scss
nhsuk-colour("white")
```

---

### nhsuk-reverse-button-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L311)

Reverse button background colour (hover)

#### Value

```scss
nhsuk-shade($nhsuk-reverse-button-colour, 15%)
```

---

### nhsuk-reverse-button-shadow-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L323)

Reverse button shadow colour

#### Value

```scss
nhsuk-shade($nhsuk-reverse-button-colour, 30%)
```

---

### nhsuk-reverse-button-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L305)

Reverse button text colour

#### Value

```scss
nhsuk-colour("black")
```

---

### nhsuk-reverse-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L160)

Reverse input hover colour

Used for hover states on form controls, on reverse backgrounds

#### Value

```scss
nhsuk-shade($nhsuk-brand-colour, 20%)
```

---

### nhsuk-reverse-secondary-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L74)

Reverse secondary text colour

Used in for example 'muted' text and help text.

#### Value

```scss
nhsuk-tint($nhsuk-brand-colour, 78%)
```

---

### nhsuk-reverse-target-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L177)

Reverse target area hover colour

Used for hover states on transparent areas used to expand target areas,
on reverse backgrounds

#### Value

```scss
nhsuk-shade($nhsuk-brand-colour, 10%)
```

---

### nhsuk-reverse-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L29)

Text colour (reverse)

#### Value

```scss
nhsuk-colour("white")
```

#### Used By

- mixin: nhsuk-link-style-reverse

---

### nhsuk-root-font-size

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L121)

Root font size

This is used to calculate rem sizes for the typography, and should match the
_effective_ font-size of your root (or html) element.

Ideally you should not be setting the font-size on the html or root element
in order to allow it to scale with user-preference, in which case this
should be set to 16px.

#### Value

```scss
16px
```

#### Used By

- mixin: nhsuk-font-dynamic-type
- function: nhsuk-em
- function: nhsuk-px-to-rem
- function: nhsuk-line-height

---

### nhsuk-secondary-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L130)
- **Deprecated:** To be changed to "grey-3" in v11.0

Secondary border colour

#### Value

```scss
rgba(nhsuk-colour("white"), 0.2)
```

---

### nhsuk-secondary-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L287)

Secondary button background colour (active)

#### Value

```scss
nhsuk-tint($nhsuk-secondary-button-border-colour, 78%)
```

---

### nhsuk-secondary-button-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L269)

Secondary button border colour

#### Value

```scss
$nhsuk-brand-colour
```

---

### nhsuk-secondary-button-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L257)

Secondary button background colour

#### Value

```scss
transparent
```

---

### nhsuk-secondary-button-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L281)

Secondary button background colour (hover)

#### Value

```scss
nhsuk-tint($nhsuk-secondary-button-border-colour, 85%)
```

---

### nhsuk-secondary-button-shadow-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L293)

Secondary button shadow colour

#### Value

```scss
$nhsuk-secondary-button-border-colour
```

---

### nhsuk-secondary-button-solid-background-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L263)

Secondary button (solid background) background colour

#### Value

```scss
nhsuk-colour("white")
```

---

### nhsuk-secondary-button-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L275)

Secondary button text colour

#### Value

```scss
$nhsuk-brand-colour
```

---

### nhsuk-secondary-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L66)

Secondary text colour

Used in for example 'muted' text and help text.

#### Value

```scss
nhsuk-colour("grey-1")
```

---

### nhsuk-show-breakpoints

- Type: variable
- Access: public
- Group: settings/layout
- File: core/settings/_breakpoints.scss (L26)

Show active breakpoint in top-right corner.

Only use this during local development.

#### Value

```scss
()
```

---

### nhsuk-spacing-points

- Type: variable
- Access: public
- Group: settings/spacing
- File: core/settings/_spacing.scss (L9-L20)

Single point spacing variables

#### Value

```scss
(
  0: 0,
  1: 4px,
  2: 8px,
  3: 16px,
  4: 24px,
  5: 32px,
  6: 40px,
  7: 48px,
  8: 56px,
  9: 64px
)
```

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- function: nhsuk-spacing
- mixin: _nhsuk-generate-static-spacing-overrides

---

### nhsuk-spacing-responsive-scale

- Type: variable
- Access: public
- Group: settings/spacing
- File: core/settings/_spacing.scss (L36-L77)

Responsive spacing map

These definitions are used to generate responsive spacing that adapts
according to the breakpoints (see 'tools/spacing'). These maps should be
used wherever possible to standardise responsive spacing.

You can define different behaviour on tablet and desktop. The 'null'
breakpoint is for mobile.

Access responsive spacing with `nhsuk-responsive-margin` or
`nhsuk-responsive-padding` mixins.

#### Value

```scss
(
  0: (
    null: 0,
    tablet: 0
  ),
  1: (
    null: 4px,
    tablet: 4px
  ),
  2: (
    null: 8px,
    tablet: 8px
  ),
  3: (
    null: 8px,
    tablet: 16px
  ),
  4: (
    null: 16px,
    tablet: 24px
  ),
  5: (
    null: 24px,
    tablet: 32px
  ),
  6: (
    null: 32px,
    tablet: 40px
  ),
  7: (
    null: 40px,
    tablet: 48px
  ),
  8: (
    null: 48px,
    tablet: 56px
  ),
  9: (
    null: 56px,
    tablet: 64px
  )
)
```

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-responsive-spacing
- mixin: _nhsuk-generate-responsive-spacing-overrides

---

### nhsuk-success-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L108)

Success colour

Used to highlight success messages and banners

#### Value

```scss
nhsuk-colour("green")
```

#### Used By

- mixin: nhsuk-link-style-success

---

### nhsuk-suppressed-warnings

- Type: variable
- Access: public
- Group: settings/warnings
- File: core/settings/_warnings.scss (L30)

Suppressed warnings map

This map is used to determine which deprecation warnings to **not** show
to users when compiling sass. This is in place for codebases that do not
have the necessary capacity to upgrade and remove the deprecation,
particularly if the deprecation is significant. For example, the removal of
mixins and functions that were previously available to users of frontend.

You can add to this map and define which warnings to suppress by appending to
it using the warning key, found in the warning message. For example:

#### Value

```scss
()
```

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-warning
- function: _should-warn
- function: _warning-text

#### Examples

```scss
// warning message:
//  $foobar is no longer supported. To silence this warning, update
//  $nhsuk-suppressed-warnings with key: "foobar"
$nhsuk-suppressed-warnings: (
  foobar
);
```

---

### nhsuk-target-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L168)

Target area hover colour

Used for hover states on transparent areas used to expand target areas

#### Value

```scss
nhsuk-tint(nhsuk-colour("grey-4"), 20%)
```

---

### nhsuk-template-background-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L38)

Template background colour

Used by components that want to give the illusion of extending
the template background (such as the footer).

#### Value

```scss
nhsuk-colour("grey-4")
```

---

### nhsuk-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L23)

Text colour

#### Value

```scss
nhsuk-colour("black")
```

#### Used By

- mixin: nhsuk-text-colour

---

### nhsuk-typography-scale

- Type: variable
- Access: public
- Group: settings/typography
- File: core/settings/_typography.scss (L31-L144)

Responsive typography font map

This is used to generate responsive typography that adapts according to the
breakpoints.

Font size and font weight can be defined for each breakpoint. You can define
different behaviour on tablet and desktop. The 'null' breakpoint is for
mobile.

Line-heights will automatically be converted from pixel measurements into
relative values. For example, with a font-size of 16px and a line-height of
24px, the line-height will be converted to 1.5 before output.

You can also specify a separate font size and line height for print media.

#### Value

```scss
(
  64: (
    null: (
      font-size: 48px,
      line-height: 54px
    ),
    tablet: (
      font-size: 64px,
      line-height: 70px
    ),
    print: (
      font-size: 34pt,
      line-height: 1.1
    )
  ),
  48: (
    null: (
      font-size: 32px,
      line-height: 38px
    ),
    tablet: (
      font-size: 48px,
      line-height: 54px
    ),
    print: (
      font-size: 26pt,
      line-height: 1.15
    )
  ),
  36: (
    null: (
      font-size: 27px,
      line-height: 33px
    ),
    tablet: (
      font-size: 36px,
      line-height: 42px
    ),
    print: (
      font-size: 20pt,
      line-height: 1.2
    )
  ),
  26: (
    null: (
      font-size: 22px,
      line-height: 29px
    ),
    tablet: (
      font-size: 26px,
      line-height: 32px
    ),
    print: (
      font-size: 17pt,
      line-height: 1.25
    )
  ),
  22: (
    null: (
      font-size: 19px,
      line-height: 27px
    ),
    tablet: (
      font-size: 22px,
      line-height: 30px
    ),
    print: (
      font-size: 15pt,
      line-height: 1.25
    )
  ),
  19: (
    null: (
      font-size: 16px,
      line-height: 24px
    ),
    tablet: (
      font-size: 19px,
      line-height: 28px
    ),
    print: (
      font-size: 13pt,
      line-height: 1.25
    )
  ),
  16: (
    null: (
      font-size: 14px,
      line-height: 24px
    ),
    tablet: (
      font-size: 16px,
      line-height: 24px
    ),
    print: (
      font-size: 12pt,
      line-height: 1.3
    )
  ),
  14: (
    null: (
      font-size: 12px,
      line-height: 20px
    ),
    tablet: (
      font-size: 14px,
      line-height: 24px
    ),
    print: (
      font-size: 12pt,
      line-height: 1.3
    )
  )
)
```

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-font-size

---

### nhsuk-warning-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L341)

Warning button background colour (active)

#### Value

```scss
nhsuk-shade($nhsuk-warning-button-colour, 50%)
```

---

### nhsuk-warning-button-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L329)

Warning button background colour

#### Value

```scss
nhsuk-colour("red")
```

---

### nhsuk-warning-button-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L335)

Warning button background colour (hover)

#### Value

```scss
nhsuk-shade($nhsuk-warning-button-colour, 20%)
```

---

### nhsuk-warning-button-shadow-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L347)

Warning button shadow colour

#### Value

```scss
nhsuk-shade($nhsuk-warning-button-colour, 50%)
```

---

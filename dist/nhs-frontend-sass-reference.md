# NHS Frontend Sass Reference

> Auto-generated from NHS Frontend Sass documentation. Do not edit manually.

## Metadata

- NHS Frontend Version: 10.5.2
- Git Branch: detached
- Git Commit: 67bf2f6
- Generated: 2026-07-06 12:26:28 UTC
- Source: https://github.com/nhsuk/nhsuk-frontend

## Table of Contents

| Name | Type | Group | Line |
|------|------|-------|------|
| _nhsuk-equilateral-height | function | tools | 197 |
| _reverse-colour | function | none | 229 |
| _should-warn | function | settings/warnings | 250 |
| _warning-text | function | settings/warnings | 279 |
| nhsuk-chevron-size | function | tools | 309 |
| nhsuk-colour | function | helpers/colour | 335 |
| nhsuk-colour-compatible | function | helpers/colour | 370 |
| nhsuk-em | function | tools | 405 |
| nhsuk-font-url | function | tools | 446 |
| nhsuk-grid-width | function | tools | 472 |
| nhsuk-image-url | function | tools | 510 |
| nhsuk-line-height | function | tools | 536 |
| nhsuk-px-to-rem | function | tools | 571 |
| nhsuk-shade | function | helpers/colour | 612 |
| nhsuk-spacing | function | tools | 649 |
| nhsuk-tint | function | helpers/colour | 716 |
| _header-link-style | mixin | components/header | 751 |
| _nhsuk-generate-responsive-spacing-overrides | mixin | utilities | 780 |
| _nhsuk-generate-static-spacing-overrides | mixin | utilities | 820 |
| _nhsuk-visually-hide-content | mixin | tools | 854 |
| care-card (deprecated) | mixin | tools | 882 |
| clearfix (deprecated) | mixin | tools | 901 |
| flex (deprecated) | mixin | tools | 919 |
| flex-item (deprecated) | mixin | tools | 935 |
| heading-label (deprecated) | mixin | tools | 951 |
| nhsuk-button-style | mixin | tools | 970 |
| nhsuk-care-card | mixin | tools | 1000 |
| nhsuk-clearfix | mixin | tools | 1034 |
| nhsuk-exports | mixin | tools | 1055 |
| nhsuk-flex | mixin | tools | 1084 |
| nhsuk-flex-item | mixin | tools | 1105 |
| nhsuk-focused-box | mixin | tools | 1130 |
| nhsuk-focused-button | mixin | tools | 1160 |
| nhsuk-focused-checkbox | mixin | tools | 1184 |
| nhsuk-focused-input | mixin | tools | 1208 |
| nhsuk-focused-radio | mixin | tools | 1234 |
| nhsuk-focused-text | mixin | tools | 1264 |
| nhsuk-font | mixin | tools | 1292 |
| nhsuk-font-code | mixin | tools | 1330 |
| nhsuk-font-dynamic-type | mixin | generic | 1354 |
| nhsuk-font-monospace | mixin | tools | 1372 |
| nhsuk-font-size | mixin | tools | 1398 |
| nhsuk-font-weight-bold | mixin | tools | 1465 |
| nhsuk-font-weight-normal | mixin | tools | 1492 |
| nhsuk-grid-column | mixin | tools | 1519 |
| nhsuk-heading-label | mixin | tools | 1582 |
| nhsuk-link-image | mixin | tools | 1624 |
| nhsuk-link-style | mixin | tools | 1642 |
| nhsuk-link-style-active | mixin | tools | 1677 |
| nhsuk-link-style-default | mixin | tools | 1705 |
| nhsuk-link-style-error | mixin | tools | 1730 |
| nhsuk-link-style-focus | mixin | tools | 1762 |
| nhsuk-link-style-hover | mixin | tools | 1788 |
| nhsuk-link-style-no-underline | mixin | tools | 1816 |
| nhsuk-link-style-no-visited-state | mixin | tools | 1839 |
| nhsuk-link-style-reverse | mixin | tools | 1876 |
| nhsuk-link-style-success | mixin | tools | 1911 |
| nhsuk-link-style-text | mixin | tools | 1943 |
| nhsuk-link-style-visited | mixin | tools | 1979 |
| nhsuk-link-style-white (deprecated) | mixin | tools | 2007 |
| nhsuk-logo-size | mixin | tools | 2025 |
| nhsuk-panel | mixin | tools | 2039 |
| nhsuk-panel-with-label | mixin | tools | 2078 |
| nhsuk-print-color (deprecated) | mixin | tools | 2114 |
| nhsuk-print-colour | mixin | tools | 2133 |
| nhsuk-print-hide | mixin | tools | 2167 |
| nhsuk-reading-width | mixin | tools | 2198 |
| nhsuk-remove-margin-mobile | mixin | tools | 2220 |
| nhsuk-responsive-margin | mixin | tools | 2242 |
| nhsuk-responsive-padding | mixin | tools | 2289 |
| nhsuk-responsive-spacing | mixin | tools | 2335 |
| nhsuk-shape-arrow | mixin | tools | 2398 |
| nhsuk-shape-chevron | mixin | tools | 2440 |
| nhsuk-text-break-word | mixin | tools | 2471 |
| nhsuk-text-color (deprecated) | mixin | tools | 2492 |
| nhsuk-text-colour | mixin | tools | 2510 |
| nhsuk-top-and-bottom | mixin | tools | 2537 |
| nhsuk-typography-responsive (deprecated) | mixin | tools | 2560 |
| nhsuk-typography-weight-bold (deprecated) | mixin | tools | 2594 |
| nhsuk-typography-weight-normal (deprecated) | mixin | tools | 2612 |
| nhsuk-visually-hidden | mixin | tools | 2630 |
| nhsuk-visually-hidden-focusable | mixin | tools | 2661 |
| nhsuk-warning | mixin | settings/warnings | 2692 |
| nhsuk-width-container | mixin | objects/layout | 2760 |
| panel (deprecated) | mixin | tools | 2799 |
| panel-with-label (deprecated) | mixin | tools | 2817 |
| print-color (deprecated) | mixin | tools | 2836 |
| print-hide (deprecated) | mixin | tools | 2855 |
| reading-width (deprecated) | mixin | tools | 2873 |
| remove-margin-mobile (deprecated) | mixin | tools | 2892 |
| top-and-bottom (deprecated) | mixin | tools | 2912 |
| visually-hidden (deprecated) | mixin | tools | 2931 |
| visually-hidden-focusable (deprecated) | mixin | tools | 2949 |
| visually-shown (deprecated) | mixin | tools | 2969 |
| _icon-sizes | variable | styles | 2996 |
| _spacing-directions | variable | utilities | 3013 |
| imported-modules | variable | tools | 3039 |
| nhsuk-assets-path | variable | settings/globals | 3060 |
| nhsuk-body-background-colour | variable | settings/colours | 3077 |
| nhsuk-border-colour | variable | settings/colours | 3094 |
| nhsuk-border-hover-colour (deprecated) | variable | settings/colours | 3113 |
| nhsuk-border-width | variable | settings/globals | 3131 |
| nhsuk-border-width-form-element | variable | settings/globals | 3148 |
| nhsuk-border-width-form-group-error | variable | settings/globals | 3170 |
| nhsuk-brand-colour | variable | settings/colours | 3187 |
| nhsuk-breakpoints | variable | settings/layout | 3204 |
| nhsuk-button-active-colour | variable | settings/colours | 3226 |
| nhsuk-button-border-radius | variable | settings/globals | 3243 |
| nhsuk-button-colour | variable | settings/colours | 3264 |
| nhsuk-button-hover-colour | variable | settings/colours | 3281 |
| nhsuk-button-shadow-colour | variable | settings/colours | 3298 |
| nhsuk-button-shadow-size | variable | settings/globals | 3315 |
| nhsuk-button-text-colour | variable | settings/colours | 3336 |
| nhsuk-card-background-colour | variable | settings/colours | 3353 |
| nhsuk-code-colour | variable | settings/colours | 3370 |
| nhsuk-code-font | variable | settings/typography | 3387 |
| nhsuk-colours | variable | settings/colours | 3416 |
| nhsuk-error-colour | variable | settings/colours | 3462 |
| nhsuk-focus-colour | variable | settings/colours | 3485 |
| nhsuk-focus-text-colour | variable | settings/colours | 3514 |
| nhsuk-focus-width | variable | settings/globals | 3544 |
| nhsuk-font-family | variable | settings/globals | 3571 |
| nhsuk-font-family-print | variable | settings/globals | 3588 |
| nhsuk-font-weight-bold | variable | settings/globals | 3608 |
| nhsuk-font-weight-normal | variable | settings/globals | 3629 |
| nhsuk-fonts-path | variable | settings/globals | 3650 |
| nhsuk-grid-widths | variable | settings/globals | 3671 |
| nhsuk-gutter | variable | settings/globals | 3699 |
| nhsuk-gutter-half | variable | settings/globals | 3720 |
| nhsuk-hover-colour | variable | settings/colours | 3743 |
| nhsuk-hover-width | variable | settings/globals | 3762 |
| nhsuk-images-path | variable | settings/globals | 3779 |
| nhsuk-include-default-font-face | variable | settings/globals | 3800 |
| nhsuk-include-dynamic-type | variable | settings/globals | 3820 |
| nhsuk-input-background-colour | variable | settings/colours | 3848 |
| nhsuk-input-border-colour | variable | settings/colours | 3865 |
| nhsuk-link-active-colour | variable | settings/colours | 3884 |
| nhsuk-link-colour | variable | settings/colours | 3905 |
| nhsuk-link-hover-colour | variable | settings/colours | 3926 |
| nhsuk-link-visited-colour | variable | settings/colours | 3947 |
| nhsuk-login-button-active-colour | variable | settings/colours | 3964 |
| nhsuk-login-button-colour | variable | settings/colours | 3981 |
| nhsuk-login-button-hover-colour | variable | settings/colours | 3998 |
| nhsuk-login-button-shadow-colour | variable | settings/colours | 4015 |
| nhsuk-page-width | variable | settings/globals | 4032 |
| nhsuk-panel-border-width | variable | components/panel | 4049 |
| nhsuk-print-text-colour | variable | settings/colours | 4073 |
| nhsuk-reverse-border-colour | variable | settings/colours | 4098 |
| nhsuk-reverse-button-active-colour | variable | settings/colours | 4115 |
| nhsuk-reverse-button-colour | variable | settings/colours | 4132 |
| nhsuk-reverse-button-hover-colour | variable | settings/colours | 4149 |
| nhsuk-reverse-button-shadow-colour | variable | settings/colours | 4166 |
| nhsuk-reverse-button-text-colour | variable | settings/colours | 4183 |
| nhsuk-reverse-text-colour | variable | settings/colours | 4200 |
| nhsuk-root-font-size | variable | settings/globals | 4221 |
| nhsuk-secondary-border-colour (deprecated) | variable | settings/colours | 4252 |
| nhsuk-secondary-button-active-colour | variable | settings/colours | 4270 |
| nhsuk-secondary-button-border-colour | variable | settings/colours | 4287 |
| nhsuk-secondary-button-colour | variable | settings/colours | 4304 |
| nhsuk-secondary-button-hover-colour | variable | settings/colours | 4321 |
| nhsuk-secondary-button-shadow-colour | variable | settings/colours | 4338 |
| nhsuk-secondary-button-solid-background-colour | variable | settings/colours | 4355 |
| nhsuk-secondary-button-text-colour | variable | settings/colours | 4372 |
| nhsuk-secondary-text-colour | variable | settings/colours | 4389 |
| nhsuk-show-breakpoints | variable | settings/layout | 4408 |
| nhsuk-spacing-points | variable | settings/spacing | 4427 |
| nhsuk-spacing-responsive-scale | variable | settings/spacing | 4464 |
| nhsuk-success-colour | variable | settings/colours | 4541 |
| nhsuk-suppressed-warnings | variable | settings/warnings | 4564 |
| nhsuk-template-background-colour | variable | settings/colours | 4611 |
| nhsuk-text-colour | variable | settings/colours | 4631 |
| nhsuk-typography-scale | variable | settings/typography | 4652 |
| nhsuk-warning-button-active-colour | variable | settings/colours | 4803 |
| nhsuk-warning-button-colour | variable | settings/colours | 4820 |
| nhsuk-warning-button-hover-colour | variable | settings/colours | 4837 |
| nhsuk-warning-button-shadow-colour | variable | settings/colours | 4854 |


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
- File: core/tools/_spacing.scss (L41-L65)

Single point spacing

Returns measurement corresponding to the spacing point requested.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| spacing-point | Number | No | - | Point on the spacing scale
 (set in \`settings/_spacing.scss\`) |

#### Returns

- Type: String
- Description: Spacing measurement eg. 8px

#### Throws

- Expected a number (integer), but got a
- Unknown spacing variable \`#{$spacing-point}\`. Make sure you are using a point from the spacing scale in \`_settings/spacing.scss\`.

#### Requires

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

## Mixins

### _header-link-style

- Type: mixin
- Access: private
- Group: components/header
- File: components/header/_index.scss (L45-L69)

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
- mixin: nhsuk-print-colour
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
- File: core/tools/_mixins.scss (L416-L419)
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
- File: core/tools/_mixins.scss (L503-L506)
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
- File: core/tools/_mixins.scss (L527-L530)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-flex-item
- Alias of: nhsuk-flex-item (prefer the original)

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-flex-item

---

### heading-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L381-L384)
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
- File: core/tools/_mixins.scss (L397-L408)

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
- File: core/tools/_mixins.scss (L493-L496)

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
- File: core/tools/_mixins.scss (L514-L520)

Flex item mixin

#### Requires

- mixin: nhsuk-media-query

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

- Unknown font size \`#{$size}\` - expected a point from the typography scale.

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-media-query
- function: nhsuk-px-to-rem
- function: nhsuk-line-height
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

- mixin: nhsuk-media-query
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
- File: core/tools/_mixins.scss (L344-L373)

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
- mixin: nhsuk-media-query
- function: nhsuk-spacing

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
- File: core/tools/_links.scss (L303-L316)

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
- File: core/tools/_links.scss (L152-L160)

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
- File: core/tools/_links.scss (L177-L184)

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
- File: core/tools/_links.scss (L134-L142)

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
- File: core/tools/_links.scss (L117-L126)

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
- File: core/tools/_links.scss (L250-L261)

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
- File: core/tools/_links.scss (L229-L236)

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
- File: core/tools/_links.scss (L201-L208)

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
- File: core/tools/_links.scss (L276-L296)

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
- File: core/tools/_links.scss (L99-L107)

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
- File: core/tools/_mixins.scss (L564-L567)

NHS logo size helper

Saves duplicating the code for when using the logo as a link.
Used in the header and footer.

---

### nhsuk-panel

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L269-L284)

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
- mixin: nhsuk-media-query
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
- File: core/tools/_mixins.scss (L307-L314)

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
- File: core/tools/_mixins.scss (L443-L446)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-print-colour
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
- File: core/tools/_mixins.scss (L430-L435)

Print colour mixin, sets the text print colour
warning callout, do and don't lists and panels

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| print-colour | Colour | No | $nhsuk-print-text-colour | Print colour |

#### Requires

- mixin: nhsuk-media-query

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-print-color
- mixin: print-color

#### Examples

```scss
@include nhsuk-print-colour($print-colour: inherit);
```

---

### nhsuk-print-hide

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L467-L475)

Print hide mixin, hides the element from print

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark as \`!important\` |

#### Requires

- mixin: nhsuk-media-query

#### Used By

- mixin: print-hide

#### Examples

```scss
@include nhsuk-print-hide;
```

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
- File: core/tools/_mixins.scss (L536-L541)

Remove margin mobile mixin

Removes left and right margin at tablet breakpoint

#### Requires

- mixin: nhsuk-media-query
- variable: nhsuk-gutter-half

#### Used By

- mixin: remove-margin-mobile

---

### nhsuk-responsive-margin

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_spacing.scss (L175-L177)

Responsive margin

Adds responsive margin by fetching a 'spacing map' from the responsive
spacing scale, which defines different spacing values at different
breakpoints. Wrapper for the `nhsuk-responsive-spacing` mixin.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| responsive-spacing-point | Number | No | - | Point on the responsive spacing
scale, corresponds to a map of breakpoints and spacing values |
| direction | String | No | all | Direction to add spacing to
  (\`top\`, \`right\`, \`bottom\`, \`left\`, \`all\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | false | Offset to adjust spacing by |

#### Requires

- mixin: nhsuk-responsive-spacing

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-panel
- mixin: nhsuk-panel-with-label

#### Examples

```scss
.foo {
  @include nhsuk-responsive-margin(6, 'left', $adjustment: 1px);
}
```

---

### nhsuk-responsive-padding

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_spacing.scss (L199-L201)

Responsive padding

Adds responsive padding by fetching a 'spacing map' from the responsive
spacing scale, which defines different spacing values at different
breakpoints. Wrapper for the `nhsuk-responsive-spacing` mixin.

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| responsive-spacing-point | Number | No | - | Point on the responsive spacing
  scale, corresponds to a map of breakpoints and spacing values |
| direction | String | No | all | Direction to add spacing to
  (\`top\`, \`right\`, \`bottom\`, \`left\`, \`all\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | false | Offset to adjust spacing |

#### Requires

- mixin: nhsuk-responsive-spacing

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-panel-with-label

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
- File: core/tools/_spacing.scss (L96-L153)

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
| direction | String | No | all | Direction to add spacing to
 (\`top\`, \`right\`, \`bottom\`, \`left\`, \`all\`) |
| important | Boolean | No | false | Whether to mark as \`!important\` |
| adjustment | Number | No | false | Offset to adjust spacing by |

#### Throws

- Expected a number (integer), but got a
- Unknown spacing point \`#{$responsive-spacing-point}\`. Make sure you are using a point from the

#### Requires

- mixin: nhsuk-media-query
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
    padding: nhsuk-spacing(5);
    top: nhsuk-spacing(2) !important; // if `!important` is required
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

- mixin: nhsuk-media-query
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
- File: core/tools/_mixins.scss (L236-L244)

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
- File: core/tools/_mixins.scss (L156-L164)

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
- mixin: visually-hidden-focusable
- mixin: visually-shown
- mixin: top-and-bottom
- mixin: panel
- mixin: panel-with-label
- mixin: heading-label
- mixin: care-card
- mixin: nhsuk-print-color
- mixin: print-color
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
- mixin: mq

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

- mixin: nhsuk-media-query
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
- File: core/tools/_mixins.scss (L291-L294)
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
- File: core/tools/_mixins.scss (L322-L325)
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
- File: core/tools/_mixins.scss (L454-L457)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-print-colour
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
- File: core/tools/_mixins.scss (L482-L485)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-print-hide
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
- File: core/tools/_mixins.scss (L550-L557)
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
- File: core/tools/_mixins.scss (L252-L255)
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
- File: core/tools/_mixins.scss (L144-L146)
- **Deprecated:** To be removed in v11.0, replaced by nhsuk-visually-hidden
- Alias of: nhsuk-visually-hidden (prefer the original)

Hide an element visually, but have it available for screen readers
(deprecated)

#### Requires

- mixin: nhsuk-visually-hidden

---

### visually-hidden-focusable

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L173-L179)
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
- File: core/tools/_mixins.scss (L190-L227)
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
- File: core/settings/_colours-applied.scss (L108)

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
- File: core/settings/_colours-applied.scss (L115)
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
- File: core/settings/_globals.scss (L184)

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
- File: core/settings/_globals.scss (L190)

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
- File: core/settings/_globals.scss (L196)

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
- File: core/settings/_breakpoints.scss (L12-L17)

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
- File: core/settings/_colours-applied.scss (L212)

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
- File: core/settings/_globals.scss (L214)

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
- File: core/settings/_colours-applied.scss (L194)

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
- File: core/settings/_colours-applied.scss (L206)

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
- File: core/settings/_colours-applied.scss (L218)

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
- File: core/settings/_globals.scss (L220)

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
- File: core/settings/_colours-applied.scss (L200)

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
- File: core/settings/_colours-applied.scss (L156)

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
- File: core/settings/_colours-applied.scss (L92)

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
- File: core/settings/_colours-applied.scss (L75)

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
- File: core/settings/_colours-applied.scss (L84)

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
- File: core/settings/_globals.scss (L202)

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
- File: core/settings/_globals.scss (L148-L155)

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
- File: core/settings/_globals.scss (L161)

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
- File: core/settings/_globals.scss (L167)

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
- File: core/settings/_colours-applied.scss (L144)

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
- File: core/settings/_globals.scss (L208)

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
- File: core/settings/_colours-applied.scss (L150)

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
- File: core/settings/_colours-applied.scss (L136)

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
- File: core/settings/_colours-applied.scss (L184)

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
- File: core/settings/_colours-applied.scss (L166)

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
- File: core/settings/_colours-applied.scss (L178)

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
- File: core/settings/_colours-applied.scss (L172)

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
- File: core/settings/_colours-applied.scss (L332)

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
- File: core/settings/_colours-applied.scss (L320)

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
- File: core/settings/_colours-applied.scss (L326)

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
- File: core/settings/_colours-applied.scss (L338)

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
- File: core/settings/_globals.scss (L142)

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
- mixin: nhsuk-care-card
- mixin: nhsuk-text-colour

---

### nhsuk-reverse-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L128)

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
- File: core/settings/_colours-applied.scss (L284)

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
- File: core/settings/_colours-applied.scss (L266)

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
- File: core/settings/_colours-applied.scss (L278)

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
- File: core/settings/_colours-applied.scss (L290)

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
- File: core/settings/_colours-applied.scss (L272)

Reverse button text colour

#### Value

```scss
nhsuk-colour("black")
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
- File: core/settings/_colours-applied.scss (L122)
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
- File: core/settings/_colours-applied.scss (L254)

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
- File: core/settings/_colours-applied.scss (L236)

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
- File: core/settings/_colours-applied.scss (L224)

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
- File: core/settings/_colours-applied.scss (L248)

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
- File: core/settings/_colours-applied.scss (L260)

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
- File: core/settings/_colours-applied.scss (L230)

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
- File: core/settings/_colours-applied.scss (L242)

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
- File: core/settings/_breakpoints.scss (L25)

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
- File: core/settings/_colours-applied.scss (L100)

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
- File: core/settings/_colours-applied.scss (L308)

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
- File: core/settings/_colours-applied.scss (L296)

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
- File: core/settings/_colours-applied.scss (L302)

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
- File: core/settings/_colours-applied.scss (L314)

Warning button shadow colour

#### Value

```scss
nhsuk-shade($nhsuk-warning-button-colour, 50%)
```

---

# NHS Frontend Sass Reference

> Auto-generated from NHS Frontend Sass documentation. Do not edit manually.

## Metadata

- NHS Frontend Version: 10.3.1
- Git Branch: detached
- Git Commit: b3c4f56
- Generated: 2026-03-10 16:30:08 UTC
- Source: https://github.com/nhsuk/nhsuk-frontend

## Table of Contents

| Name | Type | Group | Line |
|------|------|-------|------|
| _map-sort-by-value | function | none | 195 |
| _nhsuk-equilateral-height | function | tools | 252 |
| _quick-sort | function | none | 292 |
| _should-warn | function | settings/warnings | 344 |
| _warning-text | function | settings/warnings | 379 |
| get-breakpoint-width | function | none | 415 |
| nhsuk-chevron-size | function | tools | 464 |
| nhsuk-colour | function | helpers/colour | 507 |
| nhsuk-colour-compatible | function | helpers/colour | 556 |
| nhsuk-em | function | tools | 624 |
| nhsuk-grid-width | function | tools | 685 |
| nhsuk-line-height | function | tools | 733 |
| nhsuk-px-to-rem | function | tools | 792 |
| nhsuk-shade | function | helpers/colour | 847 |
| nhsuk-spacing | function | tools | 893 |
| nhsuk-tint | function | helpers/colour | 997 |
| px2em | function | none | 1038 |
| _header-link-style | mixin | components/header | 1087 |
| _nhsuk-generate-responsive-spacing-overrides | mixin | utilities | 1141 |
| _nhsuk-generate-static-spacing-overrides | mixin | utilities | 1200 |
| _nhsuk-visually-hide-content | mixin | tools | 1250 |
| add-breakpoint | mixin | none | 1320 |
| care-card | mixin | tools | 1360 |
| clearfix | mixin | tools | 1384 |
| flex | mixin | tools | 1407 |
| flex-item | mixin | tools | 1428 |
| govuk-media-query | mixin | tools | 1449 |
| heading-label | mixin | tools | 1474 |
| mq | mixin | none | 1498 |
| nhsuk-button-style | mixin | tools | 1618 |
| nhsuk-care-card | mixin | tools | 1705 |
| nhsuk-clearfix | mixin | tools | 1754 |
| nhsuk-exports | mixin | tools | 1785 |
| nhsuk-flex | mixin | tools | 1828 |
| nhsuk-flex-item | mixin | tools | 1856 |
| nhsuk-focused-box | mixin | tools | 1891 |
| nhsuk-focused-button | mixin | tools | 1930 |
| nhsuk-focused-checkbox | mixin | tools | 1970 |
| nhsuk-focused-input | mixin | tools | 2014 |
| nhsuk-focused-radio | mixin | tools | 2053 |
| nhsuk-focused-text | mixin | tools | 2103 |
| nhsuk-font | mixin | tools | 2154 |
| nhsuk-font-dynamic-type | mixin | generic | 2208 |
| nhsuk-font-size | mixin | tools | 2241 |
| nhsuk-grid-column | mixin | tools | 2397 |
| nhsuk-heading-label | mixin | tools | 2477 |
| nhsuk-link-image | mixin | tools | 2552 |
| nhsuk-link-style | mixin | tools | 2587 |
| nhsuk-link-style-active | mixin | tools | 2638 |
| nhsuk-link-style-default | mixin | tools | 2679 |
| nhsuk-link-style-focus | mixin | tools | 2706 |
| nhsuk-link-style-hover | mixin | tools | 2745 |
| nhsuk-link-style-no-visited-state | mixin | tools | 2787 |
| nhsuk-link-style-success | mixin | tools | 2828 |
| nhsuk-link-style-text | mixin | tools | 2871 |
| nhsuk-link-style-visited | mixin | tools | 2927 |
| nhsuk-link-style-white | mixin | tools | 2968 |
| nhsuk-logo-size | mixin | tools | 2998 |
| nhsuk-media-query | mixin | tools | 3019 |
| nhsuk-panel | mixin | tools | 3103 |
| nhsuk-panel-with-label | mixin | tools | 3161 |
| nhsuk-print-color | mixin | tools | 3208 |
| nhsuk-print-colour | mixin | tools | 3232 |
| nhsuk-print-hide | mixin | tools | 3275 |
| nhsuk-reading-width | mixin | tools | 3308 |
| nhsuk-remove-margin-mobile | mixin | tools | 3336 |
| nhsuk-responsive-margin | mixin | tools | 3367 |
| nhsuk-responsive-padding | mixin | tools | 3420 |
| nhsuk-responsive-spacing | mixin | tools | 3472 |
| nhsuk-shape-arrow | mixin | tools | 3591 |
| nhsuk-shape-chevron | mixin | tools | 3670 |
| nhsuk-text-break-word | mixin | tools | 3745 |
| nhsuk-text-color | mixin | tools | 3787 |
| nhsuk-text-colour | mixin | tools | 3810 |
| nhsuk-top-and-bottom | mixin | tools | 3847 |
| nhsuk-typography-responsive | mixin | tools | 3882 |
| nhsuk-typography-weight-bold | mixin | tools | 3924 |
| nhsuk-typography-weight-normal | mixin | tools | 3960 |
| nhsuk-visually-hidden | mixin | tools | 3996 |
| nhsuk-visually-hidden-focusable | mixin | tools | 4045 |
| nhsuk-warning | mixin | settings/warnings | 4088 |
| nhsuk-width-container | mixin | objects/layout | 4165 |
| panel | mixin | tools | 4257 |
| panel-with-label | mixin | tools | 4280 |
| print-color | mixin | tools | 4304 |
| print-hide | mixin | tools | 4328 |
| reading-width | mixin | tools | 4351 |
| remove-margin-mobile | mixin | tools | 4375 |
| show-breakpoints | mixin | none | 4404 |
| top-and-bottom | mixin | tools | 4470 |
| visually-hidden | mixin | tools | 4494 |
| visually-hidden-focusable | mixin | tools | 4516 |
| visually-shown | mixin | tools | 4544 |
| _icon-sizes | variable | styles | 4611 |
| _spacing-directions | variable | utilities | 4628 |
| imported-modules | variable | tools | 4654 |
| mq-breakpoints | variable | none | 4677 |
| mq-media-type | variable | none | 4714 |
| mq-show-breakpoints | variable | none | 4748 |
| nhsuk-body-background-colour | variable | settings/colours | 4779 |
| nhsuk-border-colour | variable | settings/colours | 4796 |
| nhsuk-border-hover-colour | variable | settings/colours | 4815 |
| nhsuk-border-width | variable | settings/globals | 4832 |
| nhsuk-border-width-form-element | variable | settings/globals | 4849 |
| nhsuk-border-width-form-group-error | variable | settings/globals | 4871 |
| nhsuk-brand-colour | variable | settings/colours | 4888 |
| nhsuk-breakpoints | variable | settings/layout | 4905 |
| nhsuk-button-active-colour | variable | settings/colours | 4927 |
| nhsuk-button-border-radius | variable | settings/globals | 4944 |
| nhsuk-button-colour | variable | settings/colours | 4965 |
| nhsuk-button-hover-colour | variable | settings/colours | 4982 |
| nhsuk-button-shadow-colour | variable | settings/colours | 4999 |
| nhsuk-button-shadow-size | variable | settings/globals | 5016 |
| nhsuk-button-text-colour | variable | settings/colours | 5038 |
| nhsuk-card-background-colour | variable | settings/colours | 5055 |
| nhsuk-code-font | variable | settings/typography | 5072 |
| nhsuk-colours | variable | settings/colours | 5097 |
| nhsuk-error-colour | variable | settings/colours | 5144 |
| nhsuk-focus-colour | variable | settings/colours | 5163 |
| nhsuk-focus-text-colour | variable | settings/colours | 5193 |
| nhsuk-focus-width | variable | settings/globals | 5230 |
| nhsuk-font-family | variable | settings/globals | 5263 |
| nhsuk-font-family-print | variable | settings/globals | 5280 |
| nhsuk-font-weight-bold | variable | settings/globals | 5300 |
| nhsuk-font-weight-normal | variable | settings/globals | 5322 |
| nhsuk-fonts-path | variable | settings/globals | 5344 |
| nhsuk-grid-widths | variable | settings/globals | 5361 |
| nhsuk-gutter | variable | settings/globals | 5390 |
| nhsuk-gutter-half | variable | settings/globals | 5415 |
| nhsuk-hover-colour | variable | settings/colours | 5446 |
| nhsuk-hover-width | variable | settings/globals | 5465 |
| nhsuk-include-default-font-face | variable | settings/globals | 5482 |
| nhsuk-include-dynamic-type | variable | settings/globals | 5502 |
| nhsuk-input-background-colour | variable | settings/colours | 5530 |
| nhsuk-input-border-colour | variable | settings/colours | 5547 |
| nhsuk-link-active-colour | variable | settings/colours | 5566 |
| nhsuk-link-colour | variable | settings/colours | 5583 |
| nhsuk-link-hover-colour | variable | settings/colours | 5604 |
| nhsuk-link-visited-colour | variable | settings/colours | 5621 |
| nhsuk-login-button-active-colour | variable | settings/colours | 5638 |
| nhsuk-login-button-colour | variable | settings/colours | 5655 |
| nhsuk-login-button-hover-colour | variable | settings/colours | 5672 |
| nhsuk-login-button-shadow-colour | variable | settings/colours | 5689 |
| nhsuk-page-width | variable | settings/globals | 5706 |
| nhsuk-panel-border-width | variable | components/panel | 5723 |
| nhsuk-print-text-colour | variable | settings/colours | 5747 |
| nhsuk-reverse-button-active-colour | variable | settings/colours | 5772 |
| nhsuk-reverse-button-colour | variable | settings/colours | 5789 |
| nhsuk-reverse-button-hover-colour | variable | settings/colours | 5806 |
| nhsuk-reverse-button-shadow-colour | variable | settings/colours | 5823 |
| nhsuk-reverse-button-text-colour | variable | settings/colours | 5840 |
| nhsuk-reverse-text-colour | variable | settings/colours | 5857 |
| nhsuk-root-font-size | variable | settings/globals | 5878 |
| nhsuk-secondary-border-colour | variable | settings/colours | 5910 |
| nhsuk-secondary-button-active-colour | variable | settings/colours | 5927 |
| nhsuk-secondary-button-border-colour | variable | settings/colours | 5944 |
| nhsuk-secondary-button-colour | variable | settings/colours | 5961 |
| nhsuk-secondary-button-hover-colour | variable | settings/colours | 5978 |
| nhsuk-secondary-button-shadow-colour | variable | settings/colours | 5995 |
| nhsuk-secondary-button-solid-background-colour | variable | settings/colours | 6012 |
| nhsuk-secondary-button-text-colour | variable | settings/colours | 6029 |
| nhsuk-secondary-text-colour | variable | settings/colours | 6046 |
| nhsuk-show-breakpoints | variable | settings/layout | 6065 |
| nhsuk-spacing-points | variable | settings/spacing | 6084 |
| nhsuk-spacing-responsive-scale | variable | settings/spacing | 6122 |
| nhsuk-success-colour | variable | settings/colours | 6200 |
| nhsuk-suppressed-warnings | variable | settings/warnings | 6226 |
| nhsuk-template-background-colour | variable | settings/colours | 6274 |
| nhsuk-text-colour | variable | settings/colours | 6294 |
| nhsuk-typography-scale | variable | settings/typography | 6315 |
| nhsuk-warning-button-active-colour | variable | settings/colours | 6468 |
| nhsuk-warning-button-colour | variable | settings/colours | 6485 |
| nhsuk-warning-button-hover-colour | variable | settings/colours | 6502 |
| nhsuk-warning-button-shadow-colour | variable | settings/colours | 6519 |


## Functions

### _map-sort-by-value

- Type: function
- Access: private
- Group: none
- File: core/vendor/sass-mq.scss (L232-L255)

Sort a map by values (works with numbers only)

#### Implementation

```scss
$map-sorted: ();
  $map-keys: map.keys($map);
  $map-values: map.values($map);
  $map-values-sorted: _quick-sort($map-values);

  // Reorder key/value pairs based on key values
  @each $value in $map-values-sorted {
    $index: index($map-values, $value);
    $key: list.nth($map-keys, $index);
    $map-sorted: map.merge(
      $map-sorted,
      (
        $key: $value
      )
    );

    // Unset the value in $map-values to prevent the loop
    // from finding the same index twice
    $map-values: list.set-nth($map-values, $index, 0);
  }

  @return $map-sorted;
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| map | Map | No | - | Map to sort |

#### Returns

- Type: Map
- Description: Map sorted by value

#### Requires

- function: _quick-sort

#### Used By

- mixin: add-breakpoint

---

### _nhsuk-equilateral-height

- Type: function
- Access: private
- Group: tools
- File: core/tools/_shape-arrow.scss (L22-L26)

Calculate the height of an equilateral triangle
Multiplying half the length of the base of an equilateral triangle by the
square root of three gives us its height. We use 1.732 as an approximation.

#### Implementation

```scss
$square-root-of-three: 1.732;

  @return math.div($base, 2) * $square-root-of-three;
```

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

### _quick-sort

- Type: function
- Access: private
- Group: none
- File: core/vendor/sass-mq.scss (L203-L225)

Quick sort

#### Implementation

```scss
$less: ();
  $equal: ();
  $large: ();

  @if length($list) > 1 {
    $seed: list.nth($list, math.ceil(math.div(length($list), 2)));

    @each $item in $list {
      @if ($item == $seed) {
        $equal: list.append($equal, $item);
      } @else if ($item < $seed) {
        $less: list.append($less, $item);
      } @else if ($item > $seed) {
        $large: list.append($large, $item);
      }
    }

    @return join(join(_quick-sort($less), $equal), _quick-sort($large));
  }

  @return $list;
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| list | List | No | - | List to sort |

#### Returns

- Type: List
- Description: Sorted List

#### Used By

- function: _map-sort-by-value

---

### _should-warn

- Type: function
- Access: private
- Group: settings/warnings
- File: core/settings/_warnings.scss (L71-L73)

Check whether a key is present in the suppressed warnings list.

#### Implementation

```scss
@return list.index($nhsuk-suppressed-warnings, $key) == null;
```

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

#### Implementation

```scss
@return $message + " To silence this warning, update $nhsuk-suppressed-warnings " + 'with key: "#{$key}"';
```

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

### get-breakpoint-width

- Type: function
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L84-L91)

Get a breakpoint's width

#### Implementation

```scss
@if map.has-key($breakpoints, $name) {
    @return map.get($breakpoints, $name);
  } @else {
    @warn "Breakpoint #{$name} wasn't found in $breakpoints.";
    @return null;
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| name | String | No | - | Name of the breakpoint. One of $mq-breakpoints |

#### Returns

- Type: Number
- Description: Value in pixels

#### Requires

- variable: mq-breakpoints

#### Used By

- mixin: mq
- mixin: show-breakpoints

#### Examples

```scss
$tablet-width: get-breakpoint-width(tablet);
@media (min-width: get-breakpoint-width(tablet)) {}
```

---

### nhsuk-chevron-size

- Type: function
- Access: public
- Group: tools
- File: core/tools/_functions.scss (L66-L79)

Get the size (△↕) of chevron, from base to tip, given a certain font size

#### Implementation

```scss
@if math.is-unitless($font-size) {
    $font-size: $font-size * 1px;
  }

  // Get unitless chevron border width
  $border: math.div($nhsuk-chevron-border, 1px);

  // Get unitless length of one side of the chevron, minus the border
  $box-size: math.div($font-size, 2px) - $border;

  // Calculate width (△↕) of the chevron, from base to tip
  @return math.sqrt(math.pow($box-size, 2) + math.pow($box-size, 2)) * 0.5;
```

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

#### Implementation

```scss
@if meta.type-of($colour) == "color" {
    $colour: string.quote("#{$colour}");
  }

  @if not map.has-key($nhsuk-colours, $colour) {
    @error "Unknown colour `#{$colour}`";
  }

  @return map.get($nhsuk-colours, $colour);
```

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

#### Implementation

```scss
@if meta.type-of($colour) == "string" {
    $colour: nhsuk-colour($colour);
  }

  $alpha: color.alpha($colour);
  $parts: ();

  // Maintain compatibility with Sass < v1.79.0 where colour space functions
  // are unavailable and RGB channels are automatically rounded to integers
  // https://github.com/sass/dart-sass/blob/1.79.0/CHANGELOG.md
  @if not meta.function-exists("channel", "color") {
    $parts: (
      "red": color.red($colour),
      "green": color.green($colour),
      "blue": color.blue($colour),
      "alpha": $alpha
    );
  } @else {
    $colour: color.to-space($colour, rgb);
    $alpha: color.channel($colour, "alpha");

    $parts: (
      "red": math.round(color.channel($colour, "red")),
      "green": math.round(color.channel($colour, "green")),
      "blue": math.round(color.channel($colour, "blue")),
      "alpha": $alpha
    );
  }

  @return color.change($colour, $parts...);
```

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

---

### nhsuk-em

- Type: function
- Access: public
- Group: tools
- File: core/tools/_functions.scss (L21-L35)

Convert pixels to em

#### Implementation

```scss
@if math.is-unitless($value) {
    $value: $value * 1px;
  }

  @if math.is-unitless($context-font-size) {
    $context-font-size: $context-font-size * 1px;
  }

  @if math.compatible($value, 1rem) {
    $value: math.div($value, 1rem) * $nhsuk-root-font-size;
  }

  @return math.div($value, $context-font-size) * 1em;
```

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
- mixin: nhsuk-shape-chevron
- mixin: nhsuk-shape-chevron

#### Examples

```scss
nhsuk-em(20px, $nhsuk-root-font-size);
```

---

### nhsuk-grid-width

- Type: function
- Access: public
- Group: tools
- File: core/tools/_grid.scss (L20-L26)

Grid width percentage

#### Implementation

```scss
@if map.has-key($nhsuk-grid-widths, $key) {
    @return map.get($nhsuk-grid-widths, $key);
  }

  @error "Unknown grid width `#{$key}`";
```

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

### nhsuk-line-height

- Type: function
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L107-L127)

Line height

Convert line-heights specified in pixels into a relative value, unless
they are already unit-less (and thus already treated as relative values),
in rems, or the units do not match the units used for the font size.

#### Implementation

```scss
@if not math.is-unitless($line-height) {
    @if math.compatible($line-height, 1rem) and math.compatible($font-size, 1px) {
      $line-height: math.div($line-height, 1rem) * $nhsuk-root-font-size;

      @if math.is-unitless($font-size) {
        $font-size: $font-size * 1px;
      }
    }

    @if math.compatible($line-height, 1px) and math.compatible($font-size, 1rem) {
      $font-size: math.div($font-size, 1rem) * $nhsuk-root-font-size;
    }

    @if math.unit($line-height) == math.unit($font-size) {
      $line-height: math.div($line-height, $font-size);
    }
  }

  @return $line-height;
```

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

#### Implementation

```scss
@if math.is-unitless($value) {
    $value: $value * 1px;
  }

  @if math.compatible($value, 1rem) {
    @return $value;
  }

  @return math.div($value, $nhsuk-root-font-size) * 1rem;
```

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

#### Implementation

```scss
// Ensure the output is a hex string so that Safari <12 can render the colour
  // without issues from float values in `rgb()`
  @return nhsuk-colour-compatible(color.mix(black, $colour, $percentage));
```

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

#### Implementation

```scss
$actual-input-type: meta.type-of($spacing-point);
  @if $actual-input-type != "number" {
    @error "Expected a number (integer), but got a "
      + "#{$actual-input-type}.";
  }

  $is-negative: false;
  @if $spacing-point < 0 {
    $is-negative: true;
    $spacing-point: math.abs($spacing-point);
  }

  @if not map.has-key($nhsuk-spacing-points, $spacing-point) {
    @error "Unknown spacing variable `#{$spacing-point}`. Make sure you are using a point from the spacing scale in `_settings/spacing.scss`.";
  }

  $value: map.get($nhsuk-spacing-points, $spacing-point);

  @if $is-negative {
    @return $value * -1;
  }

  @return $value;
```

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
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: nhsuk-heading-label
- mixin: _nhsuk-generate-static-spacing-overrides
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

#### Implementation

```scss
// Ensure the output is a hex string so that Safari <12 can render the colour
  // without issues from float values in `rgb()`
  @return nhsuk-colour-compatible(color.mix(white, $colour, $percentage));
```

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

### px2em

- Type: function
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L61-L71)

Convert pixels to ems

#### Implementation

```scss
@if math.is-unitless($px) {
    @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels.";
    @return px2em($px * 1px);
  }
  // if $px is compatible with em units, then return value unchanged
  @if math.compatible($px, 1em) {
    @return $px;
  }
  @return math.div($px, 16px) * 1em;
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| px | Number | No | - | value to convert |

#### Returns

- Number

#### Used By

- mixin: mq
- mixin: show-breakpoints

#### Examples

```scss
$font-size-in-ems: px2em(16px);
p { font-size: px2em(16px); }
```

---

## Mixins

### _header-link-style

- Type: mixin
- Access: private
- Group: components/header
- File: components/header/_index.scss (L45-L70)

Header link styling

#### Implementation

```scss
& {
    color: $link-colour;
  }

  @include nhsuk-link-style-visited($link-colour);
  @include nhsuk-link-style-hover($link-hover-colour);
  @include nhsuk-link-style-active($link-active-colour);
  @include nhsuk-link-style-focus;

  &:focus,
  &:focus:visited {
    color: $nhsuk-focus-text-colour;
    box-shadow: inset 0 ($nhsuk-focus-width * -1) $nhsuk-focus-text-colour;
  }

  @include nhsuk-print-colour($print-colour: inherit) {
    &::after {
      content: "";
    }
  }
```

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

#### Implementation

```scss
// For each point in the spacing scale (defined in settings), create an
  // override that affects all directions...
  @each $scale-point, $scale-map in $nhsuk-spacing-responsive-scale {
    .nhsuk-u-#{$property}-#{$scale-point} {
      @include nhsuk-responsive-spacing($scale-point, $property, "all", true);
    }

    // ... and then an override for each individual direction
    @each $direction in $_spacing-directions {
      .nhsuk-u-#{$property}-#{$direction}-#{$scale-point} {
        @include nhsuk-responsive-spacing($scale-point, $property, $direction, true);
      }
    }
  }
```

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

#### Implementation

```scss
@each $spacing-point in map.keys($nhsuk-spacing-points) {
    .nhsuk-u-static-#{$property}-#{$spacing-point} {
      #{$property}: nhsuk-spacing($spacing-point) !important;
    }

    @each $direction in $_spacing-directions {
      .nhsuk-u-static-#{$property}-#{$direction}-#{$spacing-point} {
        #{$property}-#{$direction}: nhsuk-spacing($spacing-point) !important;
      }
    }
  }
```

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

#### Implementation

```scss
$properties: (
    "position": absolute,

    "width": 1px,
    "height": 1px,

    // If margin is set to a negative value it can cause text to be announced in
    // the wrong order in VoiceOver for OSX
    "margin": 0,
    "padding": 0,

    "overflow": hidden,

    // `clip` is needed for IE11 support
    "clip": rect(0 0 0 0),
    "clip-path": inset(50%),
    "border": 0,

    // For long content, line feeds are not interpreted as spaces and small width
    // causes content to wrap 1 word per line:
    // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
    "white-space": nowrap
  );

  // Workaround to avoid deprecated `if()` function
  @each $property, $value in $properties {
    @if $important == true {
      #{$property}: $value !important;
    } @else {
      #{$property}: $value;
    }
  }

  // Prevent users from selecting or copying visually-hidden text. This prevents
  // a user unintentionally copying more text than they intended and needing to
  // manually trim it down again.
  user-select: none;
```

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

### add-breakpoint

- Type: mixin
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L267-L273)

Add a breakpoint

#### Implementation

```scss
$new-breakpoint: (
    $name: $width
  );
  $mq-breakpoints: map.merge($mq-breakpoints, $new-breakpoint) !global;
  $mq-breakpoints: _map-sort-by-value($mq-breakpoints) !global;
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| name | String | No | - | Name of the breakpoint |
| width | Number | No | - | Width of the breakpoint |

#### Requires

- function: _map-sort-by-value
- variable: mq-breakpoints

#### Examples

```scss
@include add-breakpoint(tvscreen, 1920px);
@include mq(tvscreen) {}
```

---

### care-card

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L416-L419)

Care card mixin, used for creating
different coloured care cards (deprecated)

#### Implementation

```scss
@include nhsuk-warning("care-card", "care-card is deprecated. Use nhsuk-care-card instead.");
  @include nhsuk-care-card($args...);
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-care-card

---

### clearfix

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L34-L37)

Clearfix mixin (deprecated)

#### Implementation

```scss
@include nhsuk-warning("clearfix", "clearfix is deprecated. Use nhsuk-clearfix instead.");
  @include nhsuk-clearfix;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-clearfix

---

### flex

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L497-L500)

#### Implementation

```scss
@include nhsuk-warning("flex", "flex is deprecated. Use nhsuk-flex instead.");
  @include nhsuk-flex;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-flex

---

### flex-item

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L521-L524)

#### Implementation

```scss
@include nhsuk-warning("flex-item", "flex-item is deprecated. Use nhsuk-flex-item instead.");
  @include nhsuk-flex-item;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-flex-item

---

### govuk-media-query

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L70-L75)

Media query (deprecated)

#### Implementation

```scss
@include nhsuk-warning("govuk-media-query", "govuk-media-query is deprecated. Use nhsuk-media-query instead.");
  @include nhsuk-media-query($args...) {
    @content;
  }
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-media-query

---

### heading-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L381-L384)

Heading label mixin, adds a tab heading to
warning callout, do and don't lists and panel (deprecated)

#### Implementation

```scss
@include nhsuk-warning("heading-label", "heading-label is deprecated. Use nhsuk-heading-label instead.");
  @include nhsuk-heading-label($args...);
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-heading-label

---

### mq

- Type: mixin
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L142-L195)

Media Query mixin

#### Implementation

```scss
$min-width: 0;
  $max-width: 0;
  $media-query: "";

  @if not $silence-warning {
    @include nhsuk-warning("mq", "mq is deprecated. Use nhsuk-media-query instead.");
  }

  // From: this breakpoint (inclusive)
  @if $from {
    @if meta.type-of($from) == number {
      $min-width: px2em($from);
    } @else {
      $min-width: px2em(get-breakpoint-width($from, $breakpoints));
    }
  }

  // Until: that breakpoint (exclusive)
  @if $until {
    @if meta.type-of($until) == number {
      $max-width: px2em($until);
    } @else {
      $max-width: px2em(get-breakpoint-width($until, $breakpoints)) - 0.01em;
    }
  }

  @if $min-width != 0 {
    $media-query: "#{$media-query} and (min-width: #{$min-width})";
  }
  @if $max-width != 0 {
    $media-query: "#{$media-query} and (max-width: #{$max-width})";
  }
  @if $and {
    $media-query: "#{$media-query} and #{$and}";
  }

  // Remove unnecessary media query prefix 'all and '
  @if ($media-type == "all" and $media-query != "") {
    $media-type: "";
    $media-query: string.slice(string.unquote($media-query), 6);
  }

  @media #{$media-type + $media-query} {
    @content;
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| from | String \| Boolean | No | false | One of $mq-breakpoints |
| until | String \| Boolean | No | false | One of $mq-breakpoints |
| and | String \| Boolean | No | false | Additional media query parameters |
| media-type | String | No | $mq-media-type | Media type: screen, print… |
| silence-warning | Boolean | No | false | Whether to silence deprecation
warning to use nhsuk-media-query instead |

#### Requires

- mixin: nhsuk-warning
- variable: mq-media-type
- variable: mq-breakpoints
- function: px2em
- function: get-breakpoint-width

#### Links

- [Full documentation and examples](https://github.com/sass-mq/sass-mq#responsive-mode-on-default)

#### Used By

- mixin: nhsuk-media-query
- mixin: show-breakpoints

#### Examples

```scss
@use 'path/to/mq' as *;
.element {
  @include mq($from: mobile) {
    color: red;
  }
  @include mq($until: tablet) {
    color: blue;
  }
  @include mq(mobile, tablet) {
    color: green;
  }
  @include mq($from: tablet, $and: '(orientation: landscape)') {
    color: teal;
  }
  @include mq(950px) {
    color: hotpink;
  }
  @include mq(tablet, $media-type: screen) {
    color: hotpink;
  }
  // Advanced use:
  $my-breakpoints: (L: 900px, XL: 1200px);
  @include mq(L, $breakpoints: $my-breakpoints) {
    color: hotpink;
  }
}
```

---

### nhsuk-button-style

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_buttons.scss (L20-L83)

Button styling with colour overrides

#### Implementation

```scss
background-color: $button-colour;
  box-shadow: 0 $nhsuk-button-shadow-size 0 $button-shadow-colour;

  &,
  &:visited,
  &:hover,
  &:hover:visited,
  &:active,
  &:active:visited {
    color: $button-text-colour;
  }

  &:hover {
    background-color: $button-hover-colour;
  }

  &:active,
  &:active:focus {
    background-color: $button-active-colour;
  }

  // Handle shadow on both the button and the pseudo element. The button shadow
  // remains in place to prevent any pixel gaps due to browser rounding
  @if $button-border-colour {
    &,
    &::after {
      box-shadow: 0 $nhsuk-button-shadow-size 0 $button-shadow-colour;
    }

    &:active,
    &:active:focus {
      border-color: $button-border-colour;
    }

    // Set border on click area for default and hover states which allows the
    // border to render underneath the shadow and hide pixel artifacts, but
    // ensuring the active "pressed" and focus states have priority
    &:not(:focus):not(:active)::before {
      border-color: $button-border-colour;
    }

    // Inset the pseudo element shadow away from the edges, to restore lost
    // border radius (and its shadow) previously hidden by the 2px border
    &:not(:focus)::after {
      right: 0;
      left: 0;
      border-radius: nhsuk-px-to-rem(math.div($nhsuk-button-border-radius, 2));
    }

    // Remove the pseudo element shadow when focused or pressed
    &:focus::after,
    &:active::after {
      box-shadow: none;
    }
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| button-colour | Colour | No | $nhsuk-button-colour | Button background colour |
| button-hover-colour | Colour | No | - | [$nhsuk-button-hover-colour - Button hover background colour |
| button-text-colour | Colour | No | $nhsuk-button-text-colour | Button text colour |
| button-shadow-colour | Colour | No | $nhsuk-button-shadow-colour | Button shadow colour |
| button-border-colour | Colour | No | - | Button border colour (optional, e.g. secondary button) |

#### Requires

- function: nhsuk-px-to-rem
- variable: nhsuk-button-shadow-size
- variable: nhsuk-button-border-radius

---

### nhsuk-care-card

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L397-L408)

Care card mixin, used for creating
different coloured care cards

#### Implementation

```scss
.nhsuk-card__heading-container,
  .nhsuk-card--care__heading-container {
    color: $heading-text-colour;
    background-color: $heading-background-colour;
  }

  @include nhsuk-print-colour {
    border: $print-border-size solid $nhsuk-print-text-colour;
    page-break-inside: avoid;
  }
```

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

#### Implementation

```scss
&::after {
    content: "";
    display: block;
    clear: both;
  }
```

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

#### Implementation

```scss
// If the mixin is not in the list of modules already exported...
  @if not list.index($imported-modules, $name) {
    // ... then add it to the list
    $imported-modules: list.append($imported-modules, $name) !global;
    // ... and output the CSS for that module
    @content;
  }
  // The next time exports is called for the module of the same name, it will be
  // found in the list and so nothing will be outputted.
```

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
- File: core/tools/_mixins.scss (L487-L490)

Flex mixin

#### Implementation

```scss
display: flex;
  flex-wrap: wrap;
```

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
- File: core/tools/_mixins.scss (L508-L514)

Flex item mixin

#### Implementation

```scss
display: flex;

  @include nhsuk-media-query($until: desktop) {
    flex: 0 0 100%;
  }
```

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
- File: core/tools/_focused.scss (L127-L132)

Focused box

Provides an outline to clearly indicate when the target element is focused.
Unlike nhsuk-focused-text, which only draws an underline below the element,
nhsuk-focused-box draws an outline around all sides of the element.
Best used for non-text content contained within links.

#### Implementation

```scss
outline: $nhsuk-focus-width solid transparent;
  box-shadow:
    0 0 0 4px $nhsuk-focus-colour,
    0 0 0 8px $nhsuk-focus-text-colour;
```

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
- File: core/tools/_focused.scss (L106-L118)

Focused button

Provides an additional outline and background to clearly indicate when
the target element has focus. Used for buttons.

#### Implementation

```scss
outline: $nhsuk-focus-width solid transparent;
  outline-offset: $nhsuk-focus-width;
  color: $nhsuk-focus-text-colour;
  background-color: $nhsuk-focus-colour;
  box-shadow: 0 $nhsuk-focus-width 0 0 $nhsuk-focus-text-colour;

  &,
  .nhsuk-icon {
    color: $nhsuk-focus-text-colour;
    fill: $nhsuk-focus-text-colour;
  }
```

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
- File: core/tools/_focused.scss (L83-L99)

Focused checkbox input (form element)

Provides an additional outline and border to clearly indicate when
the target element has focus. Used by checkbox.

#### Implementation

```scss
border: $nhsuk-focus-width solid $nhsuk-focus-text-colour;

  // When colours are overridden, the yellow box-shadow becomes invisible
  // which means the focus state is less obvious. By adding a transparent
  // outline, which becomes solid (text-coloured) in that context, we ensure
  // the focus remains clearly visible.
  outline: $nhsuk-focus-width solid transparent;
  outline-offset: 1px;
  box-shadow: 0 0 0 $nhsuk-focus-width $nhsuk-focus-colour;

  // When in an explicit forced-color mode, we can use the Highlight system
  // color for the outline to better match focus states of native controls
  @media screen and (forced-colors: active), (-ms-high-contrast: active) {
    outline-color: Highlight;
  }
```

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
- File: core/tools/_focused.scss (L42-L51)

Focused input (form elements)

Provides an additional outline and border to clearly indicate when
the target element has focus. Used for interactive input-based elements such
as text inputs.

#### Implementation

```scss
border: $nhsuk-border-width-form-element solid $nhsuk-focus-text-colour;
  outline: $nhsuk-focus-width solid $nhsuk-focus-colour;
  // Ensure outline appears outside of the element
  outline-offset: 0;
  // Double the border by adding its width again. Use `box-shadow` to do
  // this instead of changing `border-width` (which changes element size)
  // and since `outline` is already used for the yellow focus state.
  box-shadow: inset 0 0 0 $nhsuk-border-width-form-element $nhsuk-focus-text-colour;
```

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
- File: core/tools/_focused.scss (L60-L76)

Focused radio input (form element)

Provides an additional outline and border to clearly indicate when
the target element has focus. Used by radios.

#### Implementation

```scss
border: $nhsuk-focus-width solid $nhsuk-focus-text-colour;

  // When colours are overridden, the yellow box-shadow becomes invisible
  // which means the focus state is less obvious. By adding a transparent
  // outline, which becomes solid (text-coloured) in that context, we ensure
  // the focus remains clearly visible.
  outline: $nhsuk-focus-width solid transparent;
  outline-offset: 1px;
  box-shadow: 0 0 0 $focus-width $nhsuk-focus-colour;

  // When in an explicit forced-color mode, we can use the Highlight system
  // color for the outline to better match focus states of native controls
  @media screen and (forced-colors: active), (-ms-high-contrast: active) {
    outline-color: Highlight;
  }
```

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
- File: core/tools/_focused.scss (L15-L34)

Focused text

Provides an outline to clearly indicate when the target element is focused.
Used for interactive text-based elements.

#### Implementation

```scss
// When colours are overridden, for example when users have a dark mode,
  // backgrounds and box-shadows disappear, so we need to ensure there's a
  // transparent outline which will be set to a visible colour.
  outline: $nhsuk-focus-width solid transparent;
  background-color: $nhsuk-focus-colour;
  box-shadow:
    0 -2px $nhsuk-focus-colour,
    0 $nhsuk-focus-width $nhsuk-focus-text-colour;

  // When link is focussed, hide the default underline since the
  // box shadow adds the "underline"
  text-decoration: none;

  &,
  .nhsuk-icon {
    color: $nhsuk-focus-text-colour;
    fill: $nhsuk-focus-text-colour;
  }
```

#### Requires

- variable: nhsuk-focus-width
- variable: nhsuk-focus-colour
- variable: nhsuk-focus-text-colour

#### Links

- [https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/)

#### Used By

- mixin: nhsuk-link-style-focus

---

### nhsuk-font

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L291-L303)

Font helper

#### Implementation

```scss
& {
    @if $weight == normal {
      @include nhsuk-typography-weight-normal;
    } @else if $weight == bold {
      @include nhsuk-typography-weight-bold;
    }
  }

  @if $size {
    @include nhsuk-font-size($size, $line-height);
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| size | Number | No | - | Size of the font as it would appear on desktop -
  uses the responsive font size map |
| weight | String | No | normal | Weight: \`bold\` or \`normal\` |
| line-height | Number | No | false | Line-height, if overriding the default |

#### Requires

- mixin: nhsuk-typography-weight-normal
- mixin: nhsuk-typography-weight-bold
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

### nhsuk-font-dynamic-type

- Type: mixin
- Access: public
- Group: generic
- File: core/generic/_font-face.scss (L48-L59)

Font 'Dynamic Type' support

On Apple devices, uses the -apple-system-body font to enable system-level
Dynamic Type for accessibility but prevents the system body font-family.

#### Implementation

```scss
@at-root {
    html {
      font-size: math.percentage(math.div($nhsuk-root-font-size, 16px));

      @supports (font: -apple-system-body) and (-webkit-touch-callout: default) {
        // stylelint-disable-next-line font-family-no-missing-generic-family-keyword
        font: -apple-system-body;
      }
    }
  }
```

#### Requires

- variable: nhsuk-root-font-size

---

### nhsuk-font-size

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L165-L250)

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

#### Implementation

```scss
// Flag font sizes that start with underscores so we can suppress warnings on
  // deprecated sizes used internally, for example `nhsuk-font($size: "_24")`
  $size-internal-use-only: string.slice(#{$size}, 1, 1) == "_";

  // Remove underscore from font sizes flagged for internal use
  @if $size-internal-use-only {
    $size: string.slice(#{$size}, 2);
  }

  // Check for a font map exactly matching the given size
  $font-map: map.get($nhsuk-typography-scale, $size);

  // No match? Try with string type (e.g. $size: "16" not 16)
  @if not $font-map {
    @each $font-size in map.keys($nhsuk-typography-scale) {
      @if not $font-map and "#{$font-size}" == "#{$size}" {
        $font-map: map.get($nhsuk-typography-scale, $font-size);
      }
    }
  }

  // Still no match? Throw error
  @if not $font-map {
    @error "Unknown font size `#{$size}` - expected a point from the typography scale.";
  }

  // Check for a deprecation within the typography scale
  $deprecation: map.get($font-map, "deprecation");

  @if $deprecation {
    // Warn on deprecated font sizes unless flagged for internal use
    @if not $size-internal-use-only {
      @include nhsuk-warning(map.get($deprecation, "key"), map.get($deprecation, "message"));
    }

    // remove the deprecation map keys so they do not break the breakpoint loop
    $font-map: map.remove($font-map, "deprecation");
  }

  @each $breakpoint, $breakpoint-map in $font-map {
    $font-size: map.get($breakpoint-map, "font-size");
    $font-size-rem: nhsuk-px-to-rem($font-size);

    // $calculated-line-height is a separate variable from $line-height,
    // as otherwise the value would get redefined with each loop and
    // eventually break nhsuk-line-height.
    $calculated-line-height: $line-height;
    @if $line-height == false {
      $calculated-line-height: map.get($breakpoint-map, "line-height");
    }

    // We continue to call the param $line-height to stay consistent with the
    // naming with nhsuk-font.
    $calculated-line-height: nhsuk-line-height(
      $line-height: $calculated-line-height,
      $font-size: $font-size
    );

    // Mark rules as !important if $important is true - this will result in
    // these variables becoming strings, so this needs to happen *after* they
    // are used in calculations
    @if $important == true {
      $font-size: $font-size !important;
      $font-size-rem: $font-size-rem !important;
      $calculated-line-height: $calculated-line-height !important;
    }

    & {
      @if not $breakpoint {
        font-size: $font-size-rem;
        line-height: $calculated-line-height;
      } @else if $breakpoint == "print" {
        @include nhsuk-media-query($media-type: print) {
          font-size: $font-size;
          line-height: $calculated-line-height;
        }
      } @else {
        @include nhsuk-media-query($from: $breakpoint) {
          font-size: $font-size-rem;
          line-height: $calculated-line-height;
        }
      }
    }
  }
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

#### Implementation

```scss
box-sizing: border-box;

  @if $at != tablet {
    width: 100%;
  }

  padding: 0 $nhsuk-gutter-half;

  @include nhsuk-media-query($from: $at) {
    width: nhsuk-grid-width($width);
    float: $float;
  }
```

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

#### Implementation

```scss
display: inline-block; // [4]

  position: relative;
  top: nhsuk-spacing(-3); // [6]

  margin: 0;
  margin-bottom: nhsuk-spacing(2);
  margin-left: nhsuk-spacing(-5) - 1px; // [5]
  padding: nhsuk-spacing(2) nhsuk-spacing(5);

  outline: 1px solid transparent; // [2]
  outline-offset: -1px;

  color: $heading-text-colour; // [3]
  background-color: $heading-background-colour; // [1]

  @include nhsuk-font-size(26);

  @include nhsuk-media-query($until: tablet) {
    top: nhsuk-spacing(-2); // [6]
    margin-left: nhsuk-spacing(-4) - 1px; // [5]
    padding: nhsuk-spacing(2) nhsuk-spacing(4);
  }

  @include nhsuk-print-colour {
    top: 0;
    background: none;
  }
```

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
- File: core/tools/_links.scss (L219-L232)

Image link styles

Prepares and provides the focus state for links that only contain images
with no accompanying text.

#### Implementation

```scss
// Needed to draw the focus around the entire image
  display: inline-block;

  // Remove extra space at the bottom of the image that's added by line-height
  line-height: 0;

  // Don't render an underline
  text-decoration: none;

  &:focus {
    @include nhsuk-focused-box;
  }
```

#### Requires

- mixin: nhsuk-focused-box

---

### nhsuk-link-style

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L19-L38)

Link styling with colour overrides

#### Implementation

```scss
& {
    color: $link-colour;
    text-decoration: underline;
  }

  .nhsuk-icon {
    fill: $link-colour;
  }

  @include nhsuk-link-style-visited($link-visited-colour);
  @include nhsuk-link-style-hover($link-hover-colour);
  @include nhsuk-link-style-active($link-active-colour);
  @include nhsuk-link-style-focus;
```

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
- mixin: nhsuk-link-style-success
- mixin: nhsuk-link-style-text

---

### nhsuk-link-style-active

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L125-L134)

Default link active only styling

#### Implementation

```scss
&:active,
  &:active:visited {
    color: $link-active-colour;

    .nhsuk-icon {
      fill: $link-active-colour;
    }
  }
```

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
- File: core/tools/_links.scss (L46-L48)

Default link styling

#### Implementation

```scss
@include nhsuk-link-style;
```

#### Requires

- mixin: nhsuk-link-style

#### Examples

```scss
@include nhsuk-link-style-default;
```

---

### nhsuk-link-style-focus

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L106-L115)

Default link focus only styling

#### Implementation

```scss
&:focus,
  &:focus:visited {
    @include nhsuk-focused-text;

    &:hover {
      text-decoration: none;
    }
  }
```

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
- File: core/tools/_links.scss (L88-L98)

Default link hover only styling

#### Implementation

```scss
&:hover,
  &:hover:visited {
    color: $link-hover-colour;
    text-decoration: none;

    .nhsuk-icon {
      fill: $link-hover-colour;
    }
  }
```

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

### nhsuk-link-style-no-visited-state

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L179-L181)

No visited state link mixin

Used in cases where it is not helpful to distinguish between visited and
non-visited links.

For example, navigation links to pages with dynamic content like admin
dashboards. The content on the page is changing all the time, so the fact
that you’ve visited it before is not important.

If you use this mixin in a component you must also include the
nhsuk-link-style-default mixin in order to get the focus state.

#### Implementation

```scss
@include nhsuk-link-style-visited($link-visited-colour: $nhsuk-link-colour);
```

#### Requires

- mixin: nhsuk-link-style-visited
- variable: nhsuk-link-colour

#### Examples

```scss
.nhsuk-component__link {
  @include nhsuk-link-style-default;
  @include nhsuk-link-style-no-visited-state;
}
```

---

### nhsuk-link-style-success

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L151-L158)

Success link styles

Makes links use the success colour. The link will darken if it's active or a
user hovers their cursor over it.

If you use this mixin in a component you must also include the
nhsuk-link-style-default mixin in order to get the focus state.

#### Implementation

```scss
@include nhsuk-link-style(
    $link-colour: $nhsuk-success-colour,
    $link-visited-colour: $nhsuk-success-colour,
    $link-hover-colour: nhsuk-shade($nhsuk-success-colour, 20%),
    $link-active-colour: nhsuk-shade($nhsuk-success-colour, 50%)
  );
```

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
- File: core/tools/_links.scss (L196-L212)

Text link styles

Makes links use the primary text colour, in all states. Use this mixin for
navigation components, such as breadcrumbs or the back link.

#### Implementation

```scss
@include nhsuk-link-style(
    $link-colour: $override-colour,
    $link-visited-colour: $override-colour,
    $link-hover-colour: $override-colour,
    $link-active-colour: $override-colour
  );

  // Force a colour change on hover to work around a bug in Safari
  // Also allows for ':focus' companion classes from postcss-pseudo-classes
  // which the plugin unfortunately doesn't handle automatically.
  // https://bugs.webkit.org/show_bug.cgi?id=224483
  // stylelint-disable-next-line selector-class-pattern
  &:not(:focus):not(.\:focus):hover {
    color: rgba($override-colour, 0.99);
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| override-colour | Colour | No | $nhsuk-text-colour | Link colour for all states |

#### Requires

- mixin: nhsuk-link-style

#### Used By

- mixin: nhsuk-link-style-white

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
- File: core/tools/_links.scss (L70-L78)

Default link visited only styling

#### Implementation

```scss
&:visited {
    color: $link-visited-colour;

    .nhsuk-icon {
      fill: $link-visited-colour;
    }
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| link-visited-colour | Colour | No | $nhsuk-link-visited-colour | Link visited colour |

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-link-style
- mixin: nhsuk-link-style-no-visited-state

#### Examples

```scss
@include nhsuk-link-style-visited;
```

---

### nhsuk-link-style-white

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_links.scss (L58-L60)

White link styling, used in hero
component, and in the `.nhsuk-link--reverse`
modifier class.

#### Implementation

```scss
@include nhsuk-link-style-text($override-colour: $nhsuk-reverse-text-colour);
```

#### Requires

- mixin: nhsuk-link-style-text
- variable: nhsuk-reverse-text-colour

#### Examples

```scss
@include nhsuk-link-style-white;
```

---

### nhsuk-logo-size

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L558-L561)

NHS logo size helper

Saves duplicating the code for when using the logo as a link.
Used in the header and footer.

#### Implementation

```scss
width: 100px;
  height: 40px;
```

---

### nhsuk-media-query

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_sass-mq.scss (L59-L63)

Media query

This is a currently a wrapper for sass-mq - abstracted so that we can
replace it in the future if we so choose.

Due to Sass deprecated 'misplaced-rest' named argument warnings, all
arguments must be passed to maintain `nhsuk-media-query(950px)` support.

#### Implementation

```scss
@include mq($from, $until, $and, $media-type, $silence-warning: true) {
    @content;
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| from | String \| Boolean | No | false | One of $nhsuk-breakpoints |
| until | String \| Boolean | No | false | One of $nhsuk-breakpoints |
| and | String \| Boolean | No | false | Additional media query parameters |
| media-type | String | No | all | Media type: screen, print… |

#### Requires

- mixin: mq

#### Links

- [Original code taken from GDS (Government Digital Service)](https://github.com/alphagov/govuk-frontend)

#### Used By

- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-grid-column
- mixin: nhsuk-panel
- mixin: nhsuk-heading-label
- mixin: nhsuk-print-colour
- mixin: nhsuk-print-hide
- mixin: nhsuk-flex-item
- mixin: nhsuk-remove-margin-mobile
- mixin: govuk-media-query
- mixin: nhsuk-responsive-spacing
- mixin: nhsuk-text-colour
- mixin: nhsuk-font-size
- mixin: nhsuk-font-size

#### Examples

```scss
.element {
  @include nhsuk-media-query($from: mobile) {
    color: red;
  }
  @include nhsuk-media-query($until: tablet) {
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
    color: hotpink;
  }
}
```

---

### nhsuk-panel

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L269-L284)

Panel mixin

See components/_panel

#### Implementation

```scss
box-sizing: border-box;
  @if $panel-border-colour {
    border: 1px solid $panel-border-colour;
  }
  color: $panel-text-colour;
  background-color: $panel-background-colour;

  @include nhsuk-top-and-bottom;
  @include nhsuk-responsive-margin(7, "bottom");

  @include nhsuk-media-query($media-type: print) {
    border: 1px solid $nhsuk-print-text-colour;
    page-break-inside: avoid;
  }
```

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
@include nhsuk-panel($nhsuk-brand-colour, $nhsuk-reverse-text-colour, $nhsuk-secondary-border-colour);
```

---

### nhsuk-panel-with-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L307-L314)

Panel with label mixin, inherits panel styling
and removes padding top for the label positioning

#### Implementation

```scss
padding-top: 0 !important;
  border: 1px solid $panel-border-colour;

  @include nhsuk-panel($panel-background-colour, $panel-text-colour, $panel-border-colour);
  @include nhsuk-responsive-margin(7, "top");
  @include nhsuk-responsive-padding(5);
```

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
@include nhsuk-panel-with-label($nhsuk-brand-colour, $nhsuk-reverse-text-colour, $nhsuk-secondary-border-colour);
```

---

### nhsuk-print-color

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L443-L446)

Print colour mixin, sets the text print colour
warning callout, do and don't lists and panels (deprecated)

#### Implementation

```scss
@include nhsuk-warning("color-to-colour", "nhsuk-print-color is deprecated. Use nhsuk-print-colour instead.");
  @include nhsuk-print-colour($args...);
```

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

#### Implementation

```scss
@include nhsuk-media-query($media-type: print) {
    color: $print-colour;
    @content;
  }
```

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
- File: core/tools/_mixins.scss (L465-L469)

Print hide mixin, hides the element from print

#### Implementation

```scss
@include nhsuk-media-query($media-type: print) {
    display: none;
  }
```

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

#### Implementation

```scss
max-width: 44em;
```

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
- File: core/tools/_mixins.scss (L530-L535)

Remove margin mobile mixin

Removes left and right margin at tablet breakpoint

#### Implementation

```scss
@include nhsuk-media-query($until: tablet) {
    margin-right: -$nhsuk-gutter-half;
    margin-left: -$nhsuk-gutter-half;
  }
```

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

#### Implementation

```scss
@include nhsuk-responsive-spacing($responsive-spacing-point, "margin", $direction, $important, $adjustment);
```

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

#### Implementation

```scss
@include nhsuk-responsive-spacing($responsive-spacing-point, "padding", $direction, $important, $adjustment);
```

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

#### Implementation

```scss
$actual-input-type: meta.type-of($responsive-spacing-point);
  @if $actual-input-type != "number" {
    @error "Expected a number (integer), but got a " + "#{$actual-input-type}.";
  }

  @if not map.has-key($nhsuk-spacing-responsive-scale, $responsive-spacing-point) {
    @error "Unknown spacing point `#{$responsive-spacing-point}`. Make sure you are using a point from the "
      + "responsive spacing scale in `_settings/spacing.scss`.";
  }

  $scale-map: map.get($nhsuk-spacing-responsive-scale, $responsive-spacing-point); // [1]
  $actual-map-type: meta.type-of($scale-map);
  @if $actual-map-type != "map" {
    @error "Expected a number (integer), but got a "
      + "#{$actual-map-type}. Make sure you are using a map to set the responsive spacing in `_settings/spacing.scss`)";
  }

  // [2]
  @each $breakpoint, $breakpoint-value in $scale-map {
    @if $adjustment {
      @if not math.compatible($breakpoint-value, $adjustment) {
        $breakpoint-value: calc($breakpoint-value + $adjustment);
      } @else {
        $breakpoint-value: $breakpoint-value + $adjustment;
      }
    }

    @if $important == true {
      $breakpoint-value: $breakpoint-value !important;
    }

    & {
      // [3]
      @if not $breakpoint {
        @if $direction == all {
          #{$property}: $breakpoint-value;
        } @else {
          #{$property}-#{$direction}: $breakpoint-value;
        }
      } @else {
        @include nhsuk-media-query($from: $breakpoint) {
          @if $direction == all {
            #{$property}: $breakpoint-value;
          } @else {
            #{$property}-#{$direction}: $breakpoint-value;
          }
        }
      }
    }
  }
```

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

#### Implementation

```scss
display: $display;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent; // 1

  $base: nhsuk-px-to-rem($base);
  $perpendicular: math.div($base, 2);

  @if not $height {
    $height: _nhsuk-equilateral-height($base);
  }

  @if $direction == "up" {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%); // 3
    border-width: 0 $perpendicular $height;
    border-bottom-color: inherit; // 2
  } @else if $direction == "right" {
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%); // 3
    border-width: $perpendicular 0 $perpendicular $height;
    border-left-color: inherit; // 2
  } @else if $direction == "down" {
    clip-path: polygon(0% 0%, 50% 100%, 100% 0%); // 3
    border-width: $height $perpendicular 0 $perpendicular;
    border-top-color: inherit; // 2
  } @else if $direction == "left" {
    clip-path: polygon(0% 50%, 100% 100%, 100% 0%); // 3
    border-width: $perpendicular $height $perpendicular 0;
    border-right-color: inherit; // 2
  } @else {
    @error "Invalid arrow direction: expected `up`, `right`, `down` or `left`, got `#{$direction}`";
  }
```

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

#### Implementation

```scss
$outline-width: nhsuk-em($nhsuk-chevron-border, $font-size);
  $box-size: nhsuk-em(math.div($font-size, 2), $font-size);
  $size: nhsuk-em(nhsuk-chevron-size($font-size));
  display: $display;

  width: $box-size;
  height: $box-size;

  clip-path: polygon(100% 100%, 100% 0, 0 0);

  border-radius: $outline-width;

  // Safari renders a hairline gap if we use borders, so use an inset outline
  // instead. Because outlines are added to all sides of a box, we hide the
  // outline on the two other two sides using clip-path.
  outline: $outline-width solid currentcolor;
  outline-offset: -$outline-width;

  color: $colour;

  @if $direction == "up" {
    transform: translateY($outline-width) rotate(-45deg);
  } @else if $direction == "right" {
    transform: translateX(-$size + $outline-width) rotate(45deg);
  } @else if $direction == "down" {
    transform: translateY(-$size + $outline-width) rotate(135deg);
  } @else if $direction == "left" {
    transform: translateX($outline-width) rotate(225deg);
  } @else {
    @error "Invalid arrow direction: expected `up`, `right`, `down` or `left`, got `#{$direction}`";
  }

  @supports (outline-width: string.unquote("max(0px)")) {
    // Ensure that the chevron outline never gets smaller than 2px
    outline-width: string.unquote("max(#{$nhsuk-chevron-border}, #{$outline-width})");

    // Ensure that the chevron never gets smaller than 16px
    font-size: string.unquote("max(#{$font-size * 1px}, 1em)");
  }
```

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
- File: core/tools/_typography.scss (L77-L94)

Word break helper

Forcibly breaks long words that lack spaces, such as email addresses,
across multiple lines when they wouldn't otherwise fit.

#### Implementation

```scss
$properties: (
    // IE 11 and Edge 16–17 only support the non-standard `word-wrap` property
    "word-wrap": break-word,

    // All other browsers support `overflow-wrap`
    "overflow-wrap": break-word
  );

  // Workaround to avoid deprecated `if()` function
  @each $property, $value in $properties {
    @if $important == true {
      #{$property}: $value !important;
    } @else {
      #{$property}: $value;
    }
  }
```

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

Text colour (deprecated)

#### Implementation

```scss
@include nhsuk-warning("color-to-colour", "nhsuk-text-color is deprecated. Use nhsuk-text-colour instead.");
  @include nhsuk-text-colour;
```

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

#### Implementation

```scss
color: $nhsuk-text-colour;

  @include nhsuk-media-query($media-type: print) {
    color: $nhsuk-print-text-colour;
  }
```

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

#### Implementation

```scss
& > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
```

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
- File: core/tools/_typography.scss (L267-L273)

Font size and line height helper (deprecated)

#### Implementation

```scss
@include nhsuk-warning(
    "nhsuk-typography-responsive",
    "nhsuk-typography-responsive is deprecated. Use nhsuk-font-size instead."
  );
  @include nhsuk-font-size($size, $override-line-height, $important);
```

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
- File: core/tools/_typography.scss (L61-L67)

Bold font weight

#### Implementation

```scss
@if $important == true {
    font-weight: $nhsuk-font-weight-bold !important;
  } @else {
    font-weight: $nhsuk-font-weight-bold;
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally Used to create override classes. |

#### Requires

- variable: nhsuk-font-weight-bold

#### Used By

- mixin: nhsuk-font

---

### nhsuk-typography-weight-normal

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_typography.scss (L48-L54)

Normal font weight

#### Implementation

```scss
@if $important == true {
    font-weight: $nhsuk-font-weight-normal !important;
  } @else {
    font-weight: $nhsuk-font-weight-normal;
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| important | Boolean | No | false | Whether to mark declarations as
  \`!important\`. Generally Used to create override classes. |

#### Requires

- variable: nhsuk-font-weight-normal

#### Used By

- mixin: nhsuk-font

---

### nhsuk-visually-hidden

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L122-L136)

Hide an element visually, but have it available for screen readers

#### Implementation

```scss
@include _nhsuk-visually-hide-content($important: $important);

  // Absolute positioning has the unintended consequence of removing any
  // whitespace surrounding visually hidden text from the accessibility tree.
  // Insert a space character before and after visually hidden text to separate
  // it from any visible text surrounding it.
  &::before {
    content: "\00a0";
  }

  &::after {
    content: "\00a0";
  }
```

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

#### Implementation

```scss
// IE 11 doesn't support the combined `:not(:active, :focus)` syntax.
  // Also allows for ':focus' companion classes from postcss-pseudo-classes
  // which the plugin unfortunately doesn't handle automatically.
  // stylelint-disable-next-line selector-class-pattern
  &:not(:active):not(:focus):not(.\:focus) {
    @include _nhsuk-visually-hide-content($important: $important);
  }
```

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

#### Implementation

```scss
@if _should-warn($key) {
    @warn _warning-text($key, $message);

    @if $silence-further-warnings {
      $nhsuk-suppressed-warnings: list.append($nhsuk-suppressed-warnings, $key) !global;
    }
  }
```

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

#### Implementation

```scss
// By default, limit the width of the container to the page width
  max-width: $width;

  // On mobile, add half width gutters
  margin-right: $nhsuk-gutter-half;
  margin-left: $nhsuk-gutter-half;

  // Respect 'display cutout' safe area (avoids notches and rounded corners)
  @supports (margin: string.unquote("max(calc(0px))")) {
    $gutter-safe-area-right: calc(#{$nhsuk-gutter-half} + env(safe-area-inset-right));
    $gutter-safe-area-left: calc(#{$nhsuk-gutter-half} + env(safe-area-inset-left));

    // Use max() to pick largest margin, default or with safe area
    // Escaped due to Sass max() vs. CSS native max()
    margin-right: string.unquote("max(#{$nhsuk-gutter-half}, #{$gutter-safe-area-right})");
    margin-left: string.unquote("max(#{$nhsuk-gutter-half}, #{$gutter-safe-area-left})");
  }

  // On desktop, add full width gutters
  @include nhsuk-media-query($from: desktop) {
    margin-right: $nhsuk-gutter;
    margin-left: $nhsuk-gutter;

    // Respect 'display cutout' safe area (avoids notches and rounded corners)
    @supports (margin: string.unquote("max(calc(0px))")) {
      $gutter-safe-area-right: calc(#{$nhsuk-gutter-half} + env(safe-area-inset-right));
      $gutter-safe-area-left: calc(#{$nhsuk-gutter-half} + env(safe-area-inset-left));

      // Use max() to pick largest margin, default or with safe area
      // Escaped due to Sass max() vs. CSS native max()
      margin-right: string.unquote("max(#{$nhsuk-gutter}, #{$gutter-safe-area-right})");
      margin-left: string.unquote("max(#{$nhsuk-gutter}, #{$gutter-safe-area-left})");
    }
  }

  // As soon as the viewport is greater than the width of the page plus the
  // gutters, just centre the content instead of adding gutters.
  @include nhsuk-media-query($and: "(min-width: #{($width + $nhsuk-gutter * 2)})") {
    margin-right: auto;
    margin-left: auto;

    // Since a safe area may have previously been set above,
    // we need to duplicate this margin that centers the page.
    @supports (margin: string.unquote("max(calc(0px))")) {
      margin-right: auto;
      margin-left: auto;
    }
  }
```

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

Panel mixin (deprecated)

#### Implementation

```scss
@include nhsuk-warning("panel", "panel is deprecated. Use nhsuk-panel instead.");
  @include nhsuk-panel($args...);
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-panel

---

### panel-with-label

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L322-L325)

Panel with label mixin, inherits panel styling
and removes padding top for the label positioning (deprecated)

#### Implementation

```scss
@include nhsuk-warning("panel-with-label", "panel-with-label is deprecated. Use nhsuk-panel-with-label instead.");
  @include nhsuk-panel-with-label($args...);
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-panel-with-label

---

### print-color

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L454-L457)

Print colour mixin, sets the text print colour
warning callout, do and don't lists and panels (deprecated)

#### Implementation

```scss
@include nhsuk-warning("print-color", "print-color is deprecated. Use nhsuk-print-colour instead.");
  @include nhsuk-print-colour($args...);
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-print-colour

---

### print-hide

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L476-L479)

Print hide mixin, hides the element from print (deprecated)

#### Implementation

```scss
@include nhsuk-warning("print-hide", "print-hide is deprecated. Use nhsuk-print-hide instead.");
  @include nhsuk-print-hide;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-print-hide

---

### reading-width

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L56-L59)

Reading width mixin, add a maximum width
to large pieces of content (deprecated)

#### Implementation

```scss
@include nhsuk-warning("reading-width", "reading-width is deprecated. Use nhsuk-reading-width instead.");
  @include nhsuk-reading-width;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-reading-width

---

### remove-margin-mobile

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L544-L551)

Remove margin mobile mixin (deprecated)

Removes left and right margin at tablet breakpoint

#### Implementation

```scss
@include nhsuk-warning(
    "remove-margin-mobile",
    "remove-margin-mobile is deprecated. Use nhsuk-remove-margin-mobile instead."
  );

  @include nhsuk-remove-margin-mobile;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-remove-margin-mobile

---

### show-breakpoints

- Type: mixin
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L290-L312)

Show the active breakpoint in the top right corner of the viewport

#### Implementation

```scss
body:before {
    background-color: #fcf8e3;
    border-bottom: 1px solid #fbeed5;
    border-left: 1px solid #fbeed5;
    color: #c09853;
    font: small-caption;
    padding: 3px 6px;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;

    // Loop through the breakpoints that should be shown
    @each $show-breakpoint in $show-breakpoints {
      $width: get-breakpoint-width($show-breakpoint, $breakpoints);
      @include mq($show-breakpoint, $breakpoints: $breakpoints, $silence-warning: true) {
        content: "#{$show-breakpoint} ≥ #{$width} (#{px2em($width)})";
      }
    }
  }
```

#### Parameters

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| show-breakpoints | List | No | $mq-show-breakpoints | List of breakpoints to show in the top right corner |
| breakpoints | Map | No | $mq-breakpoints | Breakpoint names and sizes |

#### Requires

- mixin: mq
- function: get-breakpoint-width
- function: px2em
- variable: mq-breakpoints
- variable: mq-show-breakpoints

#### Links

- [https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint](https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint)

#### Examples

```scss
// Show breakpoints using global settings
@include show-breakpoints;

// Show breakpoints using custom settings
@include show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));
```

---

### top-and-bottom

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L252-L255)

Top and bottom margin mixin, remove
the top and bottom margin spacing (deprecated)

#### Implementation

```scss
@include nhsuk-warning("top-and-bottom", "top-and-bottom is deprecated and will be removed in a future release.");
  @include nhsuk-top-and-bottom;
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-top-and-bottom

---

### visually-hidden

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L144-L146)

Hide an element visually, but have it available for screen readers
(deprecated)

#### Implementation

```scss
@include nhsuk-visually-hidden;
```

#### Requires

- mixin: nhsuk-visually-hidden

---

### visually-hidden-focusable

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L173-L179)

Hide an element visually, but have it available for screen readers whilst
allowing the element to be focused when navigated to via the keyboard (e.g.
for the skip link) (deprecated)

#### Implementation

```scss
@include nhsuk-warning(
    "visually-hidden-focusable",
    "visually-hidden-focusable is deprecated. Use nhsuk-visually-hidden-focusable instead."
  );
  @include nhsuk-visually-hidden-focusable($args...);
```

#### Requires

- mixin: nhsuk-warning
- mixin: nhsuk-visually-hidden-focusable

---

### visually-shown

- Type: mixin
- Access: public
- Group: tools
- File: core/tools/_mixins.scss (L190-L227)

Show an element visually that has previously been hidden by visually-hidden

For differences between mobile and desktop views, use $display to set the CSS display property

#### Implementation

```scss
@include nhsuk-warning(
    "visually-shown",
    "visually-shown is deprecated. Use @media queries to apply `visually-hidden` instead."
  );

  $properties: (
    "position": static,

    "width": auto,
    "height": auto,
    "margin": 0,
    "padding": 0,

    "overflow": visible,

    "clip": auto,
    "clip-path": none,

    "border": none,

    "white-space": normal,
    "user-select": auto
  );

  // Workaround to avoid deprecated `if()` function
  @each $property, $value in $properties {
    @if $important == true {
      #{$property}: $value !important;
    } @else {
      #{$property}: $value;
    }
  }

  @if $display {
    display: $display;
  }
```

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
- File: core/styles/_icons.scss (L28)

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
- mixin: nhsuk-exports
- mixin: nhsuk-exports

---

### mq-breakpoints

- Type: variable
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L20-L25)

Breakpoint list

Name your breakpoints in a way that creates a ubiquitous language
across team members. It will improve communication between
stakeholders, designers, developers, and testers.

#### Value

```scss
(
  mobile: 320px,
  tablet: 740px,
  desktop: 980px,
  wide: 1300px
)
```

#### Links

- [Full documentation and examples](https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint)

#### Used By

- function: get-breakpoint-width
- mixin: mq
- mixin: add-breakpoint
- mixin: show-breakpoints

---

### mq-media-type

- Type: variable
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L49)

Customize the media type (for example: `@media screen` or `@media print`)
By default sass-mq uses an "all" media type (`@media all and …`)

If you want to overried the media type, you can use this option.

#### Value

```scss
all
```

#### Links

- [Full documentation and example](https://github.com/sass-mq/sass-mq#changing-media-type)

#### Used By

- mixin: mq

#### Examples

```scss
@use 'path/to/mq' with ($media-type: 'screen');
```

---

### mq-show-breakpoints

- Type: variable
- Access: public
- Group: none
- File: core/vendor/sass-mq.scss (L38)

Show breakpoints in the top right corner

If you want to display the currently active breakpoint in the top
right corner of your site during development, add the breakpoints
to this list, ordered by width. For example: (mobile, tablet, desktop).

#### Value

```scss
()
```

#### Used By

- mixin: show-breakpoints

#### Examples

```scss
@use 'path/to/mq' with ($mq-show-breakpoints: ('mobile', 'tablet', 'desktop'));
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
- File: core/settings/_colours-applied.scss (L114)

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
- File: core/settings/_globals.scss (L168)

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
- File: core/settings/_globals.scss (L174)

Form control border width

#### Value

```scss
2px
```

#### Used By

- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-input

---

### nhsuk-border-width-form-group-error

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L180)

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
- File: core/settings/_colours-applied.scss (L198)

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
- File: core/settings/_globals.scss (L198)

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
- File: core/settings/_colours-applied.scss (L180)

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
- File: core/settings/_colours-applied.scss (L192)

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
- File: core/settings/_colours-applied.scss (L204)

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
- File: core/settings/_globals.scss (L204)

Button shadow size

#### Value

```scss
4px
```

#### Used By

- mixin: nhsuk-button-style
- mixin: nhsuk-button-style

---

### nhsuk-button-text-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L186)

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
- mixin: _header-link-style
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-radio
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-box

---

### nhsuk-focus-width

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L186)

Border width of focus outline

#### Value

```scss
4px
```

#### Used By

- mixin: _header-link-style
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-text
- mixin: nhsuk-focused-input
- mixin: nhsuk-focused-radio
- mixin: nhsuk-focused-radio
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-checkbox
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-button
- mixin: nhsuk-focused-box

---

### nhsuk-font-family

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L27)

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
- File: core/settings/_globals.scss (L36)

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
- File: core/settings/_globals.scss (L77)

Font weight for bold typography

#### Value

```scss
$nhsuk-font-bold
```

#### Used By

- mixin: nhsuk-typography-weight-bold
- mixin: nhsuk-typography-weight-bold

---

### nhsuk-font-weight-normal

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L71)

Font weight for normal typography

#### Value

```scss
$nhsuk-font-normal
```

#### Used By

- mixin: nhsuk-typography-weight-normal
- mixin: nhsuk-typography-weight-normal

---

### nhsuk-fonts-path

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L42)

Path or URL to the fonts folder, with trailing slash.

#### Value

```scss
"https://assets.nhs.uk/fonts/"
```

---

### nhsuk-grid-widths

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L132-L139)

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
- function: nhsuk-grid-width

---

### nhsuk-gutter

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L145)

Width of gutter between grid columns

#### Value

```scss
32px
```

#### Used By

- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container

---

### nhsuk-gutter-half

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L151)

Width of half the gutter between grid columns

#### Value

```scss
math.div($nhsuk-gutter, 2)
```

#### Used By

- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-width-container
- mixin: nhsuk-grid-column
- mixin: nhsuk-remove-margin-mobile
- mixin: nhsuk-remove-margin-mobile

---

### nhsuk-hover-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L136)

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
- File: core/settings/_globals.scss (L192)

Hover width for form controls with a hover state

#### Value

```scss
10px
```

---

### nhsuk-include-default-font-face

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L51)

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
- File: core/settings/_globals.scss (L92)

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
- File: core/settings/_colours-applied.scss (L142)

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
- File: core/settings/_colours-applied.scss (L128)

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
- File: core/settings/_colours-applied.scss (L170)

Active link colour

#### Value

```scss
nhsuk-shade($nhsuk-link-colour, 50%)
```

---

### nhsuk-link-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L152)

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
- File: core/settings/_colours-applied.scss (L164)

Link hover colour

#### Value

```scss
nhsuk-colour("dark-pink")
```

---

### nhsuk-link-visited-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L158)

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
- File: core/settings/_colours-applied.scss (L318)

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
- File: core/settings/_colours-applied.scss (L306)

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
- File: core/settings/_colours-applied.scss (L312)

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
- File: core/settings/_colours-applied.scss (L324)

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
- File: core/settings/_globals.scss (L126)

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

### nhsuk-reverse-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L270)

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
- File: core/settings/_colours-applied.scss (L252)

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
- File: core/settings/_colours-applied.scss (L264)

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
- File: core/settings/_colours-applied.scss (L276)

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
- File: core/settings/_colours-applied.scss (L258)

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

- mixin: nhsuk-link-style-white

---

### nhsuk-root-font-size

- Type: variable
- Access: public
- Group: settings/globals
- File: core/settings/_globals.scss (L105)

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
- function: nhsuk-line-height

---

### nhsuk-secondary-border-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L120)

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
- File: core/settings/_colours-applied.scss (L240)

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
- File: core/settings/_colours-applied.scss (L222)

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
- File: core/settings/_colours-applied.scss (L210)

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
- File: core/settings/_colours-applied.scss (L234)

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
- File: core/settings/_colours-applied.scss (L246)

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
- File: core/settings/_colours-applied.scss (L216)

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
- File: core/settings/_colours-applied.scss (L228)

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
- mixin: nhsuk-link-style-success
- mixin: nhsuk-link-style-success
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
- mixin: nhsuk-font-size
- mixin: nhsuk-font-size

---

### nhsuk-warning-button-active-colour

- Type: variable
- Access: public
- Group: settings/colours
- File: core/settings/_colours-applied.scss (L294)

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
- File: core/settings/_colours-applied.scss (L282)

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
- File: core/settings/_colours-applied.scss (L288)

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
- File: core/settings/_colours-applied.scss (L300)

Warning button shadow colour

#### Value

```scss
nhsuk-shade($nhsuk-warning-button-colour, 50%)
```

---

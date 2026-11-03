# NHS Frontend utility classes

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Read from the compiled CSS.

Prefer a component option or typography class where one exists. Most of these rules use `!important`, which is left out here. Media queries are shown as written in the CSS: `(min-width: 40.0625em)` is the tablet breakpoint.

## Spacing

Replace `<point>` with a point from the scale, for example `nhsuk-u-margin-bottom-6`. Responsive spacing changes at the tablet breakpoint, and static spacing is the same at every screen size.

| Responsive | Static |
| --- | --- |
| `nhsuk-u-margin-<point>` | `nhsuk-u-static-margin-<point>` |
| `nhsuk-u-margin-top-<point>` | `nhsuk-u-static-margin-top-<point>` |
| `nhsuk-u-margin-right-<point>` | `nhsuk-u-static-margin-right-<point>` |
| `nhsuk-u-margin-bottom-<point>` | `nhsuk-u-static-margin-bottom-<point>` |
| `nhsuk-u-margin-left-<point>` | `nhsuk-u-static-margin-left-<point>` |
| `nhsuk-u-padding-<point>` | `nhsuk-u-static-padding-<point>` |
| `nhsuk-u-padding-top-<point>` | `nhsuk-u-static-padding-top-<point>` |
| `nhsuk-u-padding-right-<point>` | `nhsuk-u-static-padding-right-<point>` |
| `nhsuk-u-padding-bottom-<point>` | `nhsuk-u-static-padding-bottom-<point>` |
| `nhsuk-u-padding-left-<point>` | `nhsuk-u-static-padding-left-<point>` |

| Point | Responsive: small screens | Responsive: tablet and up | Static |
| --- | --- | --- | --- |
| `0` | 0 | 0 | 0 |
| `1` | 4px | 4px | 4px |
| `2` | 8px | 8px | 8px |
| `3` | 8px | 16px | 16px |
| `4` | 16px | 24px | 24px |
| `5` | 24px | 32px | 32px |
| `6` | 32px | 40px | 40px |
| `7` | 40px | 48px | 48px |
| `8` | 48px | 56px | 56px |
| `9` | 56px | 64px | 64px |

## Font size

| Class | Small screens | Tablet and up | Print |
| --- | --- | --- | --- |
| `nhsuk-u-font-size-64` | `font-size: 3rem; line-height: 1.125` | `font-size: 4rem; line-height: 1.09375` | `font-size: 34pt; line-height: 1.1` |
| `nhsuk-u-font-size-48` | `font-size: 2rem; line-height: 1.1875` | `font-size: 3rem; line-height: 1.125` | `font-size: 26pt; line-height: 1.15` |
| `nhsuk-u-font-size-36` | `font-size: 1.6875rem; line-height: 1.2222222222` | `font-size: 2.25rem; line-height: 1.1666666667` | `font-size: 20pt; line-height: 1.2` |
| `nhsuk-u-font-size-26` | `font-size: 1.375rem; line-height: 1.3181818182` | `font-size: 1.625rem; line-height: 1.2307692308` | `font-size: 17pt; line-height: 1.25` |
| `nhsuk-u-font-size-22` | `font-size: 1.1875rem; line-height: 1.4210526316` | `font-size: 1.375rem; line-height: 1.3636363636` | `font-size: 15pt; line-height: 1.25` |
| `nhsuk-u-font-size-19` | `font-size: 1rem; line-height: 1.5` | `font-size: 1.1875rem; line-height: 1.4736842105` | `font-size: 13pt; line-height: 1.25` |
| `nhsuk-u-font-size-16` | `font-size: 0.875rem; line-height: 1.7142857143` | `font-size: 1rem; line-height: 1.5` | `font-size: 12pt; line-height: 1.3` |
| `nhsuk-u-font-size-14` | `font-size: 0.75rem; line-height: 1.6666666667` | `font-size: 0.875rem; line-height: 1.7142857143` | `font-size: 12pt; line-height: 1.3` |

## Display

| Class | CSS |
| --- | --- |
| `nhsuk-u-display-block` | `display: block` |
| `nhsuk-u-display-inline` | `display: inline` |
| `nhsuk-u-display-inline-block` | `display: inline-block` |
| `nhsuk-u-display-none` | `display: none` |
| `nhsuk-u-display-none-from-desktop` | (min-width: 48.0625em): `display: none` |
| `nhsuk-u-display-none-from-large-desktop` | (min-width: 61.875em): `display: none` |
| `nhsuk-u-display-none-from-mobile` | (min-width: 20em): `display: none` |
| `nhsuk-u-display-none-from-tablet` | (min-width: 40.0625em): `display: none` |
| `nhsuk-u-display-none-print` | print: `display: none` |
| `nhsuk-u-display-none-until-desktop` | (max-width: 48.0525em): `display: none` |
| `nhsuk-u-display-none-until-large-desktop` | (max-width: 61.865em): `display: none` |
| `nhsuk-u-display-none-until-mobile` | (max-width: 19.99em): `display: none` |
| `nhsuk-u-display-none-until-tablet` | (max-width: 40.0525em): `display: none` |

## Width

| Class | CSS |
| --- | --- |
| `nhsuk-u-one-half` | `width: 50%; float: left` |
| `nhsuk-u-one-half-tablet` | `width: 100%`, (min-width: 40.0625em): `width: 50%; float: left` |
| `nhsuk-u-one-quarter` | `width: 25%; float: left` |
| `nhsuk-u-one-quarter-tablet` | `width: 100%`, (min-width: 40.0625em): `width: 25%; float: left` |
| `nhsuk-u-one-third` | `width: 33.3333333333%; float: left` |
| `nhsuk-u-one-third-tablet` | `width: 100%`, (min-width: 40.0625em): `width: 33.3333333333%; float: left` |
| `nhsuk-u-reading-width` | `max-width: 44em` |
| `nhsuk-u-three-quarters` | `width: 75%; float: left` |
| `nhsuk-u-three-quarters-tablet` | `width: 100%`, (min-width: 40.0625em): `width: 75%; float: left` |
| `nhsuk-u-two-thirds` | `width: 66.6666666667%; float: left` |
| `nhsuk-u-two-thirds-tablet` | `width: 100%`, (min-width: 40.0625em): `width: 66.6666666667%; float: left` |
| `nhsuk-u-width-full` | `width: 100%` |
| `nhsuk-u-width-one-half` | `width: 100%`, (min-width: 40.0625em): `width: 50%` |
| `nhsuk-u-width-one-quarter` | `width: 100%`, (min-width: 40.0625em): `width: 25%` |
| `nhsuk-u-width-one-third` | `width: 100%`, (min-width: 40.0625em): `width: 33.3333333333%` |
| `nhsuk-u-width-three-quarters` | `width: 100%`, (min-width: 40.0625em): `width: 75%` |
| `nhsuk-u-width-two-thirds` | `width: 100%`, (min-width: 40.0625em): `width: 66.6666666667%` |

## Text

| Class | CSS |
| --- | --- |
| `nhsuk-u-font-code` | `font-family: menlo, "Cascadia Mono", "Segoe UI Mono", consolas, "Liberation Mono", monospace; font-size-adjust: 0.52; letter-spacing: 0.075em; word-spacing: -0.5ch` |
| `nhsuk-u-font-monospace` | `font-family: menlo, "Cascadia Mono", "Segoe UI Mono", consolas, "Liberation Mono", monospace; font-size-adjust: 0.52` |
| `nhsuk-u-font-weight-bold` | `font-weight: 600` |
| `nhsuk-u-font-weight-normal` | `font-weight: 400` |
| `nhsuk-u-nowrap` | (max-width: 40.0525em): `white-space: nowrap` |
| `nhsuk-u-secondary-text-colour` | `color: #4c6272` |
| `nhsuk-u-text-align-centre` | `text-align: center` |
| `nhsuk-u-text-align-left` | `text-align: left` |
| `nhsuk-u-text-align-right` | `text-align: right` |
| `nhsuk-u-text-break-word` | `word-wrap: break-word; overflow-wrap: break-word` |

## Visually hidden

| Class | CSS |
| --- | --- |
| `nhsuk-u-visually-hidden` | `position: absolute; width: 1px; height: 1px; margin: 0; padding: 0; overflow: hidden; clip: rect(0 0 0 0); -webkit-clip-path: inset(50%); clip-path: inset(50%); border: 0; white-space: nowrap; -webkit-user-select: none; -ms-user-select: none; user-select: none`, ::before: `content: " "`, ::after: `content: " "` |
| `nhsuk-u-visually-hidden-focusable` | :not(:active):not(:focus):not(.\:focus): `position: absolute; width: 1px; height: 1px; margin: 0; padding: 0; overflow: hidden; clip: rect(0 0 0 0); -webkit-clip-path: inset(50%); clip-path: inset(50%); border: 0; white-space: nowrap; -webkit-user-select: none; -ms-user-select: none; user-select: none` |

## Other

| Class | CSS |
| --- | --- |
| `nhsuk-u-clear` | ::after: `content: ""; display: block; clear: both` |
| `nhsuk-u-float-left` | `float: left` |
| `nhsuk-u-float-right` | `float: right` |

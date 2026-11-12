# NHS Frontend reference

> Describes NHS Frontend v10.7.1. Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand.

## How to use these docs

- Before writing or changing a macro call, read that component's file. Do not guess parameter names: names from memory are often out of date.
- Use only the parameters listed in a component's table.
- Use the macros. Do not hand-write component HTML when a macro exists.
- Read only the files you need. Each component's main file has its parameters and examples, and links to more variants where they exist.
- Check the `nhsuk-frontend` version in the project's `package.json` against the version above. Older versions may not support everything listed here.

## Other references

- [Utility classes](utility-classes.md): every `nhsuk-u-` class and what it does, including the spacing and type scales
- [Sass reference](sass-reference.md): every mixin, function and variable, with a line-numbered table of contents

## Components

| Component | Macro | Category | File |
|-----------|-------|----------|------|
| Action link | `actionLink()` | Content | [components/action-link.md](components/action-link.md) |
| Back link | `backLink()` | Navigation | [components/back-link.md](components/back-link.md) |
| Breadcrumb | `breadcrumb()` | Navigation | [components/breadcrumb.md](components/breadcrumb.md) |
| Button | `button()` | Form controls | [components/button.md](components/button.md) |
| Caption | `caption()` | Content | [components/caption.md](components/caption.md) |
| Card | `card()` | Content | [components/card.md](components/card.md) |
| Character count | `characterCount()` | Form inputs | [components/character-count.md](components/character-count.md) |
| Checkboxes | `checkboxes()` | Form inputs | [components/checkboxes.md](components/checkboxes.md) |
| Code | `code()` | Content | [components/code.md](components/code.md) |
| Contents list | `contentsList()` | Navigation | [components/contents-list.md](components/contents-list.md) |
| Date input | `dateInput()` | Form inputs | [components/date-input.md](components/date-input.md) |
| Details | `details()` | Content | [components/details.md](components/details.md) |
| Do and Don't list | `list()` | Content | [components/do-dont-list.md](components/do-dont-list.md) |
| Environment banner | `environmentBanner()` | Notifications | [components/environment-banner.md](components/environment-banner.md) |
| Error message | `errorMessage()` | Form controls | [components/error-message.md](components/error-message.md) |
| Error summary | `errorSummary()` | Notifications | [components/error-summary.md](components/error-summary.md) |
| Fieldset | `fieldset()` | Form controls | [components/fieldset.md](components/fieldset.md) |
| File upload | `fileUpload()` | Form inputs | [components/file-upload.md](components/file-upload.md) |
| Footer | `footer()` | Layout | [components/footer.md](components/footer.md) |
| Header | `header()` | Layout | [components/header.md](components/header.md) |
| Heading | `heading()` | Content | [components/heading.md](components/heading.md) |
| Hero | `hero()` | Content | [components/hero.md](components/hero.md) |
| Hint text | `hint()` | Form controls | [components/hint.md](components/hint.md) |
| Images | `image()` | Content | [components/images.md](components/images.md) |
| Input | `input()` | Form inputs | [components/input.md](components/input.md) |
| Inset text | `insetText()` | Content | [components/inset-text.md](components/inset-text.md) |
| Label | `label()` | Form controls | [components/label.md](components/label.md) |
| Legend | `legend()` | Form controls | [components/legend.md](components/legend.md) |
| Link | `link()` | Navigation | [components/link.md](components/link.md) |
| Notification banner | `notificationBanner()` | Notifications | [components/notification-banner.md](components/notification-banner.md) |
| Pagination | `pagination()` | Navigation | [components/pagination.md](components/pagination.md) |
| Panel | `panel()` | Content | [components/panel.md](components/panel.md) |
| Password input | `passwordInput()` | Form inputs | [components/password-input.md](components/password-input.md) |
| Radios | `radios()` | Form inputs | [components/radios.md](components/radios.md) |
| Scroll | `scroll()` | Content | [components/scroll.md](components/scroll.md) |
| Search input | `searchInput()` | Form inputs | [components/search-input.md](components/search-input.md) |
| Select | `select()` | Form inputs | [components/select.md](components/select.md) |
| Skip link | `skipLink()` | Navigation | [components/skip-link.md](components/skip-link.md) |
| Summary list | `summaryList()` | Content | [components/summary-list.md](components/summary-list.md) |
| Tables | `table()` | Content | [components/tables.md](components/tables.md) |
| Tabs | `tabs()` | Content | [components/tabs.md](components/tabs.md) |
| Tag | `tag()` | Content | [components/tag.md](components/tag.md) |
| Task list | `taskList()` | Content | [components/task-list.md](components/task-list.md) |
| Textarea | `textarea()` | Form inputs | [components/textarea.md](components/textarea.md) |
| Visually hidden | `visuallyHidden()` | Content | [components/visually-hidden.md](components/visually-hidden.md) |
| Warning callout | `warningCallout()` | Notifications | [components/warning-callout.md](components/warning-callout.md) |

## Reading the parameter tables

- Options listed as `object` with nested `text` and `html` usually also accept a plain string when only text is needed, for example `label: "Full name"`, `hint: "..."` or `errorMessage: "..."`. This includes labels, legends, hints, error messages, headings, captions, descriptions and summaries, and table, summary list and tab content. The examples show which options accept a string.
- A plain string is always escaped. For HTML, use the `html` option, including for HTML built in a `set` block.
- Options marked as deprecated still work but will be removed. Use their replacement.

# NHS Frontend Guide

A curated guide for using NHS Frontend components effectively with Large Language Models.

---

## Overview

**NHS Frontend** is the official component library for building NHS digital services. It provides:

- Accessible, tested HTML/CSS/JavaScript components
- Nunjucks macros for server-side templating
- NHS branding and design patterns
- WCAG 2.2 Level AA accessibility

**When to use NHS Frontend:**
- Building NHS digital services
- Creating NHS prototypes (via NHS prototype kit)
- Implementing NHS design patterns

**Related projects:**
- **NHS design system** - Design guidance and patterns
- **NHS prototype kit** - Prototyping tool that includes NHS Frontend
- **GOV.UK Frontend** - Similar component library for UK government services (different branding)

---

## Key Conventions

### Text vs HTML parameters

Most NHS Frontend components accept **either** `text` OR `html` parameters - never use both together. Prefer `text` where possible.

**✅ Correct:**
```njk
{{ insetText({ text: "You'll need to bring photo ID to your appointment" }) }}
{{ insetText({ html: '<a href="/cancel">cancel your appointment</a> online' }) }}
```

**❌ Wrong:**
```njk
{{ insetText({ text: "Simple text", html: '<a href="#">Link</a>' }) }}
```

**When to use each:**
- **`text`** - Preferred for simple content. Automatically escaped for security.
- **`html`** - Only when you need formatted content (bold, links, etc.). Not escaped.

**Quote style:** Use double quotes for string values in Nunjucks macros and HTML attributes.

### Classes parameter

Add custom CSS classes to any component using the `classes` parameter:

```njk
{{ button({ 
  text: "Submit", 
  classes: "nhsuk-button--secondary nhsuk-u-margin-bottom-4" 
}) }}
```

**Common utility classes:**
- `nhsuk-u-nowrap` - Prevent wrapping - useful for tags that may otherwise wrap awkwardly
- `nhsuk-u-margin-bottom-*` - Bottom margin (0-9)
- `nhsuk-u-visually-hidden` - Hide visually but keep for screen readers

**Class naming conventions:**

NHS Frontend uses the **Block Element Modifier (BEM)** methodology:

- `.nhsuk-block` - The root of a component
- `.nhsuk-block__element` - A part of the block
- `.nhsuk-block--modifier` - A variant of the block

Examples:
```scss
.nhsuk-card {}                // Block
.nhsuk-card__heading {}       // Element
.nhsuk-card--clickable {}     // Modifier

.nhsuk-a-z-nav {}             // Block (can be hyphenated)
.nhsuk-a-z-nav__link {}       // Element
.nhsuk-a-z-nav__link--disabled {} // Modifier
```

All NHS Frontend classes use the `.nhsuk-` namespace. Use your own namespace (like `.app-` or `.myorg-`) for custom classes.

### Attributes parameter

Add custom HTML attributes using the `attributes` object:

```njk
{{ button({ 
  text: "Submit",
  attributes: {
    "data-module": "custom-module",
    "aria-describedby": "help-text"
  }
}) }}
```

**Note:** Keys should be quoted, values should be quoted strings.

**HTML attribute order:**

When writing HTML directly (not via Nunjucks macros), use this attribute order for consistency:

1. `class`
2. `id`, `name`
3. `data-*`
4. `src`, `for`, `type`, `href`, `value`
5. `title`, `alt`
6. `role`, `aria-*`

Classes make for great reusable components, so they come first. IDs are more specific and should be used sparingly.

### Parameter naming patterns

NHS Frontend uses consistent naming patterns:

- **`id`** - HTML id attribute (string)
- **`name`** - HTML name attribute for form inputs (string)
- **`value`** - Current value of form inputs (string)
- **`items`** - Array of sub-items (for lists, navigation, form options)
- **`href`** - Link URL (string)
- **`label`** - Form input label (object with `text` or `html`)
- **`hint`** - Helper text (object with `text` or `html`)
- **`errorMessage`** - Error message (object with `text` or `html`)
- **`fieldset`** - Grouping wrapper (object with `legend`)

**Naming convention:** Parameter names use **camelCase** (e.g., `errorMessage`, not `error_message` or `error-message`).

---

## Common patterns

### Form inputs

All form inputs follow a consistent structure:

```njk
{{ input({
  id: "national-insurance-number",
  name: "ni-number",
  label: {
    text: "National Insurance number"
  },
  hint: {
    text: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."
  },
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  } if errors
}) }}
```

**Key points:**
- `id` and `name` are separate (id for labels, name for form submission)
- `label`, `hint`, and `errorMessage` are objects with `text` or `html`
- Error messages should only be included when there's an error

### Conditional content

Use Nunjucks conditionals to show/hide content:

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: errors
}) if errors }}
```

### Arrays of items

Many components use an `items` array:

```njk
{{ radios({
  name: "contact-method",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?"
    }
  },
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

### Nested parameters

Some parameters have nested objects (use dot notation in parameter tables):

```njk
{{ input({
  label: {
    text: "Name",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}
```

---

## Component categories

**Form inputs** - Components for collecting user data:
- **Input** - Single-line text input
- **Textarea** - Multi-line text input
- **Radios** - Single choice from options
- **Checkboxes** - Multiple choices
- **Select** - Dropdown selection
- **Date input** - Date entry with separate day/month/year fields
- **File upload** - File selection
- **Character count** - Text input/textarea with character counter

**Form controls** - Supporting elements for forms:
- **Button** - Submit or action buttons
- **Fieldset** - Group related form inputs
- **Label** - Form input labels
- **Hint** - Helper text
- **Error message** - Validation error messages
- **Error summary** - List of page errors

**Navigation** - Components for moving between pages:
- **Back link** - Return to previous page
- **Breadcrumb** - Show current location in hierarchy
- **Pagination** - Navigate between pages of content
- **Skip link** - Accessibility link to skip to main content
- **Contents list** - Table of contents navigation

**Content** - Components for displaying information:
- **Card** - Grouped content with optional action
- **Details** - Expandable/collapsible content
- **Inset text** - Highlighted secondary content
- **Summary list** - Key-value pairs (like a definition list)
- **Table** - Tabular data
- **Tag** - Status or category indicator

**Layout** - Structural components:
- **Header** - Site-wide header with navigation
- **Footer** - Site-wide footer with links
- **Width container** - Constrain content width

**Notifications** - Components for important messages:
- **Warning callout** - Important warnings
- **Error summary** - Form validation errors
- **Notification banner** - Success or information messages

---

## Working with Sass and custom styles

### Custom CSS classes

**Never create classes in the `nhsuk-` namespace.** This namespace is reserved for NHS Frontend components.

**✅ Correct:**
```scss
// Use your own namespace
.app-custom-component {
  padding: 20px;
}

.myorg-special-input {
  border: 2px solid $color-nhs-blue;
}
```

**❌ Wrong:**
```scss
// Don't use nhsuk- namespace
.nhsuk-custom-component {
  padding: 20px;
}
```

### Modifying component styles

**Prefer adding modifier classes instead of overriding NHS Frontend styles directly.**

**✅ Correct:**
```scss
// Add a modifier class
.app-input--compact {
  padding: 8px;
}
```

```njk
{{ input({
  name: "postcode",
  classes: "app-input--compact",
  label: { text: "Postcode" }
}) }}
```

**❌ Avoid:**
```scss
// Overriding NHS Frontend classes directly
.nhsuk-input {
  padding: 8px; // Don't override the base class
}
```

### Using existing NHS Frontend modifiers

NHS Frontend provides some modifier classes you can use:

```njk
{# Use built-in modifiers where available #}
{{ button({
  text: "Secondary action",
  classes: "nhsuk-button--secondary"
}) }}

{{ button({
  text: "Reverse (for dark backgrounds)",
  classes: "nhsuk-button--reverse"
}) }}
```

**When to create custom modifiers:**
- If you're using the same custom style very frequently across your service
- When NHS Frontend doesn't provide a suitable modifier
- For organization-specific design patterns

### Use Sass variables, not magic numbers

NHS Frontend provides Sass variables for colors, spacing, typography, and more. Prefer these instead of hardcoded values.

**✅ Correct:**
```scss
.app-highlight {
  background-color: $color-nhs-blue;
  padding: nhsuk-spacing(4);
  font-size: $nhsuk-base-font-size;
}
```

**❌ Wrong:**
```scss
.app-highlight {
  background-color: #005eb8; // Magic number
  padding: 24px; // Magic number
  font-size: 16px; // Magic number
}
```

**Common Sass variables:**
- **Colors:** `$color-nhs-blue`, `$color-nhs-white`, `$color-nhs-black`, `$color-nhs-green`, etc.
- **Spacing:** `nhsuk-spacing(1)` through `nhsuk-spacing(9)`
- **Typography:** `$nhsuk-base-font-size`, `$nhsuk-base-line-height`
- **Breakpoints:** `$tablet`, `$desktop`

### Sass best practices

**Use direct class selectors, not nested selectors** - Keep selectors flat and specific rather than deeply nested.

**✅ Correct:**
```scss
.app-card {
  padding: nhsuk-spacing(4);
}

.app-card__title {
  font-weight: bold;
}

.app-card__content {
  margin-top: nhsuk-spacing(2);
}
```

**❌ Avoid:**
```scss
.app-card {
  padding: nhsuk-spacing(4);
  
  .title {
    font-weight: bold;
  }
  
  .content {
    margin-top: nhsuk-spacing(2);
  }
}
```

**Avoid styling HTML elements directly** - Always use classes for styling.

**✅ Correct:**
```scss
.app-list-item {
  padding: nhsuk-spacing(2);
}
```

**❌ Avoid:**
```scss
li {
  padding: nhsuk-spacing(2);
}

.app-list {
  li {
    padding: nhsuk-spacing(2);
  }
}
```

**Don't dynamically build selectors** - Write out full class names explicitly.

**✅ Correct:**
```scss
.app-foo {
  color: $color-nhs-blue;
}

.app-bar {
  color: $color-nhs-green;
}
```

**❌ Avoid:**
```scss
.app- {
  &foo {
    color: $color-nhs-blue;
  }
  
  &bar {
    color: $color-nhs-green;
  }
}
```

This makes selectors easier to search for and understand.

### When to use custom Sass

**Custom Sass should be rare.** You'll typically only need it for:
- Organization-specific components not in NHS Frontend
- Unusual layout requirements
- Custom service-specific patterns

**Most styling needs should be met by:**
1. Using NHS Frontend components as-is
2. Using built-in modifier classes
3. Following NHS design system patterns

---

## Common mistakes and gotchas

### Using both text and html parameters

**❌ Wrong:**
```njk
{# Wrong - only use one #}
{{ button({ text: "Click", html: "<strong>Click</strong>" }) }}
```

Most components accept **either** `text` OR `html` - never both together.

### Forgetting required parameters

**❌ Wrong:**
```njk
{# Wrong - missing required 'name' parameter #}
{{ input({ label: { text: "Name" } }) }}
```

**✅ Correct:**
```njk
{{ input({ 
  name: "full-name",
  label: { text: "Name" } 
}) }}
```

All form inputs require a `name` attribute for form submission.

### Incorrect array syntax

**❌ Wrong:**
```njk
{# Wrong - items should be objects #}
{{ radios({ items: ["Email", "Phone"] }) }}
```

**✅ Correct:**
```njk
{{ radios({ 
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" }
  ]
}) }}
```

The `items` array must contain objects with `value` and `text` properties.

### Quoting object keys in Nunjucks

**❌ Wrong:**
```njk
{# Wrong - keys should be unquoted in Nunjucks #}
{{ button({ "text": "Submit" }) }}
```

**✅ Correct:**
```njk
{{ button({ text: "Submit" }) }}
```

Nunjucks uses JavaScript object syntax where keys are unquoted.

### Forgetting fieldset for radio/checkbox groups

Groups of radios or checkboxes need a fieldset and legend. Single checkboxes (like "I agree") don't need this.

**❌ Wrong:**
```njk
{# Wrong - multiple options without grouping #}
{{ radios({
  name: "contact",
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" }
  ]
}) }}
```

**✅ Correct:**
```njk
{# Correct - multiple options with fieldset #}
{{ radios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?"
    }
  },
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" }
  ]
}) }}
```

**✅ Also correct for single checkbox:**
```njk
{# Also correct - single checkbox without fieldset #}
{{ checkboxes({
  name: "terms",
  items: [
    { value: "agreed", text: "I agree to the terms and conditions" }
  ]
}) }}
```

**✅ Also correct using fieldset as a call block:**
```njk
{% call fieldset({
  legend: {
    text: "Have you changed your name?"
  },
  describedBy: "contact-hint contact-error"
}) %}
  {{ hint({
    id: "contact-hint",
    text: "This includes changing your last name or spelling your name differently"
  }) }}
  {{ errorMessage({
    id: "contact-error",
    text: "Select yes if you have changed your name"
  }) }}
  {{ radios({
    name: "contact",
    items: [
      { value: "yes", text: "Yes" },
      { value: "no", text: "No" }
    ]
  }) }}
{% endcall %}
```

### Hint text should be plain text only

**Hints should avoid links** because when hint text is announced by screen readers (via `aria-describedby`), only the text content is read out - link destinations are not announced. Bold text is less problematic but should still be used sparingly.

**✅ Correct:**
```njk
{{ input({
  name: "nhs-number",
  label: { text: "NHS number" },
  hint: { 
    text: "Your NHS number is a 10 digit number that you can find on any letter the NHS has sent you, for example, 458 777 3456" 
  }
}) }}
```

**❌ Avoid:**
```njk
{{ input({
  name: "nhs-number",
  label: { text: "NHS number" },
  hint: { 
    html: "Your NHS number is a 10 digit number. <a href='/help'>Get help finding your NHS number</a>." 
  }
}) }}
```

**This applies to most hints**, including:
- Hints within fieldsets for radios and checkboxes
- Hints for all form inputs
- Any content using `aria-describedby`

**What to do if you need complex hint content:**

Follow the NHS design system pattern for [asking complex questions without using hint text](https://service-manual.nhs.uk/design-system/patterns/question-pages#asking-complex-questions-without-using-hint-text):

```njk
<h1>Finding your NHS number</h1>

<p>Your NHS number is a 10 digit number that you can find on any letter the NHS has sent you.</p>
<p>For example, 458 777 3456.</p>
<p><a href="/help">Get help finding your NHS number</a></p>

{{ input({
  name: "nhs-number",
  label: {
    text: "NHS number"
  }
}) }}
```

---

## Accessibility requirements

NHS Frontend components are designed to meet WCAG 2.2 Level AA, but correct usage is required:

**Always provide labels** - Form inputs must always have a label and it usually should be visible:
```njk
{{ input({
  name: "email",
  label: { text: "Email address" }
}) }}
```

**Use fieldset and legend for groups** - Groups of radio buttons and checkboxes must be grouped with a fieldset and include a legend:
```njk
{{ radios({
  fieldset: {
    legend: {
      text: "What is your address?"
    }
  }
}) }}
```

**Provide error messages** - Error messages must be associated with form inputs:
```njk
{{ input({
  name: "email",
  label: { text: "Email" },
  errorMessage: {
    text: "Enter an email address"
  } if errors
}) }}
```

---

## Best practices

**Use semantic HTML** - NHS Frontend components output semantic HTML - don't override this unnecessarily.

**Follow NHS design system guidance** - Components should be used according to [NHS design system](https://service-manual.nhs.uk/design-system) guidance.

**Test with assistive technology** - Even with accessible components, test your implementation with screen readers.

**Keep components simple** - Don't over-customize components - they're designed to work out of the box.

**Use NHS design system patterns** - For complex interactions (like dates of birth, addresses), follow NHS design system patterns.

---

## Further reading

- [NHS design system](https://service-manual.nhs.uk/design-system) - Design guidance
- [NHS Frontend GitHub](https://github.com/nhsuk/nhsuk-frontend) - Source code and examples
- [NHS Frontend coding standards](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/contributing/coding-standards.md) - Detailed coding conventions
- [NHS prototype kit](https://prototype-kit.service.manual.nhs.uk/) - Prototyping tool
- [Component reference documentation](nhs-frontend-component-reference.instructions.md) - Full parameter specifications

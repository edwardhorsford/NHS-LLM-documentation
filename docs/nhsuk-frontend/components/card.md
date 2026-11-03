# Card

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. [How to read this file](../index.md#reading-the-parameter-tables).

**Macro name:** `card`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string |  | The ID of the card. |
| `heading` | object | ✓ | Heading of the card component. *(accepts nested component params, see [heading](heading.md))* |
| `heading.id` | string |  | The ID of the heading. |
| `heading.text` | string | ✓ | If `html` is set, this is not required. Text for the heading. |
| `heading.html` | string | ✓ | If `text` is set, this is not required. HTML for the heading. |
| `heading.visuallyHiddenText` | string |  | A visually hidden prefix used before the heading. |
| `heading.href` | string |  | If set, the heading will become a link. |
| `heading.openInNewTab` | boolean |  | If set to `true`, then the heading link will open in a new tab. |
| `heading.caption` | object |  | Optional caption for the heading. *(accepts nested component params, see [caption](caption.md))* |
| `heading.size` | string |  | Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`. |
| `heading.level` | integer |  | Optional heading level. Defaults to `2`. |
| `heading.classes` | string |  | Classes to add to the heading. |
| `heading.attributes` | object |  | HTML attributes (for example data attributes) to add to the heading. |
| `headingHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.html` option. |
| `headingClasses` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.classes` option. |
| `headingSize` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.size` option. |
| `headingLevel` | integer |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.level` option. |
| `headingId` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.id` option. |
| `headingVisuallyHiddenText` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `heading.visuallyHiddenText` option. |
| `href` | string |  | The card link `href` attribute. |
| `openInNewTab` | boolean |  | If set to `true`, then the card link will open in a new tab. |
| `clickable` | boolean |  | If set to `true`, then the whole card will become a clickable card variant. |
| `variant` | string |  | Optional variant of card – `"feature"`, `"primary"`, `"secondary"`, `"warning"`, `"non-urgent"`, `"urgent"` or `"emergency"`. |
| `type` | string |  | **Deprecated in 10.4.0, do not use.** Replaced by the `variant` option. |
| `feature` | boolean |  | **Deprecated in 10.4.0, do not use.** Replaced by the `variant: "feature"` option. |
| `primary` | boolean |  | **Deprecated in 10.4.0, do not use.** Replaced by the `variant: "primary"` option. |
| `secondary` | boolean |  | **Deprecated in 10.4.0, do not use.** Replaced by the `variant: "secondary"` option. |
| `warning` | boolean |  | **Deprecated in 10.4.0, do not use.** Replaced by the `variant: "warning"` option. |
| `imgURL` | string |  | **Deprecated in 10.3.0, do not use.** Replaced by the `image.src` option. |
| `imgALT` | string |  | **Deprecated in 10.3.0, do not use.** Replaced by the `image.alt` option. |
| `image` | object |  | Can be used to add an image to the card component. |
| `image.src` | string | ✓ | The URL of the image in the card. |
| `image.alt` | string |  | The alternative text of the image in the card. |
| `image.html` | string |  | HTML to use for the image content. If `html` is provided, the `src` and `alt` options will be ignored. |
| `description` | object |  | Description to use within the card content. If `descriptionHtml` is provided, the `description` option will be ignored. |
| `description.text` | string | ✓ | If `html` is set, this is not required. Text to use within the card content. If `html` is provided, the `text` option will be ignored. |
| `description.html` | string | ✓ | If `text` is set, this is not required. HTML to use within the card content. If `html` is provided, the `text` option will be ignored. |
| `description.visuallyHiddenText` | string |  | A visually hidden suffix added to the description. |
| `description.href` | string |  | The card description link `href` attribute. |
| `description.openInNewTab` | boolean |  | If set to `true`, then the card description link will open in a new tab. |
| `description.classes` | string |  | Classes to add to the card content. |
| `description.attributes` | object |  | HTML attributes (for example data attributes) to add to the card content. |
| `descriptionHtml` | string |  | **Deprecated in 10.6.0, do not use.** Replaced by the `description.html` option. |
| `actions` | object |  | Can be used to add actions to the card component. |
| `actions.items` | array |  | Array of actions as links for use in the card component. *(accepts nested component params)* |
| `actions.items.id` | string |  | The ID of the action item. |
| `actions.items.text` | string | ✓ | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.html` | string | ✓ | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `actions.items.visuallyHiddenText` | string |  | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `actions.items.name` | string |  | Name for the action as a button. If `href` is provided, this has no effect. |
| `actions.items.type` | string |  | Type of action as a button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided. |
| `actions.items.value` | string |  | The `value` attribute for the action as a button. If `href` is provided, this has no effect. |
| `actions.items.href` | string | ✓ | The action `href` attribute. If set, the action will use an `<a>` tag automatically unless `type` is provided. |
| `actions.items.openInNewTab` | boolean |  | If set to `true`, then the action will open in a new tab. |
| `actions.items.classes` | string |  | Classes to add to the action item. |
| `actions.items.attributes` | object |  | HTML attributes (for example data attributes) to add to the action item. |
| `actions.classes` | string |  | Classes to add to the actions wrapper. |
| `caller` | nunjucks-block |  | Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire card component in a `call` block. |
| `classes` | string |  | Classes to add to the card. |
| `attributes` | object |  | HTML attributes (for example data attributes) to add to the card. |

## Examples

### default

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency"
  }
}) -%}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

### basic with custom HTML

```njk
{% call card({
  heading: {
    text: "Help from NHS 111",
    level: 3
  }
}) -%}
<p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
<p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
<p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{%- endcall %}
```

### basic with custom HTML and heading as string

```njk
{% call card({
  heading: "Help from NHS 111"
}) -%}
<p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
<p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
<p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{%- endcall %}
```

### basic with heading link

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    href: "#",
    size: "m",
    level: 3
  },
  description:
    "A quick guide for people who have care and support needs and their carers"
}) }}
```

### basic with heading link opens in a new tab

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    href: "#",
    size: "m",
    level: 3,
    openInNewTab: true
  },
  description:
    "A quick guide for people who have care and support needs and their carers"
}) }}
```

### basic without heading

```njk
{{ card({
  description:
    "A quick guide for people who have care and support needs and their carers"
}) }}
```

### basic with summary list

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and action

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and action as a button

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        type: "submit",
        text: "Delete"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and action opens in a new tab

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete",
        openInNewTab: true
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and actions

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        href: "#/withdraw"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and actions array

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: [
    {
      text: "Delete",
      href: "#/delete"
    },
    {
      text: "Withdraw",
      href: "#/withdraw"
    }
  ]
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and actions as buttons

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        type: "submit",
        text: "Delete"
      },
      {
        type: "submit",
        text: "Withdraw"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and actions (empty items)

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      false
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and actions, without heading

```njk
{% call card({
  actions: {
    items: [
      {
        text: "Delete",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/withdraw"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and button

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) -%}
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="submit">
  Add role
</button>

{%- endcall %}
```

### basic with summary list and heading link

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    href: "#",
    level: 3
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary list and heading link opens in a new tab

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    href: "#",
    level: 3,
    openInNewTab: true
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### basic with summary lists

```njk
{% call card({
  heading: {
    text: "Regional Managers",
    level: 3
  }
}) -%}
<h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">East</h4>
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

<h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">West</h4>
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
</dl>

{%- endcall %}
```

### clickable

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    size: "m"
  },
  description:
    "A quick guide for people who have care and support needs and their carers",
  href: "#",
  clickable: true
}) }}
```

### clickable opens in a new tab

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    size: "m"
  },
  description:
    "A quick guide for people who have care and support needs and their carers",
  href: "#",
  clickable: true,
  openInNewTab: true
}) }}
```

### clickable with description link

```njk
{{ card({
  heading: {
    text: "91",
    visuallyHiddenText: "Applicants",
    classes: "nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"
  },
  description: {
    text: "Applicants",
    href: "#"
  },
  clickable: true
}) }}
```

### clickable with description link opens in a new tab

```njk
{{ card({
  heading: {
    text: "91",
    visuallyHiddenText: "Applicants",
    classes: "nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"
  },
  description: {
    text: "Applicants",
    href: "#",
    openInNewTab: true
  },
  clickable: true
}) }}
```

### emergency (red and black)

```njk
{% call card({
  heading: "Call 999 if you have sudden chest pain that:",
  variant: "emergency"
}) -%}
<ul>
  <li>spreads to your arms, back, neck or jaw</li>
  <li>makes your chest feel tight or heavy</li>
  <li>also started with shortness of breath, sweating and feeling or being sick</li>
</ul>
<p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
{%- endcall %}
```

### emergency (red and black) with action link

```njk
{% call card({
  heading: "Call 999 or go to A&E now if:",
  variant: "emergency"
}) -%}
<ul>
  <li>you're coughing up more than just a few spots or streaks of blood – this could be a sign of serious bleeding in your lungs</li>
  <li>you have severe difficulty breathing – you're gasping, choking or not able to get words out</li>
</ul>
<a class="nhsuk-action-link nhsuk-action-link--reverse" href="#">
  <svg class="nhsuk-icon nhsuk-icon--arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z"/>
  </svg>
  <span class="nhsuk-action-link__text">
    Find your nearest A&amp;E
  </span>
</a>

{%- endcall %}
```

### feature

```njk
{{ card({
  variant: "feature",
  heading: "Feature card heading",
  description: "Feature card description."
}) }}
```

### feature with A to Z content

```njk
{{ card({
  heading: {
    text: "A",
    id: "a",
    size: "m"
  },
  variant: "feature",
  description: {
    html: '<ul class="nhsuk-list nhsuk-list--border">\n  <li><a href="#/conditions/abdominal-aortic-aneurysm/">AAA, see Abdominal aortic aneurysm</a></li>\n  <li><a href="#/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a></li>\n  <li><a href="#/conditions/abscess/">Abscess</a></li>\n</ul>'
  }
}) }}
```

### feature with nested card and summary list

```njk
{% call card({
  heading: "Flu: Follow-up requested",
  variant: "feature"
}) -%}
<p>Sarah Philips (Mum) would like to speak to a member of the team about other options for their child's vaccination.</p>
<a class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" href="#" role="button" draggable="false">
  Record a new consent response
</a>

<h3 class="nhsuk-heading-s">Consent responses</h3>
<div class="nhsuk-card nhsuk-card--clickable">
  <div class="nhsuk-card__content">
    <h4 class="nhsuk-card__heading">
      <a class="nhsuk-card__link" href="#">Sarah Philips (Mum)</a>
    </h4>
    <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Email address
        </dt>
        <dd class="nhsuk-summary-list__value">
          sarah.philips@example.com
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
          Date
        </dt>
        <dd class="nhsuk-summary-list__value">
          25 August 2025 at 4:04 pm
        </dd>
      </div>
      <div class="nhsuk-summary-list__row nhsuk-summary-list__row--no-border">
        <dt class="nhsuk-summary-list__key">
          Response
        </dt>
        <dd class="nhsuk-summary-list__value">
          <strong class="nhsuk-tag nhsuk-tag--orange">Follow up requested</strong>
        </dd>
      </div>
    </dl>
  </div>
</div>

{%- endcall %}
```

### feature with summary list

```njk
{% call card({
  heading: "Feature card heading",
  variant: "feature"
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### heading

basic with size S

```njk
{% call card({
  heading: {
    text: "If you need help now, but it's not an emergency",
    size: "s"
  }
}) -%}
<p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
{%- endcall %}
```

[3 more variants of this example](variants/card.md#heading)

### primary (with chevron)

```njk
{{ card({
  heading: {
    text: "Breast screening",
    size: "m"
  },
  href: "#",
  variant: "primary",
  clickable: true
}) }}
```

### primary (with chevron and description)

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    size: "m"
  },
  description:
    "A quick guide for people who have care and support needs and their carers",
  href: "#",
  clickable: true,
  variant: "primary"
}) }}
```

### primary (with chevron) opens in a new tab

```njk
{{ card({
  heading: {
    text: "Breast screening",
    size: "m"
  },
  href: "#",
  variant: "primary",
  clickable: true,
  openInNewTab: true
}) }}
```

### secondary

```njk
{{ card({
  heading: {
    text: "Urgent and emergency care services",
    size: "m"
  },
  description:
    "Services the NHS provides if you need urgent or emergency medical help",
  href: "#",
  clickable: true,
  variant: "secondary"
}) }}
```

### secondary with custom HTML

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Help from NHS 111",
    level: 3
  }
}) -%}
<p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
<p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
<p class="nhsuk-body">For a life-threatening emergency call 999.</p>
{%- endcall %}
```

### secondary with heading link

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    href: "#",
    size: "m",
    level: 3
  },
  description: {
    text: "A quick guide for people who have care and support needs and their carers"
  },
  variant: "secondary"
}) }}
```

### secondary with heading link and custom HTML

```njk
{{ card({
  heading: {
    text: "Why we are reinvesting in the NHS Prototype kit",
    classes: "nhsuk-u-font-size-22 nhsuk-u-margin-bottom-2",
    href: "#"
  },
  description: {
    html: '<p class="nhsuk-body-s nhsuk-u-margin-bottom-2">21 July 2025</p>\n<p class="nhsuk-card__description">Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.</p>'
  },
  variant: "secondary"
}) }}
```

### secondary with heading link opens in a new tab

```njk
{{ card({
  heading: {
    text: "Introduction to care and support",
    href: "#",
    size: "m",
    level: 3,
    openInNewTab: true
  },
  description: {
    text: "A quick guide for people who have care and support needs and their carers"
  },
  variant: "secondary"
}) }}
```

### secondary without heading

```njk
{{ card({
  variant: "secondary",
  description: {
    text: "A quick guide for people who have care and support needs and their carers"
  }
}) }}
```

### secondary with summary list

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### secondary with summary list and actions

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        href: "#/withdraw"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### secondary with summary list and actions (empty items)

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  },
  actions: {
    items: [
      {
        text: "Delete",
        href: "#/delete"
      },
      false
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### secondary with summary list and actions, without heading

```njk
{% call card({
  variant: "secondary",
  actions: {
    items: [
      {
        text: "Delete",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/delete"
      },
      {
        text: "Withdraw",
        visuallyHiddenText: "(Karen Francis)",
        href: "#/withdraw"
      }
    ]
  }
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### secondary with summary list and button

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Manager",
    level: 3
  }
}) -%}
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="submit">
  Add role
</button>

{%- endcall %}
```

### secondary with summary list and heading link

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    href: "#",
    level: 3
  },
  variant: "secondary"
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### secondary with summary list and heading link opens in a new tab

```njk
{% call card({
  heading: {
    text: "Regional Manager",
    href: "#",
    level: 3,
    openInNewTab: true
  },
  variant: "secondary"
}) -%}
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

{%- endcall %}
```

### secondary with summary lists

```njk
{% call card({
  variant: "secondary",
  heading: {
    text: "Regional Managers",
    level: 3
  }
}) -%}
<h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">East</h4>
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Karen Francis
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      15 March 1984
    </dd>
  </div>
</dl>

<h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">West</h4>
<dl class="nhsuk-summary-list nhsuk-summary-list--no-last-row-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
</dl>

{%- endcall %}
```

### top task

```njk
{{ card({
  heading: {
    text: "Order a repeat prescription",
    size: "xs",
    level: 3
  },
  href: "#",
  clickable: true
}) }}
```

### non-urgent (blue)

```njk
{% call card({
  heading: {
    text: "Speak to a GP if:",
    level: 3
  },
  variant: "non-urgent"
}) -%}
<ul>
  <li>you're not sure it's chickenpox</li>
  <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
  <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
  <li>you're concerned about your child or they get worse</li>
</ul>
<p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
{%- endcall %}
```

### urgent (red)

```njk
{% call card({
  heading: "Ask for an urgent GP appointment if:",
  variant: "urgent"
}) -%}
<ul>
  <li>you're an adult and have chickenpox</li>
  <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
  <li>you have a weakened immune system and you've been near someone with chickenpox</li>
  <li>you think your newborn baby has chickenpox</li>
</ul>
<p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
{%- endcall %}
```

### warning

```njk
{{ card({
  heading: "School, nursery or work",
  description:
    "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.",
  variant: "warning"
}) }}
```

### warning with actions

```njk
{{ card({
  heading: "School, nursery or work",
  description:
    "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.",
  variant: "warning",
  actions: {
    items: [
      {
        text: "Dismiss",
        href: "#/dismiss"
      }
    ]
  }
}) }}
```

### with image

```njk
{{ card({
  image: {
    src: "/nhsuk-frontend/assets/example-image-exercise.jpg"
  },
  heading: {
    text: "Exercise",
    size: "m"
  },
  description:
    "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing",
  href: "#",
  clickable: true
}) }}
```

### with image and caption

```njk
{{ card({
  image: {
    html: '<figure class="nhsuk-image">\n  <img class="nhsuk-image__img" src="/nhsuk-frontend/assets/example-image-exercise.jpg" alt="">\n  <figcaption class="nhsuk-image__caption">\n    No specific amount of time is recommended, but a typical training session could take less than 20 minutes.\n  </figcaption>\n</figure>\n'
  },
  heading: {
    text: "Exercise",
    size: "m"
  },
  description:
    "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing",
  href: "#",
  clickable: true
}) }}
```

### with image and custom HTML

```njk
{{ card({
  image: {
    src: "/nhsuk-frontend/assets/example-image-prototype-kit.png"
  },
  href: "https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit",
  clickable: true,
  heading: {
    text: "Why we are reinvesting in the NHS prototype kit",
    html: '<p class="nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-bottom-0"><span class="nhsuk-u-visually-hidden">Published on: </span>21 July 2025</p>\n<p class="nhsuk-body-s nhsuk-u-font-weight-bold">NHS England Design Matters blog</p>',
    size: "m"
  },
  description:
    "Frankie Roberto and Mike Gallagher explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it."
}) }}
```

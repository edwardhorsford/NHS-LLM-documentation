---
applyTo: “.njk, .html, app/routes/*.js”
---

# NHS LLM documentation

An (unofficial) collection of documentation for building NHS digital services with Large Language Models (LLMs). Includes auto-generated component references and hand-written guidance for working with the NHS design system in the [NHS Prototype kit](https://prototype-kit.service.manual.nhs.uk/).

## Why?

LLMs often have incomplete or outdated knowledge of NHS design patterns and components. This repository provides documentation optimized for AI assistants generated from the NHS Frontend component documentation.

## Contents

All generated documentation lives in the [`dist/`](dist/) folder:

**Hand-written guides:**
- [`nhs-frontend-guide.instructions.md`](dist/nhs-frontend-guide.instructions.md) - Core NHS Frontend patterns, conventions, and best practices
- [`nhs-prototype-kit-guide.instructions.md`](dist/nhs-prototype-kit-guide.instructions.md) - Patterns and best practices for prototyping with Nunjucks

**Auto-generated component documentation:**
- [`nhs-frontend-component-reference.md`](dist/nhs-frontend-component-reference.md) - Complete component documentation with parameters, examples and table of contents (reference from instruction files as needed)
- [`nhs-frontend-sass-reference.json`](dist/nhs-frontend-sass-reference.json) - Complete Sass documentation (mixins, functions, variables) with metadata

## Using with LLMs

**With Claude or ChatGPT:** Upload the markdown files or paste their content into your conversation. Reference the component reference file (`nhs-frontend-component-reference.md`) as needed for detailed component information.

**With GitHub Copilot:** 

1. Add all files from the `/dist` folder to your `.github/instructions` folder in your project
2. Add the following to your `.github/copilot-instructions.md` file to reference them:

```markdown
## NHS design system resources

For NHS Frontend components, patterns, and prototyping guidance, refer to:
- `nhs-frontend-guide.instructions.md` - Core NHS Frontend patterns and best practices
- `nhs-prototype-kit-guide.instructions.md` - Prototyping with Nunjucks
- `nhs-frontend-component-reference.md` - Full component reference (use table of contents to navigate, only read specific component sections when detailed parameters are needed)
- `nhs-frontend-sass-reference.json` - Sass mixins, functions, and variables (only read if needed)

When working with NHS components, start with the guides. Only consult the component reference when you need complete parameter details or examples for a specific component.
```

**Note:** The component reference (`nhs-frontend-component-reference.md`) is comprehensive and includes a table of contents. Copilot should use the TOC to navigate to specific components rather than reading the entire file unless full details are required.

## Regenerating documentation

### Component documentation

To generate fresh documentation from NHS Frontend components:

```bash
# From project root (looks for ../nhsuk-frontend by default)
node scripts/generate-nhs-frontend-component-docs.js

# Or specify custom path
NHS_FRONTEND_PATH=/path/to/nhsuk-frontend node scripts/generate-nhs-frontend-component-docs.js

# The script will prompt for the path if not found
```

### Sass documentation

To generate Sass documentation (requires [sassdoc](https://www.npmjs.com/package/sassdoc)):

```bash
# From project root (looks for ../nhsuk-frontend by default)
node scripts/generate-nhs-frontend-sass-docs.js

# Or specify custom path
NHS_FRONTEND_PATH=/path/to/nhsuk-frontend node scripts/generate-nhs-frontend-sass-docs.js
```

**Note:** The Sass documentation script uses `npx sassdoc` so you don't need to install sassdoc globally. If you want to install it globally:

```bash
npm install -g sassdoc
```

### Generate all documentation

To regenerate both component and Sass documentation:

```bash
node scripts/generate-nhs-frontend-component-docs.js
node scripts/generate-nhs-frontend-sass-docs.js
```

## Repository structure

```
nhs-llm-docs/
├── README.md
├── scripts/
│   ├── generate-nhs-frontend-component-docs.js
│   └── generate-nhs-frontend-sass-docs.js
├── dist/
│   ├── nhs-frontend-component-reference.md
│   ├── nhs-frontend-sass-reference.json
│   ├── nhs-frontend-guide.instructions.md
│   └── nhs-prototype-kit-guide.instructions.md
└── .gitignore
```

## Requirements

**For using the docs:** None - just copy/paste or upload!

**For regenerating component docs:**
- Node.js 16+
- NHS Frontend repository locally (expects sibling directory: `../nhsuk-frontend`)

**For regenerating Sass docs:**
- Node.js 16+
- NHS Frontend repository locally (expects sibling directory: `../nhsuk-frontend`)
- sassdoc (automatically used via npx, or install globally with `npm install -g sassdoc`)

## Contributing

Contributions welcome! Open an issue or submit a pull request.

## Related Resources

- [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend) - Component library
- [NHS Design system](https://service-manual.nhs.uk/design-system) - Official design system
- [NHS Prototype kit](https://prototype-kit.service.manual.nhs.uk/) - NHS Prototype kit

## License

MIT
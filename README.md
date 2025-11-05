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
- [`nhs-frontend-component-reference.instructions.md`](dist/nhs-frontend-component-reference.instructions.md) - Complete component documentation with parameters, examples and table of contents
- [`nhs-frontend-sass-reference.json`](dist/nhs-frontend-sass-reference.json) - Complete Sass documentation (mixins, functions, variables) with metadata

## Using with LLMs

**With Claude or ChatGPT:** Upload the markdown files or paste their content into your conversation.

**With GitHub Copilot:** Add the files from `/dist` to your `.github/instructions` folder. Copilot automatically recognizes `.instructions.md` files and uses them as context. You may want to reference them from your `.github/copilot-instructions.md` file.

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
│   ├── nhs-frontend-component-reference.instructions.md
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
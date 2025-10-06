# NHS LLM documentation

An (unofficial) collection of documentation for building NHS digital services with Large Language Models (LLMs). Includes auto-generated component references and hand-written guidance for working with the NHS design system in the [NHS Prototype kit](https://prototype-kit.service-manual.nhs.uk/).

## Why?

LLMs often have incomplete or outdated knowledge of NHS design patterns and components. This repository provides documentation optimized for AI assistants generated from the NHS Frontend component documentation.

## Contents

All generated documentation lives in the `dist/` folder:

**Auto-generated component documentation:**
- `nhs-frontend-crib-sheet.instructions.md` - Quick reference with examples
- `nhs-frontend-detailed-reference.instructions.md` - Complete parameter specifications

**Hand-written cuides:**
- `nhs-prototype-kit-style-guide.instructions.md` - Patterns and best practices for prototyping with Nunjucks

## Using with LLMs

**With Claude or ChatGPT:** Upload the markdown files or paste their content into your conversation.

**With GitHub Copilot:** Add this repo to your workspace. Copilot automatically recognizes `.instructions.md` files and uses them as context.

## Regenerating component docs

To generate fresh documentation from NHS Frontend:

```bash
# From project root (looks for ../nhsuk-frontend by default)
node scripts/generate-nhs-frontend-docs.js

# Or specify custom path
NHS_FRONTEND_PATH=/path/to/nhsuk-frontend node scripts/generate-nhs-frontend-docs.js

# The script will prompt for the path if not found
```

## Repository sgtructure

```
nhs-llm-docs/
├── README.md
├── scripts/
│   └── generate-nhs-frontend-docs.js
├── dist/
│   ├── nhs-frontend-crib-sheet.instructions.md
│   ├── nhs-frontend-detailed-reference.instructions.md
│   └── nhs-prototype-kit-style-guide.instructions.md
└── .gitignore
```

## Requirements

**For using the docs:** None - just copy/paste or upload!

**For regenerating component docs:**
- Node.js 16+
- NHS Frontend repository locally (expects sibling directory: `../nhsuk-frontend`)

## Contributing

Contributions welcome! Open an issue or submit a pull request.

## Related Resources

- [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend) - Component library
- [NHS Design system](https://service-manual.nhs.uk/design-system) - Official design system
- [NHS Prototype kit](https://prototype-kit.service-manual.nhs.uk/) - NHS Prototype kit

## License

MIT
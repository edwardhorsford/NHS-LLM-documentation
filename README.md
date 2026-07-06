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
- [`nhs-frontend-sass-reference.md`](dist/nhs-frontend-sass-reference.md) - LLM-friendly Sass reference (mixins, functions, variables)
- [`nhs-frontend-sass-reference.json`](dist/nhs-frontend-sass-reference.json) - Optional raw Sass documentation with metadata (generated with `--include-json`)

## Using with LLMs

**With GitHub Copilot:** 

1. Add all files from the `/dist` folder to your project in these locations:  
    1. Instruction guide files to `.github/instructions`
    2. References to `docs`
3. Add the following to your `.github/copilot-instructions.md` file to reference them:

```markdown
## NHS design system resources

For NHS Frontend components, patterns, and prototyping guidance, refer to:
- `nhs-frontend-guide.instructions.md` - Core NHS Frontend patterns and best practices
- `nhs-prototype-kit-guide.instructions.md` - Prototyping with Nunjucks
- `docs/nhs-frontend-component-reference.md` - Full component reference (use table of contents to navigate)
- `docs/nhs-frontend-sass-reference.md` - Sass mixins, functions, and variables

When working with NHS components, start with the guides. *Always* consult the component reference when adding NHS components to pages or refactoring so you get the right parameter names and usage. There is a TOC from line 20, or you can directly find components using either "**Macro name:** `macroName`" or `## Macro name`.

For Sass mixins, functions, and variables, use the TOC from line 15 to find any item, then navigate directly to it.
```

**With Claude or ChatGPT:** Add the files to a suitable place in your repo or upload directly to the LLM.

## Regenerating documentation

### Which NHS Frontend version is used?

Both generator scripts read from a local NHS Frontend clone:

- Default path: `../nhsuk-frontend` (relative to this repo root)
- Override path: set `NHS_FRONTEND_PATH=/path/to/nhsuk-frontend`

The generated files include the detected NHS Frontend version, git branch, and commit hash in their metadata/header.

### Updating your local NHS Frontend clone

If you use the default sibling clone, update it before regenerating docs:

```bash
cd ../nhsuk-frontend
git fetch --all --tags
git checkout main
git pull
```

If you want docs for a specific release, checkout the relevant tag/branch in that clone (or point `NHS_FRONTEND_PATH` at another clone), then run the generation scripts in this repository.

### Generate docs from latest released version (recommended for commits to `dist/`)

`main` in `nhsuk-frontend` may contain unreleased `*-internal.*` versions.
To keep `dist/` aligned to the latest public release:

```bash
# Update tags and checkout latest stable release tag
cd ../nhsuk-frontend
git fetch --all --tags
git checkout "$(git tag --sort=-v:refname | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | head -n1)"

# Back in this repo, regenerate docs from that checkout
cd ../nhs-llm-documentation
node scripts/generate-nhs-frontend-component-docs.js
node scripts/generate-nhs-frontend-sass-docs.js
```

Both scripts now refuse to generate from `*-internal.*` versions by default. If you intentionally want internal docs, use `--allow-internal` (or set `ALLOW_INTERNAL_NHS_FRONTEND=1`).

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

# Optional: also output raw JSON alongside markdown
node scripts/generate-nhs-frontend-sass-docs.js --include-json
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
│   ├── nhs-frontend-sass-reference.md
│   ├── nhs-frontend-sass-reference.json (optional)
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

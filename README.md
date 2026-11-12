# NHS LLM documentation

An (unofficial) collection of documentation for building NHS digital services with coding agents like GitHub Copilot and Claude Code. Includes references generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend) and hand-written guidance for the [NHS Prototype kit](https://prototype-kit.service.manual.nhs.uk/).

## Why?

Agents often have incomplete or outdated knowledge of NHS design patterns and components. They guess parameter names and don't know how the prototype kit works. These docs give them the correct names for your version, and the conventions they can't work out for themselves.

## What's included

| Path | What it is |
| --- | --- |
| [`docs/nhsuk-frontend/`](docs/nhsuk-frontend/) | **Generated.** The references, as one folder to copy into your project. |
| [`docs/nhsuk-frontend/index.md`](docs/nhsuk-frontend/index.md) | Lists every component and links to the other references. Agents start here. |
| [`docs/nhsuk-frontend/components/`](docs/nhsuk-frontend/components/) | One file per component, with its parameters and examples. Longer lists of variants are in `components/variants/`. |
| [`docs/nhsuk-frontend/utility-classes.md`](docs/nhsuk-frontend/utility-classes.md) | Every `nhsuk-u-` class and what it does, read from the compiled CSS. |
| [`docs/nhsuk-frontend/sass-reference.md`](docs/nhsuk-frontend/sass-reference.md) | Sass mixins, functions and variables. |
| [`guides/nhs-frontend-guide.instructions.md`](guides/nhs-frontend-guide.instructions.md) | **Written by hand.** NHS Frontend patterns and conventions. |
| [`guides/nhs-prototype-kit-guide.instructions.md`](guides/nhs-prototype-kit-guide.instructions.md) | **Written by hand.** How to build prototypes with the kit. |

## Using it in your project

1. Copy [`docs/nhsuk-frontend/`](docs/nhsuk-frontend/) to `docs/nhsuk-frontend/` in your project.
2. Copy the guides you want from [`guides/`](guides/). For GitHub Copilot, put them in `.github/instructions/`, so that they load automatically for the files they apply to. For other tools, put them wherever you like and change the paths in the text below to match.
3. Add the text below to your instructions file: `.github/copilot-instructions.md` for GitHub Copilot, `CLAUDE.md` for Claude Code, or `AGENTS.md` for most other tools.
4. Commit all of these, so that everyone on your team and their agents get them.

```markdown
## NHS Frontend

This project uses NHS Frontend Nunjucks macros. Your knowledge of NHS Frontend is likely to be out of date, and parameter names from memory are often wrong.

You MUST follow these rules:

- Before adding or changing any NHS component, read its file in `docs/nhsuk-frontend/components/`, for example `docs/nhsuk-frontend/components/button.md`. `docs/nhsuk-frontend/index.md` lists every component.
- Use only the parameters listed in that file. Never guess or invent a parameter.
- Use the macros. Never hand-write component HTML when a macro exists.
- Before using an `nhsuk-u-` class, check it in `docs/nhsuk-frontend/utility-classes.md`.
- Before using a Sass mixin, function or variable, check it in `docs/nhsuk-frontend/sass-reference.md`. Never hard-code colours, spacing or breakpoints.

Before building or changing pages, read `.github/instructions/nhs-frontend-guide.instructions.md`. In a prototype, also read `.github/instructions/nhs-prototype-kit-guide.instructions.md`.
```

For chat tools like Claude.ai or ChatGPT, upload the guides and the component files you need.

Keep the attribution in `docs/nhsuk-frontend/NOTICE.md` if you copy the folder.

## Regenerating the references

You need Node.js 26 (see `.nvmrc`).

```bash
npm install
npm run reference
```

The references describe the version of `nhsuk-frontend` installed here. To document a different version, run `npm install nhsuk-frontend@<version>`, then regenerate. All the data comes from the package, so you don't need a clone of NHS Frontend.

Only `index.md` and the Sass reference mention the version, and there are no dates, so regenerating only changes what really changed.

`npm run reference` finishes by running `npm test`, which fails if:

- a fixture is missing from the docs, unless upstream hides it or it's for a deprecated option
- a generated example doesn't render to the HTML in NHS Frontend's fixtures
- a relative link or heading anchor is broken, or a Sass contents line number is wrong
- a guide names an `nhsuk-u-` class or Sass name that doesn't exist, or a standalone guide example doesn't render

## Keeping it up to date

[`.github/workflows/update-reference.yml`](.github/workflows/update-reference.yml) runs every Monday, and you can also run it by hand. It updates `nhsuk-frontend` to the latest release, regenerates the references, and opens a pull request if anything changed.

For the pull request step to work, turn on **Settings → Actions → General → Allow GitHub Actions to create and approve pull requests**.

The guides are written by hand, so review them when NHS Frontend changes.

## Contributing

Contributions welcome! Open an issue or submit a pull request.

## Related resources

- [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend) - component library
- [NHS design system](https://service-manual.nhs.uk/design-system) - official design system
- [NHS Prototype kit](https://prototype-kit.service.manual.nhs.uk/) - NHS Prototype kit
- [GOV.UK Frontend documentation for coding agents](https://github.com/alextea/govuk-component-documentation) - a similar project for GOV.UK

## Licence

The generator code and guides are released under the MIT licence. The references contain material from NHS Frontend, © NHS England, also released under the MIT licence: see [`NOTICE.md`](docs/nhsuk-frontend/NOTICE.md).

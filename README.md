# Freedom Editor Svelte Code Block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Maintainability](https://api.codeclimate.com/v1/badges/c2c148e63513c9519e9f/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-svelte-code-block/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-svelte-code-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-svelte-code-block?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/480901bc71444456b0f241fbaee86db7)](https://www.codacy.com/manual/winston0410/freedom-editor-svelte-code-block?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-svelte-code-block&utm_campaign=Badge_Grade)

A code block built with [Svelte](https://svelte.dev/) for Freedom Editor.

## Installation

```
npm i @freedom-editor/svelte-code-block
```

## Usage

Import this block to the script where you config Freedom Editor. Create a new instance.

```
import { Code } from '@freedom-editor/svelte-code-block'

const codeBlock = new Code()
```

### Register paragraph block in Freedom Editor instance

Register this block in `options.registeredBlocks`.

```
registeredBlocks: [
  codeBlock
]
```

## API Reference

TODO

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.

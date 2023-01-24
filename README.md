[![npm (scoped)](https://img.shields.io/npm/v/@nasa-jpl/seq-json-schema)](https://www.npmjs.com/package/@nasa-jpl/seq-json-schema)
[![PyPI](https://img.shields.io/pypi/v/seq-json-schema)](https://pypi.org/project/seq-json-schema/)

# seq-json-schema

Standardized [JSON Schema](https://json-schema.org/) for authoring multi-mission sequences.  
You can read the schema definition [here](https://github.com/NASA-AMMOS/seq-json-schema/blob/develop/schema.json).

## JavaScript or TypeScript

### Install

```sh
npm install @nasa-jpl/seq-json-schema --save
```

### Basic Usage

```ts
import seqSchema from '@nasa-jpl/seq-json-schema/schema.json' assert { type: 'json' };
console.log(seqSchema);
```

### TypeScript Types

This library also ships with automatically generated TypeScript types from the schema. For example:

```ts
import type { Command, SeqJson } from '@nasa-jpl/seq-json-schema/types';

const command: Command = {
  args: [],
  stem: 'SEND_DATA',
  time: { type: 'COMMAND_COMPLETE' },
  type: 'command',
};

const seqJson: SeqJson = {
  id: 'sequence0',
  metadata: {},
  steps: [command],
};

console.log(seqJson);
```

## Python

### Install

```sh
pip install seq-json-schema
```

### Basic Usage

```py
import importlib.resources
import json

with importlib.resources.path('seq-json-schema', 'schema.json') as schemaPath:
  file = open(schemaPath)
  schema = json.load(file)
  print(schema)
```

Note if you are using a Python version lower than 3.7 you will have to import the schema using the [importlib-resources](https://pypi.org/project/importlib-resources/) library.

[![npm (scoped)](https://img.shields.io/npm/v/@nasa-jpl/seq-json-schema)](https://www.npmjs.com/package/@nasa-jpl/seq-json-schema)
[![PyPI](https://img.shields.io/pypi/v/seq-json-schema)](https://pypi.org/project/seq-json-schema/)

# seq-json-schema

Standardized [JSON Schema](https://json-schema.org/) for authoring multi-mission sequences. You can read the schema definition [here](https://github.com/NASA-AMMOS/seq-json-schema/blob/develop/schema.json).  
You can use our [validation site](https://nasa-ammos.github.io/seq-json-schema/) to validate a `.seq.json` document against the latest schema.

## Why a Sequence Schema?

Spacecraft are often controlled via sets of time ordered commands called sequences. Although spacecraft are built with a variety of different on-board flight softwares, each of which have different commanding interfaces, there are sufficient commonalities between these interfaces to justify creating a common sequencing specification that works for a number of flight software types.  

If organizations must support operating different missions with different flight software, operators can use this common specification (with potential customization) for these different missions. Operators would author and transport the set of commands they want to send to the spacecraft in this common specification and then perform a final translation from this specification to the format required by the flight software for final verification.

## Propose a Change

Interested in proposing a change to the schema? Begin by writing a [change request issue](https://github.com/NASA-AMMOS/seq-json-schema/issues). 

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

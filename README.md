# seq-json-schema

Standardized [JSON Schema](https://json-schema.org/) for authoring multi-mission sequences.  
You can read the schema definition [here](./schema.json).

## JavaScript or TypeScript

### Install

```sh
npm install seq-json-schema --save
```

### Basic Usage

```ts
import * as seqSchema from 'seq-json-schema/schema.json';
console.log(seqSchema);
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

If you happen to work on a python version lower than 3.7, you will have to install it as [importlib-resources](https://pypi.org/project/importlib-resources/) from PyPI.

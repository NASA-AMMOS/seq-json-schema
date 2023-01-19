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

Note if you are using a Python version lower than 3.7 you will have to import the schema using the [importlib-resources](https://pypi.org/project/importlib-resources/) library.

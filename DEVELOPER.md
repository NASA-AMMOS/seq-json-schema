# SeqJSON Schema Developer Docs

## Overview

This repository version controls the SeqJSON schema and generates libraries to access the schema in TS/JS and Python via NPM and PyPI packages, respectively. The NPM package distribution provides a Typescript library with auto-generated types and interfaces from the schema. A [Github Pages website](https://nasa-ammos.github.io/seq-json-schema/) ([`static-valdiation-site/`](static-validation-site/)) provides an easy way for SeqJSON authors to validate their sequences against the schema.

## Developer Workflow

Once a change request has been approved for implementation and a developer has been assigned (see [Governance](GOVERNANCE.md)), make schema changes directly to [`schema.json`](schema.json). Updates to either the schema or the distribution packages merit version increments according to the [Symantic Versioning](https://semver.org/) standard. The Pull Request which makes the specified changes should increment the version in the following places:

- [`package.json`](package.json)
- [`package-lock.json`](package-lock.json)
- [`schema.json`](schema.json) (in the `$id` property)

The Python package dynamically retrieves the version from [`package.json`](package.json).

## Deployment Workflow

Once a Pull Request with changes and a version increment has been merged, create a new Github Release with a version number tag of the form `vX.X.X`. This will trigger Github Actions to build and deploy the NPM and PyPI packages. The included script [`generate-types.js`](scripts/generate-types.js) auto-generates the `types.ts` file used in the NPM distribution.

Github Pages is automatically deployed on any push to `develop`.

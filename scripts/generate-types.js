import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

/**
 * Patches the types generated from 'json-schema-to-typescript' since the library has bugs.
 * @param {string} types
 * @return {string}
 */
function patchTypes(types) {
  // Remove the 'Request1' object since the library does not generate the
  // correct type for the request 'oneOf' in the schema.
  // See: https://github.com/bcherny/json-schema-to-typescript/issues/381
  types = types.replace(/ \& Request1/, '');
  types = types.replace(
    `export type Request1 =\n  | {\n      [k: string]: unknown;\n    }\n  | {\n      [k: string]: unknown;\n    };\n`,
    '',
  );

  // Update the main interface so the base type is named 'SeqJson'.
  // This is needed because there is no other way to configure the
  // base type name as the library pulls it from the $id field.
  types = types.replace(/export interface HttpsGithubComNASAAMMOSSeqJsonSchemaTree.* {/, 'export interface SeqJson {');

  return types;
}

async function main() {
  let types = await compileFromFile('schema.json');
  types = patchTypes(types);
  writeFileSync('types.ts', types);
}

main();

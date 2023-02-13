import Ajv from 'ajv/dist/2020.js';
import schema from '../schema.json' assert { type: 'json' };
import { readdirSync, readFileSync } from 'fs';
import { exit } from 'process';

function test() {
  const validate = new Ajv({ strict: false }).compile(schema);
  const validSeqJsonPath = './test/valid-seq-json';
  const validSeqJsonFiles = readdirSync(validSeqJsonPath);
  const invalidSeqJsonPath = './test/invalid-seq-json';
  const invalidSeqJsonFiles = readdirSync(invalidSeqJsonPath);
  const errors = [];

  // Valid Seq JSON.
  for (const validSeqJsonFile of validSeqJsonFiles) {
    const validSeqJson = readFileSync(`${validSeqJsonPath}/${validSeqJsonFile}`).toString();
    const valid = validate(JSON.parse(validSeqJson));
    if (!valid) errors.push(`${validSeqJsonFile} should be valid`);
  }

  // Invalid Seq JSON.
  for (const invalidSeqJsonFile of invalidSeqJsonFiles) {
    const invalidSeqJson = readFileSync(`${invalidSeqJsonPath}/${invalidSeqJsonFile}`).toString();
    const valid = validate(JSON.parse(invalidSeqJson));
    if (valid) errors.push(`${invalidSeqJsonFile} should be invalid`);
  }

  if (errors.length) {
    console.log('❌ Some tests failed...');
    console.error(errors);
    exit(1);
  } else {
    console.log('✅ All tests passed!');
  }
}

test();

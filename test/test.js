import Ajv from 'ajv/dist/2020.js';
import schema from '../schema.json' assert { type: 'json' };
import { readdirSync, readFileSync } from 'fs';
import { exit } from 'process';

function test() {
  const ajv = new Ajv({
    strict: false,
    verbose: true,
  });
  const validate = ajv.compile(schema);
  const validSeqJsonPath = './test/valid-seq-json';
  const validSeqJsonFiles = readdirSync(validSeqJsonPath);
  const invalidSeqJsonPath = './test/invalid-seq-json';
  const invalidSeqJsonFiles = readdirSync(invalidSeqJsonPath);
  const failures = [];

  // Valid Seq JSON.
  for (const validSeqJsonFile of validSeqJsonFiles) {
    const validSeqJson = readFileSync(`${validSeqJsonPath}/${validSeqJsonFile}`).toString();
    const valid = validate(JSON.parse(validSeqJson));
    if (!valid) {
      // most relevant errors tend to be at the bottom - reverse list
      const errors = validate.errors.reverse();
      console.error(`❌ Failed to validate ${validSeqJsonFile} - ${errors.length} errors:`);
      console.log(errors);
      failures.push(`${validSeqJsonFile} should be valid`);
    }
  }

  // Invalid Seq JSON.
  for (const invalidSeqJsonFile of invalidSeqJsonFiles) {
    const invalidSeqJson = readFileSync(`${invalidSeqJsonPath}/${invalidSeqJsonFile}`).toString();
    const valid = validate(JSON.parse(invalidSeqJson));
    if (valid) {
      console.error(`❌ Failed to invalidate ${invalidSeqJsonFile} - expected errors`);
      failures.push(`${invalidSeqJsonFile} should be invalid`);
    }
  }

  if (failures.length) {
    console.log(`❌ ${failures.length} tests failed...`);
    console.error(failures);
    exit(1);
  } else {
    console.log('✅ All tests passed!');
  }
}

test();

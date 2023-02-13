from jsonschema import validate, ValidationError
from json import load
from os import listdir

def test():
  schema = load(open('schema.json'))
  validSeqJsonPath = './test/valid-seq-json'
  validSeqJsonFiles = listdir(validSeqJsonPath)
  invalidSeqJsonPath = './test/invalid-seq-json'
  invalidSeqJsonFiles = listdir(invalidSeqJsonPath)
  errors = []

  for validSeqJsonFile in validSeqJsonFiles:
    validSeqJson = load(open(f'{validSeqJsonPath}/{validSeqJsonFile}'))
    try:
      validate(instance=validSeqJson, schema=schema)
    except ValidationError:
      errors.append(f'{validSeqJsonFile} should be valid')

  for invalidSeqJsonFile in invalidSeqJsonFiles:
    invalidSeqJson = load(open(f'{invalidSeqJsonPath}/{invalidSeqJsonFile}'))
    try:
      validate(instance=invalidSeqJson, schema=schema)
      errors.append(f'{invalidSeqJsonFile} should be invalid')
    except ValidationError:
      continue

  if len(errors):
    print('❌ Some tests failed...')
    print(errors)
    exit(1)
  else:
    print('✅ All tests passed!')
    exit(0)

test()

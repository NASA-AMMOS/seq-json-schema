from json import loads
from pathlib import Path
from setuptools import setup

this_directory = Path(__file__).parent
long_description = (this_directory / 'README.md').read_text()

with open(this_directory / 'package.json', 'r') as f:
  package_json = f.read()

version = loads(package_json).get('version')

setup(
  author='camargo',
  author_email='Christopher.A.Camargo@jpl.nasa.gov',
  description='Standardized JSON Schema for authoring multi-mission sequences',
  include_package_data=True,
  long_description=long_description,
  long_description_content_type='text/markdown',
  name='seq-json-schema',
  packages=['seq-json-schema'],
  url='https://github.com/NASA-AMMOS/seq-json-schema',
  version=version
)

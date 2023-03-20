<script lang="ts">
  import { json } from '@codemirror/lang-json';
  import type { ViewUpdate } from '@codemirror/view';
  import Ajv from 'ajv/dist/2020.js';
  import { basicSetup, EditorView } from 'codemirror';
  import { onMount } from 'svelte';
  import seqJsonSchema from '../../../schema.json';
  import validSeqJson from '../../../test/valid-seq-json/minimum-fields.seq.json';

  const validate = new Ajv({ strict: false }).compile(seqJsonSchema);

  let clientHeight: number;
  let editorErrorsDiv: HTMLDivElement;
  let editorErrorsView: EditorView;
  let editorInputDiv: HTMLDivElement;
  let errors = '';

  onMount(() => {
    const theme = EditorView.theme({ '.cm-gutter': { 'min-height': `${clientHeight}px` } });

    editorErrorsView = new EditorView({
      doc: '',
      extensions: [basicSetup, json(), EditorView.lineWrapping, EditorView.editable.of(false), theme],
      parent: editorErrorsDiv,
    });

    new EditorView({
      doc: JSON.stringify(validSeqJson, null, 2),
      extensions: [basicSetup, json(), EditorView.lineWrapping, EditorView.updateListener.of(updateListener), theme],
      parent: editorInputDiv,
    });
  });

  function updateListener(e: ViewUpdate) {
    const input = e.state.doc.toString();

    try {
      const valid = validate(JSON.parse(input));

      if (!valid) {
        errors = JSON.stringify(validate.errors, null, 2);
      } else {
        errors = 'No Errors';
      }
    } catch (e) {
      const error = e as Error;
      errors = `"${error.message}"`;
    }

    editorErrorsView.dispatch({
      changes: { from: 0, to: editorErrorsView.state.doc.length, insert: errors },
    });
  }
</script>

<div class="grid" bind:clientHeight>
  <div class="grid-left">
    <div bind:this={editorInputDiv} />
  </div>
  <div class="grid-right">
    <div bind:this={editorErrorsDiv} />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  .grid-left,
  .grid-right {
    overflow: scroll;
  }
</style>

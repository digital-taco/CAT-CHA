<script>
  // @ts-nocheck
  import * as axios from 'axios';
  import ImageGrid from './ImageGrid.svelte';
  import Instructions from './Instructions.svelte';
  import Actions from './Actions.svelte';

  async function getCatAssets() {
    const { data } = await axios.get('/api/cats/validation-set');
    return data;
  }
  let promise = getCatAssets();
</script>

<div>
  {#await promise then data}
    <Instructions>{data.prompt}</Instructions>
    <ImageGrid cats="{data.assets}" />
    <Actions />
  {/await}
</div>

<style>
  * {
    --border-radius: 12px;
  }
</style>

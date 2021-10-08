<script>
  import ImageGrid from './ImageGrid.svelte';
  import Instructions from './Instructions.svelte';
  import Actions from './Actions.svelte';
</script>

<div>
  <Instructions />
  <ImageGrid />
  <Actions />
</div>

<style>
  * {
    --border-radius: 12px;
  }
</style>

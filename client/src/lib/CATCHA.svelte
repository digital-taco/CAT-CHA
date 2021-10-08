<script>
  import ImageGrid from './ImageGrid.svelte';
  import Instructions from './Instructions.svelte';
  import Skip from './Refresh.svelte';
</script>

<div>
  <Instructions />
  <ImageGrid />
  <Skip />
</div>

<style>
  * {
    --border-radius: 12px;
  }
</style>

<script>
  // @ts-nocheck
  import ImageContainer from './ImageContainer.svelte';

  export let cats = [];
</script>

<div class="grid">
  {#each cats as asset}
    <ImageContainer image="{asset.url}" />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    width: fit-content;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 4px;
    margin: 4px 0;
  }
</style>

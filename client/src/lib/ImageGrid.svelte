<script>
  import ImageContainer from './ImageContainer.svelte';

  const tempCat = 'https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg';
</script>

<div class="grid">
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
  <ImageContainer image="{tempCat}" />
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

<script lang="ts">
  import { selectedImages } from './stores';

  export let asset: {
    url: string;
    id: string;
  };

  let isSelected = false;

  selectedImages.subscribe((newSelectedImages) => {
    isSelected = Object.keys(newSelectedImages).includes(asset.id);
  });

  const handleClick = () => {
    selectedImages.update((curr: Record<string, boolean>) => {
      const currKeys = Object.keys(curr);
      const newSelectedImages = { ...curr };
      if (currKeys.includes(asset.id)) {
        delete newSelectedImages[asset.id];
      } else {
        newSelectedImages[asset.id] = true;
      }
      return newSelectedImages;
    });
  };
</script>

<div
  class="image-container"
  style="background-image: url({asset.url})"
  data-selected="{isSelected}"
  on:click="{handleClick}"
></div>

<style>
  .image-container {
    height: 140px;
    width: 140px;
    border-radius: var(--border-radius);
    background: #11111109;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: fill;
    cursor: pointer;
    transition: all 0.1s;
    box-sizing: border-box;
  }

  .image-container:hover {
    filter: brightness(0.95);
  }

  .image-container[data-selected='true'],
  .image-container:active {
    border: solid 4px rgb(0, 217, 255);
    backdrop-filter: brightness(0.7);
    transform: scale(0.965);
  }
</style>

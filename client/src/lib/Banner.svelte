<script>
  export let background = '';
  export let color = 'black';
  export let backgroundImage = '';
</script>

<div
  class="banner"
  style="background: {background}; color: {color}; background-image: {backgroundImage}; border: {background
    ? 'none'
    : 'solid 1px #1111'}"
>
  <!-- The empty div gives it a fallback that will still occupy the left side of the banner -->
  <slot><div></div></slot>
  <slot name="right-side" />
</div>

<style>
  .banner {
    padding: 20px;
    font-size: 16px;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: space-between;
  }
</style>

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
  <div class="top-row">
    <!-- The empty div gives it a fallback that will still occupy the left side of the banner -->
    <slot name="left-side" />
    <slot name="right-side" />
  </div>
  <slot name="sub-text" />
</div>

<style>
  .banner {
    padding: 20px;
    font-size: 16px;
    border-radius: var(--border-radius);
  }

  .top-row {
    display: flex;
    justify-content: space-between;
  }
</style>

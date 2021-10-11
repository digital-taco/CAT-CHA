<!-- Component for centering the demo of this whole circus -->
<svelte:head>
  <title>CAT-CHA Demo</title>
</svelte:head>

<div class="demo">
  <slot />
</div>

<style>
  .demo {
    display: flex;
    justify-content: center;
    margin-top: 20vh;
  }
</style>

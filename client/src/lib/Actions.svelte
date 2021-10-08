<script>
  import Banner from './Banner.svelte';
  import Button from './Button.svelte';
</script>

<Banner>
  <div slot="right-side" class="button-row">
    <Button emphasis="low">Refresh</Button>
    <Button emphasis="high">Verify</Button>
  </div>
</Banner>

<style>
  .button-row {
    display: flex;
    gap: 8px;
  }
</style>

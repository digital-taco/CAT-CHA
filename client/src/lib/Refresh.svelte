<script>
  import Banner from './Banner.svelte';
</script>

<Banner>
  <button slot="right-side" class="refresh-button">Refresh</button>
</Banner>

<style>
  .refresh-button {
    all: unset;
    color: #009ffd;
    cursor: pointer;
    transition: 0.05s;
    border-radius: var(--border-radius);
    padding: 8px 12px;
  }
  .refresh-button:hover {
    background: #00000005;
    color: #2a2a72;
  }
</style>

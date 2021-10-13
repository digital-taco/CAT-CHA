<script lang="ts">
  import Banner from './Banner.svelte';
  export let instructions: string;
</script>

<Banner
  color="white"
  background="#2a2a72"
  backgroundImage="linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
>
  <svelte:fragment slot="left-side">{instructions}</svelte:fragment>
</Banner>

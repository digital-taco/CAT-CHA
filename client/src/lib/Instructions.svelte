<script>
  import Banner from './Banner.svelte';
</script>

<Banner
  color="white"
  background="#2a2a72"
  backgroundImage="linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
>
  <slot />
</Banner>

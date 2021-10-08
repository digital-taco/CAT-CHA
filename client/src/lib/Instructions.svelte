<script>
  import Banner from './Banner.svelte';
  export let instructions = 'Instructions go here';
</script>

<Banner
  color="white"
  background="#2a2a72"
  backgroundImage="linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
>
  {instructions}
</Banner>
<!-- background-color: #2a2a72; -->
<!-- background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%); -->

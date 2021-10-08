<script>
  export let image;
</script>

<div class="image-container" style="background-image: url({image})">
  <!-- This isn't what we'll actually put here, I just wanted to show that copilot thought I was working in PHP -->
  <!-- <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" /> -->
</div>

<style>
  .image-container {
    height: 140px;
    width: 140px;
    border-radius: 12px;
    background: #11111109;
    background-position: center;
    background-size: cover;
    object-fit: fill;
  }
</style>

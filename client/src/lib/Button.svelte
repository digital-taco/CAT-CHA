<script lang="ts">
  type Emphasis = 'low' | 'high';

  export let emphasis: Emphasis = 'low';
</script>

<!-- $$restProps is a svelte var for "any props that aren't declared above" -->
<button class="button {emphasis}" {...$$restProps}><slot /></button>

<style>
  .button {
    all: unset;
    color: #009ffd;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 4px;
    padding: 10px 14px;
  }
  .button:hover {
    background: #00000005;
  }
  .button.high {
    background: #009ffd;
    color: white;
  }
  .button.high:hover {
    background: #2a2a72;
  }
  .button:active {
    filter: brightness(1.2);
  }
</style>

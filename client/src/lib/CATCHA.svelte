<script>
  // @ts-nocheck
  import * as axios from 'axios';
  import ImageGrid from './ImageGrid.svelte';
  import Instructions from './Instructions.svelte';
  import Actions from './Actions.svelte';
  import Confetti from './Confetti.svelte';
  import { validationSet, attemptMessage } from './stores';
  import { getValidationSet } from './service';

  getValidationSet();
</script>

<div style="position: relative;">
  {#if $validationSet?.validationId}
    {#if $attemptMessage === 'Correct!'}
      <Confetti />
    {/if}
    <Instructions instructions="{$validationSet.prompt}" />
    <ImageGrid cats="{$validationSet.assets}" />
    <Actions />
  {/if}
</div>

<style>
  * {
    --border-radius: 12px;
  }
</style>

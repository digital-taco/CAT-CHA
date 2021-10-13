<script>
  // @ts-nocheck
  import * as axios from 'axios';
  import ImageGrid from './ImageGrid.svelte';
  import Instructions from './Instructions.svelte';
  import Actions from './Actions.svelte';
  import { validationSet } from './stores';
  import { getValidationSet } from './service';

  getValidationSet();
</script>

<div>
  {#if $validationSet?.validationId}
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

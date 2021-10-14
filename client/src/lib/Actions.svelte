<script>
  // @ts-nocheck

  import Banner from './Banner.svelte';
  import Button from './Button.svelte';
  import { selectedImages, validationSet, attemptMessage } from './stores';
  import { getValidationSet, verifySelectedImages } from './service';

  let verifying = false;
  let refreshing = false;

  const handleRefresh = async () => {
    refreshing = true;
    await getValidationSet();
    refreshing = false;
    selectedImages.set({});
    $attemptMessage = undefined;
  };

  const handleVerify = async () => {
    verifying = true;
    const result = await verifySelectedImages(
      $selectedImages,
      $validationSet.validationId
    );
    verifying = false;

    const { status, retry, message } = result;

    $attemptMessage = message;
    if (status === 'FAILED' || status === 'EXPIRED') {
      validationSet.set(retry);
      selectedImages.set({});
    }
  };
</script>

<Banner>
  <div slot="left-side">
    {#if $attemptMessage}
      <div class="retry-text">{$attemptMessage}</div>
    {/if}
  </div>
  <div slot="right-side" class="button-row">
    <Button emphasis="low" on:click="{handleRefresh}" disabled="{refreshing}">
      {refreshing ? 'Refreshing...' : 'Refresh'}
    </Button>
    <Button
      emphasis="high"
      on:click="{handleVerify}"
      disabled="{verifying || Object.keys($selectedImages).length === 0}"
    >
      {verifying ? 'Checking...' : 'Verify'}
    </Button>
  </div>
</Banner>

<style>
  .button-row {
    display: flex;
    gap: 8px;
  }
  .retry-text {
    text-align: right;
    margin-top: 12px;
    font-size: 14px;
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    .button-row {
      justify-content: flex-end;
    }
    .retry-text {
      margin-bottom: 20px;
    }
  }
</style>

<script>
  import PageTitle from '../components/blocks/PageTitle.svelte';
  import Markdown from '../components/blocks/Markdown.svelte';
  import hiw from '../_contents/how-it-works.md';
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
  .content :global(.markdown) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1em;
    :global( > *) {
      grid-column: span 2;
    }
  }
  .content :global(.markdown table) {
    grid-column: span 3;
    margin-top: 1em;
    padding: 1em;
    border: 1px solid var(--border-color);
    box-shadow: var(--backlight);
    border-radius: 0.5rem;
    overflow: hidden;
    @include min-width($breakpoint-md) {
      grid-column: span 1; 
    }
    &, :global(tr), :global(thead), :global(tbody), :global(td), :global(th) {
      display: block;
    }
    :global(th),
    :global(td) {
      border: none;
      padding: 0;
      margin-bottom: 1em;
    }
    :global(th:first-child) {
      display: none;
    }
    :global(th) {
      padding: 1em;
      margin: -1em -1em 1em;
      font-family: var(--title-font);
      background: var(--dark-gray);
      text-align: center;
    }
    :global(td:first-child) {
      font-weight: bold;
      font-family: var(--title-font);
    }
  }
  .actions {
    margin-top: 2.5em;
    text-align: center;
    a {
      margin: 0.25em;
    }
  }
</style>

<svelte:head>
	<title>Membership Tiers - Angels Of Ares - Algorand Investment Club</title>
</svelte:head>

<PageTitle>
  <h1 class="page-title">
    Membership Tiers
  </h1>
</PageTitle>

<div class="container">
  <div class="content">
    <Markdown content={hiw} />
  </div>
  <div class="actions">
    <a class="primary-btn" target="_blank" href="https://app.humble.sh/swap?poolId=810058782&asset_in=0&asset_out=466716175">
      Get Tokens
    </a>
    <a class="primary-btn" target="_blank" href="https://app.humble.sh/pool/add/810058782">
      Add Liquidity
    </a>
  </div>
</div>
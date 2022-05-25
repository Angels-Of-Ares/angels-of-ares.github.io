<script>
  import Markdown from '../components/blocks/Markdown.svelte'
  import hiw from '../_contents/how-it-works.md'
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
  .content :global(.markdown) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1em;
    :global( > *) {
      grid-column: span 3;
    }

  }
  .content :global(.markdown table) {
    grid-column: span 3;
    margin-top: 1em;
    padding: 1em;
    border: 1px solid var(--border-color);
    box-shadow: var(--backlight);
    border-radius: 0.5rem 0.5rem 0 0.5rem;
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
    }
    :global(td:first-child) {
      font-weight: bold;
      font-family: var(--title-font);
    }
  }
</style>

<svelte:head>
	<title>How It Works - Angels Of Ares - Algorand Investment Club</title>
</svelte:head>

<div class="container">
  <h1 class="page-title">
    How It Works
  </h1>
  <div class="content">
    <Markdown content={hiw} />
  </div>
</div>
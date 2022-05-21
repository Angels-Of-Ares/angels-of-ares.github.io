<script>
  import Markdown from '../components/blocks/Markdown.svelte'
  import ghost from '../_contents/ghost-token.md'
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
  .content {
    position: relative;
    :global(.markdown) {
      columns: 1;
      @include min-width($breakpoint-md) {
        columns: 2;   
      }
      :global(> *:last-child) {
        margin-bottom: 0;
      }
    }
  }
  .cta {
    margin-top: 3em;
    text-align: center;
  }
  .ghost-logo {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    animation: ghosting 10s infinite both ease;
  }

  $steps: 100;
  $opacity: 18;
  @keyframes ghosting {
    0% {
      opacity: 0;
    }
    @for $i from 0 to $steps {
      $step: ((100% / $steps) * $i);
      #{$step} {
        opacity: random($opacity) / 100;
      }
    }
    100% {
      opacity: 0;
    }
  }
</style>

<svelte:head>
	<title>Ghost Token - Angels Of Ares - Algorand Investment Club</title>
</svelte:head>

<div class="container">
  <h1 class="page-title">
    Ghost Token
  </h1>
  <div class="content">
    <img src="/images/ghost-logo.svg" alt="Ghost Token Logo" class="ghost-logo" />
    <Markdown content={ghost} />
    <div class="cta">
      <a href="https://tinychart.org/asset/714773890" target="_blank" class="primary-btn">
        Do not press!
      </a>
    </div>
  </div>
</div>
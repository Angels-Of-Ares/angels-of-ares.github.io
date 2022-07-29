<script>
  import Markdown from '../components/blocks/Markdown.svelte'
  import ghost from '../_contents/ghost-token.md'
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
  .page-title {
    .ghost-logo {
      display: inline-block;
      height: 0.875em;
      margin: -0.1em 0.125em 0 0;
    }
    span {
      display: block;
      @include min-width($breakpoint-md) {
        display: inline;   
      }
    }
  }
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
      :global(:first-child) {
        margin-top: 0;
      }
    }
  }
  .actions {
    margin-top: 2.5em;
    text-align: center;
    a {
      margin: 0.25em;
    }
  }
  .ghost-bg {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    animation: ghosting 20s infinite both ease;
  }

  $steps: 100;
  $opacity: 50;
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
	<title>Ghost Token - Angels Of Ares - Invest. Earn. Build.</title>
</svelte:head>

<div class="container">
  <h1 class="page-title">
    <img class="ghost-logo" src="/images/ghost-logo.svg" alt="Ghost logo" />
    <span>
      Ghost Token
    </span>
  </h1>
  <div class="content">
    <img src="/images/ghost-logo-gradient.svg" alt="Ghosting in the background" class="ghost-bg" />
    <Markdown content={ghost} />
    <div class="actions">
      <a href="https://www.nftexplorer.app/collection/ghosts-of-algo" target="_blank" class="primary-btn">
        Do Not Press!
      </a>
      <a href="https://vestige.fi/asset/714773890" target="_blank" class="primary-btn">
        Definitely Do Not Press!
      </a>
    </div>
  </div>
</div>
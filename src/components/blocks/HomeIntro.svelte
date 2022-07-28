<script>
  import Markdown from './Markdown.svelte'
  import intro from '../../_contents/intro.md'
</script>

<style lang="scss">
  .intro {
    min-height: 66vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -20%;
      bottom: -20%;
      z-index: -1;
      left: 0;
      right: 0;
      background: url(/images/wings-bg.jpg) no-repeat center center;
      background-size: contain;
      animation: bg-appear 8s ease-out both 1s;
    }
  }
  :global(h1) {
    animation: text-appear 5s ease-out both 0s;
  }

  // animation
  @mixin appear($name, $initial-scale) {
    @keyframes #{$name}{
      0% {
        transform: scale($initial-scale);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  @include appear(bg-appear, 0.5);
  @include appear(text-appear, 0.875);
</style>


<div class="intro">
  <div class="container">
    <Markdown content={intro} />
  </div>
</div>

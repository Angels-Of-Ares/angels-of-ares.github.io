<script>
  import NavLinks from '../layout/NavLinks.svelte';
</script>

<style lang="scss">
  .desktop {
    & :global(a) {
      padding: 0.5em 0;
      margin: 0 1em;
    }
    & :global(ul),
    & :global(li) {
      display: inline-block;
    }
    // main nav item
    & :global(.item) {
      position: relative;
    }
    & :global(.item > a) {
      font-weight: bold;
    }
    & :global(.item:hover > a:after) {
      opacity: 1;
      transform: scaleX(0.1);
    }
    & :global(.item > a:hover:after) {
      opacity: 1;
      transform: scaleX(1);
    }
    // Subnav
    & :global(.subnav) {
      position: absolute;
      z-index: -1;
      left: 50%;
      top: -2rem;
      padding: 5rem 1rem 1rem;
      background: var(--black);
      box-shadow: 0 1em 10em -1em rgba(#ffffff, 0.5);
      opacity: 0;
      transform: translate(-50%, -1rem);
      pointer-events: none;
      transition: 
                  opacity 240ms linear 0ms,
                  transform 240ms ease 0ms,
                  pointer-events 0ms linear 240ms;
    }
    & :global(.item:hover .subnav) {
      opacity: 1;
      pointer-events: all;
      transform: translate(-50%, 0);
      transition-delay: 120ms 120ms 0;
    }
    & :global(.subitem) {
      display: block;
      font-size: 0.875em;
    }
    // social
    & :global(.social > a) {
      display: none;
    }
    & :global(.social .subnav a) {
      margin: 0;
      padding: 0.5em 0.5em;
    }
    & :global(.social .subnav) {
      display: inline-block;
      position: relative;
      top: auto;
      left: auto;
      z-index: 0;
      padding: 0;
      opacity: 1;
      transform: none;
      box-shadow: none;
      transition: none;
      pointer-events: all;
    }
    & :global(.social:hover .subnav) {
      transform: none;
      box-shadow: none;
    }
  }
</style>

<div class="desktop">
  <NavLinks />
</div>
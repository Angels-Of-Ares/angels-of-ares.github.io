<script>
  import { fly } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
  import NavLinks from '../layout/NavLinks.svelte';
  export let active = false;
  
  function toggle() {
    active = !active;
  }
  function menuClicked(e) {
    if ((e.path || (e.composedPath && e.composedPath()) || []).some(node => node.nodeName === 'A')) {
      active = false;
    }
  }
</script>

<style lang="scss">
  .toggle {
    position: relative;
    z-index: 1;
    i {
      font-size: 1.5em;
      margin: 0;
    }
  }
  .mobile {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    padding: 6em 2em 2em;
    overflow: auto;
    background: var(--black);
    
    & :global(.subnav) {
      padding-left: 1em;
    }
    & :global(.item) {
      font-weight: bold;
      margin-bottom: 1em;
    }
    & :global(.subitem) {
      font-weight: normal;
    }
    & :global(a) {
      padding: 0.5em 0;
    }
    & :global(.social .subnav a) {
      padding: 0.5em; 
    }
  }
</style>

<button class="toggle ghost-btn" on:click|preventDefault={toggle}>
  {#if active}
    <i class="fas fa-times"></i>
  {:else}
    <i class="fas fa-bars"></i>
  {/if}
</button>

{#if active}
  <div 
    class="mobile" 
    on:click={menuClicked}
    transition:fly={{
      duration: 600, 
      x: 0, 
      y: -100, 
      opacity: 0, 
      easing: circInOut
    }}
  >
    <NavLinks />
  </div>
{/if}
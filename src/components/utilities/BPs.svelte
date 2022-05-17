<script>
  import { onMount } from 'svelte';
  //  { 
  //    media: <media query string>,
  //    component: Component,
  //  }

  export let bps = [];
  let mqs = [];
  onMount(initEvents);

  function initEvents() {
    bps.forEach(bp => {
      mqs.push({
        ...bp,
        active: false, 
      })
      const mq = window.matchMedia(`${bp.media}`);
      mq.addListener(checkBP);
      checkBP(mq);
    });
  }

  function checkBP (e) {
    const mq = mqs.find(mq => mq.media === e.media);
    if (!mq) return;
    mq.active = e.matches;
    mqs = mqs;
  }
</script>


<style lang="scss">
  
</style>


{#each mqs as mq (mq.media)}
  {#if mq.active}
    <svelte:component this={mq.component}/>
  {/if}
{/each}
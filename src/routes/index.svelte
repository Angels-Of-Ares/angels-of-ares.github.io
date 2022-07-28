<script>
  import Intro from '../components/blocks/HomeIntro.svelte';
  import WingsNFT from '../components/blocks/WingsNFT.svelte';
  import WhatWeDo from '../components/blocks/WhatWeDo.svelte';
</script>


<style lang="scss">
  .container {
    text-align: center;
    margin-top: -2rem;
  }  
</style>

<svelte:head>
	<title>Angels Of Ares - Invest. Earn. Build.</title>
</svelte:head>

<Intro />
<WhatWeDo />
<WingsNFT />

<div class="container">
  <a class="primary-btn" href="/membership">
    How It Works
  </a>
</div>
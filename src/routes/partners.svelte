<script>
  import partners from '../_contents/partners';
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
</style>

<svelte:head>
	<title>Partnered Projects - Angels Of Ares - Algorand Investment Club</title>
</svelte:head>

<div class="container">
  <h1 class="page-title">
    Partnered Projects
  </h1>
  <div class="content">
    <ul>
      {#each partners as partner}
        <li class="partner">
          <h2 class="title">
            { partner.title }
          </h2>
          <p class="description">
            { partner.description }
          </p>
        </li>
      {/each}
    </ul>
  </div>
</div>
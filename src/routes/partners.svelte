<script>
  import partners from '../_contents/partners';
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
  .partner {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
    .content {
      width: 80%;
      padding: 2em 0;
      @include min-width($breakpoint-md) {
        width: 60%;
        padding: 2em;
      }
    }
    .btn {
      font-size: 0.75em;
    }
    .image-card-wrapper {
      width: 80%;
      @include min-width($breakpoint-md) {
        width: 40%;
      }
    }
    .image-card {
      transform: perspective(64rem) rotateY(0deg);
      transition: transform 800ms ease;
    }
    &:hover .image-card {
      transform: perspective(64rem) rotateY(24deg);
    }
  }
</style>

<svelte:head>
	<title>Partnered Projects - Angels Of Ares - Algorand Investment Club</title>
</svelte:head>

<div class="container">
  <h1 class="page-title">
    Partnered Projects
  </h1>
  <ul>
    {#each partners as partner}
      <li class="partner">
        <div class="image-card-wrapper">
          <div class="image-card">
            <img src={partner.image} alt={partner.title} />
          </div>
        </div>
        <div class="content">
          <h2 class="title">
            { partner.title }
          </h2>
          <p class="description">
            { partner.description }
          </p>
          <div class="actions">
            {#if partner.collection }
              <a href={partner.collection} class="btn" target="_blank">
                Collection
              </a>
            {/if}
            {#if partner.website }
              <a href={partner.website} class="btn" target="_blank">
                Website
              </a>
            {/if}
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
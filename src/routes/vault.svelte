<script>
  import PageTitle from '../components/blocks/PageTitle.svelte';
  import Markdown from '../components/blocks/Markdown.svelte';
  import vault from '../_contents/vault-pfps.md';
  import pfps from '../_contents/pfps.js';
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
  .item {
    grid-column: span 1;
    position: relative;
    .pfp {
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        position: relative;
      }
    }
    .title {
      color: var(--white);
      font-family: var(--title-font);
      font-weight:bold;
      text-align: center;
      text-decoration: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(#000, 0.5);
      opacity: 0;
      transition: opacity 480ms ease;
    }
    &:hover {
      .title {
        opacity: 1;
      }
    }
    &.cta {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: span 3;
      @include min-width($breakpoint-md) {
        grid-column: span 1;
        border-radius: 50%;
        border: 1px solid var(--medium-gray);
      }
    }
  }
</style>

<svelte:head>
	<title>AoA Vault PFPs - Angels Of Ares - Algorand Investment Club</title>
</svelte:head>

<PageTitle>
  <h1 class="page-title">
    AoA Vault PFPs
  </h1>
</PageTitle>

<div class="container">
  <div class="content">
    <Markdown content={vault} />
  </div>
  <ul class="grid">
    {#each pfps as pfp}
      <li class="item">
        <div class="pfp">
          <img src={pfp.image} alt={pfp.title}>
          <a class="title" href={pfp.link} target="_blank" >
            <span>
              {pfp.title}
            </span>
          </a>
        </div>
      </li>
    {/each}
    <li class="item cta">
      <a class="primary-btn" target="_blank" href="https://www.randgallery.com/algo-collection/?address=684298566%2C+678288557%2C+679053261%2C+679065729%2C+679066648%2C+680304322%2C+680305034%2C+684299559%2C+688774568%2C+688775209">
        I want them all
      </a>
    </li>
  </ul>
</div>
<script>
  import Markdown from './Markdown.svelte'
  import wings from '../../_contents/wings-nft.md'
</script>

<style lang="scss">
  @import '../../styles/mixins';
  @import '../../styles/variables';
  .columns {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    @include min-width($breakpoint-md) {
      flex-flow: row nowrap;
    }
  }
  .nft-wrapper {
    padding: 2rem;
    position: relative;
    flex-basis: 100%;
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: -25%;
      bottom: -25%;
      right: -10%;
      left: -25%;
      background: radial-gradient(circle closest-side, rgba(#ffffff,0.5) 0%, rgba(#ffffff,0.15) 66%, rgba(#ffffff,0) 100%);
    }
  }
  .nft {
    display: block;
    color: var(--white);
    background: var(--black);
    transform: perspective(64rem) rotateY(15deg);
    animation: spin-card infinite alternate 1800ms forwards ease-in-out;
    img {
      width: 100%;
    }
    .metadata {
      display: block;
      padding: 0 2em 2em;
      color: var(--white);
    }
    .title {
      display: block;
      font-family: var(--title-font);
    }
    .asaid, .unit {
      font-size: 0.75em;
    }
  }
  .content {
    flex-basis: 100%;
  }
  @keyframes spin-card {
    from {
      transform: perspective(64rem) rotateY(6deg);
    }
    to {
      transform: perspective(64rem) rotateY(24deg);
    }
  }
</style>



<div class="container">
  <div class="columns">
    <div class="nft-wrapper">
      <a 
        class="nft"
        href="https://www.nftexplorer.app/asset/649565986" 
        target="_blank" 
      >
        <img src="images/wings-small.jpg" alt="Wings NFT"/>
        <div class="metadata">
          <span class="title">Angel Wings</span>
          <span class="unit">AoA-AW</span>
          <span class="asaid">649565986</span>
        </div>
      </a>
    </div>
    <div class="content">
      <Markdown content={wings} />
    </div>
  </div>
</div>
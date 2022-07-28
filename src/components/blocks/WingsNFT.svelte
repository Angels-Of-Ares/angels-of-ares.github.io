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
    flex-basis: 100%;
  }
  .nft {
    display: block;
    color: var(--white);
    animation: spin-card infinite alternate 1800ms forwards ease-in-out;
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

  .bg {
    position: relative;
    z-index: -1;
    height: 0;
    img {
      position: absolute;
      left: 0;
      top: 12rem;
      width: 100%;
      @include min-width($breakpoint-md) {
        top: -3rem;
      }
    }
  }
</style>


<div class="bg">
  <img src="/images/bg-2.svg" alt="bg"/>
</div>
<div class="container">
  <div class="columns">
    <div class="nft-wrapper image-card-wrapper">
      <a 
        class="nft image-card"
        href="https://www.nftexplorer.app/asset/789639573" 
        target="_blank" 
      >
        <img src="images/wings-small.jpg" alt="Wings NFT"/>
        <div class="metadata">
          <span class="title">Angel Wings</span>
          <span class="unit">AoA-AW</span>
          <span class="asaid">789639573</span>
        </div>
      </a>
    </div>
    <div class="content">
      <Markdown content={wings} />
    </div>
  </div>
</div>
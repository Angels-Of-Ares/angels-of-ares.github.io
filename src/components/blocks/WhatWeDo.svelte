<script>
  import Markdown from './Markdown.svelte'
  import wwd from '../../_contents/what-we-do.md'
</script>

<style lang="scss">
  .container {
    max-width: 44rem;
    :global(h2) {
      text-align: center;
    }
    :global(h3) {
      text-align: left;
    }
  }  
</style>


<div class="container">
  <div class="content">
    <Markdown content={wwd} />
  </div>
</div>


<script>
  
  import Intro from '../components/blocks/HomeIntro.svelte'
  import Markdown from '../components/blocks/Markdown.svelte'
  import what from '../contents/home/what.md'
  
</script>

<Intro />

<div class="container" >
  <Markdown content={what} />
</div>
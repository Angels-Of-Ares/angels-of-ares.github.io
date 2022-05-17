<script>
  import { Converter } from 'showdown';
  export let content = '';
  const md = new Converter();
</script>

<div class="markdown">
  {@html md.makeHtml(content) }
</div>

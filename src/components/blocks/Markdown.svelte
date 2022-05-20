<script>
  import { Converter } from 'showdown';
  export let content = '';
  const md = new Converter({tables: true});
</script>

<div class="markdown">
  {@html md.makeHtml(content) }
</div>

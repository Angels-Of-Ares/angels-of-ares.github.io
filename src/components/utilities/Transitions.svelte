<script>
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  export let refresh = '';
</script>

{#key refresh}
  <div
    in:fly="{{ x: 25, duration: 600, delay: 620, easing: cubicOut }}"
    out:fly="{{ x: -25, duration: 600, easing: cubicIn }}" 
  >
    <slot/>
  </div>
{/key}

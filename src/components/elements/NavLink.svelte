<script>
  import { stores } from '@sapper/app';
  export let label;
  export let href;
  export let strict = false;
  const { page } = stores();
  let active = false;
  $: active = strict ? $page.path === href : $page.path.startsWith(href);
</script>


<style lang="scss">
  a {
    color: var(--white);
    font-family: var(--title-font);
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid var(--white);
      opacity: 0;
      transform: scaleX(0);
      transition: transform 240ms var(--swing),
                  opacity 240ms linear;
    }
    &:hover {
      color: var(--primary);
      text-decoration: none;
      &:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
    &.active {
      color: var(--white);
    }
  }
</style>


<a 
  class:active 
  rel="prefetch"
  {href}
  {...$$restProps}
>
  {#if label}
    { label }
  {/if}
  <slot></slot>
</a>
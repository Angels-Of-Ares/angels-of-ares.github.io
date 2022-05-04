<script>
  import NavLink from '../elements/NavLink.svelte';
</script>

<style lang="scss">
  nav {
    ul, li {
      display: inline-block;
    }
    :global(a) {
      padding: 0.5em ;
    }
  }
</style>


<nav role="navigation">
  <ul>
    <li>
      <NavLink href="/partners" label="Partners"/>
    </li>
    <li>
      <NavLink href="/vault" label="AoA Vault PFPs"/>
    </li>
    <li>
      <NavLink href="/reputable-projects" label="Reputable Projects"/>
    </li>
  </ul>
</nav>

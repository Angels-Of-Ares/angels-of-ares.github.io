<script>
  import NavLink from '../elements/NavLink.svelte';
</script>


<style lang="scss">
  .nav {
    font-size: 0.75em;
  }
  .nav :global(a[href="#"]) {
    pointer-events: none;
    cursor: default;
  }
  .social {
    .subnav {
      white-space: nowrap;
    }
    .subitem {
      display: inline-block;
    }
  }
</style>


<nav role="navigation">
  <ul class="nav">

    <li class="item">
      <NavLink href="/membership" label="Membership"/>
    </li>

    <li class="item">
      <!-- <NavLink href="#" label="Side Projects"/> -->
      <NavLink href="/ghost-token" label="Ghost Token"/>
      <!-- <ul class="subnav">
        <li class="subitem">
        </li>
      </ul> -->
    </li>

    <li class="item">
      <!-- <NavLink href="#" label="Side Projects"/> -->
      <NavLink href="https://fallenorder.xyz" label="Fallen Order" target="_blank"/>
    </li>


    <li class="item social">
      <NavLink href="#" label="Join us"/>
      <ul class="subnav">
        <li class="subitem">
          <NavLink href="https://discord.gg/e5xFXAEnwG" target="_blank">
            <i class="fab fa-discord"></i>
          </NavLink>
        </li>
        <li class="subitem">
          <NavLink href="https://twitter.com/Angels_of_ares" target="_blank">
            <i class="fab fa-twitter"></i>
          </NavLink>
        </li>
      </ul>
    </li>
  </ul>
</nav>

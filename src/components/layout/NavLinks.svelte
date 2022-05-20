<script>
  import NavLink from '../elements/NavLink.svelte';
</script>


<style lang="scss">
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
      <NavLink href="#" label="AoA"/>
      <ul class="subnav">
        <li class="subitem">
          <NavLink href="/how-it-works" label="How It Works"/>
        </li>
        <li class="subitem">
          <NavLink href="/partners" label="Partners"/>
        </li>
        <li class="subitem">
          <NavLink href="/docs/aoa-litepaper.pdf" target="_blank" label="Lite Paper"/>
        </li>
      </ul>
    </li>

    <li class="item">
      <NavLink href="#" label="NFTs"/>
      <ul class="subnav">
        <li class="subitem">
          <NavLink href="/nfts/vault" label="AoA Vault PFPs"/>
        </li>
      </ul>
    </li>

    <li class="item">
      <NavLink href="/ghost" label="Ghost Token"/>
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
        <li class="subitem">
          <NavLink href="https://t.me/AngelsOfAres" target="_blank">
            <i class="fab fa-telegram"></i>
          </NavLink>
        </li>
      </ul>
    </li>
  </ul>
</nav>

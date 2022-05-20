<script>
  import BPs from '../utilities/BPs.svelte';
  import NavLink from '../elements/NavLink.svelte';
  import MobileNav from './MobileNav.svelte';
  import DesktopNav from './DesktopNav.svelte';

</script>

<style lang="scss">
  header {
    padding: 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 12;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 150%;
      background: linear-gradient(0deg, rgba(#000000,0) 0%, rgba(#000000,1) 50%);
    }
  }
  .logo {
    position: relative;
    z-index: 10;
    font-family: var(--title-font);
    font-size: 1.25rem;
    margin: 0;
    img {
      width: 3em;
    }
    :global(a:after) {
      display: none;
    } 
  }
  
</style>

<header>
  <h1 class="logo">
    <NavLink href="/" title="Home" strict>
      <img src="images/aoa-logo.png" alt="Angels Of Ares - Logo" class="logo" />
      Angels Of Ares
    </NavLink>
  </h1>
  
  <BPs bps={[
    { media: '(max-width: 767px)', component: MobileNav },
    { media: '(min-width: 768px)', component: DesktopNav },
  ]} />
</header>
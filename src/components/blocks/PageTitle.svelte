<style lang="scss">
  @import '../../styles/mixins';
  @import '../../styles/variables';
  .wrapper {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -6rem;
      left: -25%;
      width: 150%;
      padding-top: 42%;
      background: url(/images/bg-top-1.svg) no-repeat center top;
      background-size: 100% auto;
      @include min-width($breakpoint-md) {
        left: 0;
        width: 100%;
        padding-top: 28%; 
      }
    }
  }
</style>

<div class="wrapper">
  <div class="container">
    <slot></slot>
  </div>
</div>
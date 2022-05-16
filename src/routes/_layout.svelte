<script>
	import Header from '../components/layout/Header.svelte';
</script>

<style lang="scss" global>
	@import "../styles/global";
	.page-wrapper {
		padding-top: 6rem;
	}
</style>


<Header />
<main class="page-wrapper">
	<slot></slot>
</main>


<!-- <Popup /> -->
<!-- <Scripts /> -->



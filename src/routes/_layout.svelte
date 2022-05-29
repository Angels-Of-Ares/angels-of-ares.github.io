<script>
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
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
<Footer />


<script>
	import Products from './components/Products.svelte';
	import * as json from '../data.json';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import Routes from './components/Routes.svelte';

</script>

<Header/>
<Routes/>
<Footer/>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

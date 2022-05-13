<script>
	import Header from './components/Header.svelte';

</script>

<Header></Header>
<main>
	<!-- MAIN -->
</main>
	<div>
		<p class="title">Egg'n Tea Timer</p>
		<p>Make yourself a Tea r an Egg ery easily with our instructions</p>
	</div>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.title {
		color: #04543F;
		font-size: 20px;
		font-weight: bold;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<script>
	import Recipe from "./Recipe.svelte";
	import {onMount} from "svelte";

	let api = [];
	let urlType = window.location.pathname.split("/").pop();

	onMount(async () => {
		await fetch('http://localhost:8081/recipes/'+urlType).then(r => r.json()).then(data => {
			api = JSON.parse(JSON.stringify(data));
			console.log(api);
		});
	})
</script>


<div class="subProduct">	
	<Recipe name="undefined" desc="undefined"></Recipe>
</div>
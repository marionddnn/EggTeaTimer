<script>
	import Recipe from "./Recipe.svelte";
	import {link} from "svelte-routing";
	import {onMount} from "svelte";

	let datas = [];
	let urlType = window.location.pathname.split("/").pop();
	let baseUrl = "/recipe/";

	onMount(async () => {
		await fetch('http://localhost:8081/recipes/'+urlType).then(r => r.json()).then(data => {
			datas = Object.values(JSON.parse(JSON.stringify(data)));
		});
	})

</script>

<div class="subProduct">
	
	<p class="datas"> {datas[0]} </p>

		{#each datas as recipe }

			{#each Object.values(recipe) as info}

				{#if info.id}
					<a use:link href={baseUrl + urlType + "/" +info.id}>
						<p class="title"> {info.title} </p>
					</a>
					<p class="comment"> {info.comment} </p>
				{/if}
			
			{/each}

		{/each} 

</div>

<style>
	.datas {
		font-size: 30px;
		color: #04543f;
		display: flex;
		padding-left: 3px;
		padding-bottom: 5px;
	}
	.title {
		font-size: 25px;
		color: black;
		display: flex;
	}
	.comment {
		display: flex;
		color: darkgray;
		font-size: 15px;
	}
</style>

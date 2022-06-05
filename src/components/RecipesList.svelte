<script>
	import Recipe from "./Recipe.svelte";
	import { onMount } from "svelte";

	let api = [];
	let datas = [];
	let urlType = window.location.pathname.split("/").pop();

	onMount(async () => {
		await fetch("http://localhost:8081/recipes/" + urlType)
			.then((r) => r.json())
			.then((data) => {
				api = Object.values(JSON.parse(JSON.stringify(data)));
				//datas = api[1].map(item => Object.values(item));
				//console.log(datas);
			});
	});
</script>

<div class="subProduct">
	<p class="api">{api[0]}</p>

	{#each api as recipe}
		{#each Object.values(recipe) as info}
			{#if info.id}
				<p class="title">{info.title}</p>
				<p class="comment">{info.comment}</p>
			{/if}
		{/each}
	{/each}
</div>

<style>
	.api {
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

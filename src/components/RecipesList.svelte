<script>
	import Recipe from "./Recipe.svelte";
<<<<<<< HEAD
	import { onMount } from "svelte";
=======
	import {link} from "svelte-routing";
	import {onMount} from "svelte";
>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99

	let datas = [];
	let urlType = window.location.pathname.split("/").pop();
	let baseUrl = "/recipe/";

	onMount(async () => {
<<<<<<< HEAD
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
=======
		await fetch('http://localhost:8081/recipes/'+urlType).then(r => r.json()).then(data => {
			datas = Object.values(JSON.parse(JSON.stringify(data)));
		});
	})

</script>

<div class="subProduct">
	
	<p> {datas[0]} </p>

		{#each datas as recipe }

			{#each Object.values(recipe) as info}

				{#if info.id}
					<a use:link href={baseUrl + urlType + "/" +info.id}>
						<p> {info.title} </p>
					</a>
					<p> {info.comment} </p>
				{/if}
			
			{/each}

		{/each} 

</div>
>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99

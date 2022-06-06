<script>
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

<p class="datas"> {datas[0]} </p>
<div class="subProduct">
	{#each datas as recipe }
		{#each Object.values(recipe) as info}
			{#if info.id}
				<a use:link href={baseUrl + urlType + "/" +info.id}>
					<p class="titleProduct"> {info.title} </p>
					<p class="comment"> {info.comment} </p>
				</a>
			{/if}
		{/each}
	{/each}
</div>

<script>
<<<<<<< HEAD
	export let name;
	export let desc;
=======
	import {onDestroy, onMount} from "svelte";
	let paramsUrl = window.location.pathname.split("/", 4);
	console.log('http://localhost:8081/recipe/'+ paramsUrl[2]+ "/" + paramsUrl[3]);
	let datas = [];
	onMount(async () => {
		await fetch('http://localhost:8081/recipe/'+ paramsUrl[2]+ "/" + paramsUrl[3]).then(r => r.json()).then(r => {
			datas = r;
	});
});

>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99
</script>

<!-- Pas d'image, englober le tout dans un lien pour pouvoir accéder à la recette après (j'ai ajouté des id aux recettes) -->
<img src="image.png" alt="" />
<div>
<<<<<<< HEAD
	<h2>{name}</h2>
	<p>{desc}</p>
</div>

<style>
	h2 {
		display: block;
        margin-left: 500px;
	}
</style>
=======
	<h2>{datas.title}</h2>
	<p>{datas.comment}</p>
	<h3> Recipe </h3>
	{#each Object.values(datas) as item }
		{#each Object.values(item) as i}
			{#if i.step !== undefined}
				<p> {i.step} </p>
				<p> {i.comment} </p>
				{#if typeof i.duree ===  "number"}
					<p> {i.duree / 60 } minutes </p>
				{:else}
						<p> Between {i.duree[0] / 60} minutes and {i.duree[1] / 60} minutes </p>
				{/if}
				{#if i.temperature}
					<p> {i.temperature} °C </p>
				{/if}
			{/if}
		{/each}
	{/each}
</div>
>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99

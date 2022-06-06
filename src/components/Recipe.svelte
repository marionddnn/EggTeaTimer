<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,200" />
<script>
	import {onMount} from "svelte";
	let paramsUrl = window.location.pathname.split("/", 4);
	let datas = [];
	onMount(async () => {
		await fetch('http://localhost:8081/recipe/'+ paramsUrl[2]+ "/" + paramsUrl[3]).then(r => r.json()).then(r => {
			datas = r;
	});
});
</script>

<!-- Pas d'image, englober le tout dans un lien pour pouvoir accéder à la recette après (j'ai ajouté des id aux recettes) -->
<img src="image.png" alt="" />
<div id="recipe_container">
	<h2>{datas.title}</h2>
	<p>{datas.comment}</p>
	<h3> Recipe </h3>
	<div id="recipe">
		{#each Object.values(datas) as item }
			{#each Object.values(item) as i}
				{#if i.step}
					<div class="recipe_step">
						{#if i.step !== undefined}
							<p class="recipeStep_name"> {i.step} </p>
							<p class="recipeStep_comment"> {i.comment} </p>
							{#if typeof i.duree ===  "number"}
								<p class="recipeStep_time">  <span class="timer_icon material-symbols-outlined">timer</span>{i.duree / 60 } minutes </p>
							{:else}
								<p class="recipeStep_time"> <span class="timer_icon material-symbols-outlined">timer</span> Between {i.duree[0] / 60} minutes and {i.duree[1] / 60} minutes </p>
							{/if}
							{#if i.temperature}
								<p> {i.temperature} °C </p>
							{/if}
						{/if}
					</div>
				{/if}
			{/each}
		{/each}
	</div>
</div>

<style>

h2 {
		display: block;
        margin-left: 500px;
	}

	.recipe_step{
		padding: 22px 20px;
		background-color: #fbe1b5;
		border-radius: 10px;
		margin: 10px 0;
		width: 671px;
	}

	.recipeStep_name {
		font-weight: bold;
		font-family: Arial;
	}

	.recipeStep_time{
		display: flex;
	}

	.timer_icon {
		margin-right: 12px;
	}
</style>

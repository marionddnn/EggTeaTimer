<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,200" />
<script>
	import {onMount} from "svelte";
	import Timer from './Timer.svelte';

	let paramsUrl = window.location.pathname.split("/", 4);
	let datas = [];
	onMount(async () => {
		await fetch('http://localhost:8081/recipe/'+ paramsUrl[2]+ "/" + paramsUrl[3]).then(r => r.json()).then(r => {
			datas = r;
		});
	});

	let timers = [{ step: "", time: 0, id: '123' }];

	function handleClick(step, time) {
		deleteTimer(timers[0].id);
		timers = [...timers, {
			step: step,
			time: time,
			id: new Date().toISOString(),
		}];
	}

	function deleteTimer(id) {
		timers = timers.filter(t => t.id !== id);
	}
	function handleOut(e) {
		console.log(e);
	}
</script>

<div id="recipe_container">
	<h2>{datas.title}</h2>
	<p>{datas.comment}</p>
	<div class="timer">
		{#each timers as timer (timer.id)}
			<Timer step={timer.step} countdown={timer.time} deleteTimer={() => deleteTimer(timer.id)} on:out={deleteTimer(timers[0].id)} />
		{/each}
	</div>
	<h3>Recipe :</h3>
	<div id="recipe">
		{#each Object.values(datas) as item }
			{#each Object.values(item) as i}
			{#if i.step}
					{#if i.step !== undefined}
						<div class="recipe_step d-flex justify-content-between align-items-center" id="">
							<div class="w-75">
								<p class="recipeStep_name"> {i.step} </p>
								<p class="recipeStep_comment"> {i.comment} </p>
								{#if typeof i.duree ===  "number"}
									<p class="recipeStep_time"><span class="timer_icon material-symbols-outlined">timer</span>{i.duree / 60 } minutes </p>
								{:else}
									<p class="recipeStep_time"><span class="timer_icon material-symbols-outlined">timer</span> Between {i.duree[0] / 60} minutes and {i.duree[1] / 60} minutes </p>
								{/if}
								{#if i.temperature}
									<p> {i.temperature} °C </p>
								{/if}
							</div>
							<button class="bg-transparent border-0" on:click="{handleClick(i.step, i.duree)}"><i class="far fa-play-circle fa-3x"></i></button>
						</div>
					{/if}
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

	.timer {
		text-align: center;
	}
</style>

<script>
	import Product from "./Product.svelte";
	import {onMount} from "svelte";

	let api = [];
	let urlType = window.location.pathname.split("/").pop();

	onMount(async () => {
		await fetch('http://localhost:8081/products/'+urlType).then(r => r.json()).then(data => {
			api = JSON.parse(JSON.stringify(data));
			//api = data;
			console.log(api);
		});
	})
</script>


<div class="subProduct">	
	<Product name="undefined" desc="undefined"></Product>
</div>

<style>

	.subProduct {
	    display:flex;
	    flex-direction:row;
	}


</style>

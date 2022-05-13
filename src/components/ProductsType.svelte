<script>
</script>

<main>
    <div class="subProduct">
        <img src="image.png" alt="productImg"/>
        <div>
            <h2>Nom du produit</h2>
             <p>Description</p>
        </div>
    </div>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.subProduct {
	    display:flex;
	    flex-direction:row;
	}

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 30px;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<script>
    let types = [
        {name : "teas", url : "/teas"},
        {name : "eggs", url : "/eggs"}
    ];
    console.log(types);
</script>

<main>
    <div class="products">
        <div>
            <p> Produits </p>
            {#each types as type}
            <a href={type.url}> 
                {type.name}
            </a>
            {/each} 
        </div>
    </div>
</main>

<style>

</style>

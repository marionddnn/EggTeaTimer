<script>
    import { link } from "svelte-routing";
    import json from '../../data.json';
    let list = JSON.parse(JSON.stringify(json));
    const types = [];
    for(const category of list.categories){
        types.push({ name : category.title, url : "/products/" + category.title});
    }
</script>


<div class="products">
    <div>
        <p> Produits </p>
        {#each types as type}
        <a use:link href={type.url}> 
            {type.name}
        </a>
        {/each} 
    </div>
</div>


<style>

</style>

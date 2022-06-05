<script>
    import { link } from "svelte-routing";
    import json from '../data.json';
    let list = JSON.parse(JSON.stringify(json));
    const types = [];
    for(const category of list.categories){
        types.push({ name : category.title, url : "/recipes/" + category.title});
    }
</script>


<div class="products">
    <div>
        <p> Categories : </p>
        {#each types as type}
        <a use:link href={type.url}> 
            {type.name}
        </a>
        {/each} 
    </div>
</div>
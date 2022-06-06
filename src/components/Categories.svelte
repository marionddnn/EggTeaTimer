<script>
    import { link } from "svelte-routing";
    import {onMount } from "svelte";

    let api = [];
    let imgNames = {"Tea" : "img/Tea.png", "Egg" : "img/Egg.png"};
    let baseUrl = "/recipes/";
    onMount(async () => {
        await fetch('http://localhost:8081/').then(r => r.json()).then(data => {
             api = JSON.parse(JSON.stringify(data));
        });
    })
</script>

<div class="products">
    {#each  Object.values(api) as item}
        {#each  item as category }
        <a use:link href={baseUrl+category.title}>
            <img class="img_products" src={imgNames[category.title]} alt="product" />
            {category.title}
        </a>
        {/each}
    {/each}
</div>

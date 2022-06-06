<script>
    import { link } from "svelte-routing";
    import {onMount } from "svelte";

    let api = [];
    let baseUrl = "/recipes/";
    onMount(async () => {
        await fetch('http://localhost:8081/').then(r => r.json()).then(data => {
             api = JSON.parse(JSON.stringify(data));
        });
    })
</script>

<div class="products">
    {#each  Object.values(api) as item }
        {#each  item as category }
        <a use:link href={baseUrl+category.title}>
            {category.title}
            <img src="../../img/icons8-tea-bag-16.png" alt="" />
            <img src="../../img/icons8-oeuf-au-plat-16.png" alt="" />
        </a>
        {/each}
    {/each}
</div>

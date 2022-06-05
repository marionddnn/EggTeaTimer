<script>
    import {link} from "svelte-routing";
    import json from '../../data.json';
    import {onDestroy, onMount} from "svelte";
    import { navigate } from "svelte-routing";
    import { Link } from "svelte-routing";

    function onSubmit() {
        login().then(() => {
            navigate("/success", { replace: true });
        });
    }
    let list = JSON.parse(JSON.stringify(json));
    const types = [];
    for(const category of list.categories){
        types.push({ name : category.title, url : "/recipes/" + category.title});
    }

    let api = [];
    let baseUrl = "/recipes/";
    onMount(async () => {
        await fetch('http://localhost:8081/').then(r => r.json()).then(data => {
             api = JSON.parse(JSON.stringify(data));
             //api = data;
             console.log(api);
        });
    })




</script>


<div class="products">
    <div>
        <p> Categories : </p>
        {#each types as type}
        <a use:link href={type.url} on:click={handleClick}>
            {type.name}
        </a>
        {/each}


        {#each  Object.values(api) as item }
            {#each  item as category }
            <a use:link href={baseUrl+category.title}>
                {category.title}
            </a>
            {/each}
        {/each}

    </div>
</div>
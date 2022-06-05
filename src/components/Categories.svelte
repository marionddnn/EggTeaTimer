<script>
    import {link} from "svelte-routing";
    import json from '../../data.json';
    import {onDestroy, onMount} from "svelte";
    import { navigate } from "svelte-routing";
    import { Link } from "svelte-routing";


    let api = [];
    let baseUrl = "/recipes/";
    onMount(async () => {
        await fetch('http://localhost:8081/').then(r => r.json()).then(data => {
             api = JSON.parse(JSON.stringify(data));
        });
    })

</script>


<div class="products">
    <div>
        <p> Categories : </p>

        {#each  Object.values(api) as item }
            {#each  item as category }
            <a use:link href={baseUrl+category.title}>
                {category.title}
            </a>
            {/each}
        {/each}

    </div>
</div>

<script>
    import { link } from "svelte-routing";
    import json from "../../data.json";
    import { onDestroy, onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { Link } from "svelte-routing";

<<<<<<< HEAD
    function onSubmit() {
        login().then(() => {
            navigate("/success", { replace: true });
        });
    }
    let list = JSON.parse(JSON.stringify(json));
    const types = [];
    for (const category of list.categories) {
        types.push({ name: category.title, url: "/recipes/" + category.title });
    }
=======
>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99

    let api = [];
    let baseUrl = "/recipes/";
    onMount(async () => {
<<<<<<< HEAD
        await fetch("http://localhost:8081/")
            .then((r) => r.json())
            .then((data) => {
                api = JSON.parse(JSON.stringify(data));
                //api = data;
                //console.log(api);
            });
    });
=======
        await fetch('http://localhost:8081/').then(r => r.json()).then(data => {
             api = JSON.parse(JSON.stringify(data));
        });
    })

>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99
</script>

<div class="products">
    <div>
<<<<<<< HEAD
        <p class="categorie">Categories :</p>
        <!--{#each types as type}
        <a use:link href={type.url} on:click={handleClick}>
            {type.name}
        </a>
        {/each} -->

        {#each Object.values(api) as item}
            {#each item as category}
                <a use:link href={baseUrl + category.title}>
                    {category.title}
                    <img src="../../img/icons8-tea-bag-16.png" alt="" />
                    <img src="../../img/icons8-oeuf-au-plat-16.png" alt="" />
                </a>
=======
        <p> Categories : </p>

        {#each  Object.values(api) as item }
            {#each  item as category }
            <a use:link href={baseUrl+category.title}>
                {category.title}
            </a>
>>>>>>> 0581ef18bf4609556a11a6cd3fbc87d0de9f9b99
            {/each}
        {/each}
    </div>
</div>

<style>
    .products {
        display: block;
        margin-left: 500px;
    }
    .categorie {
        font-size: 29px;
        color: black;
        display: flex;
        text-align: center;
        margin-left: 20px;
    }
    a {
        background-color: #04543f;
        border-radius: 20%;
        border-color: red;
        padding: 18px;
        margin: 10px;
        font-size: 23px;
        text-decoration: none;
        color: white;
        text-align: center;
    }
</style>

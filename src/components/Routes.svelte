<script>
    import { Router, Route } from "svelte-routing";
    import Recipe from "./Recipe.svelte";
    import Categories from "./Categories.svelte";
    import RecipesList from "./RecipesList.svelte";
    export let url = "";
</script>

<main>
  <Router url="{url}">
      <div>
        <Route path="recipe/:type/:id" let:params component="{Recipe}" />
        <Route path="recipes/:type" let:params component="{RecipesList}" />
        <Route path="/" component="{Categories}"/>
      </div>
  </Router>
</main>

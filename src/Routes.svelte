<script>
    import { Router, Route } from "svelte-routing";
    import Recipe from "./components/Recipe.svelte";
    import Categories from "./Categories.svelte";
    import RecipesList from "./components/RecipesList.svelte";
    export let url = "";
</script>

<main>
  <Router url="{url}">
      <div>
        <Route path="recipe/:id" component="{Recipe}" />
        <Route path="recipes/:type" component="{RecipesList}" />
        <Route path="/" component="{Categories}"/>
      </div>
  </Router>
</main>
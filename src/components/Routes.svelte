<script>
    import { Router, Route } from "svelte-routing";
    import Product from "./Product.svelte";
    import Products from "./Products.svelte";
    import ProductsList from "./ProductsList.svelte";
	export let url = "";
</script>

<main>
  <Router url="{url}">
      <div>
        <Route path="product/:id" component="{Product}" />
        <Route path="products/:type" let:params component="{ProductsList}" />
        <Route path="/" component="{Products}"/>
      </div>
  </Router>
</main>

<style>

</style>

<script>
    export let data;
    const { products } = data;
</script>

<div>
    <h1>Shop</h1>
    {#each products as product}
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title}>
        <p>{product.description}</p>
    {/each}
</div>
/** @type {import('./$types').PageServerLoad} */

export const load = async () => {
    
    const fetchProducts = async () => {
        const productsRes = await fetch('https://dummyjson.com/products?limit=20')
        const productsData = await productsRes.json()
        const products = productsData.products
        return products
    }

    return {
        products: await fetchProducts()
    }
}
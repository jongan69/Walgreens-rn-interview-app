
export const getProducts = async () => {
    const ProductData = await fetch('https://fakestoreapi.com/products', {
        method: 'GET'
    })
        .then((response) => response.json())
    return ProductData
}

export default getProducts;
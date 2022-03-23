
fetch('https://api-express-livecoding.herokuapp.com/allProducts')
    .then(res => res.json())
    .then(products => printProducts(products))


function printProducts(products) {

    let productsHTML = ''

    products.forEach(product => {

        let productHTML =
            `
            <div class="product">
                <figure>
                    <img src="${product.thumbnail}">
                </figure>
                <article>
                    <h3>${product.title}</h3>
                    <p>Marca: ${product.brand} | Precio: ${product.price}€ | Stock actual: ${product.stock} unidades | Puntuación: ${product.rating}</p>
                </article>
            </div>
            `

        productsHTML += productHTML

    })
    catalogue.innerHTML = productsHTML
}


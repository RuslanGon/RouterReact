

const ProductList = ({products}) => {
    return (
      <ul>
          {Array.isArray(products) &&
            products.map((product) => {
              return (
                <li key={product.id}>
                  <img width={250} src={product.thumbnail} alt={product.title} />
                  <h2>title: {product.title}</h2>
                  <h3>brand: {product.brand}</h3>
                  <p>description: {product.description}</p>
                  <h4>price: {product.price}</h4>
                  <p>rating: {product.rating}</p>
                </li>
              );
            })}
        </ul>
    )
  }
  
  export default ProductList
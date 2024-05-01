import { useParams } from "react-router-dom"


const ProductDetailsPage = () => {

  const {productId} = useParams()

  return (
    <div>
      <h1>Product details {productId}</h1>
      <div>
        <img src="" alt="" />
        <h3>Title:</h3>
        <p>Brand:</p>
        <p>Price:</p>
      </div>
    </div>
  )
}

export default ProductDetailsPage
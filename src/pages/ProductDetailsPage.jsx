import { useEffect, useState } from "react"
import { Link, Route, Routes, useParams } from "react-router-dom"
import { reguestProductDetailsById } from "../serveses/api"
import CommentPage from "./CommentPage"
import ReviesPage from "./ReviesPage"


const ProductDetailsPage = () => {

  const {productId} = useParams()

  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await reguestProductDetailsById(productId);
        setProductDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product details {productId}</h1>
      {productDetails !== null && 
      <div>
        <img src={productDetails.thumbnail} alt={productDetails.title} />
        <h3>Title: {productDetails.title} </h3>
        <p>Brand: {productDetails.brand}</p>
        <p>Price: {productDetails.price}</p>
      </div>}
      <Link to='comments'>Comments</Link>
      <Link to='reviews'>Revies</Link>
      <Routes>
      <Route path="comments" element={<CommentPage />} />
      <Route path="reviews" element={<ReviesPage />} />
      </Routes>
    </div>
  )
}

export default ProductDetailsPage
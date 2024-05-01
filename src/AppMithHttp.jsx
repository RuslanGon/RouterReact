import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./component/Loader/Loader";
import { reguestProducts, reguestProductsByQuery } from "./serveses/api";
import ErrorMessage from "./component/ErrorMessage/ErrorMessage";
import ProductList from "./component/ProductList/ProductList";
import SearchForm from "./component/SearchForm/SearchForm";


const AppMithHttp = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('')
  // console.log(query);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await reguestProducts();
        setProducts(data.products);
        // console.log(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);


useEffect(() => {
if(query.length === 0)return
async function fetchProductsByQuery() {
  try {
    setIsLoading(true);
    const data = await reguestProductsByQuery(query);
    setProducts(data.products);
    // console.log(data);
  } catch {
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
}
fetchProductsByQuery();
},[query])



  const onSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <SearchForm onSearchQuery={onSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ProductList products={products} />
    </div>
  );
};

export default AppMithHttp;
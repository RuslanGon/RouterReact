import { useEffect, useState } from "react";
import { reguestProducts, reguestProductsByQuery } from "../serveses/api";

export const useProductSearch = () => {

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

  return {products, isLoading, isError, onSearchQuery}
}
import {useState,useEffect} from "react";

const Products = () => {
  const [products,setProducts]=useState([]);
  const [loadData, setLoadData]= useState(true);
  const [error,setError]=useState();

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
   .then((response)=>{
    return response.json()
   })
   .then((result)=>{
    setProducts(result)
    setLoadData(false)
   })
   .catch((error)=>{
    setError(error)
    setLoadData(false)
   })

   console.log(products);
  },[]);

function result(){
 return(
  products.map((item)=>{
   return <p>sdsdsdsdsdsdsd</p>
  })
 )
}


function loadingData (){
return <p>api is loading</p>
}

function showError(){
  return <p>{error.message}</p>
}
if(error){
  return showError()
}
else{
  return loadData ? loadingData(): result() 
}
}
export default Products;

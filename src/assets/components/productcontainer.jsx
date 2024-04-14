import { ProductContext } from "../context/productcontext";
import { ProductCard } from "./productcard";
import {useContext} from 'react'
import {calculatePrice} from 'react';
import { useSelector } from "react-redux";

export default function ProductsContainer() {

  const productss = useSelector((state) => state.blogs.data); // this will Fetch products array from Redux state
  console.log("Products from Reduxv:", productss);


const {products , calculatePrice  , cart} = useContext(ProductContext);



  return (
    <>
     <div>
     {

      productss.map((prod,elem)=>(

<ProductCard key={elem} products={prod} calculatePrice={calculatePrice}
cart ={cart}
/>


      ))
     }
      
      </div>
    
    </>
  );
 
}



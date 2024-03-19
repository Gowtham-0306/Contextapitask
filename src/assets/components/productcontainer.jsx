import { ProductContext } from "../context/productcontext";
import { ProductCard } from "./productcard";
import {useContext} from 'react'
import {calculatePrice} from 'react';


export default function ProductsContainer() {



const {products , calculatePrice  , cart} = useContext(ProductContext);



  return (
    <>
     <div>
     {

      products.map((prod,elem)=>(

<ProductCard key={elem} products={prod} calculatePrice={calculatePrice}
cart ={cart}
/>


      ))
     }
      
      </div>
    
    </>
  );
 
}



import React, { useState, useEffect, useLayoutEffect } from "react";
import { createContext } from "react";

import { storeBlogs } from "../../redux/reducers/BlogReducer";
import { useDispatch, useSelector } from "react-redux";

export const ProductContext = createContext({
  products: [],
  productstoshow: [],
  calculatePrice: () => {},
});


export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const productss = useSelector((state) => state.blogs.data);
  const dispatcher = useDispatch();
  useEffect(() => {
    const datas = {
        products: [
            {
              id: 1,
              title: "iPhone 9 pro",
              description: "An apple mobile which is nothing like apple",
              price: 549,
              discountPercentage: 12.96,
              rating: 4.69,
              stock: 94,
              brand: "Apple",
              category: "smartphones",
              thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
              images: [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
              ],
              Quantity: 1,
              total : 0
            },
            {
              id: 2,
              title: "iPhone X",
              description:
                "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
              price: 899,
              discountPercentage: 17.94,
              rating: 4.44,
              stock: 34,
              brand: "Apple",
              category: "smartphones",
              thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
              images: [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
              ],
              Quantity: 1,
              total : 0
            },
            {
              id: 3,
              title: "Samsung Universe 9 ",
              description:
                "Samsung's new variant which goes beyond Galaxy to the Universe",
              price: 1249,
              discountPercentage: 15.46,
              rating: 4.09,
              stock: 36,
              brand: "Samsung",
              category: "smartphones",
              thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
              images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
              Quantity: 1,
              total : 0
            },
            {
              id: 4,
              title: "OPPOF19",
              description: "OPPO F19 is officially announced on April 2021.",
              price: 280,
              discountPercentage: 17.91,
              rating: 4.3,
              stock: 123,
              brand: "OPPO",
              category: "smartphones",
              thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
              images: [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
              ],
              Quantity: 1,
              total : 0
            },
            {
              id: 5,
              title: "Huawei P30",
              description:
                "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
              price: 499,
              discountPercentage: 10.58,
              rating: 4.09,
              stock: 32,
              brand: "Huawei",
              category: "smartphones",
              thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
              images: [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg",
              ],
              Quantity: 1,
              total : 0
            },
          ]    
    };

    var products = datas.products;
    setProducts(products);
    dispatcher(storeBlogs(products));
    return () => {};
  }, []);

  useEffect(()=>{


  },[products])
  function calculatePrice(productQuantity, id) {
    console.log(`${id}im id ${productQuantity}`);
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          Quantity: productQuantity,
          total: productQuantity * product.price, // Calculate the total here
        };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  }
  
  function cart(id) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const newQuantity = product.Quantity - 1;
        if (newQuantity >= 0) {
          return {
            ...product,
            Quantity: newQuantity,
            total: newQuantity * product.price,
          };
        } else {
          return {
            ...product,
            Quantity: 0,
            total: 0,
          };
        }
      } else {
        return product;
      }
    });
  
    setProducts(updatedProducts);
  }
  
  
useLayoutEffect(()=>{
console.log(`products updated hence im printing`);


},[products])


  if (products) {
    return (
      <ProductContext.Provider value={{ products, calculatePrice, cart }}>
        {children}
      </ProductContext.Provider>
    );
  }
}

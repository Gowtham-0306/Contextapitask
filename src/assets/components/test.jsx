import { useSelector } from "react-redux";

export function Test() {
  const products = useSelector((state) => {
    return state.products;
  });

  console.log(products);

  // Return some JSX or null if you don't want to render anything
  return null;
}

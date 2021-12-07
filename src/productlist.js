import { Product } from './Product';
import { useEffect,useState } from 'react';


export function Productlist() {
  const[product,setproduct]=useState([]);
  useEffect(()=>{
    fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/products",{method:"GET"})
    .then((data)=>data.json())
    .then((pd)=>setproduct(pd))
  })
  return (
    <div className="list-container">
      {product.map(({poster,name,color,rating,price,storage,final_price,emi,id}) => (
        <Product poster={poster} name={name} color={color} rating={rating}
          price={price} storage={storage} final_price={final_price} emi={emi} id={id} />
      ))}
    </div>
  );
}

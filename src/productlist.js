import { Product } from './Product';
import { useEffect,useState } from 'react';
import {API_URL} from './global-constant'



export function Productlist() {
  const[product,setproduct]=useState([]);
  useEffect(()=>{
    fetch(`${API_URL}/products`,{method:"GET"})
    .then((data)=>data.json())
    .then((pd)=>setproduct(pd))
  })
  return (
    <div className="list-container">
      {product.map(({poster,name,color,rating,price,storage,final_price,emi,id,_id}) => (
        <Product poster={poster} name={name} color={color} rating={rating}
          price={price} storage={storage} final_price={final_price} emi={emi} id={_id} />
      ))}
    </div>
  );
}

import { Counter } from './counter';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router';


export function Product({ name, color, rating, price, poster, final_price, storage,emi,id }) {
  const history=useHistory();
  return (
    <div class="main-container">
      <img src={poster} alt="phone_name" className="image" />
      <Divider></Divider>
      <div className="details">
      
 <p className="spec">{name}<IconButton onClick={()=>history.push("/mobile/"+id)} aria-label="more-info" color="primary">
      < InfoIcon/>
     </IconButton></p>
        <p><b>Color:</b> {color}</p>
        <p><b>Rating:</b> {rating}⭐</p>
        <p><b>Storage:</b>{storage}</p>
        <p><b>Price:</b> {final_price} <strike>{price}</strike></p>
        <p>{emi}</p>
        <Counter/>
     
       </div>
     
    </div>
  );
}
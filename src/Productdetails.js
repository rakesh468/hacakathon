import { useHistory, useParams } from "react-router";
import KeyboardBackspaceIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
export function Productdetails(){
    const history=useHistory();
    const {id}=useParams();
    
    const [newproduct,setnewproduct]=useState({})
    useEffect(()=>{
        fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/products/${id}`,{method:"GET"})
        .then((data)=>data.json())
        .then((pd)=>setnewproduct(pd))
      },[id]);
      console.log(newproduct);
    return(
        <div className="details-part">
        <img src={newproduct.poster} alt="phone_name" className="image" />
        <div className="details">
        <p><b>Color:</b> {newproduct.color}</p>
        <p><b>Rating:</b> {newproduct.rating}⭐</p>
        <p><b>Storage:</b>{newproduct.storage}</p>
        <p><b>Price:</b> {newproduct.final_price} <strike>{newproduct.price}</strike></p>
        <p>{newproduct.emi}</p>
        <Button onClick={()=>history.goBack("/mobiles")} variant="outlined" aria-label="back" >
          < KeyboardBackspaceIcon/>Back
          </Button>
        </div>
        </div>
    )
}
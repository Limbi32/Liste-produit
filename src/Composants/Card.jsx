import { useState } from "react";

export function Card({name,image,onclick,buttonref1,buttonref2,key,refcart}){
    
    return  <div ref={refcart} className="card" key={key}>
                
               <img src={image} alt="" /> 
               <div key={key} ref={buttonref1} className="button active" onClick={onclick}>Add to cart</div>  
               <div key={key} ref={buttonref2} className="button "><button>-</button>{nbprod} <button onClick={handlerplus}>+</button></div>    
               <p>{name}</p> 
              
    </div>
}
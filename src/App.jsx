import Img1 from './assets/image-waffle-desktop.jpg'
import Img2 from './assets/image-creme-brulee-desktop.jpg'
import Img3 from './assets/image-macaron-desktop.jpg'
import Img4 from './assets/image-tiramisu-desktop.jpg'
import Img5 from './assets/image-baklava-desktop.jpg'
import Img6 from './assets/image-meringue-desktop.jpg'
import Img7 from './assets/image-cake-desktop.jpg'
import Img8 from './assets/image-brownie-desktop.jpg'
import Img9 from './assets/image-panna-cotta-desktop.jpg'
import Emptycart from './assets/illustration-empty-cart.svg'
import Addcart from './assets/icon-add-to-cart.svg'
import {Card} from './Composants/Card.jsx'
import './App.css'
import { useEffect, useRef, useState } from 'react'


function App() {
  
      const PRODUITS=[
        {id:1,name:'Waffle with Berries',prix:6.50,type:'Waffle',detail:'',image:Img1},
        {id:2,name:'Vanilla Bean Crème Brulee',prix:7,type:'Crème Brulee',detail:'',image:Img2},
        {id:3,name:'Macaron Mix of Five',prix:8,type:'Macaron',detail:'',image:Img3},
        {id:4,name:'Classic Tiramisu',prix:5.50,type:'Tiramisu',detail:'',image:Img4},
        {id:5,name:'Pistachio Baklava',prix:4.00,type:'Baklava',detail:'',image:Img5},
        {id:6,name:'Lemon Meringue Pie',prix:5,type:'Pie',detail:'',image:Img6},
        {id:7,name:'Red Velvet Cake',prix:4.50,type:'Cake',detail:'',image:Img7},
        {id:8,name:'Salted Caramel Brownie',prix:5.50,type:'Brownie',detail:'',image:Img8},
        {id:9,name:'Vanilla Panna Cotta',prix:6.50,type:'Panna Cotta',detail:'',image:Img9}
      ]
      const [paniers, setPaniers]=useState([])

      const ref1=useRef(null)
      const ref2=useRef(null)
      const ref3=useRef(null)
      const [active, setActive]=useState(0)
      
    useEffect(()=>{
      
    
        if (paniers.length>0) {
          ref2.current.classList.add('active')
          ref3.current.classList.remove('active')
          console.log(ref3.current);
          
        }else{
          ref2.current.classList.remove('active')
          ref3.current.classList.add('active')
          console.log(ref3.current);
        }
    },[])
    useEffect(()=>{
      
        if (paniers.length>0) {
          ref2.current.classList.add('active')
          ref3.current.classList.remove('active')
          console.log(ref3.current);
        }else{
          ref2.current.classList.remove('active')
          ref3.current.classList.add('active')
          console.log(ref3.current);
        }
    },[active])
    //modifer le nombre de produit a ajouter au panier
      const handlerplus=(index)=>{
       
        const rang=paniers.findIndex(panier=>panier.id===index)
     
          const modifpanier=paniers.splice(rang, 1,
            {id:paniers[rang].id,name:paniers[rang].name,prix:paniers[rang].prix, type:paniers[rang].type, quantite:paniers[rang].quantite+1})
           
          setPaniers([...paniers,modifpanier])
          // removeItem(paniers.length)
        
        
      
      }
    
      const handlermoins=(index)=>{
        const rang=paniers.findIndex(panier=>panier.id===index)
       
        
          if (paniers[rang].quantite>=2) {
            const modifpanier=paniers.splice(rang, 1,
              { id:paniers[rang].id, name:paniers[rang].name, prix:paniers[rang].prix, type:paniers[rang].type, quantite:paniers[rang].quantite-1});
            setPaniers([...paniers,modifpanier])
            removeItem(paniers.length)
            
          }
          
       
     }
       
        //supprimmer un panier

      const removeItem = (id) => {
        setPaniers(paniers.filter(panier => panier.id !== id)); // Suppression d'un objet par id
        const container=ref1.current.children[id]
      
        container.children[2].classList.remove('active')
         container.children[1].classList.add('active')
           setActive(paniers.length)
       
      };
      
      //afficher le nombre de produit a jouter au panier

     const handleindex=(index)=>{
     
      const rang=paniers.findIndex(panier=>panier.id===index)
     return paniers[rang].quantite;
     }
     
     //ajouter des produit au panier

      const handlecart=(produit,index)=>{
   
     const container=ref1.current.children[index]
     container.children[1].classList.remove('active')
      container.children[2].classList.add('active')
     console.log(ref2.current.classList);
       setActive(paniers.length)
    if (paniers.length>=0) {
      ref2.current.classList.add('active')
    }else{
      ref2.current.classList.remove('active')
    }
      const newpanier = { id: index, name:produit.name, prix:produit.prix,type:produit.type, quantite:1};
        setPaniers([...paniers, newpanier]);
      
       
      }

    const totalquantite=paniers.reduce((accumulateur,panier)=>accumulateur+panier.quantite,0)
     const totalpaniers=paniers.reduce((accumulateur,panier)=>accumulateur+panier.prix,0)
      console.log(totalpaniers);

  return (
    <>
   
      <div translate="no" className="app">
          <div className="dessert">
            <h1>Desserts</h1>
            <div  ref={ref1} className="container">

              {/* lister les produits  */}
            {PRODUITS.map((produit,index) => (
               
            <div className="card" key={index}>
               
            <img src={produit.image} alt="" /> 
            <div  className="button active" onClick={()=>handlecart(produit,index)}>
              <img src={Addcart} alt="" />
             <p>Add to cart</p> </div>  
            <div  className="button plus ">
           
              <button onClick={()=>handlermoins(index)} >-</button>
             <span>{paniers.length>=1 && paniers.find(panier=>panier.id===index) ?
              handleindex(index): 'ok'}</span>

              <button  onClick={()=>handlerplus(index)}>+</button></div>  
              <div  className="desc">
              <p className='type1'>{produit.type}</p> 
              <h4>{produit.name}</h4> 
            <p className='produit1'>{'$'+produit.prix}</p> 
           
                </div>  
           
           
        </div>

            ) )}
            
           
              

            </div>

          </div>
          <div className="panier">
              <h3>Your cart {'('+totalquantite+')'}</h3>
              <div ref={ref2} className="achat">
                  <img  className='' src={Emptycart} alt="" />
                  <p>Your added items will appear here</p>
              </div>
            {/* liste des panier */}
              {paniers.map((panier) => (
          <div key={panier.id}>
            <div className='cont-panier'>
            
            <h4>{panier.name}</h4>
              <div className='box-contpanier'>
                    <div className='contenue'>
                        <p className='panier-quant'>{panier.quantite+'x'}</p>
                        <p>{'@ $'+panier.prix}</p>
                        <p>{'$'+panier.quantite*panier.prix}</p>
                    </div>
                <button onClick={() => removeItem(panier.id)}>X</button>
              </div>
           <div>
          
           </div>
              </div>
            
              

          
         
          </div>
        ))}
        <div ref={ref3} className="total ">
        <div><p >Order total: </p><p className='numbertotal'>${totalquantite*totalpaniers}</p></div>
        <div>This is a carbon-neutral delivery</div>
        </div>
          <button className='confirm'>Confirm order</button>
          </div>
      </div>
    </>
  )
}

export default App

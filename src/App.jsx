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
import {Card} from './Composants/Card.jsx'
import './App.css'
import { useEffect, useRef, useState } from 'react'


function App() {
      const PRODUITS=[
        {id:1,name:'Waffle with Berries',prix:'6.50',type:'Waffle',detail:'',image:Img1},
        {id:2,name:'Vanilla Bean Crème Brulee',prix:'7',type:'Crème Brulee',detail:'',image:Img2},
        {id:3,name:'Macaron Mix of Five',prix:'8',type:'Macaron',detail:'',image:Img3},
        {id:4,name:'Classic Tiramisu',prix:'5.50',type:'Tiramisu',detail:'',image:Img4},
        {id:5,name:'Pistachio Baklava',prix:'4.00',type:'Baklava',detail:'',image:Img5},
        {id:6,name:'Lemon Meringue Pie',prix:'5',type:'Pie',detail:'',image:Img6},
        {id:7,name:'Red Velvet Cake',prix:'4.50',type:'Cake',detail:'',image:Img7},
        {id:8,name:'Salted Caramel Brownie',prix:'5.50',type:'Brownie',detail:'',image:Img8},
        {id:9,name:'Vanilla Panna Cotta',prix:'6.50',type:'Panna Cotta',detail:'',image:Img9}
      ]

      const ref1=useRef(null)
      
      const [tasks, setTasks] = useState([]);
      
      const [nbprod,setNbprod]=useState(1)
      const handlerplus=(v)=>{
        
         setNbprod(v=>v+1)
      }
      const handlermoins=(v)=>{
        if (nbprod>0) {
          setNbprod(v=>v-1)
        }
      
     }
      const handlecart=(produit,index)=>{
   
     const container=ref1.current.children[index]
     container.children[1].classList.remove('active')
      container.children[2].classList.add('active')
      console.log(container.children[3]);
      setTasks([...tasks,  <div><h3> {produit.name}</h3>
      <button>suppr</button>
      <div><p> {produit.type}</p><p> {'$'+produit.prix}</p> </div></div> ]);
      ;
    //  cards.push(container.children[3])
    // console.log(produit.id);
    
       
    console.log(nbprod);
   console.log('tasks '+tasks);

      }
    
     
    

  return (
    <>
  
      <div className="app">
          <div className="dessert">
            <h1>Desserts</h1>
            <div  ref={ref1} className="container">
            {PRODUITS.map((produit,index) => (
            <div className="card" key={index}>
                
            <img src={produit.image} alt="" /> 
            <div  className="button active" onClick={()=>handlecart(produit,index)}>Add to cart</div>  
            <div  className="button plus ">
              <button onClick={handlermoins} >-</button>
              <span> {nbprod}</span>
              <button  onClick={()=>handlerplus(index)}>+</button></div>  
              <div  className="desc">
              <p>{produit.type}</p> 
              <p>{produit.name}</p> 
            <p>{produit.prix}</p> 
                </div>  
           
           
        </div>

            ) )}
            
           
              

            </div>

          </div>
          <div className="panier">
              <h3>Your cart</h3>
              <div className="achat">
                  <img src={Emptycart} alt="" />
              </div>
              {tasks.map((task, index) => (
          <div key={index}>
              {task}
          
         
          </div>
        ))}
        <div className="total">
          
        </div>
          <button className='confirm'>Confirmer</button>
          </div>
      </div>
    </>
  )
}

export default App

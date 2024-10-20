import React from 'react'
import { useEffect,useState } from 'react'
import Card from "./Components/Card"
import Navbar from './Components/Navbar'
const App = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>setProducts(data.products))
    .catch((error)=>console.log("SomeThing Went Wrong",error))
  },[])
  const addToCart=()=>{
    setProducts((previusCard)=>[...previusCard,products])
  }
  return (
    <div>
      <Navbar/>
      
      <h1>Welcome To My E-Commerce Website</h1>
      <h1>Add To Cart {cart.length}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      
     {products.map((data)=>{
       {console.log(data.images)}
       
      return(
        <Card
        key={data.id}
        title={data.title}
        price={data.price}
        image={data.images[0]}
        addToCart={()=>addToCart(data)}
/> 

)  
      

})}
    </div>
</div>
  )
}

export default App

import React from 'react'
import { useEffect,useState } from 'react'
import Card from "./Components/Card"
import Navbar from './Components/Navbar'
import Swal from 'sweetalert2'
const App = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([])
  const [showCartItem,setShowCartItem]=useState(false)
  const iterateOn=showCartItem ? cart : products
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>setProducts(data.products))
    .catch((error)=>console.log("SomeThing Went Wrong",error))
  },[])
  useEffect(()=>{
    const previousCarts= JSON.parse(localStorage.getItem('cart'))
    console.log('previousCarts=>',previousCarts);
    setCart([...previousCarts] )

  },[])
  useEffect(()=>{
    if(cart.length){
      localStorage.setItem('cart',JSON.stringify(cart))
    }
    },[cart])

   const handleCart=(data)=>{
    const cartsItem=cart.some((item)=>data.id == item.id)
    if(cartsItem){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Item already added to cart!",
      });
    }
    else{
      Swal.fire({
        icon: "success",
        title: "Wow",
        text: "Added To Cart Successfully!",
      });
      setCart((previousCarts)=>[...previousCarts,data])
console.log(cart);
    }
   }
   return (
     <div>
      
      <Navbar/>
      
      <h1 className='pt-[7rem]'>Welcome To My E-Commerce Website</h1>
      <h1 className='underline cursor-pointer' onClick={ ()=>setShowCartItem(!showCartItem)} > 
        {showCartItem ?"Show All Product":`Card Items ${cart.length}`}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      
     {iterateOn.map((data)=>{
       return(
         <Card
        addtoCart={()=>handleCart(data)}
        key={data.id}
        title={data.title}
        price={data.price}
        image={data.images[0]}
        showRemovefromCart={showCartItem===true}
        removeCarts={()=>{
          const allProducts=cart.filter((product)=>product.id !==data.id)
          setCart([...allProducts])
        }}
/> 

)  
      

})}
    </div>
</div>
  )
}

export default App

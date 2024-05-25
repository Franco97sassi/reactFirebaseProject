//  import React from "react"
//  import { Routes, Route } from 'react-router-dom'
//  import { collection, getDocs } from 'firebase/firestore'

// function App() {
//    const [products, setProducts] = useState([])
// const [loading, setLoading] = useState(true) 
// useEffect(() => {
//   fb_getProductItems()
//  setLoading(false)
//  }, [])
 
//  //funcion para obtener y acceder a productos desde firebase
//  const fb_getProductItems=async()=>{
//    const itemsCollectionRef=collection(db,"items")
//  const itemsCollection=await getDocs(itemsCollectionRef)
//  const items=itemsCollection.docs.map((doc)=>({id:doc.id,...doc.data()}))
//  setProducts(items)
//  }
 
//   return (
    
 
// <>

//      <Routes>
// <Route path="/"  > </Route>
//  <Route path="/categories/:cat"  > </Route>
//   <Route path="/item/:id"  > </Route>
// <Route path="/cart"  > </Route>
// <Route path="*" element={<h1>Not Found</h1>} > </Route>  

//      </Routes>
//     </>
//   )
// }

// export default App












import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './contexts/CartContextProvider'
import Cart from './components/Cart/Cart'
import { collection, getDocs } from 'firebase/firestore'
import db from '../db/firebase-config'



function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fb_getProductItems()
    setLoading(false);
  }, [])

  //funcion para obtener todos los productos de firebase
  const fb_getProductItems = async () => {
    const itemsCollectionRef = collection(db, 'items')
    const itemsCollection = await getDocs(itemsCollectionRef)
     const items = itemsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setProducts(items)
   }

  return (
    //React Fragment
    <CartContextProvider children={
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer products={products} loading={loading} />} />
          <Route path='/categories/:cat' element={<ItemListContainer products={products} loading={loading} />} />
          <Route path='/item/:id' element={<ItemDetailContainer products={products} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </>
    } />
  )
}

export default App
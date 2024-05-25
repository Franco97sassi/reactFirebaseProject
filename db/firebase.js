import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";


const itemsCollectionRef=collection(db,"items")
const cartCollectionRef=collection(db,"cart")


//funciones para los productos

export const fb_getProductItems=async()=>{
    const itemsCollection=await getDocs(itemsCollectionRef)
    return itemsCollection.docs.map((doc)=>({id:doc.id,...doc.data()}))
}
export const fb_deleteProductItems=async(id)=>{
    await deleteDoc(doc(db,"items",id))
    fb_getProductItems()

}
export const fb_addProductItem=async(item)=>{
     const docRef= await addDoc(itemsCollectionRef,item)
     fb_getProductItems()

}


//funciones para el carrito

export const fb_getCartItems=async()=>{
    const cartCollection=await getDocs(cartCollectionRef)
    return cartCollection.docs.map((doc)=>({id:doc.id,...doc.data()}))
}
export const fb_deleteCartItem=async(id)=>{
    await deleteDoc(doc(db,"items",id))
    fb_getCartItems()

}
export const fb_addCartItem=async(item)=>{
    const docRef= await addDoc(cartCollectionRef,item)
    fb_getCartItems()

}
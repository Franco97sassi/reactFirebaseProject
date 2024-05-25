// import React from 'react'

// const ItemDetailContainer = ({products}) => {
//     const{id}=useParams()
//     const [loading, setLoading] = useState(true);
//     const [loadingMsg, setLoadingMsg] = useState("Loading")
//     let product=products.find(product=>product.id==id)
//     const fb_getProductItem=async(id)=>{
//         const docRef=doc(db,"items",id)
//         const docSnap=await getDoc(docRef)
//         product={id:docSnap.id,...docSnap.data()}
//         setLoading(false)
//         setLoadingMsg("404 producto no encontrado")
//     }
//     product?? fb_getProductItem(id)
//     {
//         if(product===undefined){
//             return(
//                 <div className={styles.container}>
//                     <h2 style={{marginLeft:"auto",marginRight:"auto"}}>{loadingMsg}</h2>
//                 </div>
//             )
//         }else{
//             return (
//                < div className={styles.container}>
//                     <ActionAreaCard key={product.id} product={product} cardProps={cardProps} loading={loading}/>
//                 </div>
//               )
//         }
//     }
  
// }

// export default ItemDetailContainer





import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ActionAreaCard from '../Card/ActionAreaCard';
import styles from './itemdetailcontainer.module.css'
import db from '../../../db/firebase-config';

function ItemDetailContainer({ products }) {
   //obtengo el id
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [loadingMsg, setLoadingMsg] = useState("Loading");
    //busco el producto
    let product = products.find(product => product.id == id);
    //console.log(product)
    
    const fb_getProductItem = async (id) => {
        const docRef = doc(db, 'items', id)
        const docSnap = await getDoc(docRef)
        product = { id: docSnap.id, ...docSnap.data()};
         setLoading(false);
        setLoadingMsg("404 Producto no encontrado")
    }

     product?? fb_getProductItem(id)
    

    const cardProps = { maxWidth: "100%", height: 300, showRating: true, showPrice: true, showDescription: true, showActions: true, canHover: false }
   
   
   
    {
        if (product === undefined) {//si el producto no existe, muestra un mensaje de error
            return (
                <div className={styles.container}>
                    <h2 style={{ marginLeft: "auto", marginRight:"auto" }}>{loadingMsg}</h2>
                </div>)
        }
        else {//si el producto existe, muestra el detalle del producto
            return (
                <div className={styles.container}>
                    <ActionAreaCard key={product.id} product={product} cardProps={cardProps} loading={loading} />
                 </div>
            )
        }
    }
}

export default ItemDetailContainer
// import { Link } from '@material-ui/core';
// import React from 'react'

// const ItemListContainer = () => {
//   const {cat}=useParams();
//   letFilteredProducts=[]
// cat!=undefined?filteredProducts=products.filter((product)=>product.category===cat):filteredProducts=products
//   return (
//     <div className='styles.container'>
//         {loading?
//       fakeProducts.map((product=>{
//         <SkeletonAreaCard key={product} cardProps={cardProps}/>
//       }))  :
//       filteredProducts.map((product)=>
//       <Link to={`/item/${product.id}`} key={product.id}>
//       <ActionAreaCard key={product.id} product={product.id} cardProps={cardProps}/>
//       </Link>
//       )
      
//       }
//     </div>
//   )
// }

// export default ItemListContainer




import ActionAreaCard from '../Card/ActionAreaCard'
import SkeletonAreaCard from '../Card/SkeletonAreaCard'
import styles from './itemlistcontainer.module.css'
import { Link, useParams } from 'react-router-dom'
import db from '../../../db/firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'


const ItemListContainer = ({products, loading}) => {

  const cardProps = { maxWidth: 345, height: 200, showRating: true, showPrice: true, showDescription: false, showActions: false, canHover: true }
  
  //busco la categoria como parametro
  const { cat } = useParams();
 
  let filteredProducts = []

    //filtro dependiendo si se muestra la categoria o no como parametro para mostrar los productos
   cat != undefined ? filteredProducts = products.filter((product) => product.category === cat) : filteredProducts = products;

  const fakeproducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className={styles.container}>
      {loading ?
        fakeproducts.map((product =>
          <SkeletonAreaCard key={product} cardProps={cardProps} />
        ))
        :
        filteredProducts.map((product =>
          <Link to={`/item/${product.id}`} key={product.id}>
            <ActionAreaCard key={product.id} product={product} cardProps={cardProps} />
          </Link>
        ))}
    </div>
  )
}

export default ItemListContainer
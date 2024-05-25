// //agrego los productos a la coleccion items

// import { addDoc, collection } from "firebase/firestore";
// import products from "../src/assets/products/products";
// import db from "./firebase-config";


// const itemsCollectionRef=collection(db,"items");
// const promises=products.map((product)=>addDoc(itemsCollectionRef,product))

// Promise.all(promises).then(()=>{
//     process.exit(0)
// })

import db from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import products from "../src/assets/products/products.js";

const itemsCollectionRef = collection(db, "items");

const promises = products.map((product) => addDoc(itemsCollectionRef, product));

Promise.all(promises).then(() => {
  console.log("All done!");
  process.exit(0);
});
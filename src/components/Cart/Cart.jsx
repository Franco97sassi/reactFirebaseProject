 

import { Button, Container, CssBaseline, IconButton, Stack, Tooltip } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import styles from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../contexts/CartContextProvider';
import ItemCount from '../ItemCount/ItemCount';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { height, textAlign } from '@mui/system';
import { red } from '@mui/material/colors';
import ReactTextTransition, { presets } from "react-text-transition";
import FormDialog from '../FormDialog/FormDialog';



function Cart() {
    const { cartFirebaseProducts, addToCart, clear, removeItem, fb_getCartItems } = useContext(CartContext);
    const [noProductMessage, setnoProductMessage] = useState("No hay productos en el carrito");
    

    return (
        <>
            <div className={styles.cartcontainer} >
                <div className={styles.cartTitleContainer}>
                    Carrito
                    <Tooltip title="Vaciar Carrito" >
                        <IconButton aria-label="delete" onClick={() => clear()} sx={{ position: "relative" }}>
                            <RemoveShoppingCartIcon sx={{ color: red[500] }} fontSize='medium' />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={styles.cartlistcontainer}>
                    {cartFirebaseProducts.length === 0 ?
                        <div className={styles.emptyCart}>
                            <RemoveShoppingCartIcon fontSize='large' />
                            <h4> {noProductMessage} </h4>
                        </div>
                        :
                        cartFirebaseProducts.map((item) =>
                            <div className={styles.cartcard} key={item.product.id}>
                                <img src={item.product.image} alt="img" width={70} style={{ objectFit: "contain", margin: "0px 0px 0px 10px" }} />
                                {/* <h3>{item.product.title}</h3> */}
                                <div style={{ width: "70%" }}>
                                    <div>{item.product.title}</div>
                                    <div style={{ marginTop: "10px" }}><strong>{"$" + (item.product.price).toFixed(2) + "/un"}</strong></div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "end", padding: "8px", justifyItems: "center" }}>
                                    <IconButton aria-label="delete" onClick={() => removeItem(item.product.id)} sx={{ position: "relative" }}>
                                        <HighlightOffRoundedIcon sx={{ color: red[500] }} fontSize='medium' />
                                    </IconButton>
                                    <ItemCount product={item.product} stock={5} initial={item.quantity} hideAddToCart={true} />
                                    {/* <div style={{ fontSize: "1.2rem", padding: 10}} ><strong>{"$" + (item.product.price * item.quantity).toFixed(2)}</strong></div> */}
                                    <div style={{ fontSize: "1.2rem", padding: 10 }} >
                                        <strong>
                                            <ReactTextTransition
                                                children={"US$ " + (item.product.price * item.quantity).toFixed(2)}
                                                springConfig={{ stiffness: 50, damping: 20 }}
                                                inline
                                                overflow={false}
                                            />
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                {/* <div className={styles.cartTotalContainer}>Subtotal: {"$" + cartList.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)} </div> */}
                {cartFirebaseProducts.length > 0 && <div className={styles.cartTotalContainer}>
                      <FormDialog setnoProductMessage={setnoProductMessage} cartClear={clear} />
                    <Stack direction="row" spacing={1} alignItems="center">
                        <p>Subtotal:</p>
                        <ReactTextTransition
                            children={"US$ " + cartFirebaseProducts.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}
                            springConfig={{ stiffness: 50, damping: 20 }}
                            overflow={false}
                        />
                    </Stack>
                </div>}
            </div>
        </>
    )
}

export default Cart
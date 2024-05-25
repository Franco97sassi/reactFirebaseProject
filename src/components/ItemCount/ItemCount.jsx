// import { Button, IconButton, Typography } from '@mui/material'
// import React from 'react'

// function ItemCount() {
//     const [count, setCount] = useState(initial)
//     const {addToCart,isInCart} = useContext(CartContext)
// useEffect(() => {
//   isInCart(product.id)&&addToCart(product,count)
// }, [count])
// const navigate=UseNavigate();
// const handleClickAdd=()=>{count<stock && setCount(count+1)}
// const handleClickRemove=()=>{count>1 && setCount(count-1)}

//   return (
//     <div className='styles.container'>
//         <IconButton color="" aria-label="remove-items" onClick={handleClickRemove}>
// <RemoveCircleOutlineRoundedIcon fontsize="medium"/>
//         </IconButton>
//         <Typography variant='h6' component="div">

//         </Typography>
//         <IconButton color="" aria-label="remove-items" onClick={handleClickRemove}>
// <AddCircleOutlineRoundedIcon fontsize="medium"/>
//         </IconButton>
//         {!hideAddToCart &&
//         <Button size='medium' variant='outlined' onClick={()=>{
//             addToCart(product,count);navigate("/cart")
//         }}>

//         </Button>
//         }
//     </div>
//   )
// }

// export default ItemCount



import { Button, IconButton, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import styles from './itemcount.module.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContextProvider';



function ItemCount({ product, stock, initial, hideAddToCart, onChange }) {
    const [count, setCount] = useState(initial);
    const { addToCart, isInCart } = useContext(CartContext);

    useEffect(() => { isInCart(product.id) && addToCart(product,count) }, [count])

    const navigate = useNavigate();
    const handleClickAdd = () => { count < stock && setCount(count + 1);};
    const handleClickRemove = () => {count > 1 && setCount(count - 1);};


    return (
        <div className={styles.container}>

            <IconButton color="" aria-label="remove items" onClick={handleClickRemove}>
                <RemoveCircleOutlineRoundedIcon fontSize='medium' />
            </IconButton>
            <Typography variant="h6" component="div">
                {count}
            </Typography>
            <IconButton color="" aria-label="add items" onClick={handleClickAdd}>
                <AddCircleOutlineRoundedIcon fontSize='medium' />
            </IconButton>
            {!hideAddToCart &&
                <Button size="medium" variant="outlined" onClick={() => { addToCart(product, count); navigate('/cart');}}>Agregar al Carrito</Button>
            }

        </div>
    )
}

export default ItemCount
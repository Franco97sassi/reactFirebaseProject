// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Rating } from '@mui/material';

// export default function ActionAreaCard(product,cardProps) {
//     const [hover, setHover] = useState(false)
//   return (
//     <Card sx={{ maxWidth: cardProps.maxWidth,width: cardProps.width, borderRadius:"20px"
//     // ,alignSelf:"top",position:"relative"
//     }}>
//         <OnHoverCard product={product} hover={hover} canHover={cardProps.canHover}/>
//         {/* <CartActionArea>  */}
//       <CardMedia
//         component="img"
//         alt={product.title}
//         height= {cardProps.height}
//         image={product.image}
//         sx={{objectFit:"contain",width:cardProps.height,marginTop:"15px",
//             // marginLeft:"auto",marginRight:"auto"
//         }}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//         {product.title}
//         </Typography>
//         <Typography gutterBottom variant="h6" component="div">
//         {product.subTitle}
//         </Typography>
//         {cardProps.showDescription && <Typography variant="body2" color="text.secondary">
//          {product.description}
//          </Typography>}
//          {cardProps.showPrice && <Typography variant="h6" component="div"  >
//             <Typography variant="h6" component="span"  fontSize="1rem">
//           </Typography> {product.price}
          
//          </Typography>}
//          {cardProps.showRating && <Rating name="read-only" value={product.rating.rate} readOnly />}
//       </CardContent>
//       {/* </CartActionArea> */}
//       {cardProps.showActions && <CardActions>
//         <ItemCount product={product} stock={5} initial={5} hideAddToCart={false}/>
//       </CardActions>}
//     </Card>
//   );}
 





import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton, Rating } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import OnHoverCard from './OnHoverCard';


export default function ActionAreaCard({ product, cardProps }) {
  //const cardProps={maxWidth:345,height:200,showRating:true,showPrice:true,showDescription:true}
  const [productItems, setProductItems] = useState(0);
  const [hover, setHover] = useState(false);	

  return (
    <Card sx={{ maxWidth: cardProps.maxWidth, width: cardProps.maxWidth, borderRadius: "20px", alignSelf: "top", position:"relative" }} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}> 
      <OnHoverCard product={product} hover={hover} canHover={cardProps.canHover}/>
      <CardActionArea>
        <CardMedia
          component="img"
          height={cardProps.height}
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", width: cardProps.height, marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {product.subtitle}
          </Typography>
          {cardProps.showDescription &&
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          }
          {cardProps.showPrice &&
            <Typography gutterBottom variant="h6" component="div">
              <Typography variant="h6" component="span" fontSize='1rem'>
                {"US$"}
              </Typography>
              {product.price}
            </Typography>
          }
          {cardProps.showRating && <Rating name="read-only" value={product.rating.rate} readOnly />}
        </CardContent>
      </CardActionArea>
      {cardProps.showActions &&
        <CardActions>
          <ItemCount product={product} stock={5} initial={1} hideAddToCart={false} />
        </CardActions>}
    </Card>
  );
}
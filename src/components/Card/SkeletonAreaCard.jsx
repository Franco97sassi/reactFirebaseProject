// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Rating, Skeleton } from '@mui/material';

// export default function SkeletonAreaCard(cardProps) {
//   return (
//     <Card sx={{ maxWidth: cardProps.maxWidth,width: cardProps.width, borderRadius:"20px"
//     // ,alignSelf:"top"
//     }}>
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
       
//         <Skeleton animation="wave" width={300} height={20} />
//         <CardContent>
//         {cardProps.showDescription &&          <Skeleton animation="wave" width={cardProps.maxWidth} height={60} />}

//          {cardProps.showPrice &&          <Skeleton animation="wave" width={300} height={20} />
// }
//          {cardProps.showRating && <Rating name="read-only" value={product.rating.rate} readOnly />}
//       </CardContent>
//       {/* </CartActionArea> */}
//       {cardProps.showActions && <CardActions>
         
//         <Skeleton animation="wave" width={80} height={20} />

//       </CardActions>}
//     </Card>
//   );}
 


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, Rating, Skeleton } from '@mui/material';

export default function SkeletonAreaCard({cardProps}) {

  return (
    <Card sx={{ maxWidth: cardProps.maxWidth, width: cardProps.maxWidth, borderRadius: "20px", alignSelf: "top"}}>
      <CardActionArea>
        <Skeleton animation="wave" width={cardProps.maxWidth} height={cardProps.height} />
        <CardContent>
        <Skeleton animation="wave" width={300} height={20} />
          {cardProps.showDescription &&
            <Skeleton animation="wave" width={cardProps.maxWidth} height={60} />
          }
          {cardProps.showPrice &&
            <Skeleton animation="wave" width={80} height={20} />
          }
          {cardProps.showRating && <Rating name="read-only" value={0} readOnly />}
        </CardContent>
      </CardActionArea>
      {cardProps.showActions &&
        <CardActions>
          <Skeleton animation="wave" width={80} height={20} />
        </CardActions>}
    </Card>
  );
}
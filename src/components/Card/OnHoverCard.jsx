import { Fade, LinearProgress } from "@mui/material";

function OnHoverCard(product,hover,canHover)
{if(!canHover)return null;
return(

    <Fade in={hover} timeout={500}>
        <div>
            {Object.entries(product.characteristics).map((([key,value],index)=>{

                return(
                    <div key={index}>
                        <span style={{color:"#fafafa",fontSize:"0.8rem",fontWeight:800}}
                        >{key}
                        </span>
                        <LinearProgress variant="determinate" value={value*100}sx={{height:6,borderRadius:6,backgroundRadio:6}}
                        />
                        
                        </div>
                )
            }))}
        </div>

    </Fade>
)

}
export default OnHoverCard
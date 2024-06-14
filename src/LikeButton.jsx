import { useState } from "react";

function LikeButton(){
    //let[count,setCount]=useState(0);
    let[isLiked,setIsLiked]=useState(false);

    let incCount = () => {
        //setCount(count+0.5);
        setIsLiked(!isLiked);
    };

    let styleLike={
        color:"red",
    };




    return(
        
        <p onClick={incCount}>
            {isLiked ?
            (
              <i class="fa fa-heart fa-2xl" aria-hidden="true" style={styleLike}></i>             )
            :
            ( 
           <i class="far fa-heart fa-xl"></i>)}        
        {/* <button onClick={incCount}>Add To Wishlist</button> */}
        </p>
        
    )
}

export default LikeButton;
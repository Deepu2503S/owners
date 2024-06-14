import React, { useState } from "react";
import cardData from "./Data";
import LikeButton from "./LikeButton";


const Menu = () => {
  const initialStatuses = Array(cardData.length).fill("Add to Cart");
  const initialColors = Array(cardData.length).fill("rgb(133, 201, 203)");

  const [statuses, setStatuses] = useState(initialStatuses);
  const [bgColors, setBgColors] = useState(initialColors);

  const handleClick = (index) => {
    const newStatuses = [...statuses];
    const newColors = [...bgColors];

    if (newStatuses[index] === "Add to Cart") {
      newStatuses[index] = "Added";
      newColors[index] = "blue";
    } else if (newStatuses[index] === "Added") {
      newStatuses[index] = "Add to Cart";
      newColors[index] = "rgb(133, 201, 203)";
    }

    setStatuses(newStatuses);
    setBgColors(newColors);
  };
   let styles1={
    color:"white",
  }
    let styles2={
    textDecoration: 'line-through',
    }


  return (
    <div className="main-content">
      <div className="placards1">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.name} />
            <h1 className="name">{card.name}</h1>
            <h6 style={styles1}>{card.description}</h6>

            <div className="status1">
              <div className="rateOld"  style={styles2}>{card.priceO}</div>
              <div className="rateNew" >{card.priceN}</div>
              <div className="time">{card.time}</div>
            </div>
            <div className="ratings" style={styles1}> 
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> &nbsp; &nbsp;{card.ratings}
            </div> 
            <div className="status2">
              <button
                className="b4"
                onClick={() => handleClick(index)}
                style={{ backgroundColor: bgColors[index], transition: "background-color 0.3s ease" }}
              >
                {statuses[index]}
              </button>
              <LikeButton/>
              <button className="b4">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

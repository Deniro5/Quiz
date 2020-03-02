import React from 'react';

const Card = props => {

  const {category , background} = props;

    return (
        <div className = "cardContainer">
          <img alt = "cardBackground" src = {background} />
          <h2 className = "categoryName"> {category} </h2>
        </div>
    );
  }

export default Card;

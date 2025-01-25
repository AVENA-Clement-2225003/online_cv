import React from 'react';

function Card({ image_name, name, type }) {
    const isMiniCard = type === "";
    return (
        <div className={`${isMiniCard ? 'mini' : ''} card`}>
            <img className="cardImg" alt={"Card informations"} src={`/${image_name}`}/>
            <div>
                <p className="cardName">{name}</p>
                {isMiniCard ? '': <p className="cardType">{type}</p>}
            </div>
        </div>
    );
}

export default Card;
import React from 'react';

function Card({ image_name, name, type }) {
    return (
        <div class="card">
            <img class="cardImg" alt={"Card informations"} src={`/${image_name}`}/>
            <div>
                <p class="cardName">{name}</p>
                <p class="cardType">{type}</p>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';

function ContactInfo({ image_name, link }) {
    return (
        <div className={"contactInfoHolder"}>
            <img className="contactImg" alt={"Card informations"} src={`/${image_name}`}/>
            <div>
                <a href={`https://${link}`} className="cardName">{link}</a>
            </div>
        </div>
    );
}

export default ContactInfo;
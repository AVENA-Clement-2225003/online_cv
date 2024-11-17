import React, {useEffect} from 'react';

function Contact() {
    useEffect(() => {
        document.title = "Coordonnées";
    }, []);
    return (
        <div>
            <h3>Coordonnées</h3>
            <p>Mes infos</p>
        </div>
    );
}

export default Contact;

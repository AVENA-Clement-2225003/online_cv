import React, {useEffect} from 'react';

function Experiences() {
    useEffect(() => {
        document.title = "Expériences";
    }, []);
    return (
        <div>
            <h3>Mes expériences professionnelles</h3>
            <p>Lorem ipsum</p>
        </div>
    );
}

export default Experiences;
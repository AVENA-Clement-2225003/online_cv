import React, {useEffect} from 'react';

function Languages() {
    useEffect(() => {
        document.title = "Langages";
    }, []);
    return (
        <div>
            <h3>Mon histoire</h3>
            <p>Lorem ipsum</p>
        </div>
    );
}

export default Languages;
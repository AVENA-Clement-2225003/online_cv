import React, {useEffect} from 'react';

function Home() {
    useEffect(() => {
        document.title = "Accueil";
    }, []);
    return (
        <div>
            <h3>Mon histoire</h3>
            <p>Lorem ipsum</p>
        </div>
    );
}

export default Home;
import React, {useEffect} from 'react';

function Home() {
    useEffect(() => {
        document.title = "Page introuvable";
    }, []);
    return (
        <div>
            <h3>Page inexistante</h3>
            <p>Êtes-vous sûr(e) de savoir où vous essayez d'aller ?</p>
        </div>
    );
}

export default Home;
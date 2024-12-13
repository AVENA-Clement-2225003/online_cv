import React, {useEffect} from 'react';

function Home() {
    useEffect(() => {
        document.title = "Accueil";
    }, []);
    return (
        <div>
            <h3>Qui suis-je ?</h3>
            <p>Je suis actuellement un étudiant en informatique, j'aimes coder ét apprendre. Je souhaite devenir un
                ingénieur fullstack et traiter de différents domaines</p>
            <h3>Ma scolarité</h3>
            <p>Je suis sorti du lycée avec un BAC mention assez bien spécialité NSI (Numérique et Science de
                l'Informatique) et SVT (Science de la Vie et de la Terre) avec option mathématiques complémentaires.</p>
            <p>Suis à cela j'ai suivi la formation BUT Informatique au sein du département information d'Aix-EnProvence. Durant ces 3 années j'ai appris [...]</p>
            <h3>Mes hobbies</h3>
            <p>J'aimes coder, jouer mais pas que ! Je suis également motard et sur mon temps libre j'aimes faire des balades et du sport</p>
        </div>
    );
}

export default Home;
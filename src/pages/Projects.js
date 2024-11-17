import React, {useEffect} from 'react';
import Card from "../components/Card";

function Projects() {
    useEffect(() => {
        document.title = "Projets";
    }, []);
    return (
        <div>
            <h3>Projets scolaires</h3>
            <div className="cardHolder">
                <Card image_name={"logo192.png"} name={"POLAPP"} type={".NET 8 MAUI"}/>
                <Card image_name={"logo192.png"} name={"Inproto"} type={"Laravel 10"}/>
                <Card image_name={"logo192.png"} name={"API Commande"} type={"Java"}/>
                <Card image_name={"logo192.png"} name={"Holo"} type={"PHP"}/>
            </div>
            <h3>Projets personnels</h3>
            <div className="cardHolder">
                <Card image_name={"logo192.png"} name={"Mon CV"} type={"ReactJS"}/>
                <Card image_name={"logo192.png"} name={"ChiefPlanner"} type={"Laravel 11"}/>
            </div>
            <h3>Projets professionnels</h3>
            <div className="cardHolder">
                <Card image_name={"logo192.png"} name={"AWS ARAPL"} type={"ASPNET"}/>
                <Card image_name={"logo192.png"} name={"Sensia PPTX converter"} type={"FastAPI Python"}/>
            </div>

        </div>
    );
}

export default Projects;
import React, {useEffect} from 'react';
import Card from "../components/Card";

function Projects() {
    useEffect(() => {
        document.title = "Projets";
    }, []);
    return (
        <div>
            <h3>Projets scolaires</h3>
            <div class="cardHolder">
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
            </div>
            <h3>Projets personnels</h3>
            <div class="cardHolder">
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
            </div>
            <h3>Projets professionnels</h3>
            <div class="cardHolder">
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
                <Card image_name={"logo192.png"} name={"Test"} type={"Test"}/>
            </div>

        </div>
    );
}

export default Projects;
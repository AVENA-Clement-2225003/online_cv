import React, {useEffect} from 'react';
import Card from "../components/Card";

function Home() {
    useEffect(() => {
        document.title = "Logiciels";
    }, []);
    return (
        <div>
            <h3>Web & code</h3>
            <div className="cardHolder">
                <Card image_name={"phpmyadmin.png"} name={"PhpMyAdmin"} type={" "}/>
                <Card image_name={"wamp.png"} name={"Wamp"} type={" "}/>
                <Card image_name={"looping.png"} name={"Looping"} type={" "}/>
                <Card image_name={"dbbrowser.png"} name={"DB Browser"} type={"SQLite"}/>
            </div>
            <h3>Bureautique</h3>
            <div className="cardHolder">
                <Card image_name={"word.png"} name={"Word"} type={"Office"}/>
                <Card image_name={"excel.png"} name={"Excel"} type={"Office"}/>
                <Card image_name={"powerpoint.png"} name={"Powerpoint"} type={"Office"}/>
                <Card image_name={"notion.png"} name={"Notion"} type={" "}/>
                <Card image_name={"staruml.png"} name={"StarUML"} type={" "}/>
            </div>
            <h3>Multimédia</h3>
            <div className="cardHolder">
                <Card image_name={"photoshop.png"} name={"Photoshop"} type={"Adobe"}/>
                <Card image_name={"filmora.png"} name={"Filmora"} type={"Wondershare"}/>
            </div>
            <h3>3D</h3>
            <div className="cardHolder">
                <Card image_name={"blender.png"} name={"Blender"} type={"Blender Foundation"}/>
                <Card image_name={"unity.png"} name={"Unity"} type={"Unity Technologies"}/>
            </div>
            <h3>Autres</h3>
            <div className="cardHolder">
                <Card image_name={"discord.png"} name={"Discord"} type={" "}/>
                <Card image_name={"teams.png"} name={"Teams"} type={"Microsoft"}/>
                <Card image_name={"slack.png"} name={"Slack"} type={"Slack Technologies"}/>
            </div>

        </div>
    );
}

export default Home;
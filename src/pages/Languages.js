import React, {useEffect} from 'react';
import Card from "../components/Card";

function Languages() {
    useEffect(() => {
        document.title = "Langages";
    }, []);
    return (
        <div>
            <h3>Langages</h3>
            <div className="cardHolder">
                <Card image_name={"php.png"} name={"PHP"} type={""}/>
                <Card image_name={"cpp.png"} name={"C++"} type={""}/>
                <Card image_name={"csharp.png"} name={"C#"} type={""}/>
                <Card image_name={"python.png"} name={"Python"} type={""}/>
                <Card image_name={"java.png"} name={"Java"} type={""}/>
                <Card image_name={"js.png"} name={"Java script"} type={""}/>
            </div>
            <h3>FrameWork</h3>
            <div className="cardHolder">
                <Card image_name={"laravel.png"} name={"Laravel"} type={""}/>
                <Card image_name={"dotnet.png"} name={".NET MAUI"} type={""}/>
                <Card image_name={"aspnet.png"} name={"ASPNET"} type={""}/>
                <Card image_name={"fastapi.png"} name={"FastAPI"} type={""}/>
                <Card image_name={"logo192.png"} name={"ReactJS"} type={""}/>
            </div>
            <h3>DB et données</h3>
            <div className="cardHolder">
                <Card image_name={"logo512.png"} name={"SQL"} type={""}/>
                <Card image_name={"logo512.png"} name={"PL/SQL"} type={""}/>
                <Card image_name={"logo512.png"} name={"Mongo DB"} type={""}/>
                <Card image_name={"logo512.png"} name={"JSON"} type={""}/>
            </div>
        </div>
    );
}

export default Languages;
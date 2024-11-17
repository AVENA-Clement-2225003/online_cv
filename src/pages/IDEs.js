import React, {useEffect} from 'react';
import Card from "../components/Card";

function IDEs() {
    useEffect(() => {
        document.title = "IDEs";
    }, []);
    return (
        <div>
            <h3>IDEs</h3>
            <div className="cardHolder">
                <Card image_name={"logo192.png"} name={"VS Code"} type={"Microsoft"}/>
                <Card image_name={"logo192.png"} name={"Visual Studio 22"} type={"Microsoft"}/>
                <Card image_name={"logo192.png"} name={"PhpStorm"} type={"Jet Brain"}/>
                <Card image_name={"logo192.png"} name={"InteliJ"} type={"Jet Brain"}/>
            </div>
        </div>
    );
}

export default IDEs;
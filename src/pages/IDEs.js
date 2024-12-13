import React, {useEffect} from 'react';
import Card from "../components/Card";

function IDEs() {
    useEffect(() => {
        document.title = "IDEs";
    }, []);
    return (
        <div>
            <h3>IDEs</h3>
            <div className="cardHolder gridDisplay">
                <Card image_name={"vscode.png"} name={"VS Code"} type={"Microsoft"}/>
                <Card image_name={"vs22.png"} name={"Visual Studio 22"} type={"Microsoft"}/>
                <Card image_name={"intelij.png"} name={"InteliJ"} type={"Jet Brain"}/>
                <Card image_name={"phpstorm.png"} name={"PhpStorm"} type={"Jet Brain"}/>
                <Card image_name={"webstorm.png"} name={"WebStorm"} type={"Jet Brain"}/>
                <Card image_name={"pycharm.png"} name={"PyCharm"} type={"Jet Brain"}/>
                <Card image_name={"qtcreator.png"} name={"Qt Creator"} type={"Qt Group"}/>
                <Card image_name={"eclipse.png"} name={"Eclipse"} type={"Eclipse Foundation"}/>
                <Card image_name={"logo512.png"} name={"Jupyter notebook"} type={"Jupyter"}/>
            </div>
        </div>
    );
}

export default IDEs;
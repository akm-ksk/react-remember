import './App.css';
import React, {useEffect, useState} from "react";
import {ColoredMessage} from "./components/ColoredMessage";
import {CssModule} from "./components/CssModule";
import {StyledJSX} from "./components/Styled";
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";


export const App = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log('num is change')
    }, [num])

    const onClickButton = () => {
        // setNum(num + 1);
        setNum((prev) => prev + 1);
    }

    return (
        <>
            <h1 style={{color: 'red'}}>Hello World</h1>
            <ColoredMessage color="blue">React App</ColoredMessage>
            <ColoredMessage color="pink">Java Script</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>

            <CssModule message="node sass"/>
            <StyledJSX message="Styled Js"/>
            <StyledComponents title="Styled Components"/>
            <Emotion title="Emotion"/>
        </>
    );
}

export default App;

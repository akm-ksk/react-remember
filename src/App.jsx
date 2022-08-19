import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {ColoredMessage} from "./components/coloredMessage";


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
        </>
    );
}

export default App;

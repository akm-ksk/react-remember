import './App.css';
import React, {memo, useCallback, useEffect, useState} from "react";
import {ColoredMessage} from "./components/ColoredMessage";
import {CssModule} from "./components/CssModule";
import {StyledJSX} from "./components/Styled";
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";
import {TailwindCss} from "./components/TailwindCss";
import {Child1} from "./components/Child1";
import {Child4} from "./components/Child4";


export const App = memo(
    () => {
        const [num, setNum] = useState(0);
        const [childNum, setChildNum] = useState(0);

        useEffect(() => {
            console.log('num is change')
        }, [num]);

        const onClickButton = () => {
            // setNum(num + 1);
            setNum((prev) => prev + 1);
        };

        const onClickChildButton = () => {
            setChildNum((prev) => prev + 1);
        };

        const onClickRest = useCallback(
            () => {
                setChildNum(0)
            }, []);

        console.log("Appレンダリング");

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
                <TailwindCss title="Tailwind CSS"/>

                <div>
                    <button onClick={onClickChildButton}>ChildButton</button>
                    <p>{childNum}</p>
                    <Child1 onClickReset={onClickRest}/>
                    <Child4/>
                </div>
            </>
        )
    });

export default App;

import {Child2} from "./Child2";
import {Child3} from "./Child3";
import {memo} from "react";

const style = {
    height: "200px",
    background: "lightblue",
    padding: "8px",
};

export const Child1 = memo(
    (props) => {
        console.log("Child1レンダリング");

        const {onClickReset} = props;

        return (
            <div style={style}>
                <p>Child1</p>
                <button onClick={onClickReset}>ReSet</button>
                <Child2/>
                <Child3/>
            </div>
        );
    });
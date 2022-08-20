import {memo} from "react";

const style = {
    margin: "0 0 30px",
    height: "50px",
    background: "lightgray",
};

export const Child2 = memo(
    () => {
        console.log("Child2レンダリング");

        return (
            <div style={style}>
                <p>Child2</p>
            </div>
        );
    });
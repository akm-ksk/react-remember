import React from "react";

export const ColoredMessage = (props) => {

    const {color, children} = props

    const contentStyle = {
        // color: color,
        // 省略記法 ↓↓
        color,
        fontsize: '20px'
    }
    return <p style={contentStyle}>{children}</p>
}
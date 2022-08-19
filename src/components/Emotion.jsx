/** @jsxImportSource @emotion/react */ // ← 必須

import {jsx, css} from "@emotion/react";
import styled from "styled-components";

// npm install @emotion/react @emotion/styled

export const Emotion = (props) => {

    const {title} = props

    // scssそのまま
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      `;

    // インラインスタイル
    const titleStyle = css({
        margin: 0,
        color: '#aaa'
    });

    const SButton = styled.button`
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px;

          &:hover {
            background-color: #aaa;
            color: #fff;
            cursor: pointer;
    `;

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>{title}</p>
            <SButton>Button</SButton>
        </div>
    )
}
import React from 'react'
import { DotLoader } from 'react-spinners'
import { css } from "@emotion/core";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #0073cf;
    position: absolute;
    left: 55%;
    top: 45%;
`;

const Loading = (props) => {
    return (
        <DotLoader 
            size={100}
            css={override} 
            color={"#0073cf"} 
            loading={props.isLoading} />
    )
}

export default Loading;
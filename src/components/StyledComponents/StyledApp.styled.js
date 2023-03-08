import styled from "styled-components";

const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;

    input{
        margin-top: 20px;
        width: 300px;
        height: 40px;
        font-size: 20px;
        padding-left: 10px;
    }

    p{
        margin: 10px;
        font-size: 18px;
    }
`

export {StyledApp};
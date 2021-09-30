import styled from "styled-components";

export const Container = styled.div `

    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};

`

export const Logo = styled.div`

    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h3 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }

    > img {
        width: 40px;
        height: 40px;
    }
    
`

export const Form = styled.form`



`

export const FormTitle = styled.h1`




`
import styled from 'styled-components'


export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

`

export const Header = styled.header `
    display: flex;
    align-items: center;
    
    height: 70px;
`

export const LogImg = styled.img `
    height: 38px;
    width: 38px;
`

export const Title = styled.h3 `
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    
`

export const MenuContainer = styled.nav `
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`

export const MenuItemLink = styled.a `

    color: ${props => props.theme.colors.info};
    text-decoration: none;

    display: flex;
    align-items: center;

    padding: 7px 0;

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`

export const MenuItemButton = styled.button `

    font-size: 16px;

    border: none;
    background: none;

    color: ${props => props.theme.colors.info};

    display: flex;
    align-items: center;

    padding: 7px 0;

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`



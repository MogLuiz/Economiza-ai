// Packages
import styled, { css } from 'styled-components'

// Types
import { IContainerProps, IThemeToggleFooterProps } from './types'


export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;  
       

    @media(max-width: 600px) {
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        width: 170px; 

        height: ${props => props.menuIsOpen ? "100vh" : "70px"};
        overflow: hidden;

        ${props => !props.menuIsOpen && css `
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `}

    }

`

export const Header = styled.header `
    display: flex;
    align-items: center;
    
    height: 70px;

`

export const LogImg = styled.img `
    height: 38px;
    width: 38px;

    @media(max-width: 600px) {
        display: none;
    }
    
`

export const Title = styled.h3 `
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
    
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


export const ToggleMenu = styled.button `

    width: 35px;
    height: 35px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
    
    display: none;


    @media(max-width: 600px) {
        display: flex;

        justify-content: center;
        align-items: center;

    }
    
`

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`

    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 600px) {
        display: ${props => props.menuIsOpen ? "flex" : "none"};
    }

`



// Packages
import styled from 'styled-components'

// Types
import { IContainerProps } from './types'

export const Container = styled.div<IContainerProps>`

    width: 32%;
    height: 150px;

    margin: 10px 0;
    
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    > img {
        height: 110%;

        position: absolute;
        top: -10px;
        right: -30px;
        
        opacity: .30;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }


    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 21px;

            > strong {
                display: inline-block;
                width: 100%;
                font-size: 17px;
            }
        }
    }    


`
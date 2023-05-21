import { styled, keyframes } from "styled-components";
import { rotateFlipIn } from "../../styles/animations";

export const NavBarStyles = styled.nav`
    background-color: #151515;
    ul {
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        padding: 20px;
        li {
            ${rotateFlipIn}
            list-style: none;
        }
        a {
            text-decoration: none;
            color: ${props=> props.theme.colors.white2};
            transition: all .3s ease;
        &:visited{
            color: ${props=> props.theme.colors.white2};
            }
            &:hover{
                color: ${props=> props.theme.colors.primary};
            }
        }
    }
`
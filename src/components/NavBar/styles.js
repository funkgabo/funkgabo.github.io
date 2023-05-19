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
            color: #823f8b;
            transition: all .3s ease;
        &:visited{
            color: #823f8b;
        }
        &:hover{
            color: #c284cb;
        }
        }
    }
`
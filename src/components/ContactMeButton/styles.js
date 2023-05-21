import { styled } from "styled-components";

export const ContactMeButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 5px 0 25px 0;
    button {
        background-color: transparent;
        color: #f1f1f1;
        padding: 10px;
        border-radius: 20px;
        width: 190px;
        outline: none;
        border: 1px solid #f1f1f1;
        transition: .4s ease;
        &:hover{
            color: ${props=> props.theme.colors.yellow};
            border: 1px solid ${props=> props.theme.colors.yellow};
        }
    }
`
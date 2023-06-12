import { styled } from "styled-components";

export const NotFilledButtonContainer = styled.button`
        background-color: transparent;
        color: #f1f1f1;
        padding: 10px;
        border-radius: 20px;
        width: 160px;
        padding: 13px 0;
        outline: none;
        border: 1px solid #f1f1f1;
        transition: .4s ease;
        &:hover{
            color: ${props=> props.theme.colors.yellow};
            border: 1px solid ${props=> props.theme.colors.yellow};
        }
`
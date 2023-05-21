import { styled } from "styled-components";

export const HomeContainerStyles = styled.section`
        background-color:#034158;
        p {
            margin: 0;
            text-align: center;
            font-size: 22px;
            color: ${props=> props.theme.colors.white2};
        }
        h1 {
            margin: 13px;
            font-size: 32px;
            text-align: center;
            color: ${props=> props.theme.colors.white};
        span {
            color: ${props=> props.theme.colors.primary};
        }
        }
`
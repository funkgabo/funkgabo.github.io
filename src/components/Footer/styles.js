import { styled } from "styled-components";

export const FooterStyles = styled.footer`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
    justify-content: center;
    background: linear-gradient(180deg, #763f17 0%, #955600 89%);
    color: ${props => props.theme.colors.white};
    padding: 20px 0;
    div {
        display: flex;

    p {
        margin: 0;
    }
    }
    

`
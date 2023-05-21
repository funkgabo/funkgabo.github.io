import { styled } from "styled-components";

export const HomeSkillsStyles = styled.section`
    padding: 35px 0 35px 0;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(44,69,124,1) 0%, rgba(22,42,85,1) 100%);
        p {
        margin: 0;
        text-align: center;
        font-size: 22px;
        color: ${props=> props.theme.colors.white2};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h1 {
        margin: 13px 13px 0 13px;
        font-size: 32px;
        text-align: center;
        color: ${props=> props.theme.colors.white};
        letter-spacing: 3px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    span {
        color: ${props=> props.theme.colors.yellow};
    }   
}
`

export const HomeProfileStyles = styled.section`
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${props=> props.theme.colors.dark};
    h3 {
        color: ${props=> props.theme.colors.orangeCalm};
        font-weight: 200;
        font-size: 26px;
        margin: 0;
    }
    h2 {
        color: ${props=> props.theme.colors.white};
        font-size: 31px;
        font-weight: 600;
        margin: 10px 0;
    }
    p {
        color: ${props=> props.theme.colors.white2};
        font-size: 27px;
        margin: 0;
        font-weight: 100;
    }
`
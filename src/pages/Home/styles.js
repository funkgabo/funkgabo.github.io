import { styled } from "styled-components";


export const HomeSkillsStyles = styled.section`
    position: relative;
    padding: 35px 0 35px 0;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.dark1};
    overflow: hidden;
    img{
        position: absolute;
        object-fit: cover;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .2;
    }
    p {
        margin: 0;
        text-align: center;
        font-size: 22px;
        color: ${props => props.theme.colors.white2};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h1 {
        margin: 13px 13px 0 13px;
        font-size: 32px;
        text-align: center;
        color: ${props => props.theme.colors.white};
        letter-spacing: 3px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    span {
        color: ${props => props.theme.colors.orangeCalm};
    }   
}
`

export const HomeProfileStyles = styled.section`
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${props => props.theme.colors.blueo};
        display: flex;
        justify-content: center;
        gap: 50px;
        picture{
            width: 50%;
            display: flex;
            justify-content: end;
            align-items: center;
            img {
                width: 600px;
                opacity: .6;
                border-radius: 15px;
            }
            @media (max-width: 1230px) {
            display: none;
            }
        }
        div{
            width: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            h3 {
            color: ${props => props.theme.colors.orangeCalm};
            font-weight: 200;
            font-size: 20px;
            margin: 0;
            }
            h2 {
            color: ${props => props.theme.colors.white};
            font-size: 36px;
            font-weight: 600;
            margin: 10px 0;
            }
            p {
            color: ${props => props.theme.colors.white2};
            font-size: 27px;
            margin: 0;
            font-weight: 100;
            max-width: 620px;     
            @media (max-width: 1230px) {
            max-width: 100%;
            }
            margin-bottom: 40px;
            }
            @media (max-width: 1230px) {
            width: 100%;
            align-items: center;
            }
            @media (min-width: 1230px) {
                padding: 0 0 0 50px;
            }
        }       
`
import { styled } from "styled-components";
import { rotateFlipIn, slideIn } from "../../styles/animations";

export const HeaderStyles = styled.header`
    width: 100%;
    background: linear-gradient(180deg, rgba(79,79,79,1) 0%, rgba(51,51,51,1) 30%, rgba(24,24,24,1) 100%);
    border-bottom: 1px solid #919191;
    div{
        width: 100%;
        picture {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            width: 100%;
            padding:10px;
            img{
                ${rotateFlipIn}
                border-radius: 50%;
            }
            p {
                ${slideIn};
                height: 100%;
                color: #F09C28;
                font-weight: 600;
                letter-spacing: 4px;
                text-align: center;
                margin: 9px 0 0 0;
                vertical-align: middle;
                font-size: 30px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
        }
    }
    
`

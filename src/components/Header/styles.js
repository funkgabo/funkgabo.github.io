import { styled } from "styled-components";
import { rotateFlipIn, slideIn } from "../../styles/animations";

export const HeaderStyles = styled.header`
    width: 100%;
    background:linear-gradient(180deg, rgba(32,31,45,1) 0%, rgba(14,13,23,1) 100%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 30PX 20px 30PX;
    div{
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
                color: #FFA35A;
                font-weight: 600;
                letter-spacing: 4px;
                text-align: center;
                vertical-align: middle;
                font-size: 30px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
        }
    }
    @media (min-width: 443px) {
    flex-direction: row;
  }
`

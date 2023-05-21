import { styled } from "styled-components";
import { rotateFlipIn, slideIn } from "../../styles/animations";

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: #242424;
    border-bottom: 1px solid #919191;
    div picture {
        margin:10px;
        padding:0;
        img{
            ${rotateFlipIn}
            border-radius: 50%;
        }
    }
    div{
        width: 100%;
        display: flex;
        align-items: center;
    div{
        span {
            ${slideIn};
            width: 110px;
            color: #F09C28;
            font-weight: 100;
            margin: 0;
            font-size: 26px;
            margin: 0 0 0 10px;
        }
    }
}
`

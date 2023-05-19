import { styled } from "styled-components";

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(180deg, rgba(79,79,79,1) 0%, rgba(51,51,51,1) 30%, rgba(24,24,24,1) 100%);
    border-bottom: 1px solid #919191;
    div picture {
        margin:10px;
        padding:0;
        img{
            border-radius: 50%;
        }
    }
    div{
        width: 100%;
        display: flex;
        align-items: center;
    div{
        span {
            width: 110px;
            color: #FF9416;
            font-weight: 100;
            margin: 0;
            font-size: 26px;
            margin: 0 0 0 10px;
        }
    }
}
`
import { styled } from "styled-components"

export const DegreeItemContainer = styled.div`
    width:100%;
    min-height: 200px;
    display: flex;
    gap: 20px;
    border: 1px solid ${props => props.theme.colors.white2};
    border-radius: 15px;
    padding: 15px;
    margin: 10px 0;
    transition: all .4s;
    &:hover {
        background-color: #161616;
    }
    picture img {
        border-radius: 50%;
    }
`
export const DegreesDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        padding: 0;
        margin: 0;
        font-size: 27px;
    }
    span {
        font-size: 18px;
        line-height: 30px;
    }
`
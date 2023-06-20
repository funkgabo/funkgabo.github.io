import { styled } from "styled-components";

export const DegreesListContainer = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 320px;
    gap: 15px;
     @media (min-width: 900px) {
        height: auto;
        flex-direction: row;
        max-width: 100%;
      }
`


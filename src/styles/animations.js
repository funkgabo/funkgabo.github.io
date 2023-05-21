import { keyframes, css } from "styled-components"

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

const rotateFlipInKeyframes = keyframes`
    from {
    transform: rotateX(80deg);
    opacity: 0;
  }
    to {
    transform: rotateX(0);
    opacity: 1;
  }
`
const slideInKeyframes = keyframes`
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '.5s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`
export const rotateFlipIn = ({ time = '.5s', type = 'cubic-bezier(0.250, 0.460, 0.450, 0.940) both' } = {}) => css`animation: ${time} ${rotateFlipInKeyframes} ${type};`
export const slideIn = ({ time = '.4s', type = 'cubic-bezier(0.250, 0.460, 0.450, 0.940) both' } = {}) => css`animation: ${time} ${slideInKeyframes} ${type};`
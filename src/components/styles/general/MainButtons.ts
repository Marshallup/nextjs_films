import styled from "styled-components";
import playIcon from 'src/images/play.svg';
import { COLORS, FONT_SIZE } from "../variables";

interface MainButtonInterface {
    theme: 'base',
    type: 'button' | 'submit';
}

export const MainButton = styled.button.attrs(({ type = 'button' }) => ({
    type,
}))<MainButtonInterface>`
    display: flex;
    align-items: center;
    border-radius: 5rem;
    padding: 1.2rem 3rem;
    background-color: ${COLORS.BASE_ORANGE};
    color: ${COLORS.BASE_TEXT};
    font-weight: 500;
    cursor: pointer;
    font-size: ${FONT_SIZE.BIGGER_SIZE};
    &::before {
        content: '';
        margin-right: 1.3rem;
        display: inline-block;
        width: 1.8rem;
        height: 1.8rem;
        background: url(${playIcon.src}) center center/contain no-repeat;
    }
`;
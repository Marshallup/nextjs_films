import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { COLORS, FONT_SIZE } from 'components/styledComponents/variables';
import kinopoiskLogo from 'src/images/kinopoisk-logo-text.png';

export const MainPromoContentFilmAbout = styled(motion.div)`
    margin-bottom: 5.6rem;
`;
export const MainPromoContentFilmDetails = styled(motion.div)`
    margin: 0 0 5rem 0;
`;
export const MainPromoTitleFilm = styled(motion.div)`
    display: inline-block;
    font-weight: 800;
    text-transform: uppercase;
    color: #FFFFFF;
`;
export const MainPromoTitleBigFilm = styled(MainPromoTitleFilm)`
    font-size: 10rem;
    margin-bottom: 5rem;
    margin-top: 15rem;
    transform-origin: center center;
`;
export const MainPromoTitleSmallFilm = styled(MainPromoTitleFilm)`
    margin-top: 5rem;
    font-size: 6rem;
`;
export const MainPromoTextList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;
export const MainPromoTextItem = styled.li`
    font-weight: 700;
    margin-right: 1rem;
    font-size: ${FONT_SIZE.BIGGER_SIZE};
    color: ${COLORS.BASE_TEXT};
    &:last-child {
        margin-right: 0;
        &::after {
            display: none;
        }
    }
    &::after {
        content: '';
        display: inline-block;
        background-color: ${COLORS.BASE_TEXT_GREY};
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 100%;
        vertical-align: middle;
        margin-left: 1rem;
    }
`;
export const MainPromoTextAgeLimit = styled.div`
    margin: 0 2.5rem;
    padding: 0.4rem 1rem;
    display: inline-block;
    border-radius: 0.57rem;
    border: 0.115rem solid ${COLORS.BASE_TEXT};
    font-weight: 700;
    font-size: ${FONT_SIZE.BASE_SIZE};
    color: ${COLORS.BASE_TEXT};
`;
export const MainPromoTextFilmLength = styled.div`
    font-weight: 700;
    font-size: ${FONT_SIZE.BIGGER_SIZE};
    color: ${COLORS.BASE_TEXT};
`;
export const MainPromoTextFilmDescr = styled(motion.div)`
    margin-top: 1rem;
    max-width: 50rem;
    line-height: 122%;
    color: ${COLORS.BASE_TEXT_GREY};
    font-weight: 400;
    font-size: ${FONT_SIZE.BASE_SIZE};
`;
export const MainPromoAddInfoContent = styled(motion.div)`
    display: flex;
    align-items: center;
`;
export const MainPromoFilmFooter = styled(motion.div)`
    display: flex;
    margin-top: 15.6rem;
`;
export const MainPromoKinopoiskRating = styled.div`
    letter-spacing: 0.09em;
    margin-left: 2.6rem;
    display: flex;
    align-items: center;
    font-size: ${FONT_SIZE.BIGGER_SIZE};
    color: ${COLORS.BASE_TEXT_GREY};
    font-weight: 400;
    &::after {
        content: '';
        margin-left: 0.6rem;
        display: block;
        width: 11.2rem;
        height: 2.2rem;
        background: url(${kinopoiskLogo.src}) center center/contain no-repeat;
    }
`;
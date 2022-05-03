import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { COLORS, FONT_SIZE } from 'components/styles/variables';
import kinopoiskLogo from 'src/images/kinopoisk-logo-text.png';
import bg from '../../images/1.png';


export const MainPromoContent = styled(motion.div)`
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 1300px) {
        margin-top: 2rem;
    }
`;
export const MainPromoContentHeader = styled(MainPromoContent)`
    margin-top: 5rem;
`;
export const MainPromoContentAbout = styled(MainPromoContent)``;
export const MainPromoContentDetail = styled(MainPromoContent)``;
export const MainPromoAbout = styled.div`
    flex-basis: 45%;

    @media screen and (max-width: 1200px) {
        flex-basis: 60%;
    }
`;
export const MainPromoDetails = styled(motion.div)`
    padding: 16rem 0 0 5rem;
    flex: 1;

    @media screen and (max-width: 1300px) {
        padding-top: 13rem;
        padding-left: 2rem;
    }
    @media screen and (max-width: 1200px) {
        padding-top: 10rem;
    }
`;
export const MainPromoDetailsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 60rem;
`;
export const MainPromoTabsItem = styled.li<{ active?: boolean }>`
    margin-right: 2rem;
    padding: 1rem;
    border-radius: 50px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
    ${({ active }) => active && css`
        background: rgba(0, 0, 0, 0.3);
    `}
`;
export const MainPromoTabsLink = styled.div`
    padding: 0 1.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
`;
export const MainPromoSection = styled.section`
    position: relative;
    z-index: 0;
    background: url(${bg.src}) center center/cover no-repeat;
    height: 100vh;
    min-height: 980px;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
    }
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        background: transparent;
        backdrop-filter: blur(0);
        transition: backdrop-filter 0.5s ease, background-color 0.5s ease;
    }
    &.active {
        &:after {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(7px);
        }
    }

    @media screen and (max-width: 1800px) {
        min-height: 780px;
    }
    @media screen and (max-width: 1300px) {
        padding: 4rem 0 7rem 0;
        height: auto;
    }
`;
export const Div = styled(motion.div)`
    height: 100vh;
`;
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
    margin: 15rem 0 5rem 0;
    transform-origin: center center;

    @media screen and (max-width: 1800px) {
        margin: 4rem 0 2rem;
    }
    @media screen and (max-width: 1300px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 1200px) {
        margin-top: 0;
    }
`;
export const MainPromoTitleSmallFilm = styled(MainPromoTitleFilm)`
    margin: 5rem 0 1rem 0;
    font-size: 6rem;

    @media screen and (max-width: 1200px) {
        margin-top: 0;
    }
`;
export const MainPromoTextFilmDescr = styled(motion.div)`
    line-height: 122%;
    color: ${COLORS.BASE_TEXT_GREY};
    font-weight: 400;
    font-size: ${FONT_SIZE.BASE_SIZE};
`;
export const MainPromoTextFilmDescrAbout = styled(MainPromoTextFilmDescr)`
    margin-top: 1rem;
    max-width: 50rem;
`;
export const MainPromoTextFilmDescrDetail = styled(MainPromoTextFilmDescr)`
    margin-top: 3rem;
    max-width: 51.1rem;
`;
export const MainPromoAddInfoContent = styled(motion.div)`
    display: flex;
    align-items: center;
`;
export const MainPromoAddInfoContentDetail = styled(motion.div)`
    display: flex;
    align-items: center;
`;
export const MainPromoFilmFooter = styled(motion.div)`
    display: flex;
`;
export const MainPromoFilmFooterAbout = styled(MainPromoFilmFooter)`
    margin-top: 15.6rem;

    @media screen and (max-width: 1800px) {
        margin-top: 11.6rem;
    }
    @media screen and (max-width: 1200px) {
        margin-top: 6.6rem;
    }
`;
export const MainPromoFilmFooterDetail = styled(MainPromoFilmFooter)`
    margin-top: 5rem;
`;
export const MainPromoKinopoiskRating = styled.div`
    letter-spacing: 0.09em;
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
export const MainPromoKinopoiskRatingAbout = styled(MainPromoKinopoiskRating)`
    margin-left: 2.6rem;
`;
export const MainPromoKinopoiskRatingDetail = styled(MainPromoKinopoiskRating)`

`;
export const MainPromoListItem = styled.li`
    font-weight: 500;
    font-size: ${FONT_SIZE.BASE_SIZE};
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.8rem;
    &:last-child {
        margin-bottom: 0;
    }
`;
export const MainPromoListTitle = styled.div`
    font-weight: 500;
    font-size: ${FONT_SIZE.BASE_SIZE};
    color: ${COLORS.BASE_TEXT};
    margin-bottom: 1rem;
`;
export const MainPromoList = styled.ul`

`;
export const MainPromoListWrapper = styled(motion.div)`
    max-width: 21rem;
    margin: 0 9rem 6rem 0;
    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 1200px) {
        margin-bottom: 2rem;
    }
`;
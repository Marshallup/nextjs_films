import { motion } from "framer-motion";
import styled from "styled-components";
import { COLORS, FONT_SIZE } from 'components/styles/variables';

export const FilmInfoListWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
export const MainPromoTextList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 2.5rem 0.5rem 0;
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
    margin: 0 2.5rem 0.5rem 0;
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
    margin-bottom: 0.5rem;
    font-size: ${FONT_SIZE.BIGGER_SIZE};
    color: ${COLORS.BASE_TEXT};
`;
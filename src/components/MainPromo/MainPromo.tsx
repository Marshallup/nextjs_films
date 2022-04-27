import React, { useState } from "react";
import styled, { css } from "styled-components";
import bg from '../../images/1.png';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import MainContainer from "components/styledComponents/general/MainContainer";
import TabComponent from "components/TabComponent";
import MainPromoTabs from "components/MainPromoTabs";
import { MainButton } from 'components/styledComponents/general/MainButtons';
import {
    MainPromoTitleBigFilm,
    MainPromoTitleSmallFilm,
    MainPromoContentFilmAbout,
    MainPromoTextList,
    MainPromoTextItem,
    MainPromoTextAgeLimit,
    MainPromoTextFilmLength,
    MainPromoAddInfoContent,
    MainPromoTextFilmDescr,
    MainPromoFilmFooter,
    MainPromoKinopoiskRating,
    MainPromoContentFilmDetails,
} from './styledComponents';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());


const tabHeaderData = [
    {
        id: 'about',
        title: 'О фильме'
    },
    {
        id: 'details',
        title: 'Детали',
    }
]


const MainPromoContent = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: flex-end;
`;
const MainPromoBody = styled.div`
    flex-basis: 45%;
`;
// export const MainPromoTabs = styled.ul`
//     display: flex;
// `;
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
const MainPromoTabsContent = styled.div``;
const MainPromoTab = styled.div``;
const MainPromoTabsTitle = styled.div``;
const MainPromoSection = styled.section`
    position: relative;
    z-index: 0;
    background: url(${bg.src}) center center/cover no-repeat;
    height: 100vh;
    min-height: 500px;
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
`;

const Div = styled(motion.div)`
    height: 100vh;
`;

const transitionPromoBlock = {
    duration: 0.3,
}
const transitionPromoContent = {
    ...transitionPromoBlock,
}

const MainPromo = () => {
    const [ activeTabIdx, setActiveTabIdx ] = useState(0);
    const [ isDetailsFilm, setIsDetailsFilm ] = useState(false);

    function onChangeTab(idx: number) {
        setActiveTabIdx(idx);

        if (tabHeaderData[idx].id === 'details') {
            setIsDetailsFilm(true)
        } else {
            setIsDetailsFilm(false);
        }
    }

    return (
        <>
            <MainPromoSection className={`main-section-first ${isDetailsFilm ? 'active' : ''}`}>
                <MainPromoContent>
                    <MainPromoBody>
                        <MainPromoTabs
                            activeIdx={activeTabIdx}
                            headerData={tabHeaderData}
                            onChangeTab={onChangeTab}
                        >
                            <>
                                <MainPromoContentFilmAbout
                                    animate={{
                                        display: !isDetailsFilm ? 'block' : 'none',
                                    }}
                                    initial={false}
                                    transition={transitionPromoContent}
                                >
                                    <MainPromoTitleBigFilm
                                        animate={{
                                            y: !isDetailsFilm ? 0 : '20px',
                                            // height: !isDetailsFilm ? '100%' : 0,
                                            opacity: !isDetailsFilm ? 1 : 0
                                        }}
                                        transition={transitionPromoBlock}
                                    >
                                        Дюна
                                    </MainPromoTitleBigFilm>
                                    <MainPromoAddInfoContent
                                        animate={{
                                            y: !isDetailsFilm ? 0 : '50%',
                                            opacity: !isDetailsFilm ? 1 : 0
                                        }}
                                        transition={{
                                            ...transitionPromoBlock,
                                            delay: 0.1
                                        }}
                                    >
                                        <MainPromoTextList>
                                            <MainPromoTextItem>
                                                2021
                                            </MainPromoTextItem>
                                            <MainPromoTextItem>
                                                Фантастика
                                            </MainPromoTextItem>
                                            <MainPromoTextItem>
                                                Драма
                                            </MainPromoTextItem>
                                            <MainPromoTextItem>
                                                Приключения
                                            </MainPromoTextItem>
                                        </MainPromoTextList>
                                        <MainPromoTextAgeLimit>
                                            12+
                                        </MainPromoTextAgeLimit>
                                        <MainPromoTextFilmLength>
                                            155 мин
                                        </MainPromoTextFilmLength>
                                    </MainPromoAddInfoContent>
                                    <MainPromoTextFilmDescr
                                        animate={{
                                            y: !isDetailsFilm ? 0 : '50%',
                                            opacity: !isDetailsFilm ? 1 : 0
                                        }}
                                        transition={{
                                            ...transitionPromoBlock,
                                            delay: 0.2
                                        }}
                                    >
                                        Один из самых ожидаемых и амбициозных проектов последних лет, 
                                        новая версия культового фантастического романа Фрэнка Герберта 
                                        от автора «Прибытия» и «Пленниц», канадского визионера Дени Вильнева. 
                                    </MainPromoTextFilmDescr>

                                    <MainPromoFilmFooter
                                        animate={{
                                            y: !isDetailsFilm ? 0 : '50%',
                                            opacity: !isDetailsFilm ? 1 : 0
                                        }}
                                        transition={{
                                            ...transitionPromoBlock,
                                            delay: 0.3
                                        }}
                                    >
                                        <MainButton>
                                            Смотреть трейлер
                                        </MainButton>
                                        <MainPromoKinopoiskRating>
                                            7.9
                                        </MainPromoKinopoiskRating>
                                    </MainPromoFilmFooter>

                                </MainPromoContentFilmAbout>

                                <MainPromoContentFilmDetails
                                    animate={{
                                        display: isDetailsFilm ? 'block' : 'none',
                                    }}
                                    initial={false}
                                    transition={transitionPromoContent}
                                >
                                    <MainPromoTitleSmallFilm
                                        animate={{
                                            y: isDetailsFilm ? 0 : '-20px',
                                            opacity: isDetailsFilm ? 1 : 0
                                        }}
                                        transition={transitionPromoBlock}
                                    >
                                        Дюна
                                    </MainPromoTitleSmallFilm>
                                </MainPromoContentFilmDetails>
                            </>
                        </MainPromoTabs>
                    </MainPromoBody>
                </MainPromoContent>
            </MainPromoSection>
            <Div>
                asd
            </Div>
        </>
    )
}

export default MainPromo;
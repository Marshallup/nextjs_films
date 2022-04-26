import React, { useState } from "react";
import styled, { css } from "styled-components";
import bg from '../../images/1.png';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import MainContainer from "components/styledComponents/general/MainContainer";
import TabComponent from "components/TabComponent";
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const MainPromoContent = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const MainPromoBody = styled.div`
    flex-basis: 45%;
`;
export const MainPromoTabs = styled.ul`
    display: flex;
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
const MainPromoTabsContent = styled.div``;
const MainPromoTab = styled.div``;
const MainPromoTabsTitle = styled.div``;
const MainPromoSection = styled.section`
    position: relative;
    z-index: 0;
    background: url(${bg.src}) center center/cover no-repeat;
    height: 100vh;
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
        transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
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

const MainPromo = () => {
    const [ isMoreFilm, setIsMoreFilm ] = useState(false);
    const [tabs, setTabs] = useState(
        [
            {
                id: 'about',
                title: 'О фильме',
                isActive: true,
            },
            {
                id: 'details',
                title: 'Детали',
                isActive: false,
            }
        ]
    );
    const { scrollY, scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollY, [0, 200], [0, 1]);

    // function onChangeTab(idx: number) {
    //     const tabsArr = tabs.map((tab, idxTab) => {
    //         tab.isActive = false;
    //         if (idxTab === idx) {
    //             tab.isActive = true;
    //         }
    //         return tab;
    //     });

    //     if (tabs[idx].name === 'details') {
    //         setIsMoreFilm(true);
    //     } else {
    //         setIsMoreFilm(false);
    //     }

    //     setTabs(tabsArr);
    // }

    return (
        <>
            <MainPromoSection className={`main-section-first ${isMoreFilm ? 'active' : ''}`}>
                <MainPromoContent>
                    <MainPromoBody>
                        <TabComponent data={tabs}>
                            <MainPromoTabsContent>
                                <MainPromoTab>
                                    <MainPromoTabsTitle>
                                        Дюна
                                    </MainPromoTabsTitle>
                                </MainPromoTab>
                                { isMoreFilm && (
                                    <div>cccccc</div>
                                )}
                            </MainPromoTabsContent>
                        </TabComponent>
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
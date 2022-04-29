import React, { useState, FC } from "react";
import MainContainer from "components/styles/general/MainContainer";
import MainPromoTabs from "components/MainPromoTabs";
import { MainButton } from 'components/styles/general/MainButtons';
import {
    Div,
    MainPromoSection,
    MainPromoContent,
    MainPromoBody,
    MainPromoTitleBigFilm,
    MainPromoTitleSmallFilm,
    MainPromoContentFilmAbout,
    MainPromoAddInfoContent,
    MainPromoAddInfoContentDetail,
    MainPromoTextFilmDescr,
    MainPromoFilmFooter,
    MainPromoKinopoiskRating,
    MainPromoContentFilmDetails,
} from './style';
import FilmInfoList from "components/FilmInfoList";

const filmInfo = {
    list: [
        '2021',
        'Фантастика',
        'Драма',
        'Приключение'
    ],
    ageLimit: '12+',
    filmLength: '155 мин',

};
const tabHeaderData = [
    {
        id: 'about',
        title: 'О фильме'
    },
    {
        id: 'details',
        title: 'Детали',
    }
];

const transitionPromoBlock = {
    duration: 0.3,
}
const transitionPromoContent = {
    ...transitionPromoBlock,
}

const MainPromo: FC = () => {
    const [ activeTabIdx, setActiveTabIdx ] = useState(0);
    const [ isDetailsFilm, setIsDetailsFilm ] = useState(false);
    const sectionClassActive = `${isDetailsFilm ? 'active' : ''}`;

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
            <MainPromoSection
                className={`main-section-first ${sectionClassActive}`}
            >
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
                                        <FilmInfoList
                                            list={filmInfo.list}
                                            ageLimit={filmInfo.ageLimit}
                                            filmLength={filmInfo.filmLength}
                                        />
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
                                    <MainPromoAddInfoContentDetail
                                        animate={{
                                            y: isDetailsFilm ? 0 : '-50%',
                                            opacity: isDetailsFilm ? 1 : 0
                                        }}
                                        transition={{
                                            ...transitionPromoBlock,
                                            delay: 0.1
                                        }}
                                    >
                                        <FilmInfoList
                                            list={filmInfo.list}
                                            ageLimit={filmInfo.ageLimit}
                                            filmLength={filmInfo.filmLength}
                                        />
                                    </MainPromoAddInfoContentDetail>
                                </MainPromoContentFilmDetails>
                                
                            </>
                        </MainPromoTabs>
                    </MainPromoBody>
                </MainPromoContent>
            </MainPromoSection>



            <Div>
                DIV 100VH
            </Div>
        </>
    )
}

export default MainPromo;
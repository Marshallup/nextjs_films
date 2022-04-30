import React, { useState, FC } from "react";
import { MainPromoListProps } from "./interfaces";
import MainContainer from "components/styles/general/MainContainer";
import MainPromoTabs from "components/MainPromoTabs";
import { MainButton } from 'components/styles/general/MainButtons';
import {
    Div,
    MainPromoSection,
    MainPromoContent,
    MainPromoAbout,
    MainPromoDetails,
    MainPromoTitleBigFilm,
    MainPromoTitleSmallFilm,
    MainPromoContentFilmAbout,
    MainPromoAddInfoContent,
    MainPromoAddInfoContentDetail,
    MainPromoFilmFooterAbout,
    MainPromoFilmFooterDetail,
    MainPromoKinopoiskRatingAbout,
    MainPromoKinopoiskRatingDetail,
    MainPromoContentFilmDetails,
    MainPromoTextFilmDescrAbout,
    MainPromoTextFilmDescrDetail,
    MainPromoListItem,
    MainPromoListTitle,
    MainPromoList,
    MainPromoListWrapper,
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
const filmListData = [
    'Константин Лавроненко',
    'Константин Лавроненко',
    'Константин Лавроненко',
    'Константин Лавроненко',
    'Константин Лавроненко',
    'Константин Лавроненко',
]
const transitionPromoBlock = {
    duration: 0.3,
}
const transitionPromoContent = {
    ...transitionPromoBlock,
}

const ListItem: FC = ({ children }) => {
    return (
        <MainPromoListItem>
            { children }
        </MainPromoListItem>
    )
}
const List: FC<MainPromoListProps> = ({
    title,
    data,
}) => {
    return (
        <MainPromoListWrapper>

            <MainPromoListTitle>
                { title }
            </MainPromoListTitle>
            <MainPromoList>
                { data.map((item, idx) => {
                    return (
                        <ListItem key={`${item}-${idx}`}>
                            { item }
                        </ListItem>
                    )
                }) }
            </MainPromoList>

        </MainPromoListWrapper>
    )
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

                    <MainPromoDetails>
                        <List
                            title={'В главных ролях'}
                            data={filmListData}
                        />
                    </MainPromoDetails>

                    <MainPromoAbout>

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
                                    <MainPromoTextFilmDescrAbout
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
                                    </MainPromoTextFilmDescrAbout>

                                    <MainPromoFilmFooterAbout
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
                                        <MainPromoKinopoiskRatingAbout>
                                            7.9
                                        </MainPromoKinopoiskRatingAbout>
                                    </MainPromoFilmFooterAbout>

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

                                    <MainPromoTextFilmDescrDetail
                                        animate={{
                                            y: isDetailsFilm ? 0 : '-30%',
                                            opacity: isDetailsFilm ? 1 : 0
                                        }}
                                        transition={{
                                            ...transitionPromoBlock,
                                            delay: 0.2
                                        }}
                                    >
                                        Один из самых ожидаемых и амбициозных проектов последних лет, 
                                        новая версия культового фантастического романа Фрэнка Герберта от автора 
                                        «Прибытия» и «Пленниц», канадского визионера Дени Вильнева. 
                                        Один из самых ожидаемых и амбициозных проектов последних лет, 
                                        новая версия культового фантастического романа Фрэнка Герберта от 
                                        автора «Прибытия» и «Пленниц», канадского визионера Дени Вильнева. 
                                    </MainPromoTextFilmDescrDetail>

                                    <MainPromoFilmFooterDetail
                                        animate={{
                                            y: isDetailsFilm ? 0 : '-50%',
                                            opacity: isDetailsFilm ? 1 : 0
                                        }}
                                        transition={{
                                            ...transitionPromoBlock,
                                            delay: 0.4
                                        }}
                                    >
                                        <MainPromoKinopoiskRatingDetail>
                                            7.9
                                        </MainPromoKinopoiskRatingDetail>
                                    </MainPromoFilmFooterDetail>

                                </MainPromoContentFilmDetails>
                                
                            </>
                        </MainPromoTabs>


                    </MainPromoAbout>

                </MainPromoContent>
            </MainPromoSection>


            <Div>
                DIV 100VH
            </Div>
        </>
    )
}

export default MainPromo;
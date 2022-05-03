import React, { useState, FC } from "react";
import { MainPromoListProps } from "./interfaces";
import MainContainer from "components/styles/general/MainContainer";
import MainPromoTabs from "components/MainPromoTabs";
import { MainButton } from 'components/styles/general/MainButtons';
import {
    Div,
    MainPromoDetailsContent,
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
    MainPromoContentAbout,
    MainPromoContentDetail,
    MainPromoContentHeader,
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
    {
        title: 'В главных ролях',
        list: [
            'Константин Лавроненко',
            'Константин Лавроненко',
            'Константин Лавроненко',
            'Константин Лавроненко',
            'Константин Лавроненко',
            'Константин Лавроненко',
        ]
    },
    {
        title: 'Оригинальное название',
        list: [
            'Дюна',
        ]
    },
    {
        title: 'Режиссер',
        list: [
            'Константин Лавроненко',
        ]
    },
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
    animate,
    variants,
    custom,
}) => {
    return (
        <MainPromoListWrapper
            custom={custom}
            variants={variants}
            animate={animate}
        >

            <MainPromoListTitle>
                { title }
            </MainPromoListTitle>
            <MainPromoList>
                { data.map((item, idx) => {
                    return (
                        <ListItem
                            key={`${item}-${idx}`}
                        >
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
                
                <MainContainer>

                    <MainPromoContentHeader>
                        <MainPromoAbout>
                            <MainPromoTabs
                                activeIdx={activeTabIdx}
                                headerData={tabHeaderData}
                                onChangeTab={onChangeTab}
                            />
                        </MainPromoAbout>
                    </MainPromoContentHeader>

                    <MainPromoContentAbout
                        animate={{
                            display: !isDetailsFilm ? 'flex' : 'none',
                        }}
                        initial={false}
                        transition={transitionPromoContent}
                    >

                        <MainPromoAbout>
                            <MainPromoContentFilmAbout>
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

                        </MainPromoAbout>

                    </MainPromoContentAbout>

                    <MainPromoContentDetail
                        animate={{
                            display: isDetailsFilm ? 'flex' : 'none',
                        }}
                        initial={false}
                        transition={transitionPromoContent}
                    >
                        <MainPromoDetails>

                            <MainPromoDetailsContent>
                                {
                                    filmListData.map((listItem, listItemIdx) => (
                                        <List
                                            key={listItem.title}
                                            title={listItem.title}
                                            data={listItem.list}
                                            custom={listItemIdx}
                                            variants={{
                                                visible: i => ({
                                                    opacity: isDetailsFilm ? 1 : 0,
                                                    y: isDetailsFilm ? 0 : '-15%',
                                                    transition: {
                                                    delay: i * 0.15,
                                                    },
                                                }),
                                            }}
                                            animate={'visible'}
                                        />
                                    ))
                                }
                            </MainPromoDetailsContent>

                        </MainPromoDetails>

                        <MainPromoAbout>
                            <MainPromoContentFilmDetails>
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

                        </MainPromoAbout>

                    </MainPromoContentDetail>

                </MainContainer>

            </MainPromoSection>


            <Div>
                DIV 100VH
            </Div>
        </>
    )
}

export default MainPromo;
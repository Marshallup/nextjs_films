import React, { FC } from "react";
import {
    FilmInfoListWrapper,
    MainPromoTextList,
    MainPromoTextItem,
    MainPromoTextAgeLimit,
    MainPromoTextFilmLength,
} from './style';
import { FilmInfoListProps } from './interfaces';

const FilmInfoList: FC<FilmInfoListProps> = ({
    list = [],
    ageLimit,
    filmLength,
}) => {
    return (
        <FilmInfoListWrapper>
            <MainPromoTextList>
                {
                    list.map((item, itemIdx) => (
                        <MainPromoTextItem key={`${item}-${itemIdx}`}>
                            { item }
                        </MainPromoTextItem>
                    ))
                }
            </MainPromoTextList>
            {
                ageLimit && (
                    <MainPromoTextAgeLimit>
                        { ageLimit }
                    </MainPromoTextAgeLimit>
                )
            }
            {
                filmLength && (
                    <MainPromoTextFilmLength>
                        { filmLength }
                    </MainPromoTextFilmLength>
                )
            }
        </FilmInfoListWrapper>
    )
}

export default FilmInfoList;
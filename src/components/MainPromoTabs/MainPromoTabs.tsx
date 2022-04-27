import React, { FC, useState } from 'react';
import {
    MainPromoTabsBlock,
    MainPromoTabsItem,
    MainPromoTabsLink,
    MainPromotTabsContent,
} from './styledComponents';
import { MainPromoTabsInterface, TabsHeaderItemInterface } from './interfaces';

const TabsHeaderItem: FC<TabsHeaderItemInterface> = ({
    active = false,
    title,
    idx,
    onChange,
}) => {

    function onClick() {
        if (!active) {
            onChange(idx);
        }
    }

    return (
        <MainPromoTabsItem
            active={active}
            onClick={onClick}
        >
            <MainPromoTabsLink>
                { title }
            </MainPromoTabsLink>
        </MainPromoTabsItem>
    )
}

const MainPromoTabs: FC<MainPromoTabsInterface> = ({
    children,
    activeIdx = 0,
    headerData = [],
    onChangeTab,
}) => {
    const [ activeTabIdx, setActiveTabIdx ] = useState(activeIdx);

    function onChangeTabItem(idx: number) {
        setActiveTabIdx(idx);
        onChangeTab?.(idx);
    }
    
    return (
        <>
            <MainPromoTabsBlock>
                { headerData.map((tab, tabIdx) => (
                    <TabsHeaderItem
                        key={tabIdx}
                        active={activeTabIdx === tabIdx}
                        title={tab.title}
                        idx={tabIdx}
                        onChange={onChangeTabItem}
                    />
                ))}
            </MainPromoTabsBlock>
            <MainPromotTabsContent>

                { children }
            
            </MainPromotTabsContent>
        </>
    )
}

export default MainPromoTabs;
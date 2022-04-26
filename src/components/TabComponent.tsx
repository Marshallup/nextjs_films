import { motion } from "framer-motion";
import React, { useState, FC } from "react";
import TabContent from "./TabContent";
import { MainPromoTabs, MainPromoTabsItem, MainPromoTabsLink } from './MainPromo/MainPromo';

const tabs = [
    {
        id: 'tab1',
        title: 'title',
    },
    {
        id: 'tab2',
        title: 'tab2 tite'
    }
];
interface TabComponentProps {
    data: { id: any, title: string }[],
    onChange?: (index: number) => void
}

const TabComponent: FC<TabComponentProps> = ({ children, data = tabs, onChange = () => {} }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    console.log(children, 'children')
    function onChangeTab(index: number) {
        if (activeTabIndex !== index) {
            setActiveTabIndex(index);
            onChange(index);
        }
    }
    return (
        <MainPromoTabs>
            { data.map((tab, index) => (
                <MainPromoTabsItem
                    key={tab.title}
                    active={activeTabIndex === index}
                    onClick={() => onChangeTab(index)}
                >
                    <MainPromoTabsLink>
                        { tab.title }
                    </MainPromoTabsLink>
                </MainPromoTabsItem>
            )) }
            { children }
        </MainPromoTabs>
    )
}

export default TabComponent;
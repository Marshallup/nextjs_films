import React, { FC, useState, useContext, MouseEvent } from 'react';
import MainTabsContext from './MainTabsContext';
import { motion } from 'framer-motion';

const MainTab: FC<{ id: any, name: string }> = ({ children, id, name }) => {
    const { activeID, onChange } = useContext(MainTabsContext);

    function onClick(event: MouseEvent<HTMLDivElement>) {
        if (activeID !== id) {
            onChange(id);
        }
    }

    return (
        <div>
            <div
                style={{ color: 'red' }}
                onClick={onClick}
            >
                { name }
            </div>
            <motion.div
                animate={{
                    opacity: id === activeID ? 1 : 0,
                    y: id === activeID ? 0 : -20,
                    visibility: id === activeID ? 'visible' : 'hidden',
                }}
                initial={false}
            >
                {children}
            </motion.div>
        </div>
    )
}

const MainTabs: FC<{ activeID: any, onChange?: (key: any) => void }> & { MainTab: typeof MainTab } = ({ activeID = 0, onChange, children, }) => {
    const [ activeKeyVal, setActiveKeyVal ] = useState(activeID);
    
    function setActiveKey(id: any) {
        setActiveKeyVal(id);
        console.log(activeKeyVal, 'active keyt');
        onChange?.(id);
    }

    return (
        <MainTabsContext.Provider value={{ activeID: activeKeyVal, onChange: setActiveKey }}>
            { children }
        </MainTabsContext.Provider>
    )
}

MainTabs.MainTab = MainTab;

export default MainTabs;
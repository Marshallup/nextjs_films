import React, { createContext } from 'react';
import { MainTabsContextInterface } from './interfaces';

const MainTabsContext = createContext<MainTabsContextInterface>({
    activeID: undefined,
    onChange: () => {}
});

export default MainTabsContext;
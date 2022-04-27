export interface MainTabsContextInterface {
    activeID: any,
    onChange: (key: any) => void,
}
export interface TabsHeaderItemInterface {
    active: boolean,
    title: string,
    idx: number,
    onChange: (idx: number) => void,
}
export interface MainPromoTabsInterface {
    headerData: { id: any, title: string }[],
    activeIdx: number,
    onChangeTab?: (idx: number) => void,
}
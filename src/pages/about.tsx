import type { NextPage } from 'next'
import MainPromoTabs from 'components/MainPromoTabs';

const About: NextPage = () => {

    function onChangeTab(id: any) {
        console.log(id, 'onChange about page')
    }

    return (
        <>
            {/* <MainPromoTabs activeID={1} onChange={onChangeTab}>
                <MainPromoTabs.MainPromoTab id={1} name="name tab 1">
                    tab1
                </MainPromoTabs.MainPromoTab>
                <MainPromoTabs.MainPromoTab id={2} name="name tab 2">
                    tab23
                </MainPromoTabs.MainPromoTab>
            </MainPromoTabs> */}
        </>
    )
}

export default About;
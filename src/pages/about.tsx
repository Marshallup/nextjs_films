import type { NextPage } from 'next'
import MainTabs from 'components/MainTabs';

const About: NextPage = () => {

    function onChangeTab(id: any) {
        console.log(id, 'onChange about page')
    }

    return (
        <>
            <MainTabs activeID={1} onChange={onChangeTab}>
                <MainTabs.MainTab id={1} name="name tab 1">
                    tab1
                </MainTabs.MainTab>
                <MainTabs.MainTab id={2} name="name tab 2">
                    tab23
                </MainTabs.MainTab>
            </MainTabs>
        </>
    )
}

export default About;
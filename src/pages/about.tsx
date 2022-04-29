import type { NextPage } from 'next'
import MainPromoTabs from 'components/MainPromoTabs';

const About: NextPage = () => {

    function onChangeTab(id: any) {
        console.log(id, 'onChange about page')
    }

    return (
        <>
            <div className="card">
                <h1 className="h1"></h1>
                <div className="subtitle-h1">div</div>
                <div className="subtitle">div</div>
            </div>
            <div className="card">
                <h1 className="h1"></h1>
                <div className="subtitle subtitle-h1">div</div>
                <div className="subtitle">div</div>
            </div>
        </>
    )
}

export default About;
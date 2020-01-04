import React from 'react';
import { LayoutProvider,  Page, Section } from 'react-page-layout';
import PublicLayout from '../../components/layOut/index'
// import HomeMain from './main';
// import { Page, Section } from 'react-page-layout';
// const layouts = {
//     'public': PublicLayout,
// };

class Home extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa"> homemain </h1>
                </Section>
            </Page>
        )
    }
}
export default Home;
import React from 'react';
import { Page, Section } from 'react-page-layout';

class Home extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">home页面</h1>
                </Section>
            </Page>
        )
    }
}
export default Home;
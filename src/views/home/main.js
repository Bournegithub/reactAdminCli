import React from 'react'
import { Page, Section } from 'react-page-layout';
class HomeMain extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Page layout="public">
                <Section slot="main">
                    <h1> homemain </h1>
                </Section>
            </Page>
        )
    }
}

export default HomeMain;
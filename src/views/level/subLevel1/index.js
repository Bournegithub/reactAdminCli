import React from 'react';
import { Page, Section } from 'react-page-layout';

class SubLevel1 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">level1页面</h1>
                </Section>
            </Page>
        )
    }
}

export default SubLevel1;
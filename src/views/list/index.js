import React from 'react';
import { Page, Section } from 'react-page-layout';


class ListIndex extends React.Component{
    render(){
        return (
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">list页面</h1>
                </Section>
            </Page>
        )
    }
}
export default ListIndex;
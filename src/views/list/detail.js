import React from 'react';
import { Page, Section } from 'react-page-layout';
class ListDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(props, 'detailprops');
    }
    render(){
        return (
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">detail页面</h1>
                </Section>
            </Page>
        )
    }
}
export default ListDetail;
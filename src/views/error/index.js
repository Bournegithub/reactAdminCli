import React from 'react';
class ErrorPage extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props, 'err-props-constructor');
    }
    render(){
        return (
            <div>error page</div>
        )
    }
}
export default ErrorPage;
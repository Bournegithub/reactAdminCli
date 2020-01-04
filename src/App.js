import React from 'react';
import './App.scss';
import { HashRouter,Switch } from 'react-router-dom';
import Routers from './router/routerMap';
import FrontendAuth from './router/frontendAuth';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <HashRouter>
                <Switch>
                    <FrontendAuth config={Routers} />
                </Switch>
            </HashRouter>
        )
    }
}
export default App;
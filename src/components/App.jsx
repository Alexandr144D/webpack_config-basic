import React from "react";
import {Route} from "react-router";
import {routes} from './routes/appRoutes';
import {withRouter} from "react-router";

// COMPONENTS
import {LoginComponent} from './containers/login/LoginComponent.jsx';
import {ProfileComponent} from './containers/profile/ProfileComponent.jsx';
import {StartPageComponent} from './containers/startPage/StartPageComponent.jsx';


function App () {
    return (
        <React.Fragment>
            <header>
                <header>HEADER</header>
            </header>
            <main>
                <Route exact path={routes.main} component={StartPageComponent}/>
                <Route path={routes.login} component={LoginComponent}/>
                <Route path={routes.profile} component={ProfileComponent}/>
            </main>
            <footer>
                <footer>FOOTER</footer>
            </footer>
        </React.Fragment>
    )
}

export default withRouter(App);

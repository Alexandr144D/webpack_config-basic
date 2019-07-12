import React from "react";
import {Route} from "react-router-dom";
import {router} from './router';

import Users from './Routing/Users.jsx';
import About from './Routing/About.jsx';
import Index from './Routing/Index.jsx';
import Withrouter from './Routing/Withrouter.jsx';


class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <header>
                    <h1>HEADER</h1>
                </header>
                <div>
                    <Route exact path={router.index} component={Index}/>
                    <Route path={router.about} component={About}/>
                    <Route path={router.users} component={Users}/>
                    <Route path={router.withrouter} component={Withrouter}/>
                </div>
                <footer>
                    <h1>FOOTER</h1>
                </footer>
            </React.Fragment>
        )
    }
}

export default App;

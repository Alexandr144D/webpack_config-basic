import React from 'react';
import {routes} from '../../routes/appRoutes';


function StartPageComponent (props) {
    return (
        <>
            <h1>sign in</h1>
            <button onClick={() => {props.history.push(`${routes.login}`)}}
            >
                SIGN IN
            </button>
        </>
    )
}

export {StartPageComponent}

import React from 'react';
import {routes} from '../../routes/appRoutes';


function LoginComponent (props) {
    return (
        <>
            <h1>login form page</h1>
            <form>
                <input type="text"/>
                <input type="password"/>
                <button onClick={() => {props.history.push(`${routes.profile}`)}}
                >
                    SUBMIT
                </button>
            </form>
        </>
    )
}

export {LoginComponent};

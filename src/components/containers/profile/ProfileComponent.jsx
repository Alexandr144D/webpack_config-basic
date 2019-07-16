import React from 'react';
import {routes} from '../../routes/appRoutes';


export function ProfileComponent (props) {
    return (
        <>
            <h1>user profile page</h1>
            <button
                onClick={() => {props.history.push(`${routes.main}`)}}
            >
                MAIN
            </button>
        </>
    )
};

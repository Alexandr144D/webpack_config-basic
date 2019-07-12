import React from 'react';
import { withRouter } from "react-router";


function WithrouterComponent(props) {
    function goToAbout() {
        return props.history.push('/about')
    }
    return (
        <div>
            <h1>Withrouter page</h1>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}

export default withRouter(WithrouterComponent)

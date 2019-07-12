import React from "react";

export default function Index (props) {
    function goToAbout () {
        return props.history.push('/about');
    }

    return (
        <div>
            <h2>Index</h2>
            <button onClick={goToAbout}>
                ABOUT PAGE
            </button>
        </div>
    )
};

import React from 'react';

export default function About (props) {
    function goToUsers () {
        return props.history.push('/users');
    }

    function goToWithRouter () {
        return props.history.push('/withrouter');
    }

    return (
        <div>
            <h2>About</h2>
            <button onClick={goToUsers}>
                ABOUT PAGE
            </button>
            <button onClick={goToWithRouter}>
                WITHROUTER PAGE
            </button>
        </div>
    )
};

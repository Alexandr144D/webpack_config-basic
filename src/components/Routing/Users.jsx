import React from 'react';



export default function Users (props) {
    function goToIndex () {
        return props.history.push('/');
    }

    return (
        <div>
            <h2>Users</h2>
            <button onClick={goToIndex}>
                ABOUT PAGE
            </button>
        </div>
    )
}

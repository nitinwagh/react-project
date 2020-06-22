import React from 'react';

// We are taking this props from App.js file
function User (props) {
    return (
        <div>
            <div>
                <label>Name</label>
                <p>{props.user.userName}</p>
            </div>
            <div>
                <label>Last Name</label>
                <p>{props.user.lastName}</p>
            </div>
        </div>
    )
}

export default User
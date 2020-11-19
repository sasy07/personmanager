import React from 'react';

const Person = ({ fullName, personDelete, personChange }) => {
    return (
        <div onClick={personDelete} style={{ cursor: "pointer" }}>
            <p>{`${fullName}`}</p>

        </div>
    );
}

export default Person;
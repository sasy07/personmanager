import React from 'react';

const Person = (firstName, lastName, age) => {
    return (
        <div>
            <p>{`${firstName} ${lastName} ${age} سال سن دارد .`}</p>
        </div>
    );
}

export default Person;
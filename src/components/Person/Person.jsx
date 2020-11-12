import React from 'react';

const Person = ({firstName, lastName , personDelete}) => {
    return (
        <div onClick={personDelete} style={{cursor:"pointer"}}> 
            <p>{`${firstName} ${lastName}`}</p>
        </div>
    );
}

export default Person;
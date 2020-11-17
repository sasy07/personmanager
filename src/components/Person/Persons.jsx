import React from 'react';
import Person from './Person';
const Persons = ({ persons, personDelete, personChange }) => {
    return (<div>
        {persons.map(person => (
            <Person key={person.id}
                fullName={person.fullName}
                personDelete={() => personDelete(person.id)}
                personChange={(event) => personChange(event, person.id)} />
        ))}
    </div>);
}

export default Persons;
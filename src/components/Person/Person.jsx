import React from 'react';
import './person.css';

const Person = ({ fullName, deleted, changed }) => {
    return (
        <div className="person">
            <p>{`${fullName}`}</p>
            <input type="text" placeholder={fullName} onChange={changed} />
            <button className="btnDelete" onClick={deleted} >حذف</button>
        </div>
    );
}

export default Person;
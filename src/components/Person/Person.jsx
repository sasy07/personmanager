import React from 'react';
// import './person.css';

const Person = ({fullName, deleted, changed}) => {
    return (
        <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto">
            <div className="card-body text-center">
                <p>{`${fullName}`}</p>
                <div className="input-group justify-content-center">
                    <input className="form-control w-50" type="text" placeholder={fullName} onChange={changed}/>
                    <div className="input-group-prepend">
                        <button className="btn btn-sm btn-danger fa fa-trash" onClick={deleted}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Person;
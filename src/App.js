import React, {Component} from 'react';
import Persons from './components/Person/Persons';

class App extends Component {
    state = {
        persons: [],
        person: '',
        showPersons: true
    };

    handleShowPersons = () => {
        this.setState({showPersons: !this.state.showPersons});
        console.log(this.state.showPersons);
    };

    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);
        this.setState({persons: filteredPersons});
    };

    handleNameChange = (event, id) => {
        const {persons: allPersons} = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullName = event.target.value;

        console.log(event);

        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({persons});
    };
    handleNewPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        };
        console.log(persons);
        console.log(person);

        persons.push(person);
        console.log(persons);

        this.setState({persons, person: ""});
    };

    setPerson = event => {
        this.setState({person: event.target.value});
        console.log(this.state.person);
    };

    render() {
        const {persons, showPersons} = this.state;

        let person = null;
        if (showPersons) {
            person = (
                <Persons persons={persons}
                         personDelete={this.handleDeletePerson}
                         personChange={this.handleNameChange}/>
            );
        }

        return (
            <div className="rtl text-center">
                <div className="alert alert-info">
                    <h3>مدیریت اشخاص</h3>
                </div>
                <h5 className="alert alert-light">تعداد اشخاص <span
                    className="badge badge-success badge-pill">{persons.length}</span> میباشد .</h5>
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group w-25">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="اسم بهم بده"
                                onChange={this.setPerson}
                                value={this.state.person}
                            />
                            <div className="input-group-prepend">
                                <button type="submit" className="btn btn-sm btn-success fa fa-plus fa-plus-square"
                                        onClick={this.handleNewPerson}/>
                            </div>
                        </div>

                    </form>
                </div>
                <button className="btn btn-sm btn-info" onClick={this.handleShowPersons}>نمایش افراد</button>
                {person}
            </div>
        );
    }
}

export default App;
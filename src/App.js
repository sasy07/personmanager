import React, { Component } from 'react';
import Persons from './components/Person/Persons';
import { toast, ToastContainer } from "react-toastify";
import { Alert, Badge, Button } from 'react-bootstrap';

class App extends Component {
    state = {
        persons: [],
        person: '',
        showPersons: true
    };
    handleShowPersons = () => {
        this.setState({ showPersons: !this.state.showPersons });
        console.log(this.state.showPersons);
    };
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];

        this.setState({ persons: filteredPersons });
        toast.error(`${person.fullName} با موفقیت حذف شد .`, {
            position: "bottom-right",
            closeButton: true,
            closeOnClick: true
        });
    };
    handleNameChange = (event, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullName = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({ persons });
    };
    handleNewPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        };
        if (person.fullName !== "" && person.fullName !== ' ') {
            persons.push(person);
            this.setState({ persons, person: "" });
            toast.success("با موفقیت اضافه شد .", {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            });
        }
    };
    setPerson = event => {
        this.setState({ person: event.target.value });
        console.log(this.state.person);
    };

    render() {
        const { persons, showPersons } = this.state;
        let person = null;
        let badgeStyle = '';
        if (persons.length >= 3) badgeStyle = "success";
        if (persons.length <= 2) badgeStyle = "warning";
        if (persons.length <= 1) badgeStyle = "danger";
        if (showPersons) {
            person = (
                <Persons persons={persons}
                    personDelete={this.handleDeletePerson}
                    personChange={this.handleNameChange} />
            );
        }
        return (
            <div className="rtl text-center">
                <Alert variant="info">
                    <h3>مدیریت اشخاص</h3>
                </Alert>
                <Alert variant="light">
                    تعداد اشخاص
                    <Badge pill
                        variant={`${badgeStyle}`}>
                        {persons.length}
                    </Badge>
                    میباشد .
                </Alert>

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
                                <Button type="submit"
                                    className="fa fa-plus fa-plus-square"
                                    size={"sm"}
                                    variant={"success"}
                                    onClick={this.handleNewPerson} />
                            </div>
                        </div>

                    </form>
                </div>
                <Button className="fa fa-list" variant={showPersons ? "info" : "danger"}
                    onClick={this.handleShowPersons}>نمایش افراد
                </Button>
                {person}
                <ToastContainer />
            </div>
        );
    }
}

export default App;
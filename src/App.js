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
        const styles = {
            "textAlign": "center",
            "direction": "rtl"
        };
        const BtnStyle = {
            "fontFamily": "Shabnam",
            "backgroundColor": "#bbdefb",
            "borderColor": "#0047a1",
            "border": "2px solid #003A21",
            "color": "#003A21",
            "height": "2rem",
            "borderRadius": "0.5em",
            "marginRight": "1em"
        };

        const AddPersonDiv = {
            "width": "40%",
            "border": "2px solid darkgray",
            "borderRadius": "1em",
            "margin": "1em auto",
            "padding": "1em",
            "backgroundColor": "whitesmoke",
            "direction": "rtl"
        }
        let person = null;
        if (showPersons) {
            person = <Persons persons={persons}
                              personDelete={this.handleDeletePerson}
                              personChange={this.handleNameChange}/>
        }
        ;
        return (
            <div style={styles}>
                <h2>مدیریت اشخاص</h2>
                <h3>تعداد اشخاص {persons.length} میباشد .</h3>
                <div style={AddPersonDiv}>
                    <input
                        type="text"
                        placeholder="ساخت شخص جدید"

                        onChange={this.setPerson}
                        value={this.state.person}
                    />
                    <button className="btn btn-sm btn-success fa fa-plus fa-plus-square" onClick={this.handleNewPerson}/>
                </div>
                <button style={BtnStyle} onClick={this.handleShowPersons}>نمایش افراد</button>
                {person}
            </div>
        );
    }
}

export default App;
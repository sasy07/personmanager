import React, { Component } from 'react';
import Persons from './components/Person/Persons';

class App extends Component {
    state = {
        persons: [
            { id : 1 ,firstName: "ساسان", lastName: "غفوری فرد"},
            { id : 2 ,firstName: "ندا", lastName: "رشیدی نیا" },
            { id : 3 ,firstName: "پرند", lastName: "غفوری فرد"}
        ],
        showPersons:false 
    };
    handleShowPersons =()=>{
        this.setState({showPersons: !this.state.showPersons});
        console.log(this.state.showPersons);
    };
    handleDeletePerson = id =>{
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p=>p.id !== id);
        this.setState({persons:filteredPersons});
    }
    render() {
        const { persons ,showPersons} = this.state;
        const styles = {
            textAlign: "center",
            direction: "rtl"
        };
        const BtnStyle={ 
            fontFamily:"Shabnam",
            backgroundColor : "#bbdefb",
            borderColor:"#0047a1",
            borderRadius:"0.25rem"
        };
        let person = null ;
        if(showPersons){
            person = <Persons persons={persons} personDelete={this.handleDeletePerson}/> ;
        };
        return (
            <div style={styles}>
                <h2>مدیریت اشخاص</h2>
                <h3>تعداد اشخاص {persons.length} میباشد .</h3>
                {person}
                <button style={BtnStyle} onClick={this.handleShowPersons}>نمایش افراد</button>
            </div>
        );
    }
}

export default App;
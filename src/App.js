import React, { Component } from 'react';
import Persons from './components/Person/Persons';

class App extends Component {
    state = {
        persons: [
            { firstName: "ساسان", lastName: "غفوری فرد"},
            { firstName: "ندا", lastName: "رشیدی نیا" },
            { firstName: "پرند", lastName: "غفوری فرد"}
        ],
        showPersons:false 
    };
    handleShowPersons =()=>{
        this.setState({showPersons: !this.state.showPersons});
        console.log(this.state.showPersons);
    }
    render() {
        const { persons ,showPersons} = this.state;
        const styles = {
            textAlign: "center",
            direction: "rtl"
        };
        const BtnStyle={ 
            fontFamily:"Shabnam",
            backgroundColor : "pink"
        };
        let person = null ;
        if(showPersons){
            person = <Persons persons={persons} /> ;
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
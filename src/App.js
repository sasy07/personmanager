import React, { Component } from 'react';
import Persons from './components/Person/Persons';

class App extends Component {
    state = {
        persons:[
            {firstName:"ساسان",lastName:"غفوری فرد",age:31},
            {firstName:"ندا",lastName:"رشیدی نیا",age:29},
            {firstName:"پرند",lastName:"غفوری فرد",age:0}
        ]
    };
    render() {
        const {persons} = this.state;
        const styles ={
            textAlign:"center" , 
            direction:"rtl"
        }
        return (
            <div style={styles}>
                <Persons persons={persons}/>
            </div>
        );
    }
}

export default App;
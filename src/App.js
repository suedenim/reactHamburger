import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './UserInputOutput/ValidationComponent';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    otherState: 'some other value',
    textLength: 0
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  textChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ textLength: event.target.value.length});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div >
        {
          this.state.persons.map((person, idx) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              key={person.id} 
              click={() => this.deletePersonHandler(idx)}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })
        }

      </div>
      );
    }

    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}

          <p>
            <input 
              type="text" 
              onChange={(event) => this.textChangedHandler(event)} />
            <br />
            <span>{this.state.textLength}</span>
          </p>

          <div>
            <ValidationComponent
              minLength={5}
              textLength={this.state.textLength} />
          </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
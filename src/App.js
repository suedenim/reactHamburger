import React, { useState } from 'react'; 
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
        { name: 'Max', age: 28 },
        { name: 'Ned', age: 29 },
        { name: 'Orr', age: 30 },
      ],
    otherState: 'other state'
  });

  const [otherState, setOtherState] = useState('blah');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    console.log('clicked');
    // this.state.persons[0].name ='Molar'; // BAD
    setPersonsState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Ned', age: 29 },
        { name: 'Orr', age: 30 },
      ],
      otherState: 'new other'
    });
  }
  
  const nameChangeHandler = (event) => {
    setPersonsState({ 
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Orr', age: 30 },
      ],
      otherState: 'new other'
    });
  }

  return (
    <div className='App'>
      <h1>Blah React App</h1>
      <button onClick={() => switchNameHandler('Name App')}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'Comp Name')}
        changed={nameChangeHandler.bind(this)}
      >Click</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;

// switchNameHandler = () => {
//   // console.log('clicked');
//   // this.state.persons[0].name ='Molar'; // BAD
//   this.setState({ 
//     persons: [
//       { name: 'Molar', age: 28 },
//       { name: 'Ned', age: 29 },
//       { name: 'Orr', age: 30 },
//     ]
//    });
// }
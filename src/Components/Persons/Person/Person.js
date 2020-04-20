import React from 'react';

import classes from './Person.css';

const person = props => {
  // const rndErr = Math.random();
  // if (rndErr > 0.7) {
  //   throw new Error('Error in Person')
  // }
    
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;

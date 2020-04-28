import React, {useEffect, useRef} from 'react';
import AuthContext from '../../Context/auth-context';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    
    useEffect(
        () => { console.log('[Cockpit.js] useEffect'); 
    
        //setTimeout(() => { alert('Data saved!'); }, 1000);
        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] init/unmount clean up useEffect');
        };
    }, []);

    useEffect(
        () => { console.log('[Cockpit.js] 2nd useEffect'); 
        return () => {
            console.log('[Cockpit.js] every render 2nd useEffect');
        };
    });

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    const title = props.title || "Hi, I'm a React App";

    return(
        <div className={classes.Cockpit}>
            <h1>{title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}
                ref={toggleBtnRef}>
                Toggle Persons
            </button>
            <AuthContext.Consumer>
                {
                    (context) => <button onClick={context.login}>Login</button>
                }
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);
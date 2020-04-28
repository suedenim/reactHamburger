import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../Context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js](' + this.props.pid + ') rendering...');

    return (
      <Aux>
        <AuthContext.Consumer> 
          {
            (context) => context.authenticated ? <p>Auth</p> : <p>Not Auth</p>
          } 
        </AuthContext.Consumer>

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          //ref={(inputEl) => {this.inputElement = inputEl} }
          ref={this.inputElementRef}
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
    );
  } 
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
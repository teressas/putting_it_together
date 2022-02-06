import React, { Component } from 'react';

class PersonCardComponent extends Component {

    // Declare constructor to override our default constructor so that we can initially set the state object
    constructor(props) {
        // gives us all the functionality of the default constructor that comes with Component
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increaseAge = (e) => {
        this.setState({age: this.state.age + 1});
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{ lastName } , { firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ this.increaseAge }>Birthday Button for { firstName }</button>
            </div>
        )
    }
} 
export default PersonCardComponent
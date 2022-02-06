import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            age: this.props.age
        }
    }
    // this method goes inside of the LightSwitch Component
    render() {
        const increaseAge = () => {
            this.setState({ age: this.state.age + 1});
        }
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{ lastName } , { firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ increaseAge }>Birthday Button for { firstName }</button>
            </div>
        );
        
    }
}
    
export default PersonCard;
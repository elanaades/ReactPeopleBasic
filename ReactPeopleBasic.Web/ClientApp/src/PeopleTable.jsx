import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
//import Person from './Person';

class PeopleTable extends React.Component {


    state = {
        currentFirstName: '',
        currentLastName: '',
        currentAge: '',
        //color: '',
        people: []
    }

    onFirstNameTextChange = (e) => {
        this.setState({ currentFirstName: e.target.value });
    }

    onLastNameTextChange = (e) => {
        this.setState({ currentLastName: e.target.value });
    }

    onAgeTextChange = (e) => {
        this.setState({ currentAge: e.target.value });
    }

    onClearClick = () => {
        this.setState({ currentFirstName: '' });
        this.setState({ currentLastName: '' });
        this.setState({ currentAge: '' });
    }

    onAddClick = () => {
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.currentFirstName,
            lastName: this.state.currentLastName,
            age: this.state.currentAge,
            //color: this.getRandomColor()
        }
        copy.push(person);

        this.setState({ people: copy, currentFirstName: '', currentLastName: '', currentAge: '' });
    }

    //getRandomColor() {
    //    const colors = ['linen', 'aliceblue', 'lavender', 'lilac', 'lemonchiffon', 'mint', 'thistle'];
    //    return colors[Math.floor(Math.random() * colors.length)];
    //}


    render() {
        return (
            <div className="container mt-5">

                <PersonForm currentFirstName={this.state.currentFirstName}
                    currentLastName={this.state.currentLastName}
                    currentAge={this.state.currentAge}
                    onFirstNameTextChange={this.onFirstNameTextChange}
                    onLastNameTextChange={this.onLastNameTextChange}
                    onAgeTextChange={this.onAgeTextChange}
                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick}
                />

                {this.state.people.length === 0 ?
                    <h2 style={{ marginTop: "25px" }}>No people added yet! Start adding...</h2> :
                    <table className='table table-hover table-bordered' style={{ marginTop: "25px" }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonRow people={this.state.people} />
                        </tbody>
                    </table>
                }
            </div>);
    };
};

export default PeopleTable;
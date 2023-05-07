import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-3'>
                    <input value={this.props.currentFirstName} onChange={this.props.onFirstNameTextChange} type='text' placeholder='First Name' className='form-control' />
                </div>

                <div className='col-md-3'>
                    <input value={this.props.currentLastName} onChange={this.props.onLastNameTextChange} type='text' placeholder='Last Name' className='form-control' />
                </div>

                <div className='col-md-3'>
                    <input value={this.props.currentAge} onChange={this.props.onAgeTextChange} type='text' placeholder='Age' className='form-control' />
                </div>

                <div className='col-md-1'>
                    <button onClick={this.props.onAddClick} className='btn btn-outline-primary w-100'>Add</button>
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onClearClick} className='btn btn-outline-danger w-100'>Clear</button>
                </div>
            </div>
        );
    }
}

export default PersonForm;
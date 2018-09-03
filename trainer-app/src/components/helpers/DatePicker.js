import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Auxiliary from '../../hoc/Auxiliary';

class DatePickerInput extends Component {
    
    state = {
        date: new Date()
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <Auxiliary>
                <DatePicker
                    onChange={this.onChange}
                    value={this.state.date}
                    
                />
            </Auxiliary>
        );
    }
}

export default DatePickerInput;
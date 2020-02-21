import React, { Component, createRef } from 'react';
import './CreateForm.css';

const createPlaceholder = word => {
    const isVowel = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U'].includes(word[0]);
    return `Add a${isVowel ? 'n' : ''} ${toCapitalize(word)}`;
};

const toCapitalize = text => {
    return text.toLowerCase().replace(/^./, text[0].toUpperCase());
};

class CreateFormEvent extends Component {
    state = {
        name: '',
        date: new Date().toISOString().substr(0, 10)
    };

    nameForm = createRef();

    handleSubmit = e => {
        e.preventDefault();
        const { name, date } = this.state;
        const { onAdd } = this.props;
        onAdd({ name, date });
        this.setState({
            name: '',
            date: new Date().toISOString().substr(0, 10)
        });
        this.nameForm.current.focus();
    };

    onChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    render() {
        const { name, date } = this.state;
        return (
            <div className='CreateForm'>
                <form onSubmit={this.handleSubmit} className='form_container'>
                    <div>
                        <label htmlFor='name'>Movie Title</label>
                        <input
                            name='name'
                            type='text'
                            ref={this.nameForm}
                            required
                            value={name}
                            onChange={this.onChange}
                            placeholder={createPlaceholder(this.props.type)}
                        />
                    </div>
                    <div className='date-form'>
                        <label htmlFor='score'>Date</label>
                        <input
                            name='date'
                            type='date'
                            value={date}
                            onChange={this.onChange}
                        />
                    </div>
                    <button>추가</button>
                </form>
            </div>
        );
    }
}

export default CreateFormEvent;

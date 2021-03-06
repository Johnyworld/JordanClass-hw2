import React, { Component, createRef } from 'react';
import './CreateForm.css';
import { maxScore, minScore, scoreStep } from './MovieContainer';

const createPlaceholder = word => {
    const isVowel = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U'].includes(word[0]);
    return `Add a${isVowel ? 'n' : ''} ${toCapitalize(word)}`;
};

const toCapitalize = text => {
    return text.toLowerCase().replace(/^./, text[0].toUpperCase());
};

class CreateForm extends Component {
    state = {
        name: '',
        score: 0,
        watched: false
    };

    nameForm = createRef();

    handleSubmit = e => {
        e.preventDefault();
        const { name, score, watched } = this.state;
        const { onAdd } = this.props;
        onAdd({ name, score, watched });
        this.setState({
            name: '',
            score: 0,
            watched: false
        });
        this.nameForm.current.focus();
    };

    onChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    render() {
        const { name, score, watched } = this.state;
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
                    <div className='score-form'>
                        <label htmlFor='score'>Score</label>
                        <input
                            name='score'
                            type='number'
                            value={score}
                            min={minScore}
                            onChange={this.onChange}
                            max={maxScore}
                            step={scoreStep}
                        />
                    </div>
                    <div className='check-form'>
                        <label htmlFor='watched'>Watched?</label>
                        <input
                            name='watched'
                            type='checkbox'
                            checked={watched}
                            onChange={this.onChange}
                        />
                    </div>
                    <button>추가</button>
                </form>
            </div>
        );
    }
}

export default CreateForm;

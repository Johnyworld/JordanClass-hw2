import React, { Component } from 'react';
import '../App.css';

import TodoList from './TodoList';
import CreateFormEvent from './CreateFormEvent';

class EventContainer extends Component {
    state = {
        list: []
    };

    id = 1;

    addEvent = ({ name, date }) => {
        const newList = { id: this.id, name, date };
        this.setState({
            list: [...this.state.list, newList]
        });
        this.id++;
    };

    removeEvent = id => e => {
        e.stopPropagation();
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        });
    };

    editDate = (id, sum) => e => {
        e.stopPropagation();
        this.setState({
            list: this.state.list.map(item => {
                if (id === item.id) {
                    const newDate = new Date(item.date);
                    newDate.setDate(newDate.getDate() + (sum ? 1 : -1));
                    return { ...item, date: newDate.toISOString().substr(0, 10) };
                }
            })
        });
    };

    render() {
        return (
            <div className='App'>
                <h3>LIST OF {this.props.type}S</h3>
                <CreateFormEvent onAdd={this.addEvent} type={this.props.type} />
                <TodoList
                    list={this.state.list}
                    onRemove={this.removeEvent}
                    onEdit={this.editDate}
                />
            </div>
        );
    }
}

export default EventContainer;

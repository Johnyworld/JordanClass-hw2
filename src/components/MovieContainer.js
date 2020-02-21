import React, { Component } from 'react';
import '../App.css';

import CreateForm from './CreateForm';
import TodoList from './TodoList';

export const maxScore = 9.9;
export const minScore = 0;
export const scoreStep = 0.1;

class MovieContainer extends Component {
    state = {
        list: []
    };

    id = 1;

    addMovie = ({ name, score, watched }) => {
        const newList = { id: this.id, name, score, watched };
        this.setState({
            list: [...this.state.list, newList]
        });
        this.id++;
    };

    watchMovie = id => e => {
        e.stopPropagation();
        this.setState({
            list: this.state.list.map(item => {
                if (item.id === id) return { ...item, watched: !item.watched };
                return item;
            })
        });
    };

    removeMovie = id => e => {
        e.stopPropagation();
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        });
    };

    editScore = (id, sum) => e => {
        e.stopPropagation();
        this.setState({
            list: this.state.list.map(item => {
                if (item.id === id)
                    if (sum && item.score < maxScore)
                        return {
                            ...item,
                            score: (parseFloat(item.score) + scoreStep).toFixed(1)
                        };
                    else if (!sum && item.score > minScore)
                        return {
                            ...item,
                            score: (parseFloat(item.score) - scoreStep).toFixed(1)
                        };
                return item;
            })
        });
    };

    render() {
        return (
            <div className='App'>
                <h3>LIST OF {this.props.type}S</h3>
                <CreateForm onAdd={this.addMovie} type={this.props.type} />
                <TodoList
                    list={this.state.list}
                    onCheck={this.watchMovie}
                    onRemove={this.removeMovie}
                    onEdit={this.editScore}
                />
            </div>
        );
    }
}

export default MovieContainer;

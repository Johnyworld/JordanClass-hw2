import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { list, onRemove, onCheck, onEdit } = this.props;
        return (
            <ul className='TodoList'>
                {list.map(item => (
                    <TodoItem
                        item={item}
                        key={item.id}
                        onRemove={onRemove}
                        onCheck={onCheck}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        );
    }
}

export default TodoList;

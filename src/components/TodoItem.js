import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate = nextProps => this.props.item !== nextProps.item;

    render() {
        const { id, name, score, date, watched } = this.props.item;
        const { onRemove, onCheck, onEdit } = this.props;

        return (
            <li
                className={`TodoItem flex-align ${watched && 'active'}`}
                onClick={onCheck ? onCheck(id) : undefined}
            >
                <div className='flex-align'>
                    {onCheck && <div className='check'>&#10004;</div>}
                    <div>{name}</div>
                </div>
                <div className='flex-align'>
                    {score && <p>{parseFloat(score).toFixed(1)}</p>}
                    {date && <p>{date}</p>}
                    <div>
                        <div onClick={onRemove(id)} className='button'>
                            [X]
                        </div>
                        <div onClick={onEdit(id, false)} className='button'>
                            [-]
                        </div>
                        <div onClick={onEdit(id, true)} className='button'>
                            [+]
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default TodoItem;

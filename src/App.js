import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

import MovieContainer from './components/MovieContainer';
import EventContainer from './components/EventContainer';

const LIST = ['movie', 'event'];

class App extends Component {
    state = {
        select: window.location.pathname.split('/')[1]
    };

    handleSelect = select => () => {
        this.setState({ select });
    };

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <div className='menu'>
                        {LIST.map(list => (
                            <Link
                                key={list}
                                className={this.state.select === list ? 'selected' : ''}
                                onClick={this.handleSelect(list)}
                                to={`/${list}`}
                            >
                                {list}
                            </Link>
                        ))}
                    </div>
                    <Switch>
                        <Route
                            path={`/${LIST[0]}`}
                            render={() => <MovieContainer type={LIST[0].toUpperCase()} />}
                        />
                        <Route
                            path={`/${LIST[1]}`}
                            render={() => <EventContainer type={LIST[1].toUpperCase()} />}
                        />
                        <Redirect path='*' to='movie' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

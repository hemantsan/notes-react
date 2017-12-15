import React, { Component } from 'react';
import logo from './logo.svg';
import AppCss from './App.css';
import ListComponent from './NoteList/ListComponent';

class App extends Component {

    render() {
        return (
            <ListComponent />
        );
    }
}

export default App;

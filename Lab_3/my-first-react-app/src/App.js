import React from 'react';
import Greeting from './Greeting';
import CurrentDateTime from './CurrentDateTime';
import Counter from './Counter';
import './App.css';
import TextInput from "./TextInput";
import DataFetcher from "./DataFetcher";
import UserList from "./UserList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Greeting name="Мир" />
                <CurrentDateTime />
                <Counter />
                <TextInput />
                <DataFetcher />
                <UserList />
            </header>
        </div>
    );
}

export default App;


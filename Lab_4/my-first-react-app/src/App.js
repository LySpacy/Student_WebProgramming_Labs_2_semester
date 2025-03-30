import React from 'react';
import Greeting from './Greeting';
import CurrentDateTime from './CurrentDateTime';
import Counter from './Counter';
import './App.css';
import TextInput from "./TextInput";
import DataFetcher from "./DataFetcher";
import UserList from "./UserList";
import { MyProvider } from './MyContext';
import DisplayValue from "./DisplayValue";
import UpdateValue from "./UpdateValue";

function App() {
    return (
        <MyProvider>
            <div className="App">
                <header className="App-header">
                    <Greeting name="Мир" />
                    <CurrentDateTime />
                    <Counter />
                    <TextInput />
                    <DataFetcher />
                    <UserList />
                    <DisplayValue />
                    <UpdateValue />
            </header>
        </div>
    </MyProvider>
    );
}

export default App;


import React from 'react';
import Greeting from './Greeting';
import CurrentDateTime from './CurrentDateTime';
import Counter from './Counter'; // Импортируем новый компонент
import './App.css';
import TextInput from "./TextInput";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Greeting name="Мир" />
                <CurrentDateTime />
                <Counter />
                <TextInput />
            </header>
        </div>
    );
}

export default App;


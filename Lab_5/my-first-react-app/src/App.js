import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate, Navigate} from 'react-router-dom';
import Greeting from './Greeting';
import CurrentDateTime from './CurrentDateTime';
import Counter from './Counter';
import './App.css';
import TextInput from "./TextInput";
import DataFetcher from "./DataFetcher";
import UserList from "./UserList";
import DisplayValue from "./DisplayValue";
import UpdateValue from "./UpdateValue";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
    const isAuthenticated = false; // Здесь можно использовать реальное состояние аутентификации

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                    </ul>
                </nav>
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        {/* Проверка аутентификации перед рендером Profile */}
                        <Route
                            path="/profile"
                            element={
                                isAuthenticated ? (
                                    <Profile />
                                ) : (
                                    <Home /> // Если не аутентифицирован, перенаправляем на главную
                                )
                            }
                        />
                    </Routes>
                    <Greeting name="Мир" />
                    <CurrentDateTime />
                    <Counter />
                    <TextInput />
                    <DataFetcher />
                    <UserList />
                    {/* <DisplayValue /> */}
                    {/* <UpdateValue /> */}
                </header>
            </div>
        </Router>
    );
}

export default App;

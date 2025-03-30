import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

function PrivateRoute({ element, ...rest }) {
    const isAuthenticated = false; // Здесь можно использовать реальное состояние аутентификации
    const navigate = useNavigate();

    if (!isAuthenticated) {
        // Перенаправление, если не аутентифицирован
        navigate('/');
        return null;
    }

    return <Route {...rest} element={element} />;
}

export default PrivateRoute;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для фетча данных из API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        // Вызов функции фетча данных при монтировании компонента
        fetchData();
    }, []); // Пустой массив зависимостей указывает на выполнение эффекта только при монтировании

    // Отображение состояния загрузки, ошибки или данных
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            <h2>Данные из API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default DataFetcher;

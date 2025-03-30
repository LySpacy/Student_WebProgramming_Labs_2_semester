import React, { useState } from 'react';

function Counter() {
    // Создание состояния с начальным значением 0
    const [count, setCount] = useState(0);

    // Функция для увеличения значения счетчика
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Текущий счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
        </div>
    );
}

export default Counter;

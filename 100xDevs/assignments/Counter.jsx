// Assignment #1 - Counter Application
// Create a simple counter application that increments and decrements a number when buttons are clicked. The counter value should persist in local storage, so that when the page is refreshed, the counter value remains the same.

import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
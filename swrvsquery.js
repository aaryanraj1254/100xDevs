Both React Query and SWR are libraries designed to make data fetching easier in React applications. They help manage server state, caching, and synchronization of data without much hassle.

Here's a simple example of how to use React Query to fetch data:

import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
};

const Todos = () => {
    const { data, error, isLoading } = useQuery('todos', fetchTodos);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <ul>
            {data.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

const App = () => (
    <QueryClientProvider client={queryClient}>
        <Todos />
    </QueryClientProvider>
);

export default App;


Here's a simple example of how to use SWR to fetch data:

import React from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const Todos = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher);

    if (!data) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <ul>
            {data.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

const App = () => (
    <div>
        <Todos />
    </div>
);

export default App;



React Query: Great for complex applications that require advanced caching and state management. It provides more control over how data is fetched and cached.

SWR: Ideal for simpler applications where you want a lightweight solution for fetching data. It emphasizes keeping data fresh with minimal setup.

Both libraries are excellent for managing data fetching in React applications, and the choice between them often depends on the specific needs of your project. If you need more features and control, go with React Query. If you want something simpler and more straightforward, SWR is a great choice!

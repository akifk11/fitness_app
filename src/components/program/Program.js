import React, { useState } from 'react';
import './Program.css';

function App() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);


    function addItem() {

        if (!todo) {
            alert("enter an item");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: todo
        };

        setTodos((oldList) => [...oldList, item]);

        setTodo("");
        console.log(todos)

    }

    function deleteItem(id) {
        const newArray = todos.filter(item => item.id !== id);
        setTodos(newArray);
    }

    return (
        <div className="program-container">
            <h1>İdman Programım</h1>
            <form className='program-form' onSubmit={(e) => {
                e.preventDefault();
                addItem();
            }}>
                <div className="input-header">
                    <input
                        type="text"
                        placeholder='Bir idman giriniz'
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                    />
                    <button type='submit'>Add</button>
                </div>
            </form>


            <ul className='program-list'>
                {todos.map(item => {
                    return <li key={item.id}> <span>{item.value} </span><button onClick={e => deleteItem(item.id)}>X</button>  </li>
                })}
            </ul>
        </div>
    );
}

export default App;
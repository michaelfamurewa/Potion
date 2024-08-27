import React, { useState } from "react";
import '../styles/dashboard.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';



async function getDashData() {
    const response = await window.util.dashData()
    return response
}

const dashData = await getDashData()


function TodoList() {
    const [todos, setTodos] = useState(dashData.todo)

    async function updateDash() {
        dashData.todo = todos
        await window.util.dashboard(dashData)
    }

    const addTodo = (evt) => {
        evt.preventDefault()
        setTodos((curr) => {
            const upd = [...curr]
            upd.push({ id: 7, text: evt.target[0].value, completed: false })
            updateDash()
            return upd
        })
    }

    return (
        <div className="toDo">
            <label className="sectionHeader" htmlFor="toDo">To-do list</label>
            <ul className="list">
                {todos.map((todo) => <div className="todoHolder" key={todo.id}><input type="checkbox" className="checkTodo" /><li className="todoItem">{todo.text}</li></div>)}
            </ul>
            <form className="addTodo" onSubmit={addTodo}>
                <input type="text" placeholder=" Add item here" />
                <div className="addButton"><AddCircleIcon /></div>
            </form>
        </div>
    )
}

export default function Dashboard() {
    return (
        <div className="dashBoard">
            <section className="container">
                <img className="backImage" src="media:////Users/michaelfamurewa/Projects/txtedit/src/styles/bg.jpg" alt="" />
                <TodoList />
            </section>

            <div className="recents">
                <label className="sectionHeader" htmlFor="recents">Recently Viewed</label>
            </div>

            <section className="container">
                <div className="quoteBox">
                    <span>{dashData.QOTD.quote}</span>
                    <span>{dashData.QOTD.author}</span>
                </div>
            </section>
        </div>
    )
}
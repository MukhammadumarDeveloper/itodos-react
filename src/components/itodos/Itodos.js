import { useState } from 'react'
import './Itodos.css';


function Itodos() {

  const [todos, setTodos] = useState([])
  const [i, setI] = useState(0)

  const createTodo = e => {
    if (e.target.value.length > 2 && e.keyCode === 13) {
      setI(lastI => lastI + 1)
      const newTodo = {
        id: i,
				title: e.target.value.trim(),
				completed: false,
      }
      setTodos([...todos, newTodo])

      e.target.value = null
    }

  }

  const deleteTodo = (todo) => setTodos(todos.filter(t => t.id !== todo.id))
  /* const complated = (id, evt) => (
    function () {
      todos.map(todo=> {
        if (todo.id === id) {
          todo.complated = !todo.complated
        }
        console.log(todos[0]);
        return todo
      })
    }
  ) */
  
  const complated = (e) => {
    console.log();
    if (e.target.checked) {
      e.target.parentElement.classList.add('complated')
    } else {
      e.target.parentElement.classList.remove('complated')
    }
  }

  return (
    <>
      <h1 className="page-title">itodos</h1>

      <div className="box">
        <input className="todos-input" type="text" onKeyUp={createTodo} placeholder="What needs to be done?" />
        <ul className="todos">
          {
            todos.map(todo => {
              return (
                <li className="todo" key={todo.id}>
                  <input className="todo__checkbox" type="checkbox" checked={todos.completed} onChange={complated} />
                  <p className="todo.completed ? 'complated': null">{todo.title}</p>
                  <button className="todo__button" onClick={deleteTodo.bind(null, todo)}>X</button>
              </li>
              )
            })
          }
        </ul>
      </div>
    </>
    )
}

export default Itodos

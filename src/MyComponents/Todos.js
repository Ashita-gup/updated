import React from 'react'
import TodoItem from "./MyComponents/TodoItem"
const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List </h3>
      <TodoItem todo={todo[0]} />
    </div>
  )
}

export default Todos

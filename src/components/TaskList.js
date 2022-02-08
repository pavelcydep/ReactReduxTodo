import React from 'react';
import { ListGroup } from "react-bootstrap";
import Task from './Task'; // импортируем компонент таска, созданный ранее

const TaskList = ({ tasks }) => {

  if (tasks.length)
    return (
      <ListGroup>
        {
          // пробегаемся методом map по нашему массиву с тасками и выводим для каждый таск
          tasks.map(task =>
            <Task key={task.id} task={task} /> 
          )
        }
      </ListGroup>
    )
  else return null;
}

export default TaskList;
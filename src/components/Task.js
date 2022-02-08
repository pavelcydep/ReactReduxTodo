import React from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import { toggleTask, removeTask }  from "../store/actions";

const Task = ({ task }) => {
  const { id, title, completed } = task;
  const dispatch = useDispatch(); // Получаем диспатч из хука

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Form.Check
        id={id}
        type="checkbox"
        label={title}
        checked={completed}
        onChange={ () => dispatch(toggleTask(id)) } // диспатчим нужный экшен по время клика по таску
      />
      <div className="list-group-item-actions">
        <span onClick={() => dispatch(removeTask(id))}>Удалить</span> 
      </div>
    </ListGroup.Item>
  )
}

export default Task;
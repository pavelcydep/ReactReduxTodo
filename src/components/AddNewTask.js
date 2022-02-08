import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

const AddNewTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
console.log(dispatch);
  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  }

  const handleTaskSubmit = () => {
    dispatch(actions.addTask({
      title: taskTitle
    }));
    setTaskTitle('');
  }

  return (
   
    <div className="input-group mb-3"> 
    <FormControl placeholder="Добавить новый таск" value={taskTitle} onChange={e => handleTaskTitleChange(e)} />
    
      <Button variant="outline-secondary" onClick={handleTaskSubmit}>Сохранить</Button>
    
  </div>
     
       

   
  )
}

export default AddNewTask;
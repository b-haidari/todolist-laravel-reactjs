import React from 'react';

const Task = ({ task, onComplete, onDelete }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <tr>
      <td>{task.name}</td>
      <td>Completed: {task.completed ? 'Yes' : 'No'}</td>
      <td>
        {!task.completed && <button onClick={handleComplete} className='btn btn-success'>Complete</button>}
        <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
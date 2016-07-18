import React from 'react';
import Note from './Note.jsx';

export default ({notes, onDelete=() => {}}) => (
  <ul>
    {notes.map(({id, task}) =>
      <li key={id}>
        <Note
          onDelete={onDelete.bind(null, id)}
          task={task} />
        <Note>
          <span>{task}</span>
          <button onClick={onDelete.bind(null, id)}>x</button>
        </Note>
      </li>
    )}
  </ul>
)
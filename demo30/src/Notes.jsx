import React from 'react';
import Note from './Note.jsx';

var notes = [{id:1,task:'task001'},{id:2,task:'task002'},{id:3,task:'task003'}] ;

var Notes = React.createClass({
  onDelete:function(){
      console.info('hello world') ;
  },
  render:function(){
    var arr = notes.map(({id,task})=>{
       return (
          <li key={id}>
            <Note name ="hello">
              <span>{task}</span>
              <button  onClick= {this.onDelete} >x</button>
            </Note>
         </li>
       ) ;
    }) ;
    return (
      <ul>{arr}</ul>
    ) ;
  }
}) ;

export default Notes ;
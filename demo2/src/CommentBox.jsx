import React from 'react' ;
import CommentList from './CommentList .jsx' ;
import CommentForm from './CommentForm.jsx' ; 
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox ;
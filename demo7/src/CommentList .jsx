import React from 'react' ;
import Comment from './Comment.jsx' ; 

var CommentList = React.createClass({
  render: function() {
		var commentNodes = this.props.data.map(function(coment){
    		return (
    			<Comment author ={coment.author} key = {coment.id}>
    				{coment.text}
    			</Comment>
    		) ;
    	}) ;
	    return (
	      <div className="commentList">
	        {commentNodes}
	      </div>
	    );
  }
});

export default CommentList ;
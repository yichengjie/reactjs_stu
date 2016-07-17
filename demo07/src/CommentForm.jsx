import React from 'react' ;
import UUID  from './UUID.js' ;

var CommentForm = React.createClass({
	getInitialState:function(){
		return {author:'',text:''};
	},
	handleAuthorChange:function(e){
		this.setState({author:e.target.value}) ;
	},
	handleTextChange:function(e){
		this.setState({text:e.target.value}) ;
	},
	handleSubmit:function(e){
		e.preventDefault() ;
		console.info('提交表单...') ;
		var author = this.state.author.trim() ;
		var text = this.state.text.trim() ;
		if(!text||!author){
			return ;
		}
		var id = UUID() ;
		//将数据传递给父组件
		this.props.onCommentSubmit({id:id,author: author, text: text});
		//todo: send request to the server
		this.setState({author:'',text:''}) ;
	},
	render:function(){
		return (
			<form className ="commentForm" onSubmit={this.handleSubmit}>
				<div className="form-group">
				    <label>Your name</label>
				    <input
					  className="form-control" 
			          type="text"
			          placeholder="Your name"
			          value={this.state.author}
			          onChange={this.handleAuthorChange}
			        />
				 </div>

				 <div className="form-group">
				    <label>Say something</label>
				    <input
				      className="form-control" 
			          type="text"
			          placeholder="Say something..."
			          value={this.state.text}
			          onChange={this.handleTextChange}
			        />
				 </div>
		        <button type="submit" className="btn btn-default">Submit</button>
			</form>
		) ;
	}
}) ;

export default CommentForm ;
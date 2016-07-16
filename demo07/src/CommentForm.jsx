import React from 'react' ;

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
		//将数据传递给父组件
		this.props.onCommentSubmit({id:'4',author: author, text: text});
		//todo: send request to the server
		this.setState({author:'',text:''}) ;
	},
	render:function(){
		return (
			<form className ="commentForm" onSubmit={this.handleSubmit}>
				<input
		          type="text"
		          placeholder="Your name"
		          value={this.state.author}
		          onChange={this.handleAuthorChange}
		        />
		        <input
		          type="text"
		          placeholder="Say something..."
		          value={this.state.text}
		          onChange={this.handleTextChange}
		        />
				<input type = "submit" value ="Post" />
			</form>
		) ;
	}
}) ;

export default CommentForm ;
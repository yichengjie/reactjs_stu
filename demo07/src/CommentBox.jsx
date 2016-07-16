import React from 'react' ;
import CommentList from './CommentList .jsx' ;
import CommentForm from './CommentForm.jsx' ; 
import $ from 'jquery' ;

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit:function(comment){
    //todo :submit to the server and refresh the list
    console.info('子组件提交数据过来，请处理..') ;
    var comments = this.state.data ;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    //真实的提交数据到后台
    this.saveComment2DB(comment) ;
  },
  saveComment2DB:function(comment){
     console.info('准备提交数据到后台...') ;
     //提交数据到后台
     $.ajax({
       url: this.props.url,
       dataType: 'json',
       type: 'POST',
       data: comment,
       success: function(data) {
        this.setState({data: data});
       }.bind(this),
       error: function(xhr, status, err) {
         this.setState({data: comments});
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit= {this.handleCommentSubmit} />
      </div>
    );
  }
});

export default CommentBox ;
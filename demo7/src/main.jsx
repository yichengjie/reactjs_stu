import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './CommentBox.jsx' ;


ReactDom.render(
	<CommentBox url="./api/comments.json" pollInterval={5000} />,
	document.getElementById('app')
) ;
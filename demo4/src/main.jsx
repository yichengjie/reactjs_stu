import React from 'react';
import ReactDom from 'react-dom';
import CommonBox from './CommentBox.jsx' ;

/*ReactDom.render(<CommonBox/>,
    document.getElementById('app')
);*/
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDom.render(<CommonBox  data={data}/>,
	document.getElementById('app')
) ;
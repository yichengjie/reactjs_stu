import React from 'react';
//git reset --hard HEAD^
/*function test({editing, value, onEdit, ...props}){
	

	//console.info(tail) ;
}*/

var Note = React.createClass({
	render:function(){
		var children = this.props.children ;
		return (
			<div {...this.props}>
			   {children}
			</div>
		) ;
	}
}) ;
export default Note ;


/*export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);*/



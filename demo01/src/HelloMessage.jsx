import React from 'react' ;

var HelloMessage = React.createClass({
	render:function(){
		return <div>Hello world xxx {this.props.name}</div>
	}
}) ;

export {HelloMessage};
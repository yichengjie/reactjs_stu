import React from 'react' ;

var Comment = React.createClass({
  render: function() {
    return (
      <p className="bg-primary" style ={{padding: "15px"}}>
        {this.props.author}-----
        {this.props.children}
      </p>
    );
  }
});

export default Comment ;
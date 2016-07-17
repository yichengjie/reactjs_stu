import React from 'react' ;

var SearchBar = React.createClass({
  render: function() {
    return (
      <form className ="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">过滤关键字</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }
});

export default SearchBar ;


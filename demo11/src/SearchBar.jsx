import React from 'react' ;

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    return (
      <form className ="form-horizontal">

        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="text"
              className ="form-control"
              placeholder="Search..."
              value={this.props.filterText}
              ref="filterTextInput"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={this.props.inStockOnly}
                  ref="inStockOnlyInput"
                  onChange={this.handleChange}
                />
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
import React from 'react' ;
import SearchBar from './SearchBar.jsx' ;
import ProductTable from './ProductTable.jsx' ;

var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});

export default FilterableProductTable;
import React from 'react' ;
//类别row
import ProductCategoryRow from './ProductCategoryRow.jsx' ;
//产品row
import ProductRow from './ProductRow.jsx' ;

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      //判断当前的类别和上一个类别是否相同
      //如果相同则显示产品项列表
      //如果不同则显示产品类别列表
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      //更新当前的类别名称
      lastCategory = product.category;
    });
    return (
      <table className ="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

export default ProductTable ;
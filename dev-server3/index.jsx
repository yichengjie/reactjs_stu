import React from 'react';
import Search from './components/search';
import Plist from './components/plist';

/*class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"keyword": ""};
    this.refreshKeyword = this.refreshKeyword.bind(this);
  }

  refreshKeyword(name) {
    this.setState({"keyword": name});
  }

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search sendAction={this.refreshKeyword}/>
        </section>

        <Plist keyword={this.state.keyword}/>
      </div>    
    );
  }
}*/
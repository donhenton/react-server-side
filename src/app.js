import React from 'react'
      import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }
  sayHello() {

    window.alert("hello")


  }
  doGistList() {

    let items = [];
    if (!this.props.gists) {
      return null;
    }
    let ct = 0;
    this.props.gists.forEach(gist => {
      if (gist.description.trim().length > 0 && ct < 5) {
        items.push(<li key={gist.id}>{gist.description}</li>);
        ct++;
      } else {
        return null;

      }
    })
    return <ul>{items}</ul>

  }
  render() {
    return (<div>
        
        <p><button onClick={this.sayHello.bind(this)}>Say Hello</button></p>
    
        <h4>Server Side Data</h4>
        <blockquote>
            <div>
                {this.doGistList()}
    
            </div>
        </blockquote>
    </div>
          )

  }
}

App.propTypes = {
  gists: PropTypes.array,
}



export default App

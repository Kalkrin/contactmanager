import React, { Component } from 'react';
class test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>
        this.setState({
          title: json.title,
          body: json.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log('componentWillMount..');
  //   }

  //   componentDidUpdate() {
  //     console.log('componentDidUpdate..');
  //   }

  //   componentWillUpdate() {
  //     console.log('componentWillUpdate..');
  //   }

  //   componentWillReceiveProps(nextProps, state) {
  //     console.log('componentWillReceiveProps..');
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default test;

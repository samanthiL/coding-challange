import React, { Component } from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

  }

  render() {

    return (
      <div style={{ marginTop:'30px',margin:'auto',border:'1px solid',justifyContent: 'center',width:'50%'}}>
        <div>
          <h2>Welcome</h2>
        </div>
</div>
    );
  }
}
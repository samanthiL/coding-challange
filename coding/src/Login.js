// import {useHistory} from "react-router-dom";
import React, { Component } from 'react';
import { Button, TextField, Link } from 'react';

// const axios = require('axios');

// const bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.signin = this.signin.bind(this);

  }

   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  signin(){

    console.log("username:", this.state.username);
    //       password: this.state.password

 this.props.history.push('/Home');

    console.log("password:" ,this.state.password);
  }

//     // const pwd = bcrypt.hashSync(this.state.password, salt);

//     axios.post('http://localhost:4000/login', {
//       username: this.state.username,
//       password: this.state.password
//     }).then((res) => {
//       localStorage.setItem('token',  this.state.username);
//       this.props.history.push('/Profile');

//     }).catch((err) => {
//       if (err.response && err.response.data && err.response.data.errorMessage) {
       
//       }
//     });
//   }

  render() {

    return (
      <div style={{ marginTop: '200px' }}>
        <div>
          <h2>Login</h2>
        </div>
           <div>

           <form>
        <label>
       Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.onChange} />
        </label>
        <br /> <br />
        <label>
       Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange} />
        </label>

        <button 
            color="primary"
            size="small"
            // disabled={this.state.username == '' && this.state.password == ''}
             onClick={this.signin}
          >Login
          </button > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</form>

         {/* <TextField 
            // id="standard-basic"
            // type="text"
            // autoComplete="off"
            // name="username"
            // value={this.state.username}
            // onChange={this.onChange}
            // placeholder="User Name"
            // required
          // />
          // <br /><br />
{/*           
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
        
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            // onClick={this.signin}
          >Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       */}
          {/* 
           */}
          
        </div>
      </div>
    );
  }
}
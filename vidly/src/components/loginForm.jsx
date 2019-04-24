import React from "react";

import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {};

  render() {
    return (
      <section className="form">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit} className="mt-3">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;

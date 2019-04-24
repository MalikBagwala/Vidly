import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .max(20)
      .label("Name")
  };
  doSubmit = () => {
    // Call the server
    console.log("Form Submitted");
  };
  render() {
    return (
      <section className="form">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>Register</h3>
            <form onSubmit={this.handleSubmit} className="mt-3">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;

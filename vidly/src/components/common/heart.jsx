import React, { Component } from "react";

class Heart extends Component {
  render() {
    let classes = "fa text-danger fa-heart";
    if (!this.props.liked) classes += "-o";
    return <i className={classes} onClick={this.props.onClick} />;
  }
}

export default Heart;

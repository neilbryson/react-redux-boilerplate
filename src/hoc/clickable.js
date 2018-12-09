import React, { PureComponent } from "react";

const clickable = Component =>
  class WrappedComponent extends PureComponent {
    onClick = e => {
      const { onClick } = this.props;

      if (onClick && typeof onClick === "function") {
        onClick(e);
      }
    };

    onKeyDown = e => {
      if (e.key === " " || e.key === "Enter") {
        this.onClick(e);
      }
    };

    render() {
      const { onClick, onKeyDown, ...other } = this.props;

      return <Component onClick={this.onClick} onKeyDown={this.onKeyDown} {...other} />;
    }
  };

export default clickable;

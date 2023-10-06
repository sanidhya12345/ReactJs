/** @format */

import React from "react";

const User = ({ firstname }) => {
  return <h1>{firstname}</h1>;
};
class GetDrivedStateFromProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "sanidhya",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { firstname: props.firstname };
  }
  render() {
    return (
      <div>
        <User firstname={this.state.firstname}></User>
      </div>
    );
  }
}

export default GetDrivedStateFromProps;
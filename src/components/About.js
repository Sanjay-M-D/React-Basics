import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor...!");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount...!");
  }

  render() {
    console.log("Parent Render....!");

    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          {""}
          This cafe owned by{" "}
          <b>
            <i>RadhaKrishna</i>
          </b>
        </p>

        <UserClass
          name={"Child 1"}
          location={"Bangalore"}
          email={"sanjay@google.com"}
        />
        <UserClass
          name={"Child 2"}
          location={"Bangalore"}
          email={"sanjay@google.com"}
        />
        <UserClass
          name={"Child 3"}
          location={"Bangalore"}
          email={"sanjay@google.com"}
        />
      </div>
    );
  }
}

export default AboutClass;

import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutClass extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor...!");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount...!");
  }

  render() {
    // console.log("Parent Render....!");

    return (
      <div>
        <h1>About Us Page</h1>
        <h4>
          {""}
          This cafe owned by{" "}
          <b>
            <i>RadhaKrishna</i>
          </b>
        </h4>
        {/* <UserClass
          name={"Child 1"}
          location={"Bangalore"}
          email={"sanjay@google.com"}
        /> */}
        <div>
          loggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default AboutClass;

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };

    // console.log(props);

    console.log(this.props.name + "Constructor...!");
  }

  componentDidMount() {
    console.log(this.props.name + " ComponentDidMount...!");
  }

  render() {
    const { name, location, email } = this.props;
    const { count, count2 } = this.state;

    console.log(name + " Render...!");

    return (
      <div>
        <h1>count:{count}</h1>
        <h2>count2:{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Click
        </button>
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h4>{email}</h4>
      </div>
    );
  }
}

export default UserClass;

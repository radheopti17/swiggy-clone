import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "name",
    };
    this.userData = {
      avatar_url: "http://demo.com",
      location: "Default",
    };
  }
  async componentDidMount() {
    this.timer = setInterval(
      () => console.log("Issue of Component Did Mount"),
      1000
    );
    // const data = await fetch("https://api.github.com/users/radheopti17");
    // debugger;
    // this.userData = await data.json();
    // this.setState({ name: this.userData.name });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    //const { name, location } = this.props;
    const { name } = this.state;
    const { avatar_url, location } = this.userData;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Twitter Handle: @1r7</h4>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}

export default UserClass;

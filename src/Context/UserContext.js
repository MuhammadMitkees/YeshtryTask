import React, { Component } from "react";

export const UserContext = React.createContext();

// export const UserProvider = UserContext.Provider;
// export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
  state = {
    user: {
      globalQuantity: 0,
    },
  };
  setUser = (user) => {
    this.setState(() => ({ user }));
  };
  setUserQuantityZero = (user) => {
    this.setState(() => {
      return (user.globalQuantity = 0);
    });
  };
  render() {
    const { children } = this.props;
    const { user } = this.state;
    const { setUser } = this;

    return (
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}
export default UserContext;
export { UserProvider };

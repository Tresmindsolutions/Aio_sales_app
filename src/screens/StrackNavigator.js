import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login";
import Signup from "./Signup";
import Signup2 from "./Signup2";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    },
    Signup: {
      screen: Signup,
      navigationOptions: () => ({
        header: null
      })
    },
    Signup2: {
      screen: Signup2,
      navigationOptions: () => ({
        header: null
      })
    }
  },

  {
    initialRouteName: "Signup2"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}

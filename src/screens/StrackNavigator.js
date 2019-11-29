import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login";
import Signup from "./Signup";
import Signup2 from "./Signup2";
import Home from "./Home";
import Account from "./Account";
import Order from "./Order";
import ItemDetails from "./ItemDetails";
import OrderSummary from "./OrderSummary";

// import Category1 from "../components/order/Category1";

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
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },
    Signup2: {
      screen: Signup2,
      navigationOptions: () => ({
        header: null
      })
    },
    Account: {
      screen: Account,
      navigationOptions: () => ({
        header: null
      })
    },
    // Category1: {
    //   screen: Category1,
    //   navigationOptions: () => ({
    //     header: null
    //   })
    // },
    ItemDetails: {
      screen: ItemDetails,
      navigationOptions: () => ({
        header: null
      })
    },
    OrderSummary: {
      screen: OrderSummary,
      navigationOptions: () => ({
        header: null
      })
    },
    Order: {
      screen: Order,
      navigationOptions: () => ({
        header: null
      })
    }
  },

  {
    initialRouteName: "Order"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}

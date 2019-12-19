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
import Invoice from "./Invoice";
import EditProduct from "./EditProduct";
import AccountDetails from "./AccountDetail";
import Accounts from "./Accounts";
import Accounts2 from "./Accounts2";
import Product from "./Products";
import Catalog from "./Catalog";
import OpenBalances from "../screens/OpenBalances";
import ReceivePayment from "../screens/ReceivePayment";
import ReceivePayment3 from "../screens/ReceivePayment3";
import Dashboard from "./Dashboard";

import Transactions from "./Transactions";
import Openbalances2 from "./Openbalances2";

import Category1 from "../components/order/Category1";

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
    Category1: {
      screen: Category1,
      navigationOptions: () => ({
        header: null
      })
    },
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
    Invoice: {
      screen: Invoice,
      navigationOptions: () => ({
        header: null
      })
    },

    Order: {
      screen: Order,
      navigationOptions: () => ({
        header: null
      })
    },
    EditProduct: {
      screen: EditProduct,
      navigationOptions: () => ({
        header: null
      })
    },
    Accounts: {
      screen: Accounts,
      navigationOptions: () => ({
        header: null
      })
    },
    AccountDetails: {
      screen: AccountDetails,
      navigationOptions: () => ({
        header: null
      })
    },
    Accounts2: {
      screen: Accounts2,
      navigationOptions: () => ({
        header: null
      })
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        header: null
      })
    },
    Product: {
      screen: Product,
      navigationOptions: () => ({
        header: null
      })
    },
    Catalog: {
      screen: Catalog,
      navigationOptions: () => ({
        header: null
      })
    },
    OpenBalances: {
      screen: OpenBalances,
      navigationOptions: () => ({
        header: null
      })
    },
    Transactions: {
      screen: Transactions,
      navigationOptions: () => ({
        header: null
      })
    },
    Openbalances2: {
      screen: Openbalances2,
      navigationOptions: () => ({
        header: null
      })
    },
    ReceivePayment: {
      screen: ReceivePayment,
      navigationOptions: () => ({
        header: null
      })
    },
    ReceivePayment3: {
      screen: ReceivePayment3,
      navigationOptions: () => ({
        header: null
      })
    }
  },

  {
    initialRouteName: "ReceivePayment3"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}

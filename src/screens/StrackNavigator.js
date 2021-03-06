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
import CreateProduct from "./CreateProduct";
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
import Receivepayment2 from "./Receivepayment2";
import Receivepayment4 from "./Receivepayment4";
import LookBook from "./LookBook";
import Opensalesorder from "./Opensalesorder";
import LookBook3 from "./LookBook3";
import RoutesSchedules from "./RoutesSchedules";
import RoutesSchedules2 from "./RoutesSchedules2";
import LookBook2 from "./LookBook2";
import LastOrder from "./LastOrder";
import OrderHistory from "./OrderHistory";
import Account2 from "./Account2";
import Map1 from "./Map1";
// import LastOrder2 from "./LastOrder2";

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
    CreateProduct: {
      screen: CreateProduct,
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
    },
    Map1: {
      screen: Map1,
      navigationOptions: () => ({
        header: null
      })
    },
    Receivepayment2: {
      screen: Receivepayment2,
      navigationOptions: () => ({
        header: null
      })
    },
    LookBook: {
      screen: LookBook,
      navigationOptions: () => ({
        header: null
      })
    },
    LookBook3: {
      screen: LookBook3,
      navigationOptions: () => ({
        header: null
      })
    },
    RoutesSchedules: {
      screen: RoutesSchedules,
      navigationOptions: () => ({
        header: null
      })
    },
    LookBook2: {
      screen: LookBook2,
      navigationOptions: () => ({
        header: null
      })
    },
    LastOrder: {
      screen: LastOrder,
      navigationOptions: () => ({
        header: null
      })
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: () => ({
        header: null
      })
    },
    Opensalesorder: {
      screen: Opensalesorder,
      navigationOptions: () => ({
        header: null
      })
    },
    RoutesSchedules2: {
      screen: RoutesSchedules2,
      navigationOptions: () => ({
        header: null
      })
    },
    Account2: {
      screen: Account2,
      navigationOptions: () => ({
        header: null
      })
    },
    Receivepayment4: {
      screen: Receivepayment4,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Receivepayment4"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}

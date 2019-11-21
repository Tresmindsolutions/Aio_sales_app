import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import StackNavigator from "./src/screens/StrackNavigator";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  }
});

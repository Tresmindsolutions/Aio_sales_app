import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import StackNavigator from "./src/screens/StrackNavigator";

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from "react-native-global-props";

const customTextProps = {
  style: {
    // fontSize: 16,
    fontFamily: "ProductSansRegular"
    // color: 'black'
  }
};

export default class App extends Component {
  componentDidMount() {
    setCustomText(customTextProps);
  }
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

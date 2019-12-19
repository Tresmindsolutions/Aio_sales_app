import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput
} from "react-native";

//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";
import GlobalHeader from "../components/GlobalHeader";

export default class LookBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          leftArrow={true}
          //     leftSetting={true}
          //     OneHeadingEnable = {true}
          //     HeadingText="Summary"
          //     elevation={4}
          // twoWords={2}
          //     leftArrowSmall={true}
          //     rightSearchAdd={false}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
          // plusIcons = {true}
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <Text>sdfsd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  }
});

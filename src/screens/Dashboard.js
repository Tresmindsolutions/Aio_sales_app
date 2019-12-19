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
import RBSheet from "react-native-raw-bottom-sheet";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GlobalHeader from "../components/GlobalHeader";

import { theme, FontColor, Shadow } from "../components/constant/theme";

export default class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       height: 150
  //     };
  //   }
  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={require("../../assets/icons/mapfull.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"cover"}
        > */}
        <GlobalHeader
          backgroundColor={"transparent"}
          //    leftArrow={true}
          HeadingText="Dashboard"
          //   elevation={4}
          twoWords={1}
          leftSetting={true}
          navigation={this.props.navigation}
        />
        <Text>Sas</Text>
        {/* </ImageBackground> */}
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

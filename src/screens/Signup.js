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

// import GlobalHeader from "../compnents/GlobalHeader";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";
export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/icons/backgroundImg.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode={"stretch"}
        >
          {/* <Content> */}
          <View style={styles.main}>
            <Image
              source={require("../../assets/icons/logo.png")}
              style={{ height: 150, width: 150 }}
              resizeMode={"contain"}
            />
          </View>

          <View style={{ borderWidth: 1 }}>
            <Text>Sign Up</Text>
          </View>
          {/* </Content> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  }
});

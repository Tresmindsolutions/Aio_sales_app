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
import GlobalHeader from "../components/GlobalHeader";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 150
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/icons/mapfull.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"cover"}
        >
          <GlobalHeader
            backgroundColor={"transparent"}
            //    leftArrow={true}
            //     HeadingText="Summary"
            //   elevation={4}
            twoWords={1}
            leftSetting={true}
            navigation={this.props.navigation}
          />

          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center"
              }
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.RBSheet.close();
              }}
            >
              <Text>Clsoe</Text>
            </TouchableOpacity>
            <Text>RB Sheet</Text>
          </RBSheet>

          <TouchableOpacity
            style={{
              //   borderWidth: 1,
              position: "absolute",
              bottom: 10,
              width: "90%",
              alignSelf: "center",
              height: 40,
              borderRadius: 10,
              backgroundColor: theme.blue,
              justifyContent: "center",
              alignItems: "center"
            }}
            // onPress={() => {
            //   this.RBSheet.open();
            // }}
            onPress={() => {
              this.props.navigation.navigate("Order");
            }}
          >
            <Text style={{ color: FontColor.white, fontSize: 16 }}>
              Place Orders
            </Text>
          </TouchableOpacity>
        </ImageBackground>
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

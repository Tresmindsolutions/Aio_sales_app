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
import GlobalHeader from "../components/GlobalHeader";
import {
  CoordinatorLayout,
  BottomSheetBehavior,
  FloatingActionButton,
  BottomSheetHeader,
  BackdropBottomSheet
} from "react-native-bottom-sheet-behavior";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";
import { theme, FontColor, Shadow } from "../components/constant/theme";
import { Item } from "native-base";

//import { theme, FontColor } from "../components/constant/theme";
export default class RoutesSchedules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          name: "Ashanti Fashion",
          add: "283 Homestead Rd, 24588 Rustburg",
          routes: "2"
        },
        {
          name: "Abrix Woonaccessoires BV",
          add: "Helper Brink 54, 9722 EN Groningen NL",
          routes: "1"
        },
        {
          name: "Alexander Mens Wear",
          add: "Berchvill 14, 1046 CA Tapie",
          routes: "2"
        },
        {
          name: "Alexander Mens Wear",
          add: "Berchvill 14, 1046 CA Tapie",
          routes: "2"
        },
        {
          name: "Abrix Woonaccessoires BV",
          add: "Helper Brink 54, 9722 EN Groningen NL",
          routes: "1"
        }
      ]
      // checked : true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/icons/map22.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"cover"}
        >
          <GlobalHeader
            backgroundColor={"#ffffff"}
            //    leftArrow={true}
            //     leftSetting={true}
            OneHeadingEnable={true}
            twoWords={2}
            HeadingText="Routes Schedules"
            //     elevation={4}
            leftArrowSmall={true}
            // rightSearchAdd={true}
            //  TwoHeadingEnable={true}
            //  order="Receive Payment"
            //  name="Abrix Woonaccessoires BV"
            //     rightThreeIcons = {true}
            //     deleteRight={true}
            navigation={this.props.navigation}
          />

          <CoordinatorLayout style={{ flex: 1 }}>
            <BottomSheetBehavior
              ref="bottomSheet"
              peekHeight={300}
              hideable={false}
              state={BottomSheetBehavior.STATE_COLLAPSED}
            >
              <View style={{ backgroundColor: "white", borderWidth: 0 }}>
                {/* <View style={{ padding: 10, alignItems: "center" }}> */}
                {/* <FontAwesome5 name="minus" size={28} /> */}
                <View style={styles.bar}></View>
                {this.state.arr.map((item, index) => {
                  return (
                    <View
                      style={{
                        height: 80,
                        width: "90%",
                        backgroundColor: "#ffffff",
                        alignSelf: "center",
                        flexDirection: "row",
                        borderRadius: 8,
                        shadowColor: "#000",
                        marginBottom: 10,
                        shadowOffset: {
                          width: 0,
                          height: 1
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3
                      }}
                    >
                      <View
                        style={{ width: "77%", marginTop: 5, paddingLeft: 10 }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: theme.black,
                            padding: 3
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: theme.gray,
                            padding: 3
                          }}
                        >
                          {item.add}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: theme.blue,
                            padding: 3
                          }}
                        >
                          {item.routes} Routes
                        </Text>
                      </View>
                      <View style={{ width: "23%", borderWidth: 0 }}>
                        <TouchableOpacity
                          style={{
                            height: 27,
                            marginTop: 40,
                            width: "90%",
                            backgroundColor: theme.blue,
                            borderRadius: 8,
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                          onPress={() =>
                            this.props.navigation.navigate("RoutesSchedules2")
                          }
                        >
                          <Text
                            style={{ color: FontColor.white, fontSize: 14 }}
                          >
                            View
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </BottomSheetBehavior>
          </CoordinatorLayout>
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
  btn: {
    borderWidth: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    height: 35,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  btnTxt: {
    fontSize: 18,
    color: FontColor.blue
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    marginBottom: 12,
    alignSelf: "center"
  },
  bar: {
    height: 6,
    width: 50,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 7,
    backgroundColor: "#00000033",
    alignSelf: "center"
  },
  orderBtn: {
    height: 43,
    width: "90%",
    alignSelf: "center",
    backgroundColor: theme.blue,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 3
  }
});

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
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  CoordinatorLayout,
  BottomSheetBehavior,
  FloatingActionButton,
  BottomSheetHeader,
  BackdropBottomSheet
} from "react-native-bottom-sheet-behavior";
//import { Content } from "native-base";

import { theme, FontColor, Shadow } from "../components/constant/theme";

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

          {/* <RBSheet
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
          </RBSheet> */}

          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
          <CoordinatorLayout style={{ flex: 1 }}>
            <BottomSheetBehavior
              ref="bottomSheet"
              peekHeight={170}
              hideable={false}
              state={BottomSheetBehavior.STATE_COLLAPSED}
            >
              <View style={{ backgroundColor: "white", borderWidth: 0 }}>
                {/* <View style={{ padding: 10, alignItems: "center" }}> */}
                {/* <FontAwesome5 name="minus" size={28} /> */}
                <View style={styles.bar}></View>
                <TouchableOpacity
                  style={styles.orderBtn}
                  onPress={() => this.props.navigation.navigate("Account")}
                >
                  <Text style={{ fontSize: 18, color: FontColor.white }}>
                    Place Orders
                  </Text>
                </TouchableOpacity>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Open Balance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Transaction</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Accounts</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Dashboard</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Product</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Catalog</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Last order</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Route Schedule</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Create Product</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Create Account</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Sales Order</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Look-Book</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* </View> */}
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

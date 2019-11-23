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
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      name: "",
      phoneNo: "",
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/icons/backgroundImg.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode={"stretch"}
        >
          <Content>
            <GlobalHeader
              backgroundColor={"transparent"}
              leftArrow={true}
              //   HeadingText="Signup"
              //   elevation={4}
              navigation={this.props.navigation}
            />

            <View style={styles.main}>
              <Image
                source={require("../../assets/icons/logo.png")}
                style={{ height: 120, width: 120 }}
                resizeMode={"contain"}
              />
            </View>

            <View style={styles.mainSec}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, color: FontColor.blue }}>
                  Sign Up
                </Text>
              </View>
              {/* ===Full Name=== */}
              <View style={styles.email}>
                <Text style={styles.emailTxt}>Full Name</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/icons/user.png")}
                    style={{ height: 20, width: 20, marginLeft: 5 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter Name"}
                    style={{ height: 40, borderColor: "gray" }}
                    // onChangeText={name => onChangeText(name)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===Phone Number=== */}

              <View style={styles.email}>
                <Text style={styles.emailTxt}>Phone Number</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  {/* <Image
                    source={require("../../assets/icons/user.png")}
                    style={{ height: 20, width: 20 }}
                    resizeMode={"contain"}
                  /> */}
                  <Entypo name="phone" size={20} color={FontColor.blue} />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter Phone Number"}
                    style={{ height: 40, borderColor: "gray" }}
                    keyboardType={"numeric"}
                    // onChangeText={phoneNO => onChangeText(phoneNo)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===Email Address=== */}
              <View style={styles.email}>
                <Text style={styles.emailTxt}>Email Address</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/icons/user.png")}
                    style={{ height: 20, width: 20, marginLeft: 5 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter Email Address"}
                    style={{ height: 40, borderColor: "gray" }}
                    // onChangeText={email => onChangeText(email)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===Password=== */}

              <View style={styles.email}>
                <Text style={styles.emailTxt}>Password</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.lockImg}>
                  <Image
                    source={require("../../assets/icons/lock.png")}
                    style={{ height: 20, width: 20, marginLeft: 5 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ width: "73%" }}>
                  <TextInput
                    placeholder={"Please Enter Password"}
                    secureTextEntry={this.state.hidden}
                    style={{ height: 40, borderColor: "gray" }}
                    // onChangeText={password => onChangeText(password)}
                    //   value={value}
                  />
                </View>

                <View style={styles.eyeImg}>
                  <TouchableOpacity
                    style={{}}
                    onPress={() =>
                      this.setState({ hidden: !this.state.hidden })
                    }
                  >
                    {this.state.hidden ? (
                      <MaterialIcons name={"remove-red-eye"} size={22} />
                    ) : (
                      <Entypo name={"eye-with-line"} size={22} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                // borderWidth: 1,
                marginTop: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, color: FontColor.gray }}>
                  By creating an account you agree to our
                </Text>
                <Text style={{ fontSize: 14, color: FontColor.gray }}>
                  Terms of Service and Privacy Policy
                </Text>
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => this.props.navigation.navigate("Signup2")}
              >
                <Text style={styles.loginBtnTxt}>Next</Text>
              </TouchableOpacity>
              <View style={styles.bottomTxt}>
                <Text style={{ fontSize: 16, color: FontColor.grayDark }}>
                  Already a user?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={{ fontSize: 16, color: FontColor.blue }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f1f1f1"
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30
  },
  mainSec: {
    // borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 20
  },
  email: {
    // borderWidth: 1,
    marginTop: 7,
    width: "92%",
    alignSelf: "center"
  },
  emailTxt: {
    fontSize: 14,
    color: FontColor.gray
  },
  emailCont: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: theme.white,
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  img: {
    // borderWidth: 1,
    width: "12%",
    justifyContent: "center",
    alignItems: "center"
  },
  lockImg: {
    // borderWidth: 1,
    width: "12%",
    justifyContent: "center",
    alignItems: "center"
  },
  eyeImg: {
    width: "15%",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginBtn: {
    // borderWidth: 1,
    backgroundColor: theme.blue,
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  loginBtnTxt: {
    fontSize: 18,
    color: FontColor.white
  },
  bottomTxt: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  }
});

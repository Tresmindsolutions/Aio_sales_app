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

// import GlobalHeader from "../components/GlobalHeader";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
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
            <View style={styles.main}>
              <Image
                source={require("../../assets/icons/logo.png")}
                style={{ height: 150, width: 150 }}
                resizeMode={"contain"}
              />
            </View>
            <View style={styles.mainSec}>
              <View style={styles.login}>
                <Text style={styles.loginTxt}>Login</Text>
              </View>
              <View style={styles.email}>
                <Text style={styles.emailTxt}>Email Address</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/icons/user.png")}
                    style={{ height: 20, width: 20 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter Email"}
                    style={{ height: 40, borderColor: "gray" }}
                    // onChangeText={email => onChangeText(email)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* //Password// */}
              <View style={styles.pass}>
                <Text style={styles.passTxt}>Password</Text>
              </View>

              <View style={styles.emailCont}>
                <View style={styles.lockImg}>
                  <Image
                    source={require("../../assets/icons/lock.png")}
                    style={{ height: 20, width: 20 }}
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
          </Content>

          <View style={styles.bottom}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>Login</Text>
            </View>
            <View style={styles.bottomTxt}>
              <Text style={{ fontSize: 16, color: FontColor.grayDark }}>
                Not a user?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                <Text style={{ fontSize: 16, color: FontColor.blue }}>
                  Register now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    marginTop: 70
  },
  mainSec: {
    // borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 15
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  loginTxt: {
    color: FontColor.blue,
    fontSize: 24
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
  pass: {
    // borderWidth: 1,
    marginTop: 8,
    width: "92%",
    alignSelf: "center"
  },
  passTxt: {
    fontSize: 14,
    color: FontColor.gray
  },
  eyeImg: {
    width: "15%",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    position: "absolute",
    bottom: 10,
    width: "100%"
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
  lockImg: {
    // borderWidth: 1,
    width: "12%",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomTxt: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  }
});

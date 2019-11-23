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
import FontAwesome from "react-native-vector-icons/FontAwesome";

import DatePicker from "react-native-datepicker";

import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";
export default class Signup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      name: "",
      phoneNo: "",
      email: "",
      password: "",
      date: ""
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
              {/* ===Business Name=== */}
              <View style={styles.email}>
                <Text style={styles.emailTxt}>Business Name</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/icons/store.png")}
                    style={{ height: 22, width: 22, marginLeft: 5 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter Business Name"}
                    style={{ height: 40, borderColor: "gray" }}
                    // onChangeText={name => onChangeText(name)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===DBA=== */}

              <View style={styles.email}>
                <Text style={styles.emailTxt}>DBA</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/icons/user.png")}
                    style={{ height: 20, width: 20, marginLeft: 5 }}
                    resizeMode={"contain"}
                  />
                  {/* <Entypo name="phone" size={20} color={FontColor.blue} /> */}
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter DBA"}
                    style={{ height: 40, borderColor: "gray" }}
                    // onChangeText={phoneNO => onChangeText(phoneNo)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===Card Number=== */}
              <View style={styles.email}>
                <Text style={styles.emailTxt}>Card Number</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  {/* <Image
                    source={require("../../assets/icons/user.png")}
                    style={{ height: 20, width: 20, marginLeft: 5 }}
                    resizeMode={"contain"}
                  /> */}
                  <FontAwesome
                    name="credit-card-alt"
                    size={16}
                    color={FontColor.blue}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter Card Number"}
                    style={{ height: 40, borderColor: "gray" }}
                    keyboardType={"numeric"}

                    // onChangeText={email => onChangeText(email)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===City=== */}

              <View style={styles.email}>
                <Text style={styles.emailTxt}>City</Text>
              </View>
              <View style={styles.emailCont}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/icons/city.png")}
                    style={{ height: 20, width: 20, marginLeft: 5 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <TextInput
                    placeholder={"Please Enter City"}
                    style={{
                      height: 40,
                      borderColor: "gray",
                      fontSize: 14,
                      paddingVertical: 0
                    }}
                    // onChangeText={email => onChangeText(email)}
                    //   value={value}
                  />
                </View>
              </View>

              {/* ===Expiry=== */}

              <View style={styles.expiryMain}>
                <View style={{ width: "55%" }}>
                  <Text style={styles.expiryTxt}>Expiry</Text>
                </View>
                <View style={{ width: "45%" }}>
                  <Text style={styles.expiryTxt}>CVC</Text>
                </View>
              </View>

              <View style={styles.expireBtm}>
                <View style={styles.dateStart}>
                  <DatePicker
                    style={{ width: "90%" }}
                    date={this.state.date}
                    mode="date"
                    placeholder="Select date"
                    format="HH:mm"
                    //  is24Hour={false}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    // minuteInterval={10}

                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 8,
                        marginLeft: 12,

                        width: 25,
                        height: 25
                      },

                      dateInput: {
                        marginLeft: 45,
                        borderWidth: 0,
                        alignItems: "flex-start"
                      },
                      placeholderText: {
                        fontSize: 14,
                        borderWidth: 0,

                        color: FontColor.grayDark
                      },
                      dateText: {
                        fontSize: 14,
                        color: FontColor.black
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={date => {
                      this.setState({ date: date });
                    }}
                  />
                </View>
                <View style={styles.cvc}>
                  <View style={styles.cvcBody}>
                    <Image
                      source={require("../../assets/icons/creditcard.png")}
                      style={{ height: 20, width: 20, marginLeft: 5 }}
                      resizeMode={"contain"}
                    />
                  </View>
                  <View style={{ width: "72%" }}>
                    <TextInput
                      placeholder={"Enter CVC"}
                      style={{ height: 40, borderColor: "gray" }}
                      keyboardType={"numeric"}

                      // onChangeText={email => onChangeText(email)}
                      //   value={value}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.bottom}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, color: FontColor.gray }}>
                  By creating an account you agree to our
                </Text>
                <Text style={{ fontSize: 14, color: FontColor.gray }}>
                  Terms of Service and Privacy Policy
                </Text>
              </View>
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnTxt}>Sign up</Text>
              </TouchableOpacity>
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
  },
  expiryMain: {
    borderWidth: 0,
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    marginTop: 8
  },
  expiryTxt: {
    fontSize: 14,
    color: FontColor.gray,
    marginLeft: 12
  },
  expireBtm: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateStart: {
    width: "45%",
    backgroundColor: theme.white,
    justifyContent: "center",
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
  cvc: {
    width: "45%",
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
    elevation: 3,
    flexDirection: "row"
  },
  cvcBody: {
    width: "28%",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

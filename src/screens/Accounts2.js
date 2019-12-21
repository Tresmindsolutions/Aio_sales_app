import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GlobalHeader from "../components/GlobalHeader";

export default class Accounts2 extends Component {
  constructor() {
    super();
    this.state = {
      coloR: true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <GlobalHeader
            //     backgroundColor={"transparent"}
            //   leftArrow={true}
            //     leftSetting={true}
            OneHeadingEnable={true}
            twoWords={1}
            HeadingText="Accounts"
            //     elevation={4}
            leftArrowSmall={true}
            //   rightSearchAdd={false}
            //   TwoHeadingEnable = {true}
            //   order="order"
            //     name="name"
            //   rightThreeIcons = {true}
            //   deleteRight={true}
            navigation={this.props.navigation}
          />
          <View>
            <TouchableOpacity>
              <View style={styles.itemBox}>
                <View>
                  <Text style={styles.itemUserName}>Ashanti Fashion</Text>
                  <Text style={{ fontSize: 11, color: "#707070" }}>
                    283 Homestead Rd, 24588 Rustburg
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#148BFF" }}>-$51,845</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ coloR: !this.state.coloR })}
              style={[
                this.state.coloR
                  ? { backgroundColor: "#e7f3ff" }
                  : { backgroundColor: "#fff" }
              ]}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#dce0e3",
                  marginHorizontal: 20,
                  paddingVertical: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={styles.itemUserName}>Ashanti Fashion</Text>
                  <Text style={{ fontSize: 11, color: "#707070" }}>
                    283 Homestead Rd, 24588 Rustburg
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#148BFF" }}>-$51,845</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#fff" }}>
              <View style={styles.itemBox}>
                <View>
                  <Text style={styles.itemUserName}>Ashanti Fashion</Text>
                  <Text style={{ fontSize: 11, color: "#707070" }}>
                    283 Homestead Rd, 24588 Rustburg
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#148BFF" }}>-$51,845</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#fff" }}>
              <View style={styles.itemBox}>
                <View>
                  <Text style={styles.itemUserName}>Ashanti Fashion</Text>
                  <Text style={{ fontSize: 11, color: "#707070" }}>
                    283 Homestead Rd, 24588 Rustburg
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#148BFF" }}>-$51,845</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#fff" }}>
              <View style={styles.itemBox}>
                <View>
                  <Text style={styles.itemUserName}>Ashanti Fashion</Text>
                  <Text style={{ fontSize: 11, color: "#707070" }}>
                    283 Homestead Rd, 24588 Rustburg
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#148BFF" }}>-$51,845</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#fff" }}>
              <View style={[styles.itemBox, { borderBottomWidth: 0 }]}>
                <View>
                  <Text style={styles.itemUserName}>Ashanti Fashion</Text>
                  <Text style={{ fontSize: 11, color: "#707070" }}>
                    283 Homestead Rd, 24588 Rustburg
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#148BFF" }}>-$51,845</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.mainBottomBox}>
            <View style={{ width: "90%", alignSelf: "center", paddingTop: 20 }}>
              <View style={styles.stylishBox}>
                <View style={styles.blueStylishBox}>
                  <Text style={styles.blueStylishBoxTextOne}>Open Balance</Text>
                  <Text style={{ color: "#fff", fontSize: 18 }}>3</Text>
                </View>
                <View style={styles.whiteBox}>
                  <View style={{ alignItems: "center", flex: 0.1 }}>
                    <Text style={{ color: "#3D3D3D", color: "#3D3D3D" }}>
                      Abrix Woonaccessoires BV
                    </Text>
                  </View>
                  <View style={styles.detailsBox}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <View style={{ flexDirection: "row", width: 100 }}>
                        <FontAwsome name="user" color="#000" size={10} />
                        <Text style={styles.name}>Aron Ebidal</Text>
                      </View>
                      <View style={{ flexDirection: "row", width: 120 }}>
                        <Entypo name="location-pin" color="#000" size={10} />
                        <Text style={styles.location}>
                          Helper Brink 54, 9722 EN Groningen NL
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 7 }}>
                      <FontAwsome name="phone" color="#000" size={10} />
                      <Text style={styles.phoneNumber}>04006452582</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 7 }}>
                      <Entypo name="email" color="#000" size={10} />
                      <Text style={styles.email}>Aron Ebidal</Text>
                    </View>
                  </View>
                  <View style={styles.webBox}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="web"
                        color="#000"
                        size={10}
                      />
                      <Text style={styles.webSite}>Not Available</Text>
                    </View>
                    <View style={styles.accountDetailsBox}>
                      <Text style={{ fontSize: 10, color: "#fff" }}>
                        Account details
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ color: "#148BFF", fontSize: 15 }}>
                  Account location
                </Text>
              </View>
              <View style={styles.mapDiv}>
                <Image
                  source={require("../../assets/icons/mapsmall2.png")}
                  style={{ width: "100%", height: 150 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  itemBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#dce0e3",
    marginHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemUserName: {
    fontSize: 17,
    color: "#707070"
  },
  mainBottomBox: {
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
    height: "100%"
  },
  stylishBox: {
    flexDirection: "row",
    borderRadius: 5,
    // paddingTop:5,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
  },
  blueStylishBox: {
    flex: 0.15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#148BFF",
    justifyContent: "center",
    alignItems: "center"
  },
  blueStylishBoxTextOne: {
    color: "#fff",
    fontSize: 9,
    textAlign: "center"
  },
  whiteBox: {
    flex: 0.85,
    backgroundColor: "#fff",
    paddingTop: 10
  },
  detailsBox: {
    width: "85%",
    marginLeft: 10,
    flex: 0.8
  },
  name: {
    fontSize: 9,
    marginLeft: 7,
    color: "#3D3D3D"
  },
  location: {
    fontSize: 9,
    marginLeft: 7,
    color: "#3D3D3D"
  },
  phoneNumber: {
    fontSize: 9,
    marginLeft: 7,
    color: "#3D3D3D"
  },
  email: {
    fontSize: 9,
    marginLeft: 7,
    color: "#3D3D3D"
  },
  webBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    flex: 0.1
  },
  webSite: {
    fontSize: 9,
    marginLeft: 7,
    color: "#BBBBBB"
  },
  accountDetailsBox: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#148BFF",
    paddingVertical: 5,
    borderTopLeftRadius: 5,
    borderBottomEndRadius: 5
  },
  mapDiv: {
    width: "100%",
    marginBottom: 5,
    overflow: "hidden",
    borderRadius: 5,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  }
});

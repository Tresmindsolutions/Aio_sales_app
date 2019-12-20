import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from "react-native";
// import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from "react-native-picker-select";
import AntDesign from "react-native-vector-icons/AntDesign";
// import DatePicker from 'react-native-datepicker'
import { Content } from "native-base";
import GlobalHeader from "../components/GlobalHeader";

class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToMap: [
        {
          Name: "Smartwatch",
          Content:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph.",
          Price: "10,896",
          QuantiyNumber: "500",
          ImgSource: require("../../assets/Images/MaskGroup-2.png")
        },
        {
          Name: "The Stool",
          Content:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph.",
          Price: "99.9",
          QuantiyNumber: "46",
          ImgSource: require("../../assets/Images/MaskGroup-2.png")
        },
        {
          Name: "Beats M10 Headset",
          Content:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph.",
          Price: "10,898",
          QuantiyNumber: "29",
          ImgSource: require("../../assets/Images/MaskGroup-2.png")
        }
      ]
    };
  }

  render() {
    let data = [
      {
        value: "Banana"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      }
    ];
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          //    leftArrow={true}
          //     leftSetting={true}
          OneHeadingEnable={true}
          HeadingText="Account Details"
          //     elevation={4}
          leftArrowSmall={true}
          rightSearchAdd={true}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          //     navigation={this.props.navigation}
        />
        <Content style={styles.content}>
          {/* ========= Header ended ==============*/}

          <View>
            <View style={styles.CardView}>
              <View style={{ borderTopLeftRadius: 5 }}>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: "100%",
                    backgroundColor: "#148BFF",
                    borderTopStartRadius: 5,
                    borderTopEndRadius: 5,
                    alignContent: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      fontSize: 15
                    }}
                  >
                    Abrix Woonaaccessories
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{ width: "100%", height: 130, backgroundColor: "blue" }}
              >
                <Image
                  source={require("../../assets/Images/MapPicture.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "Product Sans",
                    fontSize: 16,
                    marginLeft: "8%",
                    fontWeight: "500"
                  }}
                >
                  Account Details
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/icons/ic_edit_icon.png")}
                    style={{ width: 17, height: 16, marginRight: "6%" }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginBottom: 20 }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Contact Name</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>Eric Adidal</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Address</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>
                      Helper Brink 54, 9722 EN Groningen NL
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Phone Number</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>01245127677676</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Mobile Number</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>08645826628902</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Fax Number</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>08645826628902</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Email Address</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>
                      Eric.E@email.com
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Tax ID</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>Not Available</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Website</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>Not Available</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>DBA</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>12345678910</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Terms</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>
                      The quick, brown fox jumps over a lazy.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 10
                  }}
                >
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textLeftColStyle}>Note</Text>
                  </View>
                  <View style={{ width: "65%" }}>
                    <Text style={styles.textRightColStyle}>
                      The quick, brown fox jumps over a lazy dog. DJs flock by
                      when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                    </Text>
                  </View>
                </View>
              </View>

              {/* ======== Other Half of Page ========= */}
              <View style={styles.horizantalLine}></View>

              <View style={{ marginTop: 2 }}>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 17,
                    marginTop: 8,
                    marginBottom: 8,
                    alignSelf: "center"
                  }}
                >
                  Sales
                </Text>
                <View style={{ margin: 2, flexDirection: "row" }}>
                  <View
                    style={{
                      borderRightWidth: 1.2,
                      borderRightColor: "#EFEFEF",
                      width: "50%",
                      alignItems: "center",
                      paddingTop: 10,
                      paddingBottom: 25
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 15, color: "#878787" }}>
                        This Year
                      </Text>
                      {/* <Image
                        source={require("../../assets/icons/DownArrowIcon")}
                        style={{ width:"100%", height:"100%" }}
                      /> */}
                    </View>
                    <View>
                      <Text style={{ color: "#9CB2BA", fontSize: 27 }}>
                        $1.55m
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      borderLeftWidth: 1.2,
                      borderLeftColor: "#EFEFEF",
                      width: "50%",
                      alignItems: "center",
                      paddingTop: 10,
                      paddingBottom: 25
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 15, color: "#878787" }}>
                        Last Year
                      </Text>
                      {/* <Image
                        source={require("../../assets/icons/DownArrowIcon")}
                        style={{ width:"100%", height:"100%" }}
                      /> */}
                    </View>
                    <View>
                      <Text style={{ color: "#9CB2BA", fontSize: 27 }}>
                        $1.65m
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 10,
                    marginBottom: 0
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      marginBottom: 8,
                      alignSelf: "center"
                    }}
                  >
                    Best Sellers With{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#9CB2BA",
                      fontSize: 16,
                      marginBottom: 8,
                      alignSelf: "center"
                    }}
                  >
                    Abrix Woonaaccessories BV
                  </Text>
                </View>
              </View>

              {/* ========== Cards View ============== */}
              {//    contentToMap ?
              this.state.contentToMap.map((item, index) => {
                console.log("item.ImgSource", item.ImgSource);
                return (
                  <View style={{ width: "95%", alignSelf: "center" }}>
                    <View style={styles.CardView1}>
                      <View
                        style={{
                          width: "28%",
                          height: 92,
                          borderTopLeftRadius: 10,
                          borderBottomLeftRadius: 10
                        }}
                      >
                        <Image
                          source={item.ImgSource}
                          resizeMode={"cover"}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </View>

                      <View style={{ width: "72%" }}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                          }}
                        >
                          <View style={{ margin: 5 }}>
                            <Text
                              style={{
                                fontFamily: "ProductSansBold",
                                fontWeight: "bold"
                              }}
                            >
                              {item.Name}
                            </Text>
                            <View style={{ width: "100%" }}>
                              <Text style={{ fontSize: 9, color: "#878787" }}>
                                {item.Content}
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 3,
                            alignItems: "flex-end"
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignContent: "center",
                              alignItems: "baseline"
                            }}
                          >
                            <Text
                              style={{
                                color: "#878787",
                                fontSize: 10,
                                marginLeft: 5
                              }}
                            >
                              Quantity{" "}
                            </Text>
                            <Text style={{ color: "#3D3D3D", fontSize: 12 }}>
                              {item.QuantiyNumber}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "flex-end",
                              alignContent: "center",
                              alignItems: "baseline"
                            }}
                          >
                            <Text style={{ color: "#878787", fontSize: 10 }}>
                              Customer's Price{" "}
                            </Text>
                            <Text style={{ color: "#3D3D3D", fontSize: 12 }}>
                              ${item.Price + "    "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })
              // : ""
              }
              <View style={{ margin: 7, marginBottom: 10, marginTop: 20 }}>
                <TouchableOpacity
                  style={styles.bottomButtons}
                  // onPress={() => this.props.navigation.navigate("LastOrder")}
                >
                  <Text
                    style={{
                      color: "#148BFF",
                      textAlign: "center",
                      fontSize: 18
                    }}
                  >
                    Orders History
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginRight: 7, marginLeft: 7, marginBottom: 10 }}>
                <TouchableOpacity style={styles.bottomButtons}>
                  <Text
                    style={{
                      color: "#148BFF",
                      textAlign: "center",
                      fontSize: 18
                    }}
                  >
                    Share Catalog
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginRight: 7, marginLeft: 7, marginBottom: 10 }}>
                <TouchableOpacity style={styles.bottomButtons}>
                  <Text
                    style={{
                      color: "#148BFF",
                      textAlign: "center",
                      fontSize: 18
                    }}
                    onPress={() =>
                      this.props.navigation.navigate("OpenBalances2")
                    }
                  >
                    Open Balance
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginRight: 7, marginLeft: 7, marginBottom: 10 }}>
                <TouchableOpacity style={styles.bottomButtons}>
                  <Text
                    style={{
                      color: "#148BFF",
                      textAlign: "center",
                      fontSize: 18
                    }}
                  >
                    Return Products
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginRight: 7, marginLeft: 7, marginBottom: 20 }}>
                <TouchableOpacity style={styles.lastBottomButton}>
                  <Text
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      fontSize: 18
                    }}
                  >
                    Place Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    paddingVertical: 5,
    flex: 1
  },
  content: {
    paddingBottom: 10
    // marginBottom: 10
  },
  textLeftColStyle: {
    color: "#000000",
    fontFamily: "Product Sans",
    fontSize: 12,
    marginTop: 10,
    marginLeft: "24%"
  },
  textRightColStyle: {
    color: "#000000",
    fontFamily: "Product Sans",
    fontSize: 11,
    marginLeft: "10%",
    marginTop: 11,
    marginRight: 10
  },
  horizantalLine: {
    height: 2,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#EFEFEF"
  },
  CardView: {
    width: "97%",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "center",
    borderRadius: 5,
    // marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  CardView1: {
    width: "97%",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 18,
    overflow: "hidden",
    marginTop: 5,
    marginBottom: 3,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  buttonLeft: {
    height: 26,
    width: 80,
    backgroundColor: "#4591E4",
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  buttonRight: {
    height: 26,
    width: 70,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  bottomButtons: {
    height: 40,
    // borderWidth:1,
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  lastBottomButton: {
    height: 40,
    // borderWidth:1,
    backgroundColor: "#148BFF",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  }
});

export default AccountDetails;

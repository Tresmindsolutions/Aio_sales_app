import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GlobalHeader from "../components/GlobalHeader";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { theme, FontColor, Shadow } from "../components/constant/theme";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: false,
      weekly: true,
      monthly: false,
      yearly: false,
      contentToMap: [
        {
          Name: "Smartwatch",
          Content:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          Price: "10,896",
          QuantiyNumber: "500",
          ImgSource: require("../../assets/icons/headRow.png")
        },
        {
          Name: "The Stool",
          Content:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          Price: "99.9",
          QuantiyNumber: "46",
          ImgSource: require("../../assets/icons/tableRow.png")
        },
        {
          Name: "Beats M10 Headset",
          Content:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          Price: "10,898",
          QuantiyNumber: "29",
          ImgSource: require("../../assets/icons/headRow.png")
        }
      ]
    };
  }

  render() {
    const chartConfig = {
      backgroundGradientFrom: "#ffffff",

      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#ffffff",
      backgroundGradientToOpacity: 0.5,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
      color: (opacity = 1) => `rgba(53, 148, 242, ${opacity})`,
      strokeWidth: 0.1, // optional, default 3
      barPercentage: 0.5,
      propsForBackgroundLines: {
        strokeDasharray: "" // solid background lines with no dashes
      }
    };
    const screenWidth = Dimensions.get("window").width;
    const data = {
      labels: ["4", "8", "12", "16", "20", "24", "28", "32", "36", "40"],
      datasets: [
        {
          data: [2, 5, 3, 7, 6, 4, 7, 9, 10]
          //   color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
          // strokeWidth: 2 // optional
        }
      ]
      //legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
    };
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={require("../../assets/icons/mapfull.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"cover"}
        > */}
        <GlobalHeader
          backgroundColor={"transparent"}
          //     leftArrow={true}
          //     leftSetting={true}
          OneHeadingEnable={true}
          HeadingText="Dashboard"
          //     elevation={4}
          // twoWords={2}
          leftArrowSmall={true}
          //     rightSearchAdd={false}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
          // plusIcons = {true}
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          //     navigation={this.props.navigation}
        />
        <ScrollView>
          <View
            style={{
              width: "95%",
              backgroundColor: "#ffffff",
              alignSelf: "center",
              borderRadius: 8,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              paddingBottom: 10
            }}
          >
            <View
              style={{
                height: 30,
                backgroundColor: "#e8e7e6",
                marginBottom: 10,
                marginTop: 10,
                width: "100%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <View>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  Overall Sales
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: 30,
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.daily ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: true,
                      weekly: false,
                      monthly: false,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Daily
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.weekly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: true,
                      monthly: false,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Weekly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.monthly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: true,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Monthly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.yearly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: false,
                      yearly: true
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Yearly
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <LineChart
              data={data}
              width={screenWidth}
              height={170}
              // chartConfig={chartConfig}
              verticalLabelRotation={0}
              chartConfig={chartConfig}
              bezier
            />
          </View>

          <View
            style={{
              // borderWidth: 1,
              width: "95%",
              alignSelf: "center",
              marginTop: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              backgroundColor: "#ffffff",
              borderRadius: 8,
              overflow: "hidden",
              paddingBottom: 8,
              marginBottom: 15,
              marginTop: 12
            }}
          >
            <View
              style={{
                height: 30,
                backgroundColor: "#e8e7e6",
                marginBottom: 10,
                marginTop: 10,
                width: "100%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
                // borderWidth: 1
              }}
            >
              <View>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  Sales Comparision
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: 30,
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.weekly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: true,
                      monthly: false,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Weekly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.monthly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: true,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Monthly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.yearly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: false,
                      yearly: true
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Yearly
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                // height: 40,
                // backgroundColor: "red",
                flexDirection: "row",
                justifyContent: "space-between",

                height: 60
              }}
            >
              <View
                style={{
                  // backgroundColor: "yellow",
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View style={{ flexDirection: "row", marginLeft: 12 }}>
                    <Text style={{ fontSize: 14, color: "#878787" }}>2011</Text>
                    <AntDesign
                      name="caretdown"
                      size={11}
                      style={{ marginLeft: 5, marginTop: 2 }}
                      color={FontColor.black}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 22, color: "#9CB2BA" }}>
                      $1.55m
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: 35,
                  borderWidth: 1,
                  marginTop: 10,
                  borderColor: "#EFEFEF"
                }}
              ></View>
              <View
                style={{
                  // backgroundColor: "yellow",
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View style={{ flexDirection: "row", marginLeft: 12 }}>
                    <Text style={{ fontSize: 14, color: "#878787" }}>
                      This Year
                    </Text>
                    <AntDesign
                      name="caretdown"
                      size={11}
                      style={{ marginLeft: 5, marginTop: 2 }}
                      color={FontColor.black}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 22, color: "#9CB2BA" }}>
                      $1.65m
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "95%",
              backgroundColor: "#ffffff",
              alignSelf: "center",
              borderRadius: 8,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              paddingBottom: 10
            }}
          >
            <View
              style={{
                height: 30,
                backgroundColor: "#e8e7e6",
                marginBottom: 10,
                marginTop: 10,
                width: "100%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <View>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  Product Sales
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: 30,
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.daily ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: true,
                      weekly: false,
                      monthly: false,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Daily
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.weekly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: true,
                      monthly: false,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Weekly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.monthly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: true,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Monthly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.yearly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: false,
                      yearly: true
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Yearly
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <LineChart
              data={data}
              width={screenWidth}
              height={170}
              // chartConfig={chartConfig}
              verticalLabelRotation={0}
              chartConfig={chartConfig}
              bezier
            />
            <View style={styles.mainBoxInner}>
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle442.png")}
                    style={{ width: "200%", height: 80, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text style={{ fontSize: 11 }}>Sony PlayStation </Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>
                      Video Game Console
                    </Text>
                    <Text style={styles.itemBoxDetailsText}>Pieces</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green", fontSize: 12 }}>1.5k</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle-10.png")}
                    style={{ width: "200%", height: 80, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text style={{ fontSize: 11, color: theme.black }}>
                    The Stool
                  </Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>Furniture</Text>
                    <Text style={styles.itemBoxDetailsText}>Pieces Sold</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>250</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/headphone.png")}
                    style={{ width: "200%", height: 80, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text style={{ fontSize: 10, color: theme.black }}>
                    Beat M10 Headset
                  </Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>Electronic</Text>
                    <Text style={styles.itemBoxDetailsText}>Pieces Sold</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>5k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 20,
                // backgroundColor: "red",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", marginRight: 8 }}
              >
                <FontAwesome5
                  name={"chevron-left"}
                  size={16}
                  style={{ marginRight: 5 }}
                  color={"#AEC6CF"}
                />
                <Text style={{ fontSize: 14, color: "#AEC6CF" }}>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row", marginLeft: 8 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: FontColor.black,
                    color: theme.blue
                  }}
                >
                  next
                </Text>
                <FontAwesome5
                  name={"chevron-right"}
                  size={16}
                  color={"#148BFF"}
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: "95%",
              alignSelf: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              backgroundColor: "#ffffff",
              borderRadius: 8,
              marginTop: 10,
              paddingBottom: 10,
              marginBottom: 10
            }}
          >
            <View
              style={{
                height: 30,
                backgroundColor: "#e8e7e6",
                marginBottom: 10,
                marginTop: 10,
                width: "100%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  Best Sellers
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: 30,
                  alignItems: "center",
                  marginRight: 12
                }}
              >
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.weekly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: true,
                      monthly: false,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Weekly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.monthly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: true,
                      yearly: false
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Monthly
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: this.state.yearly ? 2 : 0,
                    borderColor: theme.blue,
                    height: 30,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setState({
                      daily: false,
                      weekly: false,
                      monthly: false,
                      yearly: true
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: FontColor.black,
                      paddingHorizontal: 6
                    }}
                  >
                    Yearly
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {this.state.contentToMap.map((item, index) => {
              // console.log("item.ImgSource", item.ImgSource);
              return (
                <View
                  style={{ width: "95%", alignSelf: "center", marginTop: 2 }}
                >
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
                          <Text style={{ color: FontColor.black }}>
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
                          alignItems: "flex-end",
                          marginTop: 10
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
                            Profit{" "}
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
            })}
          </View>
        </ScrollView>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  },
  mainBoxInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    marginBottom: 10
  },
  itemBox: {
    borderRadius: 5,

    backgroundColor: "#fff",
    width: "32%",
    shadowColor: "#00000029",
    paddingBottom: 5,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
  },
  itemBoxImage: {
    width: "50%",
    height: 80,

    // borderBottomWidth:1
    borderRadius: 5
  },
  itemBoxDetails: {
    width: "80%",
    alignSelf: "center",
    marginTop: 5
  },
  itemBoxDetailsText: {
    fontSize: 8,
    color: "#999"
  },
  itemBoxDetailsTextText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  CardView1: {
    width: "97%",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 8,
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
  }
});

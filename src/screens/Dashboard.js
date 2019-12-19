import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Dimensions
} from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign";
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
      yearly: false
    };
  }

  render() {
    const chartConfig = {
      backgroundGradientFrom: "#ffffff",

      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#ffffff",
      backgroundGradientToOpacity: 0.5,
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
        <Text>Sas</Text>
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
              style={{ flexDirection: "row", height: 30, alignItems: "center" }}
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
              style={{ flexDirection: "row", height: 30, alignItems: "center" }}
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
              <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                  <Text style={{ fontSize: 22, color: "#9CB2BA" }}>$1.55m</Text>
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
              <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                  <Text style={{ fontSize: 22, color: "#9CB2BA" }}>$1.65m</Text>
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
                Overall Sales
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", height: 30, alignItems: "center" }}
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
        {/* </ImageBackground> */}
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

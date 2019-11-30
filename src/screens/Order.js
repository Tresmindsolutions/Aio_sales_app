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
  Dimensions,
  ScrollView
} from "react-native";

import GlobalHeader from "../components/GlobalHeader";
import Category1 from "../components/order/Category1";
import { theme, FontColor } from "../components/constant/theme";
import {
  TabView,
  TabBar,
  SceneMap,
  tabStyle,
  labelstyle,
  NavigationState,
  SceneRendererProps
} from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "yellow" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "blue" }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "blue" }]} />
);
export default class Order extends Component {
  state = {
    index: 0,
    pressStatus: false,
    routes: [
      {
        key: "first",
        title: "Trending",
        tabStyle: { backgroundColor: "red", color: "red" }
      },
      { key: "second", title: "All" },
      { key: "third", title: "Category 1" },
      { key: "forth", title: "Category 2" }
    ]
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     Trending: true,
  //     All: false,
  //     Category1: false,
  //     Category2: false,
  //     Category3: false
  //   };
  // }

  _onHideUnderlay = () => {
    this.setState({ pressStatus: false });
  };
  _onShowUnderlay = () => {
    this.setState({ pressStatus: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"#ffffff"}
          //  leftArrow={true}
          //     HeadingText="Summary"
          //   elevation={4}
          //  leftSetting={true}
          leftArrowSmall={true}
          twoWords={2}
          TwoHeadingEnable={true}
          order="Order"
          name="Abrix Woonaccessoires BV"
          rightThreeIcons={true}
          navigation={this.props.navigation}
        />

        <TabView
          navigationState={this.state}
          tabStyle={{ backgroundColor: "red", borderRadius: 50 }}
          labelStyle={{ backgroundColor: "red", borderRadius: 50 }}
          indicatorStyle={{ backgroundColor: "red" }}
          contentContainerStyle={{ backgroundColor: "red" }}
          style={{ backgroundColor: "red" }}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            forth: ForthRoute
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get("window").width }}
        />

        {/* <ScrollView
          horizontal={true}
          style={{ height: 0 }}
          showsVerticalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
        > */}
        {/* <View style={styles.main}> */}
        {/* ===Trending=== */}

        {/* <TouchableOpacity
              style={{
                borderBottomWidth: this.state.Trending ? 2 : 0,
                borderBottomColor: this.state.Trending
                  ? theme.blue
                  : theme.grayDark,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15
              }}
              onPress={() => {
                this.setState({
                  Trending: true,
                  All: false,
                  Category1: false,
                  Category2: false,
                  Category3: false
                });
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.Trending ? FontColor.blue : "gray"
                }}
              >
                Trending
              </Text>
            </TouchableOpacity> */}

        {/* ===All=== */}

        {/* <TouchableOpacity
              style={{
                borderBottomWidth: this.state.All ? 2 : 0,
                borderBottomColor: this.state.All ? theme.blue : theme.grayDark,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15
              }}
              onPress={() => {
                this.setState({
                  Trending: false,
                  All: true,
                  Category1: false,
                  Category2: false,
                  Category3: false
                });
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.All ? FontColor.blue : "gray"
                }}
              >
                All
              </Text>
            </TouchableOpacity> */}

        {/* ===Category 1=== */}

        {/* <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15,
                borderBottomWidth: this.state.Category1 ? 2 : 0,
                borderBottomColor: this.state.Category1
                  ? theme.blue
                  : theme.grayDark
              }}
              onPress={() => {
                this.setState({
                  Trending: false,
                  All: false,
                  Category1: true,
                  Category2: false,
                  Category3: false
                });
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.Category1 ? FontColor.blue : "gray"
                }}
              >
                Category 1
              </Text>
            </TouchableOpacity> */}

        {/* ===Category 2=== */}

        {/* <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15,
                borderBottomWidth: this.state.Category2 ? 2 : 0,
                borderBottomColor: this.state.Category2
                  ? theme.blue
                  : theme.grayDark
              }}
              onPress={() => {
                this.setState({
                  Trending: false,
                  All: false,
                  Category1: false,
                  Category2: true,
                  Category3: false
                });
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.Category2 ? FontColor.blue : "gray"
                }}
              >
                Category 2
              </Text>
            </TouchableOpacity> */}

        {/* ===Category 3=== */}

        {/* <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15,
                borderBottomWidth: this.state.Category3 ? 2 : 0,
                borderBottomColor: this.state.Category3
                  ? theme.blue
                  : theme.grayDark
              }}
              onPress={() => {
                this.setState({
                  Trending: false,
                  All: false,
                  Category1: false,
                  Category2: false,
                  Category3: true
                });
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.Category3 ? FontColor.blue : "gray"
                }}
              >
                Category 3
              </Text>
            </TouchableOpacity> */}
        {/* </View>
        </ScrollView> */}

        {/* <Category1 /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,

    backgroundColor: "#ffffff"
  },
  main: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    marginTop: 10
  },
  scene: {
    flex: 1
  },
  button: {
    width: "20%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 7,
    marginBottom: 7,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white"
  },
  buttonPress: {
    width: "20%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 7,
    marginBottom: 7,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "green"
  },
  welcome: {
    fontFamily: "Nunito-Bold",
    color: "#000000"
  },
  welcomePress: {
    fontFamily: "Nunito-Bold",
    color: "#ffffff"
  }
});

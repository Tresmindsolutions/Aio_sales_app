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
  ScrollView
} from "react-native";

import GlobalHeader from "../components/GlobalHeader";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";
import Category1 from "../components/order/Category1";
import { theme, FontColor } from "../components/constant/theme";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Trending: true,
      All: false,
      Category1: false,
      Category2: false,
      Category3: false
    };
  }
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
        <ScrollView
          horizontal={true}
          style={{ height: 0 }}
          showsVerticalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
        >
          <View style={styles.main}>
            {/* ===Trending=== */}

            <TouchableOpacity
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
            </TouchableOpacity>

            {/* ===All=== */}

            <TouchableOpacity
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
            </TouchableOpacity>

            {/* ===Category 1=== */}

            <TouchableOpacity
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
            </TouchableOpacity>

            {/* ===Category 2=== */}

            <TouchableOpacity
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
            </TouchableOpacity>

            {/* ===Category 3=== */}

            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Category1 />
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
  }
});

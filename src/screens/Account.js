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
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";
import { ScrollView } from "react-native-gesture-handler";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 150,
      arr: [
        {
          name: "Ashanti Fashion",
          address: "283 Homestead Rd, 24588 Rustburg",
          amount: -51845
        },
        {
          name: "Abix Woonaccessoires BV",
          address: "Helper Brink 54, 9722 EN Groningen NL",
          amount: -51845
        },
        {
          name: "Ashanti Fashion",
          address: "283 Homestead Rd, 24588 Rustburg",
          amount: 0
        },
        {
          name: "Abix Woonaccessoires BV",
          address: "Helper Brink 54, 9722 EN Groningen NL",
          amount: -51845
        },
        {
          name: "Ashanti Fashion",
          address: "283 Homestead Rd, 24588 Rustburg",
          amount: 0
        },
        {
          name: "Abix Woonaccessoires BV",
          address: "Helper Brink 54, 9722 EN Groningen NL",
          amount: 0
        },
        {
          name: "Ashanti Fashion",
          address: "283 Homestead Rd, 24588 Rustburg",
          amount: 0
        },
        {
          name: "Abix Woonaccessoires BV",
          address: "Helper Brink 54, 9722 EN Groningen NL",
          amount: 0
        },
        {
          name: "Ashanti Fashion",
          address: "283 Homestead Rd, 24588 Rustburg",
          amount: 0
        },
        {
          name: "Abix Woonaccessoires BV",
          address: "Helper Brink 54, 9722 EN Groningen NL",
          amount: 0
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          //   leftArrow={true}
          leftArrowSmall={true}
          twoWords={1}
          OneHeadingEnable={true}
          HeadingText="Accounts"
          //   elevation={4}
          //   leftSetting={true}
          rightSearchAdd={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          {this.state.arr.map((item, index) => {
            return (
              <View style={styles.main}>
                <View style={styles.start}>
                  <Text style={{ fontSize: 18, color: FontColor.grayDark }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: FontColor.grayDark }}>
                    {item.address}
                  </Text>
                </View>

                {/* ===  Right end === */}
                <View style={styles.right}>
                  <Text
                    style={[
                      { fontSize: 16 },
                      item.amount < 0
                        ? { color: FontColor.red }
                        : { color: FontColor.grayDark }
                    ]}
                  >
                    ${item.amount}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  },
  main: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    // borderWidth:1,
    borderBottomWidth: 1,
    borderBottomColor: FontColor.grayDark,
    flexDirection: "row",
    marginTop: 8
  },
  start: {
    width: "75%",
    marginBottom: 7
  },
  right: {
    borderWidth: 0,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  }
});

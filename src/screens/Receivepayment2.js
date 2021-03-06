import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { FontColor, theme } from "../components/constant/theme";
import GlobalHeader from "../components/GlobalHeader";

export default class Receivepayment2 extends Component {
  render() {
    return (
      <View style={style.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          //    leftArrow={true}
          //     leftSetting={true}
          //   OneHeadingEnable = {true}
          twoWords={2}
          HeadingText="Receive Payment"
          //     elevation={4}
          leftArrowSmall={true}
          // rightSearchAdd={true}
          TwoHeadingEnable={true}
          order="Receive Payment"
          name="Abrix Woonaccessoires BV"
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <View style={{ width: "85%", alignSelf: "center" }}>
          <Text style={style.amountReceivedText}>Enter Amount Received</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={style.textInputView}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>$</Text>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="0"
                  placeholderTextColor={FontColor.black}
                  style={{ padding: 0, borderWidth: 0 }}
                />
              </View>
            </View>
            <View style={style.rightView}>
              <View>
                <Text style={style.dueText}>Due</Text>
                <Text style={style.priceText}>$51,845</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 60,
            height: 32,
            borderRadius: 8,
            width: "90%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.blue
          }}
          onPress={() => this.props.navigation.navigate("ReceivePayment3")}
        >
          <Text style={{ fontSize: 15, color: FontColor.white }}>
            Mark as Received
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  amountReceivedText: {
    fontSize: 11,
    marginLeft: 8,
    color: FontColor.gray
  },
  textInputView: {
    flex: 0.8,
    backgroundColor: theme.white,
    paddingLeft: 10,
    borderRadius: 2,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  rightView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  dueText: {
    fontSize: 8,
    color: FontColor.gray,
    textAlign: "center"
  },
  priceText: {
    fontSize: 12,
    color: FontColor.red
  }
});

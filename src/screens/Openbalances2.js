import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontColor, theme } from "../components/constant/theme";
import { CheckBox } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalHeader from "../components/GlobalHeader";

export default class Openbalances extends Component {
  constructor() {
    super();
    this.state = {
      openbalance: [
        {
          itemName: "665 Items Purchased",
          date: "17th September 2019",
          timeDuration: "Due",
          priceItem: "$51,845",
          checked: false
        },
        {
          itemName: "665 Items Purchased",
          date: "17th September 2019",
          timeDuration: "Due",
          priceItem: "$51,845",
          checked: true
        }
      ]
      // checked : true
    };
  }

  handleCheckBox = (e, index) => {
    const { openbalance } = this.state;
    openbalance[index].checked = !openbalance[index].checked;
    this.setState({ openbalance });
  };

  render() {
    return (
      <View style={style.container}>
        <GlobalHeader
          //     backgroundColor={"transparent"}
          //   leftArrow={true}
          //     leftSetting={true}
          //   OneHeadingEnable = {true}
          twoWords={2}
          HeadingText="Open"
          //     elevation={4}
          leftArrowSmall={true}
          //   rightSearchAdd={false}
          TwoHeadingEnable={true}
          order="Open Balance"
          name="Abrix Woonaccessoires BV"
          //   rightThreeIcons = {true}
          //   deleteRight={true}
          navigation={this.props.navigation}
        />
        <View style={{ width: "90%", alignSelf: "center" }}>
          {this.state.openbalance.map((value, index) => (
            <View>
              <View style={style.mainbalanceBox}>
                <TouchableOpacity
                  style={{
                    flex: 0.06,
                    marginTop: -5
                  }}
                  onPress={() => this.handleCheckBox(value, index)}
                >
                  <View style={style.checkBox}>
                    {value.checked ? (
                      <Ionicons
                        name="md-checkbox"
                        size={26}
                        color={FontColor.blue}
                      />
                    ) : (
                      <Ionicons
                        name="md-square"
                        size={24}
                        color={theme.grayLight}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <View style={style.TransactionBox}>
                  <View style={style.TransactionBoxFirstRow}>
                    <Text style={style.TransactionsType}>{value.itemName}</Text>
                    <Text style={style.recieved}>{value.timeDuration}</Text>
                  </View>
                  <View style={style.TransactionBoxSecondRow}>
                    <Text style={style.TransactionsTypeDetails}>
                      {value.date}
                    </Text>
                    <Text style={style.priceRedColor}>{value.priceItem}</Text>
                  </View>
                </View>
              </View>
              <View style={style.horizantalLine}></View>
            </View>
          ))}
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flex: 0.06 }}></View>
            <View style={style.totalBox}>
              <Text style={style.totalBoxText}>Total</Text>
              <View style={style.totalBoxPrice}>
                <Text style={{ fontSize: 12, color: theme.red }}>$101,065</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={style.recievedButton}
          onPress={() => this.props.navigation.navigate("ReceivePayment")}
        >
          <Text style={style.recievedButtonText}>Receive Payment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    borderWidth: 1
    // paddingBottom:30
  },
  mainbalanceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  checkBox: {
    borderRadius: 4,
    overflow: "hidden",
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 20
  },
  totalBox: {
    flex: 0.95,
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  totalBoxText: {
    fontSize: 15,
    color: FontColor.black
  },
  totalBoxPrice: {
    width: 70,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.grayLight
  },
  horizantalLine: {
    height: 2,
    width: "90%",
    alignSelf: "center",
    backgroundColor: theme.grayLine
  },
  recievedButton: {
    paddingVertical: 7,
    borderRadius: 5,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    backgroundColor: theme.blue
  },
  recievedButtonText: {
    color: FontColor.white,
    fontSize: 15
  },
  TransactionBox: {
    // borderBottomWidth:1,
    // borderBottomColor:theme.grayLine,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 0.95,
    // borderWidth:1,
    marginLeft: 10
  },

  TransactionBoxFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  TransactionBoxSecondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  TransactionsType: {
    fontSize: 15,
    color: theme.black
  },
  recieved: {
    fontSize: 8,
    color: FontColor.gray
  },
  TransactionsTypeDetails: {
    fontSize: 9,
    color: FontColor.middleGray
  },
  priceGreenColor: {
    fontSize: 12,
    color: theme.green,
    marginTop: -3
  },
  priceRedColor: {
    fontSize: 12,
    color: theme.red,
    marginTop: -3
  }
});

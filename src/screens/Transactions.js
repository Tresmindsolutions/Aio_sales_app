import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import { FontColor, theme } from "../components/constant/theme";

export default class Transactions extends Component {
  render() {
    return (
      <View style={style.container}>
        <ScrollView>
          <GlobalHeader
            //     backgroundColor={"transparent"}
            //   leftArrow={true}
            //     leftSetting={true}
            OneHeadingEnable={true}
            twoWords={2}
            HeadingText="Transactions"
            //     elevation={4}
            leftArrowSmall={true}
            //   rightSearchAdd={false}
            //   TwoHeadingEnable = {true}
            //   order="order"
            //   name="name"
            //   rightThreeIcons = {true}
            //   deleteRight={true}
            navigation={this.props.navigation}
          />
          <View style={{ width: "90%", alignSelf: "center" }}>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={style.date}>17/9/19</Text>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Abrix Woonaccessoires BV
                  </Text>
                  <Text style={style.recieved}>Recieved</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Helper Brink 54, 9722 EN Groningen NL
                  </Text>
                  <Text style={style.priceGreenColor}>+$51,845</Text>
                </View>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Alexander Men's Wear
                  </Text>
                  <Text style={style.recieved}>Recieved</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Berchvill 14, 1046 CA Tapie
                  </Text>
                  <Text style={style.priceGreenColor}>+$7500</Text>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={style.date}>20/9/19</Text>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Abrix Woonaccessoires BV
                  </Text>
                  <Text style={style.recieved}>On Balance</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Helper Brink 54, 9722 EN Groningen NL
                  </Text>
                  <Text style={style.priceRedColor}>+$51,845</Text>
                </View>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Alexander Men's Wear
                  </Text>
                  <Text style={style.recieved}>Recieved</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Berchvill 14, 1046 CA Tapie
                  </Text>
                  <Text style={style.priceGreenColor}>+$7500</Text>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={style.date}>20/9/19</Text>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Abrix Woonaccessoires BV
                  </Text>
                  <Text style={style.recieved}>On Balance</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Helper Brink 54, 9722 EN Groningen NL
                  </Text>
                  <Text style={style.priceRedColor}>+$51,845</Text>
                </View>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Alexander Men's Wear
                  </Text>
                  <Text style={style.recieved}>On Balance</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Berchvill 14, 1046 CA Tapie
                  </Text>
                  <Text style={style.priceRedColor}>+$7500</Text>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={style.date}>20/9/19</Text>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Abrix Woonaccessoires BV
                  </Text>
                  <Text style={style.recieved}>Recieved</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Helper Brink 54, 9722 EN Groningen NL
                  </Text>
                  <Text style={style.priceGreenColor}>+$51,845</Text>
                </View>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Alexander Men's Wear
                  </Text>
                  <Text style={style.recieved}>Recieved</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Berchvill 14, 1046 CA Tapie
                  </Text>
                  <Text style={style.priceGreenColor}>+$7500</Text>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={style.date}>20/9/19</Text>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Abrix Woonaccessoires BV
                  </Text>
                  <Text style={style.recieved}>On Balance</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Helper Brink 54, 9722 EN Groningen NL
                  </Text>
                  <Text style={style.priceRedColor}>+$51,845</Text>
                </View>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Alexander Men's Wear
                  </Text>
                  <Text style={style.recieved}>Recieved</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Berchvill 14, 1046 CA Tapie
                  </Text>
                  <Text style={style.priceGreenColor}>+$7500</Text>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text style={style.date}>20/9/19</Text>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Abrix Woonaccessoires BV
                  </Text>
                  <Text style={style.recieved}>On Balance</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Helper Brink 54, 9722 EN Groningen NL
                  </Text>
                  <Text style={style.priceRedColor}>+$51,845</Text>
                </View>
              </View>
              <View style={style.TransactionBox}>
                <View style={style.TransactionBoxFirstRow}>
                  <Text style={style.TransactionsType}>
                    Alexander Men's Wear
                  </Text>
                  <Text style={style.recieved}>On Balance</Text>
                </View>
                <View style={style.TransactionBoxSecondRow}>
                  <Text style={style.TransactionsTypeDetails}>
                    Berchvill 14, 1046 CA Tapie
                  </Text>
                  <Text style={style.priceRedColor}>+$7500</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  date: {
    fontSize: 12,
    color: FontColor.gray
  },
  TransactionBox: {
    borderBottomWidth: 1,
    borderBottomColor: theme.grayLine,
    paddingTop: 5,
    paddingBottom: 5
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

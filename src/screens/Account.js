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
import AlphabetListView from "react-native-alphabetlistview";

//import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";

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
      ],
      data: {
        A: ["A1", "A2", "A3"],
        B: ["B1", "B2", "B3"],
        C: ["C1", "C2", "C3"],
        D: ["D1", "D2", "D3"],
        E: ["E1", "E2", "E3"],
        F: ["F1", "F2", "F3"],
        G: ["G1", "G2", "G3"],
        H: ["H1", "H2", "H3"],
        I: ["I1", "I2", "I3"],
        J: ["J1", "J2", "J3"],
        K: ["K1", "K2", "K3"],
        L: ["L1", "L2", "L3"],
        M: ["M1", "M2", "M3"],
        N: ["N1", "N2", "N3"],
        O: ["O1", "O2", "O3"],
        P: ["P1", "P2", "P3"],
        Q: ["Q1", "Q2", "Q3"],
        R: ["R1", "R2", "R3"],
        S: ["S1", "S2", "S3"],
        T: ["T1", "T2", "T3"],
        U: ["U1", "U2", "U3"],
        V: ["V1", "V2", "V3"],
        W: ["W1", "W2", "W3"],
        X: ["X1", "X2", "X3"],
        Y: ["Y1", "Y2", "Y3"],
        Z: ["Z1", "Z2", "Z3"]
      }
    };
  }
  render() {
    // var textStyle = {
    //   textAlign: "center",
    //   color: "#fff",
    //   fontWeight: "700",
    //   fontSize: 16
    // };

    // var viewStyle = {
    //   backgroundColor: "#ccc"
    // };
    // class Cell extends Component {
    //   render() {
    //     return (
    //       <View style={{ height: 30 }}>
    //         <Text>{this.props.item}</Text>
    //       </View>
    //     );
    //   }
    // }

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
          {/* <AlphabetListView
            style={{
              borderWidth: 3,
              margin: 5,
              backgroundColor: "transparent"
            }}
            data={this.state.data}
            cell={Cell}
            cellHeight={30}
            sectionListItem={SectionItem}
            //   sectionHeader={SectionHeader}
            //   sectionHeaderHeight={22.5}
          /> */}
          {this.state.arr.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.main}
                onPress={() => this.props.navigation.navigate("Order")}
              >
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
              </TouchableOpacity>
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

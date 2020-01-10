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
import { theme, FontColor, Shadow } from "../components/constant/theme";
import BottomSlideViewShare from "../components/order/BottomSlideViewShare";

export default class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          product: "Nike A110 Deltas",
          price: "1,325",
          quality: "40",
          amount: "52,975"
        },
        {
          product: "The Stool",
          price: "4.99",
          quality: "30",
          amount: "49.99"
        },
        {
          product: "Beats M10 Headset",
          price: "110",
          quality: "150",
          amount: "1150"
        },
        {
          product: "Smartwatch",
          price: "150",
          quality: "225",
          amount: "1150"
        }
      ],
      OpenView2: false
    };
  }

  openRbSheet2 = () => {
    this.setState({
      OpenView2: true
    });
  };
  close2 = () => {
    this.setState({
      OpenView2: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"#F1F1F1"}
          //  leftArrow={true}
          OneHeadingEnable={true}
          HeadingText="Invoice"
          //   elevation={4}
          //  leftSetting={true}
          leftArrowSmall={true}
          twoWords={1}
          //   TwoHeadingEnable={true}
          //   order="Order"
          //   name="Abrix Woonaccessoires BV"
          //   rightThreeIcons={true}+
          //   deleteRight={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.innerMain}>
              <View style={styles.mainRow}>
                <View
                  style={{
                    width: "70%",

                    justifyContent: "flex-end"
                  }}
                >
                  <Text style={styles.smallTxt}>Acc</Text>
                </View>
                <View style={{ width: "30%" }}>
                  <Text style={styles.smallTxt}>Date</Text>
                </View>
              </View>
              {/* Second Line */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text style={styles.txtName}>Abrix Woonaccessoires BV</Text>
                </View>
                <View style={{ width: "30%" }}>
                  <Text style={styles.txtName}>17/9/2019</Text>
                </View>
              </View>

              {/* Third Line  */}

              <View
                style={{
                  flexDirection: "row",
                  height: 20,
                  marginTop: 10,
                  // borderWidth: 1,
                  alignItems: "flex-end"
                }}
              >
                <Text style={styles.smallTxt}>Address</Text>
              </View>

              {/* Forth Line  */}

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.txtName}>
                  Helper Brink 54, 9722 EN Groningen NL
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              // borderWidth: 1,
              width: "90%",

              alignSelf: "center"
            }}
          >
            <View style={[styles.line, { marginTop: -2 }]} />
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 5
              }}
            >
              <View style={{ width: "40%" }}>
                <Text style={styles.txtName}>Product</Text>
              </View>
              <View style={{ width: "20%" }}>
                <Text style={[styles.txtName, { textAlign: "center" }]}>
                  Price
                </Text>
              </View>
              <View style={{ width: "20%" }}>
                <Text style={[styles.txtName, { textAlign: "center" }]}>
                  Quality
                </Text>
              </View>
              <View style={{ width: "20%" }}>
                <Text style={[styles.txtName, { textAlign: "right" }]}>
                  Amount
                </Text>
              </View>
            </View>
            <View style={[styles.line]} />
            {/* Second Row  */}
            {this.state.arr.map((item, index) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: 5
                  }}
                >
                  <View style={{ width: "40%" }}>
                    <Text style={styles.txtName}>{item.product}</Text>
                  </View>
                  <View style={{ width: "20%" }}>
                    <Text style={[styles.txtName, { textAlign: "center" }]}>
                      ${item.price}
                    </Text>
                  </View>
                  <View style={{ width: "20%" }}>
                    <Text style={[styles.txtName, { textAlign: "center" }]}>
                      ${item.quality}
                    </Text>
                  </View>
                  <View style={{ width: "20%" }}>
                    <Text style={[styles.txtName, { textAlign: "right" }]}>
                      ${item.amount}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          {/* Notes  */}
          <View style={styles.box}>
            <View style={styles.innerBox}>
              <Text style={styles.noteTxt}>Note</Text>
              <Text style={styles.noteDetailTxt}>
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz
              </Text>
            </View>
          </View>
          {/* Sign  */}
          <View style={styles.box}>
            <View style={styles.innerBox}>
              <Text style={styles.noteTxt}>Signature</Text>
              <View
                style={{
                  //   borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../assets/icons/sign.png")}
                  style={{ height: 100, width: 200 }}
                  resizeMode={"cover"}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              // borderWidth: 1,
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <View style={styles.line} />
            <View style={[styles.row, { paddingVertical: 3 }]}>
              <Text style={styles.dateColor}>Due date</Text>
              <Text style={styles.dateColor}>10/10/19</Text>
            </View>
            <View style={styles.line} />
            {/* ===SubTotal=== */}
            <View style={styles.row}>
              <Text style={styles.dateColor}>Subtotal</Text>
              <Text style={styles.dateColor}>$52,975</Text>
            </View>
            {/* ===Discount=== */}
            <View style={styles.row}>
              <Text style={styles.dateColor}>Discount</Text>
              <Text style={styles.dateColor}>-$49.99</Text>
            </View>
            {/* ===Credit=== */}

            <View style={styles.row}>
              <Text style={styles.dateColor}>Credit</Text>
              <Text style={styles.dateColor}>-$1150</Text>
            </View>
            {/* ===Open Balance=== */}
            <View style={styles.row}>
              <Text style={styles.dateColor}>Open Balance</Text>
              <Text style={styles.dateColor}>$52,975</Text>
            </View>
            {/* ===Payment=== */}
            <View style={styles.row}>
              <Text style={styles.dateColor}>Payment</Text>
              <Text style={styles.dateColor}>-$49.99</Text>
            </View>
            {/* ===Line=== */}
            <View style={[styles.line, { marginTop: 5 }]} />
            <View
              style={[
                styles.row,
                {
                  backgroundColor: "#e6ecf2",
                  //   borderWidth: 1,
                  paddingVertical: 7
                }
              ]}
            >
              <Text
                style={[styles.dateColor, { fontFamily: "ProductSansBold" }]}
              >
                TOTAL
              </Text>
              <Text
                style={[styles.dateColor, { fontFamily: "ProductSansBold" }]}
              >
                $51,874.99
              </Text>
            </View>
            <View style={[styles.line, { marginBottom: 5 }]} />
            {/* Buttons */}
            <View style={styles.btnRow}>
              <TouchableOpacity
                onPress={() => {
                  this.openRbSheet2();
                }}
                style={styles.btn}
              >
                <Text style={styles.btnTxt}>Share Invoice</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Print Invoice</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnRow}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Edit Order</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("ReceivePayment")}
              >
                <Text style={styles.btnTxt}>Receive Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* ==== Bottom Slide View on Share icon button ==== */}
        {this.state.OpenView2 ? (
          <BottomSlideViewShare close={() => this.close2()} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f1f1f1"
  },
  main: {
    height: 130,
    backgroundColor: "#e6ecf2",
    width: "100%",
    alignSelf: "center"
  },
  innerMain: {
    width: "85%",
    alignSelf: "center"
  },
  mainRow: {
    flexDirection: "row",
    height: 20,
    marginTop: 15
  },
  smallTxt: {
    color: theme.grayDark,
    fontSize: 12
  },
  txtName: {
    color: FontColor.black,
    fontSize: 16
  },
  box: {
    // borderWidth: 1,
    height: "auto",
    marginTop: 10,
    backgroundColor: "#e6e6e6",
    width: "90%",
    alignSelf: "center"
  },
  innerBox: {
    // borderWidth: 1,
    width: "85%",
    alignSelf: "center",
    paddingVertical: 14
  },
  noteTxt: {
    fontSize: 14,
    color: FontColor.gray
  },
  noteDetailTxt: {
    fontSize: 14,
    color: FontColor.grayDark
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5
  },
  line: {
    borderWidth: 0.9,
    borderColor: FontColor.gray
  },
  dateColor: {
    fontSize: 16,
    color: FontColor.black
  },
  btn: {
    backgroundColor: theme.blue,
    width: "49%",
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  btnTxt: {
    color: FontColor.white,
    fontSize: 16
  },
  btnRow: {
    // borderWidth: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

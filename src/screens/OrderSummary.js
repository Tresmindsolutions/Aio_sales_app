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

import { theme, FontColor } from "../components/constant/theme";
import Swipeout from "react-native-swipeout";
export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          img: require("../../assets/icons/RectangleWatch.png"),
          sNo: "1",
          productName: "SmartWatch",
          price: "99.99",
          quality: "50",
          discount: "50",
          total: "50000"
        },
        {
          img: require("../../assets/icons/RectangleStool.png"),
          sNo: "2",
          productName: "The Stool",
          price: "99.99",
          quality: "5%",
          discount: "50",
          total: "50000"
        },
        {
          img: require("../../assets/icons/headphoneRec.png"),
          sNo: "3",
          productName: "Beats M10 Headset",
          price: "99.99",
          quality: "50",
          discount: "50",
          total: "50000"
        },
        {
          img: require("../../assets/icons/RectangleS.png"),
          sNo: "4",
          productName: "Nike A110 Deltas",
          price: "99.99",
          quality: "50",
          discount: "50",
          total: "50000"
        }
      ]
    };
  }

  render() {
    var swipeoutBtns = [
      {
        backgroundColor: "#ffffff",
        onPress: () => {
          this.deleteNote(item);
        },
        component: (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../../assets/icons/delete.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="contain"
            />
          </View>
        ),
        // component: function() {
        //   return <Image source={require("../../assets/icons/delete.png")} />;
        // },
        openRight: true
      }
    ];
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"#ffffff"}
          //  leftArrow={true}
          OneHeadingEnable={true}
          HeadingText="Order Summary"
          //   elevation={4}
          //  leftSetting={true}
          leftArrowSmall={true}
          twoWords={0}
          //   TwoHeadingEnable={true}
          //   order="Order"
          //   name="Abrix Woonaccessoires BV"
          //   rightThreeIcons={true}+
          deleteRight={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.mainMiddle}>
              <View style={{ width: "70%" }}>
                <Text style={{ fontSize: 14, color: FontColor.grayDark }}>
                  Acc
                </Text>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  Abrix Woonaccessoires BV
                </Text>
              </View>

              <View style={{ width: "30%" }}>
                <Text>Date</Text>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  17/9/2019
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.heading}>
            <Text style={styles.headingTxt}>Seleted Items</Text>
          </View>

          {/* ===Delete Items=== */}
          {this.state.arr.map((item, index) => {
            return (
              <Swipeout
                left={swipeoutBtns}
                style={{
                  backgroundColor: "#ffffff",
                  height: 65,
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <View style={styles.cartS}>
                  <View style={styles.mainCard}>
                    <Text style={{ fontSize: 20, color: FontColor.black }}>
                      {item.sNo}
                    </Text>
                  </View>

                  <View style={styles.crt}>
                    <View style={styles.crtImg}>
                      <Image
                        source={item.img}
                        style={styles.imgPic}
                        resizeMode={"cover"}
                      />
                    </View>

                    <View style={styles.prod}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: FontColor.black,
                          paddingTop: 5
                          // marginTop: 10
                        }}
                      >
                        {item.productName}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-end"
                          // marginBottom: 2
                        }}
                      >
                        <Text
                          style={{ color: FontColor.grayDark, fontSize: 12 }}
                        >
                          Price{" "}
                        </Text>
                        <Text style={{ color: FontColor.black }}>
                          ${item.price}
                        </Text>
                        <Text
                          style={{ color: FontColor.grayDark, fontSize: 12 }}
                        >
                          {" "}
                          x Quality{" "}
                        </Text>
                        <Text style={{ color: FontColor.black }}>
                          {item.quality}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.crtEnd}>
                      <View style={styles.discount}>
                        <Text style={{ fontSize: 12, color: theme.black }}>
                          Discount{" "}
                        </Text>
                        <Text style={{ fontSize: 15, color: FontColor.black }}>
                          ${item.discount}
                        </Text>
                      </View>

                      <View style={styles.total}>
                        <Text style={{ fontSize: 12, color: theme.blue }}>
                          Total{" "}
                        </Text>
                        <Text style={{ fontSize: 15, color: FontColor.black }}>
                          ${item.total}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* ===Swiper=== */}
              </Swipeout>
            );
          })}

          <TouchableOpacity
            style={{
              // borderWidth: 1,
              marginTop: 10,
              height: 35,
              backgroundColor: "#F1F1F1",
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: FontColor.grayDark, fontSize: 18 }}>
              Add a note
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              // borderWidth: 1,
              marginTop: 10,
              marginBottom: 5,
              height: 35,
              backgroundColor: "#F1F1F1",
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: FontColor.grayDark, fontSize: 18 }}>
              Signature
            </Text>
          </TouchableOpacity>

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
            <View style={styles.row}>
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
            <View style={styles.line} />
            <View style={styles.row}>
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

            {/* ===buttons=== */}
            <View style={[styles.row, { marginTop: 5 }]}>
              <TouchableOpacity style={styles.btnCon}>
                <Text style={{ color: FontColor.blue, fontSize: 16 }}>
                  Continue Ordering
                </Text>
              </TouchableOpacity>
              {/* ===Buttton Sec Row=== */}
              <TouchableOpacity style={styles.btnCon}>
                <Text style={{ color: FontColor.blue, fontSize: 16 }}>
                  Share Order
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnBottom}>
              <Text style={{ fontSize: 16, color: FontColor.white }}>
                Sales Order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnBottom}>
              <Text style={{ fontSize: 16, color: FontColor.white }}>
                Invoice
              </Text>
            </TouchableOpacity>
          </View>
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
    height: 50,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center"
  },
  mainMiddle: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row"
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: -6
  },
  headingTxt: {
    color: FontColor.blue,
    fontSize: 18
  },
  mainCard: {
    width: "9%",
    justifyContent: "center",
    alignItems: "center"
  },
  crt: {
    borderWidth: 0,
    width: "87%",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
  crtImg: {
    width: "24%",

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  imgPic: {
    height: "100%",
    width: "100%",

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  cartS: {
    width: "100%",
    flexDirection: "row",
    height: 55
  },
  prod: {
    marginLeft: 5,
    width: "45%",
    justifyContent: "space-around"
  },
  crtEnd: {
    width: "30%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  discount: {
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 6
  },
  total: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-end",
    marginRight: 6
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 3
  },
  line: {
    borderWidth: 0.9,
    borderColor: FontColor.gray
  },
  dateColor: {
    fontSize: 16,
    color: FontColor.black
  },
  btnCon: {
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#ffffff"
  },
  btnBottom: {
    // borderWidth: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: theme.blue,
    borderRadius: 8,
    marginTop: 8
  }
});

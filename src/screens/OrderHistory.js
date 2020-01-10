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
  Button
} from "react-native";
// import DatePicker from 'react-native-datepicker'
import { Content } from "native-base";
import { ThemeConsumer } from "react-native-elements";
import { FontColor, theme } from "../components/constant/theme";
import GlobalHeader from "../components/GlobalHeader";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToMap: [
        {
          Name: "565 Items",
          Date: "9/17/2019",
          Price: "876,576"
        },
        {
          Name: "565 Items",
          Date: "9/17/2019",
          Price: "987,567"
        },
        {
          Name: "565 Items",
          Date: "9/17/2019",
          Price: "676,557"
        }
      ]
    };
  }

  render() {
    cardContent = this.state.contentToMap;
    return (
      <View style={styles.container}>
        <Content style={styles.content}>
          <GlobalHeader
            backgroundColor={"transparent"}
            // leftArrow={true}
            //     leftSetting={true}
            OneHeadingEnable={true}
            HeadingText="Order History"
            //     elevation={4}
            // twoWords={1}
            leftArrowSmall={true}
            //     rightSearchAdd={false}
            //     TwoHeadingEnable = {true}
            //     order="order"
            //     name="name"
            // plusIcons = {true}
            //     rightThreeIcons = {true}
            //     deleteRight={true}
            navigation={this.props.navigation}
          />
          {//    contentToMap ?
          this.state.contentToMap.map((item, index) => {
            return (
              <View>
                <View style={{ width: "100%" }}>
                  <View style={styles.CardView}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <View style={{ margin: 5 }}>
                        <Text style={{ color: FontColor.black, fontSize: 14 }}>
                          {item.Name}
                        </Text>
                        <Text style={{ fontSize: 12 }}>{item.Date}</Text>
                      </View>
                      <View style={{ margin: 5, marginRight: 15 }}>
                        <Text style={{ color: FontColor.black }}>
                          ${item.Price}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <View style={{ margin: 5, flexDirection: "row" }}>
                        <Image
                          source={require("../../assets/Images/MaskGroup-1.png")}
                          style={{
                            width: 25,
                            height: 25,
                            marginRight: 5,
                            borderRadius: 3
                          }}
                        />
                        <Image
                          source={require("../../assets/Images/MaskGroup-2.png")}
                          style={{
                            width: 25,
                            height: 25,
                            marginRight: 5,
                            borderRadius: 3
                          }}
                        />
                        <Image
                          source={require("../../assets/Images/MaskGroup-3.png")}
                          style={{
                            width: 25,
                            height: 25,
                            marginRight: 5,
                            borderRadius: 3
                          }}
                        />
                        <Image
                          source={require("../../assets/Images/MaskGroup9.png")}
                          style={{
                            width: 25,
                            height: 25,
                            marginRight: 5,
                            borderRadius: 3
                          }}
                        />
                      </View>
                      <View
                        style={{ margin: 5, marginRight: 15, marginBottom: 10 }}
                      >
                        <View
                          style={{
                            height: 30,
                            width: 90,
                            backgroundColor: theme.blue,
                            borderRadius: 5,
                            alignContent: "center",
                            justifyContent: "center"
                          }}
                          // onPress={() =>
                          //   this.props.navigation.navigate("Invoice")
                          // }
                        >
                          <Text
                            style={{
                              color: "#ffffff",
                              textAlign: "center",
                              fontSize: 15
                            }}
                          >
                            View
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })
          // : ""
          }
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 10
  },
  viewInput: {
    width: "95%",
    flexDirection: "row",
    borderRadius: 7,
    backgroundColor: "#ffffff",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  CardView: {
    width: "95%",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 5,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  }
});

export default OrderHistory;

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
import Swipeout from "react-native-swipeout";

import { Content } from "native-base";
import { FontColor, theme } from "../components/constant/theme";
import GlobalHeader from "../components/GlobalHeader";

class Opensalesorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToMap: [
        {
          Name: "Abix Woonaaccessories BV",
          Date: "17/9/19",
          Price: "10.898"
        },
        {
          Name: "Abix Woonaaccessories BV",
          Date: "17/9/19",
          Price: "10.898"
        },
        {
          Name: "Abix Woonaaccessories BV",
          Date: "17/9/19",
          Price: "10.898"
        },
        {
          Name: "Abix Woonaaccessories BV",
          Date: "17/9/19",
          Price: "10.898"
        },
        {
          Name: "Abix Woonaaccessories BV",
          Date: "17/9/19",
          Price: "10.898"
        },
        {
          Name: "Zain Hasan",
          Date: "17/9/19",
          Price: "10.898"
        }
      ]
    };
  }

  render() {
    cardContent = this.state.contentToMap;
    var swipeoutBtns = [
      {
        backgroundColor: "#ffffff",
        onPress: () => {
          // this.deleteNote(item);
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
          backgroundColor={"transparent"}
          // leftArrow={true}
          //     leftSetting={true}
          OneHeadingEnable={true}
          HeadingText="Open Sales Order"
          //     elevation={4}
          twoWords={3}
          leftArrowSmall={true}
          //     rightSearchAdd={false}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
          //   plusIcons = {true}
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <Content>
          {//    contentToMap ?
          this.state.contentToMap.map((item, index) => {
            return (
              <Swipeout
                left={swipeoutBtns}
                style={{
                  backgroundColor: "#ffffff",
                  //   height: 85,
                  justifyContent: "center",
                  marginTop: 5,
                  borderWidth: 0
                }}
              >
                <View style={styles.CardView}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <View style={{ margin: 5, marginLeft: 12 }}>
                      <Text style={{ fontSize: 15, color: FontColor.black }}>
                        {item.Name}
                      </Text>
                      <Text style={{ fontSize: 12, color: FontColor.grayDark }}>
                        {item.Date}
                      </Text>
                    </View>
                    <View style={{ margin: 5, marginRight: 15 }}>
                      <Text style={{ fontSize: 10, color: FontColor.grayDark }}>
                        Customer's Price
                      </Text>
                      <Text
                        style={{ color: FontColor.black, textAlign: "right" }}
                      >
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
                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: "row",
                        marginLeft: 12
                      }}
                    >
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
                      <View style={{ marginLeft: 10 }}>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate("OrderSummary")
                          }
                          style={{
                            height: 25,
                            paddingHorizontal: 13,
                            backgroundColor: theme.white,
                            borderRadius: 5,
                            alignContent: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            //   marginBottom: 5,
                            borderColor: theme.grayLight
                          }}
                        >
                          <Text
                            style={{
                              color: FontColor.black,
                              textAlign: "center",
                              fontSize: 15
                            }}
                          >
                            View
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ margin: 5, marginRight: 10, marginTop: 10 }}>
                      <TouchableOpacity
                        style={{
                          height: 25,
                          paddingHorizontal: 10,
                          marginBottom: 5,
                          backgroundColor: theme.blue,
                          borderRadius: 5,
                          alignContent: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Text
                          style={{
                            color: "#ffffff",
                            textAlign: "center",
                            fontSize: 15
                          }}
                        >
                          Create InVoice
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Swipeout>
            );
          })}
          <View style={{ marginTop: 20 }}></View>
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
    // padding: 10
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
    marginTop: 7,
    marginBottom: 4,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  }
});

export default Opensalesorder;

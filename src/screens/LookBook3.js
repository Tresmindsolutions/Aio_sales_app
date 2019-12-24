import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { theme, FontColor } from "../components/constant/theme";

import { Content } from "native-base";
import GlobalHeader from "../components/GlobalHeader";

export default class LookBook3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 22,
      arr: [{}, {}]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          //    leftArrow={true}
          //     leftSetting={true}
          //  OneHeadingEnable={true}
          //   twoWords={1}
          //   HeadingText="Product"
          //     elevation={4}
          leftArrowSmall={true}
          // rightSearchAdd={true}
          TwoHeadingEnable={true}
          order="Nike"
          name="Footware"
          rightThreeIcons={true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <View style={{ marginBottom: 70 }}>
          <ScrollView style={{ paddingBottom: 20 }}>
            <View style={styles.main}>
              {this.state.arr.map((item, index) => {
                return (
                  <View
                    // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    style={styles.card}
                    //    onPress={() => this.props.navigation.navigate("ItemDetails")}
                  >
                    <View style={{}}>
                      <Image
                        source={require("../../assets/icons/xavier-teo-SxAXphIPWeg-unsplash-2.png")}
                        style={{ height: 120, width: "100%", borderRadius: 10 }}
                        resizeMode={"stretch"}
                      />
                      <View
                        style={{
                          //   borderWidth: 1,
                          bottom: 8,
                          position: "absolute",
                          //   height: 20,
                          right: 7,
                          alignSelf: "flex-end",
                          //   width: 180,
                          //   backgroundColor: "red",
                          flexDirection: "row"
                        }}
                      >
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "#C9C9C9",
                            borderWidth: 1.5,
                            borderColor: "#ffffff"
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{}}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View
                        style={{ height: 40 }}
                        // onPress={() => this.props.navigation.navigate("ItemDetails")}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            marginTop: 5
                          }}
                        >
                          Nike F03 Whites
                        </Text>
                        <View
                          style={styles.count}
                          // onPress={() => this.props.navigation.navigate("ItemDetails")}
                        >
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter - 1,
                                plus: false,
                                minus: true
                              })
                            }
                          >
                            {/* Imag path */}
                            <Image
                              source={require("../../assets/icons/sub.png")}
                              style={{ height: 12, width: 12, height: 10 }}
                              resizeMode={"contain"}
                            />
                          </View>

                          <View style={styles.numb}>
                            <Text
                              style={[
                                { fontSize: 26 },
                                this.state.counter > 0
                                  ? { color: FontColor.blue }
                                  : { color: FontColor.blue }
                              ]}
                            >
                              {this.state.counter}
                            </Text>
                          </View>
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter + 1,
                                plus: true,
                                minus: false
                              })
                            }
                          >
                            <Image
                              source={require("../../assets/icons/add.png")}
                              style={{ height: 14, width: 14 }}
                              resizeMode={"contain"}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={styles.priceTagMain}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View style={styles.priceTag}>
                        <Text style={{ color: FontColor.black }}>$49.99</Text>
                      </View>
                      <View style={styles.priceChange}>
                        <Text style={{ color: FontColor.white, fontSize: 12 }}>
                          Price Change
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.main}>
              {this.state.arr.map((item, index) => {
                return (
                  <View
                    // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    style={styles.card}
                    //    onPress={() => this.props.navigation.navigate("ItemDetails")}
                  >
                    <View style={{}}>
                      <Image
                        source={require("../../assets/icons/xavier-teo-SxAXphIPWeg-unsplash-2.png")}
                        style={{ height: 120, width: "100%", borderRadius: 10 }}
                        resizeMode={"stretch"}
                      />
                      <View
                        style={{
                          //   borderWidth: 1,
                          bottom: 8,
                          position: "absolute",
                          //   height: 20,
                          right: 7,
                          alignSelf: "flex-end",
                          //   width: 180,
                          //   backgroundColor: "red",
                          flexDirection: "row"
                        }}
                      >
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "#C9C9C9",
                            borderWidth: 1.5,
                            borderColor: "#ffffff"
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{}}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View
                        style={{ height: 40 }}
                        // onPress={() => this.props.navigation.navigate("ItemDetails")}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            marginTop: 5
                          }}
                        >
                          Nike F03 Whites
                        </Text>
                        <View
                          style={styles.count}
                          // onPress={() => this.props.navigation.navigate("ItemDetails")}
                        >
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter - 1,
                                plus: false,
                                minus: true
                              })
                            }
                          >
                            {/* Imag path */}
                            <Image
                              source={require("../../assets/icons/sub.png")}
                              style={{ height: 12, width: 12, height: 10 }}
                              resizeMode={"contain"}
                            />
                          </View>

                          <View style={styles.numb}>
                            <Text
                              style={[
                                { fontSize: 26 },
                                this.state.counter > 0
                                  ? { color: FontColor.blue }
                                  : { color: FontColor.blue }
                              ]}
                            >
                              {this.state.counter}
                            </Text>
                          </View>
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter + 1,
                                plus: true,
                                minus: false
                              })
                            }
                          >
                            <Image
                              source={require("../../assets/icons/add.png")}
                              style={{ height: 14, width: 14 }}
                              resizeMode={"contain"}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={styles.priceTagMain}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View style={styles.priceTag}>
                        <Text style={{ color: FontColor.black }}>$49.99</Text>
                      </View>
                      <View style={styles.priceChange}>
                        <Text style={{ color: FontColor.white, fontSize: 12 }}>
                          Price Change
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.main}>
              {this.state.arr.map((item, index) => {
                return (
                  <View
                    // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    style={styles.card}
                    //    onPress={() => this.props.navigation.navigate("ItemDetails")}
                  >
                    <View style={{}}>
                      <Image
                        source={require("../../assets/icons/xavier-teo-SxAXphIPWeg-unsplash-2.png")}
                        style={{ height: 120, width: "100%", borderRadius: 10 }}
                        resizeMode={"stretch"}
                      />
                      <View
                        style={{
                          //   borderWidth: 1,
                          bottom: 8,
                          position: "absolute",
                          //   height: 20,
                          right: 7,
                          alignSelf: "flex-end",
                          //   width: 180,
                          //   backgroundColor: "red",
                          flexDirection: "row"
                        }}
                      >
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "#C9C9C9",
                            borderWidth: 1.5,
                            borderColor: "#ffffff"
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{}}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View
                        style={{ height: 40 }}
                        // onPress={() => this.props.navigation.navigate("ItemDetails")}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            marginTop: 5
                          }}
                        >
                          Nike F03 Whites
                        </Text>
                        <View
                          style={styles.count}
                          // onPress={() => this.props.navigation.navigate("ItemDetails")}
                        >
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter - 1,
                                plus: false,
                                minus: true
                              })
                            }
                          >
                            {/* Imag path */}
                            <Image
                              source={require("../../assets/icons/sub.png")}
                              style={{ height: 12, width: 12, height: 10 }}
                              resizeMode={"contain"}
                            />
                          </View>

                          <View style={styles.numb}>
                            <Text
                              style={[
                                { fontSize: 26 },
                                this.state.counter > 0
                                  ? { color: FontColor.blue }
                                  : { color: FontColor.blue }
                              ]}
                            >
                              {this.state.counter}
                            </Text>
                          </View>
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter + 1,
                                plus: true,
                                minus: false
                              })
                            }
                          >
                            <Image
                              source={require("../../assets/icons/add.png")}
                              style={{ height: 14, width: 14 }}
                              resizeMode={"contain"}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={styles.priceTagMain}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View style={styles.priceTag}>
                        <Text style={{ color: FontColor.black }}>$49.99</Text>
                      </View>
                      <View style={styles.priceChange}>
                        <Text style={{ color: FontColor.white, fontSize: 12 }}>
                          Price Change
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.main}>
              {this.state.arr.map((item, index) => {
                return (
                  <View
                    // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    style={styles.card}
                    //    onPress={() => this.props.navigation.navigate("ItemDetails")}
                  >
                    <View style={{}}>
                      <Image
                        source={require("../../assets/icons/xavier-teo-SxAXphIPWeg-unsplash-2.png")}
                        style={{ height: 120, width: "100%", borderRadius: 10 }}
                        resizeMode={"stretch"}
                      />
                      <View
                        style={{
                          //   borderWidth: 1,
                          bottom: 8,
                          position: "absolute",
                          //   height: 20,
                          right: 7,
                          alignSelf: "flex-end",
                          //   width: 180,
                          //   backgroundColor: "red",
                          flexDirection: "row"
                        }}
                      >
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "white"
                          }}
                        />
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            marginLeft: 4,
                            borderRadius: 25,
                            backgroundColor: "#C9C9C9",
                            borderWidth: 1.5,
                            borderColor: "#ffffff"
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{}}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View
                        style={{ height: 40 }}
                        // onPress={() => this.props.navigation.navigate("ItemDetails")}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            marginTop: 5
                          }}
                        >
                          Nike F03 Whites
                        </Text>
                        <View
                          style={styles.count}
                          // onPress={() => this.props.navigation.navigate("ItemDetails")}
                        >
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter - 1,
                                plus: false,
                                minus: true
                              })
                            }
                          >
                            {/* Imag path */}
                            <Image
                              source={require("../../assets/icons/sub.png")}
                              style={{ height: 12, width: 12, height: 10 }}
                              resizeMode={"contain"}
                            />
                          </View>

                          <View style={styles.numb}>
                            <Text
                              style={[
                                { fontSize: 26 },
                                this.state.counter > 0
                                  ? { color: FontColor.blue }
                                  : { color: FontColor.blue }
                              ]}
                            >
                              {this.state.counter}
                            </Text>
                          </View>
                          <View
                            style={styles.add}
                            onPress={() =>
                              this.setState({
                                counter: this.state.counter + 1,
                                plus: true,
                                minus: false
                              })
                            }
                          >
                            <Image
                              source={require("../../assets/icons/add.png")}
                              style={{ height: 14, width: 14 }}
                              resizeMode={"contain"}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={styles.priceTagMain}
                      // onPress={() => this.props.navigation.navigate("ItemDetails")}
                    >
                      <View style={styles.priceTag}>
                        <Text style={{ color: FontColor.black }}>$49.99</Text>
                      </View>
                      <View style={styles.priceChange}>
                        <Text style={{ color: FontColor.white, fontSize: 12 }}>
                          Price Change
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
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
    borderWidth: 0,
    justifyContent: "center",
    // flexWrap: "wrap",
    flexDirection: "row"
    // justifyContent: "space-around"
  },
  card: {
    height: 180,
    width: "49%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: 2,
    marginLeft: 1,
    marginRight: 1
    // zIndex: 10
    // borderWidth: 1
  },
  count: {
    borderWidth: 0,
    height: 35,
    justifyContent: "space-around",
    flexDirection: "row",
    // marginTop: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    backgroundColor: "#ffffff"
  },
  priceChange: {
    height: 20,
    width: 80,
    backgroundColor: theme.blue,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  priceTag: {
    height: 25,
    width: 80,
    backgroundColor: theme.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  priceTagMain: {
    width: 80,
    height: 45,

    position: "absolute",
    right: -6,
    top: 8,
    borderRadius: 20
  },
  zoomPic: {
    borderWidth: 1,
    backgroundColor: "black",
    alignItems: "flex-end"
  },
  numb: {
    borderWidth: 0,
    alignSelf: "center",
    //   backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  add: {
    borderWidth: 0,
    alignSelf: "center",

    justifyContent: "center",
    alignItems: "center"
  }
});

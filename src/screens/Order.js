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
  Dimensions,
  ScrollView,
  Modal
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import GlobalHeader from "../components/GlobalHeader";
import Category1 from "../components/order/Category1";
import { theme, FontColor } from "../components/constant/theme";
import ImageViewer from "react-native-image-zoom-viewer";

const images = [
  {
    // Simplest usage.
    url:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
    }
  },
  {
    url: "",
    props: {
      // Or you can set source directory.
      source: require("../../assets/icons/watch.png")
      // source: require("../../assets/icons")
    }
  }
];

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Trending: true,
      All: false,
      Category1: false,
      Category2: false,
      Category3: false,
      visible: false,
      counter: 0,
      arr: [
        { img: require("../../assets/icons/headphoneRec2.png") },
        { img: require("../../assets/icons/Rectangle.png") },
        { img: require("../../assets/icons/33.png") },
        { img: require("../../assets/icons/rec.png") },
        { img: require("../../assets/icons/headphoneRec2.png") },
        { img: require("../../assets/icons/headphoneRec2.png") },
        { img: require("../../assets/icons/33.png") },
        { img: require("../../assets/icons/rec.png") },
        { img: require("../../assets/icons/headphoneRec2.png") },
        { img: require("../../assets/icons/Rectangle.png") }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <GlobalHeader
          backgroundColor={"#ffffff"}
          //  leftArrow={true}
          //     HeadingText="Summary"
          //   elevation={4}
          //  leftSetting={true}
          leftArrowSmall={true}
          twoWords={2}
          TwoHeadingEnable={true}
          order="Order"
          name="Abrix Woonaccessoires BV"
          rightThreeIcons={true}
          navigation={this.props.navigation}
        /> */}

        <GlobalHeader
          backgroundColor={"#ffffff"}
          //  leftArrow={true}
          //     leftSetting={true}
          //     OneHeadingEnable = {true}
          //     HeadingText="Summary"
          //     elevation={4}
          // twoWords={1}
          leftArrowSmall={true}
          //     rightSearchAdd={false}
          TwoHeadingEnable={true}
          order="order"
          name="Abrix Woonaccessoires BV"
          // plusIcons = {true}
          rightThreeIcons={true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />

        <View style={{ height: 50 }}>
          <ScrollView
            horizontal={true}
            style={{ height: 0 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.main2}>
              {/* ===Trending=== */}

              <TouchableOpacity
                style={{
                  borderBottomWidth: this.state.Trending ? 2 : 0,
                  borderBottomColor: this.state.Trending
                    ? theme.blue
                    : theme.grayDark,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 15
                }}
                onPress={() => {
                  this.setState({
                    Trending: true,
                    All: false,
                    Category1: false,
                    Category2: false,
                    Category3: false
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: this.state.Trending ? FontColor.blue : "gray"
                  }}
                >
                  Trending
                </Text>
              </TouchableOpacity>

              {/* ===All=== */}

              <TouchableOpacity
                style={{
                  borderBottomWidth: this.state.All ? 2 : 0,
                  borderBottomColor: this.state.All
                    ? theme.blue
                    : theme.grayDark,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 15
                }}
                onPress={() => {
                  this.setState({
                    Trending: false,
                    All: true,
                    Category1: false,
                    Category2: false,
                    Category3: false
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: this.state.All ? FontColor.blue : "gray"
                  }}
                >
                  All
                </Text>
              </TouchableOpacity>

              {/* ===Category 1=== */}

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  borderBottomWidth: this.state.Category1 ? 2 : 0,
                  borderBottomColor: this.state.Category1
                    ? theme.blue
                    : theme.grayDark
                }}
                onPress={() => {
                  this.setState({
                    Trending: false,
                    All: false,
                    Category1: true,
                    Category2: false,
                    Category3: false
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: this.state.Category1 ? FontColor.blue : "gray"
                  }}
                >
                  Category 1
                </Text>
              </TouchableOpacity>

              {/* ===Category 2=== */}

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  borderBottomWidth: this.state.Category2 ? 2 : 0,
                  borderBottomColor: this.state.Category2
                    ? theme.blue
                    : theme.grayDark
                }}
                onPress={() => {
                  this.setState({
                    Trending: false,
                    All: false,
                    Category1: false,
                    Category2: true,
                    Category3: false
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: this.state.Category2 ? FontColor.blue : "gray"
                  }}
                >
                  Category 2
                </Text>
              </TouchableOpacity>

              {/* ===Category 3=== */}

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  borderBottomWidth: this.state.Category3 ? 2 : 0,
                  borderBottomColor: this.state.Category3
                    ? theme.blue
                    : theme.grayDark
                }}
                onPress={() => {
                  this.setState({
                    Trending: false,
                    All: false,
                    Category1: false,
                    Category2: false,
                    Category3: true
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: this.state.Category3 ? FontColor.blue : "gray"
                  }}
                >
                  Category 3
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Modal visible={this.state.visible} transparent={false}>
          <View style={styles.zoomPic}>
            <TouchableOpacity
              style={{ padding: 10, width: 60, alignSelf: "flex-end" }}
              onPress={() => this.setState({ visible: false })}
            >
              <MaterialIcons name={"close"} color={"white"} size={28} />
            </TouchableOpacity>
          </View>
          <ImageViewer imageUrls={images} />
        </Modal>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            padding: 5
          }}
        >
          <Text style={{ fontSize: 18 }}>Best Sellers</Text>
        </View>

        <ScrollView>
          <View style={styles.main}>
            {this.state.arr.map((item, index) => {
              return (
                <View
                  // onPress={() => this.props.navigation.navigate("ItemDetails")}
                  style={styles.card}
                  //    onPress={() => this.props.navigation.navigate("ItemDetails")}
                >
                  <TouchableOpacity
                    style={{}}
                    onPress={() => this.setState({ visible: true })}
                  >
                    <Image
                      source={item.img}
                      style={{ height: 120, width: "100%", borderRadius: 10 }}
                      resizeMode={"cover"}
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
                          height: 6,
                          width: 6,
                          marginLeft: 4,
                          borderRadius: 25,
                          backgroundColor: "white"
                        }}
                      />
                      <View
                        style={{
                          height: 6,
                          width: 6,
                          marginLeft: 4,
                          borderRadius: 25,
                          backgroundColor: "white"
                        }}
                      />
                      <View
                        style={{
                          height: 6,
                          width: 6,
                          marginLeft: 4,
                          borderRadius: 25,
                          backgroundColor: "#C9C9C9",
                          borderWidth: 1.5,
                          borderColor: "#ffffff"
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{}}
                    onPress={() =>
                      this.props.navigation.navigate("ItemDetails")
                    }
                  >
                    <TouchableOpacity
                      style={{ height: 40 }}
                      onPress={() =>
                        this.props.navigation.navigate("ItemDetails")
                      }
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          textAlign: "center",
                          marginTop: 5
                        }}
                      >
                        Beats M10 Headset
                      </Text>
                      <TouchableOpacity
                        style={styles.count}
                        onPress={() =>
                          this.props.navigation.navigate("ItemDetails")
                        }
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
                                : { color: FontColor.grayDark }
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
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.priceTagMain}
                    onPress={() =>
                      this.props.navigation.navigate("ItemDetails")
                    }
                  >
                    <View style={styles.priceTag}>
                      <Text style={{ color: FontColor.black }}>$49.99</Text>
                    </View>
                    <View style={styles.priceChange}>
                      <Text style={{ color: FontColor.white, fontSize: 12 }}>
                        Price Change
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* <Category1 navigation={this.props.navigation} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  },
  main2: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    marginTop: 10
  },
  scene: {
    flex: 1
  },
  button: {
    width: "20%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 7,
    marginBottom: 7,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white"
  },
  buttonPress: {
    width: "20%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 7,
    marginBottom: 7,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "green"
  },
  welcome: {
    fontFamily: "Nunito-Bold",
    color: "#000000"
  },
  welcomePress: {
    fontFamily: "Nunito-Bold",
    color: "#ffffff"
  },
  main: {
    borderWidth: 0,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
    // justifyContent: "space-around"
  },
  card: {
    height: 180,
    width: "45%",
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
    marginTop: 10,
    marginLeft: 6,
    marginRight: 6
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
    height: 30,
    width: 80,
    backgroundColor: theme.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  priceTagMain: {
    width: 80,
    height: 50,

    position: "absolute",
    right: -10,
    top: 20,
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

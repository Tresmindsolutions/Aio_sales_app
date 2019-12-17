import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  Modal
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import { theme, FontColor } from "../constant/theme";

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
      source: require("../../../assets/icons/watch.png")
    }
  }
];

export default class Category1 extends Component {
  state = {
    visible: false,
    counter: 0
  };

  render() {
    return (
      <View style={styles.container}>
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
        <View style={{ width: "90%", alignSelf: "center", padding: 5 }}>
          <Text style={{ fontSize: 18 }}>Best Sellers</Text>
        </View>

        <View style={styles.main}>
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
                source={require("../../../assets/icons/headphoneRec2.png")}
                style={{ height: 120, width: 160, borderRadius: 10 }}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() => this.props.navigation.navigate("ItemDetails")}
            >
              <TouchableOpacity
                style={{ height: 40 }}
                onPress={() => this.props.navigation.navigate("ItemDetails")}
              >
                <Text
                  style={{ fontSize: 14, textAlign: "center", marginTop: 5 }}
                >
                  Beats M10 Headset
                </Text>
                <TouchableOpacity
                  style={styles.count}
                  onPress={() => this.props.navigation.navigate("ItemDetails")}
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
                      source={require("../../../assets/icons/sub.png")}
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
                      source={require("../../../assets/icons/add.png")}
                      style={{ height: 14, width: 14 }}
                      resizeMode={"contain"}
                    />
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",

                right: 5,
                bottom: 55
              }}
            >
              <Entypo name="dots-three-horizontal" size={22} />
            </View>
            <TouchableOpacity
              style={styles.priceTagMain}
              onPress={() => this.props.navigation.navigate("ItemDetails")}
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
          {/* ===Second Cart for check=== */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#0000001A"
    backgroundColor: "#ffffff"
  },
  main: {
    borderWidth: 0,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  card: {
    height: 180,
    //   width: 170,
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

    marginLeft: 10
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

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
// import GlobalHeader from "../compnents/GlobalHeader";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";

import { theme, FontColor } from "../constant/theme";
import ImageZoom from "react-native-image-pan-zoom";

state = {
  visible: true
};

const images = [
  {
    // Simplest usage.
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",

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
      source: require("../../../assets/icons/headphone.png")
    }
  }
];

export default class Category1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Text style={{ fontSize: 18 }}>Best Sellers</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 10,
            width: 10,
            backgroundColor: "red",
            borderWidth: 1
          }}
          onPress={() => this.setState({ visible: !this.state.visible })}
        >
          {/* <Modal visible={this.state.visible} transparent={true}>
            <ImageViewer imageUrls={images} />
          </Modal> */}
          {/* <ImageZoom
            cropWidth={Dimensions.get("window").width}
            cropHeight={Dimensions.get("window").height}
            imageWidth={200}
            imageHeight={200}
          >
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../../../assets/icons/headphone.png")}
            />
          </ImageZoom> */}
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
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
            }}
          >
            <View style={{}}>
              <Image
                source={require("../../../assets/icons/headphoneRec2.png")}
                style={{ height: 120, width: 160, borderRadius: 10 }}
                resizeMode={"stretch"}
              />
            </View>
            <View style={{ height: 80 }}>
              <Text style={{ fontSize: 14, textAlign: "center", marginTop: 5 }}>
                Beats M10 Headset
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  //   borderWidth: 1,
                  marginTop: 10,
                  justifyContent: "space-around"
                }}
              >
                <TouchableOpacity
                  style={{ borderWidth: 0 }}
                  // onPress={()=>this.props.counter}
                >
                  <Text style={{ fontSize: 20 }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0 }}>
                  <Text style={{ fontSize: 20, color: FontColor.blue }}>
                    22
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0 }}>
                  <Text style={{ fontSize: 20 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: 80,
                height: 50,

                position: "absolute",
                right: -10,
                top: 20,
                borderRadius: 20
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 80,
                  backgroundColor: theme.white,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: FontColor.black }}>$49.99</Text>
              </View>
              <View
                style={{
                  height: 20,
                  width: 80,
                  backgroundColor: theme.blue,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: FontColor.white, fontSize: 12 }}>
                  Price Change
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#0000001A"
  }
});

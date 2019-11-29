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
import { SliderBox } from "react-native-image-slider-box";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";

import { theme, FontColor } from "../components/constant/theme";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      images: [
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      ]
    };
  }

  render() {
    console.log("images", this.state.images);
    return (
      <View style={styles.container}>
        <GlobalHeader
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
        />
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 40
            }}
          >
            <Text style={{ fontSize: 18, color: FontColor.black }}>
              Nike A110 Deltas
            </Text>
          </View>
          {/* <SliderBox 
        images={this.state.images} /> */}

          <View style={{ borderWidth: 0 }}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={250}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              parentWidth={this.state.width}
              dotColor="gray"
              inactiveDotColor="#ffffff"
              dotStyle={{
                width: 12,
                height: 12,
                borderRadius: 15,

                marginHorizontal: -5,
                //   padding: 0,
                //   margin: 0,
                right: 0
                //   position: "absolute"
              }}
            />

            <View style={styles.tag1}>
              <View style={styles.tagRow}>
                <Text style={{ color: FontColor.white, fontSize: 16 }}>
                  20%
                </Text>
              </View>
              <View style={{ borderWidth: 0, marginLeft: 5 }}>
                <Text style={{ color: "red", fontSize: 12 }}>Discount</Text>
                <Text style={{ color: FontColor.black, fontSize: 16 }}>
                  $19.99 OFF
                </Text>
              </View>
            </View>

            {/* bottom  */}
            <View style={styles.tag2}>
              <View style={{ borderWidth: 0 }}>
                <Text style={{ color: "red", fontSize: 12 }}>New Price</Text>
              </View>
              <Text
                style={{ color: FontColor.black, fontSize: 18, marginLeft: 5 }}
              >
                $99.99
              </Text>
            </View>
          </View>
          <View
            style={{
              // borderWidth: 1,
              height: 45,
              justifyContent: "space-around",
              flexDirection: "row",
              // marginTop: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              backgroundColor: "#ffffff",
              elevation: 3
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 0,
                alignSelf: "center",
                //   backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() =>
                this.setState({
                  counter: this.state.counter - 1,
                  plus: false,
                  minus: true
                })
              }
            >
              <Image
                source={require("../../assets/icons/sub.png")}
                style={{ height: 15, width: 15 }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0,
                alignSelf: "center",
                //   backgroundColor: "yellow",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={[
                  { fontSize: 32 },
                  this.state.counter > 0
                    ? { color: FontColor.blue }
                    : { color: FontColor.grayDark }
                ]}
              >
                {this.state.counter}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0,
                alignSelf: "center",

                justifyContent: "center",
                alignItems: "center"
              }}
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
                style={{ height: 15, width: 15 }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.txtSty}>
            <Text style={styles.txt}>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
            </Text>

            <View style={styles.row}>
              <View style={{ borderWidth: 0, width: "35%" }}>
                <Text style={styles.itemTxt}>Item Number</Text>

                <Text style={styles.itemTxt}>Case Count</Text>
                <Text style={styles.itemTxt}>Category</Text>
                <Text style={styles.itemTxt}>SRP</Text>
                <Text style={styles.itemTxt}>Unit UPC</Text>
                <Text style={styles.itemTxt}>Case UPC</Text>
                <Text style={styles.itemTxt}>Inventory</Text>
              </View>
              <View style={{ borderWidth: 0, width: "65%" }}>
                <Text style={styles.itemTxt}>06485</Text>
                <Text style={styles.itemTxt}>04006452582</Text>
                <Text style={styles.itemTxt}>Video Game Console</Text>
                <Text style={styles.itemTxt}>0864520218729</Text>
                <Text style={styles.itemTxt}>0864520218729</Text>
                <Text style={styles.itemTxt}>123456789</Text>
                <Text
                  style={{ fontSize: 14, color: FontColor.gray, marginTop: 5 }}
                >
                  Not Available
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Continue Ordering</Text>
          </TouchableOpacity>
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
  tag1: {
    height: 40,
    width: 135,
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    top: 20,
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center"
  },
  tagRow: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21BB40",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  tag2: {
    height: 40,
    width: 135,
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    top: 70,
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  txtSty: {
    // borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginTop: 10
  },
  txt: {
    fontSize: 16,
    color: FontColor.black
  },
  row: {
    // borderWidth: 1,
    // height: 100,
    flexDirection: "row",
    marginTop: 10
  },
  itemTxt: {
    fontSize: 14,
    color: FontColor.black,
    marginTop: 5
  },
  btn: {
    height: 40,
    width: "90%",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: theme.blue,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  btnTxt: {
    color: FontColor.white,
    fontSize: 18
  }
});

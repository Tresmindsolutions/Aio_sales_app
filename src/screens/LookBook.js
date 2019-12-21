import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput
} from "react-native";
import { FontColor, theme } from "../components/constant/theme";
import { Pages } from "react-native-pages";
import footwarePicOne from "../../assets/icons/Rectangle-11.png";
import footwarePicTwo from "../../assets/icons/Rectangle-9.png";
import footwarePicThree from "../../assets/icons/Rectangle-11.png";

import EntertainmentPicOne from "../../assets/icons/Rectangle300.png";
import EntertainmentPicTwo from "../../assets/icons/Rectangle300.png";
import EntertainmentPicThree from "../../assets/icons/Rectangle300.png";

import TechnologyPicOne from "../../assets/icons/Rectangle-12.png";
import TechnologyPicTwo from "../../assets/icons/Rectangle-12.png";
import TechnologyPicThree from "../../assets/icons/Rectangle-12.png";

import FurniturePicOne from "../../assets/icons/Rectangle25.png";
import FurniturePicTwo from "../../assets/icons/Rectangle25.png";
import FurniturePicThree from "../../assets/icons/Rectangle25.png";

//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";
import GlobalHeader from "../components/GlobalHeader";

export default class LookBook extends Component {
  constructor() {
    super();
    this.state = {
      footWare: [
        {
          footWareImageOne: footwarePicOne
        },
        {
          footWareImageOne: footwarePicTwo
        },
        {
          footWareImageOne: footwarePicThree
        }
      ],
      Entertainment: [
        {
          EntertainmentImageOne: EntertainmentPicOne
        },
        {
          EntertainmentImageOne: EntertainmentPicTwo
        },
        {
          EntertainmentImageOne: EntertainmentPicThree
        }
      ],
      Technology: [
        {
          TechnologyImageOne: TechnologyPicOne
        },
        {
          TechnologyImageOne: TechnologyPicTwo
        },
        {
          TechnologyImageOne: TechnologyPicThree
        }
      ],
      Furniture: [
        {
          FurnitureImageOne: FurniturePicOne
        },
        {
          FurnitureImageOne: FurniturePicTwo
        },
        {
          FurnitureImageOne: FurniturePicThree
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          // leftArrow={true}
          //     leftSetting={true}
          OneHeadingEnable={true}
          HeadingText="Look Book"
          //     elevation={4}
          twoWords={1}
          leftArrowSmall={true}
          //     rightSearchAdd={false}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
          plusIcons={true}
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ paddingBottom: 10 }}>
            <View style={{ height: 220, marginTop: 10 }}>
              <Pages indicatorPosition={"none"}>
                {this.state.footWare.map(value => (
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => this.props.navigation.navigate("LookBook2")}
                  >
                    <ImageBackground
                      source={value.footWareImageOne}
                      style={{ width: "100%", height: 220 }}
                    >
                      <View style={styles.textView}>
                        <Text style={styles.textStyle}>Footware</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </Pages>
            </View>
            <View style={{ height: 220, marginTop: 10 }}>
              <Pages indicatorPosition={"none"}>
                {this.state.Entertainment.map(value => (
                  <TouchableOpacity style={styles.touchableView}>
                    <ImageBackground
                      source={value.EntertainmentImageOne}
                      style={{ width: "100%", height: 220 }}
                    >
                      <View style={styles.textView}>
                        <Text style={{ fontSize: 36, color: FontColor.white }}>
                          Entertainment
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </Pages>
            </View>
            <View style={{ height: 220, marginTop: 10 }}>
              <Pages indicatorPosition={"none"}>
                {this.state.Technology.map(value => (
                  <TouchableOpacity style={styles.touchableView}>
                    <ImageBackground
                      source={value.TechnologyImageOne}
                      style={{ width: "100%", height: 220 }}
                    >
                      <View style={styles.textView}>
                        <Text style={{ fontSize: 38, color: FontColor.white }}>
                          Technology
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </Pages>
            </View>
            <View style={{ height: 220, marginTop: 10 }}>
              <Pages indicatorPosition={"none"}>
                {this.state.Furniture.map(value => (
                  <TouchableOpacity style={styles.touchableView}>
                    <ImageBackground
                      source={value.FurnitureImageOne}
                      style={{ width: "100%", height: 220 }}
                    >
                      <View style={styles.textView}>
                        <Text style={styles.textStyle}>Furniture</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </Pages>
            </View>
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
  touchableView: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
    overflow: "hidden"
  },
  textView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 37,
    color: FontColor.white
  }
});

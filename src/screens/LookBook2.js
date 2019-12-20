import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import { FontColor, theme } from "../components/constant/theme";
import picOne from "../../assets/icons/xavier-teo-SxAXphIPWeg-unsplash.png";
import picTwo from "../../assets/icons/paul-volkmer-updW-QUccFE-unsplash.png";
import picThree from "../../assets/icons/lefteris-kallergis-j1GiPlvSGWI-unsplash.png";
import picFourth from "../../assets/icons/mitch-lensink-1BI-ar91C7U-unsplash.png";

export default class LookBook2 extends Component {
  constructor() {
    super();
    this.state = {
      featureItems: [
        {
          itemImage: picOne,
          itemName: "Footware"
        },
        {
          itemImage: picTwo,
          itemName: "Footware"
        },
        {
          itemImage: picThree,
          itemName: "Footware"
        },
        {
          itemImage: picFourth,
          itemName: "Footware"
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
          //    elevation={4}
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
            {this.state.featureItems.map(value => (
              <TouchableOpacity style={styles.touchableView}>
                <ImageBackground
                  source={value.itemImage}
                  style={styles.imageStyling}
                >
                  <View style={styles.textView}>
                    <Text style={styles.textStyle}>{value.itemName}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 37,
    color: FontColor.white
  },
  touchableView: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  imageStyling: {
    width: "100%",
    height: 300
  }
});

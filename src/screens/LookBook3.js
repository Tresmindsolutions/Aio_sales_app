import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput
} from "react-native";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//import { Content } from "native-base";
import GlobalHeader from "../components/GlobalHeader";

export default class LookBook3 extends Component {
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
        <Text>3030</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"
  }
});

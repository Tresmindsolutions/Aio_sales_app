import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";

export default class Product extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <GlobalHeader
            //     backgroundColor={"transparent"}
            //   leftArrow={true}
            //     leftSetting={true}
            OneHeadingEnable={true}
            twoWords={1}
            HeadingText="Products"
            //     elevation={4}
            leftArrowSmall={true}
            //   rightSearchAdd={false}
            //   TwoHeadingEnable = {true}
            //   order="order"
            //     name="name"
            plusIcons={true}
            //   rightThreeIcons = {true}
            //   deleteRight={true}
            navigation={this.props.navigation}
          />
          <View style={styles.mainBox}>
            <View style={styles.mainBoxInner}>
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle442.png")}
                    style={{ width: "200%", height: 130, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text>Sony PlayStation 4</Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>
                      Video Game Console
                    </Text>
                    <Text style={styles.itemBoxDetailsText}>Price</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>$399</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle-10.png")}
                    style={{ width: "200%", height: 130, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text>The Stool</Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>Furniture</Text>
                    <Text style={styles.itemBoxDetailsText}>Price</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>$399</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
            >
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle300.png")}
                    style={{ width: "200%", height: 130, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text>Beats M10 Headset</Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>Electronics</Text>
                    <Text style={styles.itemBoxDetailsText}>Price</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>$399</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle-12.png")}
                    style={{ width: "200%", height: 130, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text>Smartphone</Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>Electronics</Text>
                    <Text style={styles.itemBoxDetailsText}>Price</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>$399</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
            >
              <TouchableOpacity style={styles.itemBox}>
                <View style={styles.itemBoxImage}>
                  <Image
                    source={require("../../assets/icons/Rectangle126.png")}
                    style={{ width: "200%", height: 130, borderRadius: 5 }}
                  />
                </View>
                <View style={styles.itemBoxDetails}>
                  <Text style={{}}>Nike A110 Deltas</Text>
                  <View style={styles.itemBoxDetailsTextText}>
                    <Text style={styles.itemBoxDetailsText}>Footware</Text>
                    <Text style={styles.itemBoxDetailsText}>Price</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Text style={{ color: "green" }}>$399</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
  mainBox: {
    width: "90%",
    alignSelf: "center",
    paddingBottom: 10
  },
  mainBoxInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  itemBox: {
    borderRadius: 5,
    backgroundColor: "#fff",
    width: "48%",
    shadowColor: "#00000029",
    paddingBottom: 5,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
  },
  itemBoxImage: {
    width: "50%",
    height: 130,
    // borderBottomWidth:1
    borderRadius: 5
  },
  itemBoxDetails: {
    width: "80%",
    alignSelf: "center",
    marginTop: 5
  },
  itemBoxDetailsText: {
    fontSize: 8,
    color: "#999"
  },
  itemBoxDetailsTextText: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

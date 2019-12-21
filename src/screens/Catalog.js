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
  ScrollView,
  Button
} from "react-native";

import GlobalHeader from "../components/GlobalHeader";
import { DragDropGrid } from "react-native-drag-drop-grid-library";
import { Content, Item } from "native-base";
import { theme, FontColor, Shadow } from "../components/constant/theme";

class Catalog extends Component {
  constructor(props) {
    super(props);
    // this.alphabets = [
    //   "Beats M10 Headset",

    //   "Smartwatch",

    //   "Nike A110 Deltas",

    //   "The Stool",

    //   "Beats M10 Headsets",

    //   "Smartwatchs",
    //   "Nike A110",
    //   "Stools"
    // ];
    this.state = {
      Trending: true,
      All: false,
      Category1: false,
      Category2: false,
      Category3: false,
      visible: false,
      counter: 0
    };
    this.alphabets = {
      arr: [
        {
          name: "Beats M10 Headset",
          img: require("../../assets/Images/1.png")
        },
        {
          name: "Smartwatch",
          img: require("../../assets/Images/2.png")
        },
        {
          name: "Nike A110 Deltas",
          img: require("../../assets/Images/3.png")
        },
        {
          name: "The Stool",
          img: require("../../assets/Images/4.png")
        },
        {
          name: "Beats M10",
          img: require("../../assets/Images/1.png")
        },
        {
          name: "Smartwatchs",
          img: require("../../assets/Images/2.png")
        },
        {
          name: "Nike A110",
          img: require("../../assets/Images/3.png")
        },
        {
          name: "Stools",
          img: require("../../assets/Images/4.png")
        }
      ]
    };
  }

  // this.alphabets = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "10",
  //   "11",
  //   "12",
  //   "13",
  //   "14",
  //   "15",
  //   "16",
  //   "17",
  //   "18",
  //   "19",
  //   "20",
  //   "21",
  //   "22",
  //   "23",
  //   "24"
  // ];

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
          order="order"
          name="Abrix Woonaccessoires BV"
          // rightThreeIcons={true}
          rightThreeIconsCatalog={true}
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
        {/* <ScrollView> */}
        <DragDropGrid
          ref={sortGrid => {
            this.sortGrid = sortGrid;
          }}
          blockTransitionDuration={400}
          activeBlockCenteringDuration={200}
          itemsPerRow={2}
          dragActivationTreshold={200}
          onDragRelease={itemOrder =>
            console.log(
              "Drag was released, the blocks are in the following order: ",
              itemOrder
            )
          }
          onDragStart={key =>
            console.log("Some block is being dragged now!", key)
          }
        >
          {this.alphabets.arr.map((item, index) => {
            return (
              <View
                key={item.name}
                style={{
                  //   borderWidth: 1,
                  height: 145,
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 15,
                  backgroundColor: "#ffffff",
                  width: "91%",
                  borderRadius: 6,
                  //   overflow: "hidden",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    // borderWidth: 1,
                    width: "100%",
                    height: 120
                    // borderRadius: 6
                    // zIndex: -10
                    // overflow: "hidden"
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ height: "100%", width: "100%", marginTop: -6 }}
                    resizeMode={"contain"}
                  />
                  <View
                    style={{
                      //   borderWidth: 1,
                      width: 75,
                      height: 45,
                      position: "absolute",
                      top: 7,
                      right: -5,
                      zIndex: 10,

                      borderRadius: 8,
                      overflow: "hidden"
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: theme.white,
                        justifyContent: "center",
                        height: 25,
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ fontSize: 14, color: FontColor.black }}>
                        $49.99
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: theme.blue,
                        height: 20,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ fontSize: 10, color: FontColor.white }}>
                        Price Change
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      //   borderWidth: 1,
                      bottom: 18,
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
                  style={{
                    height: 15,
                    justifyContent: "center",
                    alignItems: "center"
                    // borderWidth: 1
                  }}
                >
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                </View>
              </View>
            );
          })}
        </DragDropGrid>
        {/* </ScrollView> */}
        {/* <DragDropGrid
          ref={sortGrid => {
            this.sortGrid = sortGrid;
          }}
          blockTransitionDuration={400}
          activeBlockCenteringDuration={200}
          itemsPerRow={4}
          dragActivationTreshold={200}
          onDragRelease={itemOrder =>
            console.log(
              "Drag was released, the blocks are in the following order: ",
              itemOrder
            )
          }
          onDragStart={key =>
            console.log("Some block is being dragged now!", key)
          }
        >
          {this.alphabets.map((letter, index) => (
            <View
              key={letter}
              //   style={[styles.block, { backgroundColor: this.getColor() }]}
              style={[styles.block, { backgroundColor: "yellow" }]}
            >
              <Text style={{ color: "white", fontSize: 50 }}>{letter}</Text>
            </View>
          ))}
        </DragDropGrid> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
  block: {
    height: 40,
    width: 40
  },
  main2: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    marginTop: 10
  }
});

export default Catalog;

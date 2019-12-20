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
  Button
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import { Content } from "native-base";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { theme, FontColor } from "../components/constant/theme";

class OpenBalances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      contentToMap: [
        {
          Name: "Abix Woonaaccessories BV",
          Address: "Helper Brink 54, 9722 EN Groningen NL",
          Price: "876,576",
          mobileNumber: "03333987654",
          phoneNumber: "00421544454"
        },
        {
          Name: "Abix Woonaaccessories BV",
          Address: "Berchvill 14, 1046 CA Tapie",
          Price: "876,576",
          mobileNumber: "03333987654",
          phoneNumber: "0042"
        },
        {
          Name: "Zain Hasan",
          Address: "DHA, Badar Comm Area, street 5, 19E",
          Price: "209,897",
          mobileNumber: "03333987654",
          phoneNumber: "00421544"
        }
      ],
      selectedItem: null
    };
  }

  handleModal = selectedItem => {
    this.setState({ selectedItem, visible: true });
  };

  render() {
    cardContent = this.state.contentToMap;
    const { selectedItem } = this.state;
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          //    leftArrow={true}
          //     leftSetting={true}
          OneHeadingEnable={true}
          twoWords={2}
          HeadingText="Open Balances"
          //     elevation={4}
          leftArrowSmall={true}
          // rightSearchAdd={true}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <Content style={styles.content}>
          {//    contentToMap ?
          this.state.contentToMap.map((item, index) => {
            return (
              <View style={{ width: "100%" }}>
                <View style={styles.CardView1}>
                  <View style={styles.abView}>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>AB</Text>
                  </View>
                  <View style={{ width: "85%" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <View style={{ margin: 5 }}>
                        <Text
                          style={{
                            fontFamily: "ProductSansBold",
                            fontWeight: "bold"
                          }}
                        >
                          {item.Name}
                        </Text>
                        <View style={{ width: "96%" }}>
                          <Text style={{ fontSize: 10, color: "#878787" }}>
                            {item.Address}
                          </Text>
                        </View>
                      </View>
                      <View style={{ margin: 5, marginRight: 5 }}>
                        <Text style={{ fontSize: 10, textAlign: "right" }}>
                          Due
                        </Text>
                        <Text style={styles.priceText}>${item.Price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end"
                      }}
                    >
                      <View style={{ margin: 5, flexDirection: "row" }}>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                          <Image
                            source={require("../../assets/icons/shareicon.png")}
                            resizeMode={"contain"}
                            style={styles.shareIcon}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.receiveView}>
                        <TouchableOpacity style={styles.buttonLeft}>
                          <Text style={styles.receiveViewText}>Receive</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.callView}>
                        <TouchableOpacity
                          onPress={() => this.handleModal(item)}
                          style={styles.buttonRight}
                        >
                          <Text style={styles.callViewText}>Call</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          {selectedItem && (
            <Dialog
              visible={this.state.visible}
              onTouchOutside={() => {
                this.setState({ visible: false });
              }}
            >
              <DialogContent style={{ width: 300, height: 175 }}>
                <View>
                  <View style={styles.popopCallView}>
                    <Text style={{ fontSize: 12, color: FontColor.white }}>
                      Call
                    </Text>
                  </View>
                  <View style={{ alignItems: "center", marginTop: 7 }}>
                    <Text style={styles.heading}>Do you wish to call</Text>
                    <Text style={styles.heading}>{selectedItem.Name}?</Text>
                  </View>
                  <View style={styles.mainStyleBox}>
                    <View style={styles.mainStyleBoxBlueBox}>
                      <Text style={styles.numberHeading}>Mobile Number</Text>
                      <Text style={styles.numberHeading2}>
                        {selectedItem.mobileNumber}
                      </Text>
                    </View>
                    <View style={styles.mainStyleBoxPhoneBox}>
                      <Text style={styles.numberHeading}>Phone Number</Text>
                      <Text style={styles.numberHeading2}>
                        {selectedItem.phoneNumber}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cancelCallButton}>
                    <TouchableOpacity
                      onPress={() => this.setState({ visible: false })}
                      style={styles.cancelButton}
                    >
                      <Text style={{ fontSize: 12, color: FontColor.blue }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                      <Text style={{ fontSize: 12, color: FontColor.white }}>
                        Call
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </DialogContent>
            </Dialog>
          )}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 10
  },
  abView: {
    backgroundColor: "#F1F1F1",
    width: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  priceText: {
    fontWeight: "bold",
    textAlign: "right",
    color: "red"
  },
  shareIcon: {
    width: 20,
    height: 23,
    marginRight: 1,
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 8
  },
  receiveView: {
    margin: 5,
    marginRight: 2,
    marginBottom: 10
  },
  receiveViewText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 12
  },
  callView: {
    margin: 5,
    marginRight: 8,
    marginBottom: 10
  },
  callViewText: {
    color: "#148BFF",
    textAlign: "center",
    fontSize: 12
  },
  popopCallView: {
    backgroundColor: theme.blue,
    marginHorizontal: -20,
    paddingVertical: 5,
    alignItems: "center"
  },
  heading: {
    fontSize: 15,
    color: FontColor.black
  },
  mainStyleBox: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    marginTop: 5,
    paddingVertical: 10,
    marginHorizontal: -20,
    justifyContent: "space-around"
  },
  mainStyleBoxBlueBox: {
    backgroundColor: "#e1edf9",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5
  },
  mainStyleBoxPhoneBox: {
    paddingVertical: 5,
    alignItems: "center",
    paddingHorizontal: 12
  },
  numberHeading: {
    fontSize: 9,
    color: FontColor.middleGray
  },
  numberHeading2: {
    fontSize: 13,
    color: FontColor.blue
  },
  cancelCallButton: {
    marginHorizontal: -20,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  cancelButton: {
    backgroundColor: theme.white,
    borderRadius: 14,
    paddingVertical: 5,
    alignItems: "center",
    width: 90,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  callButton: {
    backgroundColor: theme.blue,
    borderRadius: 14,
    paddingVertical: 5,
    alignItems: "center",
    width: 90,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  CardView1: {
    width: "97%",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  buttonLeft: {
    height: 26,
    width: 80,
    backgroundColor: "#4591E4",
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  buttonRight: {
    height: 26,
    width: 70,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});

export default OpenBalances;

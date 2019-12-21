import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView
} from "react-native";
import { Overlay } from "react-native-elements";
import SignatureCapture from "react-native-signature-capture";
import GlobalHeader from "../components/GlobalHeader";
import { Textarea } from "native-base";
import { theme, FontColor, Shadow } from "../components/constant/theme";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import Swipeout from "react-native-swipeout";
export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: "Add Notes",
      noteText: "Note",
      isVisible: false,
      isVisibleSign: false,
      imagePath: null,
      arr: [
        {
          img: require("../../assets/icons/RectangleWatch.png"),
          sNo: "1",
          productName: "SmartWatch",
          price: "99.99",
          quality: "50",
          discount: "50",
          total: "50000"
        },
        {
          img: require("../../assets/icons/RectangleStool.png"),
          sNo: "2",
          productName: "The Stool",
          price: "99.99",
          quality: "5%",
          discount: "50",
          total: "50000"
        },
        {
          img: require("../../assets/icons/headphoneRec.png"),
          sNo: "3",
          productName: "Beats M10 Headset",
          price: "99.99",
          quality: "50",
          discount: "50",
          total: "50000"
        },
        {
          img: require("../../assets/icons/RectangleS.png"),
          sNo: "4",
          productName: "Nike A110 Deltas",
          price: "99.99",
          quality: "50",
          discount: "50",
          total: "50000"
        }
      ],
      contentToMap: [
        {
          Name: "Zain Hasan",
          Address: "DHA, Badar Comm Area, street 5, 19E",
          Price: "209,897",
          mobileNumber: "03333987654",
          phoneNumber: "00421544"
        }
      ],
      visible: false,
      selectedItem: null,
    };
  }
  
  handleModal = selectedItem => {
    this.setState({ selectedItem, visible: true });
  };

  _onSaveEvent = result => {
    result.encoded;
    //  - for the base64 encoded png
    console.log("location", result.pathName);
    // - for the file path name
    console.log(result);
    this.setState({ imagePath: result.pathName.toString() });
  };

  handleTextChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSave = () => {
    this.setState({ notes: this.state.noteText, isVisible: false });
  };

  render() {
    console.log("pathnameNew", this.state.imagePath);
    var swipeoutBtns = [
      {
        backgroundColor: "#ffffff",
        onPress: () => {
          this.deleteNote(item);
        },
        component: (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../../assets/icons/delete.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="contain"
            />
          </View>
        ),
        // component: function() {
        //   return <Image source={require("../../assets/icons/delete.png")} />;
        // },
        openRight: true
      }
    ];
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor={"#ffffff"}
          //  leftArrow={true}
          OneHeadingEnable={true}
          HeadingText="Order Summary"
          //   elevation={4}
          //  leftSetting={true}
          leftArrowSmall={true}
          twoWords={0}
          //   TwoHeadingEnable={true}
          //   order="Order"
          //   name="Abrix Woonaccessoires BV"
          //   rightThreeIcons={true}+
          deleteRight={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.mainMiddle}>
              <View style={{ width: "70%" }}>
                <Text style={{ fontSize: 14, color: FontColor.grayDark }}>
                  Acc
                </Text>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  Abrix Woonaccessoires BV
                </Text>
              </View>

              <View style={{ width: "30%" }}>
                <Text>Date</Text>
                <Text style={{ fontSize: 16, color: FontColor.black }}>
                  17/9/2019
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.heading}>
            <Text style={styles.headingTxt}>Seleted Items</Text>
          </View>

          {/* ===Delete Items=== */}
          {this.state.arr.map((item, index) => {
            return (
              <Swipeout
                left={swipeoutBtns}
                style={{
                  backgroundColor: "#ffffff",
                  height: 65,
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <View style={styles.cartS}>
                  <View style={styles.mainCard}>
                    <Text style={{ fontSize: 20, color: FontColor.black }}>
                      {item.sNo}
                    </Text>
                  </View>

                  <View style={styles.crt}>
                    <View style={styles.crtImg}>
                      <Image
                        source={item.img}
                        style={styles.imgPic}
                        resizeMode={"cover"}
                      />
                    </View>

                    <View style={styles.prod}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: FontColor.black,
                          paddingTop: 5
                          // marginTop: 10
                        }}
                      >
                        {item.productName}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-end"
                          // marginBottom: 2
                        }}
                      >
                        <Text
                          style={{ color: FontColor.grayDark, fontSize: 12 }}
                        >
                          Price{" "}
                        </Text>
                        <Text style={{ color: FontColor.black }}>
                          ${item.price}
                        </Text>
                        <Text
                          style={{ color: FontColor.grayDark, fontSize: 12 }}
                        >
                          {" "}
                          x Quality{" "}
                        </Text>
                        <Text style={{ color: FontColor.black }}>
                          {item.quality}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.crtEnd}>
                      <View style={styles.discount}>
                        <Text style={{ fontSize: 12, color: theme.black }}>
                          Discount{" "}
                        </Text>
                        <Text style={{ fontSize: 15, color: FontColor.black }}>
                          ${item.discount}
                        </Text>
                      </View>

                      <View style={styles.total}>
                        <Text style={{ fontSize: 12, color: theme.blue }}>
                          Total{" "}
                        </Text>
                        <Text style={{ fontSize: 15, color: FontColor.black }}>
                          ${item.total}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* ===Swiper=== */}
              </Swipeout>
            );
          })}

          <TouchableOpacity
            style={{
              // borderWidth: 1,
              marginTop: 10,
              height: "auto",
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: "#F1F1F1",
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.setState({ isVisible: true })}
          >
            <Text style={{ color: FontColor.grayDark, fontSize: 18 }}>
              {this.state.notes}
            </Text>
          </TouchableOpacity>

          <Overlay
            isVisible={this.state.isVisible}
            height={245}
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
            <View style={{ borderWidth: 0, marginBottom: 5 }}>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 22,
                  color: FontColor.black
                }}
              >
                Add a Notes
              </Text>
            </View>
            <Textarea
              rowSpan={5}
              bordered
              borderRadius={8}
              placeholder="Add a Notes"
              onChangeText={text => this.handleTextChange("noteText", text)}
              value={this.state.noteText}
            />

            <View
              style={{
                justifyContent: "space-around",
                flexDirection: "row",
                width: "100%",
                alignSelf: "center",
                marginTop: 20
              }}
            >
              <TouchableOpacity
                style={{
                  width: "45%",
                  height: 35,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F1F1F1",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3
                }}
                onPress={() => this.setState({ isVisible: false })}
              >
                <Text style={{ fontSize: 16, color: FontColor.grayDark }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: "45%",
                  height: 35,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.blue,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3
                }}
                onPress={() => this.handleSave()}
              >
                <Text style={{ fontSize: 16, color: "white" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </Overlay>

          <TouchableOpacity
            style={{
              // borderWidth: 1,
              marginTop: 10,
              marginBottom: 5,
              height: 45,
              backgroundColor: "#F1F1F1",
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.setState({ isVisibleSign: true })}
          >
            <Text style={{ color: FontColor.grayDark, fontSize: 18 }}>
              Signature
            </Text>
          </TouchableOpacity>

          <Overlay
            isVisible={this.state.isVisibleSign}
            borderRadius={8}
            height={270}
            onBackdropPress={() => this.setState({ isVisibleSign: false })}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: FontColor.black
                }}
              >
                Add Signature
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: theme.grayDark,
                  borderRadius: 8,
                  zIndex: 10,
                  paddingVertical: 2,
                  paddingHorizontal: 2
                }}
              >
                <SignatureCapture
                  style={[
                    {
                      height: 170,

                      borderRadius: 20,
                      zIndex: -5
                    }
                  ]}
                  ref="sign"
                  onSaveEvent={this._onSaveEvent}
                  onDragEvent={this._onDragEvent}
                  saveImageFileInExtStorage={false}
                  showNativeButtons={false}
                  showTitleLabel={false}
                  viewMode={"portrait"}
                  minStrokeWidth={8}
                  maxStrokeWidth={8}
                />
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-around",
                flexDirection: "row",
                width: "100%",
                alignSelf: "center",
                marginTop: 20
              }}
            >
              <TouchableOpacity
                style={{
                  width: "45%",
                  height: 35,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F1F1F1",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3
                }}
                onPress={() => this.setState({ isVisibleSign: false })}
              >
                <Text style={{ fontSize: 16, color: FontColor.grayDark }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: "45%",

                  height: 35,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.blue,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3
                }}
                onPress={() => {
                  this.saveSign();
                }}
              >
                <Text style={{ fontSize: 16, color: "white" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </Overlay>

          <View style={{ borderWidth: 0 }}>
            {this.state.imagePath ? (
              <Image
                // source={(require = this.state.imagePath)}
                style={{ height: 40, width: 40 }}
                resizeMode={"contain"}
              />
            ) : null}
          </View>
          <View
            style={{
              // borderWidth: 1,
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <View style={styles.line} />
            <View style={styles.row}>
              <Text style={styles.dateColor}>Due date</Text>
              <Text style={styles.dateColor}>10/10/19</Text>
            </View>
            <View style={styles.line} />
            {/* ===SubTotal=== */}
            <View style={[styles.row, { marginTop: 5 }]}>
              <Text style={styles.dateColor}>Subtotal</Text>
              <Text style={styles.dateColor}>$52,975</Text>
            </View>
            {/* ===Discount=== */}
            <View style={styles.row}>
              <Text style={styles.dateColor}>Discount</Text>
              <Text style={styles.dateColor}>-$49.99</Text>
            </View>
            {/* ===Credit=== */}

            <View style={styles.row}>
              <Text style={styles.dateColor}>Credit</Text>
              <Text style={styles.dateColor}>-$1150</Text>
            </View>
            {/* ===Open Balance=== */}
            <View style={styles.row}>
              <Text style={styles.dateColor}>Open Balance</Text>
              <Text style={styles.dateColor}>$52,975</Text>
            </View>
            {/* ===Payment=== */}
            <View style={[styles.row, { marginBottom: 5 }]}>
              <Text style={styles.dateColor}>Payment</Text>
              <Text style={styles.dateColor}>-$49.99</Text>
            </View>
            {/* ===Line=== */}
            <View style={[styles.line, { marginBottom: 5 }]} />
            <View style={styles.row}>
              <Text
                style={[styles.dateColor, { fontFamily: "ProductSansBold" }]}
              >
                TOTAL
              </Text>
              <Text
                style={[styles.dateColor, { fontFamily: "ProductSansBold" }]}
              >
                $51,874.99
              </Text>
            </View>

            {/* ===buttons=== */}
            <View style={[styles.row, { marginTop: 5 }]}>
              <TouchableOpacity 
               onPress={() => this.handleModal( )}
               style={styles.btnCon}
              >
                <Text style={{ color: FontColor.blue, fontSize: 16 }}>
                  Continue Ordering
                </Text>
              </TouchableOpacity>
              {/* ===Buttton Sec Row=== */}
              <TouchableOpacity style={styles.btnCon}>
                <Text style={{ color: FontColor.blue, fontSize: 16 }}>
                  Share Order
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnBottom}>
              <Text style={{ fontSize: 16, color: FontColor.white }}>
                Sales Order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnBottom}>
              <Text style={{ fontSize: 16, color: FontColor.white }}>
                Invoice
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* ===== Popup Dialogue box ==== */}
 
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
                    <Text style={styles.heading}> ?</Text>
                  </View>
                  <View style={styles.mainStyleBox}>
                    <View style={styles.mainStyleBoxBlueBox}>
                      <Text style={styles.numberHeading}>Mobile Number</Text>
                      <Text style={styles.numberHeading2}>
                        jj
                      </Text>
                    </View>
                    <View style={styles.mainStyleBoxPhoneBox}>
                      <Text style={styles.numberHeading}>Phone Number</Text>
                      <Text style={styles.numberHeading2}>
                         jhg
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
      
      </View>
    );
  }
  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
    this.refs["sign"].resetImage();
  }

  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log("dragged");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  main: {
    height: 55,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center"
  },
  mainMiddle: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row"
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: -6
  },
  headingTxt: {
    color: FontColor.blue,
    fontSize: 18
  },
  mainCard: {
    width: "9%",
    justifyContent: "center",
    alignItems: "center"
  },
  crt: {
    borderWidth: 0,
    width: "87%",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
  crtImg: {
    width: "24%",

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  imgPic: {
    height: "100%",
    width: "100%",

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  cartS: {
    width: "100%",
    flexDirection: "row",
    height: 55
  },
  prod: {
    marginLeft: 5,
    width: "45%",
    justifyContent: "space-around"
  },
  crtEnd: {
    width: "30%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  discount: {
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 6
  },
  total: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-end",
    marginRight: 6
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5
  },
  line: {
    borderWidth: 0.9,
    borderColor: FontColor.gray
  },
  dateColor: {
    fontSize: 16,
    color: FontColor.black
  },
  btnCon: {
    height: 38,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: theme.white
  },
  btnBottom: {
    // borderWidth: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    backgroundColor: theme.blue,
    borderRadius: 8,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  signature: {
    flex: 1,
    borderColor: "#000033",
    borderWidth: 1
  },

  // ====== Popup style =======
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
});

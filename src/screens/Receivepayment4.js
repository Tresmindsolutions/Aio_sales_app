import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontColor, theme } from "../components/constant/theme";
import GlobalHeader from "../components/GlobalHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class Receivepayment4 extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
    };
  }
  render() {
    let price = "51,845";
    let dollarSymbol = "$";
    let placeholderDollarPrice = `${dollarSymbol}${price}`;
    return (
      <View style={style.container}>
        <GlobalHeader
          backgroundColor={"transparent"}
          //    leftArrow={true}
          //     leftSetting={true}
          //   OneHeadingEnable = {true}
          twoWords={2}
          HeadingText="Receive Payment"
          //     elevation={4}
          leftArrowSmall={true}
          // rightSearchAdd={true}
          TwoHeadingEnable={true}
          order="Receive Payment"
          name="Abrix Woonaccessoires BV"
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <View style={{flexDirection:"column",justifyContent:"space-between", flex:1}}>
        <View style={{ width: "85%", alignSelf: "center" }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={style.amountReceivedText}>
              Bank
            </Text>
            <View style={style.textInputView}>
              <TextInput
                placeholder="Allied Bank"
                placeholderTextColor={FontColor.black}
                style={{ padding: 0, borderWidth: 0, fontSize: 13, height: 36 }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={style.amountReceivedText}>
              Date
            </Text>
            <View style={style.textInputView}>
            <DatePicker
    style={{ width: "90%" }}
    date={this.state.date}
    mode="date"
    placeholder="Select date"
    format="HH:mm"
    //  is24Hour={false}
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    // minuteInterval={10}
    iconComponent={
      // "none"
      <FontAwesome5
        size={0}
        color={theme.blue}
        name="calendar-alt"
        // style={{position: "absolute", left: 15 }}
      />
    }
    customStyles={{
      dateIcon: {
        // position: "absolute",
        // display: "none",
        left: 0,
        top: 8,
        marginLeft: 12,
        width: 25,
        height: 25
      },

      dateInput: {
        // marginLeft: 45,
        borderWidth: 0,
        alignItems: "flex-start"
      },
      placeholderText: {
        fontSize: 14,
        borderWidth: 0,

        color: FontColor.gray
      },
      dateText: {
        fontSize: 14,
        color: FontColor.black
      }
      // ... You can check the source to find the other keys.
    }}
    onDateChange={date => {
      this.setState({ date: date });
    }}
  />
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={style.amountReceivedText}>Check Number</Text>
            <View style={style.textInputView}>
              <TextInput
                keyboardType="number-pad"
                placeholder="8090103600"
                placeholderTextColor={FontColor.black}
                style={{ padding: 0, borderWidth: 0, fontSize: 13, height: 36 }}
                />
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={style.amountReceivedText}>Enter Amount Received</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View style={style.textInputView2}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 10, color: FontColor.black }}>
                    $
                  </Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder={price}
                    placeholderTextColor={FontColor.black}
                    style={{ padding: 0, borderWidth: 0, fontSize: 13, height: 36 }}
                    />
                </View>
              </View>
              <View style={style.rightView}>
                <View>
                  <Text style={style.dueText}>Due</Text>
                  <Text style={style.priceText}>$51,845</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            // marginTop: 60,
            height: 36,
            borderRadius: 8,
            width: "90%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            bottom:30,
            backgroundColor: theme.blue
          }}
          onPress={() => this.props.navigation.navigate("ReceivePayment3")}
          >
          <Text style={{ fontSize: 17, color: FontColor.white }}>
            Mark as Received
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white
  },
  amountReceivedText: {
    fontSize: 13,
    marginLeft: 8,
    color: FontColor.gray
  },
  textInputView: {
    marginTop: 5,
    backgroundColor: theme.white,
    paddingLeft: 10,
    borderRadius: 2,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  textInputView2: {
    // flexDirection:"row",
    // alignItems:"center",
    flex: 0.8,
    backgroundColor: theme.white,
    paddingLeft: 10,
    borderRadius: 2,
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  rightView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  dueText: {
    fontSize: 10,
    color: FontColor.gray,
    textAlign: "center"
  },
  priceText: {
    fontSize: 14,
    color: FontColor.red
  }
});

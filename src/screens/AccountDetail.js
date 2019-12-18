import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from "react-native";
// import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign'
// import DatePicker from 'react-native-datepicker'
import { Content } from "native-base";
import GlobalHeader from "../components/GlobalHeader"

class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // contentToMap: [
      //     {
      //         Name:"Abix Woonaaccessories BV",
      //         Date:"17/9/19",
      //         Price:"159,776"
      //     }
      // ]
    };
  }

  render() {
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
    return (
      <View style={styles.container}>
        <GlobalHeader
           backgroundColor={"transparent"}
       //    leftArrow={true}
      //     leftSetting={true}
          OneHeadingEnable = {true}
           HeadingText="Account Details"
      //     elevation={4}
           leftArrowSmall={true}
          rightSearchAdd={true}
      //     TwoHeadingEnable = {true}
      //     order="order"
      //     name="name"
      //     rightThreeIcons = {true}
      //     deleteRight={true}
      //     navigation={this.props.navigation}
        />
        <Content style={styles.content}>
          {/* ========= Header ended ==============*/}

          <View>
            <View style={styles.CardView}>
                <View style={{ borderTopLeftRadius:5 }}>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      width: "100%",
                      backgroundColor: "#148BFF",
                      borderTopStartRadius:5,
                      borderTopEndRadius:5,
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        textAlign: "center",
                        fontSize: 15
                      }}
                    >
                      Abrix Woonaaccessories
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ width:"100%", height:130, backgroundColor:"blue"}}>
                    <Image
                        source={require("../../assets/Images/MapPicture.png")}
                        style={{ width:"100%", height:"100%" }}
                    />
                  </View>

                <View style={{ width:"100%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10}}>
                    <Text
                      style={{
                        color: "#000000",
                        textAlign: "center",
                        fontFamily: "Product Sans",
                        fontSize: 16,
                        marginLeft:"8%",
                        fontWeight:"500"
                      }}
                    >
                      Account Details
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={require("../../assets/icons/ic_edit_icon.png")}
                            style={{ width:17, height:16, marginRight:"6%" }}
                        />
                    </TouchableOpacity>
                </View>

            <View style={{ marginBottom:20 }}>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Contact Name
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        Eric Adidal
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Address
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        Helper Brink 54, 9722 EN Groningen NL
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Phone Number
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        01245127677676
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Mobile Number
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        08645826628902
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Fax Number
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        08645826628902
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Email Address
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        Eric.E@email.com
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Tax ID
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        Not Available
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Website
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        Not Available
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        DBA
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                        12345678910
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Terms
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                            The quick, brown fox jumps over a lazy.
                        </Text>
                    </View>
                </View>
                <View style={{ width:"100%", flexDirection:"row", justifyContent:"flex-start", marginTop:10}}>
                    <View style={{width:"35%"}}>
                        <Text style={styles.textLeftColStyle}>
                        Note
                        </Text>
                    </View>
                    <View style={{width:"65%"}}>
                        <Text style={styles.textRightColStyle}>
                            The quick, brown fox jumps over a lazy dog.
                            DJs flock by when MTV ax quiz prog.
                            Junk MTV quiz graced by fox whelps.
                        </Text>
                    </View>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    paddingVertical:5,
    flex: 1
  },
  content: {
    paddingBottom: 10,
    // marginBottom: 10
  },
  textLeftColStyle: {
    color: "#000000",
    fontFamily: "Product Sans",
    fontSize: 13,
    marginTop:10,
    marginLeft:"24%",
  },
  textRightColStyle: {
    color: "#000000",
    fontFamily: "Product Sans",
    fontSize: 12,
    marginLeft:"10%",
    marginTop:11
  },
  CardView: {
    width: "97%",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "center",
    borderRadius: 5,
    // marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
});

export default AccountDetails;

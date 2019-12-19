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
import DatePicker from 'react-native-datepicker'
import GlobalHeader from "../components/GlobalHeader"
import { Content } from "native-base";


class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {date:"2019-07-10"}
    }

  render() {
    return (
      <View style={styles.container}>
          <GlobalHeader
           backgroundColor={"transparent"}
       //    leftArrow={true}
      //     leftSetting={true}
          OneHeadingEnable = {true}
          twoWords={1}
           HeadingText="Product"
      //     elevation={4}
           leftArrowSmall={true}
          // rightSearchAdd={true}
      //     TwoHeadingEnable = {true}
      //     order="order"
      //     name="name"
      //     rightThreeIcons = {true}
      //     deleteRight={true}
      //     navigation={this.props.navigation}
        />
        <Content style={styles.content}>
            {/* <View>
                <TouchableOpacity>
                    <Image
                    source={require("../../../assets/Icons/backblu.png")}
                    style={{ width:20, height:30, marginLeft:10 }}
                    />
                </TouchableOpacity>
            </View> */}

            <View style={{ display:'flex', alignSelf: "center"}}>
                {/* <Image
                 source={require("../../../assets/Images/logo.png")}
                 style={{ width:100, height:80, display:'flex' }}
                /> */}
            </View>

            <View style={{ display:'flex', alignSelf:'center'}}>
                <Text style={{color:"#4591E4", fontSize:20, fontWeight:"bold", paddingTop:20, paddingBottom:10}}>Sign up</Text>
            </View>

            <View>
                <View>
                    <Text style={{color:'#7b7b7b', margin:8}}>
                        Business Name
                    </Text>
                </View>
                <View style={ styles.viewInput }>
                    {/* <Image source={require("../../../assets/Icons/store.png")}
                     style={{ width:15, height:15, marginLeft:10, marginRight:10 }}
                    /> */}
                    <TextInput
                    style={styles.input}
                     placeholder="Input here..."
                     placeholderTextColor="#7b7b7b"
                     onChangeText={email => this.setState({ email })}
                    />
                </View>
            </View>
            <View>
                <View>
                    <Text style={{color:'#7b7b7b', margin:8}}>
                        DBA
                    </Text>
                </View>
                <View style={ styles.viewInput }>
                    {/* <Image source={require("../../../assets/Icons/user.png")}
                     style={{ width:15, height:15, marginLeft:10, marginRight:10 }}
                    /> */}
                    <TextInput
                     style={styles.input}
                     placeholder="Input here..."
                     placeholderTextColor="#7b7b7b"
                     onChangeText={email => this.setState({ email })}
                    />
                </View>
            </View>
            <View>
                <View>
                    <Text style={{color:'#7b7b7b', margin:8}}>
                        Card Number
                    </Text>
                </View>
                <View style={ styles.viewInput }>
                    {/* <Image source={require("../../../assets/Icons/creditcard.png")}
                     style={{ width:15, height:15, marginLeft:10, marginRight:10 }}
                    /> */}
                    <TextInput
                     style={styles.input}
                     keyboardType="numeric"
                     placeholder="Input here..."
                     placeholderTextColor="#7b7b7b"
                     onChangeText={email => this.setState({ email })}
                    />
                </View>
            </View>
            <View>
                <View>
                    <Text style={{color:'#7b7b7b', margin:8}}>
                        City
                    </Text>
                </View>
                <View style={ styles.viewInput }>
                    {/* <Image source={require("../../../assets/Icons/city.png")}
                     style={{ width:15, height:15, marginLeft:10, marginRight:10 }}
                    /> */}
                    <TextInput
                     style={styles.input}
                     placeholder="Input here..."
                     placeholderTextColor="#7b7b7b"
                     onChangeText={email => this.setState({ email })}
                    />
                </View>
            </View>

            <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                <View style={{ marginLeft:7 }}>
                    <View>
                        <Text style={{color:'#7b7b7b', margin:3}}>
                            Expiry
                        </Text>
                    </View>
                    <View style={ styles.viewInputLast }>
                        {/* <Image source={require("../../../assets/Icons/calendar.png")}
                          style={{ width:15, height:15, marginLeft:10, marginRight:10 }}
                        /> */}
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2020-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 1,
                                  marginLeft: 0,
                                  width: 0
                                },
                                dateInput: {
                                 height: 32,
                                 width: 0,
                                 marginRight: 0,
                                 borderWidth: 0
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={{color:'#7b7b7b', margin:3}}>
                            CVC
                        </Text>
                    </View>
                    <View style={ styles.viewInputLast }>
                        {/* <Image source={require("../../../assets/Icons/creditcard.png")}
                        style={{ width:15, height:15, marginLeft:10, marginRight:10 }}
                        /> */}
                        <TextInput
                        style={styles.inputLast}
                        keyboardType="numeric"
                        placeholder="Input here..."
                        placeholderTextColor="#7b7b7b"
                        onChangeText={email => this.setState({ email })}
                        />
                    </View>
                </View>
            </View>

            <View style={{alignItems:"center", marginTop:40 }}>
                <Text style={{ color:"#BFC2C1" }}>By creating an account you agree to our{'\n'} 
                Terms of Service and Privacy Policy</Text>
            </View>

            <View style={{marginBottom:30, alignItems:"center", marginTop:20}}>
                <TouchableOpacity 
                style={{ height:40, width:"95%", backgroundColor:"#4591E4", borderRadius:5, alignItems:"center" }} >
                    <Text
                        style={{
                        fontWeight: "bold",
                        color: "#ffffff",
                        marginTop: 8,
                        fontSize: 16
                        }}
                    >
                    Sign up
                    </Text>
                </TouchableOpacity>
            </View>
            
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
      padding: 10,
  }
});

export default Catalog;
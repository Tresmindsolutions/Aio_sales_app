import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import GlobalHeader from '../components/GlobalHeader';

export default class Accounts extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                <GlobalHeader
      //     backgroundColor={"transparent"}
        //   leftArrow={true}
      //     leftSetting={true}
          OneHeadingEnable = {true}
          twoWords={1}
          HeadingText="Accounts"
      //     elevation={4}
          leftArrowSmall={true}
        //   rightSearchAdd={false}
        //   TwoHeadingEnable = {true}
        //   order="order"
      //     name="name"
      //     rightThreeIcons = {true}
      //     deleteRight={true}
      //     navigation={this.props.navigation}
        />
                <View style={styles.mainBox}>
                    <View style={styles.accountView}>
                        <Text style={styles.accountViewText}>
                            Create New Account
                        </Text>
                    </View>
                    <View style={styles.detailsForm}>
                        <View>
                            <Text style={{fontSize:15, marginVertical:10, marginLeft:5}}>Account Details</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:11, color:"#BBBBBB", marginBottom:5, marginLeft:5}}>Account Name</Text>
                                <TextInput 
                                    value="Abrix Woonaccessoires BV"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                            <View>
                            <Text style={styles.textInputHeadingStyle}>DBA</Text>
                                <TextInput 
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Contact Name</Text>
                                <TextInput 
                                    value="Aron Ebidal"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Address</Text>
                                <TextInput 
                                    value="Helper Brink 54/D"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Address</Text>
                                <TextInput 
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View style={{width:"48%"}}>
                            <Text style={styles.textInputHeadingStyle}>City</Text>
                                <TextInput 
                                    value="Groningen"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View style={{width:"48%"}}>
                            <Text style={styles.textInputHeadingStyle}>State</Text>
                                <TextInput 
                                    value="NL"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Zipcode</Text>
                                <TextInput 
                                    value="9722"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                                                <View>
                            <Text style={styles.textInputHeadingStyle}>Phone number</Text>
                                <TextInput 
                                    value="04006452582"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Mobile number</Text>
                                <TextInput 
                                    value="0420111658"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Fax number</Text>
                                <TextInput 
                                    value="0864520218729"
                                    placeholderTextColor="#000000"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Email Address</Text>
                                <TextInput 
                                    value="Email123@exapmle.com"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Tax ID</Text>
                                <TextInput 
                                    value="123456789"
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Website</Text>
                                <TextInput 
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View>
                            <Text style={styles.textInputHeadingStyle}>Terms</Text>
                                <TextInput 
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View style={styles.mapView}>
                            <Image 
                            source={require('../../assets/icons/mapsmall2.png')}
                            style={{width:"100%", height:150}}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.accountViewText}>
                        Create Account
                    </Text>
                </TouchableOpacity>
                    </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingBottom:10
    },
    mainBox:{
        width:"95%",
        alignSelf:"center",
        paddingBottom:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        padding:0,
        // paddingLeft:5,
        fontSize:10,
        backgroundColor:"#fff",
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 3,

    },
    accountView:{
        backgroundColor:"#148BFF",
        borderTopStartRadius:5,
        borderTopEndRadius:5,
        alignItems:"center",
        paddingVertical:5
        // borderTopEndRadius:5
    },
    accountViewText:{
        color:"#fff",
        fontSize:15
    },
    detailsForm:{
        width:"90%",
        alignSelf:"center",
        paddingBottom:10
    },
    textInputStyle:{
        padding:0,
        paddingLeft:5,
        fontSize:10,
        backgroundColor:"#fff",
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 3,
    },
    textInputHeadingStyle:{
        fontSize:11, 
        color:"#BBBBBB", 
        marginTop:10, 
        marginBottom:5, 
        marginLeft:5
    },
    mapView:{
        width:"100%", 
        marginTop:15, 
        marginBottom:5,
        borderBottomEndRadius:5,
        borderBottomStartRadius:5,
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        },
    createAccountButton:{
        backgroundColor:"#148BFF",
        borderRadius:5,
        alignItems:"center",
        paddingVertical:7,
        marginBottom:10,
        width:"95%",
        alignSelf:"center",
    }
})
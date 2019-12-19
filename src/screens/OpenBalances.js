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
import GlobalHeader from "../components/GlobalHeader"
import { Content } from "native-base";


class OpenBalances extends Component {
    constructor(props){
        super(props)
        this.state = {
            contentToMap: [
                {
                    Name:"Abix Woonaaccessories BV",
                    Address:"Helper Brink 54, 9722 EN Groningen NL",
                    Price:"876,576"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Address:"Berchvill 14, 1046 CA Tapie",
                    Price:"876,576"
                },
                {
                    Name:"Zain Hasan",
                    Address:"DHA, Badar Comm Area, street 5, 19E",
                    Price:"209,897"
                }
            ]
        }
    }

  render() {
    cardContent = this.state.contentToMap;
    return (
      <View style={styles.container}>
          <GlobalHeader
           backgroundColor={"transparent"}
       //    leftArrow={true}
      //     leftSetting={true}
          OneHeadingEnable = {true}
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
      //     navigation={this.props.navigation}
        />
        <Content style={styles.content}>
            {
            //    contentToMap ?
                this.state.contentToMap.map((item, index) => {
                   return (
                       
                           <View style={{ width:"100%" }}>
                               <View style={styles.CardView1}>
                                   <View style={{backgroundColor:"#F1F1F1", width:"15%", alignItems:"center",justifyContent:"center"}}>
                                       <Text style={{color:"#ffffff", fontSize:20}}>AB</Text>
                                   </View>
                                   <View style={{ width:"85%"}}>
                                   <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                                     <View style={{ margin:5 }}>
                                         <Text style={{fontFamily:"ProductSansBold", fontWeight:"bold" }}>{item.Name}</Text>
                                         <View style={{width:"96%"}}>
                                            <Text style={{ fontSize:10, color:"#878787" }}>{item.Address}</Text>
                                         </View>
                                     </View>
                                     <View style={{ margin:5, marginRight:5 }}>
                                         <Text style={{ fontSize:10, textAlign:"right" }}>Due</Text>
                                         <Text style={{ fontWeight:"bold", textAlign:"right", color:"red" }}>${item.Price}</Text>
                                     </View>
                                   </View>

                                   <View style={{ flexDirection:"row", justifyContent:"flex-end"}}>
                                      <View style={{ margin:5, flexDirection:"row" }}>
                                        <TouchableOpacity style={{justifyContent:"center"}}>
                                            <Image
                                                source={require("../../assets/icons/shareicon.png")}
                                                resizeMode={"contain"}
                                                style={{ width:20, height:23, marginRight:1, borderRadius:3, alignSelf:"center",marginBottom:8 }}
                                           />
                                        </TouchableOpacity>
                                      </View>
                                      <View style={{ margin:5, marginRight:2, marginBottom:10 }}>
                                          <TouchableOpacity 
                                            style={styles.buttonLeft} >
                                            <Text
                                                style={{ 
                                                color: "#ffffff",
                                                textAlign:"center",
                                                fontSize: 12
                                                }}
                                            >
                                            Receive
                                            </Text>
                                           </TouchableOpacity>
                                      </View> 
                                      <View style={{ margin:5, marginRight:8, marginBottom:10 }}>
                                          <TouchableOpacity 
                                            style={ styles.buttonRight } >
                                            <Text
                                                style={{ 
                                                color: "#148BFF",
                                                textAlign:"center",
                                                fontSize: 12
                                                }}
                                            >
                                            Call
                                            </Text>
                                           </TouchableOpacity>
                                      </View> 
                                    </View>
                                   </View>
                               </View>
                           </View>
                   )
               })
                // : ""
            }
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
  CardView1: {
    width:"97%",
    justifyContent:"center",
    alignItems:"stretch",
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:10,
    marginTop:3,
    marginBottom:3,
    backgroundColor:"#ffffff",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
    buttonLeft: {
        height:26, 
        width:80, 
        backgroundColor:"#4591E4", 
        borderRadius:15, 
        alignContent:"center", 
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    buttonRight: {
        height:26, 
        width:70, 
        backgroundColor:"#ffffff", 
        borderRadius:15, 
        alignContent:"center", 
        justifyContent:"center",
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

export default OpenBalances;
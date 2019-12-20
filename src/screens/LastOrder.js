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
// import DatePicker from 'react-native-datepicker'
import { Content } from "native-base";


class LastOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            contentToMap: [
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"876,576"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"987,567"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"676,557"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"159,776"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"157,00"
                },
                {
                    Name:"Zain Hasan",
                    Date:"17/9/19",
                    Price:"209,897"
                }
            ]
        }
    }

  render() {
    cardContent = this.state.contentToMap;
    return (
      <View style={styles.container}>
        <Content style={styles.content}>
            <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between" }}>
                <TouchableOpacity>
                    <Image
                     source={require("../../assets/icons/backgre.png")}
                     style={{ width:13, height:18, marginLeft:10 }}
                    />
                </TouchableOpacity>
                <View style={{  alignSelf:"center" }}>
                    <Text style={{ alignSelf:"center", fontSize:17,fontFamily:"ProductSansBold"}}>
                        Last Orders
                    </Text>
                </View>
                <View>
                    <Text>{" "}</Text>
                </View>
            </View>

            {
            //    contentToMap ?
                this.state.contentToMap.map((item, index) => {
                   return (
                       <View>
                           <View style={{ width:"100%" }}>
                               <View style={styles.CardView}>

                                   <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                                     <View style={{ margin:5 }}>
                                         <Text style={{fontFamily:"ProductSansBold" }}>{item.Name}</Text>
                                         <Text style={{ fontSize:12 }}>{item.Date}</Text>
                                     </View>
                                     <View style={{ margin:5, marginRight:15 }}>
                                         <Text style={{ fontSize:10 }}>Customer's Price</Text>
                                         <Text style={{ fontWeight:"bold", textAlign:"right" }}>${item.Price}</Text>
                                     </View>
                                   </View>

                                   <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                                      <View style={{ margin:5, flexDirection:"row" }}>
                                          <Image
                                            source={require("../../assets/Images/MaskGroup-1.png")}
                                            style={{ width:25, height:25, marginRight:5, borderRadius:3 }}
                                           />
                                           <Image
                                            source={require("../../assets/Images/MaskGroup-2.png")}
                                            style={{ width:25, height:25, marginRight:5, borderRadius:3 }}
                                           />
                                           <Image
                                            source={require("../../assets/Images/MaskGroup-3.png")}
                                            style={{ width:25, height:25, marginRight:5, borderRadius:3 }}
                                           />
                                           <Image
                                            source={require("../../assets/Images/MaskGroup9.png")}
                                            style={{ width:25, height:25, marginRight:5, borderRadius:3 }}
                                           />
                                      </View>
                                      <View style={{ margin:5, marginRight:15, marginBottom:10 }}>
                                          <TouchableOpacity 
                                            style={{ height:30, width:90, backgroundColor:"#4591E4", borderRadius:5, alignContent:"center", justifyContent:"center" }} >
                                            <Text
                                                style={{ 
                                                color: "#ffffff",
                                                textAlign:"center",
                                                fontSize: 15
                                                }}
                                            >
                                            View
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
  viewInput: {
    width:"95%",
    flexDirection:"row",
    borderRadius:7,
    backgroundColor:'#ffffff',
    alignContent:'center',
    alignItems:'center',
    alignSelf:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  CardView: {
      width:"95%",
      justifyContent:"center",
      alignItems:"stretch",
      alignSelf:"center",
      borderRadius:5,
      marginTop:15,
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
    }
});

export default LastOrder;
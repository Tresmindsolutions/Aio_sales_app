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
import {FontColor, theme} from '../components/constant/theme';
import GlobalHeader from '../components/GlobalHeader';


class Opensalesorder extends Component {
    constructor(props){
        super(props)
        this.state = {
            contentToMap: [
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"10.898"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"10.898"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"10.898"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"10.898"
                },
                {
                    Name:"Abix Woonaaccessories BV",
                    Date:"17/9/19",
                    Price:"10.898"
                },
                {
                    Name:"Zain Hasan",
                    Date:"17/9/19",
                    Price:"10.898"
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
          // leftArrow={true}
          //     leftSetting={true}
              OneHeadingEnable = {true}
              HeadingText="Open Sales Order"
          //     elevation={4}
          twoWords={3}
              leftArrowSmall={true}
          //     rightSearchAdd={false}
          //     TwoHeadingEnable = {true}
          //     order="order"
          //     name="name"
        //   plusIcons = {true}
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          navigation={this.props.navigation}
        />
        <Content style={styles.content}>
            {
            //    contentToMap ?
                this.state.contentToMap.map((item, index) => {
                   return (
                       <View>
                           <View style={{ width:"100%" }}>
                               <View style={styles.CardView}>

                                   <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                                     <View style={{ margin:5 }}>
                                         <Text style={{fontSize:15, color:FontColor.black}}>{item.Name}</Text>
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
                                            <View style={{ margin:5, marginLeft:10}}>
                                          <TouchableOpacity 
                                            style={{
                                                height:20, 
                                                paddingHorizontal:13, 
                                                backgroundColor:theme.white, 
                                                borderRadius:5, 
                                                alignContent:"center", 
                                                justifyContent:"center",
                                                shadowColor: "#00000029",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.20,
                                                shadowRadius: 1.41,
                                                elevation: 2,                                                
                                                }} >
                                            <Text
                                                style={{ 
                                                color: FontColor.black,
                                                textAlign:"center",
                                                fontSize: 15
                                                }}
                                            >
                                            View
                                            </Text>
                                           </TouchableOpacity>
                                      </View>
                                      </View> 
                                      <View style={{ margin:5, marginRight:10, marginTop:10 }}>
                                          <TouchableOpacity 
                                            style={{ height:20, paddingHorizontal:10, backgroundColor:"#4591E4", borderRadius:5, alignContent:"center", justifyContent:"center" }} >
                                            <Text
                                                style={{ 
                                                color: "#ffffff",
                                                textAlign:"center",
                                                fontSize: 15
                                                }}
                                            >
                                            Create InVoice
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
            <View style={{marginTop: 20}}></View>
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

export default Opensalesorder;
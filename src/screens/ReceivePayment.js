import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  Button
} from "react-native";
// import DatePicker from 'react-native-datepicker'
import GlobalHeader from "../components/GlobalHeader"
import { Content } from "native-base";


class ReceivePayment extends Component {
    constructor(props){
        super(props)
        this.state = {
            contentToMap: [
                {
                    Name:"665 Items Purchased",
                    Date:"17th September 2019",
                    Price:"51,576"
                },
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
           HeadingText="Receive Payment"
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
            {/*======== Header ended =========*/}
       
        {
        this.state.contentToMap.map((item, index) => {
            return (
                <ScrollView>
                <View>
                    <View style={{ width:"90%", justifyContent:"center", alignSelf:"center", marginTop:10 }}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                            <View style={{ margin:5 }}>
                                <Text style={{fontSize:16 }}>{item.Name}</Text>
                                <View style={{width:"96%"}}>
                                    <Text style={{ fontSize:11, color:"#878787" }}>{item.Date}</Text>
                                </View>
                            </View>
                            <View style={{ margin:5, marginRight:5 }}>
                                <Text style={{ fontSize:10, textAlign:"right" }}>Due</Text>
                                <Text style={{ fontWeight:"bold", textAlign:"right", color:"red", fontSize:15 }}>${item.Price}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{borderWidth:0.6, borderColor:"#707070", marginTop:6, width:"80%", alignSelf:"center"}}>
                        {/* Empty for line */}
                    </View>
                </View>
                </ScrollView>
            )
        })
    }
    
        <View style={{ width:"98%", alignSelf:"center",marginTop:5, alignItems:"center",position:"absolute", bottom:1 }}>
            <Text style={{fontSize:15, color:"#707070"}}>
                Receive Payment in
            </Text>
            <View style={{ margin:5, marginBottom:10, width:"94%" }}>
                <TouchableOpacity 
                 style={ styles.buttonRight } >
                    <Text
                     style={{ 
                     color: "#ffffff",
                     textAlign:"center",
                     fontSize: 15
                    }}
                    >
                     Check
                    </Text>
                </TouchableOpacity>
            </View> 
            <View style={{ margin:5, marginBottom:25, width:"94%" }}>
                <TouchableOpacity 
                 style={ styles.buttonRight } >
                    <Text
                     style={{ 
                     color: "#ffffff",
                     textAlign:"center",
                     fontSize: 15
                    }}
                    >
                     Cash
                    </Text>
                </TouchableOpacity>
            </View> 
        </View>
   
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  CardView1: {
    width:"97%",
    justifyContent:"center",
    alignItems:"stretch",
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:10,
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
  },
    buttonRight: {
        height:30, 
        width:"100%", 
        backgroundColor:"#148BFF", 
        borderRadius:4, 
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

export default ReceivePayment;
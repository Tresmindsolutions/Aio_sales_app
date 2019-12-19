import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {FontColor, theme} from '../components/constant/theme';
import GlobalHeader from '../components/GlobalHeader';


export default class Receivepayment4 extends Component{
    render(){
        return(
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
              TwoHeadingEnable = {true}
              order="Receive Payment"
              name="Abrix Woonaccessoires BV"
          //     rightThreeIcons = {true}
          //     deleteRight={true}
          //     navigation={this.props.navigation}
        />
                <View style={{width:"85%", alignSelf:"center"}}>
                    <View style={{marginBottom:10}}>
                        <Text style={style.amountReceivedText}>Enter Amount Received</Text>
                        <View style={style.textInputView}>
                            <TextInput 
                            placeholder="0"
                            placeholderTextColor={FontColor.black}
                            style={{padding:0, borderWidth:0}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:10}}>
                    <Text style={style.amountReceivedText}>Enter Amount Received</Text>
                    <View style={{flexDirection:"row", marginTop:5}}>
                        <View style={style.textInputView2}>
                            <TextInput 
                            placeholder="0"
                            placeholderTextColor={FontColor.black}
                            style={{padding:0, borderWidth:0}}
                        />
                        </View>
                        <View style={style.rightView}>
                            <Text style={style.dueText}>Due</Text>
                            <Text style={style.priceText}>$51,845</Text>
                        </View>
                    </View>
                    </View>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flex:1
    },
    amountReceivedText:{
        fontSize:11, 
        marginLeft:8, 
        color:FontColor.gray
    },
    textInputView:{
        marginTop:5,
        backgroundColor:theme.white,
        paddingLeft:10,
        borderRadius:2,
        shadowColor: "#00000029",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        },
        textInputView2:{
            flex:.80, 
            backgroundColor:theme.white,
            paddingLeft:10,
            borderRadius:2,
            shadowColor: "#00000029",
            shadowOffset: {
            width: 0,
            height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
        },
        rightView:{
            flex:.20, 
            justifyContent:"center", 
            alignItems:"flex-end"
        },
        dueText:{
            fontSize:8, 
            color:FontColor.gray
        },
        priceText:{
            fontSize:12, 
            color:FontColor.red
        }
})

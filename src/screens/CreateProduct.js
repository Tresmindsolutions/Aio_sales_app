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
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Content } from "native-base";
import { theme, FontColor } from "../components/constant/theme"
import GlobalHeader from "../components/GlobalHeader"
class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          {/* ========= Header ended ==============*/}

          <View>
            <View style={styles.CardView}>
                <View style={{ borderTopLeftRadius:5 }}>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      width: "100%",
                      backgroundColor: theme.blue,
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
                      Create New Product
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection:"row"}}>
                    <View style={{ width:"50%"}}>
                        <Text 
                          style={{ marginTop:13 , fontSize:16, color:FontColor.black, textAlign:"left", marginLeft:"15%" }}
                          >
                            Product Details
                        </Text>
                        <Text 
                          style={{ marginTop:50 , fontSize:13, color:"#BBBBBB", textAlign:"left", marginLeft:"15%" }}
                          >
                            Product Image
                        </Text>
                        <TouchableOpacity
                            style={{
                            height: 30,
                            width: "82%",
                            backgroundColor: "#ffffff",
                            margin:"10%",
                            marginBottom:"2%",
                            marginTop:"1%",
                            borderRadius:5,
                            alignContent: "center",
                            justifyContent: "center",
                            borderColor:"#BBBBBB",
                            borderWidth:0.7,
                            shadowColor:'0 0 2 #0000002B'
                            }}
                        >
                            <Text
                            style={{
                                color: "#148BFF",
                                textAlign: "center",
                                fontSize: 12
                            }}
                            >
                            Take a picture
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                            height: 30,
                            width: "82%",
                            backgroundColor: "#ffffff",
                            marginLeft:"10%",
                            marginRight:"10%",
                            borderRadius:5,
                            alignContent: "center",
                            justifyContent: "center",
                            borderColor:"#BBBBBB",
                            borderWidth:0.7,
                            shadowColor:'0 0 2 #0000002B',
                            borderColor:"#BBBBBB"
                            }}
                        >
                            <Text
                            style={{
                                color: "#148BFF",
                                textAlign: "center",
                                fontSize: 12
                            }}
                            >
                            Upload from gallery
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width:"50%"}}>
                        {/* <View> */}
                            <Image
                                source={require("../../assets/Images/Rectangle71.png")}
                                style={{ width:"96%", height:115, marginTop:20, alignSelf:"center" }}
                            />
                        {/* </View> */}
                        <View style={{ marginTop:5, flexDirection:"row", alignSelf:"center" }}>
                            <Image
                             source={require("../../assets/Images/Rectangle71.png")}
                             style={{ width:"20%", height:"100%", marginRight:"2%" }}
                            />
                            <Image
                             source={require("../../assets/Images/MaskGroup-1.png")}
                             style={{ width:"20%", height:"100%", marginRight:"2%" }}
                            />
                            <Image
                             source={require("../../assets/Images/MaskGroup-2.png")}
                             style={{ width:"20%", height:"auto", marginRight:"2%" }}
                            />
                            <Image
                             source={require("../../assets/Images/MaskGroup-3.png")}
                             style={{ width:"20%", height:29 }}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.textStyle}>
                        Item Number
                    </Text>
                    <TextInput
                     style={ styles.viewInput }
                     keyboardType="numeric"
                     placeholder="Input item number"
                     placeholderTextColor="#7b7b7b"
                    //  onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View>
                    <Text style={styles.textStyle}>
                        Description
                    </Text>
                    <TextInput
                     style={ styles.viewInput }
                     placeholder="Input description"
                     placeholderTextColor="#7b7b7b"
                    //  onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View>
                    <Text style={styles.textStyle}>
                        Case Count
                    </Text>
                    <TextInput
                     style={ styles.viewInput }
                     placeholder="Input case count"
                     placeholderTextColor="#7b7b7b"
                    //  onChangeText={email => this.setState({ email })}
                    />
                </View>
                {/*============= Input picker ================*/}
                <View>
                    <Text style={styles.textStyle}>
                        Category
                    </Text>
                        <View style={styles.pickerStyles}>
                            <RNPickerSelect
                                style={styles}
                                fontSize={12}
                                textStyle={12}
                                placeholder={{label: 'Select'}}
                               
                                onValueChange={value => console.log(value)}
                                items={[
                                {label: 'Pizzahut Promo', value: 'Pizzahut Promo'},
                                {label: 'Mirchihut Promo', value: 'Mirchihut Promo'},
                                {label: 'Easypaisa Burger deal', value: 'Easypaisa Burger deal'},
                                ]}
                                Icon={() => {
                                return (
                                    <AntDesign
                                    style={{zIndex: 1}}
                                    name="caretright"
                                    size={12}
                                    color="#BBBBBB"
                                    />
                                );
                                }}
                            />
                        </View>
                </View>

                <View>
                    <Text style={styles.textStyle}>       
                        Price
                    </Text>
                    <TextInput
                     style={ styles.viewInput }
                     keyboardType="numeric"
                     placeholder="Input price"
                     placeholderTextColor="#7b7b7b"
                    //  onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View>
                    <Text style={styles.textStyle}>                    
                        SRP
                    </Text>
                    <TextInput
                        style={ styles.viewInput }
                        placeholder="Input SRP"
                        placeholderTextColor="#7b7b7b"
                        //  onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={{alignContent:"space-between"}}>
                    <Text style={styles.textStyle}>                    
                        Unit UPC
                    </Text>
                    <View style={ styles.viewInputIcon }>
                        <TextInput
                            style={{ fontSize:12, width:"85%" }}
                            placeholder="Input unit UPC"
                            placeholderTextColor="#7b7b7b"
                            //  onChangeText={email => this.setState({ email })}
                        />
                        <Image
                            source={require("../../assets/icons/iconFullscreen.png")}
                            style={{ width:20, height:20, marginRight:10 }} 
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={{alignContent:"space-between"}}>
                    <Text style={styles.textStyle}>                    
                        Case UPC
                    </Text>
                    <View style={ styles.viewInputIcon }>
                        <TextInput
                            style={{ fontSize:12, width:"85%" }}
                            placeholder="Input case UPC"
                            placeholderTextColor="#7b7b7b"
                            //  onChangeText={email => this.setState({ email })}
                        />
                        <Image
                            source={require("../../assets/icons/iconFullscreen.png")}
                            style={{ width:20, height:20, marginRight:10 }} 
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={{marginBottom:15}}>
                    <Text style={styles.textStyle}>                    
                        Inventory
                    </Text>
                    <TextInput
                     style={ styles.viewInput }
                     placeholder="Input inventory"
                     placeholderTextColor="#7b7b7b"
                    //  onChangeText={email => this.setState({ email })}
                    />
                </View>
            </View>
            <View style={{ marginRight:10, marginLeft:10, marginBottom:20, marginTop:7 }}>
              <TouchableOpacity 
                style={styles.lastBottomButton} >
                <Text
                  style={{ 
                  color: "#ffffff",
                  textAlign:"center",
                  fontSize: 18
                  }}
                >
                 Create Product
                </Text>
              </TouchableOpacity>
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
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
      width: '96%',
      // marginTop:3, 
      color:"green",
      height:33,
      borderRadius:2,
      backgroundColor:"#ffffff",
      // justifyContent:"center",
      alignSelf:"center",
      alignItems:"center",
      

    //   fontFamily:"Product Sans",
  },
iconContainer:{
  top:13,
  right:13
},
  content: {
    paddingBottom: 10,
    // marginBottom: 10
  },
  pickerStyles: {
      width:"90%",
      borderRadius:2,
      justifyContent:"center",
      backgroundColor:"#ffffff",
      alignSelf:"center",
      height:36,
      fontSize:12,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
  },
  textStyle: {
    fontFamily:"Product Sans", 
    marginTop:10, 
    fontSize:13, 
    color:"#BBBBBB", 
    textAlign:"left", 
    marginLeft:"8%",
    marginBottom:3
  },
  viewInput: {
    height:36,
    width:"90%",
    fontSize:12,
    flexDirection:"row",
    paddingLeft:12,
    borderRadius:2,
    paddingVertical:0,
    marginBottom:7,
    backgroundColor:'#ffffff',
    justifyContent:"center",
    alignContent:'center',
    alignItems:'center',
    alignSelf:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  viewInputIcon :{
    height:36,
    width:"90%",
    // fontSize:10,
    flexDirection:"row",
    paddingLeft:12,
    borderRadius:2,
    paddingVertical:0,
    marginBottom:7,
    backgroundColor:'#ffffff',
    justifyContent:"space-between",
    alignContent:'center',
    alignItems:'center',
    alignSelf:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
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
  },
  lastBottomButton: {
    height:40,
    // borderWidth:1,
    backgroundColor:"#148BFF",
    justifyContent:"center",
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  }
});

export default CreateProduct;

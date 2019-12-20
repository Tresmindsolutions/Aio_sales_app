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
import RBSheet from "react-native-raw-bottom-sheet";
import { Content } from "native-base";



class BottomSlideView extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible:false,
       
        }
    }
    componentDidMount(){
        this.RBSheet.open()
    }
    close = () => {
        this.RBSheet.close();
        this.props.close();
    }
  render() {
    return (
      <View style={styles.container}>

        {/* ======== Bottom Sheet code =======  */}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={320}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
            <View style={{ width:"96%", height:"96%" }}>
                <View style={{ margin:10, alignItems:"flex-end", flexDirection:"row", borderBottomColor:"#BBBBBB",borderWidth:1,borderColor:"#ffffff" }}>
                    <View style={{width:"80%",paddingVertical:1,paddingLeft:"20%",paddingBottom:10 }}>
                        <Text style={{ alignSelf:"center",textAlign:"center", color:"#BBBBBB", fontSize:15 }}>
                            Category
                        </Text>
                    </View>
                    <TouchableOpacity style={{width:"20%",paddingBottom:10}}
                        onPress={() => {
                           this.close()
                        }}
                       >
                        <Image
                            source={require("../../../assets/icons/timesCross.png")}
                            style={{ width:20, height:20, marginRight:10,alignSelf:"flex-end" }} 
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ margin:8 }}>
                    <Text style={{ alignSelf:"center", color:"#000000", fontSize:15 }}>
                        Cosmetics
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:8 }}>
                    <Text style={{ alignSelf:"center", color:"#000000", fontSize:15 }}>
                        Electronics
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:8 }}>
                    <Text style={{ alignSelf:"center", color:"#000000", fontSize:15 }}>
                        Footwear
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:8 }}>
                    <Text style={{ alignSelf:"center", color:"#000000", fontSize:15 }}>
                        Video Game Console
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:8 }}>
                    <Text style={{ alignSelf:"center", color:"#000000", fontSize:15 }}>
                        Cosmetics
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:8 }}>
                    <Text style={{ alignSelf:"center", color:"#000000", fontSize:15 }}>
                        Electronics
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection:"row",marginLeft:12,marginBottom:15}}>
                    <View style={{width:"17%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{ alignSelf:"flex-start", color:"#000000", fontSize:15 }}>
                            Other
                        </Text>
                    </View>
                    <View style={{width:"83%"}}>
                        <TextInput
                            style={{borderBottomColor:"#BBBBBB",borderColor:"#ffffff",borderWidth:1,marginRight:17,height:36,color:"#BBBBBB",paddingVertical:0}}
                            placeholder="Specify"
                            placeholderTextColor="#BBBBBB"
                            //  onChangeText={email => this.setState({ email })}
                        />
                    </View>
                </View>
            </View>
        </RBSheet>
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
  }
});

export default BottomSlideView;
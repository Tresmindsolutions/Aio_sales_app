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


class BottomSlideViewShare extends Component {
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
          height={90}
          duration={250}
          animationType="fade"
          onClose={() => this.props.close()}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
            <View style={{ flexDirection:"row", width:"100%", justifyContent:"center" }}>
              <TouchableOpacity style={{ flex:3, alignItems:"flex-end" }}>
                <Image
                  source={require("../../../assets/icons/whatsapp3.png")}
                  resizeMode={"contain"}
                  style={{ width:35, height:35 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex:4, alignItems:"center" }}>
                <Image
                  source={require("../../../assets/icons/sms3.png")}
                  resizeMode={"contain"}
                  style={{ width:35, height:35 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex:3, alignItems:"flex-start" }}>
                <Image
                  source={require("../../../assets/icons/envelope3.png")}
                  resizeMode={"contain"}
                  style={{ width:35, height:35 }}
                />
              </TouchableOpacity>
            </View>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:90
  },
  content: {
      padding: 10
  }
});

export default BottomSlideViewShare;
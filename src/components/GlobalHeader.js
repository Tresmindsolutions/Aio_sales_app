import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, Platform } from "react-native";

import { Header, Left, Body, Right } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { FontColor, theme } from "./constant/theme";

export default class GlobalHeader extends Component {
  render() {
    return (
      //     <GlobalHeader
      //   backgroundColor={transparent}
      //     leftArrow={true}
      //     HeadingText="Summary"
      //     elevation={4}
      //     navigation={this.props.navigation}
      //   />
      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "transparent",
          elevation: this.props.elevation
        }}
      >
        <Left
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
            paddingLeft: 3
          }}
        >
          {this.props.leftArrow == true ? (
            <TouchableOpacity
              style={{}}
              onPress={() => this.props.navigation.goBack()}
            >
              <FontAwesome5
                name="chevron-left"
                style={{
                  color: theme.blue,
                  fontSize: 30,
                  marginLeft: 2,
                  marginTop: 10
                }}
              />
            </TouchableOpacity>
          ) : this.props.leftCross == true ? (
            <TouchableOpacity>
              <MaterialIcons
                name="clear"
                style={{ color: "#727272", fontSize: 26, paddingLeft: 3 }}
              />
            </TouchableOpacity>
          ) : this.props.leftMenu == true ? (
            <TouchableOpacity>
              <MaterialIcons
                name="menu"
                style={{ color: "#727272", fontSize: 28, paddingLeft: 3 }}
              />
            </TouchableOpacity>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? {
                  flex: 1,
                  justifyContent: "center",
                  // borderWidth: 1,
                  alignItems: "center"
                }
              : {
                  flex: 4,
                  borderWidth: 0,
                  justifyContent: "center",
                  alignItems: "center"
                }
          }
        >
          {this.props.HeadingText !== "" ? (
            <Text
              style={{
                color: FontColor.green,
                fontSize: 20,
                textAlignVertical: "center",
                textAlign: "center"
              }}
            >
              {" "}
              {this.props.HeadingText}{" "}
            </Text>
          ) : null}
        </Body>

        <Right
          style={{
            borderWidth: 0,
            height: "100%",
            alignItems: "center",
            paddingRight: 5
          }}
        >
          {this.props.rightMore == true ? (
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={26} color="grey" />
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  avatarImage: {
    width: 20,
    height: 15
  }
});

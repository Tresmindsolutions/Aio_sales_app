import React, {Component} from 'react';
import {View, Text} from 'react-native';
// var AlphabetListView = require('react-native-alphabetlistview');
import AlphabetListView from 'react-native-alphabetlistview';

class SectionHeader extends Component {
    render() {
      // inline styles used for brevity, use a stylesheet when possible
      var textStyle = {
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        fontSize:16
      };
   
      var viewStyle = {
        backgroundColor: '#ccc'
      };
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>{this.props.title}</Text>
        </View>
      );
    }
  }

  class SectionItem extends Component {
    render() {
      return (
              <View style={{borderWidth:1}}>
                  <Text style={{color:'black', fontSize:15}}>{this.props.title}</Text>
            </View>
      );
    }
  }
   
  class Cell extends Component {
    render() {
      return (
        <View style={{height:30}}>
          <Text>{this.props.item}</Text>
        </View>
      );
    }
  }


class MyComponent extends Component {
 
    constructor(props, context) {
      super(props, context);
   
      this.state = {
        data: {
          A: ['A1', 'A2', 'A3'],
          B: ['B1', 'B2', 'B3'],
          C: ['C1', 'C2', 'C3'],
          D: ['D1', 'D2', 'D3'],
          E: ['E1', 'E2', 'E3'],
          F: ['F1', 'F2', 'F3'],
          G: ['G1', 'G2', 'G3'],
          H: ['H1', 'H2', 'H3'],
          I: ['I1', 'I2', 'I3'],
          J: ['J1', 'J2', 'J3'],
          K: ['K1', 'K2', 'K3'],
          L: ['L1', 'L2', 'L3'],
          M: ['M1', 'M2', 'M3'],
          N: ['N1', 'N2', 'N3'],
          O: ['O1', 'O2', 'O3'],
          P: ['P1', 'P2', 'P3'],
          Q: ['Q1', 'Q2', 'Q3'],
          R: ['R1', 'R2', 'R3'],
          S: ['S1', 'S2', 'S3'],
          T: ['T1', 'T2', 'T3'],
          U: ['U1', 'U2', 'U3'],
          V: ['V1', 'V2', 'V3'],
          W: ['W1', 'W2', 'W3'],
          X: ['X1', 'X2', 'X3'],
          Y: ['Y1', 'Y2', 'Y3'],
          Z: ['Z1', 'Z2', 'Z3'],
        }
      };
    }
   
    render() {
      return (
        <AlphabetListView
        style={{borderWidth:3, margin:5, backgroundColor:"transparent"}}
          data={this.state.data}
          cell={Cell}
          cellHeight={30}
          sectionListItem={SectionItem}
        //   sectionHeader={SectionHeader}
        //   sectionHeaderHeight={22.5}
        />
      );
    }
  }

  export default MyComponent;
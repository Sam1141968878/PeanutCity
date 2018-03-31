/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 * Created
 *     by
 *     Administrator
 *     on
 *     2018/3/8.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';




export default class IrregularItem extends PureComponent{
  render() {
    const {
        ViewbackgroundColor,
        Viewwidth,
        marginTop,
        Text1color,
        Text1marginLeft,
        Text1marginTop,
        Text1,
        Text2color,
        Text2marginLeft,
        Text2,
        ImagemarginLeft,
        ImageWidth,
        ImageHeight,
        ImagemarginTop,
        Img,
        onPress,
    }=this.props;
    return (
      <TouchableOpacity
        style={{
            height:120,
            backgroundColor:ViewbackgroundColor,
            width:Viewwidth,
            marginTop:marginTop,
            borderRadius:10,
        }}
        onPress={onPress}
      >
          <Text style={{
            fontSize:16,
            color:Text1color,
            marginLeft:Text1marginLeft,
            marginTop:Text1marginTop,
          }}>
            {Text1}
          </Text>
          <Text style={{
            fontSize:12,
            color:Text2color,
            marginLeft:Text2marginLeft,
          }}>
            {Text2}
          </Text>
          <Image style={{
                    marginLeft:ImagemarginLeft,
                    width:ImageWidth,
                    height:ImageHeight,
                    marginTop:ImagemarginTop,
                }}
                source={Img}
          />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});

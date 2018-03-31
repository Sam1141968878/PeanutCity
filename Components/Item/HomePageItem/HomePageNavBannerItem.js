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
 *     2018/3/7.
 */

import React, { Component,PureComponent,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


let {width,height}=Dimensions.get('window');
let Smallwidth=width/5;
export default class NavBannerItem extends PureComponent{
  render() {
    const {Img,NavTitle,onPress,backgroundColor,goBack}=this.props;

    return (
      <TouchableOpacity
          style={styles.NavBnnerItem}
          onPress={onPress}
      >
          <Image source={Img} style={styles.Img}/>
          <Text style={styles.Text}>{NavTitle}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    NavBnnerItem:{
        width:Smallwidth,
        height:80,
        alignItems:'center',
        marginTop:10,
    },
    Img:{
        width:40,
        height:40,
        borderRadius:20,
    },
    Text:{
        fontSize:12,
        marginTop:15,
        color:'black',
        marginLeft:1,
    }
});

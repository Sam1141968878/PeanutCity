/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/16.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class HomePageSwiperItem extends PureComponent{
  render() {
    const {image,onPress}=this.props;
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
         <Image
             source={{uri: image}}
             style={styles.Images}
             resizeMethod={'resize'}
         />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    Images:{
        height:200,
        width:'100%'
    }
});

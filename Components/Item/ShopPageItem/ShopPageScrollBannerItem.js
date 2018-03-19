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
 *     2018/3/9.
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


export default class ScrollBannerItem extends PureComponent{
  render() {
    const {onPress,Img}=this.props;
    return (
      <TouchableOpacity
          style={styles.NavBnnerItem}
          onPress={onPress}
      >
          <Image source={Img} style={styles.Img}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    Img:{
        width:80,
        height:80,
        marginLeft:10,
    }
});

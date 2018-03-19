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
 *     2018/3/6.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
} from 'react-native';


export default class Banner extends PureComponent{
  render() {
    return (
      <View style={styles.View}>
          <Image
              source={require('../../../Icons/Yes.png')}
              style={styles.Image}
          />
          <Text style={styles.Text}>自用购物省钱</Text>
          <Image
              source={require('../../../Icons/Yes.png')}
              style={styles.Image}
          />
          <Text style={styles.Text}>自用购物省钱</Text>
          <Image
              source={require('../../../Icons/Yes.png')}
              style={styles.Image}
          />
          <Text style={styles.Text}>自用购物省钱</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flexDirection:'row',
        height:30,
        alignItems:'center',
        justifyContent:'space-around'
    },
    Image:{
        width:15,
        height:15,
        marginLeft:5,
    },
    Text:{
        color:'red',
        marginRight:10,
    }
});

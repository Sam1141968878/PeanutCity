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
  Image,
  TouchableOpacity,
} from 'react-native';


export default class ShopPageSmallItem extends PureComponent{
  render() {
    const {Img,Text1,Text2,onPress}=this.props;
    return (
      <TouchableOpacity
          style={styles.View}
          onPress={onPress}
      >
        <Image
            style={styles.Image}
            source={Img}
        />
          <Text style={styles.Text1}>$  {Text1}</Text>
          <Text style={styles.Text2}>$  {Text2}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        marginRight:10,
    },
    Image:{
        width:80,
        height:80,
    },
    Text1:{
        fontSize:12,
        color:'red',
        marginLeft:20,
        marginTop:15,
    },
    Text2:{
        fontSize:12,
        marginLeft:20,
        marginTop:5,
        textDecorationLine:'line-through',
    }
});

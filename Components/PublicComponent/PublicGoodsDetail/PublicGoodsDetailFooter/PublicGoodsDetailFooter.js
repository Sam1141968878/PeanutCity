/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/15.
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


import PublicWholeList from '../../PublicLikeList/PublicWholeList/PublicWholeList'
export default class PublicGoodsDetailFooter extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View>
        <View style={styles.LikeHead}>
          <View style={styles.line1}></View>
          <View style={styles.ImageView}>
              <Image
                  source={require('../../../../Icons/like.png')}
                  style={styles.Image}
              />
          </View>
          <Text style={styles.Text}>猜你喜欢</Text>
          <View style={styles.line2}></View>
        </View>
        <PublicWholeList navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
LikeHead:{
        marginBottom:10,
        height:40,
        backgroundColor:'#FFF',
        flexDirection:'row',
    },
    line1:{
        width:50,
        height:1,
        backgroundColor:'red',
        marginTop:20,
        marginLeft:80,
    },
    line2:{
        width:50,
        height:1,
        backgroundColor:'red',
        marginTop:20,
        marginLeft:240,
        position:'absolute'
    },
    Text:{
        position:'absolute',
        left:'47%',
        marginTop:10
    },
    ImageView:{
        backgroundColor:'red',
        width:22,
        height:22,
        borderRadius:11,
        marginTop:10,
        marginLeft:10
    },
    Image:{
        width:15,
        height:15,
        marginLeft:3,
        marginTop:4,
    }
});

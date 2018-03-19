/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/12.
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


export default class Opinion extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <TouchableOpacity style={styles.View}
          onPress={()=>navigate('LandingPage')}
      >
          <View
              style={styles.SmallView}>
              <Image
                  source={require('../../../Icons/opinion.png')}
                  style={styles.Img}
              />
          </View>
          <View style={styles.BigView}>
              <Text
                  style={styles.Text}>意见反馈</Text>
              <Image
                  source={require('../../../Icons/goUp.png')}
                  style={styles.goUp}
              />
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        width:'100%',
        height:40,
        backgroundColor:'#FFF'
    },
    SmallView:{
        width:'20%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
    },
    Img:{
        width:25,
        height:25,
    },
    BigView:{
        height:40,
        width:'77%',
        position:'absolute',
        left:'20%',
        borderBottomColor:'gainsboro',
        borderBottomWidth:1,
    },
    Text:{
        marginTop:8,
        fontSize:15,
        color:'#000'
    },
    goUp:{
        width:30,
        height:30,
        position:'absolute',
        right:0,
        top:5,
    }
});

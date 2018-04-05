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


export default class Problem extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View
          style={styles.View}>
          <TouchableOpacity
            onPress={()=>navigate(this.props.GoTo,{
                    title:'常见问题'
            })}
          >
              <Image
              source={require('../../../Icons/wenti.png')}
              style={styles.Img}
              />
          </TouchableOpacity>
          <Text style={styles.Text}>常见问题</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        alignItems:'center',
        paddingTop:5,
        backgroundColor:'#FFF'
    },
    Img:{
        width:40,
        height:40
    },
    Text:{
        fontSize:10,
        color:'black',
        marginTop:-5
    }
});

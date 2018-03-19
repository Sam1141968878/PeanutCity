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
  StatusBar,
} from 'react-native';


export default class GoBack extends PureComponent{
  render() {
    const {title,goBack}=this.props;
    return (
      <View style={styles.View}>
          <StatusBar
              backgroundColor='rgb(255,255,255)'/>
          <TouchableOpacity
              style={styles.ImgView}
              onPress={goBack}
          >
              <Image
                  source={require('../../Icons/goBack.png')}
                  style={styles.Img}
              />
          </TouchableOpacity>
          <View style={styles.TextView}>
              <Text
                  style={styles.Text}
                  numberOfLines={1}
              >
                {title}
              </Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:40,
        backgroundColor:'#FFF',
        marginTop:20,
    },
    ImgView:{
        width:30,
        height:30,
        position:'absolute',
        top:12,
        left:8,
        zIndex:1,
    },
    Img:{
        width:25,
        height:15,
    },
    TextView:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    Text:{
        fontSize:18,
    }

});

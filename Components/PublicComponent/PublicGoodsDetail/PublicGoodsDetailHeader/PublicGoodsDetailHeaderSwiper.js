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


import Swiper from 'react-native-swiper';
export default class PublicGoodsDetailHeaderSwiper extends PureComponent{
  render() {
    return (
        <View style={styles.View}>
          <Swiper
            style={styles.View}
            showsButtons={false}
            swipeEnabled={false}
            autoplay={true}
            autoplayTimeout={4}
            bounces={true}
            paginationStyle={{marginLeft:290}}
          >
            <TouchableOpacity style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.slide4}>
              <Text style={styles.text}>And4 simple</Text>
            </TouchableOpacity>
          </Swiper>
        </View>
    );
  }
}

const styles = StyleSheet.create({
     View:{
        height:370,
        width:'100%',
        position:'absolute',
        top:0,
        zIndex:-1
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
      },
      slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
      },
      slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      }
});

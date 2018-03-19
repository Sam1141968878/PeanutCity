/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/6.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';
import Swiper from 'react-native-swiper';


import ShopPageScrollBanner from './ShopPageScrollBanner'
export default class ShopSwiper extends PureComponent{
  render() {
    return (
      <View>
          <View style={styles.View}>
               <Swiper
                 style={styles.wrapper}
                 showsButtons={false}
                 swipeEnabled={false}
                 autoplay={true}
                 autoplayTimeout={4}
                 bounces={true}
                 showsPagination={false}
               >
                 <View style={styles.slide1}>
                   <Text style={styles.text}>Hello Swiper</Text>
                 </View>
                 <View style={styles.slide2}>
                   <Text style={styles.text}>Beautiful</Text>
                 </View>
               </Swiper>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:300,
      },
      wrapper: {
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
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      }
});

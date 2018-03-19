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
  ScrollView,
  Image,
} from 'react-native';

import ShopPageScrollBannerList from '../../List/ShopPageList/ShopPageScrollBannerList'
export default class ScrollBanner extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
        <View>
            <ShopPageScrollBannerList navigate={navigate}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        backgroundColor:'rgba(255,255,255,0.1)',
        height:100,
    },
    Img:{
        width:100,
        height:100,
        marginLeft:10,
        marginTop:300,
    },
});

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
 *     2018/3/12.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';


import MyPageAnnouncement from './MyPageAnnouncement'
import MyPageOpinion from './MyPageOpinion'
import MyPageAbout from './MyPageAbout'
export default class MyPageCol extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View
          style={styles.View}>
          <MyPageAnnouncement  navigate={navigate}/>
          <MyPageOpinion  navigate={navigate}/>
          <MyPageAbout  navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        marginTop:5,
    }
});

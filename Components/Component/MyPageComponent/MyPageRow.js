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



import MyPageNoviceStrategy from './MyPageNoviceStrategy';
import MyPageCollection from './MyPageCollection';
import MyPageProblem from './MyPageProblem';
import MyPageService from './MyPageService';
export default class MyPageRow extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          <MyPageNoviceStrategy  navigate={navigate}/>
          <MyPageCollection  navigate={navigate}/>
          <MyPageProblem  navigate={navigate}/>
          <MyPageService  navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flexDirection:'row',
        justifyContent:'space-around',
    }
});

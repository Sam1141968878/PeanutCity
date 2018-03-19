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
  Image,
} from 'react-native';


import CirclePageList from '../../../Components/List/CirclePageList/CirclePageList'
export default class CirclePage extends PureComponent{
    static navigationOptions = {
    tabBarLabel: '花生圈',
    tabBarIcon: () => (
       <View>
            <Image
               source={require('../../../Icons/Circle.png')}
               style={styles.icon}
            />
       </View>
      ),
    };
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View>
          <CirclePageList navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon:{
        width:20,
        height:20,
    }
});

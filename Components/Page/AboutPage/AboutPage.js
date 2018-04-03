/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/4/3.
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


export default class AboutPage extends PureComponent{
  render() {
    return (
      <View>
        <Text>我是关于页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

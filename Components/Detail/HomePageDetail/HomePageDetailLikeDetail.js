/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/8.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class LikeDetail extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation
    return (
      <View>
          <PublicGoBack goBack={()=>goBack()} title={state.params.Title}/>
          <Text>我是猜你喜欢的详情页</Text>
          <Text>{state.params.Title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

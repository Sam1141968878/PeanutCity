/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/10.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';


import PublicGoBack from '../../../Components/PublicComponent/PublicGoBack'
export default class PeanutPageDetail extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation
    return (
      <View>
          <PublicGoBack goBack={()=>goBack()} title={state.params.Title}/>
          <Text>我是花生圈子页的详情</Text>
          <Text>{state.params.Title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

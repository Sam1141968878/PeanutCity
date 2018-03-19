/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/9.
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
export default class ShopPageDetail extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation
    return (
      <View>
          <PublicGoBack goBack={()=>goBack()} title={state.params.Title||state.params.Text1}/>
          <Text>我是超级闪购的详情页</Text>
          <Text>{state.params.Title}</Text>
          <Text>{state.params.Text1}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

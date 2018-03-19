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
 *     2018/3/9.
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
export default class ShopScrollBannerDetail extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation;
    return (
      <View>
          <PublicGoBack goBack={()=>goBack()} title={state.params.id}/>
          <Text>我是商品滚动横幅的详情页</Text>
          <Text>{state.params.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

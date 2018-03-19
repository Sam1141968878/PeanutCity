/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/16.
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


import PublicGoBack from '../PublicGoBack'
import PublicGoodsTab from './PublicGoodsTab'
export default class PublicGoodssTabDetail extends PureComponent{
  render() {
    return (
      <View>
            <PublicGoBack
                goBack={()=>goBack()}
                title={state.params.Title}
            />
            <PublicGoodsTab/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

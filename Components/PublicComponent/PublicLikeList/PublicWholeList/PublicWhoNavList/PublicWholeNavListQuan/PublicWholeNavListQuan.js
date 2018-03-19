/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/17.
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
  ActivityIndicator,
} from 'react-native';


import PublicWholeNavListQuanHigh from './PublicWholeNavListQuanHigh'
import PublicWholeNavListQuanLow from './PublicWholeNavListQuanLow'
import {observer} from "mobx-react";
import NewNavTabPickerStore from '../../../../../../Store/NavTabPickerStore'


@observer
export default class PublicWholeNavListQuan extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View>
          {
              NewNavTabPickerStore.Picker==='优惠券面值由高到低'&&NewNavTabPickerStore.Quan==true
              ?
                <PublicWholeNavListQuanHigh navigate={navigate} OrderBy={'Quan_price'} HighLow={1}/>
              :
                <PublicWholeNavListQuanLow navigate={navigate} OrderBy={'Quan_price'} HighLow={2}/>
          }
          {
              NewNavTabPickerStore.Picker==='综合排序'&&NewNavTabPickerStore.Default==true
              ?
                <PublicWholeNavListQuanHigh navigate={navigate}  OrderBy={1} HighLow={1}/>
              :
                <ActivityIndicator/>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

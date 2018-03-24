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
 *     2018/3/17.
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
  ActivityIndicator
} from 'react-native';

import {observer} from "mobx-react";
import NavTabPickerStore from '../../../../../../Store/NavTabPickerStore'
import PublicWholeNavListSalesHigh from './PublicWholeNavListSalesHigh'
import PublicWholeNavListSalesLow from './PublicWholeNavListSalesLow'

@observer
export default class PublicWholeNavListSales extends PureComponent{
  render() {
    return (
      <View
          style={styles.View}>
              {
                  NavTabPickerStore.SalesHigh
                  ?
                  <PublicWholeNavListSalesHigh OrderBy={'Sales_num'} HighLow={'DESC'}/>
                  :
                  <PublicWholeNavListSalesLow  OrderBy={'Sales_num'} HighLow={'ASC'}/>
              }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1
    },
    TextView:{
        backgroundColor:'#000',
        height:200,
        width:'100%'
    },
    Text:{
        color:'#FFF'
    }

});

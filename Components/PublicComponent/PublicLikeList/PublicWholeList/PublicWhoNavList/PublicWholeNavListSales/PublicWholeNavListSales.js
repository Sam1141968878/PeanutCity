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
    const {navigate,title}=this.props;
    return (
      <View
          style={styles.View}>
              {
                  NavTabPickerStore.SalesDESC
                  ?
                  <PublicWholeNavListSalesLow  title={title} navigate={navigate} OrderBy={'NumSale'} HighLow={'ASC'}/>
                  :
                  <PublicWholeNavListSalesHigh title={title} navigate={navigate} OrderBy={'NumSale'} HighLow={'DESC'}/>
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

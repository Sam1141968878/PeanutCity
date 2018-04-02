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
import PublicWholeNavListPriceHigh from './PublicWholeNavListPriceHigh'
import PublicWholeNavListPriceLow from './PublicWholeNavListPriceLow'

@observer
export default class PublicWholeNavListPrice extends PureComponent{
  render() {
    const {navigate,title}=this.props;
    return (
      <View
          style={styles.View}>
              {
                  NavTabPickerStore.PriceDESC
                  ?
                  <PublicWholeNavListPriceHigh title={title} navigate={navigate} OrderBy={'PriceAfterZK'} HighLow={'ASC'}/>
                  :
                  <PublicWholeNavListPriceLow title={title} navigate={navigate} OrderBy={'PriceAfterZK'} HighLow={'DESC'}/>
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

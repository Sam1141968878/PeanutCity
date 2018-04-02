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
import PublicWholeNavListQuanDefault from './PublicWholeNavListQuanDefault'
import {observer} from "mobx-react";
import NewNavTabPickerStore from '../../../../../../Store/NavTabPickerStore'


@observer
export default class PublicWholeNavListQuan extends PureComponent{
  render() {
    const {navigate,title}=this.props;

    if(NewNavTabPickerStore.Picker==0){
        return <PublicWholeNavListQuanDefault  OrderBy={'PriceZK'} navigate={navigate}/>;
    }else if(NewNavTabPickerStore.Picker==1){
        return <PublicWholeNavListQuanHigh title={title} OrderBy={'PriceZK'} navigate={navigate} HighLow={'DESC'}/>;
    }else if(NewNavTabPickerStore.Picker==2){
        return <PublicWholeNavListQuanLow title={title} OrderBy={'PriceZK'} navigate={navigate} HighLow={'ASC'}/>;
    }else{
        return <ActivityIndicator/>
    }
  }
}

const styles = StyleSheet.create({

});

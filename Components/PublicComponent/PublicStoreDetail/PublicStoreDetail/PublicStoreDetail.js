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
 *     2018/3/16.
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
  ScrollView,
  Picker
} from 'react-native';

import {
    Container,
    Header,
    Tab,
    Tabs,
    TabHeading,
    Icon,
    Content
} from 'native-base';


import PublicStoreDetailHeader from '../PublicStoreDetailHeader/PublicStoreDetailHeader'
import PublicStoreDetailContent from '../PublicStoreDetailContent/PublicStoreDetailContent'
import PublicHalfList from '../../PublicLikeList/PublicHalfList/PublicHalfList'
export default class PublicStoreDetail extends PureComponent{
  state={
    language:''
  }
  render() {
    const {state,goBack,navigate}=this.props.navigation
    return (
        <ScrollView>
            <PublicStoreDetailHeader state={state} goBack={goBack}/>
            <PublicStoreDetailContent navigate={navigate}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
    },
    TabsView:{
        flex:1,
    },
    PickerView:{
        width:'100%',
        zIndex:-1,
    },
    TabHeadingView:{
        backgroundColor:'#FFF'
    }
});

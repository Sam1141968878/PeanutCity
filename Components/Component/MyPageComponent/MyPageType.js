/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/4/10.
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

import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'

export default class MyPageType extends PureComponent{
  render() {
    if(NewNavTabPickerStore.Type==='user'){
        return <Text style={{color:'red',fontSize:10}}>注册会员</Text>
    }else if(NewNavTabPickerStore.Type==='super'){
        return <Text style={{color:'red',fontSize:10}}>超级会员</Text>
    }else{
        return <Text style={{color:'red',fontSize:10}}>运营商</Text>
    }
  }
}

const styles = StyleSheet.create({

});

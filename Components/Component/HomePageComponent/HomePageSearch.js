/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/6.
 */

import React, { Component,PureComponent } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';

import SearchInput from 'teaset/components/SearchInput/SearchInput';
export default class Search extends PureComponent{
  state={
    value:'',
  }
  render() {
    return (
      <View>
        <SearchInput
            placeholder="粘贴宝贝标题,先领券,再购物"
            style={styles.Input}
            value={this.state.value}
            onChangeText={text => this.setState({value: text})}
            onFocus={()=>alert('得到焦点')}
            onBlur={()=>alert('失去焦点')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Input:{
        width:300,
        marginLeft:20,
        marginTop:30,
        borderRadius:20,
    }
});

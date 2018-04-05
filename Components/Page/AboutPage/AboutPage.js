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
 *     2018/4/3.
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

import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class AboutPage extends PureComponent{
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <View>
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image
                source={require('../../../Icons/logo.png')}
                style={{
                    width:150,
                    height:150,
                    marginTop:20,
                }}
            />
          </View>
          <View style={{
                    width:'100%',
                    height:40,
                    flexDirection:'row',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                    borderBottomColor:'gray',
                    backgroundColor:'#FFF',
                    alignItems:'center',
                    justifyContent:'space-around',
                    marginTop:20,
          }}>
              <Text style={{color:'#000'}}>当前版本</Text>
              <Text style={{color:'red',fontSize:20}}>v1.0.0</Text>
          </View>
          <View style={{
                width:'100%',
                height:40,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around',
                backgroundColor:'#FFF',
          }}>
              <Text style={{color:'#000'}}>新版更新</Text>
              <Text style={{color:'gray'}}>暂无更新</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

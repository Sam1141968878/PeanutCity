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
export default class ServicePage extends PureComponent{
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'#FFF'}}>
          <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
          />
          <View style={{
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            height:200,
          }}>
            <Image
                source={require('../../../Icons/logo.png')}
                style={{width:150,height:150,marginTop:30}}
            />
            <Text style={{marginTop:10}}>爆了么微信公众号</Text>
          </View>
          <TouchableOpacity style={{
            marginLeft:'10%',
            marginRight:'10%',
            height:33,
            marginTop:30,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'red',
            borderRadius:20,
          }}>
              <Text style={{color:'#FFF'}}>保存二维码到手机</Text>
          </TouchableOpacity>
          <View style={{
                marginLeft:'10%',
                marginRight:'25%',
                height:33,
                marginTop:30,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'orange',
                borderTopLeftRadius:20,
                borderBottomLeftRadius:20,
              }}>
              <Text style={{color:'#FFF'}}>专属客服微信:xxxxxxxxxx2018</Text>
          </View>
          <TouchableOpacity
              style={{
                width:'15%',
                height:33,
                borderTopRightRadius:20,
                borderBottomRightRadius:20,
                position:'absolute',
                right:'10%',
                top:353,
                borderWidth:1,
                borderColor:'orange',
                justifyContent:'center',
                alignItems:'center'
              }}>
              <Text
                  style={{color:'orange'}}>复制</Text>
          </TouchableOpacity>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
              <Text style={{color:'#000',fontSize:12}}>服务时间:周一至周六 9:00~18:00</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

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
  AsyncStorage
} from 'react-native';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'
import fetchJson from '../../Fetch/FetchJson'

Api='http://111.230.254.117:8000/logout'
import PublicGoBack from '../../PublicComponent/PublicGoBack'


@observer
export default class SettingPage extends PureComponent{
    fetchData = async (api) => {
        const json=await fetchJson(api);
    }
    componentDidMount() {
        this.fetchData(Api);
    }
  render() {
    return (
      <View style={{flex:1}}>
          <PublicGoBack
            goBack={()=>goBack()}
            title={'设置'}
          />
          <View
              style={{
              width:'100%',
              height:120,
              alignItems:'center',
              backgroundColor:'#FFF',
              padding:10
              }}>
                <Image
                    source={require('../../../Icons/logo.png')}
                    style={{width:100,height:100}}
                />
          </View>
          <View
              style={{
                alignItems:'center',
                backgroundColor:'#FFF',
                justifyContent:'center',
                height:30,
              }}>
              <Text>点击头像修改头像</Text>
          </View>
          <TouchableOpacity
              style={{
                flexDirection:'row',
                height:40,
                justifyContent:'space-around',
                backgroundColor:'#FFF',
                alignItems:'center',
                borderTopColor:'whitesmoke',
                borderTopWidth:1,
              }}
          >
            <Text>昵称</Text>
            <Text>xxx</Text>
            <Text>修改</Text>
            <Image
                source={require('../../../Icons/goUp.png')}
                style={{width:14,height:14}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
                height:40,
                justifyContent:'space-around',
                alignItems:'center',
                flexDirection:'row',
                backgroundColor:'#FFF',
                borderTopColor:'whitesmoke',
                borderTopWidth:1,
            }}
          >
            <Text>微信绑定</Text>
            <Text>修改</Text>
            <Image
                source={require('../../../Icons/goUp.png')}
                style={{width:14,height:14}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
                height:40,
                justifyContent:'space-around',
                alignItems:'center',
                flexDirection:'row',
                backgroundColor:'#FFF',
                borderTopColor:'whitesmoke',
                borderTopWidth:1,
            }}
          >
            <Text>修改密码</Text>
            <Text>修改</Text>
            <Image
                source={require('../../../Icons/goUp.png')}
                style={{width:14,height:14}}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={{
              width:'100%',
              height:40,
              backgroundColor:'#FFF',
              alignItems:'center',
              justifyContent:'center',
              marginTop:5,
          }}
              onPress={()=>{
                  AsyncStorage.removeItem('Landing');
                  NewNavTabPickerStore.Landing=false;
                  this.props.navigation.navigate('MyPage')
              }}
          >
            <Text
                style={{color:'#000'}}>退出登陆</Text>
          </TouchableOpacity>




      </View>
    );
  }
}

const styles = StyleSheet.create({

});

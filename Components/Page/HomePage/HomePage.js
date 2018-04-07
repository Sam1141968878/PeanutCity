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
 *     2018/3/6.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
  ScrollView,
  StatusBar,
  RefreshControl,
  AsyncStorage
} from 'react-native';

import *as WeChat from 'react-native-wechat'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'


import HomePageSearch from '../../../Components/Component/HomePageComponent/HomePageSearch'
import PublicMessage from '../../../Components/PublicComponent/PublicMessage'
import HomePageSwiper from '../../../Components/Component/HomePageComponent/HomePageSwiper'
import HomePageBanner from '../../../Components/Component/HomePageComponent/HomePageBanner'
import HomePageNavBannerList from '../../../Components/List/HomePageList/HomePageNavBannerList'
import HomePageIrregularList from '../../../Components/List/HomePageList/HomePageIrregularList'
import PublicHalfList from '../../PublicComponent/PublicLikeList/PublicHalfList/PublicHalfList'

export default class HomePage extends PureComponent{
    static navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: () => (
       <View>
            <Image
               source={require('../../../Icons/index-sdip.png')}
               style={styles.icon}
            />
       </View>
      ),
    };
    refreshing=false
    _onRefresh(){
        refreshing=true

        setTimeout(()=>{
            refreshing=false
        },3000)
    }
  componentDidMount (){
    WeChat.registerApp('wx21b8979660c07d7e');
    AsyncStorage.getItem('Landing')
            .then((value) => {
                let jsonValue = JSON.parse((value));
                NewNavTabPickerStore.Landing=jsonValue
            })
        AsyncStorage.getItem('PassWord')
            .then((value) => {
                let jsonValue = JSON.parse((value));
                NewNavTabPickerStore.PassWord=jsonValue
            })
        AsyncStorage.getItem('Phone')
            .then((value) => {
                let jsonValue = JSON.parse((value));
                NewNavTabPickerStore.Phone=jsonValue
            })
        AsyncStorage.getItem('Name')
            .then((value) => {
                let jsonValue = JSON.parse((value));
                NewNavTabPickerStore.Name=jsonValue
            })
        AsyncStorage.getItem('Code')
            .then((value) => {
                let jsonValue = JSON.parse((value));
                this.setState({
                    Code:jsonValue
                })
                NewNavTabPickerStore.Code=jsonValue
            })
  }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <ScrollView
          style={styles.view}
          keyboardDismissMode='on-drag'
          showsVerticalScrollIndicator={false}
          refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            enabled={true}
            onRefresh={this._onRefresh.bind(this)}
          />}
      >
          <StatusBar
            translucent={true}
            backgroundColor='rgba(255,255,255,0)'
          />
          <HomePageSearch  navigate={navigate}/>
          {
            NewNavTabPickerStore.Landing
            ?
            <PublicMessage
                top={35}
                right={10}
                backgroundColor={'red'}
                navigate={navigate}
                GoTo={'MessagePage'}
            />
            :
            <PublicMessage
                top={35}
                right={10}
                backgroundColor={'red'}
                navigate={navigate}
                GoTo={'LandingPage'}
            />
          }

          <HomePageSwiper  navigate={navigate}/>
          <HomePageBanner/>
          <HomePageNavBannerList navigate={navigate}/>
          <HomePageIrregularList navigate={navigate}/>
          <View style={styles.LikeHead}>
              <View style={styles.line1}></View>
              <View style={styles.ImageView}>
                  <Image
                      source={require('../../../Icons/like.png')}
                      style={styles.Image}
                  />
              </View>
              <Text style={styles.Text}>猜你喜欢</Text>
              <View style={styles.line2}></View>
          </View>
          <PublicHalfList navigate={navigate}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#FFF'
    },
    icon:{
        width:20,
        height:20,
    },
    LikeHead:{
        height:40,
        backgroundColor:'#FFF',
        flexDirection:'row',
        marginTop:20,
    },
    line1:{
        width:50,
        height:1,
        backgroundColor:'red',
        marginTop:20,
        marginLeft:80,
    },
    line2:{
        width:50,
        height:1,
        backgroundColor:'red',
        marginTop:20,
        marginLeft:240,
        position:'absolute'
    },
    ImageView:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'red',
        marginTop:10,
        marginLeft:10,
    },
    Image:{
        width:15,
        height:15,
        marginLeft:2,
        marginTop:3,
    },
    Text:{
        marginTop:10,
        marginLeft:10,
    }
});

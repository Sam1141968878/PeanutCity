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
} from 'react-native';


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
               source={require('../../../Icons/Home.png')}
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

  render() {
    const {navigate}=this.props.navigation;
    return (
      <ScrollView
          keyboardDismissMode='on-drag'
          showsVerticalScrollIndicator={false}
          refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            enabled={true}
            onRefresh={this._onRefresh.bind(this)}
          />}
      >
          <StatusBar translucent={true}
                     backgroundColor='rgba(255,255,255,0)'/>
          <HomePageSearch/>
          <PublicMessage top={30} right={10} backgroundColor={'red'} navigate={navigate}/>
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

/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { TabNavigator,StackNavigator } from 'react-navigation';
import HomePage from './Components/Page/HomePage/HomePage'
import CirclePage from './Components/Page/CirclePage/CirclePage'
import MembersPage from './Components/Page/MemberPage/MembersPage'
import MyPage from './Components/Page/MyPage/MyPage'
import ShopPage from './Components/Page/ShopPage/ShopPage'
import LandingPage from './Components/Page/LandingPage/LandingPage'
import RegisteredPage from './Components/Page/LandingPage/RegisteredPage'
import StartPage from './Components/Page/StartPage/StartPage'
import MessagePage from './Components/Page/MessagePage/MessagePage'
import WxRegisteredPage from './Components/Page/LandingPage/WxRegisteredPage'
import NovicePage from './Components/Page/NovicePage/NovicePage'
import ProblemPageList from './Components/Page/ProblemPage/ProblemPageList'
import ProblemPage from './Components/Page/ProblemPage/ProblemPage'
import AnnouncementPageList from './Components/Page/AnnouncementPage/AnnouncementPageList'
import AnnouncementPage from './Components/Page/AnnouncementPage/AnnouncementPage'
import SearchPage from './Components/Page/SearchPage/SearchPage'
import SearchDetailPage from './Components/Detail/SearchDetailPage/SearchDetailPage'
import CommissionPage from './Components/Page/CommissionPage/CommissionPage'
import SettingPage from './Components/Page/SettingPage/SettingPage'
import CollectionPage from './Components/Page/CollectionPage/CollectionPage'
import ServicePage from './Components/Page/ServicePage/ServicePage'
import AboutPage from './Components/Page/AboutPage/AboutPage'
import OpinionPage from './Components/Page/OpinionPage/OpinionPage'
import RobStampsPage from './Components/Page/RobStampsPage/RobStampsPage'


import HomePageDetailNavBannerDetailPage from './Components/Detail/HomePageDetail/HomePageDetailNavBannerDetailPage'
import HomePageDetailLikeDetail from './Components/Detail/HomePageDetail/HomePageDetailLikeDetail'
import ShopPageDetail from './Components/Detail/ShopPageDetail/ShopPageDetail'
import ShopPageDetailScrollBannerDetail from './Components/Detail/ShopPageDetail/ShopPageDetailScrollBannerDetail'
import CirclePageDetail from './Components/Detail/CirclePageDetail/CirclePageDetail'
import PublicGoodsDetail from './Components/PublicComponent/PublicGoodsDetail/PublicGoodsDetail/PublicGoodsDetail'
import PublicGoodsTabDetail from './Components/PublicComponent/PublicGoodsTab/PublicGoodsTabDetail'
import PublicStoreDetail from './Components/PublicComponent/PublicStoreDetail/PublicStoreDetail/PublicStoreDetail'

const MyTab =TabNavigator({
    HomePage:{screen:HomePage},
    // ShopPage:{screen:ShopPage},
    MembersPage:{screen:MembersPage},
    // CirclePage:{screen:CirclePage},
    MyPage:{screen:MyPage},

},{
    lazy:true,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled: false,
    removeClippedSubviews:false,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
    tabBarOptions:{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        showIcon: true,
        removeClippedSubviews:false,
        pressColor : 'gainsboro',
        initialLayout:{
            height:60,
            width: Dimensions.get('window').width,
        },
        indicatorStyle: {
            height: 0
        },
        tabStyle:{
              marginTop:0,
              height: 60,
        },
        style: {
              backgroundColor: '#FFF',
              padding: 0 ,
              marginBottom:-10,
        },
        labelStyle: {
              fontSize: 10,
              paddingTop:0,
              marginTop:0,
        },
    }
})

const App=StackNavigator({
    // StartPage:{screen:StartPage},
    MyTab:{screen:MyTab},
	HomePageDetailNavBannerDetailPage:{screen:HomePageDetailNavBannerDetailPage},
	HomePageDetailLikeDetail:{screen:HomePageDetailLikeDetail},
	ShopPageDetail:{screen:ShopPageDetail},
	ShopPageDetailScrollBannerDetail:{screen:ShopPageDetailScrollBannerDetail},
	CirclePageDetail:{screen:CirclePageDetail},
	LandingPage:{screen:LandingPage},
	PublicGoodsDetail:{screen:PublicGoodsDetail},
	PublicGoodsTabDetail:{screen:PublicGoodsTabDetail},
	PublicStoreDetail:{screen:PublicStoreDetail},
	RegisteredPage:{screen:RegisteredPage},
	MessagePage:{screen:MessagePage},
	WxRegisteredPage:{screen:WxRegisteredPage},
	NovicePage:{screen:NovicePage},
	ProblemPageList:{screen:ProblemPageList},
	ProblemPage:{screen:ProblemPage},
	AnnouncementPageList:{screen:AnnouncementPageList},
	AnnouncementPage:{screen:AnnouncementPage},
	SearchPage:{screen:SearchPage},
	SearchDetailPage:{screen:SearchDetailPage},
	CommissionPage:{screen:CommissionPage},
	SettingPage:{screen:SettingPage},
	CollectionPage:{screen:CollectionPage},
	ServicePage:{screen:ServicePage},
	AboutPage:{screen:AboutPage},
	OpinionPage:{screen:OpinionPage},
	RobStampsPage:{screen:RobStampsPage},
},{
    headerMode:'none'
})



export default App;




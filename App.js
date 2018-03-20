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
    ShopPage:{screen:ShopPage},
    MembersPage:{screen:MembersPage},
    CirclePage:{screen:CirclePage},
    MyPage:{screen:MyPage},

},{
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled: false,
    tabBarOptions:{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        showIcon: true,
        removeClippedSubviews:false,
        pressColor : 'gainsboro',
        initialLayout:{
            height:70,
        },
        indicatorStyle: {
              height: 0
        },
        tabStyle:{
              marginTop:0,
              height: 70,
        },
        style: {
              backgroundColor: '#FFF',
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
},{
    headerMode:'none'
})



export default App;




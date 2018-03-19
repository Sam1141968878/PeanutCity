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
} from 'react-native';


import MyPageLandingHead from '../../../Components/Component/MyPageComponent/MyPageLandingHead'
import PublicMessage from '../../../Components/PublicComponent/PublicMessage'
import MyPageSetUp from '../../../Components/Component/MyPageComponent/MyPageSetUp'
import MyPageRow from '../../../Components/Component/MyPageComponent/MyPageRow'
import MyPageCol from '../../../Components/Component/MyPageComponent/MyPageCol'
export default class MyPage extends PureComponent{
    static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: () => (
       <View>
            <Image
               source={require('../../../Icons/My.png')}
               style={styles.icon}
            />
       </View>
      ),
    };
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View>
          <MyPageLandingHead   navigate={navigate}/>
          <PublicMessage top={30} right={60} backgroundColor={'blue'}  navigate={navigate}/>
          <MyPageSetUp top={30} right={15}   navigate={navigate}/>
          <MyPageRow   navigate={navigate}/>
          <MyPageCol   navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon:{
        width:20,
        height:20,
    },
});

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
} from 'react-native';
import ShopPageSwiper from '../../../Components/Component/ShopPageComponent/ShopPageSwiper'
import ShopPageScrollBanner from '../../../Components/Component/ShopPageComponent/ShopPageScrollBanner'
import ShopPageList from '../../../Components/List/ShopPageList/ShopPageList'


export default class ShopPage extends PureComponent{
    static navigationOptions = {
    tabBarLabel: '超级闪购',
    tabBarIcon: () => (
       <View>
            <Image
               source={require('../../../Icons/Shop.png')}
               style={styles.icon}
            />
       </View>
      ),
    };
  render() {
        const {navigate}=this.props.navigation;
    return (
      <ScrollView style={styles.View}>
           <ShopPageSwiper/>
           <ShopPageScrollBanner   navigate={navigate}/>
           <ShopPageList   navigate={navigate}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    View:{

    },
    icon:{
        width:20,
        height:20,
    }
});

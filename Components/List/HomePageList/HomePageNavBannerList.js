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
 *     2018/3/8.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  FlatList,
} from 'react-native';


import HomePageNavBannerItem from '../../../Components/Item/HomePageItem/HomePageNavBannerItem'

let Data=[
    {
        Img:require('../../../Icons/WomenClothing.png'),
        NavTitle:'女装',
        backgroundColor:'antiquewhite',
    },
    {
        Img:require('../../../Icons/baby.png'),
        NavTitle:'母婴',
        backgroundColor:'aqua',
    },
    {
        Img:require('../../../Icons/Beauty.png'),
        NavTitle:'美妆',
        backgroundColor:'blueviolet',
    },
    {
        Img:require('../../../Icons/household.png'),
        NavTitle:'家居',
        backgroundColor:'brown',
    },
    {
        Img:require('../../../Icons/underwear.png'),
        NavTitle:'内衣',
        backgroundColor:'cadetblue',
    },
    {
        Img:require('../../../Icons/Men.png'),
        NavTitle:'男装',
        backgroundColor:'chartreuse',
    },
    {
        Img:require('../../../Icons/food.png'),
        NavTitle:'美食',
        backgroundColor:'darkcyan',
    },
    {
        Img:require('../../../Icons/camera.png'),
        NavTitle:'数码',
        backgroundColor:'darkgray',
        cid:8,
    },
    {
        Img:require('../../../Icons/bag.png'),
        NavTitle:'鞋包',
        backgroundColor:'darkorange',
    },
    {
        Img:require('../../../Icons/other.png'),
        NavTitle:'其他',
        backgroundColor:'deeppink',
    },
]
export default class NavBannerList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          <View style={styles.View1}>
              <FlatList
                  data={Data}
                  keyExtractor={item=>item.NavTitle}
                  renderItem={
                    ({item})=><HomePageNavBannerItem
                            NavTitle={item.NavTitle}
                            Img={item.Img}
                            backgroundColor={item.backgroundColor}
                            onPress={()=>navigate('HomePageDetailNavBannerDetailPage',{
	                            NavTitle:item.NavTitle,
                            })}
                            />
                  }
                  numColumns={5}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:200,
    },
});

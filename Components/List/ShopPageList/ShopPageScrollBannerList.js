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
 *     2018/3/9.
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

ScrollBannerData=[
    {
        Img:require('../../../Icons/Water.jpg'),
        id:1,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:11,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:2,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:3,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:4,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:5,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:6,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:7,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:8,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:9,
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        id:10,
    },
]

import ShopPageScrollBannerItem from '../../../Components/Item/ShopPageItem/ShopPageScrollBannerItem'
export default class ScrollBannerList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View>
        <FlatList
            data={ScrollBannerData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.Img}
                  renderItem={
                    ({item})=><ShopPageScrollBannerItem
                            Img={item.Img}
                            onPress={()=>navigate('PublicStoreDetail',{
	                            id:item.id,
                            })}
                            />
                  }
            style={styles.ScrollBannerView}
            getItemLayout={
                (data, index) =>
                    ( {length: 80, offset: 80 * index, index} )
            }
            initialNumToRender={0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    ScrollBannerView:{
        zIndex:-10,
    }
});

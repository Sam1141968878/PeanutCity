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
 *     2018/3/7.
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


import ShopPageItem from '../../../Components/Item/ShopPageItem/ShopPageItem'

Data=[
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店1',
        PreferentialText:'全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店2',
        PreferentialText:'全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店3',
        PreferentialText:'全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店4',
        PreferentialText:'全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店5',
        PreferentialText:'全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店6',
        PreferentialText:'全场3折起全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店7',
        PreferentialText:'全场3折起全场3折起全场3折起全场3折起'
    },
    {
        Img:require('../../../Icons/Water.jpg'),
        Title:'cuipo旗舰店8',
        PreferentialText:'全场3折起全场3折起全场3折起全场3折起全场3折起'
    },
]
export default class ShopPageList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View>
          <FlatList
            data={Data}
            keyExtractor={item=>item.Title}
            getItemLayout={
                (data, index) =>
                    ( {length: 210, offset: 210 * index, index} )
            }
            initialNumToRender={0}
            renderItem={
                    ({item})=><ShopPageItem
                            Title={item.Title}
                            Img={item.Img}
                            PreferentialText={item.PreferentialText}
                            navigate={navigate}
                            onPress={()=>navigate('PublicStoreDetail',{
	                            Title:item.Title,
                            })}
                            />
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

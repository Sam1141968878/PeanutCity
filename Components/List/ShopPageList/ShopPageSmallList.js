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

SmallData=[
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:19.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:29.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:39.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:49.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:59.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:69.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:79.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:89.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:99.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:19.89,
        Text2:50,
    },
    {
        Img:require('../../../Icons/trouser.png'),
        Text1:19.89,
        Text2:50,
    },
]

import ShopPageSmallItem from '../../../Components/Item/ShopPageItem/ShopPageSmallItem'
export default class ShopPageSmallList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          <FlatList
              data={SmallData}
              renderItem={
                ({item})=><ShopPageSmallItem
                            Img={item.Img}
                            Text1={item.Text1}
                            Text2={item.Text2}
                            onPress={()=>navigate('PublicGoodsDetail',{
	                            Text1:item.Text1,
                            })}
                />
              }
              keyExtractor={item=>item.Text1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              getItemLayout={
                (data, index) =>
                    ( {length: 130, offset: 130 * index, index} )
              }
              initialNumToRender={0}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:130,
        marginTop:70,
        marginLeft:10,
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/10.
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


PeanutData=[
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText2:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText2:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText2:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText2:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
    {
        Img:require('../../../Icons/trouser.png'),
        IconText1:'938',
        IconText1:'456',
        Title:'初春必选尖货,舒适不磨脚的豆豆鞋你不入手咩~',
    },
]

import CirclePageItem from '../../Item/CirclePageItem/CirclePageItem'
export default class CirclePageList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View>
        <FlatList
            data={PeanutData}
            keyExtractor={item=>item.Title}
            renderItem={
              ({item})=><CirclePageItem
                      Title={item.Title}
                      Img={item.Img}
                      IconText1={item.IconText1}
                      IconText2={item.IconText2}
                      onPress={()=>navigate('CirclePageDetail',{
	                      Title:item.Title,
                      })}
                      />
            }
            initialNumToRender={2}
            getItemLayout={
                 (data, index) =>
                   ( {length: 280, offset: 280 * index, index} )
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

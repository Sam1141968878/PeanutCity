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
        Img:require('../../../Icons/malecloths.png'),
        NavTitle:'1',
        Title:'女装',
        backgroundColor:'antiquewhite',
    },
    {
        Img:require('../../../Icons/baby.png'),
        NavTitle:'2',
        Title:'母婴',
        backgroundColor:'aqua',
    },
    {
        Img:require('../../../Icons/beatuy.png'),
        NavTitle:'3',
        Title:'化妆品',
        backgroundColor:'blueviolet',
    },
    {
        Img:require('../../../Icons/headware.png'),
        NavTitle:'4',
        Title:'居家',
        backgroundColor:'brown',
    },
    {
        Img:require('../../../Icons/bra.png'),
        NavTitle:'5',
        Title:'鞋包配饰',
        backgroundColor:'cadetblue',
    },
    {
        Img:require('../../../Icons/mancloths.png'),
        NavTitle:'6',
        Title:'美食',
        backgroundColor:'chartreuse',
    },
    {
        Img:require('../../../Icons/food.png'),
        NavTitle:'7',
        Title:'文体车品',
        backgroundColor:'darkcyan',
    },
    {
        Img:require('../../../Icons/electron.png'),
        NavTitle:'8',
        Title:'数码家电',
        backgroundColor:'darkgray',
        cid:8,
    },
    {
        Img:require('../../../Icons/pack.png'),
        NavTitle:'9',
        Title:'男装',
        backgroundColor:'darkorange',
    },
    {
        Img:require('../../../Icons/other.png'),
        NavTitle:'10',
        Title:'其他',
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
                            Title={item.Title}
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

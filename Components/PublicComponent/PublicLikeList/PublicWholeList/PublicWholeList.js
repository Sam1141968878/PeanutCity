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
  Image,
} from 'react-native';



import PublicWholeItem from '../../PublicLikeItem/PublicWholeItem/PublicWholeItem'

let PublicWholeListData=[
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       10Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:3087,
        Price:29,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       99Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:51,
        Sales:387,
        Price:2,
        Preferential:10
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       88Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:9,
        Sales:87,
        Price:2,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       77Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:29,
        Sales:87,
        Price:9,
        Preferential:10
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       66Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:9,
        Sales:7,
        Price:219,
        Preferential:3,
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       55Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:37,
        Price:29,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'      44Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:87,
        Price:29,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       33Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:87,
        Price:29,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:308,
        Price:29,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       22Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:87,
        Price:29,
        Preferential:30
    },
    {
        BigImg:require('../../../../Icons/trouser.png'),
        Title:'       11Milensea进口乳木果护手霜女秋东季滋养润肤保水',
        TaoBaoPrice:59,
        Sales:31087,
        Price:29,
        Preferential:30
    },
]


export default class PublicWholeList extends PureComponent{
  render() {
      const {navigate}=this.props;
    return (
      <View style={styles.View}>
          <FlatList
              style={styles.FlatList}
              data={PublicWholeListData}
              keyExtractor={item=>item.Title}
              renderItem={
                    ({item})=><PublicWholeItem
                            BigImg={item.BigImg}
                            Title={item.Title}
                            TaoBaoPrice={item.TaoBaoPrice}
                            Sales={item.Sales}
                            Price={item.Price}
                            Preferential={item.Preferential}
                            onPress={()=>navigate('PublicGoodsDetail',{
	                            Title:item.Title,
                            })}
                            />
                  }
              numColumns={1}
              getItemLayout={
                  (data, index) =>
                    ( {length: 280, offset: 280 * index, index} )
              }
              initialNumToRender={0}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        marginTop:5,
        width:'100%'
    },
    ImageView:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'red',
        marginTop:10,
        marginLeft:10,
    },
    Image:{
        width:15,
        height:15,
        marginLeft:2,
        marginTop:3,
    },
    Text:{
        marginTop:10,
        marginLeft:10,
    }
});

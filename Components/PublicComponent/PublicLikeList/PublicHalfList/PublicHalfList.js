
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/15.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import fetchJson from '../../../Fetch/FetchJson'
let Api='http://111.230.254.117:8000/list?page=0&num=10'

import PublicHalfItem from '../../PublicLikeItem/PublicHalfItem/PublicHalfItem'
export default class PublicHalfList extends PureComponent{
    state={
        movies: [],
    }
    fetchData = async () => {
        const json = await fetchJson(Api);
        InteractionManager.runAfterInteractions(()=>{
            this.setState({
                              movies: json,
                          })
        })
    }
    componentDidMount() {
        this.fetchData(this.FetchApi);
    }
  render() {
    const {navigate}=this.props;
    const {movies}=this.state;
    return (
           <FlatList
               style={{
                   marginTop:5,
               }}
               data={movies}
               keyExtractor={item=>item.title}
               renderItem={
                     ({item})=><PublicHalfItem
                             BigImg={item.pict_url}
                             Title={item.title}
                             TaoBaoPrice={item.reserve_price}
                             Sales={item.volume}
                             Price={item.zk_final_price}
                             Preferential={item.zk_price}
                             onPress={()=>navigate('PublicGoodsDetail',{
	                             Title:item.Title,
                             })}
                             />
                   }
               numColumns={2}
               getItemLayout={
                   (data, index) =>
                     ( {length: 280, offset: 280 * index, index} )
               }
               initialNumToRender={0}
           />
    );
  }
}

const styles = StyleSheet.create({

});

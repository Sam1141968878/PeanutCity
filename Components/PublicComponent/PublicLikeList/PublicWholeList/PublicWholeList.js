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

import fetchJson from '../../../Fetch/FetchJson'
let Api='http://111.230.254.117:8000/list?page=0&num=10'


export default class PublicWholeList extends PureComponent{
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
        console.log(this.FetchApi)
    }
    componentDidMount() {
        this.fetchData(this.FetchApi);
    }
  render() {
    const {navigate}=this.props;
    const {movies}=this.state;
    return (
      <View style={styles.View}>
          <FlatList
              style={styles.FlatList}
              data={movies}
              keyExtractor={item=>item.title}
              renderItem={
                    ({item})=><PublicWholeItem
                            BigImg={item.UrlPicture}
                            Title={item.title}
                            TaoBaoPrice={item.PriceBeforeZK}
                            Sales={item.NumSale}
                            Price={item.PriceAfterZK}
                            Preferential={item.PriceZK}
                            IsTmall={''}
                            onPress={()=>navigate('PublicGoodsDetail',{
	                            Title:item.Title,
	                            id:item.GoodsID,
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

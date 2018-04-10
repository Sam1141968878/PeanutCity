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
  ActivityIndicator,
} from 'react-native';
import {observer} from "mobx-react";


import PublicHalfItem from '../../../PublicComponent/PublicLikeItem/PublicHalfItem/PublicHalfItem'
import LikeFooterComponent from './LikeFooterComponent'


import fetchJson from '../../../Fetch/FetchJson'
let Api='http://111.230.254.117:8000/list?'
let num=2;
let page=0;


@observer
export default class PublicHalfList extends PureComponent{

  state = {
      movies: [],
      ready:false,
      refreshing:false,
      page:0,
      loading:false,
      end:false,
  }
  FetchApi=`${Api}num=${num}&page=0`
  fetchData = async (FetchApi) => {
        const json = await fetchJson(FetchApi);
        InteractionManager.runAfterInteractions(()=>{
            this.setState({
                              movies: json,
                              ready:true,
                          })
        })

    }
  componentDidMount() {
      this.fetchData(this.FetchApi);
  }



  _onEndReached = () => {
    if (this.state.loading===false) {
        setTimeout(()=>{
            this.onEndReachedFetchData()
        },500)
        if(page>=8){
            this.setState({
                loading:true,
                end:true,
            })
        }
    }
  };
  onEndReachedFetchData=async()=>{
      page++;
      const json = await fetchJson(`${Api}num=${num}&page=${page}`);
      this.setState({
                    movies: this.state.movies.concat(json)
                })
  }

  render() {
    const {navigate}=this.props;
    const {
      movies,
      ready,
      refreshing,
    }=this.state;
    return (
      <View style={styles.View}>
          {
              this.state.movies
              ?
              <FlatList
                  ListFooterComponent={<LikeFooterComponent end={this.state.end}/>}
                  extraData={this.state}
                  onEndReached={this._onEndReached}
                  style={styles.FlatList}
                  data={movies}
                  onEndReachedThreshold={0.5}
                  keyExtractor={item=>item.title}
                  renderItem={
                     ({item})=><PublicHalfItem
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
                  numColumns={2}
                  getItemLayout={
                      (data, index) =>
                        ( {length: 135, offset: 135 * index, index} )
                  }
                  initialNumToRender={0}
              />
              :
              <ActivityIndicator
                  style={styles.ActivityIndicator}/>
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        marginTop:0,
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
    },
    ActivityIndicator:{
        marginTop:100
    }
});

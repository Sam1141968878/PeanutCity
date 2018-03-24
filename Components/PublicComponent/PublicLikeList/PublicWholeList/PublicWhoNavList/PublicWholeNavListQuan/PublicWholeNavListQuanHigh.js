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
import NewDaTaoKe from '../../../../../../Store/DaTaoKeORTaoBao'


import PublicWholeItem from '../../../../PublicLikeItem/PublicWholeItem/PublicWholeItem'


import fetchJson from '../../../../../Fetch/FetchJson'
let Api='http://111.230.254.117:8000/list?'
let num=6;
let page=0;


@observer
export default class PublicWholeNavListQuanHigh extends PureComponent{

  state = {
      movies: [],
      ready:false,
      refreshing:false,
  }
  FetchApi=`${Api}num=${num}&page=${page}&OrderBy=${this.props.OrderBy}&HighLow=${this.props.HighLow}&table=${NewDaTaoKe.DaTaoKe?'dataoke':'taobao'}`
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
        InteractionManager.runAfterInteractions(()=>{
            this.fetchData(this.FetchApi);
        })
  }
  _onRefresh=async()=>{
      await fetchJson(this.FetchApi);
      InteractionManager.runAfterInteractions(()=>{
          this.setState({
                        refreshing:true,
                    })
      })
  }

  _onEndReached=async()=>{
      page++;
      const json = await fetchJson(`${Api}num=${num}&page=${page}&OrderBy=${this.props.OrderBy}&HighLow=${this.props.HighLow}&table=${NewDaTaoKe.DaTaoKe?'dataoke':'taobao'}`);
      InteractionManager.runAfterInteractions(()=>{
          this.setState({
                        movies: this.state.movies.concat(json)
                    })
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
              ready
              ?
              <FlatList
                  extraData={this.state}
                  refreshing={refreshing}
                  onEndReached={this._onEndReached}
                  style={styles.FlatList}
                  data={movies}
                  keyExtractor={item=>item.Title}
                  onRefresh={this._onRefresh}
                  renderItem={
                      ({item})=><PublicWholeItem
                              Pic={NewDaTaoKe.DaTaoKe?item.Pic:item.small_images}
                              Title={NewDaTaoKe.DaTaoKe?item.Title:item.title}
                              Org_Price={NewDaTaoKe.DaTaoKe?item.Org_Price:item.reserve_price}
                              Price={NewDaTaoKe.DaTaoKe?item.Price:item.zk_final_price}
                              Quan_price={NewDaTaoKe.DaTaoKe?item.Quan_price:item.reserve_price-zk_final_price}
                              Sales_num={NewDaTaoKe.DaTaoKe?item.Sales_num:''}
                              IsTmall={NewDaTaoKe.DaTaoKe?item.IsTmall:''}
                              onPress={()=>navigate('PublicGoodsDetail',{
	                              GoodsID:NewDaTaoKe.DaTaoKe?item.GoodsID:item.num_iid,
	                              navigate:navigate,
                              })}
                              />
                  }
                  numColumns={1}
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
        marginTop:45,
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

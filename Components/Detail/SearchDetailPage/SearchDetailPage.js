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
 *     2018/3/31.
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
  ScrollView,
  FlatList
} from 'react-native';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
import fetchJson from '../../Fetch/FetchJson'
import PublicHalfItem from '../../PublicComponent/PublicLikeItem/PublicHalfItem/PublicHalfItem'


const Api='http://111.230.254.117:8000/title?'
export default class SearchDetailPage extends PureComponent{
  state={
    movies:[],
    ready:false
  }
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
      this.fetchData(`${Api}title=${this.props.navigation.state.params.title}`)
  }
  render() {
    const {goBack,navigate}=this.props.navigation;
    const {title}=this.props.navigation.state.params;
    const {movies}=this.state;
    return (
      <ScrollView>
          <PublicGoBack
              goBack={()=>goBack()}
              title={title}
          />
          <FlatList
              style={{
                  marginTop:5,
              }}
              data={movies}
              keyExtractor={item=>item.title}
              renderItem={
                    ({item})=><PublicHalfItem
                            BigImg={item.UrlPicture}
                            Title={item.title}
                            TaoBaoPrice={item.PriceBeforeZK}
                            Sales={item.NumSale}
                            Price={item.PriceAfterZK}
                            Preferential={item.PriceAfterZK}
                            IsTmall={''}
                            onPress={()=>navigate('PublicGoodsDetail',{
	                            Title:item.Title,
	                            id:item.GoodsID
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

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
 *     2018/3/6.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import Swiper from 'react-native-swiper';
import fetchJson from '../../Fetch/FetchJson'
import HomePageSwiperItem from '../../Item/HomePageItem/HomePageSwiperItem'

//这是大淘客的轮播图接口:
// const Api='http://111.230.254.117:8000/'
export default class SwiperComponent extends PureComponent{
    state={
        movies:[],
    }
    Api='http://111.230.254.117:8000/list?table=taobao&num='
    num=5;
    page=0;
    fetchData = async (Api) => {
      const json = await fetchJson(Api);
      this.setState({
             movies:json,
      })
      console.log(`${this.Api}${this.num}&page=${this.page}`)
    }

    componentDidMount() {
        this.fetchData(`${this.Api}${this.num}&page=${this.page}`);
    }

  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          {
              this.state.movies
              ?
                  <Swiper
                    autoplay={true}
                  >
                      {
                         this.state.movies.map((item, index) =>
                         <HomePageSwiperItem
                             key={index}
                             image={item.pict_url}
                             onPress={()=>navigate('PublicGoodsDetail',{
                               id:item.num_iid,
                               navigate:navigate
                             })}
                         />
                         )
                      }
                  </Swiper>
              :
              <ActivityIndicator/>
          }

      </View>
    );
  }
}


const styles = StyleSheet.create({
      View:{
        height:200,
        marginTop:-60,
        zIndex:-1,
      },
});

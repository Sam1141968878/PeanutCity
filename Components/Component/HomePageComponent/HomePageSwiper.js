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
} from 'react-native';

import Swiper from 'react-native-swiper';
import fetchJson from '../../Fetch/FetchJson'
import HomePageSwiperItem from '../../Item/HomePageItem/HomePageSwiperItem'

const Api='http://111.230.254.117:8000/'
export default class SwiperComponent extends PureComponent{
    state={
        movies:[],
        Image1:'',
        Image2:'',
        Image3:'',
        Image4:'',
        Image5:'',
    }
    fetchData = async () => {
      const json = await fetchJson(Api);
      InteractionManager.runAfterInteractions(()=>{
           this.setState({
                  movies: json,
                  Image1: json[0].Pic,
                  Image2: json[1].Pic,
                  Image3: json[2].Pic,
                  Image4: json[3].Pic,
                  Image5: json[4].Pic,
                  Id1:json[0].GoodsID,
                  Id2:json[1].GoodsID,
                  Id3:json[2].GoodsID,
                  Id4:json[3].GoodsID,
                  Id5:json[4].GoodsID,
           })
           console.log(this.state.movies)
      })
    }
    componentDidMount() {
      InteractionManager.runAfterInteractions(()=>{
          this.fetchData();
      })
    }
  render() {
    const {navigate}=this.props;
    const {
        movies,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Id1,
        Id2,
        Id3,
        Id4,
        Id5,
    }=this.state;
    return (
      <View style={styles.View}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            swipeEnabled={false}
            autoplay={true}
            autoplayTimeout={10}
            bounces={true}
          >

            <HomePageSwiperItem
                  image={Image1}
                  onPress={()=>navigate('PublicGoodsDetail',{
	                          GoodsID:Id1,
	                          navigate:navigate,
                          })}
            />

            <HomePageSwiperItem
                  image={Image2}
                  onPress={()=>navigate('PublicGoodsDetail',{
	                          GoodsID:Id2,
	                          navigate:navigate,
                          })}
            />

            <HomePageSwiperItem
                  image={Image3}
                  onPress={()=>navigate('PublicGoodsDetail',{
	                          GoodsID:Id3,
	                          navigate:navigate,
                          })}
            />

            <HomePageSwiperItem
                  image={Image4}
                  onPress={()=>navigate('PublicGoodsDetail',{
	                          GoodsID:Id4,
	                          navigate:navigate,
                          })}
            />

            <HomePageSwiperItem
                  image={Image5}
                  onPress={()=>navigate('PublicGoodsDetail',{
	                          GoodsID:Id5,
	                          navigate:navigate,
                          })}
            />
          </Swiper>
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

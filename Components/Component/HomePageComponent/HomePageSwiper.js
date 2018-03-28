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
const Api='http://111.230.254.117:8000/list?table=taobao&num=5'
export default class SwiperComponent extends PureComponent{
    state={
        movies:[],
    }
    fetchData = async () => {
      const json = await fetchJson(Api);
      this.setState({
             movies:json,
      })
      console.log(json,this.state.movies)
    }
    componentDidMount() {
        this.fetchData();
    }

  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
          >
              {
                this.state.movies.map((item, index) =>
                    <HomePageSwiperItem
                        key={index}
                        image={item.small_images}
                        onPress={()=>navigate('PublicGoodsDetail',{
                          id:item.num_iid,
                          navigate:navigate
                        })}
                    />
                    )
              }

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

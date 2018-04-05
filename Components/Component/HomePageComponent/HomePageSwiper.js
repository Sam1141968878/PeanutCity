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
        ready:false,
    }
    Api='http://111.230.254.117:8000/gang_rape'
    fetchData = async (Api) => {
      const json = await fetchJson(Api);
      this.setState({
             movies:json,
             ready:true,
      })
      console.log(json)
    }

    componentDidMount() {
        this.fetchData(this.Api);
    }

  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          {
              this.state.ready
              ?
                  <Swiper
                    autoplay={true}
                    paginationStyle={{bottom:10}}
                    autoplayTimeout={3}
                    dotStyle={{backgroundColor:'#FFF'}}
                    activeDot={<View style={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                  >
                      {
                         this.state.movies.map((item, index) =>
                            <HomePageSwiperItem
                                key={index}
                                image={item.url_goods_img}
                                onPress={()=>navigate('PublicGoodsDetail',{
                                  id:item.GoodsID,
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
        height:210,
        marginTop:-60,
        zIndex:-1,
      },
});

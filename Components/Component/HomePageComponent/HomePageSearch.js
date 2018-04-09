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
  Image,
  TouchableOpacity
} from 'react-native';


import SearchInput from 'teaset/components/SearchInput/SearchInput';
export default class Search extends PureComponent{
  state={
    value:'',
  }
  render() {
    const {navigate}=this.props;
    return (
      <View>
           <TouchableOpacity
             style={{
                width:'80%',
                height:25,
                marginLeft:20,
                borderRadius:13,
                backgroundColor:this.props.backgroundColor,
                flexDirection:'row',
                alignItems:'center',
                marginTop:this.props.marginTop,
                marginBottom:this.props.marginBottom,
             }}
             onPress={()=>navigate('SearchPage')}
           >
               <Image
                 source={require('../../../Icons/Search.png')}
                 style={styles.Img}
               />
               <Text
                   style={styles.Text}>粘贴宝贝标题,先领券,再购物</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Img:{
        width:16,
        height:16,
        marginLeft:20,
        marginRight:20
    },
    Text:{
        fontSize:12,
        color:'gray'
    }
});

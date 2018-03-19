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
 *     2018/3/7.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
  TouchableOpacity,
} from 'react-native';


import ShopPageSmallList from '../../../Components/List/ShopPageList/ShopPageSmallList'
export default class ShopPageItem extends PureComponent{
  render() {
    const {Img,Title,PreferentialText,onPress,navigate}=this.props;
    return (
      <TouchableOpacity
        style={styles.View}
        onPress={onPress}
      >
          <Image
            style={styles.TitleImage}
            source={Img}
          />
          <Text style={styles.Title}>{Title}</Text>
          <View style={styles.PreferentialView}>
              <Text style={styles.PreferentialText}>{PreferentialText}</Text>
          </View>
          <View
              style={styles.GoView}>
              <Text style={styles.GoText}>进店</Text>
          </View>
          <ShopPageSmallList navigate={navigate}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:210,
        width:'100%',
        backgroundColor:'#FFF',
        flexDirection:'row',
        marginTop:5,
    },
    TitleImage:{
        width:50,
        height:50,
        borderWidth:1,
        borderColor:'gray',
        position:'absolute',
        top:10,
        left:10,
    },
    Title:{
        position:'absolute',
        top:15,
        left:70,
        fontSize:14,
        color:'black',
    },
    PreferentialView:{
        backgroundColor:'sandybrown',
        height:15,
        borderRadius:10,
        position:'absolute',
        top:45,
        left:70,
    },
    PreferentialText:{
        color:'tomato',
        fontSize:10,
        marginLeft:7,
        paddingRight:10,
    },
    GoView:{
        borderWidth:1,
        borderColor:'red',
        borderRadius:15,
        height:25,
        width:40,
        position:'absolute',
        right:20,
        top:20,
    },
    GoText:{
        marginLeft:5,
        marginTop:2,
        color:'red',
    },
});

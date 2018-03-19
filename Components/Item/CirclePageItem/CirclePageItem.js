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
 *     2018/3/10.
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


export default class PeanutCircleItem extends PureComponent{
  render() {
    const {Img,IconText1,IconText2,Title,onPress}=this.props;
    return (
      <TouchableOpacity
        style={styles.View}
        onPress={onPress}
      >
          <Image
              source={Img}
              style={styles.Img}
          />
          <View style={styles.BottomView}>
              <View
              style={styles.RedView}>
              <Text
                  style={styles.redText}>花生精选</Text>
              </View>
              <View style={styles.IconView}>
                  <View style={styles.Icon1View}>
                      <Image
                        source={require('../../../Icons/See.png')}
                        style={styles.Icon1}
                      />
                      <Text style={styles.Icon1Text}>{IconText1}</Text>
                  </View>
                  <View style={styles.Icon2View}>
                      <Image
                        source={require('../../../Icons/share.png')}
                        style={styles.Icon2}
                      />
                      <Text style={styles.Icon2Text}>{IconText2}</Text>
                  </View>
              </View>
          </View>
          <Text style={styles.Title}>{Title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:280,
        marginLeft:5,
        marginRight:5,
    },
    Img:{
        width:'100%',
        height:180,
    },
    BottomView:{
        width:'100%',
        height:100,
    },
    RedView:{
        width:70,
        height:20,
        backgroundColor:'pink',
        borderRadius:10,
        marginTop:10,
        marginLeft:5,
    },
    redText:{
        color:'red',
        marginLeft:5,
    },
    IconView:{
        width:120,
        height:20,
        flexDirection:'row',
        position:'absolute',
        right:0,
        top:10,
        right:5,
    },
    Icon1View:{
        flexDirection:'row'
    },
    Icon2View:{
        flexDirection:'row',
        marginLeft:10,
    },
    Icon1:{
        width:20,
        height:20,
    },
    Icon2:{
        width:20,
        height:20,
    },
    Icon1Text:{
        marginLeft:5,
    },
    Icon2Text:{
        marginLeft:5,
    },
    Title:{
        color:'#000',
        marginTop:-50,
        fontSize:15,
        marginLeft:5,
    }
});

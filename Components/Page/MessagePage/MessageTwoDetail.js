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
 *     2018/3/20.
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
} from 'react-native';


export default class MessageTwoDetail extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View
          style={styles.View}>
          <View style={styles.MessageTwoItemView}>
              <View style={styles.MessageTwoTime}>
                  <Text style={styles.TimeText}>xx-xx xx:xx</Text>
              </View>
              <TouchableOpacity
                style={styles.MessageTwoWhileView}
                onPress={()=>navigate('PublicGoodsDetail')}
              >
                  <View style={styles.TextView}>
                      <View style={styles.Text1View}>
                          <Text
                              style={styles.Text1}>年轻人,哪能没口锅</Text>
                      </View>
                      <View
                          style={styles.Text2View}>
                        <Text
                            style={styles.Text2}>[69元]德国品质,巴拉巴拉巴拉巴拉巴拉,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</Text>
                        <Image
                            source={require('../../../Icons/goUp.png')}
                            style={styles.Image}
                        />
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        flex:1,
        backgroundColor:'ghostwhite',
        alignItems:'center',
        marginTop:40,
    },
    MessageTwoItemView:{
        width:'100%',
        height:140,
        alignItems:'center'
    },
    MessageTwoTime:{
        width:80,
        height:20,
        borderRadius:12,
        backgroundColor:'gainsboro',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    TimeText:{
        fontSize:12,
        marginBottom:2,
    },
    MessageTwoWhileView:{
        backgroundColor:'#FFF',
        marginLeft:10,
        marginRight:10,
        height:100,
        borderRadius:5,
        marginTop:10,
        alignItems:'center',
    },
    Text1View:{
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'gainsboro',
        height:35,
        justifyContent:'center'
    },
    Text1:{
        color:'#000'
    },
    Text2View:{
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        marginTop:15,
    },
    Text2:{
        color:'#000',
        marginRight:50,
    },
    Image:{
        width:30,
        height:20,
        position:'absolute',
        right:10,
    }
});

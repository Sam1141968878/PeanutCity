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
 *     2018/3/14.
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

export default class PublicWholeItem extends PureComponent{
  render() {
    const {
        Title,
        Price,
        onPress,
        BigImg,
        TaoBaoPrice,
        Sales,
        Preferential,
        IsTmall
    }=this.props;
    return (
      <TouchableOpacity
          style={styles.View}
          onPress={onPress}
      >

          {
            BigImg.includes('http')
            ?
            <Image
              source={{uri:BigImg}}
              style={styles.Image1}
            />
            :
            <Image
              source={{uri:`http://${BigImg}`}}
              style={styles.Image1}
            />
          }
          <View style={styles.Text1View}>

              {
                  IsTmall===0
                  ?
                  <Image
                      source={require('../../../../Icons/TianMao.png')}
                      style={styles.Icon}
                  />
                  :
                  <Image
                      source={require('../../../../Icons/TaoBao.png')}
                      style={styles.Icon}
                  />
              }
              <Text
                  style={styles.Text1}
                  numberOfLines={2}>       {Title}</Text>
          </View>
          <View style={styles.Text2View}>
              <Text style={styles.Text2}>
                ¥ <Text style={styles.Text3}>{Price}</Text>
              </Text>
              <Text style={styles.Text4}>天猫价:¥ {TaoBaoPrice}</Text>
          </View>
          <View style={styles.Text3View}>
              <Text style={styles.Text5}>月销{Sales}</Text>
              <TouchableOpacity>
                  <Image
                    style={styles.CouponImage}
                    source={require('../../../../Icons/coupon.png')}
                  >
                  </Image>
                  <Text style={styles.Text6}>券  ¥ {Preferential}</Text>
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        width:'100%',
        height:135,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'gainsboro',
        padding:5,
        paddingBottom:10,
    },
    Image1:{
        width:130,
        height:120,
    },
    Text1View:{
        marginTop:10,
        marginLeft:5,
        width:210,
        flexDirection:'row',
    },
    Icon:{
        width:20,
        height:20,
        position:'absolute',
        top:0,
        left:0,
    },
    Text1:{

    },
    Text2View:{
        width:100,
        height:50,
        position:'absolute',
        top:80,
        left:140,
    },
    Text2:{
        marginTop:-10,
        color:'red'
    },
    Text3:{
        fontSize:24,
    },
    Text4:{
        marginTop:5,
        fontSize:12,
    },
    Text3View:{
        width:90,
        height:50,
        position:'absolute',
        right:10,
        top:60
    },
    Text5:{
        marginLeft:20,
        fontSize:12,
        position:'absolute',
        top:20,
    },
    CouponImage:{
        width:90,
        height:50,
        marginTop:25
    },
    Text6:{
        color:'#FFF',
        fontSize:13,
        position:'absolute',
        top:41,
        left:17
    }
});

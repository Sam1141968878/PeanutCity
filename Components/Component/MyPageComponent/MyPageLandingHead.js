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
 *     2018/3/12.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  AsyncStorage,
  Button
} from 'react-native';


export default class LandingHead extends PureComponent{
   state={
    data:'',
   }
  render() {
    const {navigate,phone,landing,name,code}=this.props;
    return (
      <View>
          {
            landing
            ?
            <View style={styles.landingHeadComponent}>
                <View style={styles.View1}>
                    <View style={styles.View2}></View>
                    <View style={styles.View3}>
                    {
                        name
                        ?
                            <Text style={styles.Phone}>{name}</Text>
                        :
                            <Text style={styles.Phone}>{phone}</Text>
                    }
                        <View style={styles.View4}>
                            <Text style={{color:'red',fontSize:10}}>超级会员</Text>
                        </View>
                    </View>
                    <View style={styles.View5}>
                        <Text style={styles.Text3}>邀请码:{code}</Text>
                        <View style={styles.View6}>
                            <Text style={styles.Text4}>复制</Text>
                        </View>
                    </View>

                </View>
            </View>
            :
            <View  style={styles.landingHeadComponent}>
                <Text style={styles.Text1}>新用户注册立刻领取优惠券</Text>
                <TouchableOpacity
                    style={styles.landingButton}
                    onPress={()=>navigate('LandingPage')}
                >
                    <Text style={styles.Text2}>登陆/注册</Text>
                </TouchableOpacity>
            </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    landingHeadComponent:{
        width:'100%',
        height:230,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f7db50'
    },
    Text1:{
        fontSize:14,
        color:'#FFF',
    },
    landingButton:{
        width:80,
        height:24,
        backgroundColor:'#FFF',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    Text2:{
        fontSize:12,
        color:'orangered',
    },
    View1:{
        width:'40%',
        height:100,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    View2:{
        width:55,
        height:55,
        borderRadius:28,
        backgroundColor:'#FFF',
    },
    Phone:{
        color:'#fff',
        fontSize:14,
    },
    View3:{
        flexDirection:'row',
        marginTop:5,
    },
    View4:{
        width:60,
        height:20,
        borderRadius:5,
        backgroundColor:'#fdf4c9',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5,
    },
    Text3:{
        fontSize:14,
        color:'#fff',
        marginTop:3,
    },
    View5:{
        flexDirection:'row',
        marginTop:0,
        marginLeft:-50,
    },
    View6:{
        width:40,
        height:15,
        borderRadius:3,
        borderWidth:1,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:130,
        marginTop:5,
    },
    Text4:{
        color:'#FFF',
        fontSize:12,
    },
});

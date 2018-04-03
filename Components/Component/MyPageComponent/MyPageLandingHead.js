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
                    {
                        name
                        ?
                            <Text style={styles.Phone}>{name}</Text>
                        :
                            <Text style={styles.Phone}>{phone}</Text>
                    }

                    <View style={styles.View3}>
                        <Text style={{color:'red',fontSize:12}}>超级会员</Text>
                    </View>
                    <Text style={styles.Text3}>邀请码:{code}</Text>
                    <View style={styles.View4}>
                        <Text style={styles.Text4}>复制</Text>
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
        height:170,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'orangered'
    },
    Text1:{
        fontSize:14,
        color:'#FFF',
        marginTop:60,
    },
    landingButton:{
        width:80,
        height:24,
        backgroundColor:'#FFF',
        borderRadius:10,
        marginTop:35,
    },
    Text2:{
        fontSize:12,
        color:'orangered',
        marginTop:3,
        marginLeft:12,
    },
    View1:{
        width:'100%',
        height:100,
        marginTop:30,
        flexDirection:'row'
    },
    View2:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#FFF',
        marginLeft:15
    },
    Phone:{
        color:'#fff',
        fontSize:18,
        marginTop:15,
        marginLeft:10,
    },
    View3:{
        width:60,
        height:20,
        borderRadius:10,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:15
    },
    Text3:{
        fontSize:16,
        color:'#fff',
        position:'absolute',
        left:105,
        top:50,
    },
    View4:{
        width:40,
        height:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:240,
        top:50
    },
    Text4:{
        color:'#FFF'
    }
});

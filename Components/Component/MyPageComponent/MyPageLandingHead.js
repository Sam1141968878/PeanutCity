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

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewLandingStore from '../../../Store/LandingStore'


@observer
export default class LandingHead extends PureComponent{
   state={
      data:''
   }
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.landingHeadComponent}>
          {
            this.state.data
            ?
            <View>
                <Text style={{color:'#FFF',fontSize:18}}>{this.state.data}</Text>
            </View>
            :
            <View>
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
    }
});

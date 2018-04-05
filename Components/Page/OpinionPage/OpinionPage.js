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
 *     2018/4/3.
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
  TextInput
} from 'react-native';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class OpinionPage extends PureComponent{
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <View>
          <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
          />
          <View
              style={{padding:10}}>
            <Text>我要反馈</Text>
            <View
                style={{
                    height:160,
                    backgroundColor:'#FFF',
                    marginTop:15,
                }}>
                <TextInput
                    multiline={true}
                    underlineColorAndroid={'transparent'}
                />
            </View>
            <TouchableOpacity
                style={{width:'100%',
                        height:30,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'red',
                        borderRadius:15,
                        marginTop:30,
                }}>
                <Text style={{color:'#FFF'}}>提交</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

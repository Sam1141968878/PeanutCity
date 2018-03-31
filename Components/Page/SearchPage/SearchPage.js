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
 *     2018/3/31.
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


export default class SearchPage extends PureComponent{
    state={
        value:''
    }
  render() {
    const {goBack,navigate}=this.props.navigation;
    return (
      <View style={styles.View}>
        <View style={styles.InputView}>
            <TouchableOpacity
                onPress={()=>goBack()}
            >
                <Image
                    source={require('../../../Icons/goBack.png')}
                    style={styles.goBack}
                />
            </TouchableOpacity>
            <TextInput
                style={styles.TextInput}
                underlineColorAndroid='red'
                placeholder="粘贴宝贝标题,先领券再购物"
                value={this.state.value}
                keyboardType='default'
                maxLength={20}
                onChangeText={(text)=>this.setState({
                    value:text
                })}
            />
            <TouchableOpacity
                style={styles.RedView}
                onPress={()=>navigate('SearchDetailPage',{
                    title:this.state.value
                })}
            >
                <Text style={styles.RedText}>搜索</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#FFF'
    },
    InputView:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        height:50,
        marginTop:20,
    },
    goBack:{
        width:16,
        height:16,
        marginTop:8,
    },
    TextInput:{
        width:'70%'
    },
    RedView:{
        width:50,
        height:25,
        backgroundColor:'red',
        borderRadius:13,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
    },
    RedText:{
        color:'#FFF'
    }
});

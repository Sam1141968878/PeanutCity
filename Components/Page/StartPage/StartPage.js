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
  Button,
  StatusBar,
} from 'react-native';


export default class StartPage extends PureComponent{
    componentWillMount() {
        timer=setTimeout(()=>{
            this.props.navigation.navigate('MyTab')
        },2000)
    }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={styles.View}>
          <StatusBar translucent={true}
                     backgroundColor='rgba(255,255,255,0)'/>
          <Image
              source={require('../../../Icons/Guide.jpg')}
              style={styles.Img}
          />
          <TouchableOpacity
              onPress={()=>navigate('MyTab')}
              style={styles.ButtonView}
          >
              <Text style={{color:'#FFF'}}>跳过</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Img:{
        flex:1
    },
    ButtonView:{
        width:50,
        height:30,
        borderRadius:10,
        backgroundColor:'#000',
        position:'absolute',
        top:30,
        right:20,
        alignItems:'center',
        justifyContent:'center'
    }
});

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
 *     2018/3/16.
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

import {
    Container,
    Header,
    Tab,
    Tabs,
    TabHeading,
    Icon,
    Content
} from 'native-base';

import PublicGoBack from '../../PublicGoBack'
export default class PublicStoreDetailHeader extends PureComponent{
    state={
        ChangeColor:false,
        ToastMessage:false,
    }
  render() {
    const {goBack,state}=this.props;
    return (
      <View style={styles.HeaderView}>
          <PublicGoBack
              goBack={()=>goBack()}
              title={state.params.id}
          />
          <View style={styles.ContentView}>
              <Image
              style={styles.BigImage}
              source={require('../../../../Icons/Guide.jpg')}
              />
              <View style={styles.BlackView}/>
              <View style={styles.BlackViewContent}>
                  <Image
                      style={styles.SmallImage}
                      source={require('../../../../Icons/trouser.png')}
                  />
                  <View style={styles.TextView}>
                      <Text style={styles.Text1}>cuipo旗舰店</Text>
                      <Text style={styles.Text2}>全场3折起</Text>
                  </View>
                  <TouchableOpacity
                    style={{marginTop:-35}}
                    onPress={()=>this.setState({
                        ChangeColor:!this.state.ChangeColor,
                        ToastMessage:!this.state.ToastMessage,
                    })}
                  >
                      {
                          this.state.ChangeColor
                          ?
                          <View style={styles.Text3View}>
                              <Text style={styles.Text3}>已收藏</Text>
                          </View>
                          :
                          <View style={styles.Text4View}>
                              <Text style={styles.Text3}>收藏</Text>
                          </View>
                      }
                  </TouchableOpacity>
              </View>
              {
                this.state.ToastMessage
                ?
                alert('已收藏')
                :
                console.log('未收藏')
              }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    HeaderView:{
        height:245,
    },
    ContentView:{
        height:205,
    },
    BigImage:{
        flex:1,
    },
    BlackView:{
        width:'100%',
        height:75,
        backgroundColor:'#000',
        opacity:0.2,
        position:'absolute',
        top:130,
    },
    SmallImage:{
        width:80,
        height:80,
        position:'absolute',
        bottom:20,
        left:20,
    },
    BlackViewContent:{
        position:'absolute',
        top:130,
        width:'100%',
        height:75,
    },
    TextView:{
        width:100,
        height:45,
        marginTop:15,
        justifyContent:'space-between',
        marginLeft:110,
    },
    Text1:{
        fontSize:16,
        color:'#FFF'
    },
    Text2:{
        color:'#FFF'
    },
    Text3View:{
        width:60,
        height:30,
        backgroundColor:'lightgrey',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'79%',
    },
    Text4View:{
        width:60,
        height:30,
        backgroundColor:'red',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'79%',
    },
    Text3:{
        color:'#FFF',
        fontSize:16,
        marginLeft:-2,
    }
});

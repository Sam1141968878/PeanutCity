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
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  Button,
  StatusBar,
} from 'react-native';


import Toast from 'teaset/components/Toast/Toast';
let letsure=false;
export default class GoodsGoBack extends PureComponent{
    state={
        visible:false,
        transparent:true,
        active1:false,
        active2:false,
    }
  render() {
    const {goBack}=this.props;
    return (
      <View style={styles.View}>
          <TouchableOpacity
              style={styles.ImgView}
              onPress={goBack}
          >
              <Image
                  source={require('../../Icons/goBackWhite.png')}
                  style={styles.Img}
              />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.feedbackView}
              onPress={()=>this.setState({
                  visible:true,
              })}
          >
              <Image
                  source={require('../../Icons/feedback.png')}
                  style={styles.feedback}
              />
          </TouchableOpacity>
          <Modal
              visible={this.state.visible}
              transparent={this.state.transparent}
              onRequestClose={()=>{
                  console.log('模态被解除')
              }}
              onShow={()=>{
                  this.setState({
                      active1:false,
                      active2:false,
                  })
                  letsure=false
              }}
          >
              <TouchableOpacity
                  style={{flex:1,
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'rgba(0, 0, 0, 0.3)'}}
                  onPress={()=>{this.setState({visible:false})}}
              >
                  <View style={{height:180,
                                width:275,
                                backgroundColor:'white',
                                borderRadius:15,
                                color:'#000'
                                }}
                  >
                      <TouchableOpacity
                          style={{justifyContent:'center',
                              alignItems:'center',
                              borderBottomWidth:1,
                              borderBottomColor:'whitesmoke',
                              height:45,
                              backgroundColor:'whitesmoke',
                              borderTopLeftRadius:15,
                              borderTopRightRadius:15,
                          }}
                      >
                          <Text
                              style={{color:'#000'}}>反馈</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{justifyContent:'center',
                              alignItems:'center',
                              borderBottomWidth:1,
                              borderBottomColor:'whitesmoke',
                              height:45,
                          }}
                          onPress={()=>{
                              this.setState({
                                  active1:true,
                                  active2:false,
                              })
                          }}
                      >
                          <Text style={this.state.active1?styles.red:styles.black}>无法领取优惠</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{
                              justifyContent:'center',
                              alignItems:'center',
                              borderBottomWidth:1,
                              borderBottomColor:'whitesmoke',
                              height:45,
                          }}
                          onPress={()=>{
                              this.setState({
                                  active2:true,
                                  active1:false,
                              })
                          }}
                      >
                          <Text style={this.state.active2?styles.red:styles.black}>价格不符</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{
                              justifyContent:'center',
                              alignItems:'center',
                              borderRightWidth:1,
                              borderRightColor:'whitesmoke',
                              width:'49%',
                              height:45,
                              color:this.active2,
                          }}
                          onPress={()=>{this.setState({visible:false})}}
                      >
                          <Text
                              style={{color:'black'}}>点错了</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{
                              justifyContent:'center',
                              alignItems:'center',
                              width:'50%',
                              height:45,
                              position:'absolute',
                              right:0,
                              top:135,
                          }}
                          onPress={
                            ()=>{this.setState({
                                visible:false,
                            })
                            letsure=true;
                            {
                                this.state.active1&&letsure||this.state.active2&&letsure
                                ?
                                Toast.message('反馈成功')
                                :
                                console.log('没有反馈')
                            }
                            }
                          }
                      >
                          <Text style={{color:'red'}}>确定</Text>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
          </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    View:{
        height:40,
        backgroundColor:'rgba(255,255,255,0)',
        marginTop:20,
    },
    ImgView:{
        width:25,
        height:25,
        backgroundColor:'#8a8a8a',
        position:'absolute',
        top:5,
        left:10,
        borderRadius:15,
    },
    Img:{
        width:15,
        height:15,
        marginTop:4,
        marginLeft:3,
    },
    feedbackView:{
        width:25,
        height:25,
        position:'absolute',
        right:10,
        top:5,
    },
    feedback:{
        width:25,
        height:25,
    },
    red:{
        color:'red'
    },
    black:{
        color:'#000'
    }
});

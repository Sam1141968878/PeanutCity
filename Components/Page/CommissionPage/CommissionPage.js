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
 *     2018/4/2.
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
  TextInput,
  Button,
  ActivityIndicator,
  Clipboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PublicGoBack from '../../PublicComponent/PublicGoBack'
import fetchJson from '../../Fetch/FetchJson'
import Toast from 'teaset/components/Toast/Toast'
import Drawer from 'teaset/components/Drawer/Drawer'
import *as WeChat from 'react-native-wechat'

const Api='http://111.230.254.117:8000/command?num_iid='
export default class CommissionPage extends PureComponent{
  state={
    text:this.props.navigation.state.params.Title,
    introduce:this.props.navigation.state.params.introduce,
    Price:this.props.navigation.state.params.Price,
    OrgPrice:this.props.navigation.state.params.OrgPrice,
    movies:[],
  }
  id=this.props.navigation.state.params.id
  fetchData = async () => {
    const json = await fetchJson(`${Api}${this.id}&phone=1`);
      this.setState({
             movies: json,
      })
      console.log(`${Api}${this.id}`)
  }
  componentDidMount() {
      this.fetchData();
      console.log(this.state.movies)
  }
  _setClipboardContent(){
    Clipboard.setString(
    `
    ${this.state.text}
    
    ${this.state.introduce}
    
    [在售价]${this.state.OrgPrice}元
    [券后价]${this.state.Price}元
    
    复制这条信息,
    ${this.state.movies.data},
    打开[手机淘宝]即可查看`
    );
    Toast.message('爆了么:复制成功')
  }

  WxShareSessionImage=()=>{
      //判断微信是否安装
      WeChat.isWXAppInstalled()
      .then((isInstalled)=>{
          if(isInstalled){
              //微信好友的图片
              WeChat.shareToSession({
                type: 'imageUrl',
                title: 'web image',
                description: 'share web image to time line',
                mediaTagName: 'email signature',
                messageAction: undefined,
                messageExt: undefined,
                imageUrl: this.props.navigation.state.params.BigImage,
              })
              .catch((error) => {
                  console.log(error.message);
              })
          }
          else{
              alert('没有安装微信软件，请您安装微信之后再试')
          }
      })
      .then(()=>{
          Clipboard.setString(
          `${this.state.text}
          
          ${this.state.introduce}
          
          [在售价]${this.state.OrgPrice}元
          [券后价]${this.state.Price}元
          
          复制这条信息,
          ${this.state.movies.data},
          打开[手机淘宝]即可查看`
          )
      })
  }
  WxShareLineImage=()=>{
      //判断微信是否安装
      WeChat.isWXAppInstalled()
      .then((isInstalled)=>{
          if(isInstalled){
              //微信朋友圈的图片
               WeChat.shareToTimeline({
                   type: 'imageUrl',
                   title: 'web image',
                   description: 'share web image to time line',
                   mediaTagName: 'email signature',
                   messageAction: undefined,
                   messageExt: undefined,
                   imageUrl: this.props.navigation.state.params.BigImage,
               })
               .then((success)=>{
                   console.log(success)
               }).catch((error)=>{
                   console.log(error)
               })
          }
          else{
              alert('没有安装微信软件，请您安装微信之后再试')
          }
      })
      .then(()=>{
          Clipboard.setString(`${this.state.text}
          
          ${this.state.introduce}
          
          [在售价]${this.state.OrgPrice}元
          [券后价]${this.state.Price}元
          
          复制这条信息,
          ${this.state.movies.data},
          打开[手机淘宝]即可查看`)
      })
  }
  view = (
    <View style={{backgroundColor:'#FFF', height: 100}}>
      <View style={{flex: 1,flexDirection:'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <TouchableOpacity
              onPress={this.WxShareSessionImage}
          >
            <View style={{
            width:50,
            height:50,
            borderRadius:30,
            backgroundColor:'limegreen',
            justifyContent:'center',
            alignItems:'center'
            }}>
              <Image
                  source={require('../../../Icons/WeiXin.png')}
                  style={{width:35,height:35}}
              />
            </View>
            <Text>微信好友</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.WxShareLineImage}>
            <View style={{
            width:50,
            height:50,
            borderRadius:30,
            backgroundColor:'limegreen',
            justifyContent:'center',
            alignItems:'center'
            }}>
              <Image
                  source={require('../../../Icons/FriendsCircle.png')}
                  style={{width:35,height:35}}
              />
            </View>
            <Text>微信朋友圈</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    const {id, Price, OrgPrice, BigImage,Title,Guess}=this.props.navigation.state.params;
    return (
        <View style={{flex:1}}>
            {
                this.state.movies.data
                ?
                <View style={styles.view}>
                    <PublicGoBack
                      goBack={()=>goBack()}
                      title={state.params.title}
                    />
                    <LinearGradient
                      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                      style={styles.HeadView}
                      colors={['orange','darkorange','orangered']}
                    >
                      <Image
                          source={require('../../../Icons/CommissionImage.png')}
                          style={styles.CommissionSmallImage}
                      />
                      <Text style={styles.Text1}>奖励佣金预估:￥ {Guess}</Text>
                      <TouchableOpacity
                          style={{position:'absolute',right:10,height:30,width:50,top:5}}>
                          <Text
                              style={styles.Text2}>规则</Text>
                          <View style={styles.GoUpView}>
                              <Image
                                  source={require('../../../Icons/goUp.png')}
                                  style={styles.GoUpImage}
                              />
                          </View>
                      </TouchableOpacity>
                    </LinearGradient>
                    <View style={{padding:10}}>
                      <TextInput
                        onChangeText={(text) => this.setState({text})}
                        value={
                        `${this.state.text}
----------------------------------------------------------------------------------
                         ${this.state.introduce}
                        `
                        }
                        underlineColorAndroid={'whitesmoke'}
                        multiline={true}
                        style={{lineHeight:25}}
                      />
                    </View>

                    <View style={styles.FooterView}>
                        <Text style={styles.Text3}>[在售价]:{OrgPrice}元</Text>
                        <Text style={styles.Text4}>[券后价]:{Price}元</Text>
                        <Text style={styles.Text5}>--------</Text>
                        <Text style={styles.Text6}>复制这条信息,</Text>
                        <Text style={styles.Text7}  selectable={true}>
                            <Text selectable={true}>{this.state.movies.data}</Text>
                            ,打开[手机淘宝]即可查看
                        </Text>
                        <Image
                            style={{
                              width:180,
                              height:180
                            }}
                            source={{uri:BigImage}}
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <TouchableOpacity
                            style={styles.Button1}
                            onPress={()=>this._setClipboardContent()}
                        >
                            <Text
                                style={{color:'#FFF',fontSize:16}}>复制淘口令</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Button2}
                            onPress={()=>[
                                Drawer.open(this.view, 'bottom')
                            ]}
                        >
                            <Text
                                style={{color:'#FFF',fontSize:16}}>分享图片</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                :
                <ActivityIndicator/>
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#FFF'
    },
    HeadView:{
        width:'100%',
        height:30,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15
    },
    CommissionSmallImage:{
        width:14,
        height:14,
    },
    Text1:{
        marginLeft:5,
        fontSize:14,
        color:'#FFF'
    },
    Text2:{
        fontSize:14,
        color:'#FFF'
    },
    GoUpView:{
        width:14,
        height:14,
        borderRadius:9,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        flexDirection:'row',
        marginLeft:35,
        marginTop:3,
    },
    GoUpImage:{
        width:14,
        height:14,
    },
    FooterView:{
        padding:10
    },
    Text3:{

    },
    Text4:{

    },
    Text5:{

    },
    Text6:{

    },
    Text7:{

    },
    ButtonView:{
        height:40,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        position:'absolute',
        bottom:0
    },
    Button1:{
        borderRadius:5,
        height:35,
        width:'45%',
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    Button2:{
        borderRadius:5,
        height:35,
        width:'45%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
});

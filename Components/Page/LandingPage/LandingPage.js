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
 *     2018/3/6.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import *as WeChat from 'react-native-wechat'
import fetchWX from '../../Fetch/FetchWX'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'
import Toast from 'teaset/components/Toast/Toast';



@observer
export default class LandingPage extends PureComponent{
    state={
        Phone:'',
        PassWord:'',
        secureTextEntry:true,
        Landing:[],
        Registered:'',
        data:'还没有数据',
        WxUser:[],
        WxRegisteredStatus:''
    }
    ApiPost='http://111.230.254.117:8000/logined?'
    WxLoginApi='http://111.230.254.117:8000/logined_wechat'
    ChangeSecureTextEntry=()=>{
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
        })
    }
    fetchPost=async(ApiPost)=>{
       const json=fetch(ApiPost, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:`phone=${this.state.Phone}&password=${this.state.PassWord}`,
        })
        .then((response) => response.text())
        .then((responseText) => {
            const json = JSON.parse(responseText);
            return json;
        })
        .then((json)=>{
            this.setState({
                Landing:json
            },()=>{
                if(this.state.Landing.status=='success'){
                    action
                    NewNavTabPickerStore.Landing=true;
                    action
                    NewNavTabPickerStore.PassWord=this.state.PassWord;
                    action
                    NewNavTabPickerStore.Phone=this.state.Phone;
                    action
                    NewNavTabPickerStore.Code=json.code_invite;
                    AsyncStorage.setItem('Landing', JSON.stringify(NewNavTabPickerStore.Landing), (error, result) => {
                        if (!error) {
                            console.log('保存成功1')
                        }
                    });
                    AsyncStorage.setItem('PassWord', JSON.stringify(NewNavTabPickerStore.PassWord), (error, result) => {
                        if (!error) {
                            console.log('保存成功2')
                        }
                    });
                    AsyncStorage.setItem('Phone', JSON.stringify(NewNavTabPickerStore.Phone), (error, result) => {
                        if (!error) {
                            console.log('保存成功3')
                        }
                    });
                    AsyncStorage.setItem('Code', JSON.stringify(NewNavTabPickerStore.Code), (error, result) => {
                        if (!error) {
                            console.log('保存成功4')
                        }
                    });
                    Toast.message('登陆成功,欢迎使用爆了么')
                    this.props.navigation.navigate('MyTab')
                }else{
                    alert('登陆失败,请检查一下')
                }
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
    fetchWxPost=async(ApiPost)=>{
       console.log(this.state.WxUser.openid,this.state.WxUser.unionid)
       const json=fetch(ApiPost, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:`openid=${this.state.WxUser.openid}&unionid=${this.state.WxUser.unionid}&headimgurl=${this.state.WxUser.headimgurl}&nickname=${this.state.WxUser.nickname}&sex=${this.state.WxUser.sex}&city=${this.state.WxUser.city}&country=${this.state.WxUser.city}&privilege=${this.state.WxUser.privilege}&province=${this.state.WxUser.province}`,
        })
        .then((response) => response.text())
        .then((responseText) => {
            const json = JSON.parse(responseText);
            return json;
        })
        .then((json)=>{
            console.log(json)
            this.setState({
                WxRegisteredStatus:json,
            },()=>{
                if(json.status==='success'){
                    action
                    NewNavTabPickerStore.Landing=true;
                    AsyncStorage.setItem('Landing', JSON.stringify(NewNavTabPickerStore.Landing), (error, result) => {
                            if (!error) {
                                console.log('保存成功1')
                            }
                    });
                    this.props.navigation.navigate('MyTab')
                }else{
                    Toast.message('请绑定手机号')
                    this.props.navigation.navigate('WxRegisteredPage',{
                        title:'请绑定你的手机号'
                    })
                }
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    AppId='wx21b8979660c07d7e';
    AppSecret='a33e1c52d31b522b619397165a8aa64c'
    OneUri='https://api.weixin.qq.com/sns/oauth2/access_token?'
    TwoUri='https://api.weixin.qq.com/sns/oauth2/refresh_token?'
    UseUri='https://api.weixin.qq.com/sns/userinfo?'
    WxLogin=()=>{
       //判断微信是否安装
       WeChat.isWXAppInstalled()
         .then((isInstalled) => {
           if (isInstalled) {
             //发送授权请求
             WeChat.sendAuthRequest('snsapi_userinfo', 'wechat_sdk_demo')
               .then(responseCode => {
                 //返回code码，通过code获取access_token
                 const oneApi=fetchWX(`${this.OneUri}appid=${this.AppId}&secret=${this.AppSecret}&code=${responseCode.code}&grant_type=authorization_code`)
                 return oneApi;
               })
               .then(responseCode=>{
                 const twoApi=fetchWX(`${this.TwoUri}appid=${this.AppId}&refresh_token=${responseCode.refresh_token}&grant_type=refresh_token`)
                 return twoApi;
               })
               .then(responseCode=>{
                 const userApi=fetchWX(`${this.UseUri}access_token=${responseCode.access_token}&openid=OPENID`)
                 return userApi;
               })
               .then(userApi=>{
                   this.setState({
                      WxUser:userApi
                   },()=>{
                       action
                       NewNavTabPickerStore.Landing=true;
                       action
                       NewNavTabPickerStore.Name=this.state.WxUser.nickname;
                       action
                       NewNavTabPickerStore.Sex=this.state.WxUser.sex;
                       action
                       NewNavTabPickerStore.Province=this.state.WxUser.province;
                       action
                       NewNavTabPickerStore.City=this.state.WxUser.city;
                       action
                       NewNavTabPickerStore.Headimgurl=this.state.WxUser.headimgurl;
                       AsyncStorage.setItem('Landing', JSON.stringify(NewNavTabPickerStore.Landing), (error, result) => {
                            if (!error) {
                                console.log('保存成功1')
                            }
                        });
                        AsyncStorage.setItem('Name', JSON.stringify(NewNavTabPickerStore.Name), (error, result) => {
                            if (!error) {
                                console.log('保存成功2')
                            }
                        });
                        AsyncStorage.setItem('Sex', JSON.stringify(NewNavTabPickerStore.Sex), (error, result) => {
                            if (!error) {
                                console.log('保存成功3')
                            }
                        });
                       AsyncStorage.setItem('Province', JSON.stringify(NewNavTabPickerStore.Province), (error, result) => {
                            if (!error) {
                                console.log('保存成功1')
                            }
                        });
                        AsyncStorage.setItem('City', JSON.stringify(NewNavTabPickerStore.City), (error, result) => {
                            if (!error) {
                                console.log('保存成功2')
                            }
                        });
                        AsyncStorage.setItem('Headimgurl', JSON.stringify(NewNavTabPickerStore.Headimgurl), (error, result) => {
                            if (!error) {
                                console.log('保存成功3')
                            }
                        });
                       Toast.message('微信登陆成功,欢迎使用爆了么')
                       return userApi
                   })
                 })
                 .then((userApi)=>{
                    this.fetchWxPost(this.WxLoginApi)
                 })
               .catch(err => {
                 console.log('登录授权发生错误：', err.message, [
                   {text: '确定'}
                 ]);
               })
           } else {
             Platform.OS == 'ios' ?
               alert('没有安装微信', '是否安装微信？', [
                 {text: '取消'},
                 {text: '确定', onPress: () => this.installWechat()}
               ]) :
               alert('没有安装微信', '请先安装微信客户端在进行登录', [
                 {text: '确定'}
               ])
           }
         })
    }


  render() {
    const {goBack,navigate}=this.props.navigation;
    const {Phone,PassWord}=this.state;
    return (
      <View style={styles.View}>
          <TouchableOpacity
              onPress={()=>goBack()}>
              <Image
              style={styles.Image1}
              source={require('../../../Icons/shutDown.png')}
              />
          </TouchableOpacity>
          <View
              style={styles.Image2View}>
            <Image
              style={styles.Image2}
              source={require('../../../Icons/logo.png')}
            />
          </View>
          {/*<Image*/}
              {/*style={styles.Image3}*/}
              {/*source={require('../../../Icons/logo.png')}*/}
          {/*/>*/}
          <View style={styles.View1}>
              <Image
              style={styles.Image4}
              source={require('../../../Icons/phone.png')}
              />
              <TextInput
                  style={styles.TextInput}
                  onChangeText={(Phone)=>this.setState({Phone:Phone})}
                  value={this.state.Phone}
                  placeholder="请输入手机号"
                  autoCapitalize={'none'}
                  keyboardType={'numeric'}
                  maxLength={11}
              />
          </View>

          <View style={styles.View2}>

              {
                PassWord.length<6
                ?
                <Image
                    style={styles.Image5}
                    source={require('../../../Icons/passWord.png')}
                />
                :
                <Image
                    style={styles.Image5}
                    source={require('../../../Icons/passWordRed.png')}
                />
              }
              <TextInput
                  style={styles.TextInput}
                  onChangeText={(PassWord)=>this.setState({PassWord:PassWord})}
                  value={this.state.PassWord}
                  placeholder="请输入密码"
                  autoCapitalize={'none'}
                  maxLength={10}
                  secureTextEntry={this.state.secureTextEntry}
              />
               <TouchableOpacity onPress={this.ChangeSecureTextEntry}
                                 style={styles.Image6View}
               >
                   {
                     this.state.secureTextEntry
                     ?
                         <Image
                             source={require('../../../Icons/Down.png')}
                             style={styles.Image6}
                         />
                     :
                         <Image
                             source={require('../../../Icons/See.png')}
                             style={styles.Image6}
                         />
                   }
               </TouchableOpacity>
          </View>

          {
            this.state.Phone.length<11||PassWord.length<6
            ?
                <View style={styles.landingbuttonNo}
                    disabled={true}
                >
                    <View
                        style={styles.Text7View}
                    >
                        <Text
                            style={styles.Text8}>登陆</Text>
                    </View>
                </View>

            :
                <View
                    style={styles.landingbuttonYes}
                    disabled={true}
                >
                    <TouchableOpacity
                        onPress={()=>{
                            this.fetchPost(this.ApiPost)
                            }
                        }
                        style={styles.Text7View}
                    >
                        <Text
                            style={styles.Text8}>登陆</Text>
                    </TouchableOpacity>
                </View>
          }

          <TouchableOpacity
              style={styles.WeiXinLandingView}
          >
              <TouchableOpacity
                  style={styles.WeiXinLanding}
                  onPress={()=>{
                    this.WxLogin()
                  }}
              >
                  <Image
                      source={require('../../../Icons/WeiXin.png')}
                      style={styles.Image7}
                  />
                  <Text style={styles.Text9}>微信登陆</Text>
              </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.DownTextView}>
              <TouchableOpacity
                  onPress={()=>navigate('RegisteredPage',{
                    title:'注册'
                  })}>
                  <Text style={styles.DownText1}>注册</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text style={styles.DownText2}>没有密码/忘记密码</Text>
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
    Image1:{
        width:20,
        height:20,
        marginLeft:20,
        marginTop:40,
    },
    Image2View:{
        width:'100%',
        alignItems:'center',
        position:'absolute',
        top:80,
    },
    Image2:{
        width:140,
        height:140,
    },
    Image3:{
        width:60,
        height:60,
        position:'absolute',
        right:10,
        top:50,
    },
    View1:{
        width:'73%',
        position:'absolute',
        left:'15%',
        top:230,
    },
    Image4:{
        width:25,
        height:25,
        position:'absolute',
        left:'-10%',
        top:10,
    },
    View2:{
        width:'73%',
        position:'absolute',
        left:'15%',
        top:290,
    },
    Image5:{
        width:25,
        height:25,
        position:'absolute',
        left:'-10%',
        top:10,
    },
    Image6View:{
        position:'absolute',
        top:10,
        right:10,
    },
    Image6:{
        width:25,
        height:25,
    },
    landingbuttonYes:{
        width:'70%',
        marginLeft:'15%',
        borderRadius:20,
        height:35,
        backgroundColor:'red',
        position:'absolute',
        top:370,
    },
    landingbuttonNo:{
        width:'70%',
        marginLeft:'15%',
        borderRadius:20,
        height:35,
        backgroundColor:'gainsboro',
        position:'absolute',
        top:370,
    },
    Text7View:{
        alignItems:'center',
        marginTop:7,
    },
    Text8:{
        color:'#FFF'
    },
    WeiXinLandingView:{
        width:'70%',
        marginLeft:'15%',
        borderRadius:20,
        height:35,
        backgroundColor:'darkorange',
        position:'absolute',
        top:430,
    },
    WeiXinLanding:{
        flexDirection:'row',
        marginLeft:'31%',
        marginTop:8,
    },
    Image7:{
        width:25,
        height:25,
        marginRight:'5%',
        marginTop:-3,
    },
    Text9:{
        color:'#FFF'
    },
    DownTextView:{
        width:'100%',
        height:30,
        flexDirection:'row',
        position:'absolute',
        top:500,
        justifyContent:'space-around'
    },
    DownText1:{
        textDecorationLine:'underline'
    },
});

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
        .catch((error) => {
            console.error(error);
        })
        this.setState({Landing:json},()=>{
            console.log(this.state.Landing,`phone=${this.state.Phone}&password=${this.state.PassWord}`)
            setTimeout(()=>{
                if(this.state.Landing._55.status=='success'){
                    this.props.navigation.navigate('MyTab')
                }else{
                    alert('注册失败,请检查一下')
                }
            },3000)
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
                   })
                 }
               )
               .catch(err => {
                 alert('登录授权发生错误：', err.message, [
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

    WxShareSessionText=()=>{
        //判断微信是否安装
        WeChat.isWXAppInstalled()
        .then((isInstalled)=>{
            if(isInstalled){
                //发送微信测试文本
                WeChat.shareToSession({
                    type: 'text',
                    description: '测试发给微信好友的分享文本'
                })
                .catch((error) => {
                    console.log(error.message);
                })
            }
            else{
                alert('没有安装微信软件，请您安装微信之后再试')
            }
        })
    }
    WxShareSessionImage=()=>{
        //判断微信是否安装
        WeChat.isWXAppInstalled()
        .then((isInstalled)=>{
            if(isInstalled){
                //发送微信测试文本
                WeChat.shareToSession({
                  type: 'imageUrl',
                  title: 'web image',
                  description: 'share web image to time line',
                  mediaTagName: 'email signature',
                  messageAction: undefined,
                  messageExt: undefined,
                  imageUrl: 'https://assets-cdn.github.com/images/modules/profile/profile-first-issue.png'
                })
                .catch((error) => {
                    console.log(error.message);
                })
            }
            else{
                alert('没有安装微信软件，请您安装微信之后再试')
            }
        })
    }
    WxShareLineText=()=>{
        //判断微信是否安装
        WeChat.isWXAppInstalled()
        .then((isInstalled)=>{
            if(isInstalled){
                //发送微信测试文本
                 WeChat.shareToTimeline({
                    type: 'text',
                    description: '测试发给微信好友的分享文本'
                 }).then((success)=>{
                     console.log(success)
                 }).catch((error)=>{
                     console.log(error)
                 })
            }
            else{
                alert('没有安装微信软件，请您安装微信之后再试')
            }
        })
    }
    WxShareLineImage=()=>{
        //判断微信是否安装
        WeChat.isWXAppInstalled()
        .then((isInstalled)=>{
            if(isInstalled){
                //发送微信测试文本
                 WeChat.shareToTimeline({
                     type: 'imageUrl',
                     title: 'web image',
                     description: 'share web image to time line',
                     mediaTagName: 'email signature',
                     messageAction: undefined,
                     messageExt: undefined,
                     imageUrl: 'https://assets-cdn.github.com/images/modules/profile/profile-first-issue.png'
                 }).then((success)=>{
                     console.log(success)
                 }).catch((error)=>{
                     console.log(error)
                 })
            }
            else{
                alert('没有安装微信软件，请您安装微信之后再试')
            }
        })
    }
    componentDidMount (){
      WeChat.registerApp('wx21b8979660c07d7e');
    }

    // 增加
    createData(key,value) {
        AsyncStorage.setItem(key, JSON.stringify(value), (error, result) => {
            if (!error) {
                this.setState({
                    data:'保存成功!'
                })
            }
        });
    }
    // 查询
    inquireData(key) {
        AsyncStorage.getItem(key)
            .then((value) => {
                let jsonValue = JSON.parse((value));

                this.setState({
                    data:jsonValue
                })
            })
    }
     // 删除
    removeData(key) {
        AsyncStorage.removeItem(key);

        this.setState({
            data:'删除完成!'
        })
    }

    fetchWxPost=async(ApiPost)=>{
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
            this.setState({
                WxRegisteredStatus:json,
            },()=>{
                if(this.state.WxRegisteredStatus.status==='success'){
                    this.props.navigation.navigate('MyTab')
                }else{
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
  render() {
    const {goBack,navigate}=this.props.navigation;
    const {Phone,PassWord}=this.state;
    return (
      <View style={styles.View}>
          <TouchableOpacity
              onPress={()=>goBack()}>
              <Images
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
                    this.WxLogin(),
                    this.fetchWxPost(this.WxLoginApi)
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
          {/*<TouchableOpacity*/}
              {/*onPress={()=>this.createData('name','李观汉')}*/}
          {/*>*/}
              {/*<Text>增加数据</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity*/}
              {/*onPress={()=>this.inquireData('name')}*/}
          {/*>*/}
              {/*<Text>查询数据</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity*/}
              {/*onPress={()=>this.removeData('name')}*/}
          {/*>*/}
              {/*<Text>删除数据</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<Text>{this.state.data}</Text>*/}
          {/*<TouchableOpacity*/}
              {/*onPress={this.WxShareSessionText}*/}
          {/*>*/}
              {/*<Text>测试微信分享文字到个人</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity*/}
              {/*onPress={this.WxShareSessionImage}*/}
          {/*>*/}
              {/*<Text>测试微信分享图片到个人</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity*/}
              {/*onPress={this.WxShareLineText}*/}
          {/*>*/}
              {/*<Text>测试微信分享文字到朋友圈</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity*/}
              {/*onPress={this.WxShareLineImage}*/}
          {/*>*/}
              {/*<Text>测试微信分享图片到朋友圈</Text>*/}
          {/*</TouchableOpacity>*/}
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

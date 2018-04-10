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
 *     2018/3/19.
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
  Clipboard,
  Animated,
  Easing,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { Container, Content,Form,Label, Item, Input, Icon } from 'native-base';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import PublicGoBack from '../../PublicComponent/PublicGoBack'
import Checkbox from 'teaset/components/Checkbox/Checkbox';
import fetchJosn from '../../Fetch/FetchJson'
import Toast from 'teaset/components/Toast/Toast';
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'





@observer
export default class WxRegisteredPage extends PureComponent{
    state={
        secureTextEntry:false,
        textFromClipboard:'',
        checked:false,
        ImageHidden:false,
        PhoneText:'',
        PassWordText:'',
        registereduser:'',
        registeredInviteCode:'',
        Registered:[],
        WxCode:'',
        WxGetCode:'',
        WxBind:'',
    }
    @observable VerificationStates='';
    @observable VerificationMessage='';
    @observable VerificationCode='';

    WxGetCodeApi='http://111.230.254.117:8000/bind_wechat_getCode'
    ChangeSecureTextEntry=()=>{
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
        })
    }

    pasteFromClipboard() {
      Clipboard.getString().then(
        (textFromClipboard) => {
          this.setState({
            textFromClipboard:textFromClipboard
          })
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
    }
    fetchGetCodePost=async(Api)=>{
        const json =await fetch(Api,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:`phone=${this.state.PhoneText}`,
        })
        .then((response) => response.text())
        .then((responseText) => {
            const json = JSON.parse(responseText);
            return json;
        })
        .then((json)=>{
            console.log(json)
            this.setState({
                WxGetCode:json
            },()=>{
                Toast.message(this.state.WxGetCode.message)
                if(json.status=='1'){
                    this.props.navigation.navigate('RegisteredPage',{
                        title:'请先注册账号才能绑定微信'
                    })
                }else{
                    Toast.message('请留意你的验证码')
                }
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
    fetchWxBindPost=async()=>{
       const json =await fetchJosn(`http://111.230.254.117:8000/bind_wechat?phone=${this.state.PhoneText}&openid=${this.props.navigation.state.params.openid}&unionid=${this.props.navigation.state.params.unionid}&headimgurl=${this.props.navigation.state.params.headimgurl}&nickname=${this.props.navigation.state.params.nickname}&code_bind_wechat=${this.state.WxGetCode.code}`)
       InteractionManager.runAfterInteractions(()=>{
           this.setState({
               WxBind: json,
           },()=>{
               Toast.message(this.state.WxBind.message)
               if(this.state.WxBind.status='success'){
                   action
                   NewNavTabPickerStore.Landing=true;
                   action
                   NewNavTabPickerStore.Phone=this.state.PhoneText;
                   action
                   NewNavTabPickerStore.Code=this.state.WxBind.code;
                   action
                   NewNavTabPickerStore.WxBind=true;
                   AsyncStorage.setItem('Landing', JSON.stringify(NewNavTabPickerStore.Landing), (error, result) => {
                           if (!error) {
                               console.log('保存成功1')
                           }
                   });
                   AsyncStorage.setItem('Phone', JSON.stringify(NewNavTabPickerStore.Phone), (error, result) => {
                           if (!error) {
                               console.log('保存成功2')
                           }
                   });
                   AsyncStorage.setItem('WxBind', JSON.stringify(NewNavTabPickerStore.WxBind), (error, result) => {
                           if (!error) {
                               console.log('保存成功3')
                           }
                   });
                   AsyncStorage.setItem('Code', JSON.stringify(NewNavTabPickerStore.Code), (error, result) => {
                           if (!error) {
                               console.log('保存成功3')
                           }
                   });
                   action
                    NewNavTabPickerStore.Type=this.state.WxBind.type;
                    AsyncStorage.setItem('Type', JSON.stringify(NewNavTabPickerStore.Type), (error, result) => {
                        if (!error) {
                            console.log('保存成功5')
                        }
                    });
                   this.props.navigation.navigate('MyTab')
               }else {
                   Toast.message(json.status)
               }
           })
       })
    }


  render() {
    const {state,goBack,navigate}=this.props.navigation;
    const {
        ImageHidden,
        PhoneText,
        WxCode
    }=this.state;
    return (
      <Container
          style={styles.View}
      >
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />
        <Content
            style={styles.SmallView}
            showsVerticalScrollIndicator={false}
        >
            <Form>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入手机号</Text> </Label>
                    <Icon active name='ios-phone-portrait' />
                    <Input
                        keyboardType='numeric'
                        maxLength={11}
                        onChangeText={(text) => {
                            this.setState({PhoneText:text})
                        }}
                        value={this.state.PhoneText}
                    />
                </Item>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入验证码</Text> </Label>
                    <Icon active name='ios-unlock' />
                    <Input
                        keyboardType='numeric'
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            this.setState({WxCode:text})
                        }}
                        value={this.state.WxCode}
                        maxLength={6}
                    />
                </Item>
                <TouchableOpacity
                    style={styles.redView2}
                    onPress={()=>{
                        this.fetchGetCodePost(this.WxGetCodeApi)
                    }}
                >
                    <Text style={styles.redText}>获取验证码</Text>
                </TouchableOpacity>
            </Form>
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
            <View style={styles.CheckBoxView}>
                <TouchableOpacity
                    style={styles.ImageView}
                    onPress={()=>{
                        this.setState({
                            ImageHidden:!this.state.ImageHidden
                        })
                    }}
                >
                    {
                        this.state.ImageHidden
                        ?
                            <Image
                                source={require('../../../Icons/BlackYes.png')}
                                style={styles.YesImage}
                            />
                        :
                            <View></View>
                    }
                </TouchableOpacity>
                <Text style={styles.Text1}>*同意
                    <Text style={styles.Text2}> &lt;&lt;爆了么App用户协议&gt;&gt; </Text>
                </Text>
            </View>

            {
                ImageHidden&&PhoneText.length===11&&WxCode.length===6
                ?
                <View style={styles.TextView3}>
                    <TouchableOpacity
                        style={styles.TextView5}
                        onPress={()=>{
                            this.fetchWxBindPost()
                            }
                        }
                    >
                        <Text style={styles.Text3}>立即绑定</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.TextView3}>
                    <View style={styles.TextView4}>
                        <Text style={styles.Text3}>立即绑定</Text>
                    </View>
                </View>
            }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#FFF'
    },
    SmallView:{
        marginLeft:40,
        marginRight:40,
        marginTop:30,
        height:350,
    },
    Icon2:{
        marginLeft:-5,
    },
    LabelText:{
        fontSize:14,
        color:'gray',
    },
    Image6View:{
        position:'absolute',
        top:235,
        right:10,
    },
    Image6:{
        width:25,
        height:25,
    },
    redView1:{
        width:100,
        height:25,
        borderWidth:1,
        borderColor:'red',
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:10,
        top:100,
    },
    redView2:{
        width:100,
        height:25,
        borderWidth:1,
        borderColor:'red',
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:10,
        top:95,
    },
    redText:{
        color:'red'
    },
    TextView:{
        height:30,
        width:200,
        backgroundColor:'#000'
    },
    Text1:{
        color:'#000'
    },
    Text2:{
        color:'red',
        marginLeft:20,
    },
    CheckBoxView:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30,
        marginLeft:10,
    },
    ImageView:{
        width:15,
        height:15,
        borderRadius:2,
        borderWidth:1,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        marginTop:3,
        marginRight:5,
    },
    YesImage:{
        width:15,
        height:15
    },
    TextView3:{
        alignItems:'center',
        marginLeft:15,
    },
    TextView4:{
        alignItems:'center',
        width:'100%',
        height:35,
        borderRadius:20,
        backgroundColor:'lightgrey',
        marginTop:15,
        justifyContent:'center'
    },
    Text3:{
        color:'#FFF'
    },
    TextView5:{
        alignItems:'center',
        width:'100%',
        height:35,
        borderRadius:20,
        backgroundColor:'red',
        marginTop:15,
        justifyContent:'center'
    }
});

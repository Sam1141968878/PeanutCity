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
} from 'react-native';
import { Container, Content,Form,Label, Item, Input, Icon } from 'native-base';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
import Checkbox from 'teaset/components/Checkbox/Checkbox';
export default class RegisteredPage extends PureComponent{
    state={
        secureTextEntry:false,
        textFromClipboard:'',
        checked:false,
        ImageHidden:false,
        Phone:false,
    }
    ChangeSecureTextEntry=()=>{
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
        })
    }

    //从剪贴板中读取字符串
    pasteFromClipboard() {
      Clipboard.getString().then(
        (textFromClipboard) => {
          this.setState({
            textFromClipboard:textFromClipboard
          })
        }
      ).catch(
        (error) => {
          console.log("从剪贴板中读取数据错误!");
          console.log(error);
        }
      );
    }

  render() {
    const {state,goBack}=this.props.navigation;
    const {ImageHidden}=this.state;
    return (
      <Container
          style={styles.View}>
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />
        <Content style={styles.SmallView}>
            <Form>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入手机号</Text> </Label>
                    <Icon active name='ios-phone-portrait' />
                    <Input
                        keyboardType='numeric'
                        maxLength={11}
                        onEndEditing={()=>{
                            if(this.value.length===11){
                                this.setState({
                                    Phone:true
                                })
                            }else{
                                console.log(this.state.Phone)
                            }
                        }}
                    />
                </Item>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入邀请码</Text> </Label>
                    <Icon active name='md-person-add' style={styles.Icon2}/>
                    <Input
                        autoCapitalize='none'
                        value={this.state.textFromClipboard}
                        onChange={(text)=>this.setState({
                            textFromClipboard:text
                        })}
                        maxLength={6}
                    />
                </Item>
                    <TouchableOpacity style={styles.redView1}
                          onPress={this.pasteFromClipboard.bind(this)}
                    >
                        <Text style={styles.redText}>粘贴邀请码</Text>
                    </TouchableOpacity>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入验证码</Text> </Label>
                    <Icon active name='ios-unlock' />
                    <Input
                        keyboardType='numeric'
                        autoCapitalize='none'
                    />
                </Item>
                <View style={styles.redView2}>
                    <Text style={styles.redText}>获取验证码</Text>
                </View>
                <Item floatingLabel>
                    <Icon active name='key'/>
                    <Label><Text style={styles.LabelText}>请输入6~32位密码</Text> </Label>
                    <Input
                        maxLength={32}
                        secureTextEntry={this.state.secureTextEntry}
                        autoCapitalize='none'
                    />
                </Item>
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
                    onPress={()=>this.setState({
                        ImageHidden:!this.state.ImageHidden
                    })}
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
                    <Text style={styles.Text2}> &lt;&lt;花生日记App用户协议&gt;&gt; </Text>
                </Text>
            </View>

            {
                ImageHidden
                ?
                <View style={styles.TextView3}>
                    <View style={styles.TextView5}>
                        <Text style={styles.Text3}>立即注册</Text>
                    </View>
                </View>
                :
                <View style={styles.TextView3}>
                    <View style={styles.TextView4}>
                        <Text style={styles.Text3}>立即注册</Text>
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
        top:165,
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

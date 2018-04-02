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

const Api='http://111.230.254.117:8000/command?num_iid='
export default class CommissionPage extends PureComponent{
  state={
    text:this.props.navigation.state.params.Title,
    movies:[],
  }
  id=this.props.navigation.state.params.id
  fetchData = async () => {
    const json = await fetchJson(`${Api}${this.id}&phone=1`);
      this.setState({
             movies: json,
      })
  }
  componentDidMount() {
      this.fetchData();
  }
  _setClipboardContent(){
    Clipboard.setString(this.state.movies.data);
    Toast.message('爆了么:复制成功')
  }
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    const {id, Price, OrgPrice, BigImage,Title}=this.props.navigation.state.params;
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
                      <Text style={styles.Text1}>奖励佣金预估:￥ 10</Text>
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
                        value={this.state.text}
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
                                style={{color:'#FFF'}}>复制淘口令</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button2}>
                            <Text
                                style={{color:'#FFF'}}>分享图片</Text>
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

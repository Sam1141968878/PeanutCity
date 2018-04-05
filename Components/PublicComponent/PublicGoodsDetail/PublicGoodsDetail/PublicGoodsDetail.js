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
 *     2018/3/8.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  ScrollView,
  Image,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';


import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
} from 'native-base';

import fetchJson from '../../../Fetch/FetchJson'
import PublicGoodsGoBack from '../../../PublicComponent/PublicGoodsGoBack'
import PublicGoodsDetailHeaderSwiper from '../PublicGoodsDetailHeader/PublicGoodsDetailHeaderSwiper'
import PublicGoodsDetailHeaderImage from '../PublicGoodsDetailHeader/PublicGoodsDetailHeaderImage'
import PublicGoodsDetailHeaderTitle from '../PublicGoodsDetailHeader/PublicGoodsDetailHeaderTitle'
import PublicGoodsDetailContent from '../PublicGoodsDetailContent/PublicGoodsDetailContent'
import PublicGoodsDetailFooter from '../PublicGoodsDetailFooter/PublicGoodsDetailFooter'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewNavTabPickerStore from '../../../../Store/NavTabPickerStore'

const Api='http://111.230.254.117:8000/detail?table=dataoke&GoodsID='
@observer
export default class PublicGoodsDetail extends PureComponent{
    state={
        movies:[],
        BigImage:'',
        Title:'',
        Price:'',
        OrgPrice:'',
        QuanLink:'',
        SalesNum:'',
        QuanPrice:'',
        Description:'',
        IsTamll:'',
        Guess:'',
        introduce:'',
    }
    id=this.props.navigation.state.params.id
    fetchData = async (api) => {
      const json = await fetchJson(api);
        this.setState({
               movies: json,
               BigImage:json.UrlPicture,
               Title:json.title,
               Price:json.PriceAfterZK,
               OrgPrice:json.PriceBeforeZK,
               SalesNum:json.NumSale,
               QuanPrice:json.PriceZK,
               Description:json.description,
               Guess:json.guess,
               introduce:json.introduce,
               IsTamll:json.IsTmall,
        })
        console.log(json)
    }
    componentDidMount() {
        this.fetchData(`${Api}${this.id}`);
    }
  render() {
    const{BigImage,
          Title,
          Price,
          OrgPrice,
          SalesNum,
          QuanPrice,
          IsTamll,
          Description,
          introduce,
          Guess
    }=this.state
    const {state,goBack,navigate}=this.props.navigation
    return (
        <Container>
          {
            BigImage
            ?
                <Container style={styles.View}>
                    <Content showsVerticalScrollIndicator={false}>
                        <PublicGoodsGoBack
                            goBack={()=>goBack()}
                        />
                        {/*<PublicGoodsDetailHeaderSwiper/>*/}
                        <PublicGoodsDetailHeaderImage BigImage={BigImage}/>
                        <PublicGoodsDetailHeaderTitle
                            Title={Title}
                            Price={Price}
                            OrgPrice={OrgPrice}
                            SalesNum={SalesNum}
                            QuanPrice={QuanPrice}
                            IsTamll={IsTamll}
                        />
                        <PublicGoodsDetailContent Description={Description}/>
                        <PublicGoodsDetailFooter navigate={navigate}/>
                    </Content>
                    <Footer>
                        {
                            NewNavTabPickerStore.Landing
                            ?
                                <FooterTab>
                                  <TouchableOpacity
                                      style={{
                                      backgroundColor:'#FFF',
                                      justifyContent:'center',
                                      alignItems:'center',
                                      width:'20%',
                                      height:55
                                      }}
                                      onPress={()=>navigate('LandingPage',{
                                      })}
                                  >
                                    <Image
                                      source={require('../../../../Icons/Stars.png')}
                                      style={{width:25,height:25}}
                                    />
                                    <Text>收藏</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={{
                                      backgroundColor:'mistyrose',
                                      width:'50%',height:55,
                                      justifyContent:'center',
                                      alignItems:'center'
                                      }}
                                      onPress={()=>navigate('CommissionPage',{
                                          title:'创建分享',
                                          Title:Title,
                                          id:this.id,
                                          Price:Price,
                                          OrgPrice:OrgPrice,
                                          BigImage:BigImage,
                                          Guess:Guess,
                                          introduce:introduce,
                                      })}
                                  >
                                    <Text
                                        style={styles.Text1}>佣金￥{Guess}</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={{
                                      backgroundColor:'red',
                                      width:'30%',
                                      height:55,
                                      justifyContent:'center',
                                      alignItems:'center'
                                      }}
                                      onPress={()=>navigate('RobStampsPage',{
                                          id:this.id
                                      })}
                                  >
                                      <Text style={styles.Text2}>抢券 ￥ <Text style={styles.Text3}>{QuanPrice}</Text> </Text>
                                  </TouchableOpacity>
                                </FooterTab>
                            :
                                <FooterTab>
                                  <TouchableOpacity
                                      style={{
                                      backgroundColor:'#FFF',
                                      justifyContent:'center',
                                      alignItems:'center',
                                      width:'20%',
                                      height:55
                                      }}
                                      onPress={()=>navigate('LandingPage',{
                                      })}
                                  >
                                    <Image
                                      source={require('../../../../Icons/Stars.png')}
                                      style={{width:25,height:25}}
                                    />
                                    <Text>收藏</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={{
                                      backgroundColor:'mistyrose',
                                      width:'50%',height:55,
                                      justifyContent:'center',
                                      alignItems:'center'
                                      }}
                                      onPress={()=>navigate('LandingPage',{
                                          title:'创建分享',
                                          Title:Title,
                                          id:this.id,
                                          Price:Price,
                                          OrgPrice:OrgPrice,
                                          BigImage:BigImage,
                                          Guess:Guess,
                                          introduce:introduce,
                                      })}
                                  >
                                    <Text
                                        style={styles.Text1}>佣金￥{Guess}</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={{
                                      backgroundColor:'red',
                                      width:'30%',
                                      height:55,
                                      justifyContent:'center',
                                      alignItems:'center'
                                      }}
                                      onPress={()=>navigate('LandingPage',{
                                          id:this.id
                                      })}
                                  >
                                      <Text style={styles.Text2}>抢券 ￥ <Text style={styles.Text3}>{QuanPrice}</Text> </Text>
                                  </TouchableOpacity>
                                </FooterTab>
                        }

                    </Footer>
                </Container>
            :
            <ActivityIndicator/>
          }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#FFF',
    },
    Text1:{
        color:'red',
        fontSize:18,
    },
    Text2:{
        color:'#FFF',
        fontSize:14,
    },
    Text3:{
        color:'#FFF',
        fontSize:20,
    },
    HeaderView:{
        backgroundColor:'rgba(255,255,255,0)'
    }
});

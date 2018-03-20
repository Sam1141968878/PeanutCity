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


const Api='http://111.230.254.117:8000/detail?GoodsID='
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
        IsTmall:'',
    }
    GoodsID=this.props.navigation.state.params.GoodsID
    fetchData = async () => {
      const json = await fetchJson(`${Api}${this.GoodsID}`);
      InteractionManager.runAfterInteractions(()=>{
           this.setState({
                  movies: json,
                  BigImage:json.Pic,
                  Title:json.Title,
                  Price:json.Price,
                  OrgPrice:json.Org_Price,
                  QuanLink:json.Quan_link,
                  SalesNum:json.Sales_num,
                  QuanPrice:json.Quan_price,
                  IsTmall:json.IsTmall,
           })
      })
    }
    componentDidMount() {
      InteractionManager.runAfterInteractions(()=>{
          this.fetchData();
      })
    }
  render() {
    const{BigImage,
          Title,
          Price,
          OrgPrice,
          QuanLink,
          SalesNum,
          QuanPrice,
          IsTmall,
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
                            IsTmall={IsTmall}
                        />
                        <PublicGoodsDetailContent/>
                        <PublicGoodsDetailFooter navigate={navigate}/>
                    </Content>
                    <Footer>
                      <FooterTab>
                        <Button
                            style={{backgroundColor:'#FFF',marginLeft:-50}}
                            onPress={()=>navigate('LandingPage',{
                            })}
                        >
                          <Image
                            source={require('../../../../Icons/Stars.png')}
                            style={{width:25,height:25,marginLeft:50}}
                          />
                          <Text style={{marginLeft:50}}>收藏</Text>
                        </Button>
                        <Button
                            style={{backgroundColor:'peachpuff',width:200,height:55}}
                            onPress={()=>navigate('LandingPage',{
                            })}
                        >
                          <Text
                              style={styles.Text1}>分享宝贝</Text>
                        </Button>
                        <Button
                            style={{backgroundColor:'red',width:100,height:55}}
                            onPress={()=>navigate('LandingPage',{
                            })}
                        >
                            <Text
                                style={styles.Text2}>抢券 $ <Text style={styles.Text3}>15</Text> </Text>
                        </Button>
                      </FooterTab>
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

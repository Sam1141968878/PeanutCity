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
  ScrollView,
  Dimensions,
  FlatList,
  BackHandler,
  ActivityIndicator,
} from 'react-native';


let SuperMemberData=[
    {
        Img:require('../../../Icons/money1.png'),
        MemberText:'自买省钱',
    },
    {
        Img:require('../../../Icons/money2.png'),
        MemberText:'分享赚钱',
    },
    {
        Img:require('../../../Icons/head.png'),
        MemberText:'月月收益',
    },
    {
        Img:require('../../../Icons/crown.png'),
        MemberText:'终身会员',
    },
    {
        Img:require('../../../Icons/cash.png'),
        MemberText:'随时提现',
    },
    {
        Img:require('../../../Icons/service.png'),
        MemberText:'专属客服',
    }
]

let BabyData=[
    {
        Img:require('../../../Icons/share.png'),
        MembersText:'分享宝贝'
    },
    {
        Img:require('../../../Icons/ok.png'),
        MembersText:'好友领券下单'
    },
    {
        Img:require('../../../Icons/money3.png'),
        MembersText:'获得消费佣金'
    }
]

const {height, width} = Dimensions.get('window');
const halfWidth=width/2;

import MemberPageSmallMemberIcon from '../../../Components/Component/MemberPageComponent/MemberPageSmallMemberIcon'
import MemberPageBigMemberIcon from '../../../Components/Component/MemberPageComponent/MemberPageBigMemberIcon'
export default class MembersPage extends PureComponent{
    state={
        ready:false
    }
    static navigationOptions = {
    tabBarLabel: '超级会员',
    tabBarIcon: () => (
       <View>
            <Image
               source={require('../../../Icons/mumber-hdpi.png')}
               style={styles.icon}
            />
       </View>
      ),
    };

    componentDidMount() {
        setTimeout(()=>this.setState({
            ready:true,
        }),1000)
    }
  render() {
    return (
      <ScrollView>
          {
            this.state.ready
            ?
                <View style={styles.View}>
                    <View style={styles.Head}>
                        <View style={styles.blackView}></View>
                        <Image
                            source={require('../../../Icons/Members.png')}
                            style={styles.BigCrown}
                        />
                        <Image
                        source={require('../../../Icons/member.jpg')}
                        style={styles.MemberImage}
                        />
                        <View style={styles.line1}/>
                        <Text style={styles.TopText}>少花钱.多生钱</Text>
                        <View style={styles.line2}/>
                        <Text style={styles.SuperMember}>超级会员.专属特权</Text>
                        <View style={styles.WidthLine}/>
                        <Text style={styles.ShareText1}>邀请<Text style={styles.ShareText2}>5</Text>个新用户注册,即可申请成为超级会员</Text>
                    </View>
                    <View style={styles.whileView}>
                        <View style={styles.memberTitle}>
                            <Image
                            style={styles.quotes1}
                            source={require('../../../Icons/quotes1.png')}
                            />
                            <Text
                                style={styles.member}>超级会员六大特权</Text>
                            <Image
                                style={styles.quotes2}
                                source={require('../../../Icons/quotes2.png')}
                            />
                        </View>
                        <View style={styles.IconList}>
                            <FlatList
                                 data={SuperMemberData}
                                 keyExtractor={item=>item.Text}
                                 renderItem={
                                   ({item})=><MemberPageSmallMemberIcon
                                           MemberText={item.MemberText}
                                           Img={item.Img}
                                           />
                                 }
                                 numColumns={3}
                            />
                        </View>
                        <View style={styles.Line3}></View>
                        <View style={styles.YellowView}>
                            <View style={styles.YellowText1}>
                                <Image
                                    style={styles.quotes1}
                                    source={require('../../../Icons/quotes1.png')}
                                />
                                <Text style={styles.member}>分享宝贝赚佣金</Text>
                                <Image
                                    style={styles.quotes2}
                                    source={require('../../../Icons/quotes2.png')}
                                />
                            </View>
                            <View style={styles.BabyList}>
                                <FlatList
                                    data={BabyData}
                                    keyExtractor={item=>item.Text}
                                    renderItem={
                                      ({item})=><MemberPageBigMemberIcon
                                              MembersText={item.MembersText}
                                              Img={item.Img}
                                              />
                                    }
                                    numColumns={3}
                                />
                            </View>
                        </View>
                        <View style={styles.YellowTextView}>
                            <Text style={styles.YellowText2}>规则说明</Text>
                        </View>
                        <View style={styles.LongTextView}>
                            <Text style={styles.LongText1}>1.邀请5名新用户注册爆了么，您可申请升级为超级会员，领券购物可获得消费佣金奖励</Text>
                            <Text style={styles.LongText1}>2.消费佣金是指您或您的专属会员使用爆了么APP领券下单并确认收货后，爆了么奖励给您的佣金。</Text>
                            <Text style={styles.LongText1}>3.好友通过您的邀请码下载APP并注册成为花生会员后，Ta即永久成为您的花生会员，未来Ta领券下单时产生的消费佣金奖励收入均计入您的账户中；</Text>
                            <Text style={styles.LongText1}>4.您或您的花生会员领券下单并确认收货后，您将获得100%消费佣金；</Text>
                            <Text style={styles.LongText1}>5.当您的超级会员邀请好友使用爆了么优惠链接下单并确认收货后，Ta将获得100%消费佣金，您还将获得消费佣金的20%作为奖励；</Text>
                            <Text style={styles.LongText1}>6.当您的会员取消订单、退货退款、或者因订单异常等情况，系统将会扣除相应佣金；</Text>
                            <Text style={styles.LongText1}>7.消费佣金每月25日将结算上一个自然月确认收货的订单，未确认收货的订单将在下月25日结算，结算后的消费佣金将自动计入您的余额中，您可以通过绑定支付宝随时申请提现，申请后收益将在48小时内到账。</Text>
                        </View>
                    </View>
                </View>
            :
            <ActivityIndicator/>
          }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    icon:{
        width:20,
        height:20,
    },
    Head:{
        height:290,
    },
    blackView:{
        width:'100%',
        height:220,
        backgroundColor:'black',
        position:'absolute',
    },
    BigCrown:{
        width:50,
        height:50,
        marginLeft:'42%'
    },
    MemberImage:{
        width:290,
        height:200,
        marginLeft:'10%',
        borderRadius:10,
    },
    line1:{
        width:40,
        height:1,
        backgroundColor:'gray',
        position:'absolute',
        top:80,
        left:80,
    },
    TopText:{
        position:'absolute',
        left:140,
        top:72,
        color:'black',
    },
    line2:{
        width:40,
        height:1,
        backgroundColor:'gray',
        position:'absolute',
        top:80,
        left:245,
    },
    SuperMember:{
        fontSize:30,
        position:'absolute',
        top:110,
        left:55,
        fontWeight:'700',
        color:'black',
    },
    WidthLine:{
        height:1,
        width:250,
        backgroundColor:'#000',
        position:'absolute',
        top:180,
        left:58,
    },
    ShareText1:{
        position:'absolute',
        top:190,
        left:60,
        fontSize:13,
        color:'black'
    },
    ShareText2:{
        color:'red',
    },
    whileView:{
        marginTop:-20,
        backgroundColor:'#FFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    memberTitle:{
        flexDirection:'row',
        marginLeft:100,
        marginTop:20,
    },
    quotes1:{
        width:20,
        height:20,
    },
    quotes2:{
        width:20,
        height:20,
    },
    IconList:{
        marginLeft:10,
        marginTop:30,
    },
    Line3:{
        width:300,
        height:1,
        backgroundColor:'gray',
        marginLeft:30,
        marginTop:40,
    },
    YellowView:{
        width:300,
        height:150,
        backgroundColor:'moccasin',
        marginLeft:30,
        marginTop:10,
    },
    YellowText1:{
        flexDirection:'row',
        marginLeft:80,
        marginTop:20,
    },
    YellowTextView:{
        width:80,
        height:30,
        backgroundColor:'olive',
        marginLeft:140,
        marginTop:10,
    },
    YellowText2:{
        color:'#FFF',
        marginLeft:8,
        marginTop:5,
    },
    LongTextView:{
        paddingLeft:10,
        paddingRight:10,
    },
    LongText1:{
        marginTop:10,
        color:'#000',
        fontSize:13,
    }
});
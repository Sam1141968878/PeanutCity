/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/29.
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
  ScrollView,
} from 'react-native';

const ProblemList=[
    {
        Title:'问已签收的订单，为什么会失效？',
        Content:'消费者确认收货之后去申请售后进行退款，这种订单为失效订单',
    },
    {
        Title:'问为什么下单后，没有佣金？',
        Content1:'超级会员会有佣金收入，爆了么会员没有佣金，以下行为会导致下单后，没有佣金，俗称“丢单”',
        Content2:'1.买家使用了农村淘宝APP',
        Content3:'2.买家使用了一淘，集分宝',
        Content4:'3.买家使用了返利网',
        Content5:'4.买家使用了收藏夹，然后再购买',
        Content6:'5.买家使用了支付宝红包',
        Content7:'6.买家加入了购物车后，再购买（有概率）',
        Content8:'7.买家手机或被安装了一些流氓软件，劫持了PID（查验困难）',
        Content9:'8.买家网络所使用的DNS被污染，劫持了PID（查验困难）',
        Content10:'9.买家所在地区宽带服务运营商劫持了PID（查验困难）',
        Content11:'10.商家联系买家 拍另外一个没佣金链接',
        Content12:'11.买家切换了别的旺旺下单（小概率）',
        Content13:'12.买家找别的淘客转化了链接',
    },
    {
        Title:'问如果上个月没有提现，下个月可以一起提现吗？',
        Content:'可以的，只要佣金结算到余额中，可以随时提现',
    },
    {
        Title:'问为什么有时列表页显示的佣金与详情页的佣金不一致？',
        Content:'商家可随时修改佣金计划，因此佣金是不断变化的，而商品列表显示的预估分享赚是半小时更新一次的，所以佣金会有延迟，而详情页是实时查询的，按照详情页的佣金为准。',
    },
    {
        Title:'问为什么累计收益显示是0？',
        Content:'累计收益指的是每月25日系统结算过的收益，系统是每月25日结算上一个自然月内确认收货的订单产生的收益，收益会结算到余额中，用户可以随时提现。如12月结算的收益为1000元，已提现，1月结算的收益为2000元，未提现，那么累计收益为3000元。如果你是1月加入爆了么的用户，因为2月25日才结算1月的收益，所以累计收益会显示为0哦。',
    },
    {
        Title:'问为什么提现没有到账？',
        Content1:'⒈爆了么app记后台系统设置的支付宝账号跟实名信息不一致；',
        Content2:'⒉当支付宝账号是手机号，并且手机号绑定了多个支付宝，则可能会提现到其它账户上（请输入正确的支付宝账号）；',
        Content3:'⒊500元以下的提现金额，2小时内到账；',
        Content4:'⒋500元以上的提现金额，后台系统需要审核，48小时后到账。',
    },
    {
        Title:'问为什么已购买的订单没有显示？',
        Content1:'⒈买家使用了农村淘宝APP、一淘、集分宝、返利网等情况导致丢单没显示，',
        Content2:'⒉APP延迟导致没显示，一般等15分钟左右即可显示。',
    },
    {
        Title:'问为什么看到有优惠券，但是跳转到淘宝领取时显示失效？',
        Content1:'优惠券失效原因有二个：',
        Content2:'⒈优惠券已被领完；',
        Content3:'⒉商家已取消宝贝优惠券。',
    },
]
import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class ProblemPage extends PureComponent{
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <ScrollView>
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

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
 *     2018/3/15.
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
} from 'react-native';


export default class PublicGoodsDetailHeaderTitle extends PureComponent{
  render() {
    const {
           IsTmall,
           Title,
           Price,
           OrgPrice,
           SalesNum,
           QuanPrice,
           QuanLink,
           navigate
    }=this.props;
    return (
      <View style={styles.View}>
          {
            IsTmall===1
            ?
                <Image
                    style={styles.Icon}
                    source={require('../../../../Icons/TianMao.png')}
                />
            :
                <Image
                    style={styles.Icon}
                    source={require('../../../../Icons/TaoBao.png')}
                />
          }
         <View style={styles.TitleView}>
             <Text
                style={styles.Title}
                numberOfLines={2}
             >         {Title}</Text>
         </View>
         <View style={styles.sales}>
             <Text style={styles.salesText}>月销{SalesNum}</Text>
         </View>
         <View style={styles.DownText}>
             <Text  style={styles.Smallprice}>¥<Text style={styles.price}> {Price}</Text> </Text>
             {
                IsTmall===1
                ?
                <Text style={styles.TaoBaoPrice}>天猫价: ¥ {OrgPrice}</Text>
                :
                <Text style={styles.TaoBaoPrice}>淘宝价: ¥ {OrgPrice}</Text>
             }

         </View>
         <TouchableOpacity style={styles.vouchersView}
            onPress={()=>navigate('RobStampsPage',{
                id:this.id
            })}
         >
             <Image
             style={styles.Img}
             source={require('../../../../Icons/coupon.png')}
             />
             <Text style={styles.vouchersText}>券 ¥  {QuanPrice}</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        width:'100%',
        height:120,
        alignItems:'center'
    },
    TitleView:{
        height:50,
        width:'90%',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5
    },
    Icon:{
        width:20,
        height:20,
        position:'absolute',
        top:5,
        left:20,
    },
    Title:{
        fontSize:18,
        color:'#000',

    },
    sales:{
        height:20,
        marginLeft:280
    },
    salesText:{
        fontSize:14,
    },
    DownText:{
        width:'35%',
        height:30,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        position:'absolute',
        left:'5%',
        top:50,
        marginTop:20,
    },
    price:{
        fontSize:24,
        color:'red',
    },
    Smallprice:{
        fontSize:16,
        color:'red',
    },
    TaoBaoPrice:{
        fontSize:12,
    },
    vouchersView:{
        width:90,
        height:55,
        marginLeft:260,
    },
    Img:{
        width:90,
        height:50,
    },
    vouchersText:{
        color:'#FFF',
        fontSize:14,
        position:'absolute',
        right:20,
        top:15
    }
});

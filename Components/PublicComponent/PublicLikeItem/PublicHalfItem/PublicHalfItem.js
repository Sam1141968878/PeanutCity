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
  Dimensions,
} from 'react-native';


let {width,height}=Dimensions.get('window');
let Halfwidth=width/2-10;
export default class PublicHalfItem extends PureComponent{
  render() {
    const {
        Title,
        Price,
        onPress,
        BigImg,
        TaoBaoPrice,
        Sales,
        Preferential,
        IsTmalls
    }=this.props;
    return (
      <TouchableOpacity
          style={styles.View}
          onPress={onPress}
      >
        <Image
            style={styles.BigImage}
            source={{uri:BigImg}}
        />
        <View style={styles.TitleView}>
            <Image
            style={styles.Icon}
            source={require('../../../../Icons/TaoBao.png')}
            />
            <Text
                style={styles.Title}
                numberOfLines={2}
            >          {Title}</Text>
        </View>
        <View style={styles.TextView1}>
            <Text style={styles.TaoBaoPrice}>天猫价 : ￥ {TaoBaoPrice}</Text>
            <Text style={styles.Sales}>月销{Sales}</Text>
        </View>

        <View style={styles.TextView2}>
            <Text style={styles.Price}>￥ {Price}</Text>
            <View
                style={styles.SmallImageView}>
                <Image
                style={styles.SmallImage}
                source={require('../../../../Icons/preferential.png')}
                />
                <Text style={styles.Preferential}>￥{Preferential}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        width:Halfwidth,
        height:280,
        marginLeft:7,
        marginTop:5,
    },
    BigImage:{
        width:'100%',
        height:170,
    },
    TitleView:{
        flexDirection:'row',
        paddingLeft:2,
        paddingRight:2,
    },
    Icon:{
        width:20,
        height:20,
        position:'absolute',
        left:4,
    },
    Title:{
        fontSize:15,
    },
    TextView1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:2,
        paddingRight:2,
    },
    TaoBaoPrice:{
        fontSize:12,
        marginTop:5,
    },
    Sales:{
        fontSize:12,
        marginTop:5,
    },
    Price:{
        fontSize:20,
        color:'red',
        marginTop:10,
    },
    SmallImageView:{
    },
    SmallImage:{
        width:30,
        height:20,
        marginTop:10,
    },
    TextView2:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Preferential:{
        marginTop:-16,
        fontSize:10,
        marginLeft:4
    }
});

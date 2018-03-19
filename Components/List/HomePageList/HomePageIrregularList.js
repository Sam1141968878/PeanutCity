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
  Dimensions,
} from 'react-native';


import HomePageIrregularItem from '../../../Components/Item/HomePageItem/HomePageIrregularItem'
let {width,height}=Dimensions.get('window');
let halfWidth=width/2-3;
let SmallWidth=width/3-3;
export default class IrregularList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          <HomePageIrregularItem
              Text1='聚划算'
              Text2='领券更划算'
              Img={require('../../../Icons/Water.jpg')}
              ViewbackgroundColor='#FFF'
              Viewwidth={halfWidth}
              marginTop={5}
              Text1color='red'
              Text1marginLeft={10}
              Text1marginTop={10}
              Text2color='gray'
              Text2marginLeft={10}
              ImagemarginLeft={100}
              ImagemarginTop={-30}
              ImageWidth={60}
              ImageHeight={80}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'聚划算',
              })}
          />
          <HomePageIrregularItem
              Text1='限时抢购'
              Text2='领券更划算'
              Img={require('../../../Icons/Water.jpg')}
              ViewbackgroundColor='#FFF'
              Viewwidth={halfWidth}
              marginTop={5}
              Text1color='blueviolet'
              Text1marginLeft={10}
              Text1marginTop={10}
              Text2color='gray'
              Text2marginLeft={10}
              ImagemarginLeft={100}
              ImagemarginTop={-30}
              ImageWidth={60}
              ImageHeight={80}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'限时抢购',
              })}
          />
          <HomePageIrregularItem
              Text1='极有家'
              Text2='我要品质生活'
              Img={require('../../../Icons/Water.jpg')}
              ViewbackgroundColor='#FFF'
              Viewwidth={SmallWidth}
              marginTop={5}
              Text1color='gold'
              Text1marginLeft={35}
              Text1marginTop={0}
              Text2color='gray'
              Text2marginLeft={30}
              ImagemarginLeft={40}
              ImagemarginTop={10}
              ImageWidth={40}
              ImageHeight={60}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'极有家',
              })}
          />
          <HomePageIrregularItem
              Text1='视频购'
              Text2='实物更真实'
              Img={require('../../../Icons/Water.jpg')}
              ViewbackgroundColor='#FFF'
              Viewwidth={SmallWidth}
              marginTop={5}
              Text1color='cornflowerblue'
              Text1marginLeft={40}
              Text1marginTop={0}
              Text2color='gray'
              Text2marginLeft={38}
              ImagemarginLeft={40}
              ImagemarginTop={10}
              ImageWidth={40}
              ImageHeight={60}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'视频购',
              })}
          />
          <HomePageIrregularItem
              Text1='9块9包邮'
              Text2='白菜价好物'
              Img={require('../../../Icons/Water.jpg')}
              ViewbackgroundColor='#FFF'
              Viewwidth={SmallWidth}
              marginTop={5}
              Text1color='darkorange'
              Text1marginLeft={30}
              Text1marginTop={0}
              Text2color='gray'
              Text2marginLeft={35}
              ImagemarginLeft={40}
              ImagemarginTop={10}
              ImageWidth={40}
              ImageHeight={60}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'9块9包邮',
              })}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:220,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    }
});

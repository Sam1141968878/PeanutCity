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
let halfWidth=width/2-13;
let SmallWidth=width/3-10;
export default class IrregularList extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
              <HomePageIrregularItem
                  Text1='聚划算'
                  Text2='抢购好货精选'
                  Img={require('../../../Icons/half1.png')}
                  ViewbackgroundColor='#FFF'
                  Viewwidth={halfWidth}
                  marginTop={7}
                  Text1color='red'
                  Text1marginLeft={30}
                  Text1marginTop={10}
                  Text2color='palevioletred'
                  Text2marginLeft={20}
                  ImagemarginLeft={95}
                  ImagemarginTop={-30}
                  ImageWidth={60}
                  ImageHeight={80}
                  onPress={()=>navigate('PublicGoodsTabDetail',{
	                                Title:'聚划算',
                  })}
              />
              <HomePageIrregularItem
                  Text1='19.9包邮'
                  Text2='高性价比选择'
                  Img={require('../../../Icons/half2.png')}
                  ViewbackgroundColor='#FFF'
                  Viewwidth={halfWidth}
                  marginTop={7}
                  Text1color='tomato'
                  Text1marginLeft={20}
                  Text1marginTop={10}
                  Text2color='#F97E4E'
                  Text2marginLeft={18}
                  ImagemarginLeft={90}
                  ImagemarginTop={-30}
                  ImageWidth={60}
                  ImageHeight={80}
                  onPress={()=>navigate('PublicGoodsTabDetail',{
	                                Title:'限时抢购',
                  })}
              />
          <HomePageIrregularItem
              Text1='海外淘'
              Text2='海外一键下单'
              Img={require('../../../Icons/half3.png')}
              ViewbackgroundColor='#FFF'
              Viewwidth={SmallWidth}
              marginTop={7}
              Text1color='#E57A61'
              Text1marginLeft={30}
              Text1marginTop={5}
              Text2color='#F97E4E'
              Text2marginLeft={20}
              ImagemarginLeft={35}
              ImagemarginTop={10}
              ImageWidth={40}
              ImageHeight={60}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'极有家',
              })}
          />
          <HomePageIrregularItem
              Text1='聚划算'
              Text2='抢购好货精选'
              Img={require('../../../Icons/half2.png')}
              ViewbackgroundColor='#FFF'
              Viewwidth={SmallWidth}
              marginTop={7}
              Text1color='red'
              Text1marginLeft={32}
              Text1marginTop={5}
              Text2color='#F49FB5'
              Text2marginLeft={20}
              ImagemarginLeft={35}
              ImagemarginTop={10}
              ImageWidth={40}
              ImageHeight={60}
              onPress={()=>navigate('PublicGoodsTabDetail',{
	                            Title:'视频购',
              })}
          />
          <HomePageIrregularItem
              Text1='9块9包邮'
              Text2='好货低价疯抢'
              Img={require('../../../Icons/half4.png')}
              ViewbackgroundColor='#FFF'
              Viewwidth={SmallWidth}
              marginTop={7}
              Text1color='#E57A61'
              Text1marginLeft={23}
              Text1marginTop={5}
              Text2color='#F97E4E'
              Text2marginLeft={20}
              ImagemarginLeft={35}
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
        height:262,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        backgroundColor:'#f6f6f6',
        borderBottomColor:'#f6f6f6',
        borderBottomWidth:5,
        paddingLeft:4,
        paddingRight:4,
    }
});

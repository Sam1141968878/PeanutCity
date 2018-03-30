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
 *     2018/3/30.
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
  ScrollView
} from 'react-native';


const AnnouncementPageListdata=[
    {
        image:require('../../../Icons/BigImage/PromoteApp.jpg'),
        text1:'爆了么app推广的小伙伴们，针对最近发现有人使用内部优惠券进行推广，特做以下规定:',
        text2:'⒈严禁以淘宝天猫或者阿里合作方授权作为推广词。',
        text3:'⒉严禁使用淘宝内部优惠券，天猫内部优惠券作为促销语。',
        text4:'⒊推广过程中，需按照正规的规章制度进行推广，一旦发现马上责令更正。',
        text5:'⒋严重者直接撤销爆了么app使用资格。',
        time:'2017年10月22日'
    }
]
import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class AnnouncementPageList extends PureComponent{
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <ScrollView style={{flex:1,backgroundColor:'#FFF'}}>
          <PublicGoBack
              goBack={()=>goBack()}
              title={state.params.title}
          />
          <View>
              {
                AnnouncementPageListdata.map((item,index)=>
                    <TouchableOpacity
                        onPress={()=>navigate('AnnouncementPage',{
                            title:'官方公告',
                            image:item.image,
                            text1:item.text1,
                            text2:item.text2,
                            text3:item.text3,
                            text4:item.text4,
                            text5:item.text5,
                            time:item.time,
                        })}
                    >
                        <Image
                           source={item.image}
                           style={{
                            width:'98%',
                            height:160,
                            marginLeft:3,
                           }}
                           resizeMode='contain'
                        />
                    </TouchableOpacity>
                )
              }
          </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

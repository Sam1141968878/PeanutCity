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


import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class AnnouncementPage extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation;
    const {
        image,
        text1,
        text2,
        text3,
        text4,
        text5,
        time,
    }=this.props.navigation.state.params;
    return (
      <ScrollView
          style={{flex:1,backgroundColor:'#fff',paddingLeft:10,paddingRight:10}}>
          <PublicGoBack
              goBack={()=>goBack()}
              title={state.params.title}
          />
          <Image
             source={image}
             style={{
              width:'98%',
              height:160,
              marginLeft:3,
              marginTop:10,
              marginBottom:10,
             }}
             resizeMode='contain'
          />
          <View style={styles.TextView}>
              <Text style={styles.Text}>{text1}</Text>
              <Text style={styles.Text}>{text2}</Text>
              <Text style={styles.Text}>{text3}</Text>
              <Text style={styles.Text}>{text4}</Text>
              <Text style={styles.Text}>{text5}</Text>
              <Text style={styles.Text}>{time}</Text>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    Text:{
        color:'#000',
        lineHeight:30,
        paddingLeft:5,
        paddingRight:5,
    }
});

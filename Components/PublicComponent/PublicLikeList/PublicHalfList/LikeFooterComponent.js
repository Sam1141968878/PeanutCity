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
 *     2018/4/10.
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


export default class LikeFooterComponent extends PureComponent{
  render() {
    return (
      <View
          style={{
            alignItems:'center',
            marginBottom:10,
            marginTop:5,
          }}>
          {
            this.props.end
            ?
                <Text
                style={{fontSize:12,color:'#000'}}>到底了,先看看其他宝贝吧</Text>
            :
                <View></View>
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({

});

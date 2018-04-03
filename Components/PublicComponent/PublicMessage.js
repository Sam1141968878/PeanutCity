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
  TouchableOpacity,
} from 'react-native';


import Badge from 'teaset/components/Badge/Badge';
export default class Message extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <TouchableOpacity
          style={{position:'absolute',
          top:this.props.top,
          right:this.props.right,
          height:50,
          }}
          onPress={()=>navigate(this.props.GoTo)}
      >
          <Image
              source={require('../../Icons/Message.png')}
              style={styles.Image}
          />
          <Badge
            type='dot'
            style={{
                marginTop:-20,
                backgroundColor:this.props.backgroundColor
            }}
          />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    Image:{
        width:25,
        height:25,
    },
});

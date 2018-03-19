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
 *     2018/3/12.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
  TouchableOpacity
} from 'react-native';


export default class SetUp extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <TouchableOpacity
          style={{position:'absolute',
                  top:this.props.top,
                  right:this.props.right}}
          onPress={()=>navigate('LandingPage')}
      >
          <Image
              source={require('../../../Icons/setUp.png')}
              style={styles.Img}
          />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    Img:{
        width:25,
        height:25,
    }
});

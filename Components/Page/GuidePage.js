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
 *     2018/3/7.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';


let {width,height}=Dimensions.get('window');
export default class GuidePage extends PureComponent{
    state={
        hidden:false
    }
    hidden=()=>{
        this.setState({
            hidden:true
        })
    }
  render() {
    return (
      <TouchableOpacity
          onPress={this.hidden}>

          {
            this.state.hidden
            ?
            <Image
                source={require('../../../Icons/Guide.jpg')}
                style={{display:'none'}}
            />
            :
            <Image
                source={require('../../../Icons/Guide.jpg')}
                style={styles.GuideImage}
            />
          }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    GuideImage:{
        width:width,
        height:height,
        zIndex:99,
    }
});

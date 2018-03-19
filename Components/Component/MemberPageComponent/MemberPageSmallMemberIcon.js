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
 *     2018/3/9.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
} from 'react-native';


export default class SmallMemberIcon extends PureComponent{
  render() {
    const {Img,MemberText}=this.props;
    return (
      <View style={styles.View}>
          <View style={styles.SmallMemberImageView}>
              <Image
                style={styles.Img}
                source={Img}
              />
          </View>
          <Text style={styles.Text}>{MemberText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        width:80,
        height:100,
        marginLeft:29,
    },
    SmallMemberImageView:{
        borderWidth:2,
        borderColor:'gold',
        width:55,
        height:55,
        marginLeft:4,
        borderRadius:33,
    },
    Img:{
        width:40,
        height:40,
        marginLeft:6,
        marginTop:6,
    },
    Text:{
        fontSize:12,
        marginTop:10,
        marginLeft:10,
    }
});

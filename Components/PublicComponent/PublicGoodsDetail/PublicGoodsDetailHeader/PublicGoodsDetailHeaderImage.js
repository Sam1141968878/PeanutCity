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
 *     2018/3/16.
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
  ActivityIndicator,
  StatusBar
} from 'react-native';

export default class PublicGoodsDetailHeaderImage extends PureComponent{
  render() {
    const {BigImage}=this.props;
    return (
      <View>
          {
            BigImage
            ?
                <View>
                    <StatusBar translucent={true}
                     backgroundColor='rgba(255,255,255,0)'/>
                    <Image
                        style={styles.BigImage}
                        source={{uri:BigImage}}
                    />
                </View>

            :
                <ActivityIndicator/>
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    BigImageView:{
    },
    BigImage:{
        width:'100%',
        height:370,
        marginTop:-60,
        zIndex:-1,
    }
});
